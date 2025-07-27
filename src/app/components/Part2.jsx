import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/select";

const Part2 = ({setCurrentPage,setPart,formData,setFormData}) => {
  const { windows, roof, walls, wr, rw, ww, wwr } = formData;

  const [errors, setErrors] = useState({});

  const handleNext = async () => {
      const newErrors = {};
      if (!windows) newErrors.windows = true;
      if (!roof) newErrors.roof = true;
      if (!walls) newErrors.walls = true;
      if (!wr) newErrors.wr = true;
      if (!rw) newErrors.rw = true;
      if (!ww) newErrors.ww = true;
      if (!wwr) newErrors.wwr = true;

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        const userId = Math.random().toString(36).substring(2, 10);
        console.log("🔍 Form Data:", formData);
        const fullData = { ...formData, userId };
        console.log("📦 Full Payload Sent to Sheet:", fullData);


        try {
          console.log("🚀 Sending Data to Google Sheet:", fullData);
          const response = await fetch("https://script.google.com/macros/s/AKfycbzdCBW0NwDbmDKrx1OAgNZFE3qPgZpiHwxRfOCTXneJ9H7ICJ-jYdBAPw9jj406ulKOjw/exec", {
            method: "POST",
            mode: 'no-cors',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(fullData),
          });
        } catch (error) {
          console.error("❌ Error submitting to Google Sheets:", error);
        }finally{
          setCurrentPage("visualize")
        }
      }
    };


    const selectBorder = (field) =>
      `rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center ${
        errors[field] ? "border-red-500" : ""
    }`;

  return (
   <div className="relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="bg-white/45 rounded-b-2xl pt-6 pb-12">
        <div className="space-y-4 mx-12">
          {/* windows */}
          <div className="flex items-center gap-4">
            <div className="bg-white/90 rounded-full pl-6 pr-[139px] py-2  w-[30%]">
              <span className="font-medium">Windows: </span>
            </div>
            <div className="flex-1">
              <Select value={windows} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, windows: value }))
                }>
                <SelectTrigger className={selectBorder("windows")}>
                  <SelectValue placeholder="-- Number of windows --" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl border z-50">
                  <SelectItem value="ground" className="border-b font-medium">Ground floor (G)</SelectItem>
                  <SelectItem value="ground-1" className="border-b font-medium">Ground + 1 floor (G+1)</SelectItem>
                  <SelectItem value="ground-2" className="font-medium">Ground + 2 floors (G+2)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Roof */}
          <div className="flex items-center gap-4">
            <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 w-[30%]">
              <span className="font-medium">Roof: </span>
            </div>
            <div className="flex-1">
              <Select value={roof} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, roof: value }))
                }>
                <SelectTrigger className={selectBorder("roof")}>
                  <SelectValue placeholder="-- Select Roof --" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl border z-50">
                  <SelectItem value="windows" className="rounded-xl font-medium border-b">Windows</SelectItem>
                  <SelectItem value="walls" className="rounded-xl font-medium border-b">Walls</SelectItem>
                  <SelectItem value="roof" className="rounded-xl font-medium border-b">Roof</SelectItem>
                  <SelectItem value="all" className="rounded-xl font-medium border-b">Windows + Walls + Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* Walls */}
          <div className="flex items-center gap-4">
            <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 w-[30%]">
              <span className="font-medium">Walls: </span>
            </div>
            <div className="flex-1">
              <Select value={walls} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, walls: value }))
                }>
                <SelectTrigger className={selectBorder("walls")}>
                  <SelectValue placeholder="-- Select Walls --" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl border z-50">
                  <SelectItem value="windows" className="rounded-xl font-medium border-b">Windows</SelectItem>
                  <SelectItem value="walls" className="rounded-xl font-medium border-b">Walls</SelectItem>
                  <SelectItem value="roof" className="rounded-xl font-medium border-b">Roof</SelectItem>
                  <SelectItem value="all" className="rounded-xl font-medium border-b">Windows + Walls + Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* W+R */}
          <div className="flex items-center gap-4">
            <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 w-[30%]">
              <span className="font-medium">Window + Roof: </span>
            </div>
            <div className="flex-1">
              <Select value={wr} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, wr: value }))
                }>
                <SelectTrigger className={selectBorder("wr")}>
                  <SelectValue placeholder="-- Select Window + Roof --" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl border z-50">
                  <SelectItem value="windows" className="rounded-xl font-medium border-b">Windows</SelectItem>
                  <SelectItem value="walls" className="rounded-xl font-medium border-b">Walls</SelectItem>
                  <SelectItem value="roof" className="rounded-xl font-medium border-b">Roof</SelectItem>
                  <SelectItem value="all" className="rounded-xl font-medium border-b">Windows + Walls + Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* R + W */}
          <div className="flex items-center gap-4">
            <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 w-[30%]">
              <span className="font-medium">Roof + Walls: </span>
            </div>
            <div className="flex-1">
              <Select value={rw} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, rw: value }))
                }>
                <SelectTrigger className={selectBorder("rw")}>
                  <SelectValue placeholder="-- Select Roof + Walls --" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl border z-50">
                  <SelectItem value="windows" className="rounded-xl font-medium border-b">Windows</SelectItem>
                  <SelectItem value="walls" className="rounded-xl font-medium border-b">Walls</SelectItem>
                  <SelectItem value="roof" className="rounded-xl font-medium border-b">Roof</SelectItem>
                  <SelectItem value="all" className="rounded-xl font-medium border-b">Windows + Walls + Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* W + W */}
          <div className="flex items-center gap-4">
            <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 w-[30%]">
              <span className="font-medium">Window + Walls : </span>
            </div>
            <div className="flex-1">
              <Select value={ww} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, ww: value }))
                }>
                <SelectTrigger className={selectBorder("ww")}>
                  <SelectValue placeholder="-- Select Window + Walls --" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl border z-50">
                  <SelectItem value="windows" className="rounded-xl font-medium border-b">Windows</SelectItem>
                  <SelectItem value="walls" className="rounded-xl font-medium border-b">Walls</SelectItem>
                  <SelectItem value="roof" className="rounded-xl font-medium border-b">Roof</SelectItem>
                  <SelectItem value="all" className="rounded-xl font-medium border-b">Windows + Walls + Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          {/* W + W + R */}
          <div className="flex items-center gap-4">
            <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 w-[30%]">
              <span className="font-medium">Window + Walls + Roof: </span>
            </div>
            <div className="flex-1">
              <Select value={wwr} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, wwr: value }))
                }>
                <SelectTrigger className={selectBorder("wwr")}>
                  <SelectValue placeholder="-- Select Window + Walls + Roof --" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-2xl border z-50">
                  <SelectItem value="windows" className="rounded-xl font-medium border-b">Windows</SelectItem>
                  <SelectItem value="walls" className="rounded-xl font-medium border-b">Walls</SelectItem>
                  <SelectItem value="roof" className="rounded-xl font-medium border-b">Roof</SelectItem>
                  <SelectItem value="all" className="rounded-xl font-medium border-b">Windows + Walls + Roof</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className={`flex justify-between items-center mt-4 }`}>
            <button onClick={()=>setPart("part1")} className='bg-white/75 hover:bg-white px-8 py-1 rounded-full border'>Back</button>
            <button onClick={handleNext}  className ='bg-white/75 hover:bg-white px-8 py-1 rounded-full border'>Next</button>
          </div>
        </div>

      </div>
    </div>
   </div>
  )
}

export default Part2
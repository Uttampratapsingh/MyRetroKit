import React, { useEffect, useState } from 'react';
import { Input } from "../UI/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/select";

const Part1 = ({ setPart, setCurrentPage,setFormData,formData }) => {
  const { builtUpArea, areaUnit, numberOfStoreys, envelopeComponent} = formData;

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("🧪 Area Unit Selected:", areaUnit);
  }, [areaUnit]);

  const handleNext = () => {
    const newErrors = {};
    if (!builtUpArea) newErrors.builtUpArea = true;
    if (!areaUnit) newErrors.areaUnit = true;
    if (!numberOfStoreys) newErrors.numberOfStoreys = true;
    if (!envelopeComponent) newErrors.envelopeComponent = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setPart("part2");
    }
  };

  return (
    <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/45 rounded-b-2xl pt-6 pb-12">
          <div className="space-y-12 mx-12">
            {/* City Display */}
            <div className="flex items-center gap-4">
              <div className="bg-white/90 rounded-full pl-6 pr-60 py-2 min-w-[200px]">
                <span className="font-medium">City:</span>
              </div>
              <div className="flex-1">
                <div className="bg-white/90 rounded-full px-6 py-2 max-w-sm text-center border">
                  <span className="">{formData.city}</span>
                </div>
              </div>
            </div>

            {/* Built-up Area */}
            <div className="flex items-center gap-3">
              <div className="bg-white/90 rounded-full pl-6 pr-44 py-2 min-w-[200px]">
                <span className="font-medium">Built-up Area:</span>
              </div>
              <div className="flex-1 flex gap-2">
                <Input
                  type="number"
                  placeholder="-- Enter numeric value--"
                  value={builtUpArea}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, builtUpArea: e.target.value }))
                  }
                  className={`bg-white/90 rounded-full px-12 py-2 max-w-sm text-center border text-6xl placeholder-black font-medium ${errors.builtUpArea ? 'border-red-500' : ''}`}
                />
                <Select value={areaUnit} onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, areaUnit: value }))
                }>
                  <SelectTrigger className={`bg-white/90 rounded-full py-2 font-medium border ${errors.areaUnit ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="-- Select unit --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded-2xl border z-50">
                    <SelectItem value="sqft">Square feet (sq.ft.)</SelectItem>
                    <SelectItem value="sqm">Square meters (sq.m.)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Number of Storeys */}
            <div className="flex items-center gap-4">
              <div className="bg-white/90 rounded-full pl-6 pr-[139px] py-2 min-w-[200px]">
                <span className="font-medium">Number of Storeys:</span>
              </div>
              <div className="flex-1">
                <Select value={numberOfStoreys} onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, numberOfStoreys: value }))
                }>
                  <SelectTrigger className={`rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center ${errors.numberOfStoreys ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="-- Number of floors --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded-2xl border z-50">
                    <SelectItem value="ground">Ground floor (G)</SelectItem>
                    <SelectItem value="ground-1">Ground + 1 floor (G+1)</SelectItem>
                    <SelectItem value="ground-2">Ground + 2 floors (G+2)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Envelope Component */}
            <div className="flex items-center gap-4">
              <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 min-w-[200px]">
                <span className="font-medium">Building envelope component:</span>
              </div>
              <div className="flex-1">
                <Select value={envelopeComponent} onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, envelopeComponent: value }))
                }>
                  <SelectTrigger className={`rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center ${errors.envelopeComponent ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="-- Select envelope component --" />
                  </SelectTrigger>
                  <SelectContent className="bg-white rounded-2xl border z-50">
                    <SelectItem value="windows">Windows</SelectItem>
                    <SelectItem value="walls">Walls</SelectItem>
                    <SelectItem value="roof">Roof</SelectItem>
                    <SelectItem value="all">Windows + Walls + Roof</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button onClick={() => setCurrentPage("guide")} className="bg-white/75 hover:bg-white px-8 py-1 rounded-full border">Back</button>
              <button onClick={handleNext} className="bg-white/75 hover:bg-white px-8 py-1 rounded-full border">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part1;

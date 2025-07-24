import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/select";

const VisualizePage = () => {
  const [windows, setWindows] = useState("");
  const [roof, setRoof] = useState("");
  const [walls, setWalls] = useState("");

  return (
    <div className="z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/45 rounded-b-2xl pt-6 pb-5">
          <div className="space-y-4 mx-12 relative">
              {/* windows */}
            <div className="flex items-center gap-4">
              <div className="bg-white/70 rounded-full pl-6 pr-[139px] py-2  w-[30%]">
                <span className="font-medium">Windows: </span>
              </div>
              <div className="flex-1">
                <Select value={windows} onValueChange={setWindows}>
                  <SelectTrigger className="rounded-full font-medium px-6 bg-white/70 border w-full justify-center text-center">
                    <SelectValue placeholder="-- Select --" />
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
              <div className="bg-white/70 rounded-full pl-6 pr-16 py-2 w-[30%]">
                <span className="font-medium">Roof: </span>
              </div>
              <div className="flex-1">
                <Select value={roof} onValueChange={(value) => {
                      setRoof(value);
                  }}>
                  <SelectTrigger className="rounded-full font-medium px-6 bg-white/70 border w-full justify-center text-center">
                    <SelectValue placeholder="-- Select --" />
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
              <div className="bg-white/70 rounded-full pl-6 pr-16 py-2 w-[30%]">
                <span className="font-medium">Walls: </span>
              </div>
              <div className="flex-1">
                <Select value={walls} onValueChange={(value) => {
                      setWalls(value);
                  }}>
                  <SelectTrigger className="rounded-full font-medium px-6 bg-white/70 border w-full justify-center text-center">
                    <SelectValue placeholder="-- Select --" />
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
            {/* image and left text */}
            <div className='flex justify-between'>
              <div className=''>
                  <h1 className='text-xl bg-white/90 rounded-full pr-12 pl-9 py-1 tracking-wider'>Expected Energy Demand reduction <br /> (per annum):</h1>
                  <h2 className='text-xl bg-white/50 rounded-full pr-12 pl-9 py-1 tracking-wider'>insert % value for energy reduction*</h2>
                  <h1 className='text-xl bg-white/90 rounded-full pr-12 pl-9 py-1 mt-6 tracking-wider'>Expected Electricity cost saving <br /> (per annum):</h1>
                  <h2 className='text-xl bg-white/50 rounded-full pr-12 pl-9 py-1 tracking-wider'>insert % value for cost saving*</h2>
              </div>
              <img src="/house-ground-only.jpg" alt="Home image" className="w-80 h-52" />
            </div>
            {/* disclaimer */}
            <p> <span className='font-medium'>Disclaimer:</span> All images used in this description are AI-generated using Canva's image generation tool. These visuals are intended solely for conceptual representation and illustrative purposes. They do not depict actual retrofit products, materials, or real-world outcomes.</p>
            <div className='absolute bottom-40 right-1/3 rotate-150' >
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisualizePage
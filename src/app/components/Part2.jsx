import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/select";

const Part2 = () => {
  const [windows, setWindows] = useState("");
  const [roof, setRoof] = useState("");
  const [walls, setWalls] = useState("");
  const [wr, setWR] = useState("");
  const [rw, setRW] = useState("");
  const [ww, setWW] = useState("");
  const [wwr, setWWR] = useState("");



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
              <Select value={windows} onValueChange={setWindows}>
                <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
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
              <Select value={roof} onValueChange={(value) => {
                    setRoof(value);
                }}>
                <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
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
              <Select value={walls} onValueChange={(value) => {
                    setWalls(value);
                }}>
                <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
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
              <Select value={wr} onValueChange={(value) => {
                    setWR(value);
                }}>
                <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
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
              <Select value={rw} onValueChange={(value) => {
                    setRW(value);
                }}>
                <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
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
              <Select value={ww} onValueChange={(value) => {
                    setWW(value);
                }}>
                <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
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
              <Select value={wwr} onValueChange={(value) => {
                    setWWR(value);
                }}>
                <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
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
        </div>
      </div>
    </div>
   </div>
  )
}

export default Part2
import React, { useState } from 'react'
import { Input } from "../UI/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/select";


const Part1 = ({setPart}) => {
    const [city, setCity] = useState("Bhubaneswar");
    const [builtUpArea, setBuiltUpArea] = useState("");
    const [areaUnit, setAreaUnit] = useState("");
    const [numberOfStoreys, setNumberOfStoreys] = useState("");
    const [envelopeComponent, setEnvelopeComponent] = useState("");

  return (
      <div className="relative z-10">
        {/* Retrofit Form */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/45 rounded-b-2xl pt-6 pb-12">
            <div className="space-y-12 mx-12">
              {/* City Selection */}
              <div className="flex items-center gap-4">
                <div className="bg-white/90 rounded-full pl-6 pr-60 py-2 min-w-[200px]">
                  <span className="font-medium">City:</span>
                </div>
                <div className="flex-1">
                  <div className="bg-white/90 rounded-full px-6 py-2 max-w-sm text-center border">
                    <span className="">{city}</span>
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
                    placeholder="-- Enter numeric value--"
                    value={builtUpArea}
                    onChange={(e) => setBuiltUpArea(e.target.value)}
                    className="bg-white/90 rounded-full px-12 py-2 max-w-sm text-center border text-6xl placeholder-black font-medium"
                  />
                  <Select value={areaUnit} onValueChange={setAreaUnit}>
                    <SelectTrigger className="bg-white/90 rounded-full py-2 font-medium">
                      <SelectValue placeholder="-- Select unit --" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-2xl border z-50">
                      <SelectItem value="sqft" className="rounded-xl font-medium border-b">Square feet (sq.ft.)</SelectItem>
                      <SelectItem value="sqm" className="rounded-xl font-medium">Square meters (sq.m.)</SelectItem>
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
                  <Select value={numberOfStoreys} onValueChange={setNumberOfStoreys}>
                    <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
                      <SelectValue placeholder="-- Number of floors --" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-2xl border z-50">
                      <SelectItem value="ground" className="border-b font-medium">Ground floor (G)</SelectItem>
                      <SelectItem value="ground-1" className="border-b font-medium">Ground + 1 floor (G+1)</SelectItem>
                      <SelectItem value="ground-2" className="font-medium">Ground + 2 floors (G+2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Building Envelope Component */}
              <div className="flex items-center gap-4">
                <div className="bg-white/90 rounded-full pl-6 pr-16 py-2 min-w-[200px]">
                  <span className="font-medium">Building envelope component:</span>
                </div>
                <div className="flex-1">
                  <Select value={envelopeComponent} onValueChange={(value) => {
                        setEnvelopeComponent(value);
                        setPart("part2");
                    }}>
                    <SelectTrigger className="rounded-full font-medium px-6 bg-white/90 border w-full justify-center text-center">
                      <SelectValue placeholder="-- Select envelope component --" />
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

export default Part1
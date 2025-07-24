"use client"
import React, { useState } from 'react';
import { Search } from "lucide-react";

const HomePage = ({onSeeHowItWorks}) => {
  const [showRetrofitContent, setShowRetrofitContent] = useState(false);


  const handleSearchClick = () => {
    setShowRetrofitContent(prev => !prev);
    };

  return (
    <div>

      {/* Content */}
      <div className="relative min-h-screen z-10 p-6 pr-[40px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 mx-[60px]">
          <div className="bg-white/60 rounded-full pr-[250px] pl-8 py-3 mt-3">
            <h1 className="text-xl font-black" style={{ fontFamily: 'var(--font-fredoka)' }}>MyRetroKit.in</h1>
          </div>
          <div className="bg-white/60 rounded-full px-4 py-2 mt-3">
            <span className="font-black" >#Pick_your_retrofit</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8 mt-12">
          <div className="relative bg-white/95 rounded-full px-2 border-4">
            <div className="flex items-center">
              <input
                placeholder="Is your house making you and your wallet sweat??"
                className="flex-1 border-0 bg-transparent text-2xl px-6 py-4 font-black tracking-wider rounded-full focus-visible:ring-0 focus:outline-none text-amber-800"
                readOnly
              />
              <button
                onClick={handleSearchClick}
                className="rounded-full px-8 py-3 text-amber-700"
              >
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Retrofit Content */}
        {showRetrofitContent && (
          <div className="max-w-6xl mx-auto">
            <div>
              <div className="text-center mb-8 border max-w-xl mx-auto rounded-4xl p-2 bg-white/20">
                <h2 className="text-2xl font-black text-retrofit-dark mb-4">
                  Ready to Cut Costs and Boost Comfort?
                </h2>
                <p className="text-lg mb-2 font-black">
                  Take a quick check to see how much you could save
                </p>
                <p className="text-lg font-black">
                  — and start your Retrofit journey to a smarter, cooler home.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/60 rounded-full px-2 py-3 text-center">
                  <span className="font-semibold text-retrofit-dark">#SaveOnEnergyBills</span>
                </div>
                <div className="bg-white/60 rounded-full px-2 py-3 text-center">
                  <span className="font-semibold text-retrofit-dark">#BoostPropertyValue</span>
                </div>
                <div className="bg-white/60 rounded-full px-2 py-3 text-center">
                  <span className="font-semibold text-retrofit-dark">#YearRoundComfort</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                <div className="bg-white/60 rounded-full px-2 py-3 text-center">
                  <span className="font-semibold text-retrofit-dark">#HealthyHomes</span>
                </div>
                <div className="bg-white/60 rounded-full px-2 py-3 text-center">
                  <span className="font-semibold text-retrofit-dark">#ClimateResilientLiving</span>
                </div>
                <div className="bg-white/60 rounded-full px-2 py-3 text-center">
                  <span className="font-semibold text-retrofit-dark">#SustainableFuture</span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="text-2xl font-bold bg-white rounded-4xl px-9 py-2">
                  Save more. Live better. Build greener.
                </div>
                <button
                    onClick={onSeeHowItWorks}
                    className="bg-[#6b4f3a] text-white py-3 pl-12 pr-8 text-lg font-black hover:bg-[#5a4231] transition-colors rounded-tl-full rounded-bl-full rounded-tr-4xl rounded-br-full rounded-tr-full"
                    >
                    See how it works!
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

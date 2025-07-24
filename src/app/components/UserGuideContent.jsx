import React, { useState } from 'react'
import houseGroundOnly from "../../../public/house-ground-only.jpg";
import houseGroundPlusOne from "../../../public/house-ground-plus-one.jpg";
import houseGroundPlusTwo from "../../../public/house-ground-plus-two.jpg";

const UserGuideContent = () => {
    const guideSteps = [
        "How to select units for measuring the building area:",
        "Selecting the number of storeys in your house:",
        "Selecting the city:",
        "Selecting building envelope component:",
        "Selecting construction assembly options for Windows, Roof or Walls:"
    ];

    const toggleStep = (stepIndex) => {
        setExpandedStep(expandedStep === stepIndex ? null : stepIndex);
    };

    const [expandedStep, setExpandedStep] = useState(null);


  return (
    <div className="max-w-6xl mx-auto">
        <div className="bg-white/45 px-12 rounded-b-2xl min-h-[400px] pt-3">
        <div className="space-y-1">
            {guideSteps.map((step, index) => (
            <div key={index}>
                <div
                className={`rounded-2xl py-1 px-5 cursor-pointer transition-colors bg-white/80 ${
                    index === 1 ? 'hover:shadow-md' : ''
                }`}
                onClick={() => index === 1 && toggleStep(index)}
                >
                <h3 className="text-lg font-semibold text-amber-900 ">
                    {index + 1}. {step}
                </h3>
                </div>

                {/* Expanded content for step 2 */}
                {expandedStep === 1 && index === 1 && (
                <div className="mt-1 bg-white/25 rounded-4xl p-2 border border-dashed border-black">
                    <p className="text-lg font-black mb-2 bg-white/80 px-4 py-1 rounded-full">
                    Please select between the options for your low-rise single-family residential building unit:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <img
                        src={houseGroundOnly.src}
                        alt="Ground-floor only house"
                        className="w-60 h-40 object-fit rounded-lg mx-auto"
                        />
                        <h4 className="font-semibold">Ground-floor only</h4>
                    </div>

                    <div className="text-center">
                        <img
                        src={houseGroundPlusOne.src}
                        alt="Ground +1 floor house"
                        className="w-60 h-40 object-cover rounded-lg mx-auto"
                        />
                        <h4 className="font-semibold text-retrofit-dark">Ground +1 floor</h4>
                    </div>

                    <div className="text-center">
                        <img
                        src={houseGroundPlusTwo.src}
                        alt="Ground +2 floor house"
                        className="w-60 h-40 object-cover rounded-lg mx-auto"
                        />
                        <h4 className="font-semibold text-retrofit-dark">Ground +2 floor</h4>
                    </div>
                    </div>

                    <div className="text-sm rounded-lg">
                    <strong>Disclaimer:</strong> All images used in this description are AI-generated using Canva's image generation tool.
                    These visuals are intended solely for conceptual representation and illustrative purposes. They do not depict actual
                    retrofit products, materials, or real-world outcomes.
                    </div>
                </div>
                )}
            </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default UserGuideContent
import React from 'react'

const NavigationTab = ({onBack,setCurrentPage}) => {
  return (
    <div className="max-w-6xl mx-auto">
          <div className="bg-white/45 rounded-t-2xl pt-2 ">
            <div className="flex flex-wrap justify-start ml-12 pb-1">
              <button
                onClick={onBack}
                className="rounded-full bg-white/50 hover:bg-white/80 px-4 py-2 text-sm font-medium border border-black/40"
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage("guide")}
                className="rounded-full bg-white/50 hover:bg-white/90 px-4 py-2 text-sm font-medium border border-black/40"
              >
                User Guide
              </button>
              <button
                onClick={() => setCurrentPage("retrofit")}
                className="rounded-full bg-white/50 hover:bg-white/80 px-4 py-2 text-sm font-medium border border-black/40"
              >
                #Pick_your_retrofit
              </button>
              <button
                onClick={() => setCurrentPage("visualize")}
                className="rounded-full bg-white/50 hover:bg-white/80 px-4 py-2 text-sm font-medium border border-black/40"
              >
                Visualize
              </button>
              <button
                onClick={() => setCurrentPage("feedback")}
                className="rounded-full bg-white/50 hover:bg-white/80 px-4 py-2 text-sm font-medium border border-black/40"
              >
                Feedback
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className="rounded-full bg-white/50 hover:bg-white/80 px-4 py-2 text-sm font-medium border border-black/40"
              >
                About Us and Contact
              </button>
            </div>
          </div>
        </div>
  )
}

export default NavigationTab
import React from 'react';

const NavigationTab = ({currentPage, setCurrentPage }) => {
  const tabItems = [
    { label: "Home", page: "home" },
    { label: "User Guide", page: "guide" },
    { label: "#Pick_your_retrofit", page: "retrofit" },
    { label: "Visualize", page: "visualize" },
    { label: "Feedback", page: "feedback" },
    { label: "About Us and Contact", page: "about" },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white/45 rounded-t-2xl pt-2">
        <div className="flex flex-wrap justify-start ml-12 pb-1 gap-2">
          {tabItems.map((tab) => (
            <button
              key={tab.page}
              className={`rounded-full px-4 py-2 text-sm font-medium border border-black/40 transition-all duration-200
                ${
                  currentPage === tab.page
                    ? "bg-white"
                    : "bg-white/50"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationTab;

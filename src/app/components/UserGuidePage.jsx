import { useState } from "react";

import NavigationTab from "./NavigationTab";
import UserGuideContent from "./UserGuideContent";
import RetroFitFormPage from "./RetroFitFormPage";
import VisualizePage from "./VisualizePage";
import FeedbackPage from "./FeedbackPage";
import About from "./About";

const UserGuidePage = ({ onBack, setCurrentPage,currentPage }) => {
  
  return (
    <>
      {/* Content */}
      <div className="relative z-10 min-h-screen p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 ml-[60px]">
          <div className="bg-white/60 rounded-full pr-[250px] pl-8 py-3 mt-3">
            <h1 className="text-xl font-black" style={{ fontFamily: 'var(--font-fredoka)' }}>MyRetroKit.in</h1>
          </div>
        </div>

        {/* Navigation Tabs */}
        <NavigationTab onBack={onBack} setCurrentPage={setCurrentPage}/>
        
        {/* User Guide Content */}
        {currentPage==="guide" && (<UserGuideContent/>)}

        {/* Retro Fit Form Page  */}
        {currentPage==="retrofit" && (<RetroFitFormPage/>)}

        {/* Visualize Page  */}
        {currentPage==="visualize" && (<VisualizePage/>)}

        {/* Feedback Page  */}
        {currentPage==="feedback" && (<FeedbackPage/>)}

        {/* About Page  */}
        {currentPage==="about" && (<About/>)}
      </div>
    </>
  );
};

export default UserGuidePage;
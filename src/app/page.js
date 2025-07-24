'use client'
import { useState } from "react";
import HomePage from "./components/HomePage";
import UserGuidePage from "./components/UserGuidePage";
// import RetrofitFormPage from "./components/RetrofitFormPage";
import BackgroundWrapper from "./components/BackgroundWrapper";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleSeeHowItWorks = () => setCurrentPage("guide");
  const handleBackToHome = () => setCurrentPage("home");

  // Define background image path
  const backgroundImage = "/BG_Cropped.png";

  return (
    <BackgroundWrapper>
      {(currentPage === "guide" || currentPage === "retrofit" || currentPage==="visualize" || currentPage==="feedback" || currentPage==="about") && (
        <UserGuidePage
          onBack={handleBackToHome}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {currentPage === "home" && (
        <HomePage onSeeHowItWorks={handleSeeHowItWorks} />
      )}
    </BackgroundWrapper>
  );
}

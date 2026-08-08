import { useState } from "react";
import "./App.css";
import CVSection from "./Components/CVSection.jsx";
import Contact from "./Components/Contact.jsx";
import LanguageButton from "./Components/LanguageButton.jsx";
import PortfolioHeader from "./Components/Portfolio/PortfolioHeader.jsx";
import PortfolioFooter from "./Components/Portfolio/PortfolioFooter.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [language, setLanguage] = useState("english");

  function handleLanguageButtonClick(currentLanguage) {
    setLanguage(currentLanguage === "english" ? "japanese" : "english");
  }

  return (
    <div className="portfolio-page">
      <PortfolioHeader
        language={language}
        handleLanguageButtonClick={handleLanguageButtonClick}
      />

      <div className="portfolio-layout">
        <aside className="studio-sidebar" id="profile">
          <LanguageButton
            language={language}
            handleLanguageButtonClick={handleLanguageButtonClick}
            mobileView={true}
          />
          <Contact language={language} />
        </aside>

        <main className="portfolio-main">
          <CVSection language={language} />
        </main>
      </div>

      <PortfolioFooter language={language} />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import CVSection from "./Components/CVSection.jsx";
import Contact from "./Components/Contact.jsx";
import LanguageButton from "./Components/LanguageButton.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [language, setLanguage] = useState("english");

  function handleLanguageButtonClick(currentLanguage) {
    setLanguage(currentLanguage === "english" ? "japanese" : "english");
  }

  return (
    <div className="cv-page">
      <header className="document-header">
        <div>
          <p className="document-kicker mb-2">
            {language === "english" ? "Curriculum Vitae" : "履歴書"}
          </p>
          <h1 className="document-title mb-2">Arastoo Khajehee</h1>
          <p className="document-subtitle mb-0">
            {language === "english"
              ? "R&D Engineer · PhD Student, The University of Tokyo · Computational Design and Robotics"
              : "研究開発エンジニア · 東京大学博士課程 · コンピュテーショナルデザインとロボティクス"}
          </p>
        </div>
        <LanguageButton
          language={language}
          handleLanguageButtonClick={handleLanguageButtonClick}
          mobileView={false}
        />
      </header>

      <div className="document-layout">
        <aside className="profile-panel">
          <LanguageButton
            language={language}
            handleLanguageButtonClick={handleLanguageButtonClick}
            mobileView={true}
          />
          <Contact language={language} />
        </aside>

        <main className="cv-document">
          <CVSection language={language} />
        </main>
      </div>

      <footer className="document-footer">
        <span>React CV by Arastoo Khajehee</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;

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
    <div className="portfolio-page">
      <header className="portfolio-header">
        <nav className="topline" aria-label="Portfolio navigation">
          <a href="#works">{language === "english" ? "Index" : "索引"}</a>
          <a href="#profile">{language === "english" ? "Profile" : "プロフィール"}</a>
          <a href="#contact">{language === "english" ? "Contact" : "連絡先"}</a>
          <LanguageButton
            language={language}
            handleLanguageButtonClick={handleLanguageButtonClick}
            mobileView={false}
          />
        </nav>

        <section className="hero-studio" id="top">
          <p className="studio-mark">AK / Portfolio</p>
          <h1>
            Arastoo Khajehee <span>CV as a body of work.</span>
          </h1>
          <div className="hero-meta">
            <p>
              {language === "english"
                ? "Architecture, computational design, robotics, fabrication, and software research presented as project pages and a studio index."
                : "建築、コンピュテーショナルデザイン、ロボティクス、ファブリケーション、ソフトウェア研究をスタジオ索引として再構成。"}
            </p>
            <p className="hero-location">Tokyo / Tehran / Digital Practice</p>
          </div>
        </section>
      </header>

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

      <footer className="portfolio-footer">
        <a href="#top">{language === "english" ? "Back to top" : "トップへ戻る"}</a>
        <span>Arastoo Khajehee / Portfolio CV / {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default App;

import LanguageButton from "../LanguageButton.jsx";

export default function PortfolioHeader({ language, handleLanguageButtonClick }) {
  return (
    <header className="portfolio-header">
      <nav className="topline" aria-label="Portfolio navigation">
        <a href="#works">{language === "english" ? "Index" : "索引"}</a>
        <a href="#projects">{language === "english" ? "Projects" : "プロジェクト"}</a>
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
  );
}

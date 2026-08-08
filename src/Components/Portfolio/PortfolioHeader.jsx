import LanguageButton from "../LanguageButton.jsx";
import heroProject from "../../assets/portfolio/project_04.png";

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

      <section className="hero-studio hero-project" id="top">
        <div className="hero-project-media" aria-hidden="true">
          <img src={heroProject} alt="" />
        </div>

        <div className="hero-project-label">
          <p className="studio-mark">AK / Portfolio</p>
          <p className="project-status">{language === "english" ? "Landing project / 00" : "ランディングプロジェクト / 00"}</p>
        </div>

        <div className="hero-name-plate">
          <h1>
            Arastoo Khajehee <span>CV as a body of work.</span>
          </h1>
        </div>

        <div className="hero-meta">
          <p>
            {language === "english"
              ? "The landing page now works as the first project: a visual entry into architecture, computational design, robotics, fabrication, and software research."
              : "ランディングページを最初のプロジェクトとして構成し、建築、計算設計、ロボティクス、ファブリケーション、ソフトウェア研究への視覚的な入口にしました。"}
          </p>
          <a className="hero-project-link" href="#projects">
            {language === "english" ? "View project index" : "プロジェクト索引を見る"}
          </a>
        </div>
      </section>
    </header>
  );
}

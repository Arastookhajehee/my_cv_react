import LanguageButton from "../LanguageButton.jsx";
import { galleryLink } from "../../assets/visualReference.js";

export default function PortfolioHeader({ language, handleLanguageButtonClick }) {
  const remosharpImage = "https://www.remosharp.com/static/visuals/Overal%20Diagram.jpg";

  return (
    <header className="portfolio-header">
      <nav className="topline" aria-label="Portfolio navigation">
        <a className="topline-product" href="https://www.remosharp.com/" target="_blank" rel="noopener noreferrer">RemoSharp</a>
        <a href="#works">{language === "english" ? "Index" : "索引"}</a>
        <a href="#cv">{language === "english" ? "CV" : "CV"}</a>
        <a href="#profile">{language === "english" ? "Profile" : "プロフィール"}</a>
        <a href="#contact">{language === "english" ? "Contact" : "連絡先"}</a>
        <LanguageButton language={language} handleLanguageButtonClick={handleLanguageButtonClick} mobileView={false} />
      </nav>
      <section className="hero-studio hero-project blog-hero" id="top">
        <div className="hero-project-media gallery-link-surface image-surface" aria-hidden="true"><img src={galleryLink} alt="" /></div>
        <div className="hero-project-label"><p className="studio-mark">AK / Portfolio</p><p className="project-status">{language === "english" ? "Computational design / fabrication / tools" : "コンピュテーショナルデザイン / 制作 / ツール"}</p></div>
        <div className="hero-name-plate"><h1>Arastoo Khajehee <span>CV and project archive.</span></h1></div>
        <a className="remosharp-feature" href="https://www.remosharp.com/" target="_blank" rel="noopener noreferrer">
          <div className="remosharp-copy">
            <span>{language === "english" ? "Grasshopper collaboration plugin" : "Grasshopper協働プラグイン"}</span>
            <strong>RemoSharp</strong>
            <p>{language === "english" ? "Remote collaboration for Grasshopper: live canvas synchronization for components, wires, sketches, and scribbles, plus RemoLibrary for saving, searching, and reusing script fragments through a shared database." : "Grasshopperのためのリモート協働環境。コンポーネント、ワイヤ、スケッチ、書き込みをライブ同期し、RemoLibraryでスクリプト断片を共有データベースに保存・検索・再利用します。"}</p>
            <em>www.remosharp.com</em>
          </div>
          <figure className="remosharp-image"><img src={remosharpImage} alt="RemoSharp collaborative Grasshopper diagram" /></figure>
        </a>
        <div className="hero-meta"><p>{language === "english" ? "Research, professional work, publications, teaching, grants, software tools, robotics, and fabrication experiments." : "研究、実務、出版、教育、助成、ソフトウェアツール、ロボティクス、ファブリケーション実験。"}</p><a className="hero-project-link" href="#cv">{language === "english" ? "View CV" : "CVを見る"}</a></div>
      </section>
    </header>
  );
}

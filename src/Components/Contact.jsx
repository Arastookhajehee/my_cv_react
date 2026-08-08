import profilePic from "../assets/Profile_centered.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact({ language }) {
  return (
    <>
      <img className="profile-img" src={profilePic} alt="Arastoo Khajehee" />
      <h1 className="contact-name my-3 text-center fw-bold">Arastoo Khajehee</h1>
      {language !== "english" && (
        <div className="d-flex flex-lg-column justify-content-center">
          <h2 className="text-center me-1 mx-lg-0 black-text">ハージェイー</h2>
          <h2 className="text-center ms-1 black-text">アラストゥー</h2>
        </div>
      )}

      <div className="contact-section">
        <h2>{language === "english" ? "Affiliation" : "所属"}</h2>
        <ul>
          <li>{language === "english" ? "R&D Engineer at Haseman" : <>研究開発エンジニア<br />ハセマン</>}</li>
          <li>{language === "english" ? "PhD student at The University of Tokyo" : "東京大学博士課程"}</li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>{language === "english" ? "Web + Social" : "ウェブサイトとSNS"}</h2>
        <ul>
          <li><a className="social-link" href="https://www.remosharp.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-globe2" /> RemoSharp</a></li>
          <li><a className="social-link" href="https://www.youtube.com/@arastookhajehee1570" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube text-red-color" /> YouTube</a></li>
          <li><a className="social-link" href="https://www.instagram.com/kh.arastoo/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram instagram-color-text" /> Instagram</a></li>
          <li><a className="social-link" href="https://github.com/Arastookhajehee" target="_blank" rel="noopener noreferrer"><i className="bi bi-github" /> GitHub</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>{language === "english" ? "Emails" : "メール"}</h2>
        <ul>
          <li><a href="mailto:a.khajehee@gmail.com">{language === "english" ? "Personal" : "個人"}</a></li>
          <li><a href="mailto:khajehee.arastoo@haseman.co.jp">{language === "english" ? "Company" : "会社"}</a></li>
          <li><a href="mailto:arastoo@arch1.t.u-tokyo.ac.jp">{language === "english" ? "University" : "大学"}</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>{language === "english" ? "Languages" : "言語"}</h2>
        <ul>
          <li>{language === "english" ? "Persian: Native" : "ペルシャ語: 母語"}</li>
          <li>{language === "english" ? "English: Fluent (iBT 112)" : "英語: 流暢 (iBT 112)"}</li>
          <li>{language === "english" ? "Japanese: Business-Level" : "日本語: ビジネスレベル"}</li>
        </ul>
      </div>
    </>
  );
}

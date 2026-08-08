import profilePic from "../assets/Profile_centered.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Contact({ language }) {
  return (
    <>
      <img className="profile-img" src={profilePic} alt="Arastoo Khajehee" />
      <div className="identity-block">
        <h2>Arastoo Khajehee</h2>
        {language !== "english" && <p>ハージェイー アラストゥー</p>}
      </div>

      <div className="contact-section">
        <h3>{language === "english" ? "Practice" : "所属"}</h3>
        <ul>
          <li>{language === "english" ? "R&D Engineer at Haseman" : <>研究開発エンジニア<br />ハセマン</>}</li>
          <li>{language === "english" ? "PhD student at The University of Tokyo" : "東京大学博士課程"}</li>
        </ul>
      </div>

      <div className="contact-section" id="contact">
        <h3>{language === "english" ? "Links" : "リンク"}</h3>
        <ul>
          <li><a className="social-link contact-product-link" href="https://www.remosharp.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-globe2" /> RemoSharp</a></li>
          <li><a className="social-link" href="https://www.youtube.com/@arastookhajehee1570" target="_blank" rel="noopener noreferrer"><i className="bi bi-youtube" /> YouTube</a></li>
          <li><a className="social-link" href="https://www.instagram.com/kh.arastoo/" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram" /> Instagram</a></li>
          <li><a className="social-link" href="https://github.com/Arastookhajehee" target="_blank" rel="noopener noreferrer"><i className="bi bi-github" /> GitHub</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h3>{language === "english" ? "Email" : "メール"}</h3>
        <ul>
          <li><a href="mailto:a.khajehee@gmail.com">a.khajehee@gmail.com</a></li>
          <li><a href="mailto:khajehee.arastoo@haseman.co.jp">Haseman</a></li>
          <li><a href="mailto:arastoo@arch1.t.u-tokyo.ac.jp">University of Tokyo</a></li>
        </ul>
      </div>

      <div className="contact-section">
        <h3>{language === "english" ? "Languages" : "言語"}</h3>
        <ul>
          <li>{language === "english" ? "Persian / Native" : "ペルシャ語 / 母語"}</li>
          <li>{language === "english" ? "English / Fluent" : "英語 / 流暢"}</li>
          <li>{language === "english" ? "Japanese / Business" : "日本語 / ビジネス"}</li>
        </ul>
      </div>
    </>
  );
}

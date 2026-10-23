import profilePic from "../assets/Profile_centered.jpg";

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

import profile_pic from "../assets/Profile_centered.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Contact({language}) {
  return (
    <>
      <img className="profile-img mt-3" src={profile_pic} alt="Arastoo Khajehee" />
      <h1 className="my-3 text-uppercase text-center fw-bold">
        Arastoo Khajehee
        
      </h1>
      {language !== "english" && (
        <div className="d-flex flex-lg-column justify-content-center">
            <h2 className="text-center me-1 mx-lg-0 black-text">ハージェイー</h2>
            <h2 className="text-center ms-1 black-text">アラストゥー</h2>
        </div>
      )
      }
      <div className="px-3 py-1">

      
      <h2 className="mt-3">{language === "english" ? "Affilation" : "所属"}</h2>
      <ul className="">
        <li>
          <h3 className="my-1 text-justify">{language === "english" ? "Consultant at Vicc Ltd." : "株式会社ヴィックのコンサルタント"}</h3>
        </li>
        <li>
          <h3 className="my-1 text-justify">
          {language === "english" ? "Project Academic Specialist at The University of Tokyo" : "東京大学の学術専門職員"}<br />
          {language === "english" ? "(Part-time)" : "(パートタイム)"}
          
          </h3>
        </li>
      </ul>

      <h2 className="mt-3">{language === "english" ? "Website and Social Media" : "ウェブサイトとSNS"}</h2>
      <ul className="">
        <li>
          <a
            href="https://www.remosharp.com/"
            target="_blank"
            rel=""
          >
            www.RemoSharp.com
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@arastookhajehee1570"
            target="_blank"
            rel=""
          >
            <i class="bi bi-youtube me-1 text-red-color"></i>YouTube
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/kh.arastoo/"
            target="_blank"
            rel=""
          >
            <i class="bi bi-instagram me-1 instagram-color-text"></i>Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Arastookhajehee"
            target="_blank"
            rel=""
          >
            <i class="bi bi-github me-1 black-text"></i>GitHub
          </a>
        </li>
      </ul>

      <h2 className="mt-3">{language === "english" ? "Emails" : "メール"}</h2>
      <ul className="">
        <li>
          <a href="mailto:a.khajehee@gmail.com">{language === "english" ? "Personal" : "個人"}</a>
        </li>
        <li>
          <a href="mailto:arastoo.khajehee@vicc.jp">{language === "english" ? "Company" : "会社"}</a>
        </li>
        <li>
          <a href="mailto:arastoo@arch1.t.u-tokyo.ac.jp">{language === "english" ? "University" : "大学"}</a>
        </li>
      </ul>

      <h2 className="mt-3">{language === "english" ? "Languages" : "言語"}</h2>
      <ul className="">
        <li>{language === "english" ? "Persian: Native" : "ペルシャ語: 母語"}</li>
        <li>{language === "english" ? "English: Fluent (iBT 112)" : "英語: 流暢 (iBT 112)"}</li>
        <li>{language === "english" ? "Japanese: Business-Level" : "日本語: ビジネスレベル"}</li>
      </ul>
    </div>
    </>
  );
}

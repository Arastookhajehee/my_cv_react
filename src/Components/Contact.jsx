import profile_pic from "../assets/Profile_centered.jpg";

export default function Contact() {
  return (
    <div className="contact-info border border-1 border-secondary rounded-4 p-3 mb-3">
      <img className="profile-img" src={profile_pic} alt="Arastoo Khajehee" />
      <h1 className="my-3 text-uppercase text-center fw-bold">
        Arastoo Khajehee
      </h1>

      <h2 className="mt-3">Affilation</h2>
      <ul className="">
        <li>
          <h3 className="my-1 text-justify">Consultant at Vicc Ltd.</h3>
        </li>
        <li>
          <h3 className="my-1 text-justify">
            Project Academic Specialist at The University of Tokyo<br />(Part-time)
          </h3>
        </li>
      </ul>

      <h2 className="mt-3">Website and SNS:</h2>
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
            href="https://www.instagram.com/kh.arastoo/"
            target="_blank"
            rel=""
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Arastookhajehee"
            target="_blank"
            rel=""
          >
            GitHub
          </a>
        </li>
      </ul>

      <h2 className="mt-3">Emails:</h2>
      <ul className="">
        <li>
          <a href="mailto:a.khajehee@gmail.com">Personal</a>
        </li>
        <li>
          <a href="mailto:arastoo@arch1.t.u-tokyo.ac.jp">UTokyo</a>
        </li>
      </ul>

      <h2 className="mt-3">Languages:</h2>
      <ul className="">
        <li>Persian: Native</li>
        <li>English: Fluent (iBT 109)</li>
        <li>Japanese: Business-Level</li>
      </ul>
    </div>
  );
}

export default function CVEntry({ current, year, title, author, description, location, link, language }) {
  const nowStamp = language === "english" ? " → now" : " → 現在";

  return (
    <article className="cv-entry row align-items-start">
      <div className="col-12 col-md-2 mb-2 mb-md-0">
        <span className="year-pill">{year}{current ? nowStamp : ""}</span>
      </div>
      <div className="col-12 col-md-10">
        <h3 className="entry-title mb-1">{title}</h3>
        {author ? <h4 className="entry-author mb-2">{author}</h4> : null}
        {description ? <p className="entry-description mb-1">{description}</p> : null}
        {location ? <p className="entry-location mb-0">{location}</p> : null}
        {link ? (
          <a className="entry-link" href={link} target="_blank" rel="noopener noreferrer">
            View link <i className="bi bi-arrow-up-right ms-1" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

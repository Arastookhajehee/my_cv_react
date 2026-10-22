const slugify = (value) =>
  value
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\u3040-\u30ff\u3400-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";

export default function CVEntry({
  current,
  year,
  title,
  author,
  description,
  location,
  link,
  language,
  itemNumber,
  sectionSlug,
}) {
  const nowStamp = language === "english" ? "–present" : "–現在";
  const itemId = `${sectionSlug}-${slugify(title || itemNumber)}`;

  return (
    <article className="portfolio-entry" id={itemId}>
      <a className="entry-index" href={`#${itemId}`} aria-label={`Link to ${title}`}>
        {itemNumber}
      </a>
      <div className="entry-year">{year}{current ? nowStamp : ""}</div>
      <div className="entry-body">
        <h3>{title}</h3>
        {author ? <p className="entry-author">{author}</p> : null}
        {description ? <p className="entry-description">{description}</p> : null}
        <div className="entry-actions">
          {location ? <span>{location}</span> : null}
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {language === "english" ? "Open reference" : "参照を開く"} <i className="bi bi-arrow-up-right" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

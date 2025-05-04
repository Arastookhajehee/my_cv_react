export default function CVEntry({ current, year, month, title, author, description, location, link, language }) {

  const nowStamp = language === "english" ? " ~ now" : " ~ 現在";
  return (
    <div className="row">
      <div className="col-2 col-lg-1">
        <div className="text-sm mt-2 text-gray-600 italic">{year}{current ? nowStamp : ""}</div>
      </div>
      <div className="col-10 col-lg-11">
        <h3 className="text-xl fw-bold mt-2 pb-0">{title}</h3>
        <h3 className="text-md text-gray-500 fw-bold pb-0">{author}</h3>
        <p className="text-sm mb-0 pb-0">{description}</p>
        <p className="text-sm mb-0 pb-0">{location}</p>
        {link ? <a className="text-sm text-blue-500 hover:underline" href={link} target="_blank" rel="noopener noreferrer">Link</a> : null}

      </div>
    </div>
  );
}

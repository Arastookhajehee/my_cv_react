const CVEntry = ({ current, year, month, title, author, description, location, link }) => (
  <div className="row">
    <div className="col-1">
      <div className="text-sm mt-2 text-gray-600 italic">{year}{current ? " ~ now" : ""}</div>
    </div>
    <div className="col-11">
        <h3 className="text-xl fw-bold mt-2">{title}</h3>
        <h3 className="text-md text-gray-500 fw-bold">{author}</h3>
        <p className="text-sm mb-0 pb-0">{location}</p>
        <p className="text-sm mb-0 pb-0">{description}</p>
        {link ? <a className="text-sm text-blue-500 hover:underline" href={link} target="_blank" rel="noopener noreferrer">Link</a> : null}
        
    </div>
  </div>
);

export default CVEntry;

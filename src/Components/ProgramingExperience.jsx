const programs = {
  Grasshopper: 7,
  "C#": 5,
  Python: 5,
  "Django / HTML / CSS / JS": 1,
  "React / SQL": 0.5,
  KRL: 1,
};

export default function ProgrammingExperience({ language }) {
  const yearLabel = language === "english" ? "years" : "年";

  return (
    <aside className="tools-panel">
      <p>{language === "english" ? "Technical tools" : "技術ツール"}</p>
      <div>
        {Object.entries(programs).map(([program, years]) => (
          <span key={program}>
            {program} · {years} {yearLabel}
          </span>
        ))}
      </div>
    </aside>
  );
}

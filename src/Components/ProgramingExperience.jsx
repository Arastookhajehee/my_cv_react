const programs = {
  Grasshopper: 7,
  "C#": 5,
  Python: 5,
  "Django, HTML, CSS, JS": 1,
  "React + SQL": 0.5,
  KRL: 1,
};

export default function ProgrammingExperience({ language }) {
  const yearLabel = language === "english" ? "year" : "年";

  return (
    <section className="fade-in">
      <h3 className="programming-title fw-bold my-3 py-3 border-bottom border-2">
        {language === "english" ? "Programming Experience" : "プログラミング経験"}
      </h3>
      <div className="programming-grid">
        {Object.entries(programs).map(([program, years]) => (
          <span className="skill-chip" key={program}>
            <strong>{program}</strong>: {years} {language === "english" && years > 1 ? "years" : yearLabel}
          </span>
        ))}
      </div>
    </section>
  );
}

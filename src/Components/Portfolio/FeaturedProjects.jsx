import portfolioProjects from "../../assets/portfolioProjects.js";

export default function FeaturedProjects({ language }) {
  return (
    <section className="featured-projects" id="projects">
      <div className="projects-heading motion-rise">
        <p className="section-label">{language === "english" ? "Project placeholders" : "プロジェクト・プレースホルダー"}</p>
        <h2>{language === "english" ? "Ten generated project pages for the portfolio direction." : "ポートフォリオ方向性のための10件の生成プロジェクトページ。"}</h2>
      </div>

      <div className="project-grid">
        {portfolioProjects.map((project, index) => (
          <a
            className="project-card motion-rise"
            href={project.href}
            key={project.title}
            style={{ "--stagger": `${index * 55}ms` }}
          >
            <figure>
              <img src={project.image} alt={language === "english" ? project.title : project.jpTitle} />
            </figure>
            <div className="project-caption">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{language === "english" ? project.title : project.jpTitle}</h3>
              <p>{project.type} / {project.year}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

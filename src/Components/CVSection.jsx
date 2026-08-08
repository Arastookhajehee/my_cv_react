import cvData from "../assets/cv_data.js";
import cvDataJP from "../assets/cv_data_jp.js";
import CVEntry from "./CVEntry.jsx";
import ProgrammingExperience from "./ProgramingExperience.jsx";
import FeaturedProjects from "./Portfolio/FeaturedProjects.jsx";

const slugify = (value) =>
  value
    .toString()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\u3040-\u30ff\u3400-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "") || "section";

const groupByCategory = (data) => {
  return data.reduce((acc, entry) => {
    if (!acc[entry.category]) acc[entry.category] = [];
    acc[entry.category].push(entry);
    acc[entry.category].sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return (b.month || 0) - (a.month || 0);
    });
    return acc;
  }, {});
};

const CVSection = ({ language }) => {
  const grouped = groupByCategory(language === "english" ? cvData : cvDataJP);
  const categories = Object.entries(grouped);
  const totalItems = categories.reduce((sum, [, entries]) => sum + entries.length, 0);

  return (
    <>
      <section className="portfolio-intro" id="works">
        <div>
          <p className="section-label">{language === "english" ? "Work index" : "業績索引"}</p>
          <h2>{language === "english" ? "Selected CV pages, organized like studio work." : "スタジオ作品のように整理した履歴書ページ。"}</h2>
        </div>
        <p>
          {language === "english"
            ? `${totalItems} entries across research, professional practice, publications, teaching, grants, and technical development. Use the index cards as page links.`
            : `${totalItems}件の項目を、研究、実務、出版、教育、助成、技術開発として整理しています。索引カードから各ページへ移動できます。`}
        </p>
      </section>

      <section className="category-grid" aria-label="Portfolio pages">
        {categories.map(([cat, entries], index) => (
          <a className="category-card" href={`#${slugify(cat)}`} key={cat}>
            <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
            <h3>{cat}</h3>
            <span>{entries.length} {language === "english" ? "items" : "件"}</span>
          </a>
        ))}
      </section>

      <FeaturedProjects language={language} />

      <section className="studio-rule" aria-hidden="true" />

      {categories.map(([cat, entries], categoryIndex) => (
        <section className="portfolio-section" id={slugify(cat)} key={cat}>
          <div className="section-heading">
            <span>{String(categoryIndex + 1).padStart(2, "0")}</span>
            <div>
              <p>{language === "english" ? "Portfolio page" : "ポートフォリオページ"}</p>
              <h2>{cat}</h2>
            </div>
          </div>

          <div className="entry-list">
            {entries.map((entry, index) => (
              <CVEntry
                language={language}
                key={`${cat}-${index}`}
                itemNumber={`${String(categoryIndex + 1).padStart(2, "0")}.${String(index + 1).padStart(2, "0")}`}
                sectionSlug={slugify(cat)}
                {...entry}
              />
            ))}
          </div>

          {(cat === "Professional Experience" || cat === "職歴") && (
            <ProgrammingExperience language={language} />
          )}
        </section>
      ))}
    </>
  );
};

export default CVSection;

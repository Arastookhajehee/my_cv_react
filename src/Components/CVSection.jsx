import { useEffect, useState } from "react";
import cvData from "../assets/cv_data.js";
import cvDataJP from "../assets/cv_data_jp.js";
import CVEntry from "./CVEntry.jsx";
import ProgrammingExperience from "./ProgramingExperience.jsx";

const slugify = (value) => value.toString().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^\w\u3040-\u30ff\u3400-\u9fff]+/g, "-").replace(/^-+|-+$/g, "") || "section";
const groupByCategory = (data) => data.reduce((acc, entry) => { if (!acc[entry.category]) acc[entry.category] = []; acc[entry.category].push(entry); acc[entry.category].sort((a, b) => { if (b.year !== a.year) return b.year - a.year; return (b.month || 0) - (a.month || 0); }); return acc; }, {});

const CVSection = ({ language }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const grouped = groupByCategory(language === "english" ? cvData : cvDataJP);
  const categories = Object.entries(grouped);
  const totalItems = categories.reduce((sum, [, entries]) => sum + entries.length, 0);
  const activeCategory = categories[activeIndex] || categories[0];
  const [cat, entries] = activeCategory;
  const sectionSlug = slugify(cat);

  useEffect(() => {
    setActiveIndex(0);
  }, [language]);

  function cycleCategory(direction) {
    setActiveIndex((current) => (current + direction + categories.length) % categories.length);
  }

  return <><section className="portfolio-intro blog-intro" id="works"><div><p className="section-label">{language === "english" ? "Work index" : "業績索引"}</p><h2>{language === "english" ? "Selected CV pages, organized like studio work." : "スタジオ作品のように整理した履歴書ページ。"}</h2></div><p>{language === "english" ? `${totalItems} entries across research, professional practice, publications, teaching, grants, and technical development. Cycle through one section at a time.` : `${totalItems}件の項目を、研究、実務、出版、教育、助成、技術開発として整理しています。セクションを一つずつ切り替えられます。`}</p></section><section className="category-grid category-cycle" aria-label="CV archive" id="cv">{categories.map(([category, categoryEntries], index) => <button className={`category-card${index === activeIndex ? " is-active" : ""}`} type="button" onClick={() => setActiveIndex(index)} key={category} aria-pressed={index === activeIndex}><span className="card-number">{String(index + 1).padStart(2, "0")}</span><h3>{category}</h3><span>{categoryEntries.length} {language === "english" ? "items" : "件"}</span></button>)}</section><section className="studio-rule" aria-hidden="true" /><section className="cycle-controls" aria-label={language === "english" ? "Cycle CV sections" : "CVセクション切り替え"}><button type="button" onClick={() => cycleCategory(-1)}>{language === "english" ? "Previous" : "前へ"}</button><span>{String(activeIndex + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}</span><button type="button" onClick={() => cycleCategory(1)}>{language === "english" ? "Next" : "次へ"}</button></section><section className="portfolio-section active-cv-section" id={sectionSlug} key={cat}><div className="section-heading"><span>{String(activeIndex + 1).padStart(2, "0")}</span><div><p>{language === "english" ? "CV page" : "CVページ"}</p><h2>{cat}</h2></div></div><div className="entry-list">{entries.map((entry, index) => <CVEntry language={language} key={`${cat}-${index}`} itemNumber={`${String(activeIndex + 1).padStart(2, "0")}.${String(index + 1).padStart(2, "0")}`} sectionSlug={sectionSlug} {...entry} />)}</div>{(cat === "Professional Experience" || cat === "職歴") && <ProgrammingExperience language={language} />}</section></>;
};

export default CVSection;

import cvData from "../assets/cv_data.js";
import cvDataJP from "../assets/cv_data_jp.js";
import categories from "../assets/categories_jp_en.js";
import CVEntry from "./CVEntry.jsx";
import { useState, useEffect } from "react";
import ProgrammingExperience from "./ProgramingExperience.jsx";

const groupByCategory = (data) => {
  return data.reduce((acc, entry) => {
    2
    if (!acc[entry.category]) acc[entry.category] = [];
    acc[entry.category].push(entry);
    acc[entry.category].sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return (b.month || 0) - (a.month || 0);
    });
    return acc;
  }, {});
};

const CVSection = ({language}) => {
  const grouped = groupByCategory(language === "english" ? cvData : cvDataJP);
  const [selectedCategory, setCategory] = useState(language === "english" ? "Professional Experience" : "職歴");
  const [fadeKey, setFadeKey] = useState(0);

  // track the language with useEffect
  useEffect(() => {
    if (!categories || !selectedCategory) return;
  
    // language just changed – we want to map the current category to the new one
    let newCategory;
  
    if (language === "japanese") {
      // Try to map English → Japanese
      newCategory = categories[selectedCategory]; // selectedCategory is English
    } else if (language === "english") {
      // Try to map Japanese → English
      newCategory = Object.keys(categories).find(key => categories[key] === selectedCategory);
    }
  
    if (newCategory) {
      setCategory(newCategory);
    }
  
  }, [language]);
  

  const handleCategoryClick = (cat) => {
    setFadeKey((prev) => prev + 1);
    setCategory(cat);

    // Collapse navbar after click
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      const collapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true,
      });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid mt-1 ms-0 ps-0">
          {/* Toggler for mobile */}
          <button
            className="navbar-toggler rounded-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <h3 className="m-0 p-0 font-bold text-center">☰ CV Categories</h3>
          </button>

          <div className="collapse navbar-collapse my-3 my-lg-0 d-lg-flex justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-center mx-0 px-0">
              {Object.keys(grouped).map((cat) => (
                <li key={cat} className={language === "english" ? "nav-item mx-0 px-0" : "nav-item me-2 px-0"}>
                  <button
                    className={`nav-link btn btn-link mx-1 px-0 my-0 py-1 ${selectedCategory === cat ? "active" : ""
                      }`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <h3>{cat}</h3>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <section className="">
        {Object.entries(grouped).map(([cat, entries]) =>
          cat === selectedCategory ? (
            <div key={fadeKey} className="mb-10 fade-in">
              <h2 className="font-bold mb-3 py-3 border-bottom border-2">
                {cat}
              </h2>
              {entries.map((entry, index) => (
                <CVEntry key={index} {...entry} />
              ))}
            </div>
          ) : null
        )}
      </section>

      {(selectedCategory === "Professional Experience" || selectedCategory === "職歴") && (
        <ProgrammingExperience language={language} />
      )}
    </>
  );
};

export default CVSection;

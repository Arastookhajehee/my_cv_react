import cvData from "../assets/cv_data.js";
import CVEntry from "./CVEntry.jsx";
import { useState } from "react";
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

const CVSection = () => {
  const grouped = groupByCategory(cvData);
  const [selectedCategory, setCategory] = useState("Professional Experience");
  const [fadeKey, setFadeKey] = useState(0);

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
        <div className="container-fluid justify-content-center">
          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <h2 className="m-0 p-0 font-bold text-center">Curriculum Vitae</h2>
          </button>

          <div className="collapse navbar-collapse my-3 my-lg-0" id="navbarNav">
            <ul className="navbar-nav text-center mx-0 px-0">
              {Object.keys(grouped).map((cat) => (
                <li key={cat} className="nav-item mx-0 px-0">
                  <button
                    className={`nav-link btn btn-link mx-1 px-0 my-0 py-1 ${selectedCategory === cat ? "active" : ""
                      }`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <h4>{cat}</h4>
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

      {selectedCategory === "Professional Experience" && (
        <ProgrammingExperience />
      )}
    </>
  );
};

export default CVSection;

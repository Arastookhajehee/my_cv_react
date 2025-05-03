import { useState } from "react";
import "./App.css";
import CVSection from "./Components/CVSection.jsx";
import Contact from "./Components/Contact.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [language, setLanguage] = useState("english");

  function handleLanguageButtonClick(language) {
    if (language === "english") {
      setLanguage("japanese");
    } else {
      setLanguage("english");
    }
  }

  return (
    <>
      <div className="row min-vh-100 align-items-start">
        <div className="col-flex-3 col-lg-3 p-0 px-lg-3 border-1 border-secondary">

          <div className="contact-info border border-1 border-secondary rounded-4 p-3 mb-3">
            <button
              className="btn btn-link px-0 my-0 py-0 text-muted d-block d-lg-none ms-auto"
              onClick={() => handleLanguageButtonClick(language)}
            >
              {language === "english" ? (
                <>
                  <strong>En</strong> / Jp
                </>
              ) : (
                <>
                  En / <strong>Jp</strong>
                </>
              )}
            </button>
            <Contact language={language} />
          </div>
        </div>
        <div className="col-12 col-lg-9 top-border border-1 border-secondary">
          <div className="row justify-content-center">
            <main className="max-w-3xl">
              <div className="d-flex flex-column flex-lg-row align-items-center position-relative my-lg-3">
                <h1 className="mx-4 font-bold mt-4 text-center my-lg-3 d-none d-lg-block position-absolute start-50 translate-middle-x">
                  Curriculum Vitae
                </h1>
                <div className="ms-lg-auto mt-2 mt-lg-0">
                  <button
                    className="btn btn-link mx-1 px-0 my-0 py-1 text-muted d-none d-lg-block"
                    onClick={() => handleLanguageButtonClick(language)}
                  >
                    {language === "english" ? (
                      <>
                        <strong>En</strong> / Jp
                      </>
                    ) : (
                      <>
                        En / <strong>Jp</strong>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <CVSection language={language} />
            </main>
          </div>
        </div>
      </div>

      <footer className="text-center py-2 mt-4 border-top">
        curriculum vitae (cv) website written in React by Arastoo Khajehee
        &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;

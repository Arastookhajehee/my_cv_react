const programs = { "Grasshopper": 7, "C#": 5, "Python": 5, 
    "Django, HTML CSS and JS": 1,
     "React and SQL": 0.5, "KRL": 1 };

export default function ProgramingExperience({language}) {

    const year_language = language === "english" ? "year" : "年";

    return (
        <>
            <h3 className="fw-bold mb-3 py-3 border-bottom border-2 fade-in color-text">
                {language === "english" ? "Programming Experience" : "プログラミング経験"}
            </h3>
            <div className="d-flex-column d-lg-flex mb-10 fade-in justify-content-start justify-content-lg-center">
                {Object.entries(programs).map(([program, years], index) => (
                    <>
                        <div className="d-flex me-2">
                            <h3 className="fw-bold d-flex">{program}:</h3>
                            <h3 className="ms-1">{years} {language === "english" && years > 1 ? "years" : year_language}</h3>
                        </div>
                        
                    </>

                ))}
            </div>
        </>
    );
} 

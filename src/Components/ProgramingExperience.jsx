const programs = { "Grasshopper": 7, "C#": 5, "Python": 5, 
    "Django, HTML CSS and JS": 1,
     "React and SQL": 0.5 };

export default function ProgramingExperience() {
    return (
        <>
            <h3 className="fw-bold mb-3 py-3 border-bottom border-2 fade-in color-text">
                Programming Experience
            </h3>
            <div className="d-flex-column d-lg-flex mb-10 fade-in">
                {Object.entries(programs).map(([program, years], index) => (
                    <>
                        <div className="d-flex mx-2">
                            <h3 className="fw-bold d-flex">{program}:</h3>
                            <h3 className="mx-1">{years} {years > 1 ? "years" : "year"}</h3>
                        </div>
                        
                    </>

                ))}
            </div>
        </>
    );
} 

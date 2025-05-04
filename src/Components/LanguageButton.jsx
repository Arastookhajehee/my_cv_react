export default function LanguageButton({ language, handleLanguageButtonClick, mobileView}) {
    
    const className = mobileView ? "btn btn-link px-0 my-0 py-0 text-muted d-block d-lg-none ms-auto" : 
    "btn btn-link mx-1 px-0 my-0 py-1 text-muted d-none d-lg-block";
    return (
        <button
        className={className}
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
    )};
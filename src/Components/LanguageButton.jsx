export default function LanguageButton({ language, handleLanguageButtonClick, mobileView }) {
  const className = mobileView
    ? "lang-toggle btn px-3 py-2 d-inline-flex d-lg-none ms-auto mb-3"
    : "lang-toggle btn px-3 py-2 d-none d-lg-inline-flex";

  return (
    <button className={className} onClick={() => handleLanguageButtonClick(language)}>
      {language === "english" ? (
        <>
          <strong>En</strong>&nbsp;/&nbsp;Jp
        </>
      ) : (
        <>
          En&nbsp;/&nbsp;<strong>Jp</strong>
        </>
      )}
    </button>
  );
}

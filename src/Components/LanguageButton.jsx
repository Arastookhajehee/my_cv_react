export default function LanguageButton({ language, handleLanguageButtonClick, mobileView }) {
  const className = mobileView
    ? "language-switch d-inline-flex d-lg-none mb-4"
    : "language-switch d-none d-lg-inline-flex";

  return (
    <button className={className} onClick={() => handleLanguageButtonClick(language)}>
      {language === "english" ? (
        <>
          <strong>EN</strong><span>/ JP</span>
        </>
      ) : (
        <>
          <span>EN /</span><strong> JP</strong>
        </>
      )}
    </button>
  );
}

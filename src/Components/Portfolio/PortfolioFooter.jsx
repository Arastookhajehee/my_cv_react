export default function PortfolioFooter({ language }) {
  return (
    <footer className="portfolio-footer">
      <a href="#top">{language === "english" ? "Back to top" : "トップへ戻る"}</a>
      <span>Arastoo Khajehee / Portfolio CV / {new Date().getFullYear()}</span>
    </footer>
  );
}

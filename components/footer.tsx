import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <strong>{portfolioData.person.name}</strong>
          <span>Physics Engineering · Computational Science</span>
        </div>
        <p>
          © {new Date().getFullYear()} · {portfolioData.person.location}
        </p>
      </div>
    </footer>
  );
}

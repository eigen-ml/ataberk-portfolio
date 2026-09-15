import { Lattice } from "@/components/lattice";
import { site, type Content } from "@/data/content";

export function Hero({ copy }: { copy: Content }) {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-glow" aria-hidden="true" />
      <Lattice />
      <div className="hero-veil" aria-hidden="true" />

      <div className="shell">
        <div className="hero-copy">
          <span className="eyebrow hero-eyebrow">{copy.hero.eyebrow}</span>
          <h1 id="hero-title">
            {copy.hero.headlineLead} <span>{copy.hero.headlineAccent}</span>
          </h1>
          <p className="hero-summary">{copy.hero.summary}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={site.cv} download>
              {copy.hero.cv}
            </a>
            <a className="button button-ghost" href="#work">
              {copy.hero.work}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

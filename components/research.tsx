import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

export function Research() {
  return (
    <section
      id="research"
      className="content-section research-section"
      aria-labelledby="research-title"
    >
      <div className="shell">
        <SectionHeading
          id="research-title"
          index="03"
          eyebrow="Research & Technical Interests"
          title="Where physics meets computation."
          description="Areas of continued study and practical experimentation."
        />
        <div className="research-grid">
          {portfolioData.research.map((interest, index) => (
            <article
              key={interest.title}
              className="research-item"
              data-reveal="item"
            >
              <div className="research-index">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{interest.code}</span>
              </div>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

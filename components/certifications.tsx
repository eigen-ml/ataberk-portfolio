import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

export function Certifications() {
  return (
    <section
      className="content-section certifications-section"
      aria-labelledby="certifications-title"
    >
      <div className="shell">
        <SectionHeading
          id="certifications-title"
          index="06"
          eyebrow="Professional Development"
          title="Selected Certifications"
          description="Focused training across quantum computing, optical simulation, HPC and engineering competency."
        />

        <div className="certification-list">
          {portfolioData.certifications.map((certification, index) => (
            <article
              className="certification-item"
              key={certification.title}
              data-reveal="item"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{certification.title}</h3>
                <p>{certification.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

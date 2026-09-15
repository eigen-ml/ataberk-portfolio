import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

export function BeyondEngineering() {
  return (
    <section
      className="content-section beyond-section"
      aria-labelledby="beyond-title"
    >
      <div className="shell">
        <SectionHeading
          id="beyond-title"
          index="07"
          eyebrow="Outside work"
          title="Beyond Engineering"
          description="What I spend time on when I am not in front of a cluster."
        />

        <div className="beyond-grid">
          {portfolioData.beyondEngineering.map((item) => (
            <article key={item.title} data-reveal="item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

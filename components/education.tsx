import { SectionHeading } from "@/components/section-heading";
import { portfolioData } from "@/data/portfolio";

export function Education() {
  return (
    <section
      id="education"
      className="content-section education-section"
      aria-labelledby="education-title"
    >
      <div className="shell">
        <SectionHeading
          id="education-title"
          index="05"
          eyebrow="Education"
          title="Education"
        />
        <div className="education-list">
          {portfolioData.education.map((item, index) => (
            <article
              className="education-item"
              key={item.degree}
              data-reveal="item"
            >
              <div className="education-marker" aria-hidden="true">
                <span />
                <i />
              </div>
              <div className="education-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="education-degree">
                <p>{item.institution}</p>
                <h3>{item.degree}</h3>
              </div>
              <p className="education-focus">{item.focus}</p>
              <span
                className={
                  "education-status " +
                  (item.status === "Ongoing" ? "is-current" : "")
                }
              >
                {item.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  ArrowUpRight,
  Code2,
  Mail,
  SquareUserRound,
} from "lucide-react";
import {
  getProfileHref,
  isConfiguredLink,
  portfolioData,
} from "@/data/portfolio";

const contactItems = [
  {
    key: "email",
    label: "Email",
    value: portfolioData.person.links.email,
    icon: Mail,
    kind: "email" as const,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: portfolioData.person.links.linkedin,
    icon: SquareUserRound,
    kind: "external" as const,
  },
  {
    key: "github",
    label: "GitHub",
    value: portfolioData.person.links.github,
    icon: Code2,
    kind: "external" as const,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-grid" aria-hidden="true" />
      <div className="shell contact-layout" data-reveal="section">
        <div className="contact-copy">
          <p className="eyebrow">08 · Contact</p>
          <h2 id="contact-title">Get in touch</h2>
          <p>
            For computational science, materials modelling, HPC or scientific
            software positions, any of the channels below works.
          </p>
        </div>

        <div className="contact-links">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const configured = isConfiguredLink(item.value);
            const content = (
              <>
                <span className="contact-icon">
                  <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <span className="contact-link-copy">
                  <small>{item.label}</small>
                  <strong>
                    {configured ? item.value : "Add in data/portfolio.ts"}
                  </strong>
                </span>
                <ArrowUpRight
                  className="contact-arrow"
                  size={18}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
              </>
            );

            return configured ? (
              <a
                key={item.key}
                href={getProfileHref(item.value, item.kind)}
                target={item.kind === "external" ? "_blank" : undefined}
                rel={
                  item.kind === "external" ? "noopener noreferrer" : undefined
                }
              >
                {content}
              </a>
            ) : (
              <div className="contact-link-placeholder" key={item.key}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

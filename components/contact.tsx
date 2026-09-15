import { site, type Content } from "@/data/content";

export function Contact({ copy }: { copy: Content }) {
  return (
    <>
      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-inner" data-reveal="section">
          <div>
            <h2 id="contact-title">{copy.contact.heading}</h2>
            <p>{copy.contact.body}</p>
            <p className="aside">{copy.contact.aside}</p>
          </div>

          <a className="contact-email" href={"mailto:" + site.email}>
            {site.email} &rarr;
          </a>
        </div>
      </section>

      <footer>
        <div className="shell site-footer">
          <span>{copy.footer.rights}</span>
          <span style={{ display: "flex", gap: "1.25rem" }}>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

import type { Content } from "@/data/content";

export function Work({ copy }: { copy: Content }) {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="shell">
        <span className="eyebrow" id="work-title">
          {copy.work.index}
        </span>
      </div>

      <div className="shell" style={{ marginTop: "2.25rem" }}>
        {copy.work.items.map((item, index) => (
          <article className="work-row" key={item.title} data-reveal="item">
            <div className="work-mark" aria-hidden="true">
              {index === 0 ? (
                <>
                  <span className="work-halo" />
                  <span className="work-core" />
                </>
              ) : index === 1 ? (
                <svg viewBox="0 0 64 64" width="64" height="64">
                  <polygon
                    points="32,8 52,20 52,44 32,56 12,44 12,20"
                    fill="none"
                    stroke="#c77cff"
                    strokeWidth="1.6"
                    opacity="0.8"
                  />
                  <circle cx="32" cy="32" r="4" fill="#c77cff" />
                </svg>
              ) : (
                <svg viewBox="0 0 64 64" width="64" height="64">
                  <g stroke="#9fb2ff" strokeWidth="1.6" fill="none" opacity="0.85">
                    <rect x="10" y="12" width="44" height="8" />
                    <rect x="10" y="28" width="44" height="8" />
                    <rect x="10" y="44" width="44" height="8" />
                  </g>
                  <circle cx="18" cy="16" r="2.2" fill="#c77cff" />
                  <circle cx="18" cy="32" r="2.2" fill="#c77cff" />
                  <circle cx="18" cy="48" r="2.2" fill="#9fb2ff" />
                </svg>
              )}
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
            </div>

            <div className="work-meta">
              <span>{item.meta}</span>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.linkLabel}
                </a>
              ) : (
                <span>{item.note}</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

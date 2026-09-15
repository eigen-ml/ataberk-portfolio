import type { Content } from "@/data/content";

export function Training({ copy }: { copy: Content }) {
  return (
    <section className="section" id="training" aria-labelledby="training-title">
      <div className="shell">
        <span className="eyebrow" id="training-title">
          {copy.training.index}
        </span>

        <div className="training-grid" style={{ marginTop: "1.75rem" }} data-reveal="section">
          {copy.training.items.map((item) => (
            <div className="training-item" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Fragment } from "react";
import type { Content } from "@/data/content";

export function Trajectory({ copy }: { copy: Content }) {
  const items = copy.trajectory.items;

  return (
    <section className="section" id="trajectory" aria-labelledby="trajectory-title">
      <div className="shell">
        <div className="section-head">
          <span className="eyebrow">{copy.trajectory.index}</span>
          <h2 id="trajectory-title">{copy.trajectory.heading}</h2>
        </div>

        <div className="trajectory">
          {items.map((item, index) => (
            <Fragment key={item.role + item.period}>
              <div
                className="trajectory-period"
                data-current={item.current ? "true" : undefined}
              >
                {item.period}
              </div>

              <div
                className="trajectory-rail"
                data-last={index === items.length - 1 ? "true" : undefined}
                aria-hidden="true"
              >
                <span
                  className="trajectory-node"
                  data-current={item.current ? "true" : undefined}
                />
              </div>

              <div className="trajectory-entry" data-reveal="item">
                <h3>{item.role}</h3>
                <div className="trajectory-place">{item.place}</div>
                {item.summary ? <p>{item.summary}</p> : null}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

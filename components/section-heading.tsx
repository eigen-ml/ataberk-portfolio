type SectionHeadingProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="section-heading" data-reveal="section-heading">
      <div className="section-kicker">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-title-row">
        <h2 id={id}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}

const TONES = {
  cream: 'bg-cream text-matcha-deep',
  beige: 'bg-beige text-ink',
  terracotta: 'bg-terracotta text-on-dark-100',
  espresso: 'bg-espresso text-beige',
} as const;

/**
 * The opening of a category page. The 280vh arch belongs to the home hero and
 * nowhere else, so an inside page opens on type: eyebrow, headline, one line.
 *
 * `title` may carry newlines; they become line breaks.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  tone = 'cream',
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: keyof typeof TONES;
}) {
  const lines = title.split('\n');

  return (
    <header
      className={`${TONES[tone]} px-[var(--section-x)] pb-[clamp(40px,6vw,80px)] pt-[clamp(150px,20vh,240px)]`}
    >
      <div className="mx-auto max-w-[1100px]">
        <div data-reveal className="t-eyebrow">
          {eyebrow}
        </div>
        <h1 data-reveal className="t-h2 mt-5">
          {lines.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {i === lines.length - 1 && lines.length > 1 ? (
                <span className="italic">{line}</span>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>
        {lead && (
          <p data-reveal className="t-body-lg mt-7 max-w-[620px]">
            {lead}
          </p>
        )}
      </div>
    </header>
  );
}

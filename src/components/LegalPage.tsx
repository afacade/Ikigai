import Link from 'next/link';

/**
 * Shell for the two pages German law requires. Plain, cream, no motion — these
 * pages are read, not scrolled through.
 */
export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-cream px-[var(--section-x)] pb-[clamp(80px,10vw,140px)] pt-[clamp(150px,20vh,240px)] text-matcha-deep">
      <div className="mx-auto max-w-[680px]">
        <Link href="/" className="t-nav-link no-underline hover:text-matcha">
          ← back
        </Link>
        <h1 className="t-h2-visit mt-10">{title}</h1>
        <div className="legal mt-12">{children}</div>
      </div>
    </div>
  );
}

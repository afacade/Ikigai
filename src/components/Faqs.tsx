import { FAQS } from '@/content/faqs';

/**
 * The faqs page. Native <details> so it works without JavaScript, survives the
 * static export, and prints the way a question list should.
 */
export default function Faqs() {
  return (
    <section className="bg-cream px-[var(--section-x)] pb-[clamp(80px,10vw,140px)] text-matcha-deep">
      <div className="mx-auto max-w-[840px]">
        {FAQS.map((group) => (
          <div key={group.name} className="mt-[clamp(48px,6vw,88px)] first:mt-0">
            <h2 data-reveal className="t-eyebrow text-wood">
              {group.name}
            </h2>
            <div className="mt-6">
              {group.items.map((item) => (
                <details
                  key={item.q}
                  className="group border-t border-[var(--hairline-cream)] py-[22px]"
                >
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 [&::-webkit-details-marker]:hidden">
                    <span className="t-upcoming-title">{item.q}</span>
                    <span
                      aria-hidden
                      className="t-body shrink-0 text-matcha transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="t-body m-0 mt-4 max-w-[620px] text-matcha-text-2">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

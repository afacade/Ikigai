import Image from 'next/image';
import { INTRO_CIRCLES } from '@/content/photos';

/**
 * The intro statement over five feathered circular photographs, each at its own
 * parallax speed. The speed sits on an inner element so the measured parent is
 * never itself transformed.
 */
export default function IntroCircles() {
  return (
    <section className="relative box-border min-h-[140vh] overflow-hidden bg-cream px-[var(--section-x)] py-[clamp(110px,14vw,180px)] text-matcha-deep">
      <div data-reveal className="t-statement relative z-1 max-w-[1000px]">
        Ceremonial matcha, whisked to order
        <br />
        Run clubs, chess nights &amp; workshops
        <br />
        <span className="italic">A third place in Berlin Mitte</span>
      </div>

      {INTRO_CIRCLES.map((c) => (
        <div
          key={c.src + c.left}
          className="absolute aspect-square"
          style={{ left: c.left, top: c.top, width: c.size }}
        >
          <div data-speed={c.speed} className="feathered absolute inset-0">
            <Image
              src={c.src}
              alt={c.alt}
              fill
              sizes="(max-width: 768px) 40vw, 26vw"
              className="object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

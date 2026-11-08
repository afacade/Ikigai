import Image from '@/components/Img';
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
        we whisk ceremonial matcha to order.
        <br />
        run clubs, chess nights and workshops fill the rest of the week.
        <br />
        <span className="italic">this is a third place in berlin mitte.</span>
      </div>

      {INTRO_CIRCLES.map((c) => (
        <div
          key={c.src + c.left}
          className="absolute aspect-square"
          style={
            {
              '--left': c.left,
              '--size': c.size,
              // The percentage lefts are a wide-screen collage: at phone widths
              // the right-hand circles run past the edge and the section's
              // overflow-hidden slices them. Cap the width to the section and
              // pull the left in far enough that the whole circle still fits.
              left: 'min(var(--left), calc(100% - var(--size) - 12px))',
              width: 'min(var(--size), calc(100% - 24px))',
              top: c.top,
            } as React.CSSProperties
          }
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

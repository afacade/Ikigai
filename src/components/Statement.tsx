/** "Come for the matcha." — the centred statement that names the place. */
export default function Statement() {
  return (
    <section className="bg-cream px-5 py-[clamp(80px,12vw,170px)] text-center text-matcha-deep">
      <div data-reveal>
        <div className="t-wordmark-xl">ikigai</div>
        <div lang="ja" className="t-jp-inline mt-2">
          生き甲斐
        </div>
      </div>

      <div data-reveal className="t-eyebrow mt-14">
        A reason for being
      </div>

      <h2 data-reveal className="t-h2 mx-auto mt-6 max-w-[1100px]">
        Come for the matcha. Stay for the people.
      </h2>

      <p data-reveal className="t-body-lg mx-auto mt-7 max-w-[560px]">
        Stone-ground matcha, a long wooden table and a calendar full of things to do together.
        Whoever you are, there&rsquo;s a seat for you.
      </p>

      <div data-reveal className="mt-10 flex flex-wrap justify-center gap-[14px]">
        <a href="#drinks" className="pill pill-filled t-button-label">
          Menu
        </a>
        <a href="#moments" className="pill pill-outline t-button-label">
          Events
        </a>
      </div>
    </section>
  );
}

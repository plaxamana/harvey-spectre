const HEADLINE_CLASSES =
  "whitespace-nowrap font-light text-[clamp(2rem,7vw,96px)] text-black tracking-[-0.08em] leading-[0.84]";

const LABEL_CLASSES =
  "font-mono text-[14px] leading-[1.1] text-[#1f1f1f] normal-case";

export default function IntroStatement() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-30">
      <div className="mx-auto flex max-w-360 flex-col gap-6">
        <div className="flex flex-col items-end gap-3">
          <p className={`w-full text-right uppercase ${LABEL_CLASSES}`}>
            [ 8+ years in industry ]
          </p>
          <div className="h-px w-full bg-[#1f1f1f]/20" />
        </div>

        {/* Mobile: centered stack */}
        <div className="flex flex-col items-center gap-2 text-center uppercase md:hidden">
          <div className="flex flex-col items-center gap-3">
            <p className={LABEL_CLASSES}>001</p>
            <p className={HEADLINE_CLASSES}>{`A creative director   /`}</p>
          </div>
          <p className={HEADLINE_CLASSES}>Photographer</p>
          <p className={HEADLINE_CLASSES}>
            Born <span className="font-serif italic">&amp;</span> raised
          </p>
          <p className={HEADLINE_CLASSES}>on the south side</p>
          <div className="flex flex-col items-center gap-3">
            <p className={HEADLINE_CLASSES}>of chicago.</p>
            <p className={LABEL_CLASSES}>[ creative freelancer ]</p>
          </div>
        </div>

        {/* Desktop: staggered layout */}
        <div className="hidden flex-col gap-2 uppercase md:flex">
          <div className="flex w-full items-start gap-3">
            <p className={HEADLINE_CLASSES}>{`A creative director   /`}</p>
            <span className={LABEL_CLASSES}>001</span>
          </div>
          <div className="flex w-full pl-[15.6%]">
            <p className={HEADLINE_CLASSES}>Photographer</p>
          </div>
          <div className="flex w-full pl-[44.3%]">
            <p className={HEADLINE_CLASSES}>
              Born <span className="font-serif italic">&amp;</span> raised
            </p>
          </div>
          <div className="flex w-full">
            <p className={HEADLINE_CLASSES}>on the south side</p>
          </div>
          <div className="flex w-full items-end gap-4 pl-[44%]">
            <p className={HEADLINE_CLASSES}>of chicago.</p>
            <span className={`mb-[6px] ${LABEL_CLASSES}`}>
              [ creative freelancer ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

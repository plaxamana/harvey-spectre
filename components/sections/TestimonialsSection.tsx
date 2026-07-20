import Image, { type StaticImageData } from "next/image";
import testimonialLogoLukas from "@/public/images/testimonial-logo-lukas.svg";
import testimonialLogoMarko from "@/public/images/testimonial-logo-marko.svg";
import testimonialLogoSarah from "@/public/images/testimonial-logo-sarah.svg";
import testimonialLogoSofia from "@/public/images/testimonial-logo-sofia.svg";

type Testimonial = {
  logo: StaticImageData;
  logoWidth: number;
  logoHeight: number;
  quote: string;
  name: string;
  desktopRotation: string;
  mobileRotation: string;
  /** Center point of the desktop card, as a % of the container. */
  desktopPosition: { left: string; top: string };
};

// Listed in DOM/paint order for the desktop layout — Lukas Weber
// intentionally comes before the heading below so it sits behind it, while
// the rest come after so they sit in front. No z-index needed: stacking
// just follows source order (as long as every sibling is positioned).
const TESTIMONIALS: Testimonial[] = [
  {
    logo: testimonialLogoLukas,
    logoWidth: 138,
    logoHeight: 19,
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    desktopRotation: "2.9deg",
    mobileRotation: "2.9deg",
    desktopPosition: { left: "59.5%", top: "37.9%" },
  },
  {
    logo: testimonialLogoMarko,
    logoWidth: 143,
    logoHeight: 19,
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    desktopRotation: "-6.85deg",
    mobileRotation: "-3.5deg",
    desktopPosition: { left: "20.3%", top: "29.3%" },
  },
  {
    logo: testimonialLogoSarah,
    logoWidth: 109,
    logoHeight: 31,
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don’t just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    desktopRotation: "2.23deg",
    mobileRotation: "2.23deg",
    desktopPosition: { left: "33.8%", top: "70.2%" },
  },
  {
    logo: testimonialLogoSofia,
    logoWidth: 81,
    logoHeight: 36,
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    desktopRotation: "-4.15deg",
    mobileRotation: "2deg",
    desktopPosition: { left: "81.3%", top: "66.9%" },
  },
];

function TestimonialCardContent({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex w-[260px] flex-col items-start gap-4 rounded border border-[#ddd] bg-[#f1f1f1] p-6 md:w-[353px]">
      <Image
        src={testimonial.logo}
        alt=""
        width={testimonial.logoWidth}
        height={testimonial.logoHeight}
      />
      <p className="text-[18px] leading-[1.3] tracking-[-0.72px] text-[#1f1f1f]">
        {testimonial.quote}
      </p>
      <p className="text-[16px] font-black uppercase leading-[1.1] tracking-[-0.64px] text-black">
        {testimonial.name}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <>
      {/* Mobile & tablet: swipeable horizontal strip */}
      <section className="px-4 py-16 md:px-8 lg:hidden">
        <div className="flex flex-col items-center gap-8">
          <h2 className="text-center text-[64px] font-medium capitalize leading-[0.8] tracking-[-0.07em] text-black">
            Testimonials
          </h2>
          <div className="scrollbar-hide -mx-4 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-2">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="shrink-0 snap-center py-4"
                style={{ transform: `rotate(${testimonial.mobileRotation})` }}
              >
                <TestimonialCardContent testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop: scattered layout around the heading */}
      <section className="hidden px-8 py-30 lg:block">
        <div className="relative isolate mx-auto flex min-h-[987px] max-w-360 items-center justify-center">
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: TESTIMONIALS[0].desktopPosition.left, top: TESTIMONIALS[0].desktopPosition.top }}
          >
            <div style={{ transform: `rotate(${TESTIMONIALS[0].desktopRotation})` }}>
              <TestimonialCardContent testimonial={TESTIMONIALS[0]} />
            </div>
          </div>

          <h2 className="relative text-center text-[198px] font-medium capitalize leading-[1.1] tracking-[-0.07em] text-black">
            Testimonials
          </h2>

          {TESTIMONIALS.slice(1).map((testimonial) => (
            <div
              key={testimonial.name}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: testimonial.desktopPosition.left, top: testimonial.desktopPosition.top }}
            >
              <div style={{ transform: `rotate(${testimonial.desktopRotation})` }}>
                <TestimonialCardContent testimonial={testimonial} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

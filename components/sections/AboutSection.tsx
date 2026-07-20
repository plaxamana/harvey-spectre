import clsx from "clsx";
import Image from "next/image";
import CornerBracket from "@/components/ui/CornerBracket";
import aboutPortrait from "@/public/images/about-portrait.png";

const LABEL_CLASSES = "font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]";

function AboutParagraph({ className }: { className?: string }) {
  return (
    <p
      className={clsx(
        "text-[14px] leading-[1.3] tracking-[-0.56px] text-[#1f1f1f]",
        className,
      )}
    >
      Placeholder paragraph one. This is where you introduce yourself — your
      background, your passion for your craft, and what drives you
      creatively. Two to three sentences work best here. Placeholder
      paragraph two. Here you can describe your technical approach, how you
      collaborate with clients, or what sets your work apart from others in
      your field.
    </p>
  );
}

export default function AboutSection() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-360">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-5 md:hidden">
          <p className={LABEL_CLASSES}>002</p>
          <p className={LABEL_CLASSES}>[ About ]</p>
          <div className="flex w-full items-center gap-3">
            <div className="flex flex-col items-start justify-between self-stretch">
              <CornerBracket />
              <CornerBracket className="-rotate-90" />
            </div>
            <AboutParagraph className="flex-1 py-3" />
            <div className="flex flex-col items-end justify-between self-stretch">
              <CornerBracket className="rotate-90" />
              <CornerBracket className="rotate-180" />
            </div>
          </div>
          <div className="relative aspect-422/594 w-full">
            <Image
              src={aboutPortrait}
              alt="Close-up portrait of Harvey Specter"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Desktop: text + image side by side */}
        <div className="hidden w-full items-start justify-between md:flex">
          <p className={LABEL_CLASSES}>[ About ]</p>

          <div className="flex items-end gap-8">
            <div className="flex w-116.25 shrink-0 items-center gap-3">
              <div className="flex flex-col items-start justify-between self-stretch">
                <CornerBracket />
                <CornerBracket className="-rotate-90" />
              </div>
              <AboutParagraph className="flex-1 py-3" />
              <div className="flex flex-col items-end justify-between self-stretch">
                <CornerBracket className="rotate-90" />
                <CornerBracket className="rotate-180" />
              </div>
            </div>

            <div className="flex items-start gap-6">
              <p className={LABEL_CLASSES}>002</p>
              <div className="relative h-153.5 w-109 shrink-0">
                <Image
                  src={aboutPortrait}
                  alt="Close-up portrait of Harvey Specter"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

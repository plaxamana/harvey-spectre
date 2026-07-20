import clsx from "clsx";
import Button from "@/components/ui/Button";

const LEGAL_LINKS = ["licences", "Privacy policy"];
const SOCIAL_LINKS = ["Facebook", "Instagram", "x.com", "Linkedin"];

function ProjectCta() {
  return (
    <div className="flex w-[298px] flex-col items-start gap-3">
      <p className="text-[24px] leading-[1.1] font-light text-white italic uppercase tracking-[-0.04em]">
        Have a <span className="font-black not-italic">project</span> in
        mind?
      </p>
      <Button href="#contact" variant="outline">
        Let&rsquo;s talk
      </Button>
    </div>
  );
}

function LegalLinks({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "flex items-center gap-8 text-[12px] leading-[1.1] tracking-[-0.48px] text-white uppercase",
        className,
      )}
    >
      {LEGAL_LINKS.map((link) => (
        <a key={link} href="#" className="underline">
          {link}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col gap-12 bg-black px-4 pt-12 md:gap-30 md:px-8 md:pt-12">
      <div className="mx-auto flex w-full max-w-360 flex-col gap-6 md:gap-12">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col gap-4 md:hidden">
          <ProjectCta />
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="w-[298px] text-[18px] leading-[1.1] tracking-[-0.72px] text-white uppercase"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop: three-column layout */}
        <div className="hidden w-full items-start justify-between md:flex">
          <ProjectCta />
          <div className="flex w-[298px] flex-col text-[18px] leading-[1.1] tracking-[-0.72px] text-white uppercase">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
          <div className="flex w-[298px] flex-col items-end text-[18px] leading-[1.1] tracking-[-0.72px] text-white uppercase">
            <a href="#">x.com</a>
            <a href="#">Linkedin</a>
          </div>
        </div>

        <div className="h-px w-full bg-white/20" />
      </div>

      {/* Mobile: centered legal links, then label + wordmark */}
      <div className="mx-auto flex w-full max-w-360 flex-col items-center gap-4 pb-8 md:hidden">
        <LegalLinks />
        <div className="flex w-full flex-col items-start gap-3">
          <p className="font-mono text-[10px] leading-[1.1] text-white uppercase">
            [ Coded By Claude ]
          </p>
          <p className="text-[clamp(3rem,20vw,91px)] leading-[0.8] font-semibold text-white capitalize tracking-[-0.06em]">
            H.Studio
          </p>
        </div>
      </div>

      {/* Desktop: wordmark + vertical label on the left, legal links on the right */}
      <div className="mx-auto hidden w-full max-w-360 items-end justify-between gap-8 pb-8 md:flex">
        <div className="flex items-center gap-6">
          <p className="-rotate-90 font-mono text-[14px] whitespace-nowrap text-white uppercase">
            [ Coded By Claude ]
          </p>
          <p className="text-[clamp(4rem,18vw,290px)] leading-[0.8] font-semibold text-white capitalize tracking-[-0.06em]">
            H.Studio
          </p>
        </div>
        <LegalLinks className="shrink-0" />
      </div>
    </footer>
  );
}

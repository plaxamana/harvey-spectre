import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import heroPortrait from "@/public/images/hero-portrait.png";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#dfe2e2] px-4 pb-12 md:px-8 md:pb-16">
      <Image
        src={heroPortrait}
        alt="Harvey Specter portrait"
        fill
        priority
        sizes="100vw"
        className="-z-10 scale-125 object-cover object-[center_15%]"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[55%] backdrop-blur-xs"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 25%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 25%)",
        }}
      />

      <div className="mx-auto flex max-w-360 flex-col gap-12 md:gap-[clamp(3rem,16.7vw,240px)]">
        <Navbar />

        <div className="flex w-full flex-col">
          <div className="flex w-full justify-center px-4.5 md:justify-start md:mb-[-0.5em]">
            <p className="font-mono text-[14px] text-white uppercase leading-[1.1] mix-blend-overlay">
              [ Hello i&rsquo;m ]
            </p>
          </div>

          <h1 className="w-full text-center font-medium text-[clamp(3.5rem,15vw,198px)] text-white capitalize leading-[0.8] tracking-[-0.07em] whitespace-pre-wrap mix-blend-overlay md:leading-[1.1]">
            {`Harvey Specter`}
          </h1>

          <div className="mt-10 flex w-full max-w-73.5 flex-col items-start gap-4.25 self-start md:mt-0 md:self-end">
            <p className="text-[14px] font-bold text-[#1f1f1f] uppercase italic leading-[1.1] tracking-[-0.56px]">
              H.Studio is a <span className="font-normal">full-service</span>{" "}
              creative studio creating beautiful digital experiences and
              products. We are an{" "}
              <span className="font-normal">award winning</span> desing and art
              group specializing in branding, web design and engineering.
            </p>
            <Button href="#contact">Let&rsquo;s talk</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

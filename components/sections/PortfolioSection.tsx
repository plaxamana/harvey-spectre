import clsx from "clsx";
import Image, { type StaticImageData } from "next/image";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import CornerBracket from "@/components/ui/CornerBracket";
import Button from "@/components/ui/Button";
import projectSurfers from "@/public/images/project-surfers.png";
import projectCyberpunk from "@/public/images/project-cyberpunk.png";
import projectAgency from "@/public/images/project-agency.png";
import projectMinimal from "@/public/images/project-minimal.png";

const LABEL_CLASSES = "font-mono text-[14px] uppercase leading-[1.1] text-[#1f1f1f]";

type Project = {
  title: string;
  tags: [string, string];
  image: StaticImageData;
};

const PROJECTS: Project[] = [
  {
    title: "Surfers paradise",
    tags: ["Social Media", "Photography"],
    image: projectSurfers,
  },
  {
    title: "Cyberpunk caffe",
    tags: ["Social Media", "Photography"],
    image: projectCyberpunk,
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    image: projectAgency,
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    image: projectMinimal,
  },
];

function ProjectCard({
  project,
  aspectClassName,
  titleClassName,
}: {
  project: Project;
  aspectClassName: string;
  titleClassName: string;
}) {
  return (
    <div className="flex w-full flex-col gap-[10px]">
      <div
        className={`relative flex w-full flex-col items-start justify-end overflow-hidden pb-4 pl-4 ${aspectClassName}`}
      >
        <Image src={project.image} alt={project.title} fill className="object-cover" />
        <div className="relative flex items-center gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/30 px-2 py-1 text-[14px] font-medium tracking-[-0.56px] text-[#111] backdrop-blur-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className={`font-black uppercase leading-[1.1] tracking-[-0.04em] text-black ${titleClassName}`}>
          {project.title}
        </p>
        <ArrowUpRight />
      </div>
    </div>
  );
}

function PortfolioCTA({ className }: { className?: string }) {
  return (
    <div className={clsx("flex items-center gap-3", className)}>
      <div className="flex flex-col items-start justify-between self-stretch">
        <CornerBracket />
        <CornerBracket className="-rotate-90" />
      </div>
      <div className="flex flex-1 flex-col items-start gap-[10px] py-3">
        <p className="text-[14px] leading-[1.3] tracking-[-0.56px] text-[#1f1f1f] italic">
          Discover how my creativity transforms ideas into impactful digital
          experiences — schedule a call with me to get started.
        </p>
        <Button href="#contact">Let&rsquo;s talk</Button>
      </div>
      <div className="flex flex-col items-end justify-between self-stretch">
        <CornerBracket className="rotate-90" />
        <CornerBracket className="rotate-180" />
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-360 flex-col gap-8 md:gap-15">
        {/* Mobile heading */}
        <div className="flex flex-col gap-4 uppercase md:hidden">
          <p className={LABEL_CLASSES}>[ portfolio ]</p>
          <div className="flex w-full items-start justify-between">
            <div className="font-light text-[32px] tracking-[-0.08em] leading-[0.86] text-black">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <p className={LABEL_CLASSES}>004</p>
          </div>
        </div>

        {/* Desktop heading */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="flex items-start gap-[10px] uppercase">
            <div className="font-light text-[96px] tracking-[-0.08em] leading-[0.86] text-black">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <p className={LABEL_CLASSES}>004</p>
          </div>
          <p className={`-rotate-90 whitespace-nowrap ${LABEL_CLASSES}`}>
            [ portfolio ]
          </p>
        </div>

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-32 md:hidden">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              aspectClassName="aspect-[343/390]"
              titleClassName="text-[24px]"
            />
          ))}
          <PortfolioCTA />
        </div>

        {/* Desktop: two-column staggered grid */}
        <div className="hidden w-full gap-6 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-32">
            <ProjectCard
              project={PROJECTS[0]}
              aspectClassName="aspect-[676/744]"
              titleClassName="text-[36px]"
            />
            <ProjectCard
              project={PROJECTS[1]}
              aspectClassName="aspect-[676/699]"
              titleClassName="text-[36px]"
            />
            <PortfolioCTA className="w-full max-w-[465px]" />
          </div>
          <div className="flex flex-col gap-32 md:mt-32">
            <ProjectCard
              project={PROJECTS[2]}
              aspectClassName="aspect-[676/699]"
              titleClassName="text-[36px]"
            />
            <ProjectCard
              project={PROJECTS[3]}
              aspectClassName="aspect-[676/744]"
              titleClassName="text-[36px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

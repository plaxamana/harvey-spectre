import Image, { type StaticImageData } from "next/image";
import serviceBrand from "@/public/images/service-brand.png";
import serviceWeb from "@/public/images/service-web.png";
import serviceMarketing from "@/public/images/service-marketing.png";
import servicePhotography from "@/public/images/service-photography.png";

const LABEL_CLASSES = "font-mono text-[14px] uppercase leading-[1.1] text-white";

const TITLE_CLASSES =
  "whitespace-nowrap text-[36px] font-bold text-white uppercase italic tracking-[-0.04em] leading-[1.1]";

const DESCRIPTION_CLASSES = "text-[14px] leading-[1.3] tracking-[-0.56px] text-white";

type Service = {
  number: string;
  title: string;
  desktopDescription: string;
  mobileDescription: string;
  image: StaticImageData;
};

const SERVICES: Service[] = [
  {
    number: "1",
    title: "Brand Discovery",
    desktopDescription:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    mobileDescription:
      "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    image: serviceBrand,
  },
  {
    number: "2",
    title: "Web design & Dev",
    desktopDescription:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    mobileDescription:
      "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    image: serviceWeb,
  },
  {
    number: "3",
    title: "Marketing",
    desktopDescription:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    mobileDescription:
      "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    image: serviceMarketing,
  },
  {
    number: "4",
    title: "Photography",
    desktopDescription:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    mobileDescription:
      "We are a creative studio that loves making beautiful websites and premium products. We've won some awards for our work. We're really good at creating brands, designing cool stuff, and making things work just right.",
    image: servicePhotography,
  },
];

function ServiceThumbnail({ service }: { service: Service }) {
  return (
    <div className="relative size-[151px] shrink-0">
      <Image
        src={service.image}
        alt={`${service.title} sample work`}
        fill
        className="object-cover"
      />
    </div>
  );
}

function ServiceRow({ service }: { service: Service }) {
  return (
    <div className="flex w-full flex-col gap-[9px]">
      <p className={`w-full ${LABEL_CLASSES}`}>[ {service.number} ]</p>
      <div className="h-px w-full bg-white/20" />

      {/* Mobile: stacked */}
      <div className="flex w-full flex-col gap-4 md:hidden">
        <p className={TITLE_CLASSES}>{service.title}</p>
        <p className={DESCRIPTION_CLASSES}>{service.mobileDescription}</p>
        <ServiceThumbnail service={service} />
      </div>

      {/* Desktop: title left, description + thumbnail right */}
      <div className="hidden w-full flex-wrap items-start justify-between gap-6 md:flex">
        <p className={TITLE_CLASSES}>{service.title}</p>
        <div className="flex flex-wrap items-start gap-6">
          <p className={`w-[393px] ${DESCRIPTION_CLASSES}`}>
            {service.desktopDescription}
          </p>
          <ServiceThumbnail service={service} />
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-black px-4 py-12 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-360 flex-col gap-8 md:gap-12">
        <p className={LABEL_CLASSES}>[ services ]</p>

        <div className="flex w-full items-center justify-between font-light text-[clamp(2rem,7vw,96px)] text-white uppercase tracking-[-0.08em] leading-none">
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        <div className="flex w-full flex-col gap-12">
          {SERVICES.map((service) => (
            <ServiceRow key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

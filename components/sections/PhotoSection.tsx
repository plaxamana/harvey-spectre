import Image from "next/image";
import photoShot from "@/public/images/photo-shot.png";

export default function PhotoSection() {
  return (
    <section className="relative h-[150vw] max-h-[565px] w-full overflow-hidden sm:h-[62.5vw] sm:max-h-[900px]">
      <Image
        src={photoShot}
        alt="Harvey Specter holding a camera, taking a photo outdoors"
        fill
        sizes="100vw"
        className="object-cover"
      />
    </section>
  );
}

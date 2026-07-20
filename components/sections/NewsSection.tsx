import Image, { type StaticImageData } from "next/image";
import ArrowUpRight from "@/components/ui/ArrowUpRight";
import news1 from "@/public/images/news-1.png";
import news2 from "@/public/images/news-2.png";
import news3 from "@/public/images/news-3.png";

type NewsItem = {
  image: StaticImageData;
};

const NEWS_ITEMS: NewsItem[] = [{ image: news1 }, { image: news2 }, { image: news3 }];

const EXCERPT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function NewsCard({
  item,
  imageClassName,
}: {
  item: NewsItem;
  imageClassName: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <div className={`relative w-full shrink-0 ${imageClassName}`}>
        <Image src={item.image} alt="" fill className="object-cover" />
      </div>
      <p className="text-[14px] leading-[1.3] tracking-[-0.56px] text-[#1f1f1f]">
        {EXCERPT}
      </p>
      <div className="flex items-center gap-2 border-b border-black py-1">
        <span className="text-[14px] font-medium tracking-[-0.56px] text-black">
          Read more
        </span>
        <ArrowUpRight className="size-4.5" />
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 py-16 md:px-8 md:py-30">
      {/* Mobile: heading + swipeable strip */}
      <div className="mx-auto flex max-w-360 flex-col gap-8 md:hidden">
        <p className="text-[32px] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black">
          Keep up with my latest news &amp; achievements
        </p>
        <div className="scrollbar-hide -mx-4 flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
          {NEWS_ITEMS.map((item, index) => (
            <div key={index} className="w-75 shrink-0 snap-center">
              <NewsCard item={item} imageClassName="aspect-[300/398]" />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: vertical heading + staggered row with dividers */}
      <div className="mx-auto hidden max-w-360 items-end justify-between gap-8 md:flex">
        <div className="flex w-27.5 shrink-0 items-center justify-center self-stretch">
          <p className="-rotate-90 whitespace-nowrap text-[64px] font-light uppercase leading-[0.86] tracking-[-0.08em] text-black">
            Keep up with my latest
            <br />
            news &amp; achievements
          </p>
        </div>

        <div className="flex min-w-0 items-start gap-8 overflow-x-auto">
          <div className="flex w-88.25 shrink-0 flex-col gap-4">
            <NewsCard item={NEWS_ITEMS[0]} imageClassName="h-[469px]" />
          </div>

          <div className="w-px self-stretch bg-black/20" />

          <div className="flex w-88.25 shrink-0 flex-col gap-4 pt-30">
            <NewsCard item={NEWS_ITEMS[1]} imageClassName="h-[469px]" />
          </div>

          <div className="w-px self-stretch bg-black/20" />

          <div className="flex w-88.25 shrink-0 flex-col gap-4">
            <NewsCard item={NEWS_ITEMS[2]} imageClassName="h-[469px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

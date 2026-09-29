import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const images = [
  {
    image: "/images/home/travel-1.jpg",
    title: "Discover",
  },
  {
    image: "/images/home/travel-2.jpg",
    title: "Experience",
  },
  {
    image: "/images/home/travel-3.jpg",
    title: "Explore",
  },
  {
    image: "/images/home/travel-4.jpg",
    title: "Remember",
  },
];

export default function TravelShowcase() {
  return (
    <section className="bg-[#162623] px-4 py-16 sm:px-6 sm:py-20">
      <div className="luxury-container">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#577877]">
              TRAVEL STORIES
            </p>

            <h2 className="font-serif text-3xl text-[#F0F5F7] sm:text-4xl">
              More than a destination.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#F0F5F7]/60">
              Every journey brings new places, experiences and memories.
            </p>
          </div>

          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#F0F5F7] transition hover:text-[#577877]"
          >
            Explore destinations
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((item, index) => (
            <div
              key={item.image}
              className={`group relative overflow-hidden rounded-[20px] ${
                index === 0 || index === 3
                  ? "h-[280px] md:h-[390px]"
                  : "h-[240px] md:h-[330px] md:mt-10"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#162623]/20 transition group-hover:bg-[#162623]/35" />

              <div className="absolute bottom-4 left-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#F0F5F7]">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
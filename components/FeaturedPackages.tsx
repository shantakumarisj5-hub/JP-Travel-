import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const packages = [
  {
    title: "Amazing Vietnam",
    location: "Vietnam",
    duration: "3 Nights / 4 Days",
    price: "₹80,000",
    note: "Per person",
    image: "/images/hero.jpg",
    href: "/destinations/vietnam",
  },
  {
    title: "Dubai Escape",
    location: "Dubai",
    duration: "Custom Journey",
    price: "Enquire",
    note: "Personalised package",
    image: "/images/destinations/dubai.jpg",
    href: "/destinations/dubai",
  },
  {
    title: "Thailand Getaway",
    location: "Thailand",
    duration: "Custom Journey",
    price: "Enquire",
    note: "Personalised package",
    image: "/images/destinations/thailand.jpg",
    href: "/destinations/thailand",
  },
];

export default function FeaturedPackages() {
  return (
    <section className="bg-[#F0F5F7] px-4 py-16 sm:px-6 sm:py-20">
      <div className="luxury-container">
        <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#577877]">
              FEATURED JOURNEYS
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#162623] sm:text-4xl">
              Journeys worth remembering.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-[#577877]">
              Explore selected journeys and enquire with our team to create
              your travel experience.
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#295255] transition hover:text-[#577877]"
          >
            View all packages
            <ArrowUpRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block"
            >
              <article className="overflow-hidden rounded-[22px] border border-[#577877]/20 bg-[#162623] shadow-[0_15px_45px_rgba(22,38,35,0.12)] transition duration-500 hover:-translate-y-1">
                <div className="relative h-[300px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[#162623]/35" />

                  <div className="absolute left-4 top-4 rounded-full border border-[#F0F5F7]/20 bg-[#162623]/55 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#F0F5F7] backdrop-blur-md">
                    {item.location}
                  </div>

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#F0F5F7]/20 bg-[#162623]/55 text-[#F0F5F7] backdrop-blur-md transition group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#F0F5F7]/60">
                      {item.duration}
                    </p>

                    <h3 className="mt-1 font-serif text-2xl text-[#F0F5F7]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-[#577877]">
                      {item.note}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#F0F5F7]">
                      {item.price}
                    </p>
                  </div>

                  <span className="text-xs text-[#F0F5F7]/60">
                    Explore
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
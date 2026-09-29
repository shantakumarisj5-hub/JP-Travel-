import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  name: string;
  country: string;
  description: string;
  image: string;
  href: string;
};

export default function DestinationCard({
  name,
  country,
  description,
  image,
  href,
}: Props) {
  return (
    <Link href={href} className="group block">
      <article className="relative overflow-hidden rounded-[22px] border border-[#577877]/20 bg-[#162623] shadow-[0_15px_45px_rgba(22,38,35,0.12)] transition-all duration-500 hover:-translate-y-1">
        <div className="relative h-[320px] overflow-hidden sm:h-[350px]">
          
          <img
            src={image}
            alt={`${name}, ${country}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#162623] via-[#162623]/35 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full border border-[#F0F5F7]/20 bg-[#162623]/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-[#F0F5F7] backdrop-blur-md">
            {country}
          </div>

          <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#F0F5F7]/20 bg-[#162623]/50 text-[#F0F5F7] backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#295255]">
            <ArrowUpRight size={16} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="mb-1.5 text-[10px] tracking-[0.16em] text-[#577877]">
              DESTINATION
            </p>

            <h3 className="font-serif text-2xl text-[#F0F5F7] sm:text-3xl">
              {name}
            </h3>

            <p className="mt-2 line-clamp-2 max-w-md text-xs leading-5 text-[#F0F5F7]/70">
              {description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#F0F5F7]">
              Explore destination
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
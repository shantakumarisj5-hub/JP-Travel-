import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#162623] sm:min-h-[680px] lg:min-h-[700px]">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/images/home/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#162623]/65" />

      {/* Subtle brand overlay */}
      <div className="absolute inset-0 bg-[#295255]/15" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-12 pt-28 sm:min-h-[680px] sm:px-8 sm:pb-16 sm:pt-32 lg:min-h-[700px] lg:px-10 lg:pb-20">
        <div className="max-w-4xl">

          {/* Brand label */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-8 bg-[#577877] sm:w-10" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F0F5F7]/80 sm:text-[10px] sm:tracking-[0.3em]">
              JP WINGS TRAVEL
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl font-serif text-[3rem] leading-[0.95] tracking-tight text-[#F0F5F7] sm:text-6xl lg:text-8xl">
            Travel beyond
            <br />
            boundaries.
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-[#F0F5F7]/75 sm:mt-6 sm:text-base">
            Discover thoughtfully planned journeys across beautiful
            destinations, unforgettable experiences and moments worth
            remembering.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <Link
              href="/destinations"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#295255] px-6 py-3.5 text-xs font-semibold text-[#F0F5F7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#577877]"
            >
              Explore Destinations
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#F0F5F7]/25 bg-[#162623]/30 px-6 py-3.5 text-xs font-semibold text-[#F0F5F7] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F0F5F7]/10"
            >
              Plan Your Trip
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Bottom label */}
          <div className="mt-9 flex items-center gap-3 text-[#F0F5F7]/60 sm:mt-12">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F0F5F7]/20">
              <Play size={13} fill="currentColor" />
            </div>

            <span className="text-[9px] uppercase tracking-[0.18em] sm:text-[10px] sm:tracking-[0.2em]">
              Your journey starts here
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
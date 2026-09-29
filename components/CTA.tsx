import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#162623] px-6 py-24">
      <div className="luxury-container">
        <div className="relative overflow-hidden rounded-[32px] border border-[#577877]/30 bg-[#295255] px-8 py-16 text-center md:px-16">
          
          {/* Decorative glass circles */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#F0F5F7]/10 bg-[#F0F5F7]/5 blur-sm" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-[#F0F5F7]/10 bg-[#F0F5F7]/5 blur-sm" />

          <div className="relative z-10">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#F0F5F7]/65">
              JP WINGS TRAVEL
            </p>

            <h2 className="mx-auto max-w-4xl font-serif text-4xl leading-tight text-[#F0F5F7] md:text-6xl">
              Where will your next story take you?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#F0F5F7]/75">
              Tell us where you want to go. We will help you turn your travel
              idea into a memorable journey.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F0F5F7] px-7 py-4 text-sm font-semibold text-[#162623] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Plan Your Trip
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
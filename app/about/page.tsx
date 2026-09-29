import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowUpRight, Compass, Heart, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F0F5F7] pt-24">
        {/* Hero */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="luxury-container">
            <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#577877]">
                  ABOUT JP WINGS
                </p>

                <h1 className="font-serif text-5xl leading-[0.95] text-[#162623] sm:text-6xl lg:text-7xl">
                  Travel should feel
                  <br />
                  <span className="text-[#295255]">effortless.</span>
                </h1>
              </div>

              <p className="max-w-md text-sm leading-7 text-[#577877]">
                JP Wings Travel is built around a simple idea: make discovering
                the world feel more personal, thoughtful and memorable.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-[#162623] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="luxury-container">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#577877]">
                  OUR APPROACH
                </p>

                <h2 className="mt-3 font-serif text-4xl leading-tight text-[#F0F5F7]">
                  From planning to
                  <br />
                  the journey itself.
                </h2>
              </div>

              <div className="space-y-5 text-sm leading-7 text-[#F0F5F7]/65">
                <p>
                  Every traveller has a different reason for going somewhere.
                  That is why we believe travel planning should be personal
                  rather than one-size-fits-all.
                </p>

                <p>
                  We bring together destinations, stays, transportation,
                  experiences and travel support to create journeys that feel
                  clear and comfortable from beginning to end.
                </p>

                <p>
                  Whether you are planning an international holiday, a family
                  journey or a special getaway, our focus is on helping you
                  travel with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="luxury-container">
            <div className="mb-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#577877]">
                WHAT MATTERS
              </p>

              <h2 className="mt-2 font-serif text-3xl text-[#162623] sm:text-4xl">
                The way we approach travel.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-[24px] border border-[#577877]/20 bg-white/50 p-6">
                <Compass className="text-[#295255]" size={22} />

                <h3 className="mt-6 font-serif text-2xl text-[#162623]">
                  Thoughtful Planning
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#577877]">
                  Clear itineraries and travel planning designed around your
                  journey.
                </p>
              </article>

              <article className="rounded-[24px] border border-[#577877]/20 bg-white/50 p-6">
                <Heart className="text-[#295255]" size={22} />

                <h3 className="mt-6 font-serif text-2xl text-[#162623]">
                  Personal Attention
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#577877]">
                  Travel experiences should reflect the people taking the
                  journey.
                </p>
              </article>

              <article className="rounded-[24px] border border-[#577877]/20 bg-white/50 p-6">
                <Sparkles className="text-[#295255]" size={22} />

                <h3 className="mt-6 font-serif text-2xl text-[#162623]">
                  Memorable Experiences
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#577877]">
                  Discover destinations through experiences that become part of
                  your story.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
          <div className="luxury-container">
            <div className="rounded-[28px] bg-[#295255] px-6 py-12 text-center sm:px-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F0F5F7]/60">
                YOUR NEXT JOURNEY
              </p>

              <h2 className="mt-3 font-serif text-3xl text-[#F0F5F7] sm:text-4xl">
                Where will you go next?
              </h2>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F0F5F7] px-6 py-3.5 text-xs font-semibold text-[#162623]"
              >
                Plan Your Trip
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
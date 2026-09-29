import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

export default function VietnamPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#162623] px-6 pb-28 pt-44 text-[#F0F5F7]">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#577877]">
              Featured Journey
            </p>

            <h1 className="mt-5 font-serif text-7xl md:text-9xl">
              Amazing
              <br />
              Vietnam.
            </h1>

            <p className="mt-7 max-w-2xl text-[#F0F5F7]/65">
              A 3 Nights / 4 Days journey covering Ho Chi Minh City,
              Cu Chi Tunnels and the Mekong Delta.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="glass rounded-full px-5 py-3 text-sm">
                3 Nights / 4 Days
              </span>

              <span className="glass rounded-full px-5 py-3 text-sm">
                ₹80,000 / Person
              </span>

              <span className="glass rounded-full px-5 py-3 text-sm">
                4-Star Hotel
              </span>
            </div>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#295255] px-7 py-4 font-medium"
            >
              Enquire About Vietnam
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="bg-[#F0F5F7] px-6 py-28">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#295255]">
              Itinerary
            </p>

            <div className="mt-12 space-y-5">
              {[
                ["01", "Arrival", "Arrival in Ho Chi Minh City."],
                ["02", "Cu Chi & Shopping", "Explore the Cu Chi Tunnels and enjoy shopping."],
                ["03", "Mekong Delta", "Experience the Mekong Delta River."],
                ["04", "Return Home", "Complete the journey and return home."],
              ].map(([day, title, text]) => (
                <div
                  key={day}
                  className="glass-light grid gap-5 rounded-3xl p-7 md:grid-cols-[80px_1fr] md:items-center"
                >
                  <span className="font-serif text-4xl text-[#577877]">
                    {day}
                  </span>

                  <div>
                    <h2 className="font-serif text-3xl text-[#162623]">
                      {title}
                    </h2>

                    <p className="mt-2 text-[#577877]">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, Plane, Hotel, FileCheck, Car, Map, Headphones } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Plane,
    number: "01",
    title: "Flights",
    description:
      "Plan your flights with travel options selected around your destination, schedule and journey.",
  },
  {
    icon: Hotel,
    number: "02",
    title: "Hotels",
    description:
      "Find comfortable stays suited to your itinerary, destination and travel preferences.",
  },
  {
    icon: FileCheck,
    number: "03",
    title: "Visa Assistance",
    description:
      "Get guidance through the visa process and understand the documentation required for your journey.",
  },
  {
    icon: Car,
    number: "04",
    title: "Transfers",
    description:
      "Make your arrival and departure easier with organised airport and destination transfers.",
  },
  {
    icon: Map,
    number: "05",
    title: "Tours",
    description:
      "Discover destinations through carefully planned sightseeing and travel experiences.",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Travel Support",
    description:
      "Get assistance before and during your journey whenever you need travel guidance.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F0F5F7] pt-24">
        {/* Hero */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="luxury-container">
            <div className="max-w-3xl">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#577877]">
                OUR SERVICES
              </p>

              <h1 className="font-serif text-5xl leading-[0.95] text-[#162623] sm:text-6xl lg:text-7xl">
                Everything you need
                <br />
                for the journey.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#577877] sm:text-base">
                From flights and stays to transfers, tours and travel
                assistance, we help bring the important pieces of your journey
                together.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-[#162623] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="luxury-container">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.number}
                    className="group rounded-[24px] border border-[#577877]/25 bg-[#295255]/15 p-6 transition duration-500 hover:-translate-y-1 hover:bg-[#295255]/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#577877]/30 bg-[#295255]/30 text-[#F0F5F7]">
                        <Icon size={19} />
                      </div>

                      <span className="text-xs text-[#577877]">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="mt-8 font-serif text-2xl text-[#F0F5F7]">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#F0F5F7]/60">
                      {service.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-[#F0F5F7]">
                      Learn more
                      <ArrowUpRight
                        size={14}
                        className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="luxury-container">
            <div className="rounded-[28px] bg-[#295255] px-6 py-12 text-center sm:px-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F0F5F7]/60">
                PLAN YOUR JOURNEY
              </p>

              <h2 className="mt-3 font-serif text-3xl text-[#F0F5F7] sm:text-4xl">
                Tell us where you want to go.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#F0F5F7]/70">
                Share your travel plans with us and we can help you shape the
                journey.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#F0F5F7] px-6 py-3.5 text-xs font-semibold text-[#162623] transition hover:bg-white"
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
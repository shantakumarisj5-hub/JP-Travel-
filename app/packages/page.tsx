import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const packages = [
  {
    name: "Amazing Vietnam",
    location: "Vietnam",
    duration: "3 Nights / 4 Days",
    price: "₹80,000",
  },
  {
    name: "Dubai Escape",
    location: "Dubai",
    duration: "Custom itinerary",
    price: "Enquire",
  },
  {
    name: "Thailand Getaway",
    location: "Thailand",
    duration: "Custom itinerary",
    price: "Enquire",
  },
  {
    name: "Monaco Experience",
    location: "Monaco",
    duration: "Custom itinerary",
    price: "Enquire",
  },
];

export default function PackagesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F0F5F7] px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#295255]">
            Travel Packages
          </p>

          <h1 className="mt-5 font-serif text-6xl text-[#162623] md:text-8xl">
            Curated journeys.
          </h1>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {packages.map((item) => (
              <div
                key={item.name}
                className="glass-light rounded-[2rem] p-8 transition duration-500 hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#577877]">
                  {item.location}
                </p>

                <h2 className="mt-5 font-serif text-4xl text-[#162623]">
                  {item.name}
                </h2>

                <div className="mt-8 flex items-end justify-between border-t border-[#295255]/10 pt-6">
                  <div>
                    <p className="text-xs text-[#577877]">
                      Duration
                    </p>
                    <p className="mt-1 text-sm text-[#162623]">
                      {item.duration}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-[#577877]">
                      From
                    </p>
                    <p className="mt-1 text-lg font-medium text-[#162623]">
                      {item.price}
                    </p>
                  </div>
                </div>

                <a
                  href={
                    item.name === "Amazing Vietnam"
                      ? "/vietnam"
                      : "/contact"
                  }
                  className="mt-7 flex items-center gap-2 text-sm text-[#295255]"
                >
                  Explore
                  <ArrowUpRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
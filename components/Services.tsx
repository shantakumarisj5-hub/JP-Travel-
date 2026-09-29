import {
  Plane,
  Hotel,
  FileCheck2,
  Car,
  MapPinned,
  Headphones,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: Plane,
    title: "Flights",
    text: "Flight planning and travel arrangements for your journey.",
  },
  {
    icon: Hotel,
    title: "Hotels",
    text: "Handpicked stays designed around comfort and location.",
  },
  {
    icon: FileCheck2,
    title: "Visa Assistance",
    text: "Guidance for visa and travel documentation requirements.",
  },
  {
    icon: Car,
    title: "Transfers",
    text: "Convenient airport transfers and destination transportation.",
  },
  {
    icon: MapPinned,
    title: "Tours",
    text: "Curated sightseeing and destination experiences.",
  },
  {
    icon: Headphones,
    title: "Travel Support",
    text: "Support throughout your journey when you need it.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#162623] px-6 py-32 text-[#F0F5F7]">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          light
          eyebrow="What we arrange"
          title="Everything around the journey."
          description="From flights and stays to transfers and destination experiences, JP Wings Travel brings the important details together."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="glass group rounded-3xl p-7 transition duration-500 hover:-translate-y-1 hover:border-[#577877]/50"
              >
                <Icon
                  size={28}
                  strokeWidth={1.4}
                  className="text-[#577877] transition group-hover:text-[#F0F5F7]"
                />

                <h3 className="mt-8 font-serif text-3xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#F0F5F7]/55">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
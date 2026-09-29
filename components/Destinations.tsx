import DestinationCard from "./DestinationCard";

const destinations = [
  {
    name: "Vietnam",
    country: "Southeast Asia",
    description:
      "Discover Ho Chi Minh City, Cu Chi Tunnels and the Mekong Delta.",
    image: "/images/destinations/vietnam.jpg",
    href: "/destinations/vietnam",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    description:
      "A modern escape filled with architecture, luxury and unforgettable experiences.",
    image: "/images/destinations/dubai.jpg",
    href: "/destinations/dubai",
  },
  {
    name: "Thailand",
    country: "Southeast Asia",
    description:
      "Explore tropical islands, vibrant cities and unforgettable experiences.",
    image: "/images/destinations/thailand.jpg",
    href: "/destinations/thailand",
  },
  {
    name: "Monaco",
    country: "Europe",
    description:
      "Experience Mediterranean elegance, glamour and beautiful coastal views.",
    image: "/images/destinations/monaco.jpg",
    href: "/destinations/monaco",
  },
];

export default function Destinations() {
  return (
    <section className="bg-[#F0F5F7] px-4 py-16 sm:px-6 sm:py-20">
      <div className="luxury-container">

        <div className="mb-9 max-w-2xl">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#577877]">
            DESTINATIONS
          </p>

          <h2 className="font-serif text-3xl leading-tight text-[#162623] sm:text-4xl">
            Places worth travelling for.
          </h2>

          <p className="mt-3 text-sm leading-6 text-[#577877]">
            Explore destinations selected for memorable journeys, experiences
            and stories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              {...destination}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
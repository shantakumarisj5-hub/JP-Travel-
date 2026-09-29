import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DestinationCard from "@/components/DestinationCard";

export default function DestinationsPage() {
  const destinations = [
    {
      name: "Vietnam",
      country: "Southeast Asia",
      description: "Culture, cities, food and unforgettable landscapes.",
      image: "/images/destinations/vietnam.jpg",
      href: "/vietnam",
    },
    {
      name: "Dubai",
      country: "United Arab Emirates",
      description: "Luxury, architecture, shopping and desert experiences.",
      image: "/images/destinations/dubai.jpg",
      href: "/destinations#dubai",
    },
    {
      name: "Thailand",
      country: "Southeast Asia",
      description: "Islands, beaches, culture and vibrant city experiences.",
      image: "/images/destinations/thailand.jpg",
      href: "/destinations#thailand",
    },
    {
      name: "Monaco",
      country: "Europe",
      description: "Mediterranean elegance and French Riviera charm.",
      image: "/images/destinations/monaco.jpg",
      href: "/destinations#monaco",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F0F5F7] px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#295255]">
            Destinations
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-6xl text-[#162623] md:text-8xl">
            The world is waiting.
          </h1>

          <p className="mt-6 max-w-2xl text-[#577877]">
            Explore destinations and discover the kind of journey that
            feels right for you.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {destinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                {...destination}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
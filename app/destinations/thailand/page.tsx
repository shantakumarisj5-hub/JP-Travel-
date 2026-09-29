import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageDetail from "@/components/PackageDetail";

export default function ThailandPage() {
  return (
    <>
      <Navbar />

      <PackageDetail
        title="Thailand Getaway"
        location="Thailand"
        duration="Custom Journey"
        price="Enquire"
        priceNote="Contact JP Wings Travel for package details"
        heroImage="/images/thailand/hero.jpg"
        description="Experience Thailand through a personalised journey combining beautiful places, local experiences and memorable moments."
        hotel="Custom"
        minimumPeople="Enquire"
        gallery={[
          "/images/thailand/thailand-1.jpg",
          "/images/thailand/thailand-2.jpg",
          "/images/thailand/thailand-3.jpg",
          "/images/thailand/thailand-4.jpg",
        ]}
        itinerary={[
          {
            day: "DAY 01",
            title: "Arrival in Thailand",
            description:
              "Arrival followed by transfer and hotel check-in.",
          },
          {
            day: "DAY 02",
            title: "Explore Thailand",
            description:
              "Discover selected attractions and experiences according to your itinerary.",
          },
          {
            day: "DAY 03",
            title: "Local Experiences",
            description:
              "Enjoy more of the destination with experiences selected for your journey.",
          },
          {
            day: "DAY 04",
            title: "Departure",
            description:
              "Check out and proceed for your return journey.",
          },
        ]}
        inclusions={[
          "Accommodation as per selected package",
          "Airport transfers",
          "Selected sightseeing",
          "Travel assistance",
        ]}
        exclusions={[
          "Personal expenses",
          "Meals not mentioned in the final itinerary",
          "Optional activities",
          "Taxes or charges applicable to the final package",
        ]}
      />

      <Footer />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageDetail from "@/components/PackageDetail";

export default function DubaiPage() {
  return (
    <>
      <Navbar />

      <PackageDetail
        title="Dubai Escape"
        location="Dubai, United Arab Emirates"
        duration="Custom Journey"
        price="Enquire"
        priceNote="Contact JP Wings Travel for package details"
        heroImage="/images/dubai/hero.jpg"
        description="Discover Dubai through a personalised journey designed around your travel preferences and experiences."
        hotel="Custom"
        minimumPeople="Enquire"
        gallery={[
          "/images/dubai/dubai-1.jpg",
          "/images/dubai/dubai-2.jpg",
          "/images/dubai/dubai-3.jpg",
          "/images/dubai/dubai-4.jpg",
        ]}
        itinerary={[
          {
            day: "DAY 01",
            title: "Arrival in Dubai",
            description:
              "Arrival in Dubai followed by transfer and hotel check-in.",
          },
          {
            day: "DAY 02",
            title: "Dubai Experiences",
            description:
              "Explore selected Dubai attractions and experiences based on your itinerary.",
          },
          {
            day: "DAY 03",
            title: "Explore & Discover",
            description:
              "Enjoy more of Dubai with experiences planned according to your travel preferences.",
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
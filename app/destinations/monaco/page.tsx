import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageDetail from "@/components/PackageDetail";

export default function MonacoPage() {
  return (
    <>
      <Navbar />

      <PackageDetail
        title="Monaco Experience"
        location="Monaco, Europe"
        duration="Custom Journey"
        price="Enquire"
        priceNote="Contact JP Wings Travel for package details"
        heroImage="/images/monaco/hero.jpg"
        description="Experience Mediterranean elegance, coastal beauty and unforgettable moments through a personalised Monaco journey."
        hotel="Custom"
        minimumPeople="Enquire"
        gallery={[
          "/images/monaco/monaco-1.jpg",
          "/images/monaco/monaco-2.jpg",
          "/images/monaco/monaco-3.jpg",
          "/images/monaco/monaco-4.jpg",
        ]}
        itinerary={[
          {
            day: "DAY 01",
            title: "Arrival",
            description:
              "Arrival followed by transfer and hotel check-in.",
          },
          {
            day: "DAY 02",
            title: "Discover Monaco",
            description:
              "Explore Monaco and its surrounding attractions according to your itinerary.",
          },
          {
            day: "DAY 03",
            title: "Coastal Experiences",
            description:
              "Enjoy selected experiences and beautiful Mediterranean surroundings.",
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
          "Transfers as per itinerary",
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
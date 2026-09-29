import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackageDetail from "@/components/PackageDetail";

export default function VietnamPage() {
  return (
    <>
      <Navbar />

      <PackageDetail
        title="Amazing Vietnam"
        location="Vietnam"
        duration="3 Nights / 4 Days"
        price="₹80,000"
        priceNote="Per person • Twin sharing • Minimum 10 people"
        heroImage="/images/vietnam/hero.jpg"
        description="A memorable Vietnam journey through Ho Chi Minh City, the Cu Chi Tunnels and the Mekong Delta."
        hotel="04 Star Ramana Saigon Hotel"
        minimumPeople="10 people"
        gallery={[
          "/images/vietnam/vietnam-1.jpg",
          "/images/vietnam/vietnam-2.jpg",
          "/images/vietnam/vietnam-3.jpg",
        ]}
        itinerary={[
          {
            day: "DAY 01",
            title: "Arrival Ho Chi Minh City",
            description:
              "Arrival in Ho Chi Minh City followed by transfer and hotel check-in.",
          },
          {
            day: "DAY 02",
            title: "Cu Chi Tunnels & Shopping",
            description:
              "Explore the Cu Chi Tunnels followed by shopping and local experiences.",
          },
          {
            day: "DAY 03",
            title: "Mekong Delta River",
            description:
              "Experience the Mekong Delta River and explore the surrounding local attractions.",
          },
          {
            day: "DAY 04",
            title: "Back to Home",
            description:
              "Check out and proceed for your return journey.",
          },
        ]}
        inclusions={[
          "Ex-Bangalore return air tickets",
          "4-star hotel stay",
          "All transfers and tours",
          "Meals as per itinerary",
          "English-speaking guide",
          "Vietnam E-Visa",
        ]}
        exclusions={[
          "GST 5% + TCS",
          "Beverage expenses",
          "Personal expenses",
          "Early check-in",
          "Late check-out",
        ]}
      />

      <Footer />
    </>
  );
}
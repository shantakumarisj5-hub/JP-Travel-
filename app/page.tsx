import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import FeaturedPackages from "@/components/FeaturedPackages";
import TravelShowcase from "@/components/TravelShowcase";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Destinations />

        <FeaturedPackages />

        <TravelShowcase />

        <Services />

        <WhyChooseUs />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
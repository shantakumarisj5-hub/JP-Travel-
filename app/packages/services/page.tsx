import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Services />
      </main>

      <Footer />
    </>
  );
}
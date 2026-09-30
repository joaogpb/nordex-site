import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import RentalSection from "../components/RentalSection";
import HowItWorks from "../components/HowItWorks";
import BusinessSection from "../components/BusinessSection";
import Benefits from "../components/Benefits";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <RentalSection />
        <HowItWorks />
        <BusinessSection />
        <Benefits />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

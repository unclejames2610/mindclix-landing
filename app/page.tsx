import Image from "next/image";
import HeroPage from "./hero/page";
import Navbar from "@/components/Navbar";
import TherapyTypePage from "./therapy-type/page";
import AboutPage from "./about/page";
import HowItWorksPage from "./how-it-works/page";
import OurTherapistsPage from "./our-therapists/page";
import GetStartedPage from "./get-started/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Navbar />
      <HeroPage />
      <TherapyTypePage />
      <AboutPage />
      <HowItWorksPage />
      <OurTherapistsPage />
      <GetStartedPage />
      <Footer />
    </div>
  );
}

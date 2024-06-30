import Image from "next/image";
import Hero from "../components/Hero";
import Commitment from "@/components/Commitment";
import Experience from "@/components/Experience";
import Locations from "@/components/Locations";
import SpecialOffers from "@/components/SpecialOffers";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Commitment />
      <Experience />
      <Locations />
      <SpecialOffers />
      <ContactUs />
    </div>
  );
}

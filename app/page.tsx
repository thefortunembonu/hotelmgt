import Image from "next/image";
import Hero from "../components/sections/Hero";
import Commitment from "@/components/sections/Commitment";
import Experience from "@/components/sections/Experience";
import Locations from "@/components/sections/Locations";
import SpecialOffers from "@/components/sections/SpecialOffers";
import ContactUs from "@/components/sections/ContactUs";

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

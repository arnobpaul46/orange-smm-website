import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Services/>
    </div>
  );
}

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PaymentMethods from "@/components/PaymentMethods";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WorkingProcess from "@/components/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Stats/>
      <Services/>
      <WorkingProcess/>
      <PaymentMethods/>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import GrowthCard from "./GrowthCard";

const data = [
  {
    period: "Weeks 1-2",
    sections: [
      { number: "01", title: "What You Do",         text: "Use SMM services to build initial followers and engagement" },
      { number: "02", title: "Why It Works",        text: "Creates baseline credibility and improves first impression" },
      { number: "03", title: "Estimated Cost/Time", text: "৳2,000–5,000" },
    ],
  },
  {
    period: "Weeks 3-4",
    sections: [
      { number: "01", title: "What You Do",         text: "Start posting consistent, high-quality content" },
      { number: "02", title: "Why It Works",        text: "Larger follower base increases organic engagement" },
      { number: "03", title: "Estimated Cost/Time", text: "Mostly content effort" },
    ],
  },
  {
    period: "Months 2-3",
    sections: [
      { number: "01", title: "What You Do",         text: "Continue content + light support if needed" },
      { number: "02", title: "Why It Works",        text: "Faster reach, better algorithm response" },
      { number: "03", title: "Estimated Cost/Time", text: "Reduced SMM usage" },
    ],
  },
  {
    period: "Months 3-6",
    sections: [
      { number: "01", title: "What You Do",         text: "Focus mainly on organic growth" },
      { number: "02", title: "Why It Works",        text: "Strong engagement pushes content naturally" },
      { number: "03", title: "Estimated Cost/Time", text: "Minimal or no SMM needed" },
    ],
  },
];

export default function Growth() {
  return (
    <section className="w-full bg-white py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Heading ===== */}
        <div className="text-center">
          <span className="relative inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#FF6B00]">
            GROWTH
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-10 h-[2px] bg-[#FF6B00]" />
          </span>

          <h2 className="mt-5 font-heading text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-[1.15] text-[#1A1A1A]">
            Growing on Social Media in{" "}
            <span className="text-[#FF6B00]">Bangladesh</span>
          </h2>

          <p className="mt-4 text-[12.5px] text-gray-600 leading-[1.7] max-w-2xl mx-auto">
            The smartest way to grow is by combining SMM support with real
            content. You use SMM at the beginning for momentum, then let
            organic growth take over.
          </p>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {data.map((card, idx) => (
            <motion.div
              key={card.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GrowthCard period={card.period} sections={card.sections} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
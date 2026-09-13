"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  {
    icon: "/OrderProcessed.png",
    value: "321,879",
    label: "Order Processed",
  },
  {
    icon: "/AvailableServices.png",
    value: "6,245",
    label: "Available Services",
  },
  {
    icon: "/RegisteredUser.png",
    value: "8,552",
    label: "Registered User",
  },
  {
    icon: "/RegionalRank.png",
    value: "#1",
    label: "Regional Rank",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Stats() {
  return (
    <section className="w-full bg-[#FAF7F4] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="bg-white rounded-2xl border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(255,107,0,0.12)] transition-shadow duration-300 px-4 py-6 sm:py-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Number  */}
              <h3 className="font-manrope font-bold text-[22px] sm:text-[26px] lg:text-[28px] leading-none text-[#1A1A1A]">
                {stat.value}
              </h3>

              {/* Label  */}
              <p className="mt-2 text-[12px] sm:text-[13px] font-medium text-[#FF6B00]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
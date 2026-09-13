"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { serviceTabs, facebookService } from "@/data/servicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const [active, setActive] = useState("facebook");

  return (
    <section className="relative w-full bg-[#FAF7F4] py-14 lg:py-20 overflow-hidden">
      {/* 3D Facebook Cube */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden lg:block absolute left-0 top-[55%] -translate-y-1/2 z-10 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, -6, 0, 6, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/3dFb.png"
              alt="Facebook 3D"
              width={160}
              height={160}
              className="w-[120px] xl:w-[160px] h-auto drop-shadow-2xl bottom-[-250px] relative"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="relative inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#FF6B00]">
            our services
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-8 h-[2px] bg-[#FF6B00]" />
          </span>

          <h2 className="mt-5 font-heading text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.15] text-[#1A1A1A]">
            Powerful <span className="text-[#FF6B00]">SMM Services</span> for Fast Growth
          </h2>

          <p className="mt-4 text-[12.5px] sm:text-[13px] text-gray-600 leading-[1.7]">
            Explore our comprehensive range of social media marketing services
            designed to help you grow your presence across all major platforms.
            From Facebook to TikTok, we've got you covered.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.03 } },
          }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
        >
          {serviceTabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <motion.button
                key={tab.id}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                }}
                onClick={() => setActive(tab.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] text-white border-transparent shadow-sm"
                    : "bg-[#FDF6F0] text-gray-700 border-[#F1E5DA] hover:border-[#FFB98A] hover:text-[#FF6B00]"
                }`}
              >
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px] object-contain flex-shrink-0"
                />
                <span className="truncate">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Facebook Card */}
        <ServiceCard data={facebookService} />

      </div>
    </section>
  );
}
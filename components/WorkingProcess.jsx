"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Create Account",
    description:
      "Sign up quickly using your email or social login and get instant access to all TrendEvo services. Manage and track your orders easily from a single dashboard.",
    card: "top-left",
    showDots: true,
    dotPos: "bottom-left-outside",
  },
  {
    number: "02",
    title: "Add Funds",
    description:
      "Deposit funds securely via credit/debit card, bank transfer, or cryptocurrency. Your wallet is credited instantly so you can start placing orders immediately.",
    card: "top-right",
    showDots: false,
  },
  {
    number: "03",
    title: "Select Service",
    description:
      "Select from Instagram, TikTok, YouTube, or Facebook services with clear pricing, delivery times, and reliability stats. Pick the package that fits your growth goals perfectly.",
    card: "bottom-left",
    showDots: false,
  },
  {
    number: "04",
    title: "Place your order",
    description:
      "Enter your account details, select the desired quantity, and submit your order. Real-time validation ensures everything is accurate and ready to process quickly.",
    card: "bottom-right",
    showDots: true,
    dotPos: "bottom-right-inside",
  },
];

const cardBg = {
  "top-left":     "bg-gradient-to-br from-[#FFD9BA] via-[#FFECDD] to-white",
  "top-right":    "bg-white",
  "bottom-left":  "bg-white",
  "bottom-right": "bg-gradient-to-tl from-[#FFD9BA] via-[#FFECDD] to-white",
};

export default function WorkingProcess() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-[#FFF8F3] to-white py-14 lg:py-20">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="relative inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#FF6B00]">
            WORKING PROCESS
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-10 h-[2px] bg-[#FF6B00]" />
          </span>

          <h2 className="mt-5 font-heading text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.15] text-[#1A1A1A]">
            Grow Your <span className="text-[#FF6B00]">Socials</span> in 4 Simple Steps
          </h2>

          <p className="mt-4 text-[12.5px] sm:text-[13px] text-gray-600 leading-[1.7]">
            A simple and efficient process designed to deliver fast and reliable
            results. Just place your order, and our system will handle the rest
            to help grow your social media presence smoothly.
          </p>
        </motion.div>

        {/* ===== Grid ===== */}
        <div className="relative mt-14 lg:mt-24">

          {/* Center Circle — rotate animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Image
                src="/circleConnect.png"
                alt="Connect"
                width={170}
                height={170}
                className="w-[140px] xl:w-[160px] h-auto drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-14 lg:gap-y-24">
            {steps.map((step, i) => {
              const isOutside = step.dotPos === "bottom-left-outside";

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Card Background Layer */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${cardBg[step.card]}`}
                  />

                  {/* ===== Dot Pattern ===== */}
                  {step.showDots && (
                    <div
                      className={`absolute w-20 h-20 pointer-events-none ${
                        isOutside
                          ? "-top-6 -left-20 "    
                          : "bottom-0 right-0 "       
                      }`}
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, #FF9A5C 1.5px, transparent 1.5px)",
                        backgroundSize: "8px 8px",
                      }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-7 lg:p-8">
                    <span className="font-schibsted font-bold text-[40px] sm:text-[46px] lg:text-[52px] leading-none text-[#FF6B00] tracking-tight">
                      {step.number}
                    </span>

                    <h3 className="mt-2 font-heading text-base sm:text-lg font-bold text-[#FF6B00]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[12.5px] sm:text-[13px] text-gray-600 leading-[1.75] max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
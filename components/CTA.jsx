"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative w-full bg-white  pb-14 lg:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* ===== Background Box (cream, rounded) ===== */}
          <div className="absolute inset-0 top-12 sm:top-16 lg:top-20 rounded-3xl bg-[#FFF5EC] overflow-hidden">
            {/* Background Map inside box */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-[65%] sm:w-[60%] lg:w-[55%] h-[80%] opacity-40">
                <Image
                  src="/globalMap.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* ===== Content Grid (relative on top) ===== */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] items-end">

            {/* ===== Left: Text & Buttons ===== */}
            <div className="p-8 sm:p-10 lg:p-12 lg:pr-6 pt-20 sm:pt-24 lg:pt-28">
              <h2 className="font-heading font-bold text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.2] text-[#1A1A1A] max-w-[440px]">
                Ready to Grow Your Social Media in{" "}
                <span className="text-[#FF6B00]">Bangladesh?</span>
              </h2>

              <p className="mt-4 text-[13px] sm:text-[13.5px] text-[#4A4A4A] leading-[1.7] max-w-[480px]">
                Join over 68,000 users who are already using SMM to grow faster
                on Facebook, Instagram, YouTube, TikTok, and more. Getting
                started is free and takes less than 60 seconds.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className="px-6 py-3 rounded-lg text-[13px] font-semibold text-[#FF6B00] bg-white border border-[#FFB98A] hover:bg-orange-50 transition-colors"
                >
                  See All Services
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href="#"
                  className="px-6 py-3 rounded-lg text-[13px] font-semibold text-white shadow-md hover:shadow-lg transition-all"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF6B00 0%, #CC4D02 50%, #A13C0B 100%)",
                  }}
                >
                  Create Free Account
                </motion.a>
              </div>
            </div>

            {/* ===== Right: Lady Image (extends above box) ===== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="relative flex justify-center lg:justify-end items-end"
            >
              <div className="relative w-[280px] sm:w-[340px] lg:w-[400px] h-[380px] sm:h-[440px] lg:h-[500px] -mb-0">
                <Image
                  src="/lady.png"
                  alt="Ready to grow"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
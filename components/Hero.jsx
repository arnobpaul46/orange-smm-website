"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFFBF8] via-[#FFF5EE] to-[#FFE7D6] pt-8 pb-12 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left order-2 lg:order-1"
          >
            {/* Rating Row */}
            <div className="flex items-center gap-1 mb-5">
              <Star size={20} className="fill-[#2BB673] text-[#2BB673]" />
              <div className="flex gap-[2px]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-white bg-[#FF6B00] rounded-sm p-0.5"
                    strokeWidth={2}
                  />
                ))}
                
              </div>
              
              <span className="text-[13px] sm:text-sm font-medium text-gray-700 ml-1">
                Excellent 4.8 out of 5
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] tracking-tight">
              <span className="text-[#FF6B00]">Best SMM Panel</span>
              <br />
              <span className="text-[#1A1A1A]">in Bangladesh – </span>
              <span className="text-[#FF6B00]">Fast ,Safe &</span>
              <br />
              <span className="text-[#1A1A1A]">Growth in Social Media.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-[13px] sm:text-[14px] text-gray-600 leading-[1.7] max-w-[560px]">
              SMM is Bangladesh's most reliable & cheap SMM panel for real social
              media growth. We built this platform for Bangladeshi businesses,
              creators, and agencies. You get fast delivery, safe methods, and
              followers that actually stay. No fake bots. No account risks. Just
              real results. Most panels chase big numbers. We focus on keeping
              those numbers. You get retention guarantees, delivery control, and
              long-term credibility.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-row gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-md text-[13px] sm:text-sm font-semibold text-[#FF6B00] bg-white border border-[#FF6B00] hover:bg-orange-50 transition-colors"
              >
                View Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-md text-[13px] sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] shadow-md hover:shadow-lg transition-all"
              >
                Create an Account
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <Image
              src="/HeroImg.png"
              alt="SMM Panel Hero"
              width={620}
              height={620}
              priority
              className="w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[620px] h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
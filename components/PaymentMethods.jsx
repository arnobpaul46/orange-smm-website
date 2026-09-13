"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const paymentIcons = [
  { id: "paypal", src: "/paypal.png", alt: "PayPal",     top: "78.8%", left: "25.7%", delay: 0.00 },
  { id: "gpay",   src: "/gpay.png",   alt: "G Pay",      top: "60.1%", left: "30.2%", delay: 0.08 },
  { id: "sepa",   src: "/sepa.png",   alt: "SEPA",       top: "43.8%", left: "39.1%", delay: 0.16 },
  { id: "visa",   src: "/visa.png",   alt: "Visa",       top: "38.0%", left: "50%",   delay: 0.24 },
  { id: "master", src: "/master.png", alt: "Mastercard", top: "43.8%", left: "60.9%", delay: 0.32 },
  { id: "box",    src: "/box.png",    alt: "Box",        top: "60.1%", left: "69.8%", delay: 0.40 },
  { id: "apple",  src: "/apple.png",  alt: "Apple Pay",  top: "78.8%", left: "74.3%", delay: 0.48 },
];

export default function PaymentMethods() {
  return (
    <section className="relative w-full bg-white pt-14 lg:pt-20 pb-12 lg:pb-16 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="relative inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#FF6B00]">
            Payment Methods
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-10 h-[2px] bg-[#FF6B00]" />
          </span>

          <h2 className="mt-5 font-heading text-2xl sm:text-3xl lg:text-[36px] font-bold leading-[1.15] text-[#1A1A1A]">
            Multiple Payment <span className="text-[#FF6B00]">Methods</span>
          </h2>

          <p className="mt-4 text-[12.5px] sm:text-[13px] text-gray-600 leading-[1.7]">
            We accept Visa, Mastercard, American Express, PayPal, Nagad, Rocket,
            and more, so you are never stuck at checkout. Deposits are instant,
            and you can start with as little as $1, which means there is no
            reason to wait before placing your first order.
          </p>
        </motion.div>

        {/* ===== Map + White Circle + Arcs + Icons ===== */}
        <div className="relative mt-12 lg:mt-16">
          <div
            className="relative w-full mx-auto"
            style={{ aspectRatio: "12 / 5", maxWidth: "900px" }}
          >

            {/* Layer 1: Map */}
            <Image
              src="/map.png"
              alt="World map"
              fill
              priority
              className="object-contain object-bottom"
            />


            <div
              className="absolute inset-0 pointer-events-none z-[5]"
              style={{
                background:
                  "radial-gradient(ellipse 32% 70% at 50% 100%, #FFFFFF 0%, #FFFFFF 45%, rgba(255,255,255,0.6) 75%, rgba(255,255,255,0) 100%)",
              }}
            />

            {/*  Arcs */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 1200 500"
              preserveAspectRatio="xMidYMax meet"
            >
              
              <path
                d="M 220 500 A 380 380 0 0 1 980 500"
                fill="none"
                stroke="#FFD9B8"
                strokeWidth="2"
              />
              
              <path
                d="M 290 500 A 310 310 0 0 1 910 500"
                fill="none"
                stroke="#FFB98A"
                strokeWidth="2.5"
              />
              {/* Inner arc — r=240 */}
              <path
                d="M 360 500 A 240 240 0 0 1 840 500"
                fill="none"
                stroke="#FFD9B8"
                strokeWidth="2"
              />
            </svg>

            {/*  Payment icons */}
            {paymentIcons.map((icon) => (
              <motion.div
                key={icon.id}
                initial={{ opacity: 0, scale: 0.4, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 16,
                  delay: 0.25 + icon.delay,
                }}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ top: icon.top, left: icon.left }}
              >
                <motion.div
                  whileHover={{ scale: 1.12, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-full  flex items-center justify-center
                             w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={50}
                    height={50}
                    className="w-8 h-6 sm:w-7 sm:h-7 lg:w-20 lg:h-20 object-contain  "
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== Heading (Bottom) ===== */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative w-full text-center leading-[0.95] select-none pointer-events-none mt-4 lg:mt-6"
          style={{
            color: "#FFD9B8",
            opacity: 0.55,
            fontFamily: "var(--font-archivo-black), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(1.75rem, 8.5vw, 5.5rem)",
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}
        >
          MULTIPLE PAYMENTS
        </motion.h3>

      </div>
    </section>
  );
}
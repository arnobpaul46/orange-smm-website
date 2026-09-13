"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is buying followers legal in Bangladesh?",
    a: "Yes, buying followers or likes is not illegal in Bangladesh. It's considered a marketing strategy to improve social proof. Just make sure you don't violate any platform rules, and your account stays safe.",
  },
  {
    q: "What if service is not delivered?",
    a: "If a service is not delivered within the promised timeframe, you can open a support ticket. We either complete the order or refund the amount to your panel balance — no questions asked.",
  },
  {
    q: "How long does delivery take?",
    a: "Most services start within 0-30 minutes. Full delivery depends on the order size, but generally completes within 2-24 hours. Some gradual services may take 2-4 days to look natural.",
  },
  {
    q: "Is Drip feed safer?",
    a: "Yes. Drip feed spreads your order over a longer period so growth looks organic. This reduces the chance of platform algorithms flagging sudden activity spikes.",
  },
  {
    q: "Can I order daily?",
    a: "Absolutely. You can place as many orders per day as you want. Just avoid running two orders on the same link at the same time to prevent delivery conflicts.",
  },
  {
    q: "Can agencies resell services?",
    a: "Yes. Our panel supports resellers and agencies. You can use the API, set your own prices, and offer services under your own brand. White-label options are available on request.",
  },
  {
    q: "Will engagement drop?",
    a: "We use high-retention methods, so engagement stays stable. Occasional natural drop (2-5%) can happen on any platform, but our refill guarantee covers those cases free of charge.",
  },
  {
    q: "Which platform is best for business in BD?",
    a: "It depends on your audience. Facebook still dominates for local businesses, Instagram works best for lifestyle and fashion, TikTok for viral reach, and YouTube for long-form authority. Most successful brands combine 2-3 platforms.",
  },
];


const leftItems  = faqs.filter((_, i) => i % 2 === 0);
const rightItems = faqs.filter((_, i) => i % 2 === 1);

function FaqItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;

  return (
    <div
      className={`rounded-2xl overflow-hidden transition-colors duration-300 ${
        isOpen
          ? "bg-gradient-to-br from-[#DD6017] via-[#C94D12] to-[#B03A08]"
          : "bg-[#F5F0EB]"
      }`}
    >
      {/* Question Row */}
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span
          className={`text-[13px] sm:text-[13.5px] font-semibold leading-snug ${
            isOpen ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {item.q}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown
            size={18}
            className={isOpen ? "text-white" : "text-[#1A1A1A]"}
            strokeWidth={2.5}
          />
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[12.5px] leading-[1.7] text-white/90">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); 

  return (
    <section className="relative w-full bg-white py-14 lg:py-20">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="relative inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#FF6B00]">
            FAQ
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-10 h-[2px] bg-[#FF6B00]" />
          </span>

          <h2 className="mt-5 font-heading text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-[1.15] text-[#1A1A1A]">
            Frequently Asked <span className="text-[#FF6B00]">Questions</span>
          </h2>

          <p className="mt-4 text-[12.5px] text-gray-600 leading-[1.7]">
            Find clear and simple explanations to the most common questions
            about our services, payments, orders, and account management.
          </p>
        </motion.div>

        {/* Two Column FAQ Grid  */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Left column */}
          <div className="flex flex-col gap-4">
            {leftItems.map((item, i) => {
              const realIndex = i * 2; 
              return (
                <FaqItem
                  key={item.q}
                  item={item}
                  index={realIndex}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              );
            })}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {rightItems.map((item, i) => {
              const realIndex = i * 2 + 1; 
              return (
                <FaqItem
                  key={item.q}
                  item={item}
                  index={realIndex}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
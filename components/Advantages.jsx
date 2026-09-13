"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const advantages = [
  {
    icon: "/password.png",
    title: "We Never Ask for Your Password",
    description: (
      <>
        You give us your username or profile link. That's it. We can't access
        your account. When you buy followers from us, we're accessing your
        public profile. The same profile millions of people can already see.<br />
        <span className="text-[#05C191] font-medium underline underline-offset-2">
          Zero security risk.
        </span>
      </>
    ),
  },
  {
    icon: "/bot.png",
    title: "We Use Real Users, Not Bots",
    description: (
      <>
        This is the difference between safe and unsafe SMM services. Unsafe
        services use bots, fake accounts, and empty profiles. Instagram,
        Facebook, and YouTube algorithms detect these instantly. That's when
        bans happen.{" "}
        <ArrowRight className="inline-block w-4 h-4 ml-1 text-[#05C191]" strokeWidth={2.5} />
      </>
    ),
  },
  {
    icon: "/growth.png",
    title: "We Deliver Gradually",
    description: (
      <>
        Imagine gaining 5,000 followers overnight. That looks suspicious.
        Algorithms notice. They flag your account. We spread delivery over
        time. 5,000 followers arrive over 2–4 days, not 2 hours. This makes
        growth look natural. Social media algorithms see steady growth, not
        sudden spikes.
      </>
    ),
  },
  {
    icon: "/record.png",
    title: "We Track Record",
    description: (
      <>
        321,879 completed orders. Not a single customer has reported an
        account ban caused by our services. That's not luck. We follow
        platform guidelines. We understand how Instagram, Facebook, YouTube,
        and TikTok detect fake activity. We stay within those boundaries.
      </>
    ),
  },
];

export default function Advantages() {
  return (
    <section className="relative w-full bg-white py-14 lg:py-20 overflow-hidden">

      {/* ===== Top-Left Wave ===== */}
      <div className="absolute top-0 left-0 w-[55%] max-w-[720px] h-[340px] pointer-events-none z-0">
        <Image
          src="/wave1.svg"
          alt=""
          fill
          className="object-contain object-top-left"
          priority
        />
      </div>

      {/* ===== Bottom-Right Wave ===== */}
      <div className="absolute bottom-0 right-0 w-[55%] max-w-[720px] h-[340px] pointer-events-none z-0">
        <Image
          src="/wave2.svg"
          alt=""
          fill
          className="object-contain object-bottom-right"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="relative inline-block text-[11px] font-bold tracking-[0.18em] uppercase text-[#FF6B00]">
            ADVANTAGES
            <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-10 h-[2px] bg-[#FF6B00]" />
          </span>

          <h2 className="mt-5 font-heading text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-[1.15] text-[#1A1A1A]">
            Advantages of using{" "}
            <span className="text-[#FF6B00]">our panel services</span>
          </h2>

          <p className="mt-4 text-[12.5px] text-gray-600 leading-[1.7]">
            Find clear and simple explanations to the most common questions
            about our services, payments, orders, and account management.
          </p>
        </motion.div>

        {/* ===== 2x2 Cards Grid ===== */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {advantages.map((adv, idx) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-white rounded-2xl p-5 lg:p-6"
              style={{
                boxShadow: "0 6px 24px rgba(255, 107, 0, 0.08)",
                border: "1px solid #FFF1E5",
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FFF5EC] to-[#FFE8D5] flex items-center justify-center">
                  <Image
                    src={adv.icon}
                    alt={adv.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-[15px] text-[#1A1A1A] leading-tight">
                {adv.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 text-[12.5px] text-gray-600 leading-[1.7]">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
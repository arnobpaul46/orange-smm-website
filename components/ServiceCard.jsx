"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ServiceCard({ data }) {
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-8 rounded-xl border border-[#FFB98A] bg-white overflow-hidden"
    >
      <div className="grid md:grid-cols-[1fr_1.15fr] gap-6 lg:gap-8 p-5 sm:p-6 lg:p-7 items-stretch">

        {/* LEFT side */}
        <div className="relative rounded-lg bg-gradient-to-b from-[#FFF0E0] via-[#FFE1C2] to-[#FFC48B] min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] flex items-end justify-center overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={500}
            priority
            className="w-[85%] max-w-[340px] h-auto object-contain"
          />
        </div>

        {/* RIGHT side */}
        <div className="flex flex-col justify-center py-1">
          <h3 className="font-heading text-lg sm:text-xl lg:text-[22px] font-bold text-[#FF6B00] leading-tight">
            {data.title}
          </h3>

          <p className="mt-2.5 text-[12.5px] sm:text-[13px] text-gray-600 leading-[1.7]">
            {data.description}
          </p>

          {data.items.length > 0 && (
            <ul className="mt-4 space-y-2.5">
              {data.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-[1px] w-6 h-6 rounded-md bg-[#FF6B00] text-white text-[10px] font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[12px] sm:text-[12.5px] text-gray-600 leading-[1.6]">
                    <span className="font-semibold text-[#FF6B00]">
                      {item.label}-
                    </span>{" "}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="inline-block px-5 py-2.5 rounded-md text-[12.5px] font-semibold text-white bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] shadow-sm hover:shadow-md transition-all"
            >
              {data.buttonText}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
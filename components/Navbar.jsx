"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Services", href: "#" },
  { label: "Blog", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "API", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-[#FFFBF8] to-[#FFEFE2] shadow-sm border-b border-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="bg-white rounded-xl px-6 py-2.5 shadow-sm inline-block"
            >
              <span className="text-[#FF6B00] font-bold text-lg tracking-wider">
                LOGO
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.active
                    ? "text-[#FF6B00]"
                    : "text-gray-700 hover:text-[#FF6B00]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop  */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-[#FF6B00] bg-white border border-[#FF6B00] hover:bg-orange-50 transition-colors"
            >
              Sign In
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200] shadow-md hover:shadow-lg transition-all"
            >
              Sign Up
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#FFFBF8] border-t border-orange-100"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base font-medium ${
                    link.active ? "text-[#FF6B00]" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#"
                  className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold text-[#FF6B00] bg-white border border-[#FF6B00]"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="w-full text-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#FF9243] via-[#DD6017] to-[#983200]"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
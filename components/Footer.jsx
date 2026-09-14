"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const quickLinks = [
    "Home", "About Us", "Services", "Blog",
    "Contact Us", "Terms of Service", "Privacy Policy", "Refund Policy",
];

const serviceLinks = [
    "Facebook SMM Panel", "Instagram SMM Panel", "YouTube SMM Panel",
    "TikTok SMM Panel", "Telegram SMM Panel", "X-Twitter SMM Panel",
];

const socials = [
    { src: "/facebook.png", alt: "Facebook", href: "#" },
    { src: "/Instagram.png", alt: "Instagram", href: "#" },
    { src: "/Youtube.png", alt: "YouTube", href: "#" },
    { src: "/telegram.png", alt: "Telegram", href: "#" },
    { src: "/discord.png", alt: "Discord", href: "#" },
];

const contacts = [
    { src: "/mail.png", alt: "Email", text: "info@smmsun.com" },
    { src: "/WhatsApp.png", alt: "WhatsApp", text: "+1 833 252 278" },
    { src: "/men.png", alt: "Location", text: "Serving all of Bangladesh\nSupport: 24/7" },
];

export default function Footer() {
    return (
        <footer className="relative w-full bg-white ">
            <div className="relative w-full rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#B03A08] via-[#C94D12] to-[#DD6017]">

                {/* Top triangle pattern */}
                <div className="absolute top-0 left-0 right-0 h-[40%] pointer-events-none ">
                    <Image
                        src="/traiangle2.svg"
                        alt=""
                        fill
                        className="object-cover object-top"
                    />
                </div>

                {/* Bottom triangle pattern  */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none ">
                    <Image
                        src="/traiangle1.svg"
                        alt=""
                        fill
                        className="object-cover object-bottom"
                    />
                </div>

                {/* Content  */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-10 lg:py-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-8 lg:gap-6">

                        {/* Column 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={32}
                                    height={32}
                                    className="w-7 h-7 object-contain"
                                />
                                <span className="font-heading font-bold text-[15px] tracking-tight text-[#FF6B00]">
                                    Orange<br />
                                    <span className=" text-green-600">SMM Panel</span>
                                </span>
                            </div>

                            <p className="mt-5 text-[12px] sm:text-[12.5px] text-white/85 leading-[1.7] max-w-[280px]">
                                SMM is Bangladesh's most trusted SMM panel. We offer fast,
                                affordable social media growth services for every platform,
                                with full support for local payments like bKash and Nagad.
                            </p>

                            <div className="mt-5 flex items-center gap-2">
                                {socials.map((s, i) => (
                                    <motion.a
                                        key={i}
                                        href={s.href}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/25 bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        <Image
                                            src={s.src}
                                            alt={s.alt}
                                            width={22}
                                            height={22}
                                            className="w-[22px] h-[22px] object-contain"
                                        />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Column 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h4 className="font-heading font-bold text-[15px] text-white mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-[12.5px] text-white/85 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Column 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h4 className="font-heading font-bold text-[15px] text-white mb-4">
                                Services Pages
                            </h4>
                            <ul className="space-y-2.5">
                                {serviceLinks.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-[12.5px] text-white/85 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Column 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h4 className="font-heading font-bold text-[15px] text-white mb-4">
                                Contact Info
                            </h4>
                            <ul className="space-y-3">
                                {contacts.map((c, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center border border-white/25 bg-white/10">
                                            <Image
                                                src={c.src}
                                                alt={c.alt}
                                                width={16}
                                                height={16}
                                                className="w-4 h-4 object-contain"
                                            />
                                        </span>
                                        <span className="text-[12.5px] text-white/85 leading-[1.6] whitespace-pre-line pt-1">
                                            {c.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>

                    {/* Bottom  */}
                    <div className="mt-8 rounded-md bg-black/20 px-4 py-3 text-center">
                        <p className="text-[11px] sm:text-[12px] text-white/85">
                            © 2026 SMM Limited. All Rights Reserved. | Operated under the
                            Bangladesh ICT framework.
                        </p>
                    </div>
                </div>

            </div>
        </footer>
    );
}
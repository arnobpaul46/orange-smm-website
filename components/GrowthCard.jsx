"use client";

export default function GrowthCard({ period, sections }) {
    return (
        <div className="w-full h-full max-w-sm mx-auto rounded-3xl bg-white p-6 shadow-sm border border-[#FF9843]/40">
            {/* ===== Period Badge ===== */}
            <div className="flex justify-center mb-6">
                <div className="px-8 py-2.5 rounded-2xl bg-gradient-to-r from-[#F06A1D] to-[#B83E00] text-white text-sm font-medium shadow-md">
                    {period}
                </div>
            </div>

            {/* ===== Sections ===== */}
            <div className="flex flex-col gap-4">
                {sections.map((s, i) => (
                    <div key={s.number || i} className="relative">
                        {/* Connecting Line between cards */}
                        {i < sections.length - 1 && (
                            <div className="absolute left-[33px] top-[65px] bottom-[-22px] z-10 flex flex-col items-center justify-between">
                                {/* Top Dot */}
                                <span className="w-2 h-2 rounded-full bg-[#FF6B00] shrink-0" />
                                {/* Dotted Line */}
                                <div className="w-0 border-l-2 border-dotted border-[#FF6B00] h-full my-0.5" />
                                {/* Bottom Dot */}
                                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] shrink-0" />
                            </div>
                        )}

                        {/* Section Card */}
                        <div className="bg-[#F6F7F9] rounded-2xl p-4.5 relative z-0">
                            <div className="flex items-start gap-4">
                                {/* Number Badge */}
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white to-[#FFF4ED] border border-[#FFD3B4] flex items-center justify-center shrink-0 shadow-sm">
                                    <span className="text-[#FF6B00] font-bold text-sm">
                                        {s.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h4 className="text-[#FF6B00] font-bold text-[15px] leading-tight mb-2">
                                        {s.title}
                                    </h4>
                                    <p className="text-[10px] text-gray-600 leading-relaxed font-normal">
                                        {s.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
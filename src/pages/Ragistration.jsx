import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const feeData = [
  {
    category: "Student UG/PG",
    amount: "₹500",
    currency: "INR",
    icon: "🎓",
    color: "from-emerald-400 to-green-500",
    shadow: "shadow-emerald-200/40",
    badge: "Most Popular",
  },
  {
    category: "Research Scholar",
    amount: "₹1,000",
    currency: "INR",
    icon: "🔬",
    color: "from-teal-400 to-emerald-500",
    shadow: "shadow-teal-200/40",
    badge: null,
  },
  {
    category: "Faculty",
    amount: "₹2,000",
    currency: "INR",
    icon: "🏫",
    color: "from-green-500 to-emerald-600",
    shadow: "shadow-green-200/40",
    badge: null,
  },
  {
    category: "Industrial Participants",
    amount: "₹2,500",
    currency: "INR",
    icon: "🏭",
    color: "from-emerald-600 to-teal-700",
    shadow: "shadow-emerald-300/30",
    badge: null,
  },
  {
    category: "International Participants",
    amount: "$50",
    currency: "USD",
    icon: "🌍",
    color: "from-cyan-500 to-teal-600",
    shadow: "shadow-cyan-200/40",
    badge: "International",
  },
];

const bankDetails = [
  { label: "Account Name", value: "Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex", icon: "🏛️" },
  { label: "Bank Name", value: "Punjab National Bank", icon: "🏦" },
  { label: "Account No.", value: "0952000100801471", icon: "💳", mono: true },
  { label: "MICR Code", value: "700024041", icon: "🔢", mono: true },
  { label: "Branch", value: "Salt Lake, Sector-I, Kolkata", icon: "📍" },
  { label: "IFSC Code", value: "PUNB0095200", icon: "🏷️", mono: true },
];

const Ragistration = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      // Hero text entrance
      gsap.from(".reg-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        clearProps: "all",
      });

      // Deadline badge pop
      gsap.from(".deadline-badge", {
        scale: 0.8,
        opacity: 0,
        duration: 0.7,
        ease: "back.out(1.7)",
        delay: 0.6,
        clearProps: "all",
      });

      // Fee cards stagger from bottom
      gsap.from(".fee-card", {
        scrollTrigger: {
          trigger: ".fee-cards-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        clearProps: "all",
      });

      // Bank details section slide in
      gsap.from(".bank-section", {
        scrollTrigger: {
          trigger: ".bank-section",
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        clearProps: "all",
      });

      // Individual bank rows stagger
      gsap.from(".bank-row", {
        scrollTrigger: {
          trigger: ".bank-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        clearProps: "all",
      });

      // CTA section
      gsap.from(".reg-cta", {
        scrollTrigger: {
          trigger: ".reg-cta",
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all",
      });

      // Floating orb pulse
      gsap.to(".orb-pulse", {
        scale: 1.15,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, pageRef);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#fafafa] overflow-hidden pt-20">
      {/* Background decorative orbs */}
      <div className="orb-pulse fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-3xl max-h-3xl bg-[#b8f29d] opacity-[0.06] blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-[40vw] h-[40vw] max-w-xl max-h-xl bg-emerald-300 opacity-[0.04] blur-[100px] rounded-full pointer-events-none z-0" />

      {/* ─── HERO SECTION ─────────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="reg-hero-text inline-block px-5 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-[#059669] bg-[#b8f29d]/20 rounded-full border border-[#b8f29d]/40">
            Registration 2026
          </span>

          <h1 className="reg-hero-text text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
            Secure Your <span className="text-[#059669]">Seat</span> at RDAMSE
          </h1>

          <p className="reg-hero-text text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Join researchers, scholars, and industry leaders at the 2nd International Conference on Recent
            Developments and Applications in Materials Science and Engineering.
          </p>

          {/* Deadline pill */}
          <div className="deadline-badge inline-flex items-center gap-3 px-6 py-3 bg-red-50 border border-red-200 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-black text-red-600 uppercase tracking-wider">
              Last Date of Registration:&nbsp;
            </span>
            <span className="text-sm font-black text-red-700">31 April 2026</span>
          </div>

          <div className="reg-hero-text w-24 h-1.5 bg-gradient-to-r from-[#b8f29d] to-[#059669] mx-auto rounded-full mt-10" />
        </div>
      </section>

      {/* ─── REGISTRATION FEES ────────────────────────────────── */}
      <section className="relative z-10 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
              Registration Fees
            </h2>
            <p className="text-gray-500 font-semibold text-base md:text-lg">
              Choose the category that applies to you
            </p>
          </div>

          {/* Cards grid */}
          <div className="fee-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {feeData.map((fee, idx) => (
              <div
                key={idx}
                className={`fee-card group relative flex flex-col items-center text-center p-7 rounded-[2rem] bg-white border border-gray-100 shadow-xl ${fee.shadow} hover:shadow-2xl hover:border-[#b8f29d] hover:-translate-y-2 transition-all duration-300 cursor-default overflow-hidden`}
              >
                {/* Top gradient strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-[2rem] bg-gradient-to-r ${fee.color}`} />

                {/* Badge */}
                {fee.badge && (
                  <span className={`absolute top-4 right-4 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full bg-gradient-to-r ${fee.color} text-white shadow-sm`}>
                    {fee.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#fafafa] border border-gray-100 flex items-center justify-center mb-5 mt-2 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                  <span className="text-3xl">{fee.icon}</span>
                </div>

                {/* Category */}
                <h3 className="text-sm font-black text-gray-700 uppercase tracking-wide mb-4 leading-snug min-h-[2.5rem] flex items-center">
                  {fee.category}
                </h3>

                {/* Divider */}
                <div className={`w-10 h-1 rounded-full bg-gradient-to-r ${fee.color} mb-4`} />

                {/* Amount */}
                <p className="text-4xl font-black text-gray-900 tracking-tight leading-none">
                  {fee.amount}
                </p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1.5">
                  {fee.currency}
                </p>
              </div>
            ))}
          </div>

          {/* Includes note */}
          <p className="text-center mt-8 text-sm text-gray-400 font-semibold">
            * Registration fee includes Proceedings, Conference Kit, Lunch, Banquet &amp; Tutorials
          </p>
        </div>
      </section>

      {/* ─── PAYMENT & BANK DETAILS ───────────────────────────── */}
      <section className="relative z-10 py-12 px-4 md:px-8 pb-24">
        <div className="max-w-5xl mx-auto bank-section">
          <div className="bg-white/80 backdrop-blur-2xl border border-white ring-1 ring-black/5 rounded-[3rem] shadow-2xl shadow-gray-200/60 overflow-hidden">
            
            {/* Card header */}
            <div className="relative bg-gray-900 px-8 md:px-14 py-10 overflow-hidden rounded-t-[3rem]">
              {/* Glow blobs */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#b8f29d] rounded-full blur-[80px]" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#059669] rounded-full blur-[80px]" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#b8f29d]/20 border border-[#b8f29d]/30 flex items-center justify-center text-2xl flex-shrink-0">
                  🏦
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                    Payment &amp; Bank Details
                  </h2>
                  <p className="text-gray-400 font-semibold text-sm mt-1">
                    Transfer your registration fee to the account below
                  </p>
                </div>
              </div>

              {/* Mode of payment pills */}
              <div className="relative z-10 flex flex-wrap gap-3 mt-8">
                {["NEFT / RTGS", "IMPS", "UPI", "Bank Transfer"].map((mode) => (
                  <span
                    key={mode}
                    className="px-4 py-1.5 text-xs font-black uppercase tracking-wider bg-white/10 border border-white/10 text-white rounded-full backdrop-blur-sm"
                  >
                    {mode}
                  </span>
                ))}
              </div>
            </div>

            {/* Bank details rows */}
            <div className="px-8 md:px-14 py-10 space-y-4">
              {bankDetails.map((detail, idx) => (
                <div
                  key={idx}
                  className="bank-row flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-2xl bg-[#fafafa] border border-gray-100 hover:border-[#b8f29d] hover:bg-[#f0fdf4] transition-all duration-300 group"
                >
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 sm:w-56 flex-shrink-0">
                    <span className="text-xl">{detail.icon}</span>
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                      {detail.label}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block w-px h-6 bg-gray-200 group-hover:bg-[#b8f29d] transition-colors flex-shrink-0" />

                  {/* Value */}
                  <span
                    className={`text-sm md:text-base font-black text-gray-900 leading-snug break-all ${
                      detail.mono ? "font-mono tracking-wider text-[#059669]" : ""
                    }`}
                  >
                    {detail.value}
                  </span>
                </div>
              ))}

              {/* Important note */}
              <div className="mt-8 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex gap-4">
                <span className="text-2xl flex-shrink-0">⚠️</span>
                <div className="space-y-1">
                  <p className="text-sm font-black text-amber-800 uppercase tracking-wide">
                    Important Instructions
                  </p>
                  <ul className="text-sm text-amber-700 font-semibold space-y-1.5 list-disc list-inside">
                    <li>After payment, send the transaction receipt to the conference email.</li>
                    <li>Mention your full name, institution and paper ID in the remarks.</li>
                    <li>Registration is confirmed only after payment verification.</li>
                    <li>Fees once paid are non-refundable.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA / BOTTOM BANNER ──────────────────────────────── */}
      <section className="relative z-10 py-24 bg-gray-900 text-white overflow-hidden rounded-t-[5rem]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#b8f29d] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#059669] rounded-full blur-[150px]" />
        </div>

        <div className="reg-cta max-w-4xl mx-auto px-6 text-center relative z-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to <span className="text-[#b8f29d]">Register?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
            Don't miss your chance to be part of RDAMSE 2026. Complete your registration before the deadline.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="px-10 py-4 bg-[#b8f29d] text-gray-900 font-black rounded-full shadow-xl shadow-emerald-400/20 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
              Deadline: 31 April 2026
            </div>
            <div className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-full text-sm">
              <span>📧</span> Send receipt after payment
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ragistration;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import templateFile from "../assets/Extended-abstract-template_2nd RDAMSE_2026.doc";

gsap.registerPlugin(ScrollTrigger);

const journals = [
  {
    name: "ChemistrySelect",
    publisher: "Wiley",
    index: "SCI Indexed",
    indexColor: "bg-emerald-500",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    bgColor: "bg-emerald-50",
    icon: "🧪",
    badge: "SCI",
    badgeStyle: "bg-emerald-500 text-white",
    description:
      "A premier journal by Wiley covering all areas of chemistry. Full-text peer-reviewed papers with international scientific recognition.",
    highlight: true,
  },
  {
    name: "Engineered Science (ES) General",
    publisher: "Engineered Science Publisher",
    index: "DoI Indexed",
    indexColor: "bg-blue-500",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    icon: "⚙️",
    badge: "DoI",
    badgeStyle: "bg-blue-500 text-white",
    description:
      "Covers broad engineering and science topics with a focus on applied research and interdisciplinary innovation.",
    highlight: false,
  },
  {
    name: "ES Chemistry and Sustainability",
    publisher: "Engineered Science Publisher",
    index: "DoI Indexed",
    indexColor: "bg-teal-500",
    textColor: "text-teal-700",
    borderColor: "border-teal-200",
    bgColor: "bg-teal-50",
    icon: "♻️",
    badge: "DoI",
    badgeStyle: "bg-teal-500 text-white",
    description:
      "Focused on sustainable chemistry research, green synthesis, and environmentally responsible chemical processes.",
    highlight: false,
  },
  {
    name: "ES Energy & Environment",
    publisher: "Engineered Science Publisher",
    index: "Scopus Indexed",
    indexColor: "bg-orange-500",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
    icon: "⚡",
    badge: "Scopus",
    badgeStyle: "bg-orange-500 text-white",
    apc: true,
    description:
      "Dedicated to energy materials, renewable systems and environmental science. Open access with APC applicable.",
    highlight: false,
  },
  {
    name: "ES Materials & Manufacturing",
    publisher: "Engineered Science Publisher",
    index: "Scopus Indexed",
    indexColor: "bg-purple-500",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
    icon: "🏭",
    badge: "Scopus",
    badgeStyle: "bg-purple-500 text-white",
    apc: true,
    description:
      "Covers advanced manufacturing processes, structural materials, and functional material applications. Open access with APC applicable.",
    highlight: false,
  },
];

const steps = [
  { step: "01", title: "Download Template", desc: "Get the official RDAMSE 2026 extended abstract template (.doc).", icon: "📄" },
  { step: "02", title: "Prepare Manuscript", desc: "Draft your paper strictly following the template formatting guidelines.", icon: "✍️" },
  { step: "03", title: "Submit Abstract", desc: "Submit your extended abstract via the conference submission portal.", icon: "📤" },
  { step: "04", title: "Peer Review", desc: "Your submission undergoes double-blind peer review by experts.", icon: "🔍" },
  { step: "05", title: "Acceptance & Register", desc: "Upon acceptance, complete your registration within 7 days.", icon: "✅" },
  { step: "06", title: "Full Paper Submission", desc: "Select your preferred journal and submit your full paper.", icon: "📑" },
];

const Submission = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".sub-hero > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        clearProps: "all",
      });

      // Orb pulse
      gsap.to(".sub-orb", {
        scale: 1.2,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Steps stagger
      gsap.from(".step-card", {
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all",
      });

      // Template download card
      gsap.from(".template-card", {
        scrollTrigger: {
          trigger: ".template-card",
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        clearProps: "all",
      });

      // Journal cards stagger
      gsap.from(".journal-card", {
        scrollTrigger: {
          trigger: ".journals-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        clearProps: "all",
      });

      // Guidelines section
      gsap.from(".guidelines-section", {
        scrollTrigger: {
          trigger: ".guidelines-section",
          start: "top 88%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        clearProps: "all",
      });
    }, pageRef);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-[#fafafa] overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="sub-orb fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] h-[65vw] max-w-3xl bg-[#b8f29d] opacity-[0.055] blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-[35vw] h-[35vw] max-w-xl bg-emerald-300 opacity-[0.04] blur-[100px] rounded-full pointer-events-none z-0" />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative z-10 py-24 px-6 text-center">
        <div className="sub-hero max-w-4xl mx-auto">
          <span className="inline-block px-5 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-[#059669] bg-[#b8f29d]/20 rounded-full border border-[#b8f29d]/40">
            Paper Submission — RDAMSE 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tighter">
            Submit Your <span className="text-[#059669]">Research</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Share your discoveries with the global materials science community. Follow the guidelines below to prepare and submit your manuscript for RDAMSE 2026.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#b8f29d] to-[#059669] mx-auto rounded-full" />
        </div>
      </section>

      {/* ── SUBMISSION STEPS ────────────────────────────── */}
      <section className="relative z-10 pb-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-3">
              Submission Process
            </h2>
            <p className="text-gray-500 font-semibold text-base md:text-lg">
              Six simple steps from draft to publication
            </p>
          </div>

          <div className="steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="step-card group relative p-7 rounded-[2rem] bg-white border border-gray-100 shadow-xl shadow-gray-200/30 hover:border-[#b8f29d] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                {/* Step number watermark */}
                <span className="absolute top-4 right-5 text-6xl font-black text-gray-50 select-none group-hover:text-[#b8f29d]/20 transition-colors duration-300">
                  {s.step}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-[#fafafa] border border-gray-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm">
                  <span className="text-2xl">{s.icon}</span>
                </div>
                <p className="text-[10px] font-black text-[#059669] uppercase tracking-widest mb-2">Step {s.step}</p>
                <h3 className="text-lg font-black text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 font-semibold leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEMPLATE DOWNLOAD ───────────────────────────── */}
      <section className="relative z-10 py-12 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="template-card relative bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl">
            {/* Glow blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#b8f29d] opacity-10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#059669] opacity-10 rounded-full blur-[80px]" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-10 md:p-16">
              {/* Left: info */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-1 mb-5 text-[10px] font-black uppercase tracking-widest text-[#b8f29d] bg-[#b8f29d]/10 border border-[#b8f29d]/20 rounded-full">
                  Official Template
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                  Extended Abstract <br className="hidden md:block" />
                  <span className="text-[#b8f29d]">Template 2026</span>
                </h2>
                <p className="text-gray-400 font-semibold leading-relaxed mb-6 max-w-md">
                  Download the official RDAMSE 2026 extended abstract template. All submissions must strictly follow this format. Deviations may result in rejection.
                </p>

                {/* File info pill */}
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-2xl mb-8">
                  <span className="text-xl">📄</span>
                  <div className="text-left">
                    <p className="text-xs font-black text-white uppercase tracking-wider">Extended Abstract Template</p>
                    <p className="text-xs text-gray-500 font-semibold">2nd RDAMSE 2026 · .DOC Format</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a
                    href={templateFile}
                    download="Extended-abstract-template_2nd-RDAMSE_2026.doc"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b8f29d] text-gray-900 font-black rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-emerald-400/20 cursor-pointer"
                  >
                    <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Template
                  </a>
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full text-sm backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-[#b8f29d] animate-pulse" />
                    Free to download
                  </div>
                </div>
              </div>

              {/* Right: document preview card */}
              <div className="flex-shrink-0 w-44 md:w-52">
                <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 text-center backdrop-blur-sm">
                  <div className="text-6xl mb-4">📋</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-white/10 rounded-full w-full" />
                    <div className="h-2 bg-white/10 rounded-full w-4/5 mx-auto" />
                    <div className="h-2 bg-white/10 rounded-full w-full" />
                    <div className="h-2 bg-white/10 rounded-full w-3/4 mx-auto" />
                    <div className="h-2 bg-white/10 rounded-full w-full" />
                    <div className="h-2 bg-white/10 rounded-full w-5/6 mx-auto" />
                  </div>
                  <div className="mt-4 text-[9px] font-black text-[#b8f29d] uppercase tracking-widest">
                    .DOC Format
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNAL SELECTION ───────────────────────────── */}
      <section className="relative z-10 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-1.5 mb-5 text-xs font-black uppercase tracking-widest text-[#059669] bg-[#b8f29d]/20 rounded-full border border-[#b8f29d]/40">
              Full Paper Submission
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Select Journal for <span className="text-[#059669]">Full Paper</span>
            </h2>
            <p className="text-gray-500 font-semibold text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Authors of accepted abstracts are invited to submit full papers to one of the following internationally recognized journals.
            </p>
          </div>

          <div className="journals-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {journals.map((j, idx) => (
              <div
                key={idx}
                className={`journal-card group relative flex flex-col p-8 rounded-[2rem] border bg-white shadow-xl shadow-gray-100/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden ${
                  j.highlight ? "ring-2 ring-emerald-400/30 border-emerald-100" : "border-gray-100 hover:border-[#b8f29d]"
                }`}
              >
                {/* Gradient top strip */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-[2rem] ${j.indexColor}`} />

                {/* Highlight tag */}
                {j.highlight && (
                  <div className="absolute top-4 right-4 px-3 py-0.5 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow">
                    Featured
                  </div>
                )}

                {/* APC tag */}
                {j.apc && (
                  <div className="absolute top-4 right-4 px-3 py-0.5 bg-amber-100 text-amber-700 text-[9px] font-black uppercase tracking-widest rounded-full border border-amber-200">
                    APC — Open Access
                  </div>
                )}

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${j.bgColor} border ${j.borderColor} flex items-center justify-center mb-5 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-sm`}>
                  <span className="text-2xl">{j.icon}</span>
                </div>

                {/* Index badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest rounded-full ${j.badgeStyle}`}>
                    {j.badge}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{j.index}</span>
                </div>

                {/* Journal name */}
                <h3 className="text-xl font-black text-gray-900 mb-1 leading-snug tracking-tight">
                  {j.name}
                </h3>
                <p className={`text-xs font-black uppercase tracking-widest mb-4 ${j.textColor}`}>
                  {j.publisher}
                </p>

                {/* Divider */}
                <div className={`w-10 h-1 rounded-full ${j.indexColor} mb-4 opacity-60`} />

                {/* Description */}
                <p className="text-sm text-gray-500 font-semibold leading-relaxed flex-grow">
                  {j.description}
                </p>

                {/* Hover footer */}
                <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`text-xs font-black uppercase tracking-wider ${j.textColor}`}>
                    Full Paper Submission →
                  </span>
                  <span className="text-lg">{j.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row gap-4 items-start max-w-4xl mx-auto">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <p className="text-sm font-black text-amber-800 uppercase tracking-wide mb-1">
                Please Note
              </p>
              <p className="text-sm text-amber-700 font-semibold leading-relaxed">
                Journal selection for full paper submission is separate from the abstract submission process. Authors whose abstracts are accepted will receive further instructions on full paper submission and their selected journal's guidelines. APC (Article Processing Charge) applies for open access journals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBMISSION GUIDELINES ──────────────────────── */}
      <section className="relative z-10 py-12 px-4 md:px-8 pb-0">
        <div className="max-w-5xl mx-auto guidelines-section">
          <div className="bg-white/80 backdrop-blur-2xl border border-white ring-1 ring-black/5 rounded-[3rem] shadow-2xl shadow-gray-200/60 p-10 md:p-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-[#b8f29d] flex items-center justify-center text-[#059669] text-xl shadow-inner italic font-serif">i</span>
              Submission Guidelines
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { icon: "📐", title: "Template Compliance", desc: "All manuscripts must strictly follow the official RDAMSE 2026 extended abstract template. Non-compliant papers will not be reviewed." },
                { icon: "🌐", title: "Language", desc: "All submissions must be written in English. Ensure proper grammar, clarity, and academic writing style." },
                { icon: "🔬", title: "Originality", desc: "Only original, unpublished research is accepted. Submitted papers must not be under review elsewhere simultaneously." },
                { icon: "👥", title: "Authorship", desc: "All authors must have contributed substantially to the research. Each author's affiliation must be clearly stated." },
                { icon: "📊", title: "Abstract Length", desc: "Extended abstracts should be between 2–4 pages, including figures, tables, and references." },
                { icon: "🔏", title: "Blind Review", desc: "All submissions undergo double-blind peer review. Remove all author details from the manuscript file before submission." },
              ].map((g, idx) => (
                <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-[#fafafa] border border-gray-100 hover:border-[#b8f29d] hover:bg-[#f0fdf4] transition-all duration-300 group">
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{g.icon}</span>
                  <div>
                    <p className="text-sm font-black text-gray-900 mb-1">{g.title}</p>
                    <p className="text-sm text-gray-500 font-semibold leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER BANNER ──────────────────────────── */}
      <section className="relative z-10 mt-20 py-24 bg-gray-900 text-white overflow-hidden rounded-t-[5rem]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#b8f29d] opacity-10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#059669] opacity-10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to <span className="text-[#b8f29d]">Submit?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium">
            Download the template, prepare your manuscript, and join the global community of researchers at RDAMSE 2026.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={templateFile}
              download="Extended-abstract-template_2nd-RDAMSE_2026.doc"
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#b8f29d] text-gray-900 font-black rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-emerald-400/20 cursor-pointer"
            >
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Template
            </a>
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white font-bold rounded-full text-sm">
              <span className="w-2 h-2 rounded-full bg-[#b8f29d] animate-pulse" />
              Abstract Deadline: 15 April 2026
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Submission;

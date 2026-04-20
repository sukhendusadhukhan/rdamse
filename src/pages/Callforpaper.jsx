import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Link} from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

const Callforpaper = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        clearProps: "all",
      });

      const sections = gsap.utils.toArray(".content-section");
      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, pageRef);

    return () => {
      ctx.revert();
      clearTimeout(refreshTimeout);
    };
  }, []);

  const tracks = [
    {
      id: 1,
      title: "Advanced Materials & Nanotechnology",
      icon: "🧪",
      items: [
        "Nanostructured materials and nanocomposites",
        "Functional and smart materials",
        "Thin films and surface engineering",
        "Self-assembled nanostructures",
        "Defect engineering and surface modification",
      ],
    },
    {
      id: 2,
      title: "Energy Materials and Sustainable Energy Systems",
      icon: "⚡",
      items: [
        "Hydrogen production (electrochemical, photoelectrochemical, seawater splitting)",
        "Fuel cells and electrolyzers",
        "Batteries (Li-ion, Na-ion, solid-state)",
        "Supercapacitors and hybrid energy storage devices",
        "Solar energy materials and energy harvesting",
      ],
    },
    {
      id: 3,
      title: "Quantum Materials and Quantum Technologies",
      icon: "⚛️",
      items: [
        "Quantum materials and topological insulators",
        "Spintronics and valleytronics",
        "Quantum computing materials and devices",
        "Quantum sensing and quantum communication",
        "Low-dimensional quantum systems",
      ],
    },
    {
      id: 4,
      title: "Electronic Materials and Devices",
      icon: "🔌",
      items: [
        "Semiconductor materials and devices",
        "Resistive switching memory (RRAM, memristors)",
        "Neuromorphic computing devices",
        "Flexible and printed electronics",
        "Nanoelectronic device fabrication",
      ],
    },
    {
      id: 5,
      title: "Sensors, Actuators and Smart Devices",
      icon: "📡",
      items: [
        "Pressure, strain, and tactile sensors",
        "Gas and chemical sensors",
        "Biosensors and healthcare monitoring devices",
        "Flexible and wearable sensor systems",
        "IoT-enabled smart sensing platforms",
      ],
    },
    {
      id: 6,
      title: "Materials for Environmental and Water Applications",
      icon: "💧",
      items: [
        "Water purification and desalination materials",
        "Environmental remediation and pollutant degradation",
        "Photocatalysis and electrocatalysis for environmental applications",
        "Air purification and carbon capture",
        "Sustainable and green materials for environmental protection",
      ],
    },
    {
      id: 7,
      title: "Biomaterials and Biomedical Applications",
      icon: "🧬",
      items: [
        "Biocompatible and biodegradable materials",
        "Drug delivery systems and nanomedicine",
        "Tissue engineering and regenerative medicine",
        "Bioelectronics and implantable devices",
        "Diagnostic and therapeutic nanomaterials",
      ],
    },
    {
      id: 8,
      title: "Carbon-Based and 2D Materials",
      icon: "💎",
      items: [
        "Graphene, CNTs, fullerenes",
        "MXenes and layered materials",
        "2D ferroelectric and semiconducting materials",
        "Heterostructures and van der Waals materials",
        "Applications in energy, electronics, and sensing",
      ],
    },
    {
      id: 9,
      title: "Computational Materials Science & AI in Materials Engineering",
      icon: "💻",
      items: [
        "Machine learning in materials discovery",
        "First-principles calculations and DFT studies",
        "Materials modeling and simulation",
        "Data-driven materials design",
        "AI-assisted optimization of materials performance",
      ],
    },
    {
      id: 10,
      title: "Advanced Manufacturing and Industrial Materials",
      icon: "🏭",
      items: [
        "Additive manufacturing and 3D printing",
        "Smart manufacturing and Industry 4.0",
        "Structural and functional industrial materials",
        "Materials for aerospace and automotive applications",
        "Process optimization and scale-up technologies",
      ],
    },
    {
      id: 11,
      title: "Photonic, Optical and Functional Materials",
      icon: "🌈",
      items: [
        "Optoelectronic materials and devices",
        "Photonic crystals and plasmonics",
        "Light-emitting devices (LED, OLED)",
        "Photodetectors and solar photonics",
        "Nonlinear optical and laser materials",
      ],
    },
    {
      id: 12,
      title: "Green Chemistry and Sustainable Materials",
      icon: "🍃",
      items: [
        "Eco-friendly synthesis routes",
        "Waste-to-energy and biomass-derived materials",
        "Circular economy and recycling materials",
        "Low-cost and sustainable nanomaterials",
        "Sustainable catalysis and chemical processes",
      ],
    },
  ];

  return (
    <div ref={pageRef} className="min-h-screen bg-[#fafafa] overflow-hidden pt-20">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#b8f29d] opacity-[0.05] blur-[120px] rounded-full pointer-events-none z-0" />

      <section className="relative z-10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="hero-text inline-block px-4 py-1.5 mb-6 text-xs font-black uppercase tracking-widest text-[#059669] bg-[#b8f29d]/20 rounded-full border border-[#b8f29d]/30">
            Call For Papers 2026
          </span>
          <h1 className="hero-text text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tighter">
            Innovating the Future of <span className="text-[#059669]">Materials</span>
          </h1>
          <p className="hero-text text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Join RDAMSE 2026 to showcase your research and contribute to the advancements in Materials Science and Engineering.
          </p>
          <div className="hero-text w-24 h-1.5 bg-gradient-to-r from-[#b8f29d] to-[#059669] mx-auto rounded-full" />
        </div>
      </section>

      <section className="relative z-20 px-6 -mt-10 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="content-section bg-white/80 backdrop-blur-2xl border border-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-gray-200/60 ring-1 ring-black/5">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-10 h-10 rounded-2xl bg-[#b8f29d] flex items-center justify-center text-[#059669] text-xl shadow-inner italic font-serif">i</span>
              Conference Objective
            </h2>
            <div className="space-y-6 text-gray-800 leading-relaxed text-lg md:text-xl font-medium">
              <p>
                The 2nd International Conference on Recent Developments and Applications in Materials Science and Engineering (RDAMSE 2026) aims to provide a dynamic and interdisciplinary platform for researchers, academicians, scientists, and industry professionals to share and discuss the latest advancements in the field of materials science and engineering.
              </p>
              <p className="border-l-4 border-[#b8f29d] pl-6 py-2 bg-[#fafafa] rounded-r-2xl italic font-semibold text-gray-700">
                RDAMSE 2026 aims to serve as a catalyst for scientific dialogue, innovation, and collaborative research, contributing to the advancement of materials science and its real-world applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base font-bold text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-[#059669]">✓</span> Promote cutting-edge research & innovation
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#059669]">✓</span> Foster international collaboration
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#059669]">✓</span> Encourage young researchers & students
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#059669]">✓</span> Highlight green hydrogen & smart materials
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="content-section p-8 rounded-3xl bg-[#059669] text-white shadow-xl shadow-emerald-200/20">
            <h3 className="text-2xl font-bold mb-4">Submission Ethics</h3>
            <p className="opacity-90 leading-relaxed mb-6">
              Original, unpublished research papers are solicited from researchers and practitioners. All accepted papers will be submitted for inclusion into indexed proceedings.
            </p>
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-wider bg-white/10 w-fit px-4 py-2 rounded-full border border-white/20">
              <span>Indexed Proceedings</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div className="content-section p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Policy</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Full Registration is required for each paper. Registration fee includes Proceedings, Conference Kit, Lunch, Banquet, and Tutorials.
            </p>
            <button className="px-6 py-3 bg-[#b8f29d] text-[#059669] font-black rounded-xl hover:bg-[#a6e686] transition-colors flex items-center gap-2 group cursor-pointer">
              <Link to="/submission">
                View Registration
              </Link>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>

          <div className="content-section p-8 rounded-3xl bg-white border border-gray-200 shadow-xl shadow-gray-200/30">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-[#b8f29d] flex items-center justify-center text-[#059669] text-xl shadow-inner font-serif italic">!</span>
              Important Dates
            </h3>
            <div className="space-y-4">
              {[
                { label: "Abstract Submission", date: "27 April 2026", sub: "Deadline" },
                { label: "Acceptance", date: "29 April 2026", sub: "Notification" },
                { label: "Early Bird", date: "30 April 2026", sub: "Within 7 days of acceptance" },
                { label: "Conference", date: "7–8 May 2026", sub: "Dates", highlight: true },
              ].map((item, idx) => (
                <div key={idx} className={`p-4 rounded-2xl border transition-all duration-300 ${item.highlight ? 'bg-[#059669] border-[#059669] text-white shadow-lg shadow-emerald-200/20' : 'bg-[#fafafa] border-gray-100 hover:border-[#b8f29d]'}`}>
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-0.5 ${item.highlight ? 'text-emerald-200' : 'text-[#059669]'}`}>{item.label}</p>
                      <p className={`text-xs font-bold ${item.highlight ? 'text-white/70' : 'text-gray-400'}`}>{item.sub}</p>
                    </div>
                    <p className={`text-base font-black whitespace-nowrap ${item.highlight ? 'text-white' : 'text-gray-900'}`}>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-tighter text-center">RDAMSE 2026 – Important Dates</p>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="content-section bg-gradient-to-br from-white to-[#f0f9eb] border border-emerald-100 p-8 md:p-16 rounded-[4rem] shadow-2xl shadow-emerald-700/5 ring-1 ring-black/5 overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#b8f29d] opacity-[0.1] blur-[80px] -mr-32 -mt-32 rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 mb-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#059669] bg-[#b8f29d]/30 rounded-full border border-[#b8f29d]/50">
                  Publication Opportunities
                </span>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                  Global Visibility for Your <span className="text-[#059669]">Research</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-50 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-xl">📚</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900">ISBN Conference Proceedings</h4>
                      <p className="text-gray-600 font-medium leading-relaxed mt-1">All accepted abstracts will be published in the ISBN Conference Proceedings, ensuring formal record of your presentation.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-50 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-xl">💎</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900">Premium Journal Publication</h4>
                      <p className="text-gray-600 font-medium leading-relaxed mt-1">Selected full papers will be published in reputed journals. These publications will be <span className="text-[#059669] font-black">free of cost</span> for selected papers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "ChemistrySelect (Wiley)", info: "SCI indexed", color: "blue" },
                  { name: "ES General and ESCS", info: "Indexed", color: "emerald" },
                  { name: "ES Energy & Environment", info: "Scopus indexed", sub: "ES Publisher", color: "orange" },
                  { name: "ES Materials & Manufacturing", info: "Scopus indexed", sub: "ES Publisher", color: "purple" }
                ].map((journal, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white border border-gray-100 shadow-xl shadow-emerald-800/5 hover:border-[#b8f29d] transition-all group/card">
                    <div className="flex flex-col h-full">
                      <div className="flex-grow">
                        {journal.sub && <p className="text-[10px] font-black uppercase tracking-widest text-[#059669]/60 mb-1">{journal.sub}</p>}
                        <h5 className="text-base font-black text-gray-900 leading-tight mb-2">{journal.name}</h5>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase text-[#059669] tracking-wider px-2 py-0.5 bg-[#b8f29d]/20 rounded">{journal.info}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 pt-20 pb-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">Proposed Conference Tracks</h2>
          <p className="text-xl text-gray-500 font-bold italic">RDAMSE 2026 – Exploring the Frontiers of Science (but not limited to)</p>
          <div className="w-24 h-2 bg-[#059669] mx-auto mt-6 rounded-full" />
        </div>
      </section>

      <section className="relative z-10 pb-32 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tracks.map((track) => (
            <div key={track.id} className="group relative p-8 rounded-[2.5rem] bg-white border border-gray-200 shadow-xl shadow-gray-300/20 hover:shadow-2xl hover:border-[#b8f29d] transition-all duration-300 md:hover:-translate-y-2 flex flex-col overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full border border-gray-100">Track {track.id.toString().padStart(2, '0')}</span>
              </div>

              <div className="mb-8">
                <div className="w-16 h-16 rounded-[1.5rem] bg-[#fafafa] flex items-center justify-center mb-6 border border-gray-100 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-sm">
                  <span className="text-3xl">{track.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight tracking-tight h-16 flex items-center">{track.title}</h3>
                <div className="w-16 h-1.5 bg-gradient-to-r from-[#b8f29d] to-[#059669] rounded-full" />
              </div>

              <ul className="flex-grow space-y-4">
                {track.items.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-[15px] text-gray-700 leading-relaxed font-semibold">
                    <span className="text-[#059669] mt-1.5 flex-shrink-0">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">Explore Track Details →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-24 bg-gray-900 text-white overflow-hidden rounded-t-[5rem]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#b8f29d] rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#059669] rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Join <span className="text-[#b8f29d]">RDAMSE 2026</span></h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
            Be a part of the global materials science community. Submit your work today and contribute to sustainable innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <button className="px-12 py-5 bg-[#b8f29d] text-gray-900 font-black rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-xl shadow-emerald-400/20">
              Submit Manuscript
            </button>
            <button className="px-12 py-5 bg-white/5 backdrop-blur-md border border-white/10 text-white font-black rounded-full hover:bg-white/10 transition-all cursor-pointer">
              Download Template
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Callforpaper;

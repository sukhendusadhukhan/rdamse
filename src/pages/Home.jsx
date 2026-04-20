import React, { useEffect, useRef } from "react";
import bgImage from "../assets/background.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import ConferenceInfo from "./ConferenceInfo";
import { Link } from "react-router-dom";
import rdamselogo from "../assets/rdamselogo.png";
import Surtechlogo from "../assets/SurTechlogo.png"
import smcLogo from "../assets/SMC.webp";
import ipsLogo from "../assets/IPS.jpg";
import sriLogo from "../assets/SRI.jpg";
import sripatLogo from "../assets/sripat.jpg";


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const pillRef = useRef(null);
  const subtitleRef = useRef(null);
  const associationRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    // Initial hidden states for non-text elements
    gsap.set([pillRef.current, subtitleRef.current, associationRef.current, ctaRef.current], {
      y: 60,
      opacity: 0,
    });

    // Initial hidden state for the rolling text characters
    gsap.set('.rdamse-char', {
      x: -60,
      opacity: 0,
      rotationY: 90,
      transformOrigin: 'left center'
    });

    tl.to(pillRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.5)',
      delay: 0.3,
    })
      // Text characters roll from left to right stagger effect
      .to('.rdamse-char', {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.1, // This makes it flow from left to right one by one
        ease: 'back.out(2)',
      }, '-=0.4')
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.6')
      .to(associationRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4')
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }, '-=0.4');

    // Background floating elements animation
    gsap.to(".floating-blob", {
      x: "random(-20, 20)",
      y: "random(-20, 20)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const rdamseText = "RDAMSE".split("");
  const yearText = "2026".split("");

  return (
    <div ref={containerRef} className="w-full bg-[#fafafa]">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-40"
      >
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(6px)",
            transform: "scale(1.05)",
            zIndex: 0,
          }}
        />
        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,30,10,0.60) 50%, rgba(0,0,0,0.50) 100%)",
            zIndex: 1,
          }}
        />
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#b8f29d]/10 rounded-full blur-[120px] floating-blob pointer-events-none" style={{zIndex: 2}} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#059669]/10 rounded-full blur-[100px] floating-blob pointer-events-none" style={{zIndex: 2}} />

        {/* Header Logos Section */}
        <div className="w-full relative z-20 mb-6 pt-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-4">
            {/* Left: Organizing Institute (SurTech) */}
            <div className="flex items-center gap-3 group">
              <img src={Surtechlogo} alt="SurTech Logo" className="h-14 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-2xl" />
              <div className="flex flex-col">
                <span className="text-white font-black text-lg md:text-2xl leading-none tracking-tight group-hover:text-[#4ade80] transition-colors">SurTech</span>
                <span className="text-white/50 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex</span>
              </div>
            </div>

            {/* Right: Conference Logo (RDAMSE) */}
            <div className="flex items-center gap-2 md:gap-4 group">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-[#4ade80] font-black text-lg md:text-2xl leading-none">RDAMSE 2026</span>
                <span className="text-white/50 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">2nd International Conference</span>
              </div>
              <div className="relative">
                <div className="absolute -inset-2 bg-[#4ade80]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={rdamselogo} 
                  alt="RDAMSE Logo" 
                  className="h-14 md:h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative text-center max-w-7xl mx-auto flex flex-col items-center pt-4 md:pt-6" style={{zIndex: 10}}>
          {/* Badge */}
          <div
            ref={pillRef}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-[#b8f29d]/60 shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-2xl font-bold tracking-widest text-[#4ade80] uppercase">
              Second International Conference  
            </span>
          </div>

          {/* Main Title */}
          <div className="flex flex-col items-center mb-8 gap-2">
            <h1 className="flex flex-wrap justify-center text-[14vw] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black tracking-tighter text-white leading-[0.85] perspective-1000" style={{textShadow: '0 4px 24px rgba(0,0,0,0.8), 0 1px 0 rgba(0,0,0,0.5)'}}>
              {rdamseText.map((char, index) => (
                <span key={`r-${index}`} className="rdamse-char inline-block origin-bottom transition-all">
                  {char}
                </span>
              ))}
              <span className="mx-4 md:mx-6 flex text-[#4ade80]">
                {yearText.map((char, index) => (
                  <span key={`y-${index}`} className="rdamse-char inline-block origin-bottom">
                    {char}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Subtitle with better typography */}
          <div ref={subtitleRef} className="max-w-4xl mx-auto mb-12">
            <p className="text-xl md:text-2xl font-semibold text-white leading-tight mb-4" style={{textShadow: '0 2px 12px rgba(0,0,0,0.7)'}}>
              Recent Developments and Applications in Materials Science and Engineering
            </p>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-[#4ade80] to-[#059669] rounded-full" />
          </div>

          {/* Organization Info in a professional layout */}
          <div ref={associationRef} className="flex flex-col gap-6 w-full max-w-5xl mb-12">
            {/* Top Row: Principal Organizer */}
            <div className="w-full">
              <div className="group p-8 md:p-10 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-[#4ade80]/50 hover:bg-black/60 hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#4ade80]/20 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-[#4ade80] mb-1 block">Organized By</span>
                      <p className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-[#4ade80] transition-colors">Department of Basic Science & Humanities</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <p className="text-sm md:text-base text-white/60 font-medium">Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex</p>
                    <div className="w-12 h-1 bg-[#4ade80]/30 rounded-full mt-3 md:ml-auto transition-all duration-500 group-hover:w-full group-hover:bg-[#4ade80]/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Collaborative Partners */}
            <div className="p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl w-full hover:border-[#4ade80]/30 transition-all duration-500">
              <div className="flex flex-col items-center mb-8">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#4ade80] mb-4">In Association With</span>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Society for Materials Chemistry", sub: "Kolkata Chapter", logo: smcLogo },
                  { name: "Indian Photobiology Society", sub: "JU, Kolkata", logo: ipsLogo },
                  { name: "Subhami Biopharma Pvt Ltd", sub: "Kolkata", logo: sriLogo },
                  { name: "Sripat Singh College", sub: "Murshidabad", logo: sripatLogo }
                ].map((item, idx) => (
                  <div key={idx} className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-[#4ade80]/5 hover:border-[#4ade80]/20 transition-all duration-500 text-center flex flex-col justify-center items-center overflow-hidden min-h-[180px]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4ade80]/0 to-transparent group-hover:via-[#4ade80]/50 transition-all duration-700" />
                    
                    {/* Logo Container */}
                    <div className="mb-4 relative w-20 h-20 flex items-center justify-center">
                      <div className="absolute inset-0 bg-white/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img 
                        src={item.logo} 
                        alt={`${item.name} Logo`} 
                        className="w-full h-full object-contain relative z-10 filter drop-shadow-md group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <p className="text-[15px] font-bold text-white leading-snug mb-2 group-hover:text-[#4ade80] transition-colors duration-300">{item.name}</p>
                    <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-semibold group-hover:text-white/60 transition-colors">{item.sub}</p>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4H1C30c-7QTIqLL1JaZKMSgCNBak-tdk-l724HMWm-r4xrw/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-10 py-4 bg-black text-white rounded-full text-lg font-bold shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-neutral-900 active:scale-95 group border border-white/10"
            >
              <span className="relative z-10 flex items-center gap-3">
                Register Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/5 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </a>
          </div>
        </div>

      </section>

      {/* Main Content Sections */}
      <div className="relative z-20 space-y-32 pb-32">
        <About />
        
      </div>
    </div>
  );
};

export default Home;

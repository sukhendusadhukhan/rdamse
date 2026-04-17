import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";
import ConferenceInfo from "./ConferenceInfo";
import { Link } from "react-router-dom";

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
        {/* Decorative Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#b8f29d]/20 rounded-full blur-[120px] floating-blob pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#059669]/10 rounded-full blur-[100px] floating-blob pointer-events-none" />

        <div className="z-10 text-center max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div
            ref={pillRef}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/50 backdrop-blur-md border border-[#b8f29d]/30 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-sm font-bold tracking-widest text-[#059669] uppercase">
              2nd Edition • May 07-08, 2026
            </span>
          </div>

          {/* Main Title */}
          <div className="flex flex-col items-center mb-8 gap-2">
            <h1 className="flex flex-wrap justify-center text-[14vw] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black tracking-tighter text-gray-900 leading-[0.85] perspective-1000">
              {rdamseText.map((char, index) => (
                <span key={`r-${index}`} className="rdamse-char inline-block origin-bottom transition-all">
                  {char}
                </span>
              ))}
              <span className="mx-4 md:mx-6 flex text-[#059669]">
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
            <p className="text-xl md:text-2xl font-semibold text-gray-800 leading-tight mb-4">
              Second International Conference on Recent Developments and Applications in Materials Science and Engineering
            </p>
            <div className="mx-auto w-24 h-1.5 bg-gradient-to-r from-[#b8f29d] to-[#059669] rounded-full" />
          </div>

          {/* Organization Info in a professional grid */}
          <div ref={associationRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-12">
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-xl shadow-gray-200/50 transition-all hover:border-[#b8f29d]/50">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block">In Association With</span>
              <p className="text-lg font-bold text-gray-800">Indian Photobiology Society</p>
              <p className="text-sm text-gray-600">Jadavpur University, Kolkata</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-xl shadow-gray-200/50 transition-all hover:border-[#059669]/50">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block">Organized By</span>
              <p className="text-lg font-bold text-[#059669]">Department of Basic Science & Humanities</p>
              <p className="text-sm text-gray-600">Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex</p>
            </div>
          </div>

          {/* Call to Action */}
          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <div className="relative">
              <button
                disabled
                className="relative px-10 py-4 bg-gray-400 text-white/70 rounded-full text-lg font-bold shadow-md overflow-hidden cursor-not-allowed opacity-60 select-none"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Register Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              {/* Coming soon badge */}
              <span className="absolute -top-2.5 -right-2 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest bg-amber-400 text-amber-900 rounded-full shadow-sm border border-amber-300 whitespace-nowrap">
                Coming Soon
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Scroll</span>
          <div className="w-1 h-12 bg-gray-100 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-[#059669] animate-bounce" />
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="relative z-20 space-y-32 pb-32">
        <About />
        <ConferenceInfo />
      </div>
    </div>
  );
};

export default Home;

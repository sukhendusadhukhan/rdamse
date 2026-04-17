import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clgImg from "../assets/clg.jpg";
import flyerImg from "../assets/flyer.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Flyer section refs
  const flyerSectionRef = useRef(null);
  const flyerWrapperRef = useRef(null);
  const flyerImageRef = useRef(null);
  const flyerLabelRef = useRef(null);
  const flyerBadgeRef = useRef(null);

  useEffect(() => {
    // ── FLYER: Scroll-scrubbed reveal ──────────────────────────────────────
    // Initial hidden states
    gsap.set(flyerImageRef.current, {
      clipPath: "inset(0% 0% 100% 0%)", // fully clipped (hidden)
    });
    gsap.set(flyerWrapperRef.current, { opacity: 0, y: -80 });
    gsap.set(flyerLabelRef.current, { opacity: 0, y: 30 });
    gsap.set(flyerBadgeRef.current, { opacity: 0, y: 20 });

    // 1. Wrapper slides down from top — scrubbed over early scroll range
    gsap.to(flyerWrapperRef.current, {
      opacity: 1,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: flyerSectionRef.current,
        start: "top 90%",   // starts as soon as section enters
        end: "top 40%",     // fully in by the time top hits 40% viewport
        scrub: 1.5,
      },
    });

    // 2. Image unrolls top → bottom tied directly to scroll
    gsap.to(flyerImageRef.current, {
      clipPath: "inset(0% 0% 0% 0%)",  // fully revealed
      ease: "none",
      scrollTrigger: {
        trigger: flyerSectionRef.current,
        start: "top 70%",    // begin unrolling when section just enters
        end: "center 30%",   // fully open when section center hits 30% viewport
        scrub: 1.5,          // smooth scrub lag — image follows scroll 1:1
      },
    });

    // 3. Label fades in later in the scroll
    gsap.to(flyerLabelRef.current, {
      opacity: 1,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: flyerSectionRef.current,
        start: "top 60%",
        end: "top 20%",
        scrub: 1.2,
      },
    });

    // 4. Badge pops in at the very end of the scrub range
    gsap.to(flyerBadgeRef.current, {
      opacity: 1,
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: flyerSectionRef.current,
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
      },
    });

    // ── About the Institute: regular play-on-scroll ────────────────────────
    gsap.set([imageRef.current, contentRef.current], { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
    tl.to(imageRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out", delay: 0.2 })
      .to(contentRef.current, { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=0.6");

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* ===================== FLYER SHOWCASE SECTION ===================== */}
      <section
        ref={flyerSectionRef}
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      >
        {/* Decorative ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#b8f29d]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#059669]/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <div ref={flyerLabelRef} className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-10 h-1 bg-[#059669] rounded-full" />
              <span className="text-xs font-black uppercase tracking-[0.35em] text-[#059669]">
                Official Flyer
              </span>
              <span className="w-10 h-1 bg-[#059669] rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              IC-RDAMSE{" "}
              <span className="bg-gradient-to-r from-[#059669] to-[#b8f29d] bg-clip-text text-transparent">
                2026
              </span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg font-medium">
              7th – 8th May 2026 · Sur Tech, Kolkata
            </p>
          </div>

          {/* Flyer frame */}
          <div
            ref={flyerWrapperRef}
            className="relative mx-auto max-w-2xl"
          >
            {/* Glow ring behind the card */}
            <div className="absolute -inset-6 bg-gradient-to-br from-[#b8f29d]/40 via-[#059669]/20 to-transparent rounded-[3rem] blur-2xl pointer-events-none" />

            {/* Card border gradient */}
            <div className="relative p-1 rounded-[2rem] bg-gradient-to-br from-[#b8f29d] via-[#059669] to-[#047857] shadow-2xl shadow-[#059669]/20">
              {/* Inner white mat */}
              <div className="relative rounded-[1.7rem] overflow-hidden bg-white">
                {/* The flyer image — roll reveal clip-path animation targets this */}
                <img
                  ref={flyerImageRef}
                  src={flyerImg}
                  alt="IC-RDAMSE 2026 — Official Conference Flyer"
                  className="w-full h-auto object-contain block"
                  style={{ willChange: "clip-path" }}
                />
              </div>
            </div>

            {/* Floating badge */}
            <div
              ref={flyerBadgeRef}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-900 text-white shadow-xl shadow-black/20 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#b8f29d] animate-pulse" />
              <span className="text-xs font-black uppercase tracking-widest">
                2nd International Conference
              </span>
            </div>
          </div>

          {/* Bottom spacing for the badge */}
          <div className="h-12" />
        </div>
      </section>
      {/* =============================================================== */}

      {/* About the Institute Section */}
      <section
        ref={containerRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#fafafa] overflow-hidden"
      >
        {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#b8f29d]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Left: Image Section */}
        <div ref={imageRef} className="w-full lg:w-1/2">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#b8f29d] to-[#059669] rounded-[2.5rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src={clgImg}
                alt="Institute Campus"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-white font-bold text-lg">Our Campus</p>
                <p className="text-white/80 text-sm">Sur Tech, Kolkata</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content Section */}
        <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-12 h-1.5 bg-[#059669] rounded-full" />
            <span className="text-sm font-black uppercase tracking-[0.3em] text-[#059669]">The Legacy</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
            About the Institute
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            <p>
              Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex (formerly known as Dr. Sudhir Chandra Sur Degree Engineering College) 
              was established under the auspices of JIS Foundation, a pioneer in educational excellence.
            </p>
            <p>
              Renowned for its research culture and 15-year legacy in Engineering and Science education, our institute is strategically located near Kolkata's major transit hubs, bridging academic rigor with urban connectivity.
            </p>
            <p className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <span className="text-[#059669] font-black">Environmental Harmony:</span> Our campus, titled "Green Field," is a virtual paradise of lush greenery—a perfect atmosphere for academic endeavors and ecological consciousness.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-gray-900">15+</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Legacy</p>
            </div>
            <div className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-[#059669]">UGC</p>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recognized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;

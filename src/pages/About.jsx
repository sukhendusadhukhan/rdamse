import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import clgImg from "../assets/clg.jpg";
import flyerImg from "../assets/flyer.jpeg";
import rdamselogo from "../assets/rdamselogo.png";
import Surtechlogo from "../assets/SurTechlogo.png";
import ConferenceInfo from "./ConferenceInfo";

// Event Gallery Images
import event1 from "../assets/event1.jpeg";
import event2 from "../assets/event2.jpeg";
import event3 from "../assets/event3.jpeg";
import event4 from "../assets/event4.jpeg";
import event5 from "../assets/event5.jpeg";

const SurTechLogo = () => (
  <img src={Surtechlogo} alt="SurTech Logo" className="h-10 md:h-14 w-auto object-contain" />
);

const eventMoments = [
  {
    title: "Inaugural Ceremony",
    tag: "RDAMSE 2024",
    img: event1,
    accent: "#059669",
    description: "Launch of the 1st edition bringing together global visionaries in Material Science."
  },
  {
    title: "Technical Sessions",
    tag: "Knowledge Sharing",
    img: event2,
    accent: "#b8f29d",
    description: "Deep-dives into advanced manufacturing and sustainable engineering applications."
  },
  {
    title: "International Keynotes",
    tag: "Global Perspectives",
    img: event3,
    accent: "#059669",
    description: "World-renowned speakers sharing insights on the future of nanotechnology."
  },
  {
    title: "Panel Discussions",
    tag: "Industry Connect",
    img: event4,
    accent: "#b8f29d",
    description: "Bridging the gap between academic research and industrial implementation."
  },
  {
    title: "Award Ceremony",
    tag: "Excellence",
    img: event5,
    accent: "#059669",
    description: "Recognizing outstanding contributions and breakthrough research papers."
  }
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const About = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Flyer section refs
  const flyerSectionRef = useRef(null);
  const flyerWrapperRef = useRef(null);
  const flyerImageRef = useRef(null);
  const flyerLabelRef = useRef(null);
  const flyerBadgeRef = useRef(null);

  // Previous Years horizontal-scroll refs
  const panelsSectionRef = useRef(null);     // <section id="panels">
  const panelsContainerRef = useRef(null);   // the wide flex container

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

    // ── Previous Years: CodePen horizontal-scroll panel animation ──────────
    if (panelsContainerRef.current && panelsSectionRef.current) {
      const panels = gsap.utils.toArray(".hy-panel");
      const panelsContainer = panelsContainerRef.current;

      // Anchor click → smooth scroll to the right panel
      document.querySelectorAll(".hy-anchor").forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          const href = e.currentTarget.getAttribute("href");
          const targetPanel = document.querySelector(href);
          if (!targetPanel) return;
          if (panelsContainer.contains(targetPanel)) {
            const totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start;
            const totalMovement = (panels.length - 1) * targetPanel.offsetWidth;
            const y = Math.round(
              tween.scrollTrigger.start +
              (targetPanel.offsetLeft / totalMovement) * totalScroll
            );
            gsap.to(window, { scrollTo: { y, autoKill: false }, duration: 1 });
          } else {
            gsap.to(window, { scrollTo: { y: targetPanel, autoKill: false }, duration: 1 });
          }
        });
      });

      // Horizontal tween — CodePen pattern
      var tween = gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainerRef.current,
          pin: true,
          start: "top top",
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
          end: () => "+=" + (panelsContainer.offsetWidth - window.innerWidth),
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);


  return (
    <>
      {/* Top Dual Logo Header - Only shown on standalone About page */}
      {isAboutPage && (
        <div className="w-full relative z-30 pt-28 pb-6 border-b border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between gap-4">
            {/* Left: Institution */}
            <div className="flex items-center gap-3">
              <SurTechLogo />
              <div className="flex flex-col">
                <span className="text-gray-900 font-black text-lg md:text-2xl leading-none tracking-tight">SurTech</span>
                <span className="text-gray-400 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">Institute of Technology</span>
              </div>
            </div>

            {/* Right: Conference */}
            <div className="flex items-center gap-2 md:gap-4">
              <div className="hidden sm:flex flex-col text-right">
                <span className="text-[#059669] font-black text-lg md:text-2xl leading-none">RDAMSE 2026</span>
                <span className="text-gray-400 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em]">2nd International Conference</span>
              </div>
              <img
                src={rdamselogo}
                alt="RDAMSE Logo"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}

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
              2nd IC-RDAMSE{" "}
              <span className="bg-gradient-to-r from-[#059669] to-[#b8f29d] bg-clip-text text-transparent">
                2026
              </span>
            </h2>
            <p className="mt-3 text-gray-500 text-lg font-medium">
              7th – 8th May 2026 · SurTech, Kolkata
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

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <div className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <p className="text-2xl font-black text-gray-900">15+</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Legacy</p>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <p className="text-2xl font-black text-[#059669]">UGC</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Recognized</p>
              </div>

              {/* Website link — styled as a recognisable external-page button */}
              <a
                href="https://www.surtech.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                id="surtech-website-link"
                className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl
                         bg-white border border-gray-100 shadow-sm
                         hover:border-[#059669] hover:shadow-md hover:shadow-[#059669]/10
                         transition-all duration-300 cursor-pointer"
                title="Visit SurTech official website"
              >
                {/* Globe / webpage icon */}
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#059669]/10 group-hover:bg-[#059669]/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#059669]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 0c-2.5 2.5-4 5.8-4 10s1.5 7.5 4 10m0-20c2.5 2.5 4 5.8 4 10s-1.5 7.5-4 10M2 12h20" />
                  </svg>
                </span>

                <span className="flex flex-col leading-tight">
                  <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Official Website</span>
                  <span className="text-[10px] font-semibold text-[#059669] truncate max-w-[110px]">surtech.edu.in</span>
                </span>

                {/* External-link arrow — hints it opens a webpage */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#059669] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== PREVIOUS YEARS SECTION ==================== */}

      {/* ── Section header (scrolls normally above the pinned panels) ── */}
      <section className="relative bg-[#fafafa] overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#b8f29d]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center pt-16 pb-10 px-4 sm:px-6 lg:px-8">
          {/* Pill anchors — jump to each panel */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {eventMoments.map((item, i) => (
              <a
                key={i}
                href={`#hy-panel-${i}`}
                className="hy-anchor inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-black uppercase tracking-widest text-gray-700 hover:border-[#059669] hover:text-[#059669] transition-all duration-200"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: item.accent }}
                />
                {item.tag}
              </a>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-10 h-1 bg-[#059669] rounded-full" />
            <span className="text-xs font-black uppercase tracking-[0.35em] text-[#059669]">Our Journey</span>
            <span className="w-10 h-1 bg-[#059669] rounded-full" />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-5">
            Past{" "}
            <span className="bg-gradient-to-r from-[#059669] to-[#b8f29d] bg-clip-text text-transparent">
              Conferences
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-8">
            Scroll through each edition — growing stronger with global research impact.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { val: "2", label: "Editions" },
              { val: "270+", label: "Papers Published" },
              { val: "30+", label: "Countries" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <p className="text-3xl font-black text-[#059669]">{s.val}</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horizontal-scroll panels (pinned) ── */}
      {/*
        CodePen structure:
          #panels > #panels-container (width: N*100vw, flex nowrap) > .panel (100vw, 100vh each)
        GSAP pins #panels-container and scrolls the panels via xPercent.
      */}
      <section
        id="hy-panels"
        ref={panelsSectionRef}
        className="relative bg-[#fafafa]"
        style={{ overflow: "hidden" }}
      >
        {/* Wide flex container — width set via inline style to N*100% */}
        <div
          id="hy-panels-container"
          ref={panelsContainerRef}
          style={{
            width: `${eventMoments.length * 100}vw`,
            display: "flex",
            flexWrap: "nowrap",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {eventMoments.map((item, i) => (
            <article
              key={i}
              id={`hy-panel-${i}`}
              className="hy-panel relative flex items-center justify-center"
              style={{
                width: "100vw",
                height: "100vh",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {/* Full-bleed background image */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ scale: "1.1" }} // slight scale for reveal effect
              />

              {/* Sophisticated gradient overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
              />

              {/* Content floating in the middle-bottom */}
              <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-12 flex flex-col justify-end h-full pb-20 sm:pb-32">
                <div className="overflow-hidden mb-4">
                  <span
                    className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20 backdrop-blur-md"
                    style={{ background: `${item.accent}33` }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-white text-4xl sm:text-6xl font-black leading-none mb-6">
                  {item.title}
                </h3>

                <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
                  {item.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-12 flex items-center gap-4">
                  <span className="text-4xl font-black text-[#b8f29d]">{i + 1}</span>
                  <div className="h-[2px] flex-1 bg-white/10 relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-[#b8f29d]"
                      style={{ width: `${((i + 1) / eventMoments.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-bold text-white/40">{eventMoments.length}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ConferenceInfo />
      {/* ===================== FLYER DOWNLOAD & CALL-TO-ACTION ===================== */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        {/* Decorative ambient background elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#b8f29d]/10 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#059669]/5 rounded-full blur-[120px] translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Image Showcase - Properly Responsive & Not Full Screen */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group max-w-lg w-full">
              {/* Outer Glow & Background Frame */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#b8f29d]/30 via-[#059669]/10 to-transparent rounded-[3rem] blur-2xl group-hover:opacity-60 transition-opacity duration-700" />

              <div className="relative p-1.5 rounded-[2.2rem] bg-gradient-to-br from-[#b8f29d] via-[#059669] to-[#047857] shadow-2xl shadow-emerald-200/50">
                <div className="relative rounded-[1.8rem] overflow-hidden bg-white">
                  <img
                    src={flyerImg}
                    alt="IC-RDAMSE 2026 Official Flyer"
                    className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </div>

              {/* Floating Badge / Label */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-gray-900 border border-white/10 text-white px-6 py-4 rounded-3xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b8f29d] mb-1">Official Publication</p>
                <p className="text-sm font-bold">2nd RDAMSE 2026 Flyer</p>
              </div>

              {/* Decorative dots element */}
              <div className="absolute -top-10 -left-10 grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#059669] rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-6 mx-auto lg:mx-0">
              <span className="w-12 h-1.5 bg-[#059669] rounded-full" />
              <span className="text-sm font-black uppercase tracking-[0.3em] text-[#059669]">Get the Details</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
              Download Official <br />
              <span className="bg-gradient-to-r from-[#059669] to-[#b8f29d] bg-clip-text text-transparent italic">Conference Flyer</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Complete details including submission guidelines, important dates, and conference tracks are available in our official flyer. Download and share it with your research circle.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              <a
                href={flyerImg}
                download="RDAMSE-2026-Flyer.jpg"
                className="group relative px-8 py-4 bg-gray-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-12 shadow-xl shadow-gray-900/10 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Flyer
                </span>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
              </a>

              {/* <button className="px-8 py-4 bg-white border-2 border-gray-100 hover:border-[#059669] text-gray-700 hover:text-[#059669] rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                Share Event
              </button> */}
            </div>

            {/* Micro-stats / social proof */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 py-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-${200 + i * 100}`} />
                  ))}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#b8f29d] flex items-center justify-center text-[8px] font-black text-[#059669]">+200</div>
                </div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Participants</p>
              </div>
              <div className="h-6 w-[1px] bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Limited Seats Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
    </>

  );
};

export default About;

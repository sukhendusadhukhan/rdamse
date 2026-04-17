import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ConferenceInfo = () => {
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Reveal sections on scroll
    sectionRefs.current.forEach((section) => {
      gsap.fromTo(section,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

    // Animate Highlight Cards
    gsap.fromTo(cardRefs.current,
      {
        opacity: 0,
        scale: 0.9,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: cardRefs.current[0],
          start: "top 90%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const addToSectionRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const highlights = [
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.1a2 2 0 002 2 2 2 0 012 2v1.5m1-6a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Global Participation",
      desc: "Connect with researchers and pioneers from around the world."
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Cutting-edge Research",
      desc: "Explore the latest innovations in Material Science and Engineering."
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "High-level Networking",
      desc: "Build lasting professional relationships with industry leaders."
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Knowledge Exchange",
      desc: "Participate in expert presentations and collaborative workshops."
    }
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div ref={addToSectionRefs} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-[#059669] to-gray-900 bg-clip-text text-transparent mb-6">
            Conference Information
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Explore the vision, objectives, and collaborative partners behind IC-RDAMSE 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {/* Department Card */}
          <div ref={addToSectionRefs} className="group p-8 md:p-12 rounded-[2rem] bg-[#fafafa] border border-gray-100 transition-all hover:bg-white hover:shadow-2xl hover:shadow-[#b8f29d]/10">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#b8f29d] rounded-full" />
              <h3 className="text-2xl font-black text-gray-900 tracking-tight uppercase">Department Focus</h3>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                The Department of Basic Science & Humanities integrates Physics, Chemistry, Mathematics, and Humanities to lay the foundation for innovative engineering.
              </p>
              <p className="p-6 bg-white rounded-2xl border-l-4 border-[#059669] shadow-sm italic text-gray-700">
                "Our mission is to nurture students' technical skills while building their personality and communication through specialized interactive sessions."
              </p>
            </div>
          </div>

          {/* Conference Day & Time Card */}
          <div ref={addToSectionRefs} className="group rounded-[2rem] bg-gray-900 text-white overflow-hidden transition-all hover:shadow-2xl hover:shadow-black/20 relative">
            {/* Glow blobs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#b8f29d] opacity-[0.07] rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#059669] opacity-[0.08] rounded-full blur-[60px]" />
            </div>

            <div className="relative z-10 p-8 md:p-10">
              {/* Header */}
              <div className="inline-flex items-center gap-3 mb-7 text-[#b8f29d]">
                <div className="w-12 h-1 bg-current rounded-full" />
                <h3 className="text-2xl font-black tracking-tight uppercase">Date &amp; Schedule</h3>
              </div>

              {/* Day cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {/* Day 1 */}
                <div className="relative p-5 rounded-2xl bg-[#b8f29d]/10 border border-[#b8f29d]/20 hover:bg-[#b8f29d]/15 transition-colors">
                  <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-[#b8f29d] text-gray-900 rounded-full">Day 1</span>
                  <p className="text-[10px] font-black text-[#b8f29d] uppercase tracking-widest mb-1">Thursday</p>
                  <p className="text-3xl font-black text-white leading-none">07</p>
                  <p className="text-sm font-bold text-gray-400">May 2026</p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#b8f29d] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-300">09:00 AM – 06:00 PM</span>
                  </div>
                </div>

                {/* Day 2 */}
                <div className="relative p-5 rounded-2xl bg-[#059669]/10 border border-[#059669]/20 hover:bg-[#059669]/15 transition-colors">
                  <span className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest bg-[#059669] text-white rounded-full">Day 2</span>
                  <p className="text-[10px] font-black text-[#059669] uppercase tracking-widest mb-1">Friday</p>
                  <p className="text-3xl font-black text-white leading-none">08</p>
                  <p className="text-sm font-bold text-gray-400">May 2026</p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#059669] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-bold text-gray-300">09:00 AM – 05:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Event timeline pills */}
              <div className="space-y-2 mb-6">
                {[
                  { time: "09:00 AM", event: "Registration & Welcome", dot: "bg-[#b8f29d]" },
                  { time: "10:00 AM", event: "Inaugural Ceremony", dot: "bg-emerald-400" },
                  { time: "11:30 AM", event: "Keynote Sessions", dot: "bg-teal-400" },
                  { time: "02:00 PM", event: "Technical Paper Presentations", dot: "bg-[#059669]" },
                  { time: "05:00 PM", event: "Valedictory & Closing", dot: "bg-gray-400" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.dot}`} />
                    <span className="text-[10px] font-black text-gray-500 w-16 flex-shrink-0">{item.time}</span>
                    <span className="text-xs font-bold text-gray-300">{item.event}</span>
                  </div>
                ))}
              </div>

              {/* Venue pill */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Venue</p>
                  <p className="text-sm font-black text-white leading-snug">Dr. Sudhir Chandra Sur Institute of Technology</p>
                  <p className="text-xs text-gray-400 font-semibold">Salt Lake, Sector-I, Kolkata</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IPS Society Section */}
        <div ref={addToSectionRefs} className="mb-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#b8f29d]/5 to-transparent rounded-[3rem] -z-10" />
          <div className="p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                About the Indian <br />Photobiology Society
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                The IPS is a premier scientific organization dedicated to advancing research in the interactions between light and living organisms, in association with Jadavpur University.
              </p>
            </div>
            <div className="lg:w-1/2 p-1 bg-gradient-to-br from-[#b8f29d] to-[#059669] rounded-[2rem]">
              <div className="bg-white p-8 md:p-10 rounded-[1.8rem] space-y-4">
                <p className="text-lg text-gray-700">
                  This collaboration underscores the importance of interdisciplinary research in Material Science to address global sustainable development challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              ref={addToCardRefs}
              className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#059669]/5"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#b8f29d]/20 text-[#059669] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#059669] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ConferenceInfo;

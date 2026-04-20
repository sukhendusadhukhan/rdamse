import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Vanue = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });
    }, contentRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 bg-[#fafafa] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#b8f29d]/10 rounded-full blur-[80px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div ref={contentRef} className="flex flex-col z-10">
          <div className="reveal inline-flex items-center gap-3 mb-6">
            <span className="w-10 md:w-12 h-1.5 bg-[#059669] rounded-full" />
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#059669]">Location</span>
          </div>

          <h1 className="reveal text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-6 md:mb-8 leading-[1.1]">
            The Venue <br className="hidden sm:block" /> & <span className="text-[#059669]">Destination</span>
          </h1>

          <div className="reveal space-y-6 md:space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            <div className="p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
              <h3 className="text-gray-900 font-extrabold mb-2 uppercase tracking-tight text-base md:text-lg">Main Conference Hub</h3>
              <p className="text-gray-800">Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex</p>
              <div className="flex items-start gap-2 mt-4 text-sm text-gray-400 italic">
                <svg className="w-4 h-4 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p>540, Dum Dum Surer Math, South Dumdum, Kolkata, West Bengal 700074</p>
              </div>
            </div>

            <p className="text-base md:text-lg">
              Experience the vibrant culture and academic excellence of Kolkata. Our campus provides an advanced technological ecosystem combined with a serene atmosphere, ideal for the scientific exchange of RDAMSE 2026.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.google.com/maps/search/540,+Dum+Dum+Surer+Math,+South+Dumdum,+West+Bengal+700074"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white rounded-2xl md:rounded-full font-bold shadow-xl hover:bg-[#059669] hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 text-sm md:text-base"
              >
                <span>See on Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="reveal relative group z-0 mt-8 lg:mt-0 px-2 sm:px-0">
          <div className="absolute -inset-2 md:-inset-4 bg-[#059669] rounded-[2rem] md:rounded-[3rem] opacity-10 blur-xl md:blur-2xl transition-opacity group-hover:opacity-20" />
          <div className="relative aspect-square sm:aspect-video lg:aspect-[4/5] bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1841.4500924684671!2d88.40396393860628!3d22.620202244864434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s540%2C%20Dum%20Dum%20Surer%20Math%2C%20South%20Dumdum%2C%20West%20Bengal%20700074d%2C%20near%20Dum%20Dum%20Jn.%20Station%2C%20Surer%20Math%2C%20Melabagan%20Estate%2C%20Basak%20Bagan%2C%20Kolkata%2C%20West%20Bengal%20700074!5e0!3m2!1sen!2sin!4v1775904555888!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venue Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Persons Section */}
      <div className="max-w-7xl mx-auto mt-24 md:mt-32 relative z-10">
        <div className="reveal inline-flex items-center gap-3 mb-10">
          <span className="w-10 md:w-12 h-1.5 bg-[#b8f29d] rounded-full" />
          <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-[#059669]">For Enquiries Contact</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Dr. Dipankar Das",
              role: "Convener, 2nd RDAMSE 2026 | HoD, BSH Department, SurTech",
              email: "hod_bsh@dsec.ac.in",
              phone: "+91-9748313603"
            },
            {
              name: "Dr. Biswajit Das",
              role: "Co-Convener, 2nd RDAMSE 2026 | Convener, R&D Cell, SurTech",
              email: "biswajit.das@dsec.ac.in",
              phone: "+91-9748313603"
            }
          ].map((contact, idx) => (
            <div key={idx} className="reveal p-8 md:p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:border-[#b8f29d] transition-all duration-300 group">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 leading-tight">{contact.name}</h3>
                  <p className="text-sm md:text-base font-bold text-[#059669] uppercase tracking-wide opacity-80">{contact.role}</p>
                </div>
                
                <div className="space-y-4 mt-auto">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-gray-600 hover:text-[#059669] transition-colors group/item">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover/item:bg-[#b8f29d]/20 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <span className="font-semibold text-sm md:text-base break-all">{contact.email}</span>
                  </a>
                  
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-gray-600 hover:text-[#059669] transition-colors group/item">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover/item:bg-[#b8f29d]/20 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="font-semibold text-sm md:text-base">{contact.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vanue;


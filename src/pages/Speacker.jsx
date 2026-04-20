import React from 'react';
import joe from "../assets/joe.jpg";
import dong from "../assets/dong.jpg";
import cit from "../assets/citations.jpg"
import ajoy from "../assets/ajoy.jpg"
import ak from "../assets/ak.jpg"
import rkb from "../assets/rkb.jpg"
import kk from "../assets/kk.jpg"
import cc from "../assets/cc.webp"
import nrb from "../assets/nrb.jpg"
import san from "../assets/san.jpg"
import dd from "../assets/dd.jpg"
import dj from "../assets/dj.jpg"
import mm from "../assets/mm.jpg"
import jm from "../assets/jm.jpg"
import sj from "../assets/sj.jpg"



// Inline Icons to avoid dependency resolution issues
const ExternalLink = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const speakers = [
  { 
    name: "Prof. Joe OTSUKI", 
    role: "Keynote Speaker", 
    org: "Nihon University, Japan",
    link: "https://www.chem.cst.nihon-u.ac.jp/~otsuki/otsuki-e-files/research.html",
    image: joe
  },
  { 
    name: "Prof. Don Seo", 
    role: "Keynote Speaker", 
    org: "Arizona State University, USA",
    link: "https://www.researchgate.net/profile/Dong-Kyun-Seo-2",
    image: dong
  },
  { 
    name: "Prof. F-C Chuang", 
    role: "Keynote Speaker", 
    org: "National Sun Yat-sen University, Taiwan",
    link: "https://scholar.google.com/citations?user=O_iiqgwAAAAJ&hl=en",
    image: cit
  },
  { 
    name: "Prof. A. K. Ray", 
    role: "Invited Speaker (Padma Shri)", 
    org: "Director, JISASR",
    link: "https://jisiasr.org/prof-ajoy-kumar-ray/",
    image: ajoy
  },
  { 
    name: "Prof. A. K. Panda", 
    role: "Invited Speaker", 
    org: "VC, Rani Rashmoni Green University",
    link: "https://www.rrgu.in/",
    image: ak
  },
  { 
    name: "Prof. R. Banerjee", 
    role: "Invited Speaker", 
    org: "IISER, Kolkata",
    link: "https://www.iiserkol.ac.in/web/faculty-details/rahul-banerjee",
    image: rkb
  },
  { 
    name: "Prof. K. K. Chattopadhyay", 
    role: "Invited Speaker", 
    org: "Jadavpur University, Kolkata",
    link: "https://jaduniv.irins.org/profile/56946",
    image: kk
  },
  { 
    name: "Prof. C. Sinha", 
    role: "Invited Speaker", 
    org: "Jadavpur University, Kolkata",
    link: "https://www.researchgate.net/profile/Chittaranjan-Sinha-2",
    image: cc
  },
  { 
    name: "Prof. N. R. Bandyopadhyay", 
    role: "Invited Speaker", 
    org: "IIEST, Kolkata",
    link: "https://mrsikol.org/index.php/committee/",
    image: nrb
  },
  { 
    name: "Prof. S. Mahapatra", 
    role: "Invited Speaker", 
    org: "IISc, Bangalore",
    link: "https://faculty.dese.iisc.ac.in/santanu/",
    image: san
  },
  { 
    name: "Prof. D. Dhara", 
    role: "Invited Speaker", 
    org: "IIT Kharagpur",
    link: "https://loop.frontiersin.org/people/138352/overview",
    image: dd
  },
  { 
    name: "Prof. D. Jana", 
    role: "Invited Speaker", 
    org: "University of Calcutta",
    link: "http://independent.academia.edu/DebasishJana",
    image: dj
  },
  { 
    name: "Prof. M. Mondal", 
    role: "Invited Speaker", 
    org: "IACS, Kolkata",
    link: "https://iacs.res.in/athusers/index.php?navid=0&userid=IACS0039",
    image: mm
  },
  { 
    name: "Dr. J. Mukhopadhyay", 
    role: "Invited Speaker", 
    org: "CSIR-CGCRI, Kolkata",
    link: "https://www.cgcri.res.in/research/research-divisions/energy-materials-devices/dr-jayanta-mukhopadhyay/",
    image: jm
  },
  { 
    name: "Dr. A. Ghosal", 
    role: "Invited Speaker", 
    org: "Senior Manager, Exide Industries",
    link: "https://www.linkedin.com/in/avik-ghosal-5a30a485/",
    image: sj
  },
];

const SpeakerCard = ({ speaker }) => (
  <div className="group relative bg-white rounded-[2.5rem] p-2 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col h-full">
    {/* Background Decorative Element */}
    <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 bg-slate-50 rounded-full group-hover:bg-emerald-50/50 transition-colors duration-500" />
    
    <div className="relative p-7 flex flex-col items-center text-center flex-grow">
      {/* Photo Container */}
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-[2rem] bg-slate-100 p-1 mirror-shine overflow-hidden shadow-inner group-hover:rotate-3 transition-transform duration-500">
          <img 
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover rounded-[1.75rem] grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(speaker.name)}&background=f1f5f9&color=64748b&bold=true&size=200`;
            }}
          />
        </div>
        {/* Badge Overlay */}
        <div className="absolute -bottom-1 -right-1 bg-white p-2 rounded-2xl shadow-xl border border-slate-50 group-hover:scale-110 transition-transform duration-300">
          {speaker.role.includes("Keynote") ? (
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-1.5 rounded-xl text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-1.5 rounded-xl text-white">
              <UserIcon className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className="text-xl font-extrabold text-slate-800 mb-2 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
        {speaker.name}
      </h3>
      
      <div className={`inline-flex items-center px-4 py-1.5 rounded-full mb-4 border transition-colors duration-300 ${
        speaker.role.includes("Keynote") 
        ? 'bg-amber-50 border-amber-100 group-hover:bg-amber-100 group-hover:border-amber-200' 
        : 'bg-emerald-50 border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200'
      }`}>
        <span className={`text-[10px] font-bold uppercase tracking-[0.1em] ${speaker.role.includes("Keynote") ? 'text-amber-600' : 'text-emerald-600'}`}>
          {speaker.role}
        </span>
      </div>

      <p className="text-sm text-slate-500 font-semibold leading-relaxed mb-8 flex-grow">
        {speaker.org}
      </p>

      {/* Efficient Action Button */}
      <a 
        href={speaker.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full py-4 px-6 bg-slate-50 hover:bg-emerald-600 text-slate-600 hover:text-white rounded-[1.5rem] font-bold text-xs transition-all duration-300 flex items-center justify-center gap-3 group/btn overflow-hidden relative"
      >
        <span className="relative z-10">View Detailed Profile</span>
        <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
        <div className="absolute inset-0 bg-emerald-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 -z-0" />
      </a>
    </div>
  </div>
);

const Speacker = () => {
  return (
    <div className="min-h-screen pt-36 pb-24 px-4 md:px-8 bg-slate-50/30">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6 group hover:border-emerald-200 transition-all cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Eminent Scholars</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="relative">
              <span className="relative z-10 text-emerald-600">Speakers</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-emerald-100 -z-10 rounded-full" />
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed font-medium">
            Join us in welcoming the visionaries and trailblazers who are redefining the boundaries of Materials Science and Engineering.
          </p>
        </header>

        {/* Section: Keynote Speakers */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl font-bold text-slate-800 whitespace-nowrap">Keynote Speakers</h2>
            <div className="h-[1px] w-full bg-slate-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.filter(s => s.role.includes("Keynote")).map((s, idx) => (
              <SpeakerCard key={idx} speaker={s} />
            ))}
          </div>
        </div>

        {/* Section: Invited Speakers */}
        <div>
          <div className="flex items-center gap-4 mb-10 mt-16">
            <h2 className="text-2xl font-bold text-slate-800 whitespace-nowrap">Invited Speakers</h2>
            <div className="h-[1px] w-full bg-slate-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {speakers.filter(s => !s.role.includes("Keynote")).map((s, idx) => (
              <SpeakerCard key={idx} speaker={s} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-32 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-slate-900 border border-slate-800 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contribute to IC-RDAMSE 2026</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Share your insights and research findings with a global audience of experts and researchers.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button 
                  disabled
                  className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Coming Soon
                </button>
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-slate-400 text-sm font-semibold italic">Nomination process opening shortly</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Speacker;
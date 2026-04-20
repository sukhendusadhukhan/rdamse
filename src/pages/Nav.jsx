import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate, useLocation } from 'react-router-dom';
import rdamselogo from '../assets/rdamselogo.png';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  const activeBgRef = useRef(null);
  const buttonRefs = useRef([]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Call For Papers', path: '/call-for-papers' },
    { name: 'Submission', path: '/submission' },
    { name: 'Registration', path: '/registration' },
    { name: 'Committee', path: '/committee' },
    { name: 'Venue', path: '/venue' },
  ];

  const currentNav = navItems.find((item) => item.path === location.pathname) || navItems[0];
  const activeTab = currentNav.name;
  const isHome = location.pathname === '/';

  // GSAP Entrance Animation for the Navbar
  useEffect(() => {
    gsap.fromTo(
      navContainerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)', delay: 0.2 }
    );
  }, []);

  // GSAP Mobile Menu Slide Animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power3.out',
        display: 'block',
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.in',
        display: 'none',
      });
    }
  }, [isMobileMenuOpen]);

  // GSAP Active Tab Background Animation
  useEffect(() => {
    const updatePillPosition = () => {
      const activeIndex = navItems.findIndex((item) => item.name === activeTab);
      const activeBtn = buttonRefs.current[activeIndex];
      
      if (activeBtn && activeBgRef.current) {
        gsap.to(activeBgRef.current, {
          x: activeBtn.offsetLeft,
          width: activeBtn.offsetWidth,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      }
    };

    // run initially and delay slightly to ensure fonts/layout are loaded
    setTimeout(updatePillPosition, 50);
    
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [activeTab]);

  return (
    <header 
      ref={navContainerRef}
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl opacity-0"
    >
      {/* Main Navbar Container */}
      <nav className={`rounded-full p-2 flex items-center justify-between relative transition-all duration-300 ${
        isHome
          ? 'bg-black/30 backdrop-blur-md border border-white/20 shadow-[0px_10px_40px_rgba(0,0,0,0.35)]'
          : 'bg-white border border-gray-200 shadow-[0px_10px_30px_rgba(0,0,0,0.10)]'
      }`}>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between w-full relative">
          <div className="flex items-center relative">
            {/* Animated Background Pill */}
            <div
              ref={activeBgRef}
              className={`absolute h-full rounded-full pointer-events-none ${
                isHome
                  ? 'bg-[#4ade80]/40 border border-[#4ade80]/50'
                  : 'bg-[#b8f29d] border border-[#059669]/30'
              }`}
              style={{ top: 0, left: 0, opacity: 0 }}
            />

            {navItems.map((item, index) => {
              const isActive = activeTab === item.name;
              return (
                <button
                  key={item.name}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => navigate(item.path)}
                  className={`relative px-4 xl:px-6 py-2.5 rounded-full text-[14px] font-semibold transition-colors duration-300 flex items-center gap-2 z-10 cursor-pointer ${
                    item.name === 'Home' ? 'mr-4 md:mr-6' : ''
                  } ${
                    isHome
                      ? isActive ? 'text-white font-bold' : 'text-white/80 hover:text-white hover:bg-white/10'
                      : isActive ? 'text-black font-bold' : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {item.name === 'Home' ? <img src={rdamselogo} alt="Home" className="h-6 object-contain" /> : item.name}
                  {item.badge && (
                    <span className={`flex items-center justify-center w-[22px] h-[22px] rounded-full text-[11px] font-extrabold pb-[1px] transition-colors duration-300 ${
                      isHome
                        ? isActive ? 'bg-[#4ade80] text-black' : 'bg-white/20 text-white'
                        : isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Register Now Button (Desktop) */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4H1C30c-7QTIqLL1JaZKMSgCNBak-tdk-l724HMWm-r4xrw/viewform?usp=send_form"
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 px-6 py-2.5 rounded-full text-[14px] font-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg flex items-center gap-2 ${
              isHome
                ? 'bg-[#4ade80] text-black hover:bg-[#b8f29d] shadow-[#4ade80]/20'
                : 'bg-black text-white hover:bg-neutral-800 shadow-black/10'
            }`}
          >
            Register Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Mobile Navbar Header */}
        <div className="lg:hidden flex items-center justify-between w-full px-4 py-2">
            <span className={`text-lg font-bold px-2 py-1 ${isHome ? 'text-white' : 'text-gray-900'}`}>
              {activeTab === 'Home' ? <img src={rdamselogo} alt="Home" className="h-8 object-contain" /> : activeTab}
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe4H1C30c-7QTIqLL1JaZKMSgCNBak-tdk-l724HMWm-r4xrw/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-full text-[12px] font-bold ${
                  isHome ? 'bg-[#4ade80] text-black shadow-lg shadow-[#4ade80]/20' : 'bg-black text-white'
                }`}
              >
                Register
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-3 rounded-full transition-colors focus:outline-none cursor-pointer ${
                  isHome
                    ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
                aria-label="Toggle Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div 
        ref={mobileMenuRef} 
        className={`lg:hidden absolute top-[110%] left-0 right-0 rounded-3xl shadow-xl overflow-hidden hidden ${
          isHome
            ? 'bg-black/40 backdrop-blur-md border border-white/20'
            : 'bg-white border border-gray-200'
        }`}
        style={{ height: 0, opacity: 0 }}
      >
        <div className="p-3 flex flex-col gap-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-5 py-4 rounded-2xl text-base font-bold transition-colors flex items-center justify-between cursor-pointer ${
                  isHome
                    ? isActive ? 'bg-[#4ade80]/40 text-white border border-[#4ade80]/50' : 'text-white/80 hover:bg-white/10 hover:text-white'
                    : isActive ? 'bg-[#b8f29d] text-black' : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.name === 'Home' ? <img src={rdamselogo} alt="Home" className="h-7 object-contain" /> : item.name}
                </div>
                {item.badge && (
                  <span className={`flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-extrabold
                    ${isActive ? 'bg-[#4ade80] text-black' : 'bg-white/20 text-white'}
                  `}>
                    {item.badge}
                  </span>
                )}
              </button>
            )
          })}

          {/* Mobile CTA */}
          <div className="p-2 pt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe4H1C30c-7QTIqLL1JaZKMSgCNBak-tdk-l724HMWm-r4xrw/viewform?usp=send_form"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl bg-[#4ade80] text-black font-black text-center block shadow-lg shadow-[#4ade80]/20 active:scale-95 transition-transform"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
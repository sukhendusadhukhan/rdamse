import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Title */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <span className="text-lg font-black tracking-tighter text-gray-900">
              RDAMSE <span className="text-[#059669]">2026</span>
            </span>
            <span className="hidden md:block w-px h-4 bg-gray-200" />
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest">
              © 2026 All Rights Reserved
            </p>
          </div>

          {/* Organizer */}
          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
            Organized By <span className="text-gray-600">Department of BS&H, DSCSITSC</span>
          </div>

          {/* Social Link */}
          <div className="flex items-center">
            <a 
              href="https://www.instagram.com/surtechcollege/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-gray-400 hover:text-[#E4405F] transition-colors duration-300"
              aria-label="Instagram"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Follow us</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="transition-transform group-hover:scale-110"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

           <div className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
            Developed By <span className="text-gray-600"><a href="https://www.instagram.com/_suman_369.env/" target="_blank" rel="noopener noreferrer">Suman Kar</a></span>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

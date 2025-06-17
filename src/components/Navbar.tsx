
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav 
        className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-md border-b border-cyan-400/20 shadow-[0_4px_20px_rgba(0,255,255,0.1)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}>
                Portfolio
              </h1>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-4 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="relative text-gray-300 hover:text-cyan-400 px-2 lg:px-3 py-2 text-sm font-medium transition-all duration-300
                      hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] group"
                  >
                    {item}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={handleDrawerToggle}
                className="text-gray-300 hover:text-cyan-400 p-2 transition-colors duration-300"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-md border-b border-cyan-400/20`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium w-full text-left 
                  transition-all duration-300 hover:bg-cyan-400/10 rounded"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

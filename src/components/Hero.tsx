
import React, { useEffect, useRef } from 'react';
import { Download, Github, Linkedin } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
      '-=0.2'
    );
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Assumes resume.pdf is in the public folder
    link.download = 'OmRakholiya.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center bg-black relative overflow-hidden px-2 sm:px-4"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Floating neon orbs - adjusted for mobile */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-20 sm:top-40 right-8 sm:right-32 w-12 h-12 sm:w-24 sm:h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-20 h-20 sm:w-40 sm:h-40 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight"
            style={{
              textShadow: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)'
            }}
          >
            Hi, I'm Om Rakholiya
          </h1>
          
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-300 mb-4 sm:mb-6 font-light"
            style={{
              textShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
            }}
          >
            Full-Stack Developer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto px-2">
            I build fast and scalable web applications with{' '}
            <span className="text-purple-400 font-semibold">modern technologies</span>
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2"
          >
            <button
              onClick={scrollToProjects}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg 
                hover:bg-cyan-400/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden
                shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button 
              onClick={downloadResume}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg 
              hover:from-purple-400 hover:to-pink-400 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2
              shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <a
              href="https://github.com/omrakholiya3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-cyan-400/30 text-cyan-400 hover:text-white hover:border-cyan-400 
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:-translate-y-1"
            >
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/om-rakholiya-221243352/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-purple-400/30 text-purple-400 hover:text-white hover:border-purple-400 
                transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:-translate-y-1"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

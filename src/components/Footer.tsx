
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-cyan-400/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://github.com/omrakholiya3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 p-2 rounded-full
                hover:shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:-translate-y-1"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/om-rakholiya-221243352/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 p-2 rounded-full
                hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:-translate-y-1"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:omrakholiya3126@gmail.com"
              className="text-gray-400 hover:text-pink-400 transition-all duration-300 p-2 rounded-full
                hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] hover:-translate-y-1"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © 2024{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
              Om Rakholiya{' '} 
            </span>
              | Developed using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img from '../../public/profilepic.jpeg'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const technologies = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900/20 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}>
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef}>
            <h3 className="text-2xl font-bold text-white mb-6">
              Hello! I'm a{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                passionate developer
              </span>
            </h3>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm a full-stack developer with a passion for creating{' '}
              <span className="text-cyan-400 font-semibold">digital experiences</span>{' '}
              that make a difference. With expertise in modern web technologies, I enjoy
              turning complex problems into simple, beautiful solutions.
            </p>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I specialize in{' '}
              <span className="text-purple-400 font-semibold">JavaScript, React, Node.js</span>, and modern web development
              practices. When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 
                    text-cyan-300 rounded-lg text-sm hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]
                    transition-all duration-300 hover:-translate-y-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div
            ref={imageRef}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-cyan-400 shadow-2xl overflow-hidden
                shadow-[0_0_40px_rgba(0,255,255,0.4)] hover:shadow-[0_0_60px_rgba(0,255,255,0.6)] transition-all duration-300">
                <img
                  src={img}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating particles around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-cyan-400 rounded-full blur-sm animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full blur-sm animate-pulse delay-2000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

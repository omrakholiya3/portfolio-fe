
import React, { useEffect, useRef } from 'react';
import { Code, Database, Globe, Settings } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-10 h-10 text-cyan-400" />,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Material-UI', 'Tailwind CSS'],
      gradient: 'from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-400/30',
      glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]'
    },
    {
      title: 'Backend',
      icon: <Code className="w-10 h-10 text-purple-400" />,
      skills: ['Node.js', 'Express.js', 'Python', 'RESTful APIs', 'GraphQL', 'Microservices'],
      gradient: 'from-purple-500/20 to-violet-500/20',
      border: 'border-purple-400/30',
      glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
    },
    {
      title: 'Database',
      icon: <Database className="w-10 h-10 text-green-400" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      border: 'border-green-400/30',
      glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]'
    },
    {
      title: 'Tools & Others',
      icon: <Settings className="w-10 h-10 text-pink-400" />,
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest', 'Webpack', 'Linux'],
      gradient: 'from-pink-500/20 to-rose-500/20',
      border: 'border-pink-400/30',
      glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]'
    }
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    });
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-black min-h-screen relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}>
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              ref={el => cardsRef.current[index] = el}
              className={`p-8 bg-gradient-to-br ${category.gradient} border ${category.border} rounded-xl 
                hover:border-opacity-100 hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm
                ${category.glow} group relative overflow-hidden`}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-black/20">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black/30 border border-white/20 text-gray-300 text-sm rounded 
                        hover:bg-white/10 hover:text-white hover:border-white/40 transition-all duration-300
                        hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

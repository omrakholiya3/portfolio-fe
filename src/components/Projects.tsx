import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);
  const [projects, setProjects] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch('https://portfolio-admin-fe.onrender.com/api/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error("Failed to fetch projects:", err));
  }, []);

  // GSAP animation
  useEffect(() => {
    if (projects.length) {
      projectsRef.current.forEach((project, index) => {
        gsap.fromTo(project,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: project,
                start: 'top 85%',
              }
            }
        );
      });
    }
  }, [projects]);

  return (
      <section
          id="projects"
          ref={sectionRef}
          className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900/20 min-h-screen relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-20 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}>
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <div
                    key={project.title}
                    ref={el => projectsRef.current[index] = el}
                    className={`bg-gradient-to-br from-purple-500 to-indigo-500 border border-purple-500 rounded-xl overflow-hidden 
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col group backdrop-blur-sm
                hover:shadow-[0_0_40px_rgba(0,255,255,0.2)]`}
                >
                  <div className="h-48 bg-gradient-to-br from-black/40 to-gray-900/40 flex items-center justify-center relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                          <span
                              key={tech}
                              className="px-3 py-1 bg-black/30 border border-white/20 text-cyan-300 text-xs rounded
                        hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300
                        hover:shadow-[0_0_8px_rgba(0,255,255,0.3)]"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300
                      hover:shadow-[0_0_10px_rgba(0,255,255,0.3)] p-2 rounded"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-all duration-300
                      hover:shadow-[0_0_10px_rgba(168,85,247,0.3)] p-2 rounded"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Projects;

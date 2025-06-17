import React, { useState, useEffect, useRef } from 'react';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);
  const { toast } = useToast();

  useEffect(() => {
    gsap.fromTo(formRef.current,
        { x: -50, opacity: 0 },
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

    gsap.fromTo(socialRef.current,
        { x: 50, opacity: 0 },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://portfolio-admin-fe.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Something went wrong",
        description: "Failed to send your message. Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
      <section
          id="contact"
          ref={sectionRef}
          className="py-20 bg-black min-h-screen relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.3)' }}>
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-xl backdrop-blur-sm
              hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400
                  focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300"
                    placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400
                  focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300"
                    placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400
                  focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 resize-none"
                    placeholder="Your message..."
                />
              </div>

              <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg
                hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2
                shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            <div ref={socialRef} className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Connect!
              </span>
              </h3>

              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm always interested in new opportunities and collaborations.
                Whether you have a project in mind or just want to say hello,
                feel free to reach out!
              </p>

              <div className="flex justify-center gap-6 mb-8">
                <a
                    href="https://github.com/yash49766"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 rounded-full
                  hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]"
                >
                  <Github size={32}/>
                </a>

                <a
                    href="https://www.linkedin.com/in/yash-kapadiya-068b00323/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-400/30 text-purple-400 rounded-full
    hover:border-purple-400 hover:-translate-y-1 transition-all duration-300
    hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                >
                  <Linkedin size={32}/>
                </a>
                <a
                    href="mailto:yashkapadiya191@gmail.com"
                    className="p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/30 text-pink-400 rounded-full
        hover:border-pink-400 hover:-translate-y-1 transition-all duration-300
        hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                >
                  <Mail size={32}/>
                </a>
              </div>

              <p className="text-gray-400 text-lg">
                <span className="text-cyan-400">yashkapadiya191@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;

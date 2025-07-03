import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 1.2 + 0.5,
      delay: Math.random() * 5,
    }));
  };

  const stars = generateStars(120);

  return (
    <section className="relative min-h-screen bg-gray-950 text-white flex items-center justify-center overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white opacity-80 animate-float"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              boxShadow: `0 0 5px #00ffaa88`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl space-y-4">
        <div className="text-green-400 text-sm font-mono tracking-wider">👋 Hello, I'm</div>

        <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 via-white to-green-400 text-transparent bg-clip-text animate-gradient leading-tight">
          Shivam Kumar
        </h1>

        <h2 className="text-lg sm:text-xl text-gray-200 font-medium tracking-wide">
          Full Stack Developer & Engineer 🚀
        </h2>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          I design, develop, and deploy scalable applications using modern tools like <br />
          <span className="text-white font-semibold">React, Node.js, Laravel</span> and cloud platforms like <span className="text-white font-semibold">AWS</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href="mailto:shivam01here@gmail.com"
            className="px-6 py-2 text-sm font-medium bg-green-500 text-black rounded-md hover:bg-green-600 transition-all shadow hover:shadow-green-400/30"
          >
            Let's Talk
          </a>
          <a
            href="#projects"
            className="px-6 py-2 text-sm font-medium border border-green-400 text-green-400 rounded-md hover:bg-green-600 hover:text-black transition-all"
          >
            View Work
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 pt-5">
          <a href="https://github.com/shivamk01here" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/shivam01here" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:shivam01here@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="text-green-400" size={18} />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;

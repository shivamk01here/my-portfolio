import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Generate 3D stars for background
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 2000,
      y: (Math.random() - 0.5) * 2000,
      z: (Math.random() - 0.5) * 1000,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
      opacity: Math.random() * 0.8 + 0.2,
      twinkleSpeed: Math.random() * 2 + 1
    }));
  };

  const stars = generateStars(150);

  const projects = [
    {
      title: "TapClass - Coaching Class Management SaaS",
      description: "Scalable event-driven SaaS platform with microservices architecture for student onboarding, invoicing, payments, and messaging systems.",
      technologies: ["Node.js", "TypeScript", "React", "Docker", "AWS", "RabbitMQ", "MySQL"],
      liveLink: "tapclass.netlify.app",
      githubLink: "#",
      image: "/image1.png",
      gradient: "from-blue-500/20 to-purple-500/20",
      accent: "blue"
    },
    {
      title: "MockPrep – AI Evaluation Exam Portal",
      description: "AI-powered exam portal with Google OAuth, Gemini API integration for dynamic question generation, and comprehensive role-based dashboards.",
      technologies: ["Node.js", "Gemini API", "Google Auth", "MongoDB", "React", "JWT"],
      liveLink: "mockprep.crazytechnology.in",
      githubLink: "#",
      image: "/4.png",
      gradient: "from-green-500/20 to-emerald-500/20",
      accent: "green"
    },
    {
      title: "Bharat Media Solutions - Creative Agency",
      description: "Modern creative agency website with sophisticated animations, 3D elements, and immersive user experience design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel", "Three.js"],
      liveLink: "bharatmediasolutions.netlify.app",
      githubLink: "#",
      image: "/image3.png",
      gradient: "from-orange-500/20 to-red-500/20",
      accent: "orange"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isHovered, projects.length]);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getProjectPosition = (index) => {
    const diff = (index - currentIndex + projects.length) % projects.length;
    if (diff === 0) return 'hero';
    if (diff === 1) return 'right';
    if (diff === 2) return 'left';
    return 'hidden';
  };

  const getAccentColor = (accent) => {
    const colors = {
      blue: 'border-blue-500/40 shadow-blue-500/25',
      green: 'border-green-500/40 shadow-green-500/25',
      orange: 'border-orange-500/40 shadow-orange-500/25'
    };
    return colors[accent] || colors.blue;
  };

  return (
    <section id="projects" className="min-h-screen py-8 sm:py-12 lg:py-16 bg-gray-900 relative overflow-hidden">
      {/* 3D Moving Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              transform: `translateX(${star.x}px) translateY(${star.y}px) translateZ(${star.z}px)`,
              animation: `
                starMove${star.id} ${20 + star.speed * 10}s infinite linear,
                twinkle ${star.twinkleSpeed}s infinite ease-in-out
              `,
              boxShadow: `0 0 ${star.size * 3}px rgba(255, 255, 255, ${star.opacity * 0.5})`
            }}
          />
        ))}
      </div>

      {/* HTML Tags Decoration */}
      <div className="absolute top-4 left-4 text-green-400 text-xs sm:text-sm font-mono opacity-60 z-10">
        &lt;projects&gt;
      </div>
      <div className="absolute top-4 right-4 text-green-400 text-xs sm:text-sm font-mono opacity-60 z-10">
        &lt;/showcase&gt;
      </div>
      <div className="absolute bottom-4 left-4 text-green-400 text-xs sm:text-sm font-mono opacity-60 z-10">
        &lt;/projects&gt;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Featured <span className="text-green-400">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Innovative solutions that make a difference
          </p>
        </div>

        {/* Projects Carousel */}
        <div 
          className="relative h-[500px] sm:h-[600px] lg:h-[650px] mb-8 sm:mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {projects.map((project, index) => {
            const position = getProjectPosition(index);
            const isHero = position === 'hero';
            const isVisible = position !== 'hidden';
            
            return (
              <div
                key={project.title}
                className={`absolute transition-all duration-700 ease-out ${
                  !isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'
                } ${
                  isHero 
                    ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl z-30 scale-100' 
                    : position === 'right'
                    ? 'right-0 top-1/2 -translate-y-1/2 w-64 sm:w-72 lg:w-80 z-20 scale-75 translate-x-4'
                    : 'left-0 top-1/2 -translate-y-1/2 w-64 sm:w-72 lg:w-80 z-20 scale-75 -translate-x-4'
                }`}
              >
                <div className={`group relative bg-gray-800/70 backdrop-blur-lg border-2 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                  isHero 
                    ? `${getAccentColor(project.accent)} shadow-2xl` 
                    : 'border-gray-700/50 shadow-lg hover:border-gray-600/70'
                }`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${isHero ? 'h-48 sm:h-64 lg:h-72' : 'h-32 sm:h-40'}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent`}></div>
                    
                    {/* Action Buttons - Overlay */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={`https://${project.liveLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                      >
                        <ExternalLink size={isHero ? 18 : 16} />
                      </a>
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                      >
                        <Github size={isHero ? 18 : 16} />
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`p-4 sm:p-6 ${isHero ? 'lg:p-8' : ''}`}>
                    <h3 className={`font-bold text-white mb-2 sm:mb-3 group-hover:text-green-400 transition-colors duration-300 ${
                      isHero ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-300 mb-3 sm:mb-4 leading-relaxed ${
                      isHero ? 'text-base sm:text-lg' : 'text-sm line-clamp-2'
                    }`}>
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {(isHero ? project.technologies : project.technologies.slice(0, 4)).map((tech) => (
                        <span 
                          key={tech}
                          className={`bg-gray-700/60 text-green-400 rounded-full font-medium hover:bg-green-500/20 transition-colors duration-300 ${
                            isHero ? 'px-3 py-1.5 text-sm' : 'px-2 py-1 text-xs'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {!isHero && project.technologies.length > 4 && (
                        <span className="bg-gray-700/60 text-gray-400 px-2 py-1 rounded-full text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    {isHero && (
                      <div className="flex gap-3 sm:gap-4">
                        <a 
                          href={`https://${project.liveLink}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 hover:scale-105 font-medium text-sm sm:text-base"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`}></div>
                </div>
              </div>
            );
          })}

          {/* Navigation Controls */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-green-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-green-500/30 p-4 sm:p-6 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">15+</div>
            <div className="text-white font-semibold text-sm sm:text-base">Projects Completed</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-green-500/30 p-4 sm:p-6 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">8+</div>
            <div className="text-white font-semibold text-sm sm:text-base">Technologies Mastered</div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-green-500/30 p-4 sm:p-6 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 text-center">
            <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-white font-semibold text-sm sm:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        ${stars.map(star => `
          @keyframes starMove${star.id} {
            0% { transform: translateX(${star.x}px) translateY(${star.y}px) translateZ(${star.z}px); }
            100% { transform: translateX(${star.x + 100}px) translateY(${star.y + 50}px) translateZ(${star.z + 200}px); }
          }
        `).join('')}

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
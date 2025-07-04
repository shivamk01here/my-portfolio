import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

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

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, projects.length]);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const getAccentColor = (accent) => {
    const colors = {
      blue: 'border-blue-500/40 shadow-blue-500/25',
      green: 'border-green-500/40 shadow-green-500/25',
      orange: 'border-orange-500/40 shadow-orange-500/25'
    };
    return colors[accent] || colors.blue;
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
  };

  const cardVariants = {
    initial: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-6 sm:py-10 lg:py-12 bg-gray-900 relative overflow-hidden">
      {/* Stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              x: [star.x, star.x + 100],
              y: [star.y, star.y + 50],
              opacity: [star.opacity * 0.2, star.opacity, star.opacity * 0.2],
            }}
            transition={{
              duration: 20 + star.speed * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Code style tags */}
      <div className="absolute top-4 left-4 text-green-400 text-xs sm:text-sm font-mono opacity-60 z-10">&lt;projects&gt;</div>
      <div className="absolute top-4 right-4 text-green-400 text-xs sm:text-sm font-mono opacity-60 z-10">&lt;/showcase&gt;</div>
      <div className="absolute bottom-4 left-4 text-green-400 text-xs sm:text-sm font-mono opacity-60 z-10">&lt;/projects&gt;</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
            Featured <span className="text-green-400 ">Projects</span>
          </h2>
        </motion.div>

        <div
          className="relative mb-8 sm:mb-12 flex justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-4xl h-[400px] sm:h-[440px] lg:h-[480px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.8 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`w-full max-w-2xl bg-gray-800/70 backdrop-blur-lg border-2 rounded-2xl overflow-hidden transition-all duration-500 ${getAccentColor(projects[currentIndex].accent)} shadow-2xl`}
                >
                  <div className="relative overflow-hidden h-40 sm:h-48 lg:h-56">
                    <motion.img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${projects[currentIndex].gradient} to-transparent`} />
                    <motion.div
                      className="absolute top-4 right-4 flex gap-2"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.a
                        href={`https://${projects[currentIndex].liveLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      <motion.a
                        href={projects[currentIndex].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <motion.h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                      {projects[currentIndex].title}
                    </motion.h3>
                    <motion.p className="text-base sm:text-lg text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                      {projects[currentIndex].description}
                    </motion.p>
                    <motion.div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {projects[currentIndex].technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          className="bg-gray-700/60 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-green-500/20 transition-colors duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                    <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <motion.a
                        href={`https://${projects[currentIndex].liveLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={projects[currentIndex].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-medium text-sm sm:text-base"
                      >
                        <Github size={16} />
                        View Code
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.button
              onClick={prevProject}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              onClick={nextProject}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-green-400' : 'bg-gray-600 hover:bg-gray-500'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: index === currentIndex ? 1.25 : 1,
                backgroundColor: index === currentIndex ? '#4ade80' : '#4b5563'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

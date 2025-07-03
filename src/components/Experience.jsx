import React from 'react';
import { MapPin, ExternalLink, Code, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Classcard Inc",
      companyUrl: "https://classcard.com",
      role: "Full Stack Developer",
      period: "Feb 2025 – Jun 2025",
      location: "Remote, Dubai",
      description: "Built backend APIs, class scheduler with drag-and-drop UI, online booking flow with payment integration, and integrated third-party services.",
      technologies: ["Node.js", "Express", "TypeScript", "React.js", "MySQL", "Redis", "RabbitMQ", "Docker", "AWS"],
      achievements: [
        "Developed drag-and-drop class scheduling system",
        "Integrated payment gateways for online booking",
        "Built scalable backend APIs with microservices architecture"
      ]
    },
    {
      company: "Ixambee",
      companyUrl: "https://ixambee.com",
      role: "Software Developer",
      period: "Aug 2023 – Jan 2025",
      location: "Noida, UP",
      description: "Architected core backend modules, built internal task management platform with microservices, and designed job portal with Next.js frontend.",
      technologies: ["Node.js", "Express", "TypeScript", "Next.js", "MongoDB", "Kafka", "Redis", "Docker"],
      achievements: [
        "Architected core backend modules for scalability",
        "Built internal task management platform",
        "Designed job portal with modern Next.js frontend"
      ]
    }
  ];

  // Generate floating particles
  const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      animationDelay: Math.random() * 5,
      duration: Math.random() * 3 + 2
    }));
  };

  const particles = generateParticles(30);

  return (
    <section id="experience" className="py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-green-400/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out ${particle.animationDelay}s`
            }}
          />
        ))}
      </div>

      {/* Code Brackets */}
      <div className="absolute top-4 left-4 text-green-400/50 text-xs font-mono animate-pulse">
        &lt;experience&gt;
      </div>
      <div className="absolute bottom-4 right-4 text-green-400/50 text-xs font-mono animate-pulse">
        &lt;/experience&gt;
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">Professional journey & contributions</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/60 hover:border-green-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-1"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">{exp.role}</h3>
                      <span className="text-gray-500">@</span>
                      <div className="flex items-center gap-2 group/company">
                        <h4 className="text-lg text-green-400 font-semibold">{exp.company}</h4>
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-green-400 hover:text-green-300 transition-all duration-300 opacity-60 group-hover/company:opacity-100 hover:scale-110"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">{exp.description}</p>

                {/* Two Column Layout for Achievements and Technologies */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Achievements */}
                  <div>
                    <h5 className="text-white font-semibold mb-2 text-sm flex items-center gap-2">
                      <Code size={14} className="text-green-400" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-1 text-xs">▸</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="text-white font-semibold mb-2 text-sm">Tech Stack</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-green-500/10 text-green-400 px-2 py-1 rounded-lg text-xs font-medium border border-green-500/20 hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Stats */}
        <div className="mt-8 flex justify-center">
          <div className="flex gap-8 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-4 rounded-2xl">
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">1.5+</div>
              <div className="text-gray-400 text-xs">Years</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">2</div>
              <div className="text-gray-400 text-xs">Companies</div>
            </div>
            <div className="w-px bg-gray-700"></div>
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">15+</div>
              <div className="text-gray-400 text-xs">Projects</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Experience;
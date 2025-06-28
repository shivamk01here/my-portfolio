import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TapClass - Coaching Class Management SaaS",
      description: "Scalable event-driven SaaS platform with microservices for student onboarding, invoicing, payments, and messaging.",
      technologies: ["Node.js", "TypeScript", "React", "Docker", "AWS", "RabbitMQ", "MySQL"],
      liveLink: "tapclass.netlify.app",
      githubLink: "#",
      image: "/image1.png"
    },
    {
      title: "MockPrep – AI Evaluation Exam Portal",
      description: "AI-powered exam portal with Google OAuth, Gemini API integration for dynamic question generation, and role-based dashboards.",
      technologies: ["Node.js", "Gemini API", "Google Auth", "MongoDB"],
      liveLink: "mockprep.crazytechnology.in",
      githubLink: "#",
      image: "/4.png"
    },
    {
      title: "Bharat Media Solutions - creative agency Website",
      description: "creative agency website.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel", 'three.js'],
      liveLink: "bharatmediasolutions.netlify.app",
      githubLink: "#",
      image: "/image3.png"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-primary-500/20 text-primary-400 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <Github size={16} />
                    Code
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
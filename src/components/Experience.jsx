import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Classcard Inc",
      role: "Full Stack Developer",
      period: "Feb 2025 – Jun 2025",
      location: "Remote, Dubai",
      description: "Built backend APIs, class scheduler with drag-and-drop UI, online booking flow with payment integration, and integrated third-party services.",
      technologies: ["Node.js", "Express", "TypeScript", "React.js", "MySQL", "Redis", "RabbitMQ", "Docker", "AWS"]
    },
    {
      company: "Ixambee",
      role: "Software Developer",
      period: "Aug 2023 – Jan 2025",
      location: "Noida, UP",
      description: "Architected core backend modules, built internal task management platform with microservices, and designed job portal with Next.js frontend.",
      technologies: ["Node.js", "Express", "TypeScript", "Next.js", "MongoDB", "Kafka", "Redis", "Docker"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-primary-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
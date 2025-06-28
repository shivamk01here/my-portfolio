import React from 'react';
import { Code, Zap, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Zap className="text-primary-400" size={24} />,
      title: "Fast Delivery",
      description: "I ship things fast with efficient development practices"
    },
    {
      icon: <Code className="text-primary-400" size={24} />,
      title: "Full Stack",
      description: "End-to-end development from backend APIs to frontend UIs"
    },
    {
      icon: <Globe className="text-primary-400" size={24} />,
      title: "Modern Tech",
      description: "Using latest technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            I ship things fast and I am a full stack developer passionate about creating 
            scalable web applications with modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Building Digital Solutions That Matter
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building scalable web applications. 
              My experience spans across backend development with Node.js and Laravel, frontend development 
              with React.js and Next.js, and cloud deployment with AWS and Docker.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices to deliver 
              high-quality solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['Node.js', 'React.js', 'Laravel', 'AWS', 'Docker', 'PostgreSQL', 'Python', 'PHP'].map((tech) => (
                <span key={tech} className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500/20 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
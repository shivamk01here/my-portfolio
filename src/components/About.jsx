import React, { useEffect, useRef } from 'react';
import { Code, Zap, Globe } from 'lucide-react';

const About = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const createStars = () => {
      const container = starsRef.current;
      if (!container) return;

      // Clear existing stars
      container.innerHTML = '';

      // Create 3D stars
      for (let i = 0; i < 15; i++) {
        const star = document.createElement('div');
        star.className = 'star-3d';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 2) + 's';
        container.appendChild(star);
      }

      // Create handwritten HTML tags
      const tags = ['<dev>', '</code>', '<skills>', '</html>', '<css>', '</js>', '<react>', '</node>'];
      for (let i = 0; i < 8; i++) {
        const tag = document.createElement('div');
        tag.className = 'handwritten-tag';
        tag.textContent = tags[i];
        tag.style.left = Math.random() * 90 + '%';
        tag.style.top = Math.random() * 90 + '%';
        tag.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(tag);
      }
    };

    createStars();
  }, []);

  const highlights = [
    {
      icon: <Zap className="text-green-400" size={24} />,
      title: "Fast Delivery",
      description: "I ship things fast with efficient development practices"
    },
    {
      icon: <Code className="text-green-400" size={24} />,
      title: "Full Stack",
      description: "End-to-end development from backend APIs to frontend UIs"
    },
    {
      icon: <Globe className="text-green-400" size={24} />,
      title: "Modern Tech",
      description: "Using latest technologies and best practices"
    }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
        

        
        .stars-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .star-3d {
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, #00ff7f, #32cd32);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          animation: float 3s ease-in-out infinite, rotate 4s linear infinite;
          box-shadow: 0 0 10px rgba(0, 255, 127, 0.5);
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .handwritten-tag {
          position: absolute;
          font-family: 'Kalam', cursive;
          font-size: 14px;
          color: rgba(0, 255, 127, 0.3);
          transform: rotate(-15deg);
          animation: fadeInOut 6s ease-in-out infinite;
          pointer-events: none;
          font-weight: 400;
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: rotate(-15deg) scale(0.8); }
          50% { opacity: 1; transform: rotate(-10deg) scale(1); }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #e5e7eb 0%, #ffffff 50%, #d1d5db 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #d1d5db 0%, #f3f4f6 50%, #e5e7eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .tech-tag {
          background: rgba(0, 255, 127, 0.1);
          color: #00ff7f;
          border: 1px solid rgba(0, 255, 127, 0.3);
          transition: all 0.3s ease;
        }
        
        .tech-tag:hover {
          background: rgba(0, 255, 127, 0.2);
          transform: scale(1.05);
        }
        
        .highlight-card {
          background: rgba(0, 255, 127, 0.05);
          border: 1px solid rgba(0, 255, 127, 0.1);
          transition: all 0.3s ease;
        }
        
        .highlight-card:hover {
          background: rgba(0, 255, 127, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 127, 0.1);
        }
        
        .icon-container {
          background: rgba(0, 255, 127, 0.1);
          border: 1px solid rgba(0, 255, 127, 0.3);
        }
      `}</style>
      
      <section id="about" className="py-20 bg-gray-900 about-section py-20 relative">
        <div ref={starsRef} className="stars-container"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gradient text-xl max-w-2xl mx-auto">
              I ship things fast and I am a full stack developer passionate about creating 
              scalable web applications with modern technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Building Digital Solutions That Matter
              </h3>
              <p className="text-gradient mb-6 leading-relaxed">
                I'm a passionate full-stack developer with expertise in building scalable web applications. 
                My experience spans across backend development with Node.js and Laravel, frontend development 
                with React.js and Next.js, and cloud deployment with AWS and Docker.
              </p>
              <p className="text-gradient mb-8 leading-relaxed">
                I believe in writing clean, maintainable code and following best practices to deliver 
                high-quality solutions that solve real-world problems.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {['Node.js', 'React.js', 'Laravel', 'AWS', 'Docker', 'PostgreSQL', 'Python', 'PHP'].map((tech) => (
                  <span key={tech} className="tech-tag px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="icon-container p-3 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-white">{item.title}</h4>
                      <p className="text-gradient">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
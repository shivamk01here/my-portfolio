import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mainTechnologies = [
    {
      name: "Laravel",
      icon: "/lara.png",
      category: "Backend",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      description: "PHP Framework"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      description: "JavaScript Runtime"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      description: "UI Library"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      description: "SQL Database"
    }
  ];

  const otherTechnologies = [
    [
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        category: "Language"
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        category: "Framework"
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        category: "Database"
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        category: "Database"
      }
    ],
    [
      {
        name: "AWS",
        icon: "/aw.png",
        category: "Cloud"
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        category: "DevOps"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        category: "Language"
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        category: "Language"
      }
    ],
    [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        category: "Language"
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        category: "Database"
      },
      {
        name: "Nginx",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
        category: "DevOps"
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        category: "Tools"
      }
    ]
  ];

  const generateParticles = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1.5,
      speed: Math.random() * 0.4 + 0.2,
      opacity: Math.random() * 0.4 + 0.3,
      color: ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B'][Math.floor(Math.random() * 4)]
    }));
  };

  const particles = generateParticles(40);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              opacity: p.opacity,
              animation: `float ${15 + Math.random() * 10}s infinite linear, pulse ${3 + Math.random() * 2}s infinite ease-in-out`,
              transform: `translate3d(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px, 0)`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-green-400 text-sm font-mono uppercase tracking-widest">Skills & Tools</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Tech Stack</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Building high-performance apps with clean code and efficient systems
          </p>
        </div>

        {/* Main stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {mainTechnologies.map((tech) => (
            <div
              key={tech.name}
              className={`relative p-6 rounded-xl border border-gray-700/40 hover:border-green-400/40 transition-all duration-300 backdrop-blur-sm ${tech.bgColor}`}
              onMouseEnter={() => setHoveredCard(tech.name)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain drop-shadow-md" />
                </div>
                <h3 className="text-white text-lg font-semibold">{tech.name}</h3>
                <p className="text-gray-400 text-xs">{tech.category}</p>
                <p className="text-gray-500 text-[10px]">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Other stack */}
        <div className="space-y-6 mb-16">
          {otherTechnologies.map((row, i) => (
            <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {row.map((tech) => (
                <div
                  key={tech.name}
                  className="bg-gray-800/40 border border-gray-700/30 p-4 rounded-lg hover:border-green-400/40 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 mb-1">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain drop-shadow" />
                    </div>
                    <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
                    <span className="text-gray-500 text-[10px]">{tech.category}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { number: "475+", label: "DSA Problems Solved", platform: "🏆 LeetCode" },
            { number: "5⭐", label: "Python Coder", platform: "🏆 HackerRank" },
            { number: "2+", label: "Years Experience", platform: "Full Stack Development" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700/30 p-6 rounded-xl text-center hover:border-green-400/50 transition-all duration-300">
              <div className="text-4xl font-bold text-green-400 mb-2">{stat.number}</div>
              <div className="text-white text-base">{stat.label}</div>
              <div className="text-green-400 text-sm mt-1">{stat.platform}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(0px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Skills;

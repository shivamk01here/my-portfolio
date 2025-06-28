import React from 'react';

const Skills = () => {
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend"
    },
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
      name: "Laravel",
      icon: "/lara.png",
      category: "Backend"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database"
    },
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
    },
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
  ];

  return (
    <section id="skills" className="py-20 bg-dark-400 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-500/5 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-400/5 rounded-full blur-xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Technologies I master to build scalable applications
          </p>
        </div>

        {/* Main Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={tech.name} 
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="glass p-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary-500/25 cursor-pointer">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-full h-full object-contain filter group-hover:drop-shadow-lg"
                      style={{
                        filter: 'brightness(1.2) contrast(1.1)'
                      }}
                    />
                  </div>
                  <span className="text-gray-300 text-sm font-medium text-center group-hover:text-primary-400 transition-colors duration-300">
                    {tech.name}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {tech.category}
                  </span>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* Floating Animation Technologies */}
        <div className="relative h-64 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Other Tools & <span className="gradient-text">Technologies</span>
            </h3>
          </div>
          
          <div className="absolute inset-0">
            {['RabbitMQ', 'Kafka', 'Jest', 'Prisma', 'WebSockets', 'GitHub Actions', 'Grafana', 'Jenkins'].map((tech, index) => (
              <div
                key={tech}
                className="absolute bg-dark-200/80 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-primary-500/20 hover:text-primary-400 transition-all duration-300 cursor-pointer animate-float"
                style={{
                  left: `${10 + (index * 11)}%`,
                  top: `${20 + Math.sin(index) * 30}%`,
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: `${4 + index * 0.2}s`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">475+</div>
            <div className="text-gray-400">DSA Problems Solved</div>
            <div className="text-sm text-primary-400 mt-1">LeetCode</div>

          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">5⭐</div>
            <div className="text-gray-400">Python Coder</div>
            <div className="text-sm text-primary-400 mt-1">HackerRank</div>
          </div>
          <div className="glass p-6 rounded-xl">
            <div className="text-3xl font-bold gradient-text mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
            <div className="text-sm text-primary-400 mt-1">Full Stack Development</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
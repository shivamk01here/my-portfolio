import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const mainTechnologies = [
    {
      name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      category: "Programming", description: "Systems Programming"
    },
    {
      name: "Laravel", icon: "/lara.png",
      category: "Backend", description: "PHP Framework"
    },
    {
      name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend", description: "JavaScript Runtime"
    },
    {
      name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend", description: "UI Library"
    },
    {
      name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database", description: "SQL Database"
    }
  ];

  const otherTech = [
    "TypeScript", "Next.js", "MongoDB", "PostgreSQL", "Redis", "AWS", "Docker", "Python", "PHP", "Git", "JavaScript", "Nginx"
  ];

  const getIcon = (name) => {
    const map = {
      "TypeScript": "typescript/typescript-original",
      "Next.js": "nextjs/nextjs-original",
      "MongoDB": "mongodb/mongodb-original",
      "PostgreSQL": "postgresql/postgresql-original",
      "Redis": "redis/redis-original",
      "Docker": "docker/docker-original",
      "Python": "python/python-original",
      "Git": "git/git-original",
      "JavaScript": "javascript/javascript-original",
      "PHP": "php/php-original",
      "Nginx": "nginx/nginx-original",
      "AWS": "aw.png", // local image
    };
    return map[name]?.includes('.png') ? `/${map[name]}` : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${map[name]}.svg`;
  };

  return (
    <section id="skills" className="py-14 sm:py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">What I build with</p>
        </motion.div>

        {/* Main Technologies */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {}
          }}
        >
          {mainTechnologies.map((tech, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/30 hover:border-green-400/40 text-center transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={tech.icon} alt={tech.name} className="w-10 h-10 mx-auto mb-2" />
              <h3 className="text-sm font-semibold">{tech.name}</h3>
              <p className="text-xs text-gray-400">{tech.category}</p>
              <p className="text-[10px] text-gray-500">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Technologies */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {}
          }}
        >
          {otherTech.map((tech, idx) => (
            <motion.div
              key={tech}
              className="bg-gray-800/40 p-3 rounded-lg border border-gray-700/20 hover:border-green-400/30 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={getIcon(tech)} alt={tech} className="w-8 h-8 mx-auto mb-1" />
              <p className="text-xs text-gray-300">{tech}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

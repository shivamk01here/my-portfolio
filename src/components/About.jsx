import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Trophy } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={20} className="text-green-400" />,
      title: "DSA Focused",
      description: "Skilled in C++, problem solving, and algorithmic thinking."
    },
    {
      icon: <Cpu size={20} className="text-green-400" />,
      title: "Full-Stack Dev",
      description: "Building scalable apps with React, Node.js, and AWS."
    },
    {
      icon: <Trophy size={20} className="text-green-400" />,
      title: "Clean Code",
      description: "Performance-driven, readable, maintainable codebase."
    }
  ];

  const stats = [
    { label: "Problems Solved", value: "500+" },
    { label: "Projects", value: "6+" },
    { label: "Experience", value: "2+ yrs" }
  ];

  return (
    <section id="about" className="py-16 bg-gray-900 text-white relative">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About <span className="text-green-400">Me</span>
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-xl mx-auto text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I'm a full-stack developer with a strong base in DSA, system design, and cloud-native app development. I enjoy solving real problems and turning ideas into scalable products.
        </motion.p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            className="bg-gray-800/50 border border-green-400/10 p-4 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-400/10 rounded-md">
                {item.icon}
              </div>
              <h4 className="text-md font-semibold">{item.title}</h4>
            </div>
            <p className="text-sm text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-gray-800/40 p-4 rounded-lg border border-green-400/10"
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-green-400 text-xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;

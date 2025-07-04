import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const ProCoder = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const section = document.getElementById('pro-coder');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const profiles = [
    {
      name: 'LeetCode',
      icon: 'leeti.png',
      label: '475+ problems',
      url: 'https://leetcode.com/u/shivam01here/'
    },
    {
      name: 'Codeforces',
      icon: 'https://sta.codeforces.com/s/0/favicon-96x96.png',
      label: 'Active participant',
      url: 'https://codeforces.com/profile/shivam01here'
    },
    {
      name: 'HackerRank',
      icon: 'https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png',
      label: 'Python 5⭐',
      url: 'https://www.hackerrank.com/profile/shivam01here'
    },
    {
      name: 'GitHub',
      icon: 'giti.png',
      label: 'Open Source',
      url: 'https://github.com/shivam01here'
    }
  ];

  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section id="pro-coder" className="py-14 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">Coding Profiles</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Active in DSA & Competitive Programming
          </p>
        </motion.div>

        {/* Profile Cards */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {profiles.map((profile, i) => (
            <motion.a
              key={i}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-700/40 bg-gray-800/40 hover:border-green-400/40 transition"
              variants={fade}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={profile.icon} 
                alt={profile.name} 
                className="w-8 h-8 sm:w-10 sm:h-10 mb-2 object-contain" 
              />
              <span className="text-sm font-medium">{profile.name}</span>
              <span className="text-xs text-gray-400">{profile.label}</span>
              <ExternalLink className="w-3.5 h-3.5 text-green-400 mt-1" />
            </motion.a>
          ))}
        </motion.div>

        {/* Simple Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mt-10 text-center"
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {[
            { num: '475+', desc: 'Solved', sub: 'LeetCode' },
            { num: '100+', desc: 'Day Streak', sub: 'Consistency' },
            { num: '5⭐', desc: 'Python', sub: 'HackerRank' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/40 border border-gray-700/30 py-4 px-2 rounded-lg"
              variants={fade}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-green-400 text-lg font-bold">{stat.num}</div>
              <div className="text-sm">{stat.desc}</div>
              <div className="text-xs text-gray-400">{stat.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProCoder;

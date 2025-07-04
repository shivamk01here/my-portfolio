import React from 'react';
import { MapPin, ExternalLink, Code, Calendar, Terminal } from 'lucide-react';
import {
  SiNodedotjs, SiTypescript, SiReact, SiMysql, SiRedis, SiRabbitmq,
  SiDocker, SiLaravel, SiMongodb, SiNextdotjs, SiApachekafka
} from 'react-icons/si';

const techIcons = {
  "Node.js": <SiNodedotjs className="text-green-400" size={16} />,
  "TypeScript": <SiTypescript className="text-blue-400" size={16} />,
  "React.js": <SiReact className="text-cyan-400" size={16} />,
  "Next.js": <SiNextdotjs className="text-white" size={16} />,
  "MySQL": <SiMysql className="text-yellow-300" size={16} />,
  "MongoDB": <SiMongodb className="text-green-500" size={16} />,
  "Redis": <SiRedis className="text-red-400" size={16} />,
  "Kafka": <SiApachekafka className="text-purple-400" size={16} />,
  "RabbitMQ": <SiRabbitmq className="text-orange-400" size={16} />,
  "Docker": <SiDocker className="text-blue-500" size={16} />,
  "Laravel": <SiLaravel className="text-red-500" size={16} />,
  "AWS": <Terminal className="text-yellow-400" size={16} />, // fallback icon
};

const Experience = () => {
  const experiences = [
    {
      company: "Classcard Inc",
      companyUrl: "https://classcard.com",
      role: "Full Stack Developer",
      period: "Feb 2025 – Jun 2025",
      location: "Remote, Dubai",
      description: "Built APIs, drag-drop scheduler, booking + payments & microservices with Redis + RabbitMQ.",
      technologies: ["Node.js", "TypeScript", "React.js", "MySQL", "Redis", "RabbitMQ", "Docker", "Laravel", "AWS"],
      achievements: [
        "Drag-and-drop scheduler",
        "Payment flow integration",
        "Microservice backend APIs"
      ]
    },
    {
      company: "Ixambee",
      companyUrl: "https://ixambee.com",
      role: "Software Developer",
      period: "Aug 2023 – Jan 2025",
      location: "Noida, UP",
      description: "Designed backend modules, internal task tools, and built a full-featured job portal with Next.js.",
      technologies: ["Node.js", "TypeScript", "Next.js", "MongoDB", "Kafka", "Redis", "Docker", "Laravel"],
      achievements: [
        "Scalable backend modules",
        "Internal task platform",
        "Job portal UI + API"
      ]
    }
  ];

  return (
    <section id="experience" className="py-14 bg-gray-900 relative text-white overflow-hidden">
      <div className="absolute top-5 left-6 text-green-500/40 text-xs font-mono">&lt;experience&gt;</div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Work <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">Journey of contributions & growth</p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="rounded-xl bg-gray-800/50 border border-gray-700/40 p-5 hover:border-green-400/30 transition">
              {/* Top Header */}
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-x-2 text-sm">
                    <h3 className="text-lg font-semibold text-green-400">{exp.role}</h3>
                    <span className="text-gray-500 hidden sm:inline">@</span>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-green-300 hover:underline"
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} /> {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">{exp.description}</p>

              {/* Highlights & Tech Stack */}
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-1 flex items-center gap-1">
                    <Code size={14} className="text-green-400" />
                    Highlights
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
                    {exp.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-medium text-white mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap items-center gap-3">
                    {exp.technologies.map((tech) => (
                      <div key={tech} className="flex items-center gap-1 text-xs text-gray-300">
                        {techIcons[tech] || <Terminal size={12} />} {tech}
                      </div>
                    ))}
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

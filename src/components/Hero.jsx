import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="text-primary-400 text-lg font-medium">Hi there 👋 I'M</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Shivam
              <br />
              <span className="gradient-text">Kumar</span>
            </h1>
            
            <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start">
              <span className="text-xl lg:text-2xl text-gray-300">FULL STACK DEVELOPER</span>
              <span className="text-2xl">🚀</span>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto lg:mx-0">
              I ship things fast and I am a full stack developer with expertise in modern web technologies.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <button className="bg-primary-500 hover:bg-primary-600 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25 animate-glow">
                Hire Me
              </button>
              <button className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-200">
                Download CV
              </button>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/shivamk01here" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/shivam01here" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shivam01here@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl shadow-primary-500/20">
                <img 
                  src="/shiv.jpeg"
                  alt="Shivam Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-accent-500/20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
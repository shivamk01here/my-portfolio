// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProCoder from './components/codingProfile';
import './index.css';

function App() {
  // 🔥 Inject Umami Tracking
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('defer', '');
    script.setAttribute('src', 'https://cloud.umami.is/script.js');
    script.setAttribute('data-website-id', '30994586-6a85-4c1c-9f95-5aa15ec021ea');
    document.head.appendChild(script);
  }, []);

  return (
    <div className="bg-dark-400 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProCoder />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

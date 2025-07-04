// src/App.jsx
import React from 'react';
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
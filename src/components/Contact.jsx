import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400">Email:</span>
                    <p className="text-primary-400">shivam01here@gmail.com</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Phone:</span>
                    <p className="text-white">+91 9870829315</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <p className="text-white">Delhi, India</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Message</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none"
                  />
                  <textarea 
                    placeholder="Your Message"
                    rows="4"
                    className="w-full bg-dark-200 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-primary-400 focus:outline-none resize-none"
                  ></textarea>
                  <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/25">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="border-t border-gray-600 pt-8 text-center">
              <p className="text-gray-400 mb-4">Let's connect on social media</p>
              <div className="flex justify-center gap-6">
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
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-gray-600">
          <p className="text-gray-400">
            © 2025 Shivam Kumar. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
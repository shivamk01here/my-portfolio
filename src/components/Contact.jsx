import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            Let's discuss your next project or opportunity
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="bg-gray-800/30 backdrop-blur-md p-6 sm:p-8 rounded-xl border border-gray-700/50">
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <span className="text-gray-400">Email:</span> <br />
                  <a href="mailto:shivam01here@gmail.com" className="text-green-400 hover:underline">shivam01here@gmail.com</a>
                </li>
                <li>
                  <span className="text-gray-400">Phone:</span> <br />
                  <span>+91 9870829315</span>
                </li>
                <li>
                  <span className="text-gray-400">Location:</span> <br />
                  <span>Delhi, India</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Message</h3>
              <form className="space-y-3 text-sm">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-800/50 border border-gray-700 px-3 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-800/50 border border-gray-700 px-3 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-400"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full bg-gray-800/50 border border-gray-700 px-3 py-2 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-green-400 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center">
  <p className="text-sm text-gray-400 mb-4">Connect with me</p>
  <div className="flex justify-center gap-6 mb-4 text-gray-400">
    <a
      href="https://github.com/shivamk01here"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400 transition"
    >
      <Github size={22} />
    </a>
    <a
      href="https://linkedin.com/in/shivam01here"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-green-400 transition"
    >
      <Linkedin size={22} />
    </a>
    <a
      href="mailto:shivam01here@gmail.com"
      className="hover:text-green-400 transition"
    >
      <Mail size={22} />
    </a>
  </div>
  <p className="text-xs text-gray-500">
    © 2025 Shivam Kumar — Built with <span className="text-green-400">React</span> & <span className="text-blue-400">Tailwind CSS</span>
  </p>
</div>

      </div>
    </section>
  );
};

export default Contact;

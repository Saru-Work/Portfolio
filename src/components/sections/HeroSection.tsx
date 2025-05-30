import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = "building fast, beautiful, and intelligent experiences.";
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-gray-900"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ duration: 1, delay: i * 0.005 }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto md:mx-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base uppercase tracking-wider mb-4"
          >
            Web Developer & AI Enthusiast
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-7xl font-bold leading-tight mb-4"
          >
            Hi, I'm <span className="text-white">Your Name</span>
          </motion.h1>

          <div className="h-20 md:h-24">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl md:text-3xl text-gray-300 mb-8"
            >
              A developer {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              >
                |
              </motion.span>
            </motion.p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
            className="bg-white text-black px-8 py-3 rounded-full font-medium mt-8 hover:bg-gray-200 transition-colors"
          >
            View My Work
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-white" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
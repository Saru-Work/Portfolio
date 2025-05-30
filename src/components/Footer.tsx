import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold tracking-tighter">
              PORTFOLIO<span className="text-gray-400">.</span>
            </h3>
            <p className="text-gray-400 mt-2 text-sm">
              Web Developer & AI Enthusiast
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
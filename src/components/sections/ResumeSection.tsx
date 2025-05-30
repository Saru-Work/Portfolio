import React from 'react';
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const ResumeSection = () => {
  const resumeUrl = '#'; // Replace with actual resume URL

  return (
    <section id="resume" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black p-10 rounded-lg border border-gray-800 mb-10"
          >
            <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l border-gray-800">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-1.5"></div>
                <h4 className="text-xl font-bold">Senior Web Developer</h4>
                <p className="text-gray-400">Innovative Tech Co. | 2021 - Present</p>
                <p className="mt-2 text-gray-300">
                  Led development of multiple web applications, focusing on React, Next.js, and emerging AI technologies.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-gray-800">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-1.5"></div>
                <h4 className="text-xl font-bold">Frontend Developer</h4>
                <p className="text-gray-400">Digital Solutions Inc. | 2018 - 2021</p>
                <p className="mt-2 text-gray-300">
                  Developed responsive interfaces and implemented UX improvements across client projects.
                </p>
              </div>
              
              <div className="relative pl-8 border-l border-gray-800">
                <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 top-1.5"></div>
                <h4 className="text-xl font-bold">B.S. Computer Science</h4>
                <p className="text-gray-400">Tech University | 2014 - 2018</p>
                <p className="mt-2 text-gray-300">
                  Specialized in software engineering and artificial intelligence.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.a
            href={resumeUrl}
            download="YourName_Resume.pdf"
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FileDown className="mr-2" size={20} />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
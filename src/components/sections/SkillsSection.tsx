import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
}

const skills: Skill[] = [
  { name: 'React', icon: '⚛️', category: 'frontend' },
  { name: 'TypeScript', icon: '🔷', category: 'frontend' },
  { name: 'Next.js', icon: '▲', category: 'frontend' },
  { name: 'TailwindCSS', icon: '🎨', category: 'frontend' },
  { name: 'Node.js', icon: '🟢', category: 'backend' },
  { name: 'Express', icon: '🚂', category: 'backend' },
  { name: 'MongoDB', icon: '🍃', category: 'backend' },
  { name: 'PostgreSQL', icon: '🐘', category: 'backend' },
  { name: 'Git', icon: '📊', category: 'tools' },
  { name: 'Docker', icon: '🐳', category: 'tools' },
  { name: 'AWS', icon: '☁️', category: 'tools' },
  { name: 'Python', icon: '🐍', category: 'ai' },
  { name: 'TensorFlow', icon: '🧠', category: 'ai' },
  { name: 'OpenAI API', icon: '🤖', category: 'ai' },
];

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-925 to-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-300 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of technologies and tools I work with to build modern, 
            responsive, and intelligent web applications.
          </p>
        </motion.div>

        <div ref={ref} className="grid gap-8">
          {['frontend', 'backend', 'tools', 'ai'].map((category) => (
            <div key={category} className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6 capitalize"
              >
                {category === 'ai' ? 'AI & Machine Learning' : `${category} Development`}
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
              >
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-800 bg-gradient-to-br from-gray-910 to-gray-925 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50"
                    >
                      <span className="text-3xl mb-3">{skill.icon}</span>
                      <h4 className="text-lg font-medium">{skill.name}</h4>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
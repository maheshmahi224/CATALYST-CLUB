import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [{
    title: 'Workshops & Training',
    description: 'AI, Web Development, Blockchain, IoT and other emerging technologies.',
    icon: '💡'
  }, {
    title: 'Real-World Projects',
    description: 'Work on practical projects with real-world applications and impact.',
    icon: '🚀'
  }, {
    title: '75+ AI Tools Access',
    description: 'Get access to premium AI tools to enhance your learning and projects.',
    icon: '🤖'
  }, {
    title: 'Skill Development',
    description: 'Communication, Leadership, Problem-solving beyond technical skills.',
    icon: '🌟'
  }];
  
  return <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient glow-text animate-pulse">Catalyst Club</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 animate-fade-in">
            Welcome to the Catalyst Club at Scient Institute of Technology, where curiosity meets innovation!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600 dark:text-gray-300 animate-fade-in">
              Catalyst Club is more than just a platform—it's a movement designed to inspire, educate, and empower students to explore the realms of technology, creativity, and self-development beyond the boundaries of traditional academics.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-bold text-catalyst-blue dark:text-catalyst-cyan mb-2 glow-text">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To bridge the gap between classroom learning and real-world applications, fostering innovation, collaboration, and problem-solving skills.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: "0.4s"}}>
              <h3 className="text-xl font-bold text-catalyst-blue dark:text-catalyst-cyan mb-2 glow-text">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To cultivate future-ready individuals through innovation, collaboration, and lifelong learning who can thrive in a rapidly evolving technological landscape.
              </p>
            </div>
            
            <div className="pt-4 animate-fade-in" style={{animationDelay: "0.6s"}}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-catalyst-teal/10 flex items-center justify-center animate-pulse">
                  <span className="text-catalyst-teal dark:text-catalyst-cyan font-bold text-xl animate-wave">SNTI</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">A GROUP OF PASSIONATE SUDENTS</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">BE A PART OF OUR COMMUNITY </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md card-hover animate-fade-in"
                style={{animationDelay: `${0.2 * index}s`}}
              >
                <div className="w-12 h-12 bg-catalyst-teal/10 dark:bg-catalyst-teal/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>;
};

export default About;

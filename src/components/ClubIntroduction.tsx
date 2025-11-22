import React, { useState, useEffect } from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const ClubIntroduction = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section className="py-20 bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mahesh & <span className="text-gradient animate-pulse-glow">Team</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center mb-12"
            initial={{ opacity: 0, scale: isMobile ? 1 : 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : 0.2 }}
          >
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-catalyst-cyan to-catalyst-teal p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/lovable-uploads/5f07e5d5-f12f-48f9-99cb-18d7f562cad4.png" 
                    alt="Mahesh" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-100 mb-4 glow-text animate-fade-in">Mahesh - Lead Coordinator</h3>
              <p className="text-gray-300 mb-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
                As students of Scient Institute of Technology, we are driven by a mission to empower peers by bridging academics with real-world innovation, skills, and growth.
              </p>
              <div className="flex flex-wrap gap-2 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <span className="text-xs bg-catalyst-teal/10 text-catalyst-teal dark:bg-catalyst-teal/20 dark:text-catalyst-light px-3 py-1 rounded-full">Leadership</span>
                <span className="text-xs bg-catalyst-cyan/10 text-catalyst-cyan dark:bg-catalyst-cyan/20 dark:text-catalyst-light px-3 py-1 rounded-full">Innovation</span>
                <span className="text-xs bg-catalyst-blue/10 text-catalyst-blue dark:bg-catalyst-blue/20 dark:text-catalyst-light px-3 py-1 rounded-full">Power BI</span>
                <span className="text-xs bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300 px-3 py-1 rounded-full">AI Development</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, staggerChildren: 0.2 }}
          >
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow animate-fade-in hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <Users className="h-8 w-8 text-catalyst-teal mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-100">Collaborative Team</h4>
              <p className="text-gray-300 text-sm">
                Our dedicated team brings diverse skills and perspectives to every project and initiative.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow animate-fade-in hover:-translate-y-1 hover:shadow-lg transition-all duration-300" style={{animationDelay: "0.2s"}}>
              <Lightbulb className="h-8 w-8 text-catalyst-teal mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-100">Innovative Thinking</h4>
              <p className="text-gray-300 text-sm">
                We foster a culture of creative problem-solving and out-of-the-box approaches.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow animate-fade-in hover:-translate-y-1 hover:shadow-lg transition-all duration-300" style={{animationDelay: "0.4s"}}>
              <Target className="h-8 w-8 text-catalyst-teal mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-100">Goal-Oriented</h4>
              <p className="text-gray-300 text-sm">
                Our initiatives are designed with clear objectives and measurable outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClubIntroduction;

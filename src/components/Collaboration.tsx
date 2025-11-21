import React from 'react';
import { motion } from 'framer-motion';

const Collaboration = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-catalyst-blue">Catalyst Club & Scient Institute:</span> <span className="text-gradient">Innovating Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">A Powerful Collaboration</h3>
            <p className="text-gray-300 mb-6">
              Scient Institute of Technology proudly collaborates with Catalyst Club, a pioneering initiative to equip students with innovation, creativity, and essential skills to thrive in a technological world.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-catalyst-teal flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-100">Institutional Support</h4>
                  <p className="text-sm text-gray-300">Full backing from the college administration for club activities and initiatives.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-catalyst-cyan flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-100">Resource Sharing</h4>
                  <p className="text-sm text-gray-300">Access to college infrastructure, labs, and technical resources.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-catalyst-blue flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-100">Academic Integration</h4>
                  <p className="text-sm text-gray-300">Club activities complement the academic curriculum for holistic education.</p>
                </div>
            </div>
          </div>
        </div>
          
        <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/f748a37e-7eff-4e74-b9cd-a598ffb771a9.png" 
                alt="Scient Institute and Catalyst Club Collaboration" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="bg-gray-800 p-4">
                <h4 className="font-medium text-gray-100">SCIENT INSTITUTE OF TECHNOLOGY X CATALYST CLUB</h4>
                <p className="text-sm text-gray-400">Innovation through collaboration</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Faculty Leadership Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Leadership Excellence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Principal Card */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg">
                    <img 
                      src="/lovable-uploads/ee3fa4d2-b3db-4aa4-b7f6-5ab9e7568d9d.png" 
                      alt="Dr. G. Anil Kumar - Principal" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-catalyst-cyan glow-text mb-2">Dr. G. ANIL KUMAR</h4>
                  <p className="text-catalyst-teal font-semibold mb-3">CHAIRPERSON</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dr. G. Anil Kumar is a distinguished academician who graduated from Osmania University. 
                    He holds an excellent academic record and earned his Master's in Software Engineering 
                    from Jawaharlal Nehru Technological University (JNTU), Hyderabad, Telangana.
                  </p>
                </div>
              </div>
            </div>

            {/* HOD Card */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg">
                    <img 
                      src="/lovable-uploads/0a17c86e-3e14-4adb-8482-afd26803d366.png" 
                      alt="Dr. A. Balaram - HOD CSE" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-catalyst-cyan glow-text mb-2">Dr. A. BALARAM</h4>
                  <p className="text-catalyst-teal font-semibold mb-3">VICE CHAIRPERSON</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dr. A. Balaram, currently working as a Professor in the Dept. of Computer Science and Engineering 
                    at SCIENT Institute of Technology, Hyderabad, Telangana. He obtained his B.Tech (CSE) from JNTUH University, 
                    M.Tech from JNTUA University Anantapur and Ph.D. from JNTUA University Anantapur, India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* College Campus Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-6">Our Campus</h3>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <img 
              src="/lovable-uploads/46998a88-48e9-4c86-bc19-aa1c4f29cb9a.png" 
              alt="Scient Institute of Technology Campus" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
          <p className="mt-4 text-gray-300">The home of innovation and excellence - Scient Institute of Technology</p>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;


import React from 'react';

const Collaboration = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-catalyst-blue">Scient Institute of Technology</span> x <span className="text-gradient">Catalyst Club</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">A Powerful Collaboration</h3>
            <p className="text-gray-600 mb-6">
              Scient Institute of Technology proudly collaborates with Catalyst Club, a pioneering initiative to equip students with innovation, creativity, and essential skills to thrive in a technological world.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-catalyst-teal flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Institutional Support</h4>
                  <p className="text-sm text-gray-600">Full backing from the college administration for club activities and initiatives.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-catalyst-cyan flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Resource Sharing</h4>
                  <p className="text-sm text-gray-600">Access to college infrastructure, labs, and technical resources.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-catalyst-blue flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-800">Academic Integration</h4>
                  <p className="text-sm text-gray-600">Club activities complement the academic curriculum for holistic education.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src="/lovable-uploads/46998a88-48e9-4c86-bc19-aa1c4f29cb9a.png" 
                alt="Scient Institute of Technology" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="bg-white p-4">
                <h4 className="font-medium text-gray-800">Scient Institute of Technology Campus</h4>
                <p className="text-sm text-gray-500">Our beautiful campus where innovation begins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;


import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';

const ClubIntroduction = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mahesh & <span className="text-gradient">Team</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-catalyst-cyan to-catalyst-teal p-1">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <div className="text-3xl font-bold text-catalyst-blue">M</div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Mahesh - Lead Coordinator</h3>
              <p className="text-gray-600 mb-4">
                As students of Scient Institute of Technology, we are driven by a mission to empower peers by bridging academics with real-world innovation, skills, and growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-catalyst-teal/10 text-catalyst-teal px-3 py-1 rounded-full">Leadership</span>
                <span className="text-xs bg-catalyst-cyan/10 text-catalyst-cyan px-3 py-1 rounded-full">Innovation</span>
                <span className="text-xs bg-catalyst-blue/10 text-catalyst-blue px-3 py-1 rounded-full">Power BI</span>
                <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">AI Development</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Users className="h-8 w-8 text-catalyst-teal mb-4" />
              <h4 className="text-xl font-semibold mb-2">Collaborative Team</h4>
              <p className="text-gray-600 text-sm">
                Our dedicated team brings diverse skills and perspectives to every project and initiative.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Lightbulb className="h-8 w-8 text-catalyst-teal mb-4" />
              <h4 className="text-xl font-semibold mb-2">Innovative Thinking</h4>
              <p className="text-gray-600 text-sm">
                We foster a culture of creative problem-solving and out-of-the-box approaches.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
              <Target className="h-8 w-8 text-catalyst-teal mb-4" />
              <h4 className="text-xl font-semibold mb-2">Goal-Oriented</h4>
              <p className="text-gray-600 text-sm">
                Our initiatives are designed with clear objectives and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubIntroduction;

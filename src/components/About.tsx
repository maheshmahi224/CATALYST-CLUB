
import React from 'react';

const About = () => {
  const features = [
    { 
      title: 'Innovation Hub', 
      description: 'A space where ideas transform into impactful solutions through collaborative efforts.',
      icon: '💡'
    },
    { 
      title: 'Skill Development', 
      description: 'Workshops, training sessions, and hands-on projects to enhance technical skills.',
      icon: '🚀'
    },
    { 
      title: 'Networking', 
      description: 'Connect with industry professionals, alumni, and like-minded peers.',
      icon: '🌐'
    },
    { 
      title: 'Competitions', 
      description: 'Participate in hackathons, coding contests, and technical challenges.',
      icon: '🏆'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-gradient">Catalyst Club</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Catalyst Club is the premier technical club at VIT University, dedicated to fostering innovation and technical excellence among students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h3 className="text-2xl font-bold text-catalyst-blue">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to catalyze innovation by providing a platform for students to explore, learn, and implement cutting-edge technologies while developing leadership and teamwork skills essential for professional growth.
            </p>
            
            <h3 className="text-2xl font-bold text-catalyst-blue">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading technical community that transforms passionate students into skilled professionals and innovation leaders of tomorrow.
            </p>
            
            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-catalyst-teal/10 flex items-center justify-center">
                  <span className="text-catalyst-teal font-bold text-xl animate-wave">10+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Years of Excellence</h4>
                  <p className="text-sm text-gray-500">Serving the community since 2013</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md card-hover"
              >
                <div className="w-12 h-12 bg-catalyst-teal/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

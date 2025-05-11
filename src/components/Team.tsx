
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      position: "President",
      image: "/placeholder.svg",
      bio: "Computer Science major with expertise in AI/ML and leadership experience.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:president@catalystclub.com"
      }
    },
    {
      name: "Priya Patel",
      position: "Vice President",
      image: "/placeholder.svg", 
      bio: "Electronics engineering student passionate about IoT and embedded systems.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:vicepresident@catalystclub.com"
      }
    },
    {
      name: "Arjun Kumar",
      position: "Technical Head",
      image: "/placeholder.svg",
      bio: "Full-stack developer with experience in organizing hackathons and tech events.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:technical@catalystclub.com"
      }
    },
    {
      name: "Ananya Singh",
      position: "Events Coordinator",
      image: "/placeholder.svg",
      bio: "IT student specializing in project management and event organization.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:events@catalystclub.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient glow-text animate-pulse">Team</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 animate-fade-in">
            Meet the passionate individuals behind Catalyst Club who work tirelessly to create opportunities for the tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover animate-fade-in"
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <div className="relative h-60 overflow-hidden group">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-catalyst-blue hover:bg-catalyst-teal hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.social.github} className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-catalyst-blue hover:bg-catalyst-teal hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={member.social.email} className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-catalyst-blue hover:bg-catalyst-teal hover:text-white transition-colors">
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-catalyst-blue dark:text-catalyst-cyan glow-text">{member.name}</h3>
                <p className="text-sm text-catalyst-teal font-medium mb-2">{member.position}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: "0.6s"}}>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Want to be part of our dynamic team?</p>
          <button className="px-6 py-2 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan text-white rounded-md hover:opacity-90 transition-opacity">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;

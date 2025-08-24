
import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Team = () => {
  const maheshTeam = [
    {
      name: "Mahesh",
      position: "Founder & Lead",
      image: "/lovable-uploads/mahesh-photo.png",
      bio: "Passionate tech enthusiast and leader driving innovation at Catalyst Club.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:mahesh@catalystclub.com",
        instagram: "https://www.instagram.com/mahesh____224/"
      }
    }
  ];

  const teamMembers = [
    {
      name: "Bhargavi",
      position: "Event and Program Coordinator",
      image: "/lovable-uploads/dad6bc18-eeeb-4e03-96ad-10b9d4a803ad.png",
      bio: "Organizing impactful events and programs to bring the tech community together.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:bharghavi@catalystclub.com",
        instagram: "https://www.instagram.com/itz_me_bharu18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    },
    {
      name: "G. Tharak Varma",
      position: "Lead Mentor",
      image: "/lovable-uploads/eb912d72-c4e3-4b22-9d50-233ac2cc4686.png", 
      bio: "Guiding and mentoring students to achieve their full potential in technology.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:tharak@catalystclub.com",
        instagram: "https://www.instagram.com/tharak___varma143?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    },
    {
      name: "Sai Teja",
      position: "Programmes and Modules Designer",
      image: "/lovable-uploads/5a89cc97-6bbd-4744-b368-d12889e54556.png",
      bio: "Designing comprehensive learning modules and innovative tech programs.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:saiteja@catalystclub.com",
        instagram: "https://www.instagram.com/nvsaiteja06/"
      }
    },
    {
      name: "Sunny",
      position: "SEO & Social Media Coordinator",
      image: "/lovable-uploads/f094f6fe-1a34-4f0b-8e57-90b993d399e6.png",
      bio: "Boosting online presence and engaging the community through digital platforms.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:sunny@catalystclub.com",
        instagram: "https://www.instagram.com/krupakar.18?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    },
    {
      name: "Bharat",
      position: "Social Media Coordinator",
      image: "/lovable-uploads/d63ce74e-5f05-4f01-911a-d12d10b4a27a.png",
      bio: "Creating engaging content and managing social media presence for the club.",
      social: {
        linkedin: "#",
        github: "#",
        email: "mailto:bharat@catalystclub.com",
        instagram: "https://www.instagram.com/itzbharathh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mahesh & Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR <span className="text-gradient glow-text animate-pulse">TEAM</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 animate-fade-in">
            Meet the passionate individuals behind Catalyst Club who work tirelessly to create opportunities for the tech community.
          </p>
        </div>

        {/* Mahesh Card */}
        <div className="flex justify-center mb-16">
          {maheshTeam.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover animate-fade-in max-w-sm"
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
                    <a href={member.social.instagram} className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-catalyst-blue hover:bg-catalyst-teal hover:text-white transition-colors">
                      <Instagram size={18} />
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

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md card-hover animate-fade-in hover-scale"
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
                    <a href={member.social.instagram} className="w-8 h-8 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-catalyst-blue hover:bg-catalyst-teal hover:text-white transition-colors">
                      <Instagram size={18} />
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

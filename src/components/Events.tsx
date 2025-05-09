
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import FlipCard from './FlipCard';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const events = {
    upcoming: [
      {
        id: 1,
        title: "Web Designing Course by Catalyst Club",
        date: "Coming Soon",
        time: "TBA",
        location: "Scient Institute of Technology",
        description: "Are you ready to create stunning, user-friendly websites that leave a lasting impression? The Catalyst Club at Scient Institute of Technology is excited to offer a comprehensive Web Designing Course that empowers students to build beautiful and functional websites from scratch.",
        image: "/lovable-uploads/dd365a39-347e-454d-beac-ee6f7b89dec9.png",
        highlights: ["Responsive design", "Modern frameworks", "Hands-on practice", "Certificate on completion"]
      },
      {
        id: 2,
        title: "Power BI Beginner Course",
        date: "Coming Soon",
        time: "TBA",
        location: "Tech Lab, Scient Institute",
        description: "Unlock the power of data with the Beginner Power BI Course at the Catalyst Club. Learn to create interactive dashboards, analyze data efficiently, and build professional visual reports with ease. No prior experience required. Join us for a hands-on learning experience and take your data skills to the next level. Exclusively for Catalyst Club members.",
        image: "/lovable-uploads/228e3c65-f5ff-4a2a-9d44-be96a2feae69.png",
        highlights: ["Data transformation techniques", "AI-powered visuals", "Certificate of completion", "Project-based learning"]
      },
      {
        id: 3,
        title: "Exclusive Projects and Workshops",
        date: "Coming Soon",
        time: "TBA",
        location: "Innovation Center",
        description: "At the Catalyst Club, we believe in turning ideas into impactful solutions through hands-on experience and collaborative learning. Our exclusive projects and workshops are designed to empower students to explore cutting-edge technologies, enhance their skills, and innovate beyond the classroom.",
        image: "/lovable-uploads/7642a797-cb2e-41cf-860e-ef7a9067ab14.png",
        highlights: ["Capstone-style group projects", "Guest sessions by tech professionals", "Hands-on toolkits", "Guided learning"]
      }
    ],
    past: []
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming <span className="text-gradient">Events</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our exciting lineup of workshops, courses, and projects designed to enhance your skills and expand your knowledge.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'upcoming'
                  ? 'bg-white shadow-md text-catalyst-blue'
                  : 'text-gray-500 hover:text-catalyst-teal'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === 'past'
                  ? 'bg-white shadow-md text-catalyst-blue'
                  : 'text-gray-500 hover:text-catalyst-teal'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>

        {activeTab === 'upcoming' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.upcoming.map((event) => (
              <div key={event.id}>
                <FlipCard
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  highlights={event.highlights}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-10 text-center">
            <div className="animate-pulse">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
              <div className="h-4 w-36 mx-auto bg-gray-200 rounded mt-4"></div>
              <div className="h-3 w-48 mx-auto bg-gray-200 rounded mt-2"></div>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mt-6">Past Events Coming Soon</h3>
            <p className="text-gray-500 mt-2">
              Check back later for our archive of past events and achievements.
            </p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-catalyst-teal text-catalyst-teal hover:bg-catalyst-teal hover:text-white transition-all"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;

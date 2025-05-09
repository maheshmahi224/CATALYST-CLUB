
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const events = {
    upcoming: [
      {
        id: 1,
        title: "Tech Hackathon 2025",
        date: "April 15-16, 2025",
        time: "9:00 AM - 6:00 PM",
        location: "Main Auditorium, VIT",
        description: "A 36-hour coding competition to build innovative solutions for real-world problems.",
        image: "/placeholder.svg"
      },
      {
        id: 2,
        title: "Web Development Workshop",
        date: "May 3, 2025",
        time: "2:00 PM - 5:00 PM",
        location: "Tech Lab 2, CS Building",
        description: "Learn modern web development techniques with React and Node.js.",
        image: "/placeholder.svg"
      },
      {
        id: 3,
        title: "AI/ML Bootcamp",
        date: "May 10-12, 2025",
        time: "10:00 AM - 4:00 PM",
        location: "Innovation Center",
        description: "Comprehensive bootcamp covering machine learning fundamentals and practical applications.",
        image: "/placeholder.svg"
      }
    ],
    past: [
      {
        id: 4,
        title: "Code Fest 2024",
        date: "November 20, 2024",
        time: "10:00 AM - 8:00 PM",
        location: "Main Auditorium, VIT",
        description: "Annual coding competition with challenges in algorithms, data structures and problem solving.",
        image: "/placeholder.svg"
      },
      {
        id: 5,
        title: "Tech Talk: Blockchain Revolution",
        date: "October 5, 2024",
        time: "3:00 PM - 5:00 PM",
        location: "Seminar Hall 3",
        description: "Guest lecture by industry experts on blockchain technology and its applications.",
        image: "/placeholder.svg"
      },
      {
        id: 6,
        title: "IoT Workshop Series",
        date: "September 15-18, 2024",
        time: "9:00 AM - 1:00 PM",
        location: "Electronics Lab",
        description: "Hands-on workshop series covering IoT fundamentals, sensors, and practical projects.",
        image: "/placeholder.svg"
      }
    ]
  };

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Events</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our exciting lineup of workshops, hackathons, and tech talks designed to enhance your skills and expand your network.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events[activeTab === 'upcoming' ? 'upcoming' : 'past'].map((event) => (
            <div key={event.id} className="event-card bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-catalyst-blue">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-catalyst-teal" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-catalyst-teal" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-catalyst-teal" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                
                {activeTab === 'upcoming' ? (
                  <Button 
                    className="w-full bg-catalyst-teal hover:bg-catalyst-blue transition-colors"
                  >
                    Register Now
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full border-catalyst-teal text-catalyst-teal hover:bg-catalyst-teal hover:text-white transition-all"
                  >
                    View Details
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
        
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

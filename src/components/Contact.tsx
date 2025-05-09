
import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Talk To <span className="text-gradient">Us</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or want to join the Catalyst Club? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-catalyst-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-catalyst-teal" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">7386775532</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-catalyst-cyan/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-catalyst-cyan" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-600 break-all">catalystclubsnti28@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-catalyst-blue/10 rounded-full flex items-center justify-center mb-4">
                    <Instagram className="h-6 w-6 text-catalyst-blue" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Instagram</h3>
                  <Button 
                    size="sm"
                    variant="outline" 
                    className="border-catalyst-teal text-catalyst-teal hover:bg-catalyst-teal hover:text-white"
                  >
                    Follow @CatalystClub
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-catalyst-teal/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-catalyst-teal" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-600">SCIENT INSTITUTE OF TECHNOLOGY,<br />KHANAPUR, IBRAHIMPATNAM</p>
                </CardContent>
              </Card>
            </div>
            
            <form className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Send us a message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-catalyst-teal focus:border-catalyst-teal"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-catalyst-teal focus:border-catalyst-teal"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-catalyst-teal focus:border-catalyst-teal"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-catalyst-teal focus:border-catalyst-teal"
                  ></textarea>
                </div>
                <Button className="w-full bg-catalyst-teal hover:bg-catalyst-blue transition-colors">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div className="order-1 lg:order-2 h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3812.0999691306186!2d78.70436127584711!3d17.181593183657064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba659868a32e5%3A0x17f1c0872ea39741!2sScient%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1715215791479!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Scient Institute of Technology Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

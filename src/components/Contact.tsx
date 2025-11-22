import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Talk To <span className="text-gradient">Us</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300">
            Have questions or want to join the Catalyst Club? We'd love to hear from you!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: isMobile ? 0.3 : 0.6, delay: isMobile ? 0 : 0.2 }}
        >
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-catalyst-teal/10 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-8 w-8 text-catalyst-teal" />
                  </div>
                  <h3 className="font-bold text-xl text-catalyst-cyan glow-text mb-2">Phone</h3>
                  <p className="text-gray-300 text-lg">7386775532</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-catalyst-cyan/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-8 w-8 text-catalyst-cyan" />
                  </div>
                  <h3 className="font-bold text-xl text-catalyst-cyan glow-text mb-2">Email</h3>
                  <p className="text-gray-300 break-all text-lg">catalystclubsnti28@gmail.com</p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-catalyst-blue/10 rounded-full flex items-center justify-center mb-4">
                    <Instagram className="h-8 w-8 text-catalyst-blue" />
                  </div>
                  <h3 className="font-bold text-xl text-catalyst-cyan glow-text mb-2">Instagram</h3>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-catalyst-teal text-catalyst-teal hover:bg-catalyst-teal hover:text-white mt-2"
                    onClick={() => window.open('https://www.instagram.com/catalystclub_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                  >
                    Follow @CatalystClub
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-catalyst-teal/10 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-catalyst-teal" />
                  </div>
                  <h3 className="font-bold text-xl text-catalyst-cyan glow-text mb-2">Address</h3>
                  <p className="text-gray-300 text-lg">SCIENT INSTITUTE OF TECHNOLOGY,<br />KHANAPUR, IBRAHIMPATNAM</p>
                </CardContent>
              </Card>
            </div>
            
            <form className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-catalyst-cyan glow-text mb-6">Send us a message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-catalyst-teal focus:border-catalyst-teal text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-catalyst-teal focus:border-catalyst-teal text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-catalyst-teal focus:border-catalyst-teal text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-catalyst-teal focus:border-catalyst-teal text-white placeholder-gray-400"
                  ></textarea>
                </div>
                <Button className="w-full py-3 bg-catalyst-teal hover:bg-catalyst-blue transition-colors text-lg">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!', {
      description: 'We will get back to you soon.',
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-catalyst-teal" />,
      title: "Email Us",
      details: "contact@catalystclub.com",
      link: "mailto:contact@catalystclub.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-catalyst-teal" />,
      title: "Call Us",
      details: "+91 1234 567 890",
      link: "tel:+911234567890"
    },
    {
      icon: <MapPin className="h-5 w-5 text-catalyst-teal" />,
      title: "Visit Us",
      details: "VIT University, Vellore, Tamil Nadu, India",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or want to collaborate? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-6 text-catalyst-blue">Send us a message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-catalyst-teal to-catalyst-cyan hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold mb-6 text-catalyst-blue">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                      <a 
                        href={item.link} 
                        className="text-sm text-gray-600 hover:text-catalyst-teal transition-colors"
                      >
                        {item.details}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-catalyst-blue">Follow Us</h3>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-catalyst-teal/10 rounded-full flex items-center justify-center hover:bg-catalyst-teal hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-catalyst-teal"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-catalyst-teal/10 rounded-full flex items-center justify-center hover:bg-catalyst-teal hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-catalyst-teal"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-catalyst-teal/10 rounded-full flex items-center justify-center hover:bg-catalyst-teal hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-catalyst-teal"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-catalyst-teal/10 rounded-full flex items-center justify-center hover:bg-catalyst-teal hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-catalyst-teal"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-catalyst-teal/10 rounded-full flex items-center justify-center hover:bg-catalyst-teal hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-catalyst-teal"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

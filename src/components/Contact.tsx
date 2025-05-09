
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

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
      icon: <Phone className="h-6 w-6 text-white" />,
      title: "Call Us",
      details: "+91 7386775532",
      link: "tel:+917386775532"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Email Us",
      details: "catalystclubsnti28@gmail.com",
      link: "mailto:catalystclubsnti28@gmail.com"
    },
    {
      icon: <Instagram className="h-6 w-6 text-white" />,
      title: "Follow Us",
      details: "@CatalystClub",
      link: "https://instagram.com/catalystclub"
    },
    {
      icon: <MapPin className="h-6 w-6 text-white" />,
      title: "Visit Us",
      details: "Scient Institute of Technology, Khanapur, Ibrahimpatnam",
      link: "https://maps.google.com/?q=Scient+Institute+of+Technology+Khanapur+Ibrahimpatnam"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Talk To <span className="text-gradient">Us</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Form Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white rounded-xl shadow-xl p-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6 text-catalyst-blue">Send us a message</motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full shadow-sm"
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
                    className="w-full shadow-sm"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full shadow-sm"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  required
                  className="w-full shadow-sm"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-catalyst-teal to-catalyst-cyan hover:opacity-90 transition-opacity px-8 py-3 text-base font-medium"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <motion.a
                  href={item.link}
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-gradient-to-br from-catalyst-blue to-catalyst-teal rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/90 font-medium">{item.details}</p>
                </motion.a>
              ))}
            </div>
            
            {/* Map */}
            <motion.div 
              className="flex-1 rounded-xl overflow-hidden shadow-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.694038478865!2d78.59641657495277!3d17.245085283824942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c7ec139a01f%3A0xd5d140bbd64548a2!2sScient%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1683650001707!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '300px' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Scient Institute of Technology Location"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Partnership Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-xl shadow-xl p-8"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Catalyst Club & Scient Institute: <span className="text-gradient">Innovating Together</span></h3>
            <p className="max-w-3xl mx-auto text-gray-600">
              A partnership driving excellence in education and innovation, creating opportunities for students to excel beyond academics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-xl font-semibold mb-4 text-catalyst-blue">Joint Initiatives</h4>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-catalyst-teal to-catalyst-cyan flex items-center justify-center text-white">
                    1
                  </div>
                  <div>
                    <h5 className="font-medium">Workshops & Training</h5>
                    <p className="text-gray-600">Regular workshops on cutting-edge technologies and skill development.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-catalyst-teal to-catalyst-cyan flex items-center justify-center text-white">
                    2
                  </div>
                  <div>
                    <h5 className="font-medium">Industry Connections</h5>
                    <p className="text-gray-600">Building bridges between students and industry professionals.</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-catalyst-teal to-catalyst-cyan flex items-center justify-center text-white">
                    3
                  </div>
                  <div>
                    <h5 className="font-medium">Research & Development</h5>
                    <p className="text-gray-600">Collaborative projects that solve real-world problems.</p>
                  </div>
                </motion.li>
              </ul>
              
              <Button className="mt-6 bg-gradient-to-r from-catalyst-blue to-catalyst-teal hover:opacity-90 transition-opacity">
                Get Involved
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-catalyst-blue to-catalyst-teal rounded-full opacity-20 animate-pulse delay-700"></div>
                <img 
                  src="/lovable-uploads/dd365a39-347e-454d-beac-ee6f7b89dec9.png" 
                  alt="Scient Institute of Technology and Catalyst Club Collaboration" 
                  className="relative z-10 rounded-lg shadow-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

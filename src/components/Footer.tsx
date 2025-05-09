
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-catalyst-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              CATALYST<span className="text-catalyst-teal">CLUB</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Transforming ideas into reality through technology and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path></svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-catalyst-teal transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-catalyst-teal transition-colors">About Us</a>
              </li>
              <li>
                <a href="#events" className="text-gray-300 hover:text-catalyst-teal transition-colors">Events</a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-catalyst-teal transition-colors">Our Team</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-catalyst-teal transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">Projects</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">Workshops</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-catalyst-teal transition-colors">FAQs</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive updates on events and opportunities.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 rounded-l text-gray-900 w-full focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-catalyst-teal px-4 rounded-r text-white font-medium hover:bg-catalyst-cyan transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Catalyst Club. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-catalyst-teal transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-catalyst-teal transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-catalyst-teal transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center">
              <img 
                src="/lovable-uploads/e2f7c36a-f301-4db2-a896-4e0433b137a4.png"
                alt="Catalyst Club Logo"
                className="h-10 w-auto mr-2"
              />
              <span className="text-xl font-bold text-catalyst-blue dark:text-white">
                CATALYST<span className="text-catalyst-teal">CLUB</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-catalyst-teal dark:hover:text-catalyst-teal transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <Toggle 
                pressed={theme === 'dark'} 
                onPressedChange={toggleTheme}
                className="mr-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </Toggle>
              <Button 
                className="bg-gradient-to-r from-catalyst-teal to-catalyst-cyan hover:opacity-90 transition-opacity"
              >
                Join Us
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Toggle 
              pressed={theme === 'dark'} 
              onPressedChange={toggleTheme}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </Toggle>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-catalyst-teal focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 dark:text-gray-200 hover:text-catalyst-teal hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="w-full mt-2 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan hover:opacity-90 transition-opacity"
          >
            Join Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-20 z-0"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-catalyst-cyan/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-catalyst-teal/20 rounded-full blur-3xl"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/3 w-6 h-6 bg-catalyst-cyan rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-catalyst-teal rounded-full animate-float"></div>
      
      {/* Animated tech graphic */}
      <div className="absolute right-10 md:right-20 top-1/3 opacity-20 lg:opacity-40">
        <div className="w-40 h-40 md:w-60 md:h-60 border-4 border-dashed border-catalyst-teal rounded-full animate-rotate"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 animate-fade-in text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-center">
              <span className="uppercase">CATALYST CLUB</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto text-center uppercase animate-fade-in glow-text" style={{ animationDelay: '0.3s' }}>
              BRINGING TECH CLOSE TO YOU
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button size="lg" className="bg-catalyst-teal hover:bg-catalyst-blue text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                JOIN US NOW <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-catalyst-teal text-catalyst-teal hover:bg-catalyst-teal hover:text-white transition-all duration-300 hover:scale-105">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-6 justify-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-800">C</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-800">L</div>
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-xs font-medium text-gray-800">U</div>
                <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-xs font-medium text-white">B</div>
              </div>
              <span className="text-sm text-gray-500">Join us, we started in 2025</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main hero image with animation */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-catalyst-blue to-catalyst-teal p-1 animate-pulse-glow shadow-xl">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden p-6">
                  <img 
                    src="/lovable-uploads/e2f7c36a-f301-4db2-a896-4e0433b137a4.png" 
                    alt="Catalyst Club Logo" 
                    className="w-5/6 h-5/6 object-contain"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-2 animate-float">
                <div className="bg-catalyst-cyan/10 p-2 rounded-md">
                  <span className="text-xs font-bold text-catalyst-cyan">Innovation</span>
                </div>
              </div>
              
              <div className="absolute -bottom-2 -left-6 bg-white rounded-lg shadow-lg p-2 animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-catalyst-teal/10 p-2 rounded-md">
                  <span className="text-xs font-bold text-catalyst-teal">Technology</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

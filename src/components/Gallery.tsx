import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Gallery images from Catalyst Club events
  const images = [
    { id: 1, src: "/lovable-uploads/fac5799b-4217-4aac-9660-f925a3be0c24.png", alt: "Catalyst Club Workshop Session" },
    { id: 2, src: "/lovable-uploads/056e0d21-9902-43d9-a733-91333d2d9638.png", alt: "Interactive Learning Environment" },
    { id: 3, src: "/lovable-uploads/4ce3e485-6e85-4f2e-a272-5acd39a9d465.png", alt: "Hands-on Training Session" },
    { id: 4, src: "/lovable-uploads/487e7b16-e716-4cce-b889-4e6732c6a502.png", alt: "Catalyst Club Presentation" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Gallery</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
            Explore moments captured during our various events, workshops, and activities.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={image.id} className="w-full flex-shrink-0">
                  <div className="aspect-[16/9] relative">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slide indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-110' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
            <div className="flex justify-center mt-6 space-x-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-catalyst-teal text-catalyst-teal hover:bg-catalyst-teal hover:text-white"
                onClick={goToPrevious}
                aria-label="Previous image"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-catalyst-teal text-catalyst-teal hover:bg-catalyst-teal hover:text-white"
                onClick={goToNext}
                aria-label="Next image"
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

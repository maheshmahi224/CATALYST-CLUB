
import React, { useState } from 'react';
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
  
  // Placeholder images - these will be replaced later
  const images = [
    { id: 1, src: "https://via.placeholder.com/800x500?text=Gallery+Image+1", alt: "Gallery Image 1" },
    { id: 2, src: "https://via.placeholder.com/800x500?text=Gallery+Image+2", alt: "Gallery Image 2" },
    { id: 3, src: "https://via.placeholder.com/800x500?text=Gallery+Image+3", alt: "Gallery Image 3" },
    { id: 4, src: "https://via.placeholder.com/800x500?text=Gallery+Image+4", alt: "Gallery Image 4" },
    { id: 5, src: "https://via.placeholder.com/800x500?text=Gallery+Image+5", alt: "Gallery Image 5" },
    { id: 6, src: "https://via.placeholder.com/800x500?text=Gallery+Image+6", alt: "Gallery Image 6" },
    { id: 7, src: "https://via.placeholder.com/800x500?text=Gallery+Image+7", alt: "Gallery Image 7" },
    { id: 8, src: "https://via.placeholder.com/800x500?text=Gallery+Image+8", alt: "Gallery Image 8" },
    { id: 9, src: "https://via.placeholder.com/800x500?text=Gallery+Image+9", alt: "Gallery Image 9" },
    { id: 10, src: "https://via.placeholder.com/800x500?text=Gallery+Image+10", alt: "Gallery Image 10" },
  ];

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Gallery</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-catalyst-teal to-catalyst-cyan mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
            Explore moments captured during our various events, workshops, and activities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={image.id}>
                  <Card className="border-0 shadow-lg overflow-hidden">
                    <div className="aspect-[16/9] relative">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
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
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

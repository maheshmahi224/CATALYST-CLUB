import React from 'react';
import InteractiveSelector from './ui/interactive-selector';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSelector />
        <div className="mt-8 text-center">
          <Button 
            onClick={() => navigate('/gallery')}
            size="lg"
            className="bg-catalyst-teal hover:bg-catalyst-cyan text-white font-semibold"
          >
            Explore Our Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

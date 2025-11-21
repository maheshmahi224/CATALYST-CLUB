import React from 'react';
import InteractiveSelector from './ui/interactive-selector';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveSelector />
      </div>
    </section>
  );
};

export default Gallery;

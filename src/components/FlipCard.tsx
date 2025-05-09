
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FlipCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

const FlipCard = ({ title, description, image, highlights }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="h-[500px] perspective-1000 w-full cursor-pointer" 
      onClick={handleFlip}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-lg overflow-hidden shadow-md">
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 text-catalyst-blue">{title}</h3>
            <div className="flex justify-center items-center mt-4">
              <p className="text-sm text-gray-500">Click to learn more</p>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <Button 
                className="bg-catalyst-teal hover:bg-catalyst-blue transition-colors"
              >
                Flip Card <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg overflow-hidden shadow-md">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold mb-3 text-catalyst-blue">{title}</h3>
            <p className="text-gray-600 text-sm flex-grow">{description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Includes:</h4>
              <ul className="grid grid-cols-2 gap-2">
                {highlights.map((item, index) => (
                  <li key={index} className="text-xs text-gray-600 flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-catalyst-teal mr-1.5"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              className="w-full bg-catalyst-teal hover:bg-catalyst-blue transition-colors flex items-center justify-center"
            >
              Know More <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

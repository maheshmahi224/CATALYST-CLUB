import React, { useState, useEffect } from 'react';
import { Image, Calendar, Award, Users, Lightbulb } from 'lucide-react';

interface Option {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const options: Option[] = [
    {
      title: "Workshop Sessions",
      description: "Hands-on learning experiences",
      image: "/lovable-uploads/fac5799b-4217-4aac-9660-f925a3be0c24.png",
      icon: <Users size={24} className="text-white" />
    },
    {
      title: "Interactive Learning",
      description: "Collaborative tech environment",
      image: "/lovable-uploads/056e0d21-9902-43d9-a733-91333d2d9638.png",
      icon: <Lightbulb size={24} className="text-white" />
    },
    {
      title: "Training Programs",
      description: "Skill development sessions",
      image: "/lovable-uploads/4ce3e485-6e85-4f2e-a272-5acd39a9d465.png",
      icon: <Award size={24} className="text-white" />
    },
    {
      title: "Tech Presentations",
      description: "Knowledge sharing events",
      image: "/lovable-uploads/487e7b16-e716-4cce-b889-4e6732c6a502.png",
      icon: <Calendar size={24} className="text-white" />
    },
  ];

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (isMobile) {
      // Instantly show all on mobile for better performance
      setAnimatedOptions(options.map((_, i) => i));
      return;
    }
    
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isMobile]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[600px] bg-gray-900 font-sans text-white py-12"> 
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">Explore Our Gallery</h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">Discover moments from our workshops, events, and activities.</p>
      </div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[900px] min-w-[300px] h-[400px] mx-4 items-stretch overflow-x-auto md:overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden ease-in-out
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              margin: 0,
              borderRadius: 0,
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#fff' : '#292929',
              cursor: 'pointer',
              backgroundColor: '#18181b',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              transition: isMobile ? 'all 0.4s ease-in-out' : 'all 0.7s ease-in-out',
              willChange: activeIndex === index ? 'flex-grow' : 'auto'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px #000, inset 0 -120px 120px -80px #000' 
                  : 'inset 0 -120px 0px -120px #000, inset 0 -120px 0px -80px #000',
                transition: isMobile ? 'all 0.4s ease-in-out' : 'all 0.7s ease-in-out'
              }}
            ></div>
            
            {/* Label with icon and info */}
            <div className="label absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full">
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(32,32,32,0.85)] backdrop-blur-[10px] shadow-[0_1px_4px_rgba(0,0,0,0.18)] border-2 border-[#444] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {option.icon}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-lg ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    transition: isMobile ? 'all 0.4s ease-in-out' : 'all 0.7s ease-in-out'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-base text-gray-300 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    transition: isMobile ? 'all 0.4s ease-in-out' : 'all 0.7s ease-in-out'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}} />
    </div>
  );
};

export default InteractiveSelector;

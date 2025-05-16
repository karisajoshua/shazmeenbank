
import React, { useEffect, useState } from "react";

const LogoCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mock featured platforms - replace with actual logos
  const featuredLogos = [
    { name: "Forbes", logo: "https://placehold.co/120x60?text=Forbes" },
    { name: "BusinessWeek", logo: "https://placehold.co/120x60?text=BusinessWeek" },
    { name: "Entrepreneur", logo: "https://placehold.co/120x60?text=Entrepreneur" },
    { name: "Fortune", logo: "https://placehold.co/120x60?text=Fortune" },
    { name: "Inc", logo: "https://placehold.co/120x60?text=Inc" },
    { name: "Wall Street Journal", logo: "https://placehold.co/120x60?text=WSJ" },
    { name: "Bloomberg", logo: "https://placehold.co/120x60?text=Bloomberg" },
    { name: "CNBC", logo: "https://placehold.co/120x60?text=CNBC" }
  ];

  useEffect(() => {
    // Show logos after a short delay for better visual effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-shazmeen-gray to-white py-12 border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-shazmeen-dark text-lg font-medium">Shazmeen Bank has been featured in</p>
        </div>
      </div>
      
      <div className="overflow-hidden relative">
        <div className={`flex transition-opacity duration-1000 ${isVisible ? 'opacity-80 animate-fade-and-scroll' : 'opacity-0'}`}>
          {/* Double the logos to create seamless loop */}
          {[...featuredLogos, ...featuredLogos].map((logo, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <img src={logo.logo} alt={`${logo.name} Logo`} className="h-14" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

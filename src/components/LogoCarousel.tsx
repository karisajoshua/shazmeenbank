
import React from "react";

const LogoCarousel = () => {
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

  return (
    <div className="bg-shazmeen-gray py-8">
      <div className="container-custom">
        <div className="text-center mb-6">
          <p className="text-shazmeen-dark text-lg font-medium">Shazmeen Bank has been featured in</p>
        </div>
      </div>
      
      <div className="overflow-hidden">
        <div className="flex animate-scrolling-logos">
          {/* Double the logos to create seamless loop */}
          {[...featuredLogos, ...featuredLogos].map((logo, index) => (
            <div key={index} className="mx-6 flex-shrink-0">
              <img src={logo.logo} alt={`${logo.name} Logo`} className="h-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;

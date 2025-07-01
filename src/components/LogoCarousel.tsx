
import React, { useEffect, useState } from "react";

const LogoCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Real featured platform logos from Supabase
  const featuredLogos = [
    {
      name: "BBC",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/bbc.jpg"
    },
    {
      name: "Choice",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/choice.jpg"
    },
    {
      name: "Citizen",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/citizen.jpg"
    },
    {
      name: "Ebru",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/ebru.jpg"
    },
    {
      name: "Engage",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/engage.png"
    },
    {
      name: "K24",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/k24.jpg"
    },
    {
      name: "KTN",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/ktn.jpg"
    },
    {
      name: "NRG Radio",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/nrgRadio.jpg"
    },
    {
      name: "NRG Vent",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/nrgVent.jpg"
    },
    {
      name: "NTV",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/ntv.jpg"
    },
    {
      name: "Star",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/star.jpg"
    },
    {
      name: "Switch",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/switch.jpg"
    },
    {
      name: "Tuko",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/tuko.png"
    }
  ];

  useEffect(() => {
    // Show logos after a short delay for better visual effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white py-12 border-y border-gray-100">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-shazmeen-dark text-3xl font-bold">Featured in</p>
        </div>
      </div>
      
      <div className="overflow-hidden relative">
        <div className={`flex transition-opacity duration-1000 ${isVisible ? 'opacity-100 animate-super-slow-scroll' : 'opacity-0'}`}>
          {/* Double the logos to create seamless loop - using a much slower animation */}
          {[...featuredLogos, ...featuredLogos].map((logo, index) => (
            <div key={index} className="mx-8 flex-shrink-0">
              <img 
                src={logo.logo} 
                alt={`${logo.name} Logo`} 
                className="h-16 object-contain" 
                style={{
                  maxWidth: "180px"
                }} 
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes super-slow-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-super-slow-scroll {
            animation: super-slow-scroll 60s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default LogoCarousel;

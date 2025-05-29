
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface VideoHeroProps {
  onWaitlistClick: () => void;
}

const VideoHero = ({ onWaitlistClick }: VideoHeroProps) => {
  return (
    <section className="relative overflow-hidden min-h-[100vh]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/95 via-shazmeen-dark/80 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-right bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url('https://loqubmypggsmkuwjomvb.supabase.co/storage/v1/object/public/shazmeen//shaz.jpeg')`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 py-28 md:py-36 flex items-center min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-16">
          <div className="space-y-8 animate-fade-in">
            <div className="mb-8">
              <img 
                src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeen_logo-removebg-preview.png" 
                alt="Shazmeen Bank Logo" 
                className="h-24 object-contain mb-4" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-shazmeen-white">
              Step into your worth—<span className="text-shazmeen-blush">confidently</span> and <span className="text-shazmeen-secondary">unapologetically</span>
            </h1>
            <p className="text-xl md:text-2xl text-shazmeen-gray font-light leading-relaxed">
              Not just in relationships, but in your career, boundaries, and self-expression. Healing your attachment wounds are about becoming even more whole as a person, not just for your relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                onClick={onWaitlistClick}
                className="bg-white text-shazmeen-dark hover:bg-gray-100 shadow-lg text-lg w-full sm:w-auto px-8 py-4 rounded-xl font-bold transition-all duration-300"
              >
                Unlearn. Rebuild. Love Better.
              </Button>
              <Link to="/bookings">
                <Button 
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-shazmeen-dark transition-all duration-300 rounded-xl px-8 py-4 font-bold text-lg w-full sm:w-auto"
                >
                  Begin 1:1 healing
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Just spacing for layout - image is in background */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;

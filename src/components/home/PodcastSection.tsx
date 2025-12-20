import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, Play } from "lucide-react";
import podcastCover from "@/assets/podcast/love-better-cover.jpg";

const PodcastSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-shazmeen-dark" />
        <div 
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${podcastCover})` }}
        />
      </div>
      
      {/* Overlay for mobile */}
      <div className="absolute inset-0 md:hidden bg-shazmeen-dark/80" />
      
      <div className="relative container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-shazmeen-red rounded-full flex items-center justify-center">
                <Headphones size={24} />
              </div>
              <span className="text-shazmeen-gold uppercase tracking-widest text-sm font-semibold">
                Podcast
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl heading-elegant font-bold mb-6">
              The Love Better Podcast
            </h2>
            
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Conversations that make you feel seen. Each week, I dive into real-life relationship struggles, emotional growth, and the work of becoming grounded, secure, and self-led.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/podcast">
                <Button className="bg-shazmeen-red hover:bg-shazmeen-red/90 text-white text-lg px-8 py-4 flex items-center gap-2">
                  <Play size={20} />
                  Listen Now
                </Button>
              </Link>
              <a 
                href="https://open.spotify.com/show/4LmFLH1z6wSBnqwl3rY8wY" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-shazmeen-dark text-lg px-8 py-4">
                  Subscribe on Spotify
                </Button>
              </a>
            </div>
            
            <p className="text-white/60 mt-6 text-sm">
              Two new episodes every week
            </p>
          </div>
          
          {/* Mobile Image */}
          <div className="md:hidden">
            <img 
              src={podcastCover} 
              alt="Love Better Podcast"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;

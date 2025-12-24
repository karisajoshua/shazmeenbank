import React from "react";
import { Youtube } from "lucide-react";

// Import all available images
import shazmeenHeart from "@/assets/about/shazmeen-heart.png";
import shazmeenMarathonStats from "@/assets/about/shazmeen-marathon-stats.png";
import shazmeenMedalTogether from "@/assets/about/shazmeen-medal-together.png";
import shazmeenMedal from "@/assets/about/shazmeen-medal.png";
import hostPortrait from "@/assets/podcast/host-portrait.png";
import loveBetterCover from "@/assets/podcast/love-better-cover.jpg";
import marathonFinish from "@/assets/podcast/marathon-finish.png";
import marathonMedals from "@/assets/podcast/marathon-medals.png";
import couplesCoaching from "@/assets/bookings/couples-coaching.jpg";
import heroBackground from "@/assets/bookings/hero-bg.jpg";
import resolutionMethod from "@/assets/bookings/resolution-method.jpg";
import secureSelfSession from "@/assets/bookings/secure-self-session.jpg";
import featuredFire from "@/assets/blog/featured-fire.png";
import marathon1 from "@/assets/blog/marathon-1.png";
import marathon2 from "@/assets/blog/marathon-2.png";

// Organize images into 4 rows
const row1Images = [shazmeenHeart, hostPortrait, couplesCoaching, featuredFire, shazmeenMarathonStats, loveBetterCover];
const row2Images = [marathonFinish, resolutionMethod, shazmeenMedal, marathon1, heroBackground, marathonMedals];
const row3Images = [secureSelfSession, shazmeenMedalTogether, marathon2, hostPortrait, couplesCoaching, shazmeenHeart];
const row4Images = [loveBetterCover, featuredFire, marathonFinish, shazmeenMarathonStats, resolutionMethod, marathonMedals];

interface MarqueeRowProps {
  images: string[];
  direction: "left" | "right";
  duration?: number;
}

const MarqueeRow = ({ images, direction, duration = 30 }: MarqueeRowProps) => {
  // Double the images for seamless loop
  const duplicatedImages = [...images, ...images];
  
  return (
    <div className="relative overflow-hidden py-2">
      <div 
        className={`flex gap-4 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ 
          animationDuration: `${duration}s`,
        }}
      >
        {duplicatedImages.map((img, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0 w-48 h-32 md:w-64 md:h-44 rounded-2xl overflow-hidden shadow-lg"
          >
            <img 
              src={img} 
              alt="" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageMarquee = () => {
  return (
    <section className="relative py-16 bg-[#0a0a0a] overflow-hidden min-h-screen flex items-center">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Marquee Rows */}
      <div className="w-full space-y-4">
        <MarqueeRow images={row1Images} direction="right" duration={35} />
        <MarqueeRow images={row2Images} direction="left" duration={40} />
        <MarqueeRow images={row3Images} direction="right" duration={38} />
        <MarqueeRow images={row4Images} direction="left" duration={32} />
      </div>

      {/* Center overlay content */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center bg-[#0a0a0a]/80 backdrop-blur-sm px-12 py-10 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            A Journey of Healing
          </h2>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Every conversation, every moment of growth captured in this journey.
          </p>
          
          {/* Platform buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="https://www.youtube.com/channel/UCYYSYmYSMPi8YZ3TjHl4JGg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF0000] hover:bg-[#CC0000] text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
            <a 
              href="https://open.spotify.com/show/your-show"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1AA34A] text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a 
              href="https://podcasts.apple.com/podcast/your-show"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-[#9933FF] to-[#FA2D48] hover:opacity-90 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c4.988 0 9.054 3.86 9.054 8.61 0 1.703-.506 3.349-1.503 4.772-.217.312-.67.39-.993.166-.324-.223-.397-.684-.18-.994.819-1.17 1.238-2.533 1.238-3.944 0-3.94-3.426-7.156-7.616-7.156-4.192 0-7.617 3.217-7.617 7.156 0 1.411.42 2.775 1.22 3.945.217.31.137.77-.187.994-.325.224-.776.143-.992-.166a8.348 8.348 0 01-1.48-4.773c0-4.75 4.066-8.61 9.056-8.61zm.11 3.843c2.819 0 5.112 2.135 5.112 4.76 0 .206-.007.41-.021.613-.031.44-.42.77-.865.738-.446-.033-.781-.405-.75-.845.01-.168.016-.337.016-.506 0-1.838-1.575-3.336-3.492-3.336-1.918 0-3.494 1.498-3.494 3.336 0 .17.005.338.016.507.03.44-.305.812-.75.844-.446.033-.835-.299-.866-.738a5.35 5.35 0 01-.02-.613c0-2.625 2.292-4.76 5.114-4.76zm-.102 3.164c1.02 0 1.848.773 1.848 1.728 0 .553-.277 1.046-.71 1.373v3.392c0 .602-.51 1.09-1.138 1.09-.63 0-1.139-.488-1.139-1.09v-3.392c-.432-.327-.71-.82-.71-1.373 0-.955.83-1.728 1.849-1.728z"/>
              </svg>
              Apple Podcasts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;

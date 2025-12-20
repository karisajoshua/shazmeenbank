import React from "react";

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
    <section className="relative py-16 bg-[#0a0a0a] overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      {/* Marquee Rows */}
      <div className="space-y-4">
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
          <a 
            href="/about"
            className="inline-flex items-center gap-2 bg-shazmeen-red hover:bg-shazmeen-red/90 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
          >
            Find Out More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ImageMarquee;
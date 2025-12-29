import React from "react";
import { Youtube, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Video {
  id: string;
  title: string;
}

interface VideoMarqueeHeroProps {
  videos: Video[];
}

const MarqueeRow = ({ 
  videos, 
  direction = "left", 
  duration = 60 
}: { 
  videos: Video[]; 
  direction?: "left" | "right"; 
  duration?: number;
}) => {
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";
  
  return (
    <div className="flex gap-4 overflow-hidden">
      <div 
        className={`flex gap-4 ${animationClass}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...videos, ...videos].map((video, index) => (
          <div
            key={`${video.id}-${index}`}
            className="relative flex-shrink-0 w-64 md:w-80 aspect-video rounded-xl overflow-hidden group"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-shazmeen-dark/40 group-hover:bg-shazmeen-dark/20 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-shazmeen-red/90 flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const VideoMarqueeHero = ({ videos }: VideoMarqueeHeroProps) => {
  // Split videos into 4 rows
  const chunkSize = Math.ceil(videos.length / 4);
  const row1 = videos.slice(0, chunkSize);
  const row2 = videos.slice(chunkSize, chunkSize * 2);
  const row3 = videos.slice(chunkSize * 2, chunkSize * 3);
  const row4 = videos.slice(chunkSize * 3);

  return (
    <section className="relative min-h-screen bg-shazmeen-dark overflow-hidden flex items-center">
      {/* Video Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-40">
        <MarqueeRow videos={row1} direction="left" duration={80} />
        <MarqueeRow videos={row2} direction="right" duration={90} />
        <MarqueeRow videos={row3} direction="left" duration={70} />
        <MarqueeRow videos={row4} direction="right" duration={85} />
      </div>

      {/* Gradient Overlays - Reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-shazmeen-dark/60 via-shazmeen-dark/40 to-shazmeen-dark/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/50 via-transparent to-shazmeen-dark/50 pointer-events-none" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-shazmeen-red/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-shazmeen-blush/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 py-24">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-shazmeen-red/10 border border-shazmeen-red/20 rounded-full px-5 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Youtube className="w-4 h-4 text-shazmeen-red" />
            <span className="text-sm font-medium text-shazmeen-red">{videos.length}+ Videos</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Watch, Learn &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shazmeen-red to-shazmeen-blush">
              Transform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dive into relationship insights, personal stories, and coaching wisdom. 
            Each video is designed to help you heal, grow, and love better.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.youtube.com/@shazmeenbank/videos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-shazmeen-red hover:bg-shazmeen-red/90 text-white rounded-full px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-shazmeen-red/20 transition-all duration-300 group"
              >
                <Youtube className="mr-2 w-5 h-5" />
                Subscribe to Channel
                <ExternalLink className="ml-2 w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg font-bold backdrop-blur-sm"
              onClick={() => {
                document.getElementById('videos-content')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Play className="mr-2 w-5 h-5" />
              Start Watching
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default VideoMarqueeHero;

import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface VideoHeroProps {
  onWaitlistClick: () => void;
}

// Media House Videos featuring Shazmeen Bank
const YOUTUBE_VIDEOS = [
  { id: "XfRcyB6_hGA", start: 163 },  // 2:43 - Citizen TV Kenya
  { id: "guHf0pIWXWA", start: 235 },  // 3:55 - Spice FM Kenya
  { id: "OyK1-tnqOqw", start: 343 },  // 5:43 - TV47 Kenya
  { id: "PDhK4FqbROE", start: 21 },   // 0:21 - Engage Talk
  { id: "at3bHuNlBqI", start: 261 },  // 4:21 - Switch TV
  { id: "R7AglaXRgWA", start: 627 },  // 10:27 - Tuko Kenya
  { id: "ZPcSLA24B6Y", start: 159 },  // 2:39 - NRG TV
];

const VideoHero = ({ onWaitlistClick }: VideoHeroProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length);
      }, 12000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative overflow-hidden h-screen w-full min-h-[100vh]">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute inset-0 bg-gradient-to-r from-shazmeen-dark/70 via-shazmeen-dark/40 to-transparent z-10 ${isPlaying ? 'pointer-events-none' : ''}`}></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            key={`${currentVideoIndex}-${isPlaying}`}
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[currentVideoIndex].id}?autoplay=1&mute=${isPlaying ? '0' : '1'}&controls=${isPlaying ? '1' : '0'}&showinfo=0&rel=0&loop=1&playlist=${YOUTUBE_VIDEOS[currentVideoIndex].id}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1&start=${YOUTUBE_VIDEOS[currentVideoIndex].start}`}
            title="Background Video"
            className="absolute inset-0 w-full h-full"
            style={{ 
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.78vh',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
          />
        </div>
      </div>

      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          onClick={handlePlayClick}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-20 h-20 md:w-24 md:h-24 bg-shazmeen-red/90 hover:bg-shazmeen-red rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl group"
          aria-label="Play video with sound"
        >
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
        </button>
      )}

      {/* Content */}
      {!isPlaying && (
        <div className="container-custom relative z-20 h-full flex items-center pt-24">
          <div className="max-w-xl">
            <div className="space-y-4 animate-fade-in bg-shazmeen-dark/60 backdrop-blur-sm p-6 rounded-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-shazmeen-white">
                If you've landed here, you're ready to{" "}
                <span className="text-shazmeen-blush">heal</span>, take{" "}
                <span className="text-shazmeen-secondary">responsibility</span> and
                begin again
              </h1>
              <p className="text-base md:text-lg text-shazmeen-gray font-light leading-relaxed">
                Maybe you're rebuilding after a breakup or divorce, learning to
                navigate conflict, or carrying the deep wounds of betrayal. This is
                the place to unpack, understand, and begin again.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoHero;

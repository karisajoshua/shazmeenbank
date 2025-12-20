import React, { useState, useEffect } from "react";
import { Play, Volume2 } from "lucide-react";

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
  const [isMuted, setIsMuted] = useState(true); // Start muted so autoplay works

  useEffect(() => {
    // Rotate videos every 12 seconds when muted (background mode)
    if (isMuted) {
      const interval = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length);
      }, 12000);
      return () => clearInterval(interval);
    }
  }, [isMuted]);

  const handleUnmute = () => {
    setIsMuted(false);
  };

  return (
    <section className="relative overflow-hidden h-screen w-full min-h-[100vh]">
      {/* YouTube Video Background - Always plays (muted or unmuted) */}
      <div className="absolute inset-0 w-full h-full">
        <div className={`absolute inset-0 bg-gradient-to-r from-shazmeen-dark/80 via-shazmeen-dark/50 to-transparent z-10 ${!isMuted ? 'pointer-events-none' : ''}`}></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            key={`${currentVideoIndex}-${isMuted}`}
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[currentVideoIndex].id}?autoplay=1&mute=${isMuted ? '1' : '0'}&controls=${!isMuted ? '1' : '0'}&showinfo=0&rel=0&loop=1&playlist=${YOUTUBE_VIDEOS[currentVideoIndex].id}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1&start=${YOUTUBE_VIDEOS[currentVideoIndex].start}`}
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

      {/* Play with Sound Button - Shows when muted */}
      {isMuted && (
        <button
          onClick={handleUnmute}
          className="absolute top-1/2 right-8 md:right-16 transform -translate-y-1/2 z-30 flex items-center gap-3 bg-shazmeen-red/90 hover:bg-shazmeen-red text-white px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl group"
          aria-label="Play video with sound"
        >
          <Volume2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="font-medium hidden md:inline">Watch with Sound</span>
        </button>
      )}

      {/* Content - Shows when muted (background mode) */}
      {isMuted && (
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

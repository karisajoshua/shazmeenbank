import React, { useState, useEffect } from "react";

interface VideoHeroProps {
  onWaitlistClick: () => void;
}

// Media House Videos featuring Shazmeen Bank
const YOUTUBE_VIDEOS = [
  { id: "XfRcyB6_hGA", start: 163 },
  { id: "guHf0pIWXWA", start: 235 },
  { id: "OyK1-tnqOqw", start: 343 },
  { id: "PDhK4FqbROE", start: 21 },
  { id: "at3bHuNlBqI", start: 261 },
  { id: "R7AglaXRgWA", start: 627 },
  { id: "ZPcSLA24B6Y", start: 159 },
];

const VideoHero = ({ onWaitlistClick }: VideoHeroProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    // Rotate videos every 12 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen w-full min-h-[100vh]">
      {/* YouTube Video Background - Always muted */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/80 via-shazmeen-dark/50 to-transparent z-10"></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            key={currentVideoIndex}
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[currentVideoIndex].id}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${YOUTUBE_VIDEOS[currentVideoIndex].id}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1&start=${YOUTUBE_VIDEOS[currentVideoIndex].start}`}
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

      {/* Content Overlay - Always visible */}
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
    </section>
  );
};

export default VideoHero;

import React, { useState, useEffect } from "react";

interface VideoHeroProps {
  onWaitlistClick: () => void;
}

const YOUTUBE_VIDEOS = [
  "F2mP7WR_OE8",
  "utgshwR_648",
  "jiRr_6S1TFE",
  "GzcxHbcF7GA",
  "cIVsH7_UL9c",
  "hO5xv71M-BY",
  "MrJ8XN94oz8",
];

const VideoHero = ({ onWaitlistClick }: VideoHeroProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[100vh] -mt-20 pt-20">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/95 via-shazmeen-dark/80 to-transparent z-10"></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            key={currentVideoIndex}
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEOS[currentVideoIndex]}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${YOUTUBE_VIDEOS[currentVideoIndex]}&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1&enablejsapi=1&start=0`}
            title="Background Video"
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{ minWidth: '100%', minHeight: '100%' }}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
          />
        </div>
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
              If you've landed here, you're ready to{" "}
              <span className="text-shazmeen-blush">heal</span>, take{" "}
              <span className="text-shazmeen-secondary">responsibility</span> and
              begin again
            </h1>
            <p className="text-xl md:text-2xl text-shazmeen-gray font-light leading-relaxed">
              Maybe you're rebuilding after a breakup or divorce, maybe you're
              learning to navigate conflict, or maybe you're carrying the deep
              wounds of betrayal and infidelity. Wherever you are, this is the
              place to unpack, understand, and begin again.
            </p>
            <p className="text-lg text-shazmeen-gray font-light leading-relaxed mt-4">
              You might be here to heal your attachment style, to learn how to
              resolve conflict with more ease, or to grow into the version of
              yourself that feels secure, steady, and whole—in your work, your
              friendships, and your relationships. Because conflict is not
              something to fear; it is a doorway into another person's soul.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Just spacing for layout - video is in background */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;

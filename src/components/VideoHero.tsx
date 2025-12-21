/// <reference types="youtube" />
import { useState, useEffect, useRef, useCallback } from "react";

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

// Extend Window interface for YouTube API
declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

const VideoHero = ({ onWaitlistClick }: VideoHeroProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isAPIReady, setIsAPIReady] = useState(false);
  const [showFallback, setShowFallback] = useState(true);
  const playerRef = useRef<YT.Player | null>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Load YouTube IFrame API
  useEffect(() => {
    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      setIsAPIReady(true);
      return;
    }

    // Set up the callback before loading the script
    window.onYouTubeIframeAPIReady = () => {
      setIsAPIReady(true);
    };

    // Check if script is already being loaded
    if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, []);

  // Initialize player when API is ready
  useEffect(() => {
    if (!isAPIReady || !playerContainerRef.current) return;

    const currentVideo = YOUTUBE_VIDEOS[currentVideoIndex];

    // Create player
    playerRef.current = new window.YT.Player(playerContainerRef.current, {
      videoId: currentVideo.id,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        loop: 1,
        playlist: currentVideo.id,
        modestbranding: 1,
        iv_load_policy: 3,
        disablekb: 1,
        fs: 0,
        playsinline: 1,
        start: currentVideo.start,
        origin: window.location.origin,
      },
      events: {
        onReady: (event: YT.PlayerEvent) => {
          const player = event.target;
          player.mute();
          player.playVideo();
          // Hide fallback after a short delay to ensure video starts
          setTimeout(() => {
            setShowFallback(false);
          }, 1000);
        },
        onStateChange: (event: YT.OnStateChangeEvent) => {
          // If video ends or errors, try to play again
          if (event.data === window.YT.PlayerState.ENDED) {
            event.target.seekTo(YOUTUBE_VIDEOS[currentVideoIndex].start, true);
            event.target.playVideo();
          }
          // Ensure video stays muted
          if (event.data === window.YT.PlayerState.PLAYING) {
            event.target.mute();
          }
        },
        onError: () => {
          // On error, show fallback and try next video
          setShowFallback(true);
          setCurrentVideoIndex((prev) => (prev + 1) % YOUTUBE_VIDEOS.length);
        },
      },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [isAPIReady]);

  // Handle video rotation using loadVideoById
  const rotateVideo = useCallback(() => {
    setCurrentVideoIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % YOUTUBE_VIDEOS.length;
      const nextVideo = YOUTUBE_VIDEOS[nextIndex];

      if (playerRef.current && typeof playerRef.current.loadVideoById === "function") {
        playerRef.current.loadVideoById({
          videoId: nextVideo.id,
          startSeconds: nextVideo.start,
        });
        // Ensure it stays muted after loading new video
        setTimeout(() => {
          if (playerRef.current) {
            playerRef.current.mute();
            playerRef.current.playVideo();
          }
        }, 500);
      }

      return nextIndex;
    });
  }, []);

  // Set up rotation interval
  useEffect(() => {
    if (!isAPIReady) return;

    rotationIntervalRef.current = setInterval(rotateVideo, 12000);

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [isAPIReady, rotateVideo]);

  return (
    <section className="relative overflow-hidden h-screen w-full min-h-[100vh]">
      {/* Fallback Background Image */}
      {showFallback && (
        <div 
          className="absolute inset-0 w-full h-full bg-shazmeen-dark z-[5]"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${YOUTUBE_VIDEOS[currentVideoIndex].id}/maxresdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/80 via-shazmeen-dark/50 to-transparent z-10"></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            ref={playerContainerRef}
            className="absolute"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.78vh',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
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

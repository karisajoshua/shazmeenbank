/// <reference types="youtube" />
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface VideoHeroProps {
  onWaitlistClick?: () => void;
}

// Media House Videos featuring Shazmeen Bank
const YOUTUBE_VIDEOS = [
  { id: "at3bHuNlBqI", start: 261 },
  { id: "guHf0pIWXWA", start: 235 },
  { id: "OyK1-tnqOqw", start: 343 },
  { id: "XfRcyB6_hGA", start: 165 },
  { id: "PDhK4FqbROE", start: 21 },
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

  // Avoid stale closures inside YouTube callbacks
  const currentVideoIndexRef = useRef(0);

  useEffect(() => {
    currentVideoIndexRef.current = currentVideoIndex;
  }, [currentVideoIndex]);

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
      script.onload = () => {
        // Fallback in case the global callback is skipped
        if (window.YT && window.YT.Player) setIsAPIReady(true);
      };
      script.onerror = () => {
        setShowFallback(true);
      };
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
      host: "https://www.youtube-nocookie.com",
      width: "100%",
      height: "100%",
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

          // Some browsers require explicit iframe allowlist for autoplay
          try {
            const iframe = player.getIframe();
            iframe?.setAttribute(
              "allow",
              "autoplay; encrypted-media; picture-in-picture"
            );
            iframe?.setAttribute("title", "Homepage background video");
          } catch {
            // ignore
          }

          player.mute();
          player.playVideo();

          // Retry (some browsers accept autoplay only after the iframe is fully hydrated)
          setTimeout(() => {
            try {
              const state = player.getPlayerState?.();
              if (state !== window.YT.PlayerState.PLAYING) {
                player.mute();
                player.playVideo();
              }
            } catch {
              // ignore
            }
          }, 1200);
        },
        onStateChange: (event: YT.OnStateChangeEvent) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            event.target.mute();
            setShowFallback(false);
            return;
          }

          // If video ends, restart the currently-selected clip from its start time
          if (event.data === window.YT.PlayerState.ENDED) {
            const idx = currentVideoIndexRef.current;
            event.target.seekTo(YOUTUBE_VIDEOS[idx].start, true);
            event.target.playVideo();
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
          className="absolute inset-0 w-full h-full bg-black z-[5]"
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${YOUTUBE_VIDEOS[currentVideoIndex].id}/maxresdefault.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            id="yt-hero-player"
            ref={playerContainerRef}
            aria-hidden="true"
            className="absolute"
            style={{
              width: "100vw",
              height: "56.25vw",
              minHeight: "100vh",
              minWidth: "177.78vh",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* Content Overlay - Buttons positioned lower */}
      <div className="relative z-20 h-full flex flex-col items-center justify-end pb-32">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-16">
          <Link
            to="/bookings"
            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white text-xl md:text-2xl font-semibold hover:bg-white/20 hover:text-[#FD0061] transition-all duration-300 text-center"
          >
            One on One Coaching
          </Link>
          <Link
            to="/bookings"
            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white text-xl md:text-2xl font-semibold hover:bg-white/20 hover:text-[#FD0061] transition-all duration-300 text-center"
          >
            Couples Coaching
          </Link>
          <Link
            to="/courses"
            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 rounded-xl text-white text-xl md:text-2xl font-semibold hover:bg-white/20 hover:text-[#FD0061] transition-all duration-300 text-center"
          >
            Courses & Workbooks
          </Link>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white/70 text-sm mb-2 tracking-wider uppercase">Scroll for more</span>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default VideoHero;

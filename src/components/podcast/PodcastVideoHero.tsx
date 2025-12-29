import React from "react";
import { Youtube, Play, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface Video {
  id: string;
  title: string;
}

// Use the same videos from the videos page for the marquee
const ALL_VIDEOS: Video[] = [
  { id: "F2mP7WR_OE8", title: "Being single | Why are people scared of being single?" },
  { id: "QTd2t69EmJk", title: "Grief management" },
  { id: "6yT4JiUsqBM", title: "Work: Survive or Thrive" },
  { id: "MxPBIvHKqn0", title: "The \"Solo-ship\"" },
  { id: "utgshwR_648", title: "Day Break: Unions of convenience" },
  { id: "N3jalDLnsZU", title: "Day Break: Who is raising us?" },
  { id: "jiRr_6S1TFE", title: "Married with 2 kids, Husband cheating" },
  { id: "GzcxHbcF7GA", title: "Dating for successful women in power" },
  { id: "ZqBqvye3H_A", title: "A Second Chance At First Love" },
  { id: "R7AglaXRgWA", title: "I divorced my husband and married him again" },
  { id: "cIVsH7_UL9c", title: "Dealing with Mother-in-Laws" },
  { id: "b1HTpgTWPxs", title: "Signs of a controlling partner" },
  { id: "uTWPhBAijVw", title: "After the honeymoon period" },
  { id: "at3bHuNlBqI", title: "Young and pregnant at 18" },
  { id: "eCiX5xoVjsE", title: "People who jump from relationship to another" },
  { id: "TNfuKMiGXS8", title: "Marry within my religion?" },
  { id: "MrJ8XN94oz8", title: "People who avoid dating" },
  { id: "9uhTTc9GTr8", title: "Single ladies prefer dating married men" },
  { id: "3Re8Vo-i1fA", title: "Finding fulfillment before 35" },
  { id: "NrRXPRmGpbw", title: "Are you giving too much?" },
  { id: "Y3Lyo7qLx1o", title: "The 5 stages in a dating relationship" },
  { id: "E3LUlV2QHNQ", title: "Types of cheating" },
  { id: "ZPcSLA24B6Y", title: "Setting Your Goals Right" },
  { id: "hO5xv71M-BY", title: "Cheating In Relationships?" },
];

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

const PodcastVideoHero = () => {
  // Split videos into 4 rows
  const chunkSize = Math.ceil(ALL_VIDEOS.length / 4);
  const row1 = ALL_VIDEOS.slice(0, chunkSize);
  const row2 = ALL_VIDEOS.slice(chunkSize, chunkSize * 2);
  const row3 = ALL_VIDEOS.slice(chunkSize * 2, chunkSize * 3);
  const row4 = ALL_VIDEOS.slice(chunkSize * 3);

  return (
    <section className="relative min-h-screen bg-shazmeen-dark overflow-hidden flex items-center">
      {/* Video Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-4">
        <MarqueeRow videos={row1} direction="left" duration={80} />
        <MarqueeRow videos={row2} direction="right" duration={90} />
        <MarqueeRow videos={row3} direction="left" duration={70} />
        <MarqueeRow videos={row4} direction="right" duration={85} />
      </div>
      
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
          className="text-center max-w-3xl mx-auto bg-black/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
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
            <Play className="w-4 h-4 text-shazmeen-red" />
            <span className="text-sm font-medium text-shazmeen-red">Love Better Podcast</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Listen, Heal &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shazmeen-red to-shazmeen-blush">
              Love Better
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Real conversations about love, heartbreak, and everything in between. 
            Join me on a journey of healing and self-discovery.
          </p>

          {/* Platform Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

          {/* Scroll to read more */}
          <motion.div 
            className="flex flex-col items-center gap-2 pt-4"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white/60 text-sm uppercase tracking-widest">Scroll to read more</span>
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PodcastVideoHero;

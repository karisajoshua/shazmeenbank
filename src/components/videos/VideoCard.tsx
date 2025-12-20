import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoCardProps {
  id: string;
  title: string;
  size?: "normal" | "featured" | "large";
}

const VideoCard = ({ id, title, size = "normal" }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);

  const thumbnailUrl = imageError 
    ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  const sizeClasses = {
    normal: "aspect-video",
    featured: "aspect-video md:aspect-[4/3]",
    large: "aspect-video md:aspect-[16/10]",
  };

  return (
    <>
      {/* Video Card */}
      <motion.div
        className="group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsPlaying(true)}
      >
        <div className={`relative overflow-hidden rounded-2xl ${sizeClasses[size]} bg-shazmeen-dark/10`}>
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/90 via-shazmeen-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-shazmeen-red/90 flex items-center justify-center shadow-2xl group-hover:bg-shazmeen-red transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-7 h-7 md:w-8 md:h-8 text-white fill-white ml-1" />
            </motion.div>
          </div>

          {/* Glow Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-red/20 to-transparent" />
          </div>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-shazmeen-red/30 transition-all duration-300" />
        </div>

        {/* Title */}
        <h3 className="mt-4 text-sm md:text-base font-medium text-foreground group-hover:text-shazmeen-red transition-colors duration-300 line-clamp-2 leading-relaxed">
          {title}
        </h3>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-shazmeen-dark/95 backdrop-blur-sm"
              onClick={() => setIsPlaying(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl z-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute -top-12 right-0 md:top-4 md:right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-20"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VideoCard;
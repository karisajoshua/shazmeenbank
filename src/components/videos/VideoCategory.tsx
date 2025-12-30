import React from "react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";

interface Video {
  id: string;
  title: string;
}

interface VideoCategoryProps {
  title: string;
  icon: LucideIcon;
  color: string;
  videos: Video[];
  layout: "featured" | "grid" | "carousel" | "bento" | "masonry";
  index: number;
}

const VideoCategory = ({ title, icon: Icon, color, videos, layout, index }: VideoCategoryProps) => {
  // Featured layout: 1 large + grid of smaller
  const renderFeaturedLayout = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Featured Video - Takes 7 columns */}
      <div className="lg:col-span-7">
        <VideoCard id={videos[0].id} title={videos[0].title} size="large" />
      </div>
      {/* Grid of smaller videos - Takes 5 columns */}
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
        {videos.slice(1, 5).map((video) => (
          <VideoCard key={video.id} id={video.id} title={video.title} />
        ))}
      </div>
      {/* Remaining videos in full-width grid */}
      {videos.length > 5 && (
        <div className="lg:col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
          {videos.slice(5).map((video) => (
            <VideoCard key={video.id} id={video.id} title={video.title} />
          ))}
        </div>
      )}
    </div>
  );

  // Simple responsive grid
  const renderGridLayout = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} id={video.id} title={video.title} />
      ))}
    </div>
  );

  const renderLayout = () => {
    switch (layout) {
      case "featured":
        return renderFeaturedLayout();
      case "grid":
      default:
        return renderGridLayout();
    }
  };

  return (
    <motion.section 
      className="py-16 md:py-20 bg-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.div 
            className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${color} shadow-lg`}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-white">
              {title}
            </h2>
            <p className="text-gray-500 text-sm">{videos.length} videos</p>
          </div>
        </div>

        {/* Videos */}
        {renderLayout()}
      </div>
    </motion.section>
  );
};

export default VideoCategory;
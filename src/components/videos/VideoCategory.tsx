import React, { useRef } from "react";
import { LucideIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import VideoCard from "./VideoCard";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
}

interface VideoCategoryProps {
  title: string;
  icon: LucideIcon;
  color: string;
  videos: Video[];
  layout: "featured" | "carousel" | "grid" | "bento" | "masonry";
  index: number;
}

const VideoCategory = ({ title, icon: Icon, color, videos, layout, index }: VideoCategoryProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const isEven = index % 2 === 0;

  const renderFeaturedLayout = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Featured Video */}
      <div className="lg:row-span-2">
        <VideoCard id={videos[0].id} title={videos[0].title} size="large" />
      </div>
      {/* Grid of smaller videos */}
      <div className="grid grid-cols-2 gap-4">
        {videos.slice(1, 5).map((video) => (
          <VideoCard key={video.id} id={video.id} title={video.title} />
        ))}
      </div>
    </div>
  );

  const renderCarouselLayout = () => (
    <div className="relative group/carousel">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border-border shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex"
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background/90 border-border shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden md:flex"
        onClick={() => scroll("right")}
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videos.map((video) => (
          <div key={video.id} className="flex-shrink-0 w-72 md:w-80 snap-start">
            <VideoCard id={video.id} title={video.title} />
          </div>
        ))}
      </div>
    </div>
  );

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} id={video.id} title={video.title} />
      ))}
    </div>
  );

  const renderBentoLayout = () => (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {/* Large featured */}
      <div className="col-span-2 row-span-2">
        <VideoCard id={videos[0].id} title={videos[0].title} size="large" />
      </div>
      {/* Smaller items */}
      {videos.slice(1, 5).map((video) => (
        <div key={video.id}>
          <VideoCard id={video.id} title={video.title} />
        </div>
      ))}
      {/* Second row */}
      {videos.slice(5, 9).map((video) => (
        <div key={video.id}>
          <VideoCard id={video.id} title={video.title} />
        </div>
      ))}
    </div>
  );

  const renderMasonryLayout = () => {
    const leftColumn = videos.filter((_, i) => i % 2 === 0);
    const rightColumn = videos.filter((_, i) => i % 2 === 1);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="space-y-6">
          {leftColumn.slice(0, 4).map((video, i) => (
            <VideoCard key={video.id} id={video.id} title={video.title} size={i === 0 ? "featured" : "normal"} />
          ))}
        </div>
        <div className="space-y-6 md:mt-12">
          {rightColumn.slice(0, 4).map((video) => (
            <VideoCard key={video.id} id={video.id} title={video.title} />
          ))}
        </div>
        <div className="hidden lg:block space-y-6 mt-6">
          {videos.slice(8, 12).map((video, i) => (
            <VideoCard key={video.id} id={video.id} title={video.title} size={i === 1 ? "featured" : "normal"} />
          ))}
        </div>
      </div>
    );
  };

  const renderLayout = () => {
    switch (layout) {
      case "featured":
        return renderFeaturedLayout();
      case "carousel":
        return renderCarouselLayout();
      case "bento":
        return renderBentoLayout();
      case "masonry":
        return renderMasonryLayout();
      default:
        return renderGridLayout();
    }
  };

  return (
    <motion.section 
      className={`py-16 md:py-24 ${isEven ? 'bg-background' : 'bg-muted/30'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-10">
          <motion.div 
            className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${color} shadow-lg`}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm">{videos.length} videos</p>
          </div>
        </div>

        {/* Videos */}
        {renderLayout()}
      </div>
    </motion.section>
  );
};

export default VideoCategory;
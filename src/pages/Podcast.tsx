import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

import FeaturedEpisode from "@/components/podcast/FeaturedEpisode";
import EpisodeList from "@/components/podcast/EpisodeList";
import SubscribeSection from "@/components/podcast/SubscribeSection";
import SocialConnect from "@/components/podcast/SocialConnect";
import ImageMarquee from "@/components/podcast/ImageMarquee";
import { PodcastEpisode } from "@/types/podcast";

const Podcast = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { data: episodes, isLoading } = useQuery({
    queryKey: ['podcast-episodes'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcast_episodes')
        .select('*')
        .eq('status', 'published')
        .order('episode_number', { ascending: false });
      
      if (error) throw error;
      return data as PodcastEpisode[];
    },
  });

  // Set the first episode as selected when episodes load
  if (episodes && episodes.length > 0 && !selectedEpisode) {
    setSelectedEpisode(episodes[0]);
  }

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    setSelectedEpisode(episode);
    setIsPlaying(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading episodes...</p>
        </div>
      </div>
    );
  }

  if (!episodes || episodes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">No episodes available yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-20 bg-black">
      <ImageMarquee />
      {selectedEpisode && (
        <FeaturedEpisode 
          episode={selectedEpisode} 
          isPlaying={isPlaying} 
          onTogglePlay={handleTogglePlay} 
        />
      )}
      <EpisodeList episodes={episodes} onPlayEpisode={handlePlayEpisode} />
      <SubscribeSection />
      <SocialConnect />
    </div>
  );
};

export default Podcast;
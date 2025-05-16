
import { useState } from "react";
import PodcastEpisodeCard from "@/components/podcast/PodcastEpisodeCard";
import PodcastPopupPlayer from "@/components/podcast/PodcastPopupPlayer";
import { PodcastEpisode } from "@/types/podcast";

interface EpisodeListProps {
  episodes: PodcastEpisode[];
  onPlayEpisode: (episode: PodcastEpisode) => void;
}

const EpisodeList = ({ episodes, onPlayEpisode }: EpisodeListProps) => {
  const [popupEpisode, setPopupEpisode] = useState<PodcastEpisode | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlayEpisode = (episode: PodcastEpisode) => {
    setPopupEpisode(episode);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-serif">Latest Episodes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <PodcastEpisodeCard 
              key={index}
              episode={episode}
              onPlay={() => handlePlayEpisode(episode)}
            />
          ))}
        </div>
      </div>

      <PodcastPopupPlayer 
        episode={popupEpisode}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </section>
  );
};

export default EpisodeList;

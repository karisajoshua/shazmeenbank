
import PodcastEpisodeCard from "@/components/podcast/PodcastEpisodeCard";

interface Episode {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  topics?: string[];
  audioUrl: string;
}

interface EpisodeListProps {
  episodes: Episode[];
  onPlayEpisode: (episode: Episode) => void;
}

const EpisodeList = ({ episodes, onPlayEpisode }: EpisodeListProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-serif">Latest Episodes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <PodcastEpisodeCard 
              key={index}
              episode={episode}
              onPlay={() => onPlayEpisode(episode)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodeList;

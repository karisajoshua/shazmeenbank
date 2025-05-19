import { useState } from "react";
import PodcastHero from "@/components/podcast/PodcastHero";
import FeaturedEpisode from "@/components/podcast/FeaturedEpisode";
import EpisodeList from "@/components/podcast/EpisodeList";
import SubscribeSection from "@/components/podcast/SubscribeSection";
import SocialConnect from "@/components/podcast/SocialConnect";
import { podcastEpisodes } from "@/data/podcastEpisodes";
import { PodcastEpisode } from "@/types/podcast";
const Podcast = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode>(podcastEpisodes[0]);
  const [isPlaying, setIsPlaying] = useState(false);
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
  return <div className="pb-20 bg-shazmeen-white">
      <PodcastHero />
      <FeaturedEpisode episode={selectedEpisode} isPlaying={isPlaying} onTogglePlay={handleTogglePlay} />
      <EpisodeList episodes={podcastEpisodes} onPlayEpisode={handlePlayEpisode} />
      <SubscribeSection />
      <SocialConnect />
    </div>;
};
export default Podcast;
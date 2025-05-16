
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";
import PodcastPlayer from "@/components/podcast/PodcastPlayer";

interface Episode {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  topics?: string[];
  audioUrl: string;
}

interface FeaturedEpisodeProps {
  episode: Episode;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const FeaturedEpisode = ({ episode, isPlaying, onTogglePlay }: FeaturedEpisodeProps) => {
  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-premium p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src={episode.image} 
                  alt={episode.title} 
                  className="rounded-xl w-full h-auto shadow-md"
                />
                <div className="mt-4 flex gap-2">
                  <Button 
                    className="w-full bg-shazmeen-red hover:bg-opacity-90"
                    onClick={onTogglePlay}
                  >
                    {isPlaying ? "Pause" : "Play"} Episode
                  </Button>
                </div>
                <div className="mt-3 flex gap-2 justify-between">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 size={16} className="mr-1" /> Share
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download size={16} className="mr-1" /> Download
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm text-gray-500">{episode.date}</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1 font-serif text-shazmeen-dark">
                  {episode.title}
                </h2>
                <div className="mt-4 prose max-w-none">
                  <p className="text-gray-700">
                    {episode.description.slice(0, 300)}...
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-lg">In this episode:</h4>
                  <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                    {episode.topics?.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
                {isPlaying && (
                  <div className="mt-6">
                    <PodcastPlayer episode={episode} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisode;

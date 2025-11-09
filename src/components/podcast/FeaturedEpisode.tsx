
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Download, Play } from "lucide-react";
import PodcastPlayer from "@/components/podcast/PodcastPlayer";
import PodcastPopupPlayer from "@/components/podcast/PodcastPopupPlayer";
import { PodcastEpisode } from "@/types/podcast";

interface FeaturedEpisodeProps {
  episode: PodcastEpisode;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const FeaturedEpisode = ({ episode, isPlaying, onTogglePlay }: FeaturedEpisodeProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlayClick = () => {
    setIsPopupOpen(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-premium p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <img 
                  src={episode.image_url || 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=400'} 
                  alt={episode.title} 
                  className="rounded-xl w-full h-auto shadow-md"
                />
                <div className="mt-4 flex gap-2">
                  <Button 
                    className="w-full bg-shazmeen-red hover:bg-opacity-90"
                    onClick={handlePlayClick}
                  >
                    <Play size={16} className="mr-2" /> Play Episode
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
                <span className="text-sm text-gray-500">{new Date(episode.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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

      <PodcastPopupPlayer 
        episode={isPopupOpen ? episode : null}
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </section>
  );
};

export default FeaturedEpisode;

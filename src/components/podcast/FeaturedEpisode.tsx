
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Share2, Play, Youtube } from "lucide-react";
import { toast } from "@/hooks/use-toast";
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

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareData = {
      title: episode.title,
      text: `Listen to "${episode.title}" on Love Better Live Better Podcast`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "Episode link has been copied to clipboard",
      });
    }
  };

  return (
    <section className="py-16 bg-black">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="bg-zinc-900 rounded-2xl shadow-premium p-6 md:p-8 border border-zinc-800">
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
                {episode.youtube_url && (
                  <div className="mt-3">
                    <Button 
                      variant="outline" 
                      className="w-full border-red-600 text-red-600 hover:bg-red-50"
                      asChild
                    >
                      <a href={episode.youtube_url} target="_blank" rel="noopener noreferrer">
                        <Youtube size={16} className="mr-2" /> Watch on YouTube
                      </a>
                    </Button>
                  </div>
                )}
                <div className="mt-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-zinc-500 bg-zinc-800 text-white hover:bg-zinc-700"
                    onClick={handleShare}
                  >
                    <Share2 size={16} className="mr-2" /> Share
                  </Button>
                </div>
              </div>
              <div className="md:col-span-2">
                <span className="text-sm text-gray-400">{new Date(episode.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <h2 className="text-2xl md:text-3xl font-bold mt-1 font-serif text-white">
                  {episode.title}
                </h2>
                <div className="mt-4 prose max-w-none">
                  <p className="text-gray-300">
                    {episode.description.slice(0, 300)}...
                  </p>
                </div>
                <div className="mt-6">
                  <h4 className="font-medium text-lg text-white">In this episode:</h4>
                  <ul className="list-disc pl-5 mt-2 text-gray-300 space-y-1">
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

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Youtube } from "lucide-react";
import { PodcastEpisode } from "@/types/podcast";

interface PodcastEpisodeCardProps {
  episode: PodcastEpisode;
  onPlay: () => void;
}

const PodcastEpisodeCard = ({ episode, onPlay }: PodcastEpisodeCardProps) => {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-1 bg-gradient-to-b from-zinc-900 to-black border border-transparent hover:border-zinc-600 cursor-pointer"
      onClick={onPlay}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={episode.image_url || 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=400'} 
          alt={episode.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {/* Black gradient blend overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      </div>
      <CardHeader className="pb-2">
        <CardDescription className="text-sm text-gray-400">{new Date(episode.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</CardDescription>
        <CardTitle className="font-serif text-xl line-clamp-2 text-white">{episode.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-gray-400 line-clamp-3 text-sm">
          {episode.description}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            onPlay();
          }}
          className="w-full bg-[#FD0061] hover:bg-[#FD0061]/90 text-white"
        >
          <Play size={16} className="mr-2" /> Listen Now
        </Button>
        {episode.youtube_url && (
          <Button 
            variant="outline" 
            className="w-full border-red-600 text-red-500 bg-transparent hover:bg-red-600/10"
            asChild
            onClick={(e) => e.stopPropagation()}
          >
            <a href={episode.youtube_url} target="_blank" rel="noopener noreferrer">
              <Youtube size={16} className="mr-2" /> Watch on YouTube
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PodcastEpisodeCard;

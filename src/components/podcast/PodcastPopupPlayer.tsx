
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PodcastEpisode } from "@/types/podcast";
import PodcastPlayer from "@/components/podcast/PodcastPlayer";
import { X } from "lucide-react";

interface PodcastPopupPlayerProps {
  episode: PodcastEpisode | null;
  isOpen: boolean;
  onClose: () => void;
}

const PodcastPopupPlayer = ({ episode, isOpen, onClose }: PodcastPopupPlayerProps) => {
  if (!episode) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif">{episode.title}</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="absolute right-2 top-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        <div className="flex items-start space-x-4 pt-4">
          <img 
            src={episode.image} 
            alt={episode.title} 
            className="w-32 h-32 object-cover rounded-md"
          />
          <div className="flex-1">
            <p className="text-sm text-gray-500">{episode.date}</p>
            <p className="line-clamp-3 text-sm mt-1">{episode.description}</p>
          </div>
        </div>
        <div className="mt-6">
          <PodcastPlayer episode={episode} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PodcastPopupPlayer;

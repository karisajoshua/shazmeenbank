
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PodcastEpisode } from "@/types/podcast";
import PodcastPlayer from "@/components/podcast/PodcastPlayer";
import { Headphones, Clock, Calendar, Tag, X } from "lucide-react";

interface PodcastPopupPlayerProps {
  episode: PodcastEpisode | null;
  isOpen: boolean;
  onClose: () => void;
}

const PodcastPopupPlayer = ({ episode, isOpen, onClose }: PodcastPopupPlayerProps) => {
  if (!episode) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">{episode.title}</DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="absolute right-2 top-2"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 pt-4">
          <img 
            src={episode.image} 
            alt={episode.title} 
            className="w-full md:w-48 h-auto object-cover rounded-md"
          />
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {episode.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                45 mins
              </span>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-base">{episode.description}</p>
            </div>
            
            {episode.topics && episode.topics.length > 0 && (
              <div className="pt-2">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Topics Covered:</h3>
                <div className="flex flex-wrap gap-2">
                  {episode.topics.map((topic, index) => (
                    <span key={index} className="bg-shazmeen-blush/30 text-shazmeen-red text-xs px-2 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="pt-2">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Share this episode:</h3>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-100 pt-6">
          <div className="flex items-center mb-4">
            <Headphones className="h-5 w-5 text-shazmeen-red mr-2" />
            <h3 className="text-lg font-medium">Listen Now</h3>
          </div>
          <PodcastPlayer episode={episode} />
        </div>
        
        <div className="mt-4 text-center">
          <Button className="bg-shazmeen-red hover:bg-opacity-90 text-white">
            Subscribe to Podcast
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PodcastPopupPlayer;

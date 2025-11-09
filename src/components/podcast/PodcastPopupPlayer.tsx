
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PodcastEpisode } from "@/types/podcast";
import { Headphones, Clock, Calendar, X } from "lucide-react";

interface PodcastPopupPlayerProps {
  episode: PodcastEpisode | null;
  isOpen: boolean;
  onClose: () => void;
}

const PodcastPopupPlayer = ({ episode, isOpen, onClose }: PodcastPopupPlayerProps) => {
  if (!episode) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
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
            src={episode.image_url || 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=400'} 
            alt={episode.title} 
            className="w-full md:w-48 h-auto object-cover rounded-md"
          />
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(episode.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
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
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.facebook.com/profile.php?id=100078764546585" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://x.com/bankshazmeen" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    X
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {(episode.spotify_url || episode.apple_podcast_url) ? (
          <div className="mt-6 border-t border-gray-100 pt-6">
            <div className="flex items-center mb-4">
              <Headphones className="h-5 w-5 text-shazmeen-red mr-2" />
              <h3 className="text-lg font-medium">Listen Now</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {episode.spotify_url && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Spotify</p>
                  <iframe 
                    src={episode.spotify_url}
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                    title={`Spotify player for ${episode.title}`}
                  />
                </div>
              )}
              
              {episode.apple_podcast_url && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Apple Podcasts</p>
                  <iframe 
                    src={episode.apple_podcast_url}
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-lg"
                    title={`Apple Podcasts player for ${episode.title}`}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-6 text-center text-gray-500 py-8">
            Episode player coming soon
          </div>
        )}
        
        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            className="bg-[#1DB954] hover:bg-[#1ed760] text-white"
            asChild
          >
            <a href="https://open.spotify.com/show/4LmFLH1z6wSBnqwl3rY8wY" target="_blank" rel="noopener noreferrer">
              Subscribe on Spotify
            </a>
          </Button>
          <Button 
            className="bg-[#FA243C] hover:bg-[#fc4d61] text-white"
            asChild
          >
            <a href="https://podcasts.apple.com/us/podcast/love-better-live-better-podcast/id1804503086" target="_blank" rel="noopener noreferrer">
              Subscribe on Apple Podcasts
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PodcastPopupPlayer;

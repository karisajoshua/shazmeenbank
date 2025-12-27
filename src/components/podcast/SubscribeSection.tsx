
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      toast({
        title: "Subscribed!",
        description: "You'll receive updates when new episodes are released.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Never Miss an Episode</h2>
          <p className="text-lg mb-8 text-gray-300">
            Follow on your favorite platform and get notified when new episodes drop
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button size="lg" className="bg-gradient-to-br from-[#9933FF] to-[#FA2D48] hover:opacity-90" asChild>
              <a href="https://podcasts.apple.com/us/podcast/love-better-live-better-podcast/id1804503086" target="_blank" rel="noopener noreferrer">
                Apple Podcasts
              </a>
            </Button>
            <Button size="lg" className="bg-[#1DB954] hover:bg-opacity-90" asChild>
              <a href="https://open.spotify.com/show/4LmFLH1z6wSBnqwl3rY8wY" target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </Button>
            <Button size="lg" className="bg-[#F43E37] hover:bg-opacity-90" asChild>
              <a href="https://www.youtube.com/@shazmeenbank/videos" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Button>
          </div>
          <div className="max-w-md mx-auto mt-10">
            <p className="text-gray-300 mb-4">Get episode updates directly to your inbox</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="flex-1 px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700 focus:ring-2 focus:ring-shazmeen-red text-white placeholder:text-gray-500"
              />
              <Button type="submit" className="bg-shazmeen-red hover:bg-shazmeen-red/90 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;


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
    <section className="py-16 bg-white text-shazmeen-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Never Miss an Episode</h2>
          <p className="text-lg mb-8">
            Follow on your favorite platform and get notified when new episodes drop
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button size="lg" className="bg-black hover:bg-opacity-90">
              Apple Podcasts
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-opacity-90">
              Spotify
            </Button>
            <Button size="lg" className="bg-[#5000B9] hover:bg-opacity-90">
              Google Podcasts
            </Button>
            <Button size="lg" className="bg-[#F43E37] hover:bg-opacity-90" asChild>
              <a href="https://www.youtube.com/channel/UCYYSYmYSMPi8YZ3TjHl4JGg" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </Button>
          </div>
          <div className="max-w-md mx-auto mt-10">
            <p className="text-shazmeen-dark mb-4">Get episode updates directly to your inbox</p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-shazmeen-dark text-gray-900"
              />
              <Button type="submit" className="bg-shazmeen-dark hover:bg-black text-white">
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

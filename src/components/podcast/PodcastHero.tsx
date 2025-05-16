
import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const PodcastHero = () => {
  return (
    <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 heading-elegant font-serif">Love Better</h1>
          <p className="text-xl text-shazmeen-gray mt-4 max-w-2xl mx-auto">
            Exploring relationships, attachment, and the journey to secure love with Shazmeen Bank
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-shazmeen-red hover:bg-opacity-90 text-white flex gap-2 items-center" 
              size="lg"
            >
              <Headphones size={20} />
              Subscribe to Podcast
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
              size="lg"
            >
              Explore Episodes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastHero;

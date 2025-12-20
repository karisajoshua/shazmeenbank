import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Heart } from "lucide-react";
import marathonMedals from "@/assets/podcast/marathon-medals.png";

interface NewsletterResetProps {
  onNewsletterClick: () => void;
}

const NewsletterReset = ({ onNewsletterClick }: NewsletterResetProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${marathonMedals})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark via-shazmeen-dark/95 to-shazmeen-dark/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full" />
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-shazmeen-red/20 rounded-full blur-2xl" />
      
      <div className="relative container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-shazmeen-red rounded-full flex items-center justify-center">
              <Mail size={24} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold mb-6">
            The Newsletter Reset
          </h2>
          
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Real talk, healing prompts, and soulful check-ins straight to your inbox. Think of it as your weekly moment to reflect, reconnect, and grow.
          </p>
          
          <Button 
            onClick={onNewsletterClick} 
            className="bg-white text-shazmeen-dark hover:bg-shazmeen-cream text-lg px-8 py-4 flex items-center gap-2 mx-auto"
          >
            <Heart size={20} />
            Subscribe to Newsletter
          </Button>
          
          <p className="text-white/50 mt-6 text-sm">
            Join thousands who are already transforming their lives
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterReset;

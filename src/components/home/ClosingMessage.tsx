
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Music } from "lucide-react";

const ClosingMessage = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold mb-8 text-shazmeen-dark">
            You keep choosing connection over peace—and it keeps costing you both.
          </h2>
          
          <div className="text-xl leading-relaxed space-y-6 mb-12 text-gray-700">
            <p>
              I know exactly how you feel. You feel stuck in patterns of emotional unavailability, anxious loops, or constantly giving more than you receive, it's not because something's wrong with you.
            </p>
            <p>
              It's attachment. It's conditioning. And it can be unlearned. Allowing you to step into a place of safety in your body. Get to know the real you again. It's time you find your voice and no longer live in fear of being too much.
            </p>
            <p className="text-shazmeen-dark font-medium">
              Let's rebuild your internal template for love—so you stop losing yourself to find it.
            </p>
          </div>

          <div className="space-y-8">
            <Link to="/bookings">
              <Button className="btn-primary text-lg px-8 py-4 mb-8">
                Work With Me on Love That Feels Safe (1:1 coaching)
              </Button>
            </Link>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" className="border-shazmeen-red text-shazmeen-red hover:bg-shazmeen-red hover:text-white flex items-center gap-2" asChild>
                <a href="https://www.instagram.com/shazmeenbank/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                  Follow on Instagram
                </a>
              </Button>
              
              <Button variant="outline" className="border-shazmeen-red text-shazmeen-red hover:bg-shazmeen-red hover:text-white flex items-center gap-2" asChild>
                <a href="https://www.tiktok.com/@shazmeen_bank" target="_blank" rel="noopener noreferrer">
                  <Music size={20} />
                  Follow on TikTok
                </a>
              </Button>

              <Link to="/podcast">
                <Button variant="outline" className="border-shazmeen-red text-shazmeen-red hover:bg-shazmeen-red hover:text-white flex items-center gap-2">
                  <Music size={20} />
                  Listen to Podcast
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingMessage;

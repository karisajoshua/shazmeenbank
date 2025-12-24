import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Music, ArrowRight } from "lucide-react";
import hostPortrait from "@/assets/podcast/host-portrait.png";

const ClosingMessage = () => {
  return (
    <section className="section-padding bg-zinc-900 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative order-2 md:order-1">
              <img 
                src={hostPortrait}
                alt="Shazmeen Bank"
                className="w-full rounded-2xl shadow-2xl object-cover max-h-[500px]"
              />
            </div>
            
            {/* Content Side */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl heading-elegant font-bold mb-8 text-white leading-tight">
                You keep choosing connection over peace—and it keeps costing you both.
              </h2>
              
              <div className="text-lg leading-relaxed space-y-4 mb-10 text-gray-300">
                <p>
                  I know exactly how you feel. You feel stuck in patterns of emotional unavailability, anxious loops, or constantly giving more than you receive.
                </p>
                <p>
                  It's attachment. It's conditioning. And it can be unlearned.
                </p>
                <p className="text-white font-semibold">
                  Let's rebuild your internal template for love—so you stop losing yourself to find it.
                </p>
              </div>

              <div className="space-y-6">
                <Link to="/bookings">
                  <Button className="btn-primary text-lg px-8 py-4 w-full md:w-auto flex items-center justify-center gap-2">
                    Work With Me
                    <ArrowRight size={20} />
                  </Button>
                </Link>

                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-black flex items-center gap-2" 
                    asChild
                  >
                    <a href="https://www.instagram.com/shazmeenbank/" target="_blank" rel="noopener noreferrer">
                      <Instagram size={18} />
                      Instagram
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-black flex items-center gap-2" 
                    asChild
                  >
                    <a href="https://www.tiktok.com/@shazmeen_bank" target="_blank" rel="noopener noreferrer">
                      <Music size={18} />
                      TikTok
                    </a>
                  </Button>

                  <Link to="/podcast">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-black flex items-center gap-2"
                    >
                      <Music size={18} />
                      Podcast
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingMessage;

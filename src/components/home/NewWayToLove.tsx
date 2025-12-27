import React from "react";
import { Link } from "react-router-dom";
import shazmeenHeart from "@/assets/about/shazmeen-heart.png";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const NewWayToLove = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay - Lowered to show face */}
      <div 
        className="absolute inset-0 bg-cover bg-[center_20%] bg-fixed"
        style={{ backgroundImage: `url(${shazmeenHeart})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/95 via-zinc-900/85 to-zinc-900/95" />
      
      <div className="relative container-custom py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl heading-elegant font-bold text-white mb-8">
              A New Way to Love
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10">
              You don't have to chase, overthink, or abandon yourself anymore. Here, you'll learn to regulate your emotions, embrace your sensitivity, and show up secure in love.
            </p>
          </ScrollReveal>
          
          <div className="space-y-6 text-white/80 leading-relaxed text-lg">
            <ScrollReveal delay={0.1}>
              <div className="premium-card bg-white/10 backdrop-blur-sm border-white/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 heading-elegant">
                  Healing Anxious Attachment
                </h3>
                <p className="mb-4">
                  By now you've probably heard the term anxious attachment - but if you're honest, you've likely spent more time Googling about your avoidantly attached partner than truly focusing on yourself.
                </p>
                <p className="mb-4">
                  Maybe you've found yourself calling non-stop when you couldn't reach them, or realizing that over time, you've isolated yourself - making the relationship your whole world.
                </p>
                <p className="text-white font-semibold mb-8">
                  If this feels familiar, know this: nothing is "wrong" with you. Anxious attachment is not a flaw — it's a pattern that grew out of your early experiences, and it can absolutely be healed.
                </p>
                
                {/* CTA Button */}
                <Button 
                  asChild
                  size="lg"
                  className="bg-transparent border-2 border-[#FD0061] text-white hover:bg-[#FD0061] hover:text-white transition-all duration-300 rounded-xl px-10 py-6 font-bold text-lg shadow-[0_0_30px_rgba(253,0,97,0.3)] hover:shadow-[0_0_50px_rgba(253,0,97,0.5)]"
                >
                  <Link to="/bookings?service=1">
                    <Heart className="w-5 h-5 mr-2" />
                    Book 1:1 Self Healing Session
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="premium-card bg-white/10 backdrop-blur-sm border-white/20 p-6">
                  <p>You'll learn how to embrace your sensitivity as a strength, how to stop abandoning yourself in relationships, and how to grow a stronger sense of self.</p>
                </div>
                <div className="premium-card bg-white/10 backdrop-blur-sm border-white/20 p-6">
                  <p>This is about balance: being able to love deeply without losing yourself. Set boundaries with compassion and communicate your longings in ways that open your partner.</p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-white font-semibold pt-4">
                Healing anxious attachment doesn't mean silencing your sensitivity — it means finding the power within it.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWayToLove;

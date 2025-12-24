import React from "react";
import { Heart, Brain, Compass, Star } from "lucide-react";
import shazmeenHeart from "@/assets/about/shazmeen-heart.png";
import shazmeenMedal from "@/assets/about/shazmeen-medal.png";
import shazmeenMedalTogether from "@/assets/about/shazmeen-medal-together.png";
import shazmeenMarathon from "@/assets/about/shazmeen-marathon-stats.png";
import ScrollReveal from "@/components/ui/ScrollReveal";

const HowIHelp = () => {
  const helpAreas = [
    {
      title: "For Couples: From Conflict to Connection",
      description: "I help couples break free from painful cycles of disconnection by teaching you how to communicate in ways that create openness rather than defensiveness. Together, we work on moving from a \"conflict mind\" into a \"compassionate heart.\" You'll learn how to understand your partner's attachment style, hold space for each other's pain and deepest needs, and ask for what you long for in ways that invite love instead of resistance.",
      icon: Heart,
      iconColor: "text-rose-500",
      image: shazmeenHeart,
    },
    {
      title: "Healing Anxious Attachment",
      description: "If you feel stuck in overthinking, people-pleasing, or fearing abandonment, this work will help you find your center again. You'll learn how to hold space for your emotions without being overwhelmed by them, heal your core wounds, and feel safe in your own body. I'll guide you in building boundaries that honor your needs and stepping into your voice with strength and compassion.",
      icon: Brain,
      iconColor: "text-violet-500",
      image: shazmeenMedalTogether,
    },
    {
      title: "Healing Through Breakup or Divorce",
      description: "Ending a relationship can feel like losing the ground beneath you. The sadness, shame, and grief can sit heavy for a long time. Together, we'll create space for you to process your pain with compassion and care. I'll help you validate your emotions, honor your sorrow, and slowly rebuild your life piece by piece as you begin creating a new world around yourself.",
      icon: Compass,
      iconColor: "text-amber-500",
      image: shazmeenMedal,
    },
    {
      title: "Life Coaching: Finding Your North Star",
      description: "As your life coach, I'll help you realign with what truly matters to you and guide you back to your sense of purpose. Whether it's reclaiming your self-worth, following through on the goals you've been putting off, or rediscovering your voice outside of relationships, this is about reconnecting with your inner compass and taking steps to bring that vision to life.",
      icon: Star,
      iconColor: "text-emerald-500",
      image: shazmeenMarathon,
    }
  ];

  return (
    <section className="section-padding bg-black overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-white mb-6">
              Your Path to Healing & Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're here as a couple wanting to reconnect, navigating anxious attachment, or searching for your North Star again, this is your path to healing.
            </p>
          </div>
        </ScrollReveal>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {helpAreas.map((area, index) => {
            const Icon = area.icon;
            const isEven = index % 2 === 0;
            
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div 
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
                >
                  {/* Image Section - B&W with color on hover */}
                  <div className="relative flex-shrink-0 w-full md:w-80 lg:w-96">
                    <div className="relative overflow-hidden rounded-3xl shadow-premium bg-zinc-800">
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`relative flex-1 p-8 md:p-10 bg-zinc-900 rounded-3xl shadow-elegant hover:shadow-premium transition-all duration-500 border border-zinc-800 group-hover:-translate-y-1`}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 heading-elegant">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {area.description}
                    </p>
                    
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIHelp;


import React from "react";
import { Heart, Brain, Compass, Star } from "lucide-react";

const HowIHelp = () => {
  const helpAreas = [
    {
      title: "For Couples: From Conflict to Connection",
      description: "I help couples break free from painful cycles of disconnection by teaching you how to communicate in ways that create openness rather than defensiveness. Together, we work on moving from a \"conflict mind\" into a \"compassionate heart.\" You'll learn how to understand your partner's attachment style, hold space for each other's pain and deepest needs, and ask for what you long for in ways that invite love instead of resistance.",
      icon: Heart,
      gradient: "from-rose-500/20 via-pink-400/10 to-transparent",
      iconColor: "text-rose-500",
      borderColor: "border-rose-200"
    },
    {
      title: "Healing Anxious Attachment",
      description: "If you feel stuck in overthinking, people-pleasing, or fearing abandonment, this work will help you find your center again. You'll learn how to hold space for your emotions without being overwhelmed by them, heal your core wounds, and feel safe in your own body. I'll guide you in building boundaries that honor your needs and stepping into your voice with strength and compassion.",
      icon: Brain,
      gradient: "from-violet-500/20 via-purple-400/10 to-transparent",
      iconColor: "text-violet-500",
      borderColor: "border-violet-200"
    },
    {
      title: "Healing Through Breakup or Divorce",
      description: "Ending a relationship can feel like losing the ground beneath you. The sadness, shame, and grief can sit heavy for a long time. Together, we'll create space for you to process your pain with compassion and care. I'll help you validate your emotions, honor your sorrow, and slowly rebuild your life piece by piece as you begin creating a new world around yourself.",
      icon: Compass,
      gradient: "from-amber-500/20 via-orange-400/10 to-transparent",
      iconColor: "text-amber-500",
      borderColor: "border-amber-200"
    },
    {
      title: "Life Coaching: Finding Your North Star",
      description: "As your life coach, I'll help you realign with what truly matters to you and guide you back to your sense of purpose. Whether it's reclaiming your self-worth, following through on the goals you've been putting off, or rediscovering your voice outside of relationships, this is about reconnecting with your inner compass and taking steps to bring that vision to life.",
      icon: Star,
      gradient: "from-emerald-500/20 via-teal-400/10 to-transparent",
      iconColor: "text-emerald-500",
      borderColor: "border-emerald-200"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-white via-shazmeen-blush/5 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Your Path to Healing & Growth
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Healing isn't about becoming someone new—it's about returning to yourself. Whether you're here as a couple wanting to reconnect, as someone navigating anxious attachment, moving through the heartbreak of divorce, or simply searching for your North Star again, this is your path to healing and growth.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
            Here's how I can support you along the way.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {helpAreas.map((area, index) => {
            const Icon = area.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 group`}
              >
                {/* Decorative blob */}
                <div className={`absolute ${isEven ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial ${area.gradient} rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 hidden lg:block`} />
                
                {/* Icon container */}
                <div className={`relative flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-[2rem] bg-gradient-to-br ${area.gradient} border-2 ${area.borderColor} flex items-center justify-center transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <Icon className={`w-16 h-16 md:w-20 md:h-20 ${area.iconColor} group-hover:scale-110 transition-transform duration-300`} />
                  
                  {/* Floating dots decoration */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${area.iconColor} bg-current opacity-60`} />
                  <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full ${area.iconColor} bg-current opacity-40`} />
                </div>
                
                {/* Content card */}
                <div className={`relative flex-1 p-8 md:p-10 bg-white rounded-3xl shadow-elegant hover:shadow-premium transition-all duration-500 border border-gray-100 group-hover:-translate-y-1`}>
                  {/* Curved accent line */}
                  <div className={`absolute top-0 ${isEven ? 'left-0 rounded-tl-3xl' : 'right-0 rounded-tr-3xl'} w-24 h-1 bg-gradient-to-r ${area.gradient.replace('/20', '').replace('/10', '')}`} />
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {area.description}
                  </p>
                  
                  {/* Bottom decorative element */}
                  <div className={`absolute bottom-4 ${isEven ? 'right-4' : 'left-4'} flex gap-1 opacity-30`}>
                    <div className={`w-2 h-2 rounded-full ${area.iconColor} bg-current`} />
                    <div className={`w-2 h-2 rounded-full ${area.iconColor} bg-current`} />
                    <div className={`w-2 h-2 rounded-full ${area.iconColor} bg-current`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIHelp;

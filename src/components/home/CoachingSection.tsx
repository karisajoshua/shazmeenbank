import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import shazmeenMedal from "@/assets/about/shazmeen-medal.png";

const CoachingSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Coaching for Relationships & Life
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            These aren't just sessions—they're a space to come back to yourself. Whether you're navigating love, identity shifts, or emotional blocks, we'll work together to create lasting change.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Feature with Image */}
          <div className="grid md:grid-cols-2 gap-0 mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative">
              <img 
                src={shazmeenMedal} 
                alt="Coaching journey"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-shazmeen-dark/20 md:block hidden" />
            </div>
            <div className="bg-shazmeen-dark p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 heading-elegant">
                Embodied Healing Approach
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                This isn't only about talking through your feelings. I use tools like hypnosis, guided meditation, and somatic (body-based) practices to help you regulate your nervous system and heal core wounds in a safe, embodied way.
              </p>
              <p className="text-white/90 leading-relaxed font-medium">
                The goal is not just to understand your patterns, but to transform them at their root.
              </p>
            </div>
          </div>
          
          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="group premium-card p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shazmeen-red/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant relative z-10">
                Individual Growth Creates Ripples
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                Even if your partner isn't ready to do the work, you can still grow. Often, your own healing creates a ripple effect - shifting the relationship in powerful ways. Sometimes, your change inspires your partner to join you.
              </p>
            </div>
            
            <div className="group premium-card p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-shazmeen-gold/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant relative z-10">
                Return to Your True Self
              </h3>
              <p className="text-gray-700 leading-relaxed relative z-10">
                No matter who you are - a mother, father, partner, entrepreneur - you deserve to know yourself deeply, to heal what hurts, and to build a life that feels true to you.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center bg-shazmeen-cream/50 rounded-3xl p-10">
            <p className="text-xl text-shazmeen-dark leading-relaxed mb-6 font-semibold">
              The goal is not to depend on me, but to learn how to trust and depend on yourself.
            </p>
            <Link to="/bookings">
              <Button className="btn-primary text-lg px-8 py-4">
                Begin 1:1 Healing Journey
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;


import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CoachingSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Coaching for Relationships & Life
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            These aren't just sessions—they're a space to come back to yourself. Whether you're navigating love, identity shifts, or emotional blocks, we'll work together to create lasting change within both your body and mind.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="premium-card p-8">
            <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
              Embodied Healing Approach
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This isn't only about talking through your feelings. I use tools like hypnosis, guided meditation, and somatic (body-based) practices to help you regulate your nervous system and heal core wounds in a safe, embodied way.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The goal is not just to understand your patterns, but to transform them at their root - so you can move through life with more clarity, calm, and confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Individual Growth Creates Ripples
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Even if your partner isn't ready to do the work, you can still grow. Often, your own healing creates a ripple effect - shifting the relationship in powerful ways. Sometimes, your change inspires your partner to join you in the work. Other times, the healing process shows you that the relationship has already given you what you needed to reach this moment of growth.
              </p>
            </div>
            
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Return to Your True Self
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No matter who you are - a mother, father, partner, entrepreneur, friend, or sibling - you deserve to know yourself deeply, to heal what hurts, and to build a life that feels true to you. My role as your coach isn't to give you all the answers, but to gently guide you - sometimes just two degrees - back to your own inner voice.
              </p>
            </div>
          </div>
          
          <div className="premium-card p-8 text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
              Because the goal is not to depend on me, but to learn how to trust and depend on yourself.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Either way, your transformation is never wasted.
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

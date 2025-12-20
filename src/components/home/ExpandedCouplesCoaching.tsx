import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import shazmeenMedalTogether from "@/assets/about/shazmeen-medal-together.png";

const ExpandedCouplesCoaching = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-shazmeen-cream to-white overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Couples Coaching
          </h2>
        </div>
        
        {/* Hero Card with Image */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={shazmeenMedalTogether} 
              alt="Couples connection"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark via-shazmeen-dark/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl">
                We aren't handed a manual on how to love each other, meet each other's needs, or move through conflict without damage. Most of us never learned how our attachment styles shape the way we give and receive love.
              </p>
            </div>
          </div>
        </div>
        
        {/* Feature Grid with Icons */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="group relative premium-card p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-shazmeen-red">
              <div className="absolute top-0 right-0 w-24 h-24 bg-shazmeen-red/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Understanding & Connection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You'll understand why your partner shuts down or pulls away, and why others chase closeness so intensely. Learn to turn these differences into doorways for deeper intimacy.
              </p>
            </div>
            
            <div className="group relative premium-card p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-shazmeen-gold">
              <div className="absolute top-0 right-0 w-24 h-24 bg-shazmeen-gold/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Rebuilding Trust
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Whether you're rebuilding trust after infidelity or repairing smaller fractures—like secrecy, broken promises, or unspoken resentments—we'll begin healing with honesty and compassion.
              </p>
            </div>
            
            <div className="group relative premium-card p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-shazmeen-dark">
              <div className="absolute top-0 right-0 w-24 h-24 bg-shazmeen-dark/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Emotional & Physical Intimacy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Explore how to reconnect emotionally and physically, and how to keep intimacy alive in a way that feels safe and fulfilling for both of you.
              </p>
            </div>
            
            <div className="group relative premium-card p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-shazmeen-red">
              <div className="absolute top-0 right-0 w-24 h-24 bg-shazmeen-red/10 rounded-bl-full" />
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Family & Life Balance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Navigate children, in-laws, or competing family demands while staying aligned as a couple. Balance autonomy with togetherness.
              </p>
            </div>
          </div>
          
          {/* Vision Section */}
          <div className="relative bg-shazmeen-dark rounded-3xl p-10 md:p-16 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-shazmeen-red/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-shazmeen-gold/20 rounded-full blur-3xl" />
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 heading-elegant">
                Creating Your Shared Vision
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                A healthy relationship isn't only about resolving today's arguments; it's about creating a shared horizon for tomorrow. The work you do here doesn't just transform your partnership—it ripples outward into your family, your friendships, and the light you give to the world.
              </p>
              <Link to="/bookings">
                <Button className="bg-white text-shazmeen-dark hover:bg-shazmeen-cream text-lg px-8 py-4">
                  Begin Couples Healing Together
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandedCouplesCoaching;

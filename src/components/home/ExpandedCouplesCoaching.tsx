import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ExpandedCouplesCoaching = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Couples Coaching
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="premium-card p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We aren't handed a manual on how to love each other, meet each other's needs, or move through conflict without damage. Most of us never learned how our attachment styles, childhood experiences, and unresolved wounds shape the way we give and receive love once the early romance fades.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              And no one teaches us that conflict can actually be healthy. We're told that "healthy relationships need tough conversations," but no one shows us how to have them—or why they so often go wrong. Here, you'll learn how to repair after conflict, lead hard conversations with courage, and walk away from them feeling heard, seen, and even more connected.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Understanding & Connection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You'll understand why your partner shuts down or pulls away, and why others chase closeness so intensely. Most importantly, you'll learn how to turn these differences into doorways for deeper intimacy, not walls that push you apart.
              </p>
            </div>
            
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Rebuilding Trust
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Whether you're rebuilding trust after infidelity or trying to understand what led to the affair in the first place, this is a space without judgment. We'll also look at the smaller fractures that wear away at trust—like secrecy, broken promises, or unspoken resentments—and begin repairing them with honesty and compassion.
              </p>
            </div>
            
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Emotional & Physical Intimacy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Couples often come here not just because of conflict, but because they feel emotionally distant. You may long for more intimacy, affection, and closeness, or feel the weight of mismatched desire. Together we'll explore how to reconnect emotionally and physically, and how to keep intimacy alive in a way that feels safe and fulfilling for both of you.
              </p>
            </div>
            
            <div className="premium-card p-8">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                Family & Life Balance
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Family and parenting pressures can also strain even strong partnerships. Coaching gives you tools to stay aligned as a couple, even while navigating children, in-laws, or competing family demands. You'll learn to balance autonomy with togetherness—holding on to your individuality while still choosing to grow as a team.
              </p>
            </div>
          </div>
          
          <div className="premium-card p-8">
            <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
              Creating Your Shared Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This is also about vision. A healthy relationship isn't only about resolving today's arguments; it's about creating a shared horizon for tomorrow. We'll uncover the values and dreams that matter most to each of you, and find ways to weave them into a future that feels secure, connected, and worth building together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              The work you do here doesn't just transform your partnership—it ripples outward into your family, your friendships, and the light you give to the world.
            </p>
          </div>
          
          <div className="text-center">
            <Link to="/bookings">
              <Button className="btn-primary text-lg px-8 py-4">
                Begin Couples Healing Together
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpandedCouplesCoaching;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Users, Heart, Shield, MessageCircle, ArrowRight, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import shazmeenMedalTogether from "@/assets/about/shazmeen-medal-together.png";
import shazmeenMedal from "@/assets/about/shazmeen-medal.png";

const CouplesCoaching = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={shazmeenMedalTogether}
            alt="Couples Coaching"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative container-custom text-center py-32 pt-40">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD0061]/20 text-[#FD0061] mb-6">
              <Users className="w-4 h-4" />
              Relationship Transformation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
              Couples Coaching
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Rebuild safety, improve communication, and navigate conflict with 
              understanding and empathy. Learn to lead with compassion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bookings?service=2">
                <Button className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white px-8 py-6 text-lg group">
                  Book Couples Session
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-gray-300">
              75-minute session • $510 • On Zoom
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Understanding Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                We Aren't Handed a Manual on Love
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Most of us never learned how our attachment styles shape the way we give and receive love. 
                Whether you're struggling with recurring arguments, emotional disconnection, or mismatched needs, 
                this guided session helps you both uncover what's really happening beneath the surface.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Understanding & Connection",
                description: "Understand why your partner shuts down or pulls away, and why others chase closeness. Turn these differences into doorways for deeper intimacy.",
                color: "border-l-[#FD0061]"
              },
              {
                icon: Shield,
                title: "Rebuilding Trust",
                description: "Whether rebuilding after infidelity or repairing smaller fractures—secrecy, broken promises, or resentments—we begin healing with honesty and compassion.",
                color: "border-l-amber-500"
              },
              {
                icon: Heart,
                title: "Emotional & Physical Intimacy",
                description: "Explore how to reconnect emotionally and physically in a way that feels safe and fulfilling for both of you.",
                color: "border-l-purple-500"
              },
              {
                icon: Users,
                title: "Family & Life Balance",
                description: "Navigate children, in-laws, or competing demands while staying aligned as a couple. Balance autonomy with togetherness.",
                color: "border-l-teal-500"
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className={`bg-zinc-900 border-l-4 ${item.color} rounded-xl p-6 h-full hover:bg-zinc-800/50 transition-colors`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-zinc-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What You'll Discover Together
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We'll explore your attachment styles, communication patterns, and the unspoken needs 
                driving your reactions. You'll learn how to pause reactivity, repair after conflict, 
                and create space for vulnerability.
              </p>

              <div className="space-y-4">
                {[
                  "Conflict resolution and repair tools",
                  "Emotional safety rebuilding techniques",
                  "Communication clarity & empathy training",
                  "Attachment understanding & integration",
                  "How to ask for what you need safely",
                  "Leading back to safety & love"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative">
                <img 
                  src={shazmeenMedal}
                  alt="Couples healing"
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Resolution Method Preview */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <ScrollReveal>
            <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 md:p-12 border border-zinc-700 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FD0061]/10 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FD0061]/20 text-[#FD0061] text-sm mb-4">
                    <Clock className="w-3 h-3" />
                    Signature Program
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    The Resolution Method
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Feeling on the edge of divorce or a breakup? This 9-week immersive program is 
                    designed for couples ready to completely transform how they experience conflict, 
                    communication, and connection.
                  </p>
                  <p className="text-gray-400 text-sm mb-6">
                    9 weekly 75-minute sessions • Workbook included • $3,375
                  </p>
                  <Link to="/bookings?service=3">
                    <Button className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white">
                      Learn About Resolution Method
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Conflict transformation & repair tools",
                    "Emotional rewiring & nervous system regulation",
                    "Shifting from 'conflict mind' to 'loving heart'",
                    "Writing a new shared vision together"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-zinc-800/50 p-3 rounded-lg">
                      <Check className="w-4 h-4 text-[#FD0061]" />
                      <span className="text-gray-200 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#FD0061]/20 via-zinc-900 to-zinc-900">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Creating Your Shared Vision
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                A healthy relationship isn't only about resolving today's arguments; it's about 
                creating a shared horizon for tomorrow. The work you do here doesn't just transform 
                your partnership—it ripples outward into your family, your friendships, and the 
                light you give to the world.
              </p>
              <p className="text-gray-400 mb-8">
                These sessions aren't about who's right or wrong; they're about learning to lead 
                with compassion while still holding your boundaries and voice.
              </p>
              <Link to="/bookings?service=2">
                <Button className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white px-10 py-6 text-xl group">
                  Book Couples Session
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="mt-6 text-gray-400">
                75 minutes • $510 • Conducted on Zoom
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default CouplesCoaching;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Heart, Sparkles, Shield, Brain, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TidyCalModal from "@/components/bookings/TidyCalModal";
import shazmeenHeart from "@/assets/about/shazmeen-heart.png";
import shazmeenMedal from "@/assets/about/shazmeen-medal.png";

const OneOnOneCoaching = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={shazmeenHeart}
            alt="1:1 Attachment Style Healing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>
        
        <div className="relative container-custom text-center py-32 pt-40">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD0061]/20 text-[#FD0061] mb-6">
              <Heart className="w-4 h-4" />
              Personal Transformation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
              1:1 Attachment Style Healing
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Come home to yourself. Regulate your nervous system, heal core wounds, 
              and build the emotional freedom you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setBookingOpen(true)}
                className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white px-8 py-6 text-lg group"
              >
                Book 1:1 Self Healing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="mt-6 text-gray-300">
              60-minute session • $375 • On Zoom
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What You'll Experience
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                This private session is designed for individuals ready to feel grounded, 
                emotionally regulated, and clear in love and in life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Personal Healing Guidance",
                description: "Explore your attachment patterns with personalized, compassionate support"
              },
              {
                icon: Shield,
                title: "Emotional Regulation Tools",
                description: "Learn techniques to regulate your nervous system and find calm"
              },
              {
                icon: Brain,
                title: "Pattern Recognition",
                description: "Understand the beliefs keeping you stuck in old emotional loops"
              },
              {
                icon: Sparkles,
                title: "Customized Action Plan",
                description: "Leave with practical tools and a clear path forward"
              }
            ].map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 h-full hover:border-[#FD0061]/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#FD0061]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#FD0061]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src={shazmeenMedal}
                  alt="Healing approach"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#FD0061] text-white p-6 rounded-2xl shadow-xl max-w-xs">
                  <p className="font-semibold text-lg">
                    "The goal is not just to understand your patterns, but to transform them at their root."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The Embodied Healing Approach
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                This isn't only about talking through your feelings. I use tools like hypnosis, 
                guided meditation, and somatic (body-based) practices to help you regulate your 
                nervous system and heal core wounds in a safe, embodied way.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're navigating a relationship, healing from one, or reconnecting with yourself, 
                this session helps you process what's heavy and return to your center with clarity and compassion.
              </p>

              <div className="space-y-3">
                {[
                  "Safe space for inner child healing",
                  "Nervous system regulation techniques",
                  "Attachment pattern exploration",
                  "Practical tools you can use daily"
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
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                This Session Is For You If...
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {[
                  "You feel anxious in relationships and want to feel secure",
                  "You struggle with emotional regulation and reactivity",
                  "You want to understand your attachment patterns",
                  "You're healing from a breakup or relationship trauma",
                  "You want to reconnect with yourself and your needs",
                  "You're ready to break free from old emotional loops"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-zinc-900 p-4 rounded-xl">
                    <Check className="w-5 h-5 text-[#FD0061] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
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
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Book your 1:1 Attachment Style Healing session and start coming home to yourself.
              </p>
              <Link to="/bookings?service=1">
                <Button className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white px-10 py-6 text-xl group">
                  Book 1:1 Self Healing
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <p className="mt-6 text-gray-400">
                60 minutes • $375 • Conducted on Zoom
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default OneOnOneCoaching;

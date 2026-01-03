import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Heart, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BookingModal from "@/components/bookings/BookingModal";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Import images from gallery
import shazmeenHeart from "@/assets/about/shazmeen-heart.png";
import shazmeenMedal from "@/assets/about/shazmeen-medal.png";
import shazmeenMedalTogether from "@/assets/about/shazmeen-medal-together.png";

// Hero background from Supabase
const heroBackground = "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1765556247954-taibp9.png";

const services = [
  {
    id: 1,
    title: "1:1 Attachment Style Healing",
    price: "$375",
    duration: "60 minutes on Zoom",
    description: "This private 1:1 session is designed for individuals who want to feel grounded, emotionally regulated, and clear in love and in life. Whether you're navigating a relationship, healing from one, or reconnecting with yourself, this session helps you process what's heavy and return to your center with clarity and compassion.",
    fullDescription: "Through personalized guidance, we'll explore your attachment patterns, regulate your nervous system, and begin to rewire the beliefs that keep you stuck in old emotional loops. You'll leave with practical tools and a deeper understanding of what your emotions are trying to tell you—so you can respond, not react, and feel safe in your own body again.",
    subtitle: "Book your 1:1 Attachment Style Healing session—and start coming home to yourself.",
    icon: Heart,
    image: shazmeenHeart,
    accent: "from-rose-500/20 to-amber-500/20",
    ctaText: "Book 1:1 Self Healing",
    features: [
      "Personal healing guidance",
      "Emotional regulation tools", 
      "Relationship clarity",
      "Customized action plan"
    ]
  },
  {
    id: 2,
    title: "Couples Coaching",
    price: "$510", 
    duration: "75 minutes on Zoom",
    description: "This session is for partners who are ready to rebuild safety, improve communication, and navigate conflict with more understanding and empathy. Whether you're struggling with recurring arguments, emotional disconnection, or mismatched needs, this guided 75-minute session helps you both uncover what's really happening beneath the surface.",
    fullDescription: "We'll explore your attachment styles, communication patterns, and the unspoken needs driving your reactions. You'll learn how to pause reactivity, repair after conflict, and create space for vulnerability—so you can feel seen, heard, and secure again. These sessions aren't about who's right or wrong; they're about learning to lead with compassion while still holding your boundaries and voice.",
    subtitle: "Book your Couples Coaching Session and start building the relationship you both long to come home to.",
    icon: Users,
    image: shazmeenMedalTogether,
    accent: "from-purple-500/20 to-pink-500/20",
    ctaText: "Book Couples Session",
    features: [
      "Conflict resolution and repair tools",
      "Emotional safety rebuilding techniques",
      "Communication clarity & empathy training",
      "Attachment understanding & integration practices"
    ]
  },
  {
    id: 3,
    title: "The Resolution Method",
    price: "$3,375",
    duration: "9 Weeks",
    description: "Feeling on the edge of divorce or a breakup? The Resolution Method is a 9-week immersive program designed for couples ready to completely transform how they experience conflict, communication, and connection.",
    fullDescription: "Each week, you'll learn how to recognize your attachment triggers, regulate during conflict, and lead difficult conversations with compassion instead of defense. With weekly structure, emotional rewiring, and practical skill-building, you'll begin to experience a new dynamic—one where both partners feel seen, valued, and capable of creating change.",
    subtitle: "Book The Resolution Method and learn how to lead your relationship through repair, not rupture.",
    additionalInfo: "Led by Shazmeen Bank, Certified Conflict-Resolution Facilitator",
    icon: Clock,
    image: shazmeenMedal,
    accent: "from-teal-500/20 to-emerald-500/20",
    ctaText: "Book Resolution Method",
    features: [
      "Workbook included",
      "9 weekly 75-minute coaching sessions",
      "Conflict transformation & repair tools",
      "Emotional rewiring & nervous system regulation",
      "Understanding Avoidant and Anxious attachment styles",
      "Holding space for each other's pain, fears, and yearnings",
      "Shifting from 'conflict mind' to 'loving heart'",
      "Writing a new shared vision for your relationship",
      "Developing new communication strategies",
      "Learning how to ask for what you need safely",
      "Practicing vulnerable sharing",
      "Becoming a master at leading back to safety & love"
    ],
    isIntensive: true
  }
];

const Bookings = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Handle URL service parameter
  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      const serviceNum = parseInt(serviceId, 10);
      const service = services.find(s => s.id === serviceNum);
      if (service) {
        setExpandedService(serviceNum);
        setSelectedService(service);
        setBookingModalOpen(true);
      }
    }
  }, [searchParams]);

  const handleBookService = (service: typeof services[0]) => {
    // Redirect to landing pages for 1:1 and Couples, open modal for Resolution Method
    if (service.id === 1) {
      navigate('/one-on-one-coaching');
    } else if (service.id === 2) {
      navigate('/couples-coaching');
    } else {
      setSelectedService(service);
      setBookingModalOpen(true);
    }
  };

  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FD0061]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="relative container-custom text-center py-32 pt-40">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD0061]/20 text-[#FD0061] mb-6">
              <Sparkles className="w-4 h-4" />
              Begin Your Transformation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Book a Healing Session
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're navigating your own healing or working through challenges in your relationship, 
              you're in the right place. These sessions move at your pace—a space for inner child healing, 
              nervous system regulation, and gentle self-discovery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              const isExpanded = expandedService === service.id;
              
              return (
                <ScrollReveal key={service.id} delay={index * 0.1}>
                  <div className={`relative ${service.isIntensive ? 'pt-8' : ''}`}>
                    {/* Intensive badge */}
                    {service.isIntensive && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-[#FD0061] to-rose-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                          ✨ Signature Program
                        </span>
                      </div>
                    )}
                    
                    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image Section */}
                      <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          
                          {/* Price overlay */}
                          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg">
                              <p className="text-sm text-gray-600">{service.duration}</p>
                              <p className="text-2xl font-bold text-black">{service.price}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                          {service.title}
                        </h2>
                        
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-4"
                          >
                            <p className="text-gray-300 leading-relaxed mb-4">
                              {service.fullDescription}
                            </p>
                            {service.additionalInfo && (
                              <p className="text-[#FD0061] font-medium italic mb-4">
                                {service.additionalInfo}
                              </p>
                            )}
                          </motion.div>
                        )}
                        
                        <button
                          onClick={() => setExpandedService(isExpanded ? null : service.id)}
                          className="text-[#FD0061] font-medium mb-6 hover:underline inline-flex items-center gap-1"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                          <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                        
                        <p className="text-white font-semibold italic mb-6 border-l-4 border-[#FD0061] pl-4">
                          {service.subtitle}
                        </p>
                        
                        {/* Features Grid */}
                        <div className="bg-zinc-900 rounded-2xl p-6 mb-6 border border-zinc-800">
                          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[#FD0061]" />
                            What's Included
                          </h3>
                          <div className={`grid ${service.features.length > 6 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'} gap-3`}>
                            {service.features.slice(0, isExpanded ? undefined : 4).map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 text-green-400" />
                                </div>
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          {service.features.length > 4 && !isExpanded && (
                            <p className="text-sm text-[#FD0061] mt-3">
                              +{service.features.length - 4} more benefits included
                            </p>
                          )}
                        </div>
                        
                        <Button 
                          className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white px-8 py-6 text-lg group"
                          onClick={() => handleBookService(service)}
                        >
                          {service.ctaText || `Book ${service.title}`}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FD0061]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Begin Your Healing Journey?
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                All sessions are conducted with compassion, clarity, and practical tools that create real change. 
                Choose the option that feels right for where you are in your journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Zoom sessions available worldwide</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Personalized approach</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-400">
                Have questions? Email us at{" "}
                <a href="mailto:shazmeen@shazmeenbank.com" className="text-[#FD0061] hover:underline">
                  shazmeen@shazmeenbank.com
                </a>
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        service={selectedService}
      />
    </>
  );
};

export default Bookings;

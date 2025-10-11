
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Secure Self Session",
    price: "$375",
    duration: "60 minutes on Zoom",
    description: "This private 1:1 session is designed for individuals who want to feel grounded, emotionally regulated, and clear in love and in life. Whether you're navigating a relationship, healing from one, or reconnecting with yourself, this session helps you process what's heavy and return to your center with clarity and compassion.\n\nThrough personalized guidance, we'll explore your attachment patterns, regulate your nervous system, and begin to rewire the beliefs that keep you stuck in old emotional loops. You'll leave with practical tools and a deeper understanding of what your emotions are trying to tell you—so you can respond, not react, and feel safe in your own body again.",
    subtitle: "Book your Secure Self Session—and start coming home to yourself.",
    icon: Heart,
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
    description: "This session is for partners who are ready to rebuild safety, improve communication, and navigate conflict with more understanding and empathy. Whether you're struggling with recurring arguments, emotional disconnection, or mismatched needs, this guided 75-minute session helps you both uncover what's really happening beneath the surface.\n\nWe'll explore your attachment styles, communication patterns, and the unspoken needs driving your reactions. You'll learn how to pause reactivity, repair after conflict, and create space for vulnerability—so you can feel seen, heard, and secure again. These sessions aren't about who's right or wrong; they're about learning to lead with compassion while still holding your boundaries and voice.",
    subtitle: "Book your Couples Coaching Session and start building the relationship you both long to come home to.",
    icon: Users,
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
    description: "Feeling on the edge of divorce or a breakup? The Resolution Method is a 9-week immersive program designed for couples ready to completely transform how they experience conflict, communication, and connection. Together, we'll unravel the emotional patterns that keep you stuck and rebuild a foundation of safety, trust, and mutual understanding.\n\nEach week, you'll learn how to recognize your attachment triggers, regulate during conflict, and lead difficult conversations with compassion instead of defense. With weekly structure, emotional rewiring, and practical skill-building, you'll begin to experience a new dynamic—one where both partners feel seen, valued, and capable of creating change.\n\nLed by Shazmeen Bank, Certified Conflict-Resolution Facilitator, this program provides a safe space for both of you to heal, grow, and learn how to lead your relationship forward securely, consciously, and with love.",
    subtitle: "Book The Resolution Method and learn how to lead your relationship through repair, not rupture.",
    additionalInfo: "9 weekly 75-minute coaching sessions",
    icon: Clock,
    features: [
      "Workbook",
      "9 weekly 75-minute coaching sessions",
      "Conflict transformation & repair tools",
      "Emotional rewiring & nervous system regulation techniques",
      "Understanding Avoidant and Anxious attachment styles—and how to work with both dynamics",
      "Learning to hold space for each other's pain, fears, and deepest yearnings",
      "Shifting from 'conflict mind' to 'loving heart,' where compassion leads every hard conversation",
      "Writing a new shared vision for your relationship and creating the roadmap to live it",
      "Discovering the four truths that anchor and sustain your partnership",
      "Developing new ways to communicate through tough conversations without defensiveness or shutdown",
      "Learning how to ask for what you need—and feel safe being seen in it",
      "Practicing vulnerable sharing in a space that feels emotionally secure",
      "Becoming a master at leading your relationship back to safety, connection, and love"
    ],
    isIntensive: true
  }
];

const Bookings = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleBookService = (serviceId: number) => {
    setSelectedService(serviceId);
    // In a real app, this would redirect to booking/payment
    console.log(`Booking service ${serviceId}`);
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-24 pt-32">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Book a Session</h1>
            <p className="text-xl text-shazmeen-gray leading-relaxed">
              Whether you're navigating your own healing or working through challenges in your relationship, you're in the right place.
            </p>
            <p className="text-xl text-shazmeen-gray leading-relaxed mt-4">
              In our sessions—whether 1:1 or as a couple—we'll explore the patterns beneath your reactions, strengthen communication, and build emotional safety that allows healing to unfold naturally. You'll learn to move through conflict with clarity, compassion, and understanding, while finding new ways of feeling and thinking that already live within you.
            </p>
            <p className="text-xl text-shazmeen-gray leading-relaxed mt-4">
              These sessions move at your pace. They're a space for inner child healing, nervous system regulation, and gentle self-discovery. My role is to guide you just a few degrees closer to your own wisdom and truth. Because everything you're searching for is already within you.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map(service => {
              const IconComponent = service.icon;
              return (
                <div key={service.id} className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 ${service.isIntensive ? 'border-shazmeen-red' : 'border-gray-100'}`}>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-shazmeen-red/10 rounded-full flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-shazmeen-red" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-shazmeen-dark">{service.title}</h2>
                          <p className="text-gray-600 mt-1">{service.duration}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-shazmeen-red">{service.price}</div>
                        {service.isIntensive && (
                          <div className="text-sm text-gray-500">9 weekly sessions</div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                    <p className="text-shazmeen-dark font-medium mb-4">{service.subtitle}</p>
                    
                    {service.additionalInfo && (
                      <p className="text-gray-600 mb-6 italic">{service.additionalInfo}</p>
                    )}

                    <div className="mb-8">
                      <h3 className="font-semibold text-shazmeen-dark mb-4">What's Included:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="btn-primary px-8 py-4 text-lg"
                      onClick={() => handleBookService(service.id)}
                    >
                      Book {service.title}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-shazmeen-dark mb-6">Ready to Begin Your Healing Journey?</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              All sessions are conducted with compassion, clarity, and practical tools that create real change. 
              Choose the option that feels right for where you are in your journey.
            </p>
            <p className="text-sm text-gray-600">
              Have questions? Email us at <a href="mailto:info@shazmeenbank.com" className="text-shazmeen-red hover:underline">info@shazmeenbank.com</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookings;

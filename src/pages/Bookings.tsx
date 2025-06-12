
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Users, Heart } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Secure Self Session",
    price: "$375",
    duration: "60 minutes",
    description: "For individuals seeking clarity, emotional regulation, and personalized guidance for a current relationship or healing journey.",
    subtitle: "60-min private session to help you process, regulate, and realign",
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
    duration: "75 minutes",
    description: "For partners committed to moving through conflict, improving communication, and rebuilding safety together.",
    subtitle: "75-min guided session for deeper connection and conflict navigation",
    icon: Users,
    features: [
      "Conflict resolution tools",
      "Communication improvement",
      "Safety rebuilding",
      "Attachment understanding"
    ]
  },
  {
    id: 3,
    title: "The Resolution Method",
    price: "$3,375",
    duration: "9 weeks",
    description: "Feeling on the edge of divorce or a break up? These sessions are for couples ready to completely shift how they experience conflict & have their needs met while understanding how to approach each others attachment style — with weekly structure, emotional rewiring, and practical skill-building led by a certified conflict resolution facilitator, while also understanding how to approach each other more securely attached.",
    subtitle: "This program is a commitment to each other with a promise of learning how to lead in a safe environment.",
    additionalInfo: "Weekly 75minute coaching + tools to completely shift how you relate to conflict",
    icon: Clock,
    features: [
      "9 weekly 75-minute sessions",
      "Conflict transformation tools",
      "Attachment style guidance", 
      "Emotional rewiring techniques",
      "Certified facilitation",
      "Comprehensive relationship restructuring"
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
              Book a 1:1 or couples session to explore patterns, improve communication, and build emotional safety, heal through conflict — with clarity, compassion, and real tools that create change.
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

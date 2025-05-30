import React from "react";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Heart, Brain } from "lucide-react";

const FreeResources = () => {
  const resources = [
    {
      title: "Attachment Style Assessment",
      description: "Discover your attachment style and learn how it impacts your relationships. A comprehensive guide to understanding your patterns.",
      icon: Heart,
      downloadUrl: "#"
    }, {
      title: "Self-Worth Reflection Journal",
      description: "30 powerful prompts to help you reconnect with your inner voice and build unshakeable self-confidence.",
      icon: BookOpen,
      downloadUrl: "#"
    }, {
      title: "Boundary Setting Toolkit",
      description: "Scripts, strategies, and exercises to help you set healthy boundaries in all areas of your life.",
      icon: Brain,
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Free Tools for Growth & Clarity
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Start where you are—with no pressure. These free downloads are created to help you reconnect with yourself, reflect on what you truly need, and take your next step forward.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-premium p-8 hover:shadow-premium-hover transition-all duration-300">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-shazmeen-blush/20 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-shazmeen-red" />
                    </div>
                    <h3 className="text-2xl font-bold text-shazmeen-dark mb-4">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {resource.description}
                    </p>
                  </div>
                  <Button className="w-full bg-shazmeen-dark text-white hover:bg-opacity-90 transition-all duration-300 rounded-xl px-6 py-3 font-bold">
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-dark mb-6 font-serif">
              Ready for Deeper Transformation?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              These free tools are just the beginning. If you're ready to dive deeper into your healing journey, explore my courses and coaching options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-shazmeen-dark text-white hover:bg-opacity-90 transition-all duration-300 rounded-xl px-8 py-4 font-bold text-lg">
                View Courses
              </Button>
              <Button className="border-2 border-shazmeen-dark text-shazmeen-dark bg-white hover:bg-shazmeen-dark hover:text-white transition-all duration-300 rounded-xl px-8 py-4 font-bold text-lg">
                Book 1:1 Coaching
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreeResources;

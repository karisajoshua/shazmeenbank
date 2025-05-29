
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones } from "lucide-react";

const PodcastSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            The Love Better Podcast
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Conversations that make you feel seen. Each week, I dive into real-life relationship struggles, emotional growth, and the work of becoming grounded, secure, and self-led. Two weekly episodes.
          </p>
          <Link to="/podcast">
            <Button className="btn-primary text-lg px-8 py-4 flex items-center gap-2 mx-auto">
              <Headphones size={20} />
              Listen to Podcast
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;

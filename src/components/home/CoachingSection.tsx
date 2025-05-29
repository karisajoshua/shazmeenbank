
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CoachingSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-shazmeen-secondary/10 to-shazmeen-blush/20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Coaching for Relationships & Life
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            These aren't just sessions—they're a space to come back to yourself. Whether you're navigating love, identity shifts, or emotional blocks, we work together to create lasting change.
          </p>
          <Link to="/bookings">
            <Button className="btn-primary text-lg px-8 py-4">
              Begin 1:1 Healing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;

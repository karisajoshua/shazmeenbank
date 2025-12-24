import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="section-padding text-white bg-zinc-900">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-gray-400">
            Join thousands of people who have transformed their mindset and mastered their future with Shazmeen Bank.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses">
              <Button className="btn-primary">Start Learning</Button>
            </Link>
            <Link to="/bookings">
              <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-black">
                Book a Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
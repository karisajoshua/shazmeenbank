
import React from "react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="section-padding bg-shazmeen-dark text-shazmeen-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-shazmeen-gray mb-8">
            Join thousands of people who have transformed their mindset and mastered their future with Shazmeen Bank.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-primary">Start Learning</Button>
            <Button variant="outline" className="border-shazmeen-white text-shazmeen-white hover:bg-shazmeen-white hover:text-shazmeen-dark">
              Book a Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

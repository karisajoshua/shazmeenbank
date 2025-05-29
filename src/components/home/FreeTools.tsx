
import React from "react";
import { Button } from "@/components/ui/button";

const FreeTools = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Free Tools for Growth & Clarity
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Start where you are—with no pressure. These free downloads are created to help you reconnect with yourself, reflect on what you truly need, and take your next step forward.
          </p>
          <Button className="btn-outline text-lg px-8 py-4">
            Access Free Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FreeTools;

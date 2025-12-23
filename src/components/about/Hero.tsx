import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white pt-32 pb-16">
      <div className="container-custom">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Shazmeen Bank</h1>
            <p className="text-2xl font-serif italic text-[#FD0061] mt-4">
              My Journey, Real and Raw
            </p>
            <p className="text-xl text-gray-300 mt-6">
              DEDICATING MY LIFE TO SERVING THOSE SEEKING TO EXCEL IN EVERY AREA OF THEIR LIVES.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;

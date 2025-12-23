import React from "react";
import Hero from "@/components/about/Hero";
import PersonalStory from "@/components/about/PersonalStory";
import LifeGallery from "@/components/about/LifeGallery";
import CtaSection from "@/components/about/CtaSection";

const About = () => {
  return (
    <>
      {/* Header Section with Mission Statement */}
      <Hero />

      {/* Personal Story Section */}
      <PersonalStory />

      {/* Life Beyond Coaching Gallery */}
      <LifeGallery />

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default About;

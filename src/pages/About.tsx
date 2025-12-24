import React from "react";
import Hero from "@/components/about/Hero";
import PersonalStory from "@/components/about/PersonalStory";
import CtaSection from "@/components/about/CtaSection";

const About = () => {
  return (
    <>
      {/* Header Section with Mission Statement */}
      <Hero />

      {/* Personal Story Section */}
      <PersonalStory />

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default About;

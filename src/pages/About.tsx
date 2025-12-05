
import React from "react";
import Hero from "@/components/about/Hero";
import PersonalStory from "@/components/about/PersonalStory";
import CtaSection from "@/components/about/CtaSection";
import LogoCarousel from "@/components/LogoCarousel";

const About = () => {
  return (
    <>
      {/* Header Section with Mission Statement */}
      <Hero />

      {/* Personal Story Section */}
      <PersonalStory />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default About;


import React from "react";
import Hero from "@/components/about/Hero";
import PersonalStory from "@/components/about/PersonalStory";
import MediaFeatures from "@/components/about/MediaFeatures";
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
      
      {/* Media Features Section */}
      <MediaFeatures />

      {/* CTA */}
      <CtaSection />
    </>
  );
};

export default About;


import { useState } from "react";
import VideoHero from "@/components/VideoHero";
import HeroTextSection from "@/components/home/HeroTextSection";
import FullWidthCTASections from "@/components/home/FullWidthCTASections";
import LogoCarousel from "@/components/LogoCarousel";
import HowIHelp from "@/components/home/HowIHelp";
import CoursesTransformation from "@/components/home/CoursesTransformation";
import PodcastSection from "@/components/home/PodcastSection";
import FreeTools from "@/components/home/FreeTools";
import NewWayToLove from "@/components/home/NewWayToLove";
import NewsletterReset from "@/components/home/NewsletterReset";
import ClosingMessage from "@/components/home/ClosingMessage";
import CourseWaitlistPopup from "@/components/popups/CourseWaitlistPopup";
import NewsletterSignupPopup from "@/components/popups/NewsletterSignupPopup";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  const handleWaitlistClick = () => {
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  const handleNewsletterClick = () => {
    setIsNewsletterOpen(true);
  };

  const handleCloseNewsletter = () => {
    setIsNewsletterOpen(false);
  };

  return (
    <>
      {/* Hero Section with Background Video */}
      <VideoHero />

      {/* Moved Hero Text */}
      <HeroTextSection />

      {/* Full Width CTA Sections: Podcast, Newsletter, Free Resources */}
      <FullWidthCTASections onNewsletterClick={handleNewsletterClick} />

      {/* Your Path to Healing & Growth Section */}
      <HowIHelp />

      {/* Courses for Transformation */}
      <CoursesTransformation onWaitlistClick={handleWaitlistClick} />

      {/* A New Way to Love - Anxious Attachment */}
      <NewWayToLove />

      {/* The Love Better Podcast */}
      <PodcastSection />

      {/* Free Tools */}
      <FreeTools />

      {/* Newsletter Reset */}
      <NewsletterReset onNewsletterClick={handleNewsletterClick} />

      {/* Closing Message with Social Links */}
      <ClosingMessage />

      {/* Featured In - moved to just above footer */}
      <LogoCarousel />

      {/* Waitlist Popup */}
      <CourseWaitlistPopup
        isOpen={isWaitlistOpen}
        onClose={handleCloseWaitlist}
        course={{
          title: "Unlearn. Rebuild. Love Better.",
          description: "Transform your attachment patterns and step into your worth"
        }}
      />

      {/* Newsletter Popup */}
      <NewsletterSignupPopup
        isOpen={isNewsletterOpen}
        onClose={handleCloseNewsletter}
      />
    </>
  );
};

export default Index;

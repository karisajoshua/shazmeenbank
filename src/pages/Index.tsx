
import { useState } from "react";
import VideoHero from "@/components/VideoHero";
import LogoCarousel from "@/components/LogoCarousel";
import HowIHelp from "@/components/home/HowIHelp";
import CoursesTransformation from "@/components/home/CoursesTransformation";
import PodcastSection from "@/components/home/PodcastSection";
import FreeTools from "@/components/home/FreeTools";
import NewWayToLove from "@/components/home/NewWayToLove";
import ExpandedCouplesCoaching from "@/components/home/ExpandedCouplesCoaching";
import CoachingSection from "@/components/home/CoachingSection";
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
      {/* Hero Section with Background Image */}
      <VideoHero onWaitlistClick={handleWaitlistClick} />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Your Path to Healing & Growth Section */}
      <HowIHelp />

      {/* Courses for Transformation */}
      <CoursesTransformation onWaitlistClick={handleWaitlistClick} />

      {/* A New Way to Love - Anxious Attachment */}
      <NewWayToLove />

      {/* Expanded Couples Coaching */}
      <ExpandedCouplesCoaching />

      {/* The Love Better Podcast */}
      <PodcastSection />

      {/* Free Tools */}
      <FreeTools />

      {/* Enhanced Coaching Section */}
      <CoachingSection />

      {/* Newsletter Reset */}
      <NewsletterReset onNewsletterClick={handleNewsletterClick} />

      {/* Closing Message with Social Links */}
      <ClosingMessage />

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

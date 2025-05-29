
import { useState } from "react";
import VideoHero from "@/components/VideoHero";
import LogoCarousel from "@/components/LogoCarousel";
import HowIHelp from "@/components/home/HowIHelp";
import CoursesTransformation from "@/components/home/CoursesTransformation";
import PodcastSection from "@/components/home/PodcastSection";
import FreeTools from "@/components/home/FreeTools";
import CouplesCoaching from "@/components/home/CouplesCoaching";
import CoachingSection from "@/components/home/CoachingSection";
import NewsletterReset from "@/components/home/NewsletterReset";
import ClosingMessage from "@/components/home/ClosingMessage";
import CourseWaitlistPopup from "@/components/popups/CourseWaitlistPopup";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleWaitlistClick = () => {
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <VideoHero onWaitlistClick={handleWaitlistClick} />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* How I Help You Grow Section */}
      <HowIHelp />

      {/* Courses for Transformation */}
      <CoursesTransformation onWaitlistClick={handleWaitlistClick} />

      {/* Couples Coaching */}
      <CouplesCoaching />

      {/* The Love Better Podcast */}
      <PodcastSection />

      {/* Free Tools */}
      <FreeTools />

      {/* Coaching Section */}
      <CoachingSection />

      {/* Newsletter Reset */}
      <NewsletterReset />

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
    </>
  );
};

export default Index;

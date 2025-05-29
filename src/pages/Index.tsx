
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

const Index = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* How I Help You Grow Section */}
      <HowIHelp />

      {/* Courses for Transformation */}
      <CoursesTransformation />

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
    </>
  );
};

export default Index;

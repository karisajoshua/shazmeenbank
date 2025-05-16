
import VideoHero from "@/components/VideoHero";
import LogoCarousel from "@/components/LogoCarousel";
import FeaturesSection from "@/components/home/FeaturesSection";
import CoursesPreview from "@/components/home/CoursesPreview";
import CoachingCTA from "@/components/home/CoachingCTA";
import InstagramCTA from "@/components/home/InstagramCTA";

const Index = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <FeaturesSection />

      {/* Courses Preview */}
      <CoursesPreview />

      {/* Coaching CTA Section */}
      <CoachingCTA />

      {/* Instagram Free Guide CTA */}
      <InstagramCTA />
    </>
  );
};

export default Index;

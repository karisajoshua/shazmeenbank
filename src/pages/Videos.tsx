import { Helmet } from "react-helmet";
import { Youtube, ExternalLink, Heart, Brain, Users, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VideoMarqueeHero from "@/components/videos/VideoMarqueeHero";
import VideoCategory from "@/components/videos/VideoCategory";

// Helper function to extract YouTube video ID from URL
const getVideoId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/);
  return match ? match[1] : "";
};

// All videos from the user
const ALL_VIDEOS = [
  { id: "F2mP7WR_OE8", title: "Being single | Why are people scared of being single?" },
  { id: "QTd2t69EmJk", title: "Grief management" },
  { id: "6yT4JiUsqBM", title: "Work: Survive or Thrive" },
  { id: "MxPBIvHKqn0", title: "The \"Solo-ship\"" },
  { id: "utgshwR_648", title: "Day Break: Unions of convenience" },
  { id: "N3jalDLnsZU", title: "Day Break: Who is raising us?" },
  { id: "jiRr_6S1TFE", title: "Married with 2 kids, Husband cheating and side chick is pregnant, Should I leave" },
  { id: "GzcxHbcF7GA", title: "Dating for successful women in power | How to balance your power in a relationship" },
  { id: "ZqBqvye3H_A", title: "A Second Chance At First Love: The Couples Who Married, Divorced Then Remarried" },
  { id: "R7AglaXRgWA", title: "I divorced my husband and married him again - Shazmeen Bank" },
  { id: "cIVsH7_UL9c", title: "Why is the husband's mother always the problem!! - Dealing with Mother-in-Laws" },
  { id: "b1HTpgTWPxs", title: "Signs that you are dating controlling partner | Many see the signs when its too late" },
  { id: "uTWPhBAijVw", title: "After the honeymoon period, men move to logic | Sometimes men tend to relax" },
  { id: "at3bHuNlBqI", title: "Young and pregnant at 18, My boyfriend was 11 years older, What Next? Shazmeen Bank story" },
  { id: "eCiX5xoVjsE", title: "People who jump from relationship to another | They can't be alone - Attachment lovers" },
  { id: "TNfuKMiGXS8", title: "Marry within my religion? - Dangers of marrying outside your religion" },
  { id: "MrJ8XN94oz8", title: "People who avoid dating because they have been hurt before" },
  { id: "9uhTTc9GTr8", title: "This is why Single ladies prefer dating married men" },
  { id: "3Re8Vo-i1fA", title: "Finding fulfillment before you are 35 | Why many women live to please the society" },
  { id: "NrRXPRmGpbw", title: "Are you giving too much in your relationship?" },
  { id: "Y3Lyo7qLx1o", title: "The 5 stages in a dating relationship" },
  { id: "E3LUlV2QHNQ", title: "Types of cheating" },
  { id: "ZPcSLA24B6Y", title: "Setting Your Goals Right With Shazmeen Bank" },
  { id: "hO5xv71M-BY", title: "Cheating In Relationships? Who Do People Cheat?" },
];

// Organized by category
const VIDEO_CATEGORIES = [
  {
    title: "Relationships & Dating",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    layout: "featured" as const,
    videos: [
      { id: "GzcxHbcF7GA", title: "Dating for successful women in power | How to balance your power in a relationship" },
      { id: "ZqBqvye3H_A", title: "A Second Chance At First Love: The Couples Who Married, Divorced Then Remarried" },
      { id: "R7AglaXRgWA", title: "I divorced my husband and married him again - Shazmeen Bank" },
      { id: "Y3Lyo7qLx1o", title: "The 5 stages in a dating relationship" },
      { id: "uTWPhBAijVw", title: "After the honeymoon period, men move to logic | Sometimes men tend to relax" },
      { id: "NrRXPRmGpbw", title: "Are you giving too much in your relationship?" },
    ]
  },
  {
    title: "Infidelity & Trust",
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    layout: "carousel" as const,
    videos: [
      { id: "jiRr_6S1TFE", title: "Married with 2 kids, Husband cheating and side chick is pregnant, Should I leave" },
      { id: "E3LUlV2QHNQ", title: "Types of cheating" },
      { id: "hO5xv71M-BY", title: "Cheating In Relationships? Who Do People Cheat?" },
      { id: "b1HTpgTWPxs", title: "Signs that you are dating controlling partner | Many see the signs when its too late" },
    ]
  },
  {
    title: "Family & Marriage",
    icon: Users,
    color: "from-green-500 to-teal-500",
    layout: "bento" as const,
    videos: [
      { id: "cIVsH7_UL9c", title: "Why is the husband's mother always the problem!! - Dealing with Mother-in-Laws" },
      { id: "TNfuKMiGXS8", title: "Marry within my religion? - Dangers of marrying outside your religion" },
      { id: "N3jalDLnsZU", title: "Day Break: Who is raising us?" },
      { id: "utgshwR_648", title: "Day Break: Unions of convenience" },
    ]
  },
  {
    title: "Being Single & Self-Discovery",
    icon: Sparkles,
    color: "from-amber-500 to-yellow-500",
    layout: "masonry" as const,
    videos: [
      { id: "F2mP7WR_OE8", title: "Being single | Why are people scared of being single?" },
      { id: "MxPBIvHKqn0", title: "The \"Solo-ship\"" },
      { id: "MrJ8XN94oz8", title: "People who avoid dating because they have been hurt before" },
      { id: "eCiX5xoVjsE", title: "People who jump from relationship to another | They can't be alone - Attachment lovers" },
      { id: "9uhTTc9GTr8", title: "This is why Single ladies prefer dating married men" },
    ]
  },
  {
    title: "Life & Personal Growth",
    icon: MessageCircle,
    color: "from-cyan-500 to-blue-500",
    layout: "grid" as const,
    videos: [
      { id: "QTd2t69EmJk", title: "Grief management" },
      { id: "6yT4JiUsqBM", title: "Work: Survive or Thrive" },
      { id: "at3bHuNlBqI", title: "Young and pregnant at 18, My boyfriend was 11 years older, What Next? Shazmeen Bank story" },
      { id: "3Re8Vo-i1fA", title: "Finding fulfillment before you are 35 | Why many women live to please the society" },
      { id: "ZPcSLA24B6Y", title: "Setting Your Goals Right With Shazmeen Bank" },
    ]
  },
];

const Videos = () => {
  return (
    <>
      <Helmet>
        <title>Videos - Shazmeen Bank | Relationship Coaching & Life Lessons</title>
        <meta name="description" content="Watch Shazmeen Bank's inspiring videos on relationships, personal growth, and healing. Real stories, practical wisdom, and coaching insights." />
      </Helmet>

      {/* Hero Section with Video Marquee */}
      <VideoMarqueeHero videos={ALL_VIDEOS} />

      {/* Video Categories */}
      <div id="videos-content">
        {VIDEO_CATEGORIES.map((category, index) => (
          <VideoCategory
            key={category.title}
            title={category.title}
            icon={category.icon}
            color={category.color}
            videos={category.videos}
            layout={category.layout}
            index={index}
          />
        ))}
      </div>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-shazmeen-dark via-shazmeen-dark to-shazmeen-red/30" />
        
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-shazmeen-red/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-shazmeen-blush/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Ready to Dive Deeper?
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Subscribe for weekly videos on relationships, healing, and becoming the best version of yourself.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.youtube.com/@shazmeenbank/videos" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-white text-shazmeen-dark hover:bg-white/90 rounded-full px-8 py-6 text-lg font-bold shadow-2xl"
                >
                  <Youtube className="mr-2" />
                  Subscribe on YouTube
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <a href="/courses">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-bold backdrop-blur-sm"
                >
                  Explore Courses
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Videos;
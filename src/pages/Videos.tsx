import { Helmet } from "react-helmet";
import { Youtube, ExternalLink, Heart, Brain, Users, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import VideoMarqueeHero from "@/components/videos/VideoMarqueeHero";
import VideoCategory from "@/components/videos/VideoCategory";

// Organized by category
const VIDEO_CATEGORIES = [
  {
    title: "Attachment Styles",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
    layout: "featured" as const,
    videos: [
      { id: "7OTb61zRoCU", title: "Why You Love the Way You Do - The 4 Attachment Styles Explained" },
      { id: "dC92wYuBm-A", title: "The Anxious Attachment Cycle: Why You Love Hard and Hurt More" },
      { id: "XWV0U5N5d7o", title: "The Anxious-Avoidant Trap: The More We Chase Them, The More They Pull Away" },
      { id: "400fMIvg46g", title: "Why You Give Everything and Still Don't Feel Loved: Anxiously Attached" },
      { id: "Sx5T9PUpMKk", title: "Anxious Attachment: Why You Love So Hard and Still Feel Unseen" },
      { id: "Dl4T7RP-Hxk", title: "Anxious Attachment: Why You Panic, Feel Unloved & Overthink" },
      { id: "yvJPPBibRyM", title: "Anxious Attachment: The Traits, Triggers, and Why You Never Feel Secure" },
      { id: "U-otUK5_iXM", title: "Why Dismissive Avoidants Shut Down, Pull Away and Struggle to Love" },
      { id: "9Lmt5ymp1gw", title: "Why Dismissive Avoidants Shut Down, Pull Away and Struggle to Love" },
      { id: "vvakFsWAgwM", title: "Fearful Avoidant Attachment: Traits, Triggers & Relationship Patterns" },
      { id: "YHIY6qJrx6w", title: "Fearful Avoidant Attachment: Traits, Triggers & Relationship Patterns" },
      { id: "kjxfebvvePI", title: "Why You're Drawn to Emotionally Unavailable People" },
      { id: "EhzPLbSqI3k", title: "Why Does My Partner Always Pull Away in Our Relationship?" },
      { id: "GQVSIqYtXAI", title: "The Pain of Loving Someone Emotionally Unavailable" },
      { id: "CwwrdttCDtY", title: "When Your Avoidant Partner's Capacity for Love Isn't Enough for Your Heart" },
    ]
  },
  {
    title: "Trauma Bonds & Toxic Relationships",
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    layout: "carousel" as const,
    videos: [
      { id: "hFHDGqV-Jjc", title: "Hooked On Hurt: The Truth About Trauma Bonds & Toxic Love" },
      { id: "pSgvZwtZ99o", title: "Why Walking Away Feels Impossible: The Hidden Shame Of Toxic Love" },
      { id: "J_bF1Gdl9Z8", title: "Why You Can't Leave a Toxic Relationship (Even When You Want To)" },
      { id: "2S5xIbknnw0", title: "Time To Break the Shame That Keeps You Inside a Trauma Bond" },
      { id: "y0Q3ktvfTME", title: "The Shame That Keeps You Hoping They Will Change: Inside a Trauma Bond" },
      { id: "BRFLQ49VB0I", title: "Why Leaving a Trauma-Bonded Relationship Hurts So Deeply" },
      { id: "mMxPrGCIY_4", title: "Why Walking Away from a Trauma-Bonded Relationship Feels Impossible" },
      { id: "IaBG67Ru2ZI", title: "How to deal with a toxic partner" },
      { id: "NOZCCpZkgUQ", title: "Stonewalling in Relationships: When Silence Becomes Emotional Abuse" },
    ]
  },
  {
    title: "Infidelity & Betrayal",
    icon: MessageCircle,
    color: "from-red-500 to-orange-500",
    layout: "bento" as const,
    videos: [
      { id: "sIPhSjZLSFE", title: "The Moment That Changed Everything: Love, Trust & Secrets" },
      { id: "fhLGk6U7LM8", title: "Betrayed But Not Broken: Infidelity, Anxious Attachment & the Courage to Walk Away" },
      { id: "kfExG-vIFGU", title: "Betrayed But Not Broken: Q&A: Infidelity, Anxious Attachment & the Courage to Walk Away" },
      { id: "P-gZsUzcLx4", title: "What Your Partner Needs After You've Cheated and How to Show Up" },
      { id: "dUJD9VvwkDs", title: "What Your Partner Needs After You've Cheated and How to Show Up" },
      { id: "64Wo0t-4lEg", title: "Betrayal & Infidelity Q&A: The Pain, The Healing and The Hard Truths" },
      { id: "dEKLVr_mpRE", title: "Betrayal & Infidelity Q&A: Why It Hurts So Much and How to Move Forward" },
      { id: "SOxYKlWskSc", title: "4 stages of an affair" },
      { id: "FER4YihYtzM", title: "Surviving an affair together" },
    ]
  },
  {
    title: "Relationship Stages & Growth",
    icon: Users,
    color: "from-green-500 to-teal-500",
    layout: "masonry" as const,
    videos: [
      { id: "vaOOXdCWMUU", title: "The 5 Relationship Stages: Why It Feels So Different Now" },
      { id: "u7Tr3K2ylg0", title: "Attachment Style & Navigating the 5 Relationship Stages" },
      { id: "tFDMBv4fAH8", title: "5 stages of a relationship | How to navigate them" },
      { id: "i5LAj8zyVpQ", title: "Do this to make your relationship work" },
      { id: "cNZIbl-tiNE", title: "Reasons you need to leave or stay" },
      { id: "Cf4l5t80RTk", title: "How do you tell the right one" },
      { id: "L8VIUadRKTc", title: "How to identify red flags in a relationship" },
      { id: "AdXFrQSUYJg", title: "Is It Time to Walk Away or Keep Fighting for This Love?" },
      { id: "bstdFTZHuco", title: "How to break the anxious-avoidant cycle: Making love work when you trigger each other" },
      { id: "oaauFVCN4sg", title: "The Push-Pull Trap: How to Heal Anxious & Avoidant Relationships That Trigger You" },
      { id: "AZgaRjVJICs", title: "How Avoidant Partners Can Love Someone with Anxious Attachment" },
    ]
  },
  {
    title: "Healing & Personal Growth",
    icon: Sparkles,
    color: "from-amber-500 to-yellow-500",
    layout: "carousel" as const,
    videos: [
      { id: "M0L-kkP2vas", title: "Letting Go of the Past: Why You Can't Heal Until You Do" },
      { id: "ZPFf-bCI3Fo", title: "Turn Your Pain into Power" },
      { id: "00qD_sY3JiU", title: "How To Turn Your Pain into Purpose" },
      { id: "RHO9n-baFDI", title: "How to handle breakups" },
      { id: "9mzB7V9128Q", title: "Why This Heartbreak Feels Different: You Broke Long Before It Ended" },
      { id: "eNPQdAU2STY", title: "Why This Heartbreak Feels Different: You Broke Long Before It Ended" },
      { id: "Kc7khQ2ebE8", title: "Dealing with grief. Ways of coping with grief and loss" },
      { id: "reFH02iMzNY", title: "What to do if your own insecurity is ruining your relationships" },
      { id: "7wB7SAM72jM", title: "Forgiveness | Guided mediation" },
      { id: "cNdhkirRFbY", title: "Silencing Fear and Reclaiming Confidence Through Hypnosis" },
      { id: "q7BKRzpUCnM", title: "Building Unbreakable Self-Confidence | Bonus Guided Hypnosis" },
      { id: "WbpYTq8ixN0", title: "Master your emotions" },
      { id: "p087XksmXA8", title: "Anger management tips to prevent relationship damage" },
    ]
  },
  {
    title: "Q&A & Life Advice",
    icon: MessageCircle,
    color: "from-cyan-500 to-blue-500",
    layout: "grid" as const,
    videos: [
      { id: "l70YwmIbHow", title: "You Asked: Breakups, Hard Times & Finding Yourself Again (Q&A)" },
      { id: "_a_f9NJ8Ydc", title: "Q&A With Shazmeen Bank: On Breakups, Healing & Finding Yourself" },
      { id: "IljUY-Pcy5A", title: "How to deal with teenage pregnancy" },
      { id: "6-qZTFngXn4", title: "Am I weak as man if I show vulnerability" },
      { id: "_VkNVNBwNT0", title: "Am a guy and I like a woman that is older than, ask Shazmeen" },
      { id: "SmBaEDKwI98", title: "How do I help a friend who has lost their partner recently" },
      { id: "3caEIrSMMdk", title: "My boyfriend slapped me. Should I leave or stay?" },
      { id: "x2nD_ZFGHlk", title: "Benefits of journaling | How to deal with a problem using journal" },
      { id: "oTW7A4PMO-w", title: "How can one stop having hope that we can still win them back" },
      { id: "-YScpMaPgbY", title: "I want to quit my job but I don't have an emergency fund. What do I do?" },
      { id: "k1KCTfYYiVs", title: "How to tell if he is after the money | He only loves me because of my money" },
      { id: "NRZLGCT-f9s", title: "Making life decisions that matter" },
    ]
  },
];

// Flatten all videos for the marquee
const ALL_VIDEOS = VIDEO_CATEGORIES.flatMap(cat => cat.videos);

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
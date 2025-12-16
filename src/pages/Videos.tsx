import { Helmet } from "react-helmet";
import { Youtube, ExternalLink, Tv, Heart, Brain, Users, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

// Media House Appearances
const MEDIA_HOUSE_VIDEOS = [
  { id: "XfRcyB6_hGA", title: "Citizen TV Kenya", start: 163, end: 227 },
  { id: "guHf0pIWXWA", title: "Spice FM Kenya", start: 235, end: 392 },
  { id: "OyK1-tnqOqw", title: "TV47 Kenya", start: 343, end: 402 },
  { id: "PDhK4FqbROE", title: "Engage Talk", start: 21, end: 1007 },
  { id: "at3bHuNlBqI", title: "Switch TV", start: 261, end: 311 },
  { id: "R7AglaXRgWA", title: "Tuko Kenya", start: 627, end: 681 },
  { id: "ZPcSLA24B6Y", title: "NRG TV", start: 159, end: 202 },
];

// Organized by category
const VIDEO_CATEGORIES = [
  {
    title: "Attachment Styles",
    icon: Heart,
    color: "from-pink-500 to-rose-500",
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

const Videos = () => {
  return (
    <>
      <Helmet>
        <title>Videos - Shazmeen Bank | Relationship Coaching & Life Lessons</title>
        <meta name="description" content="Watch Shazmeen Bank's inspiring videos on relationships, personal growth, and healing. Real stories, practical wisdom, and coaching insights." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-shazmeen-blush via-white to-shazmeen-blush/30 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(225,29,72,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,207,232,0.15),transparent_50%)]" />
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-shazmeen-red/10 mb-6">
              <Youtube className="w-10 h-10 text-shazmeen-red" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-shazmeen-dark mb-6">
              Watch & Learn
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Relationship insights, personal stories, and coaching wisdom
            </p>
            <a 
              href="https://www.youtube.com/@shazmeenbank/videos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-shazmeen-red hover:bg-shazmeen-red/90 text-white rounded-xl px-8 py-6 text-lg font-bold shadow-elegant"
              >
                <Youtube className="mr-2" />
                Visit My YouTube Channel
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Media House Appearances Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-shazmeen-dark to-shazmeen-dark/95">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
              <Tv className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              As Seen On TV & Radio
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Featured appearances on major media houses across Kenya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {MEDIA_HOUSE_VIDEOS.map((video) => (
              <div key={video.id} className="group animate-fade-in">
                <div className="relative overflow-hidden rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300 transform hover:-translate-y-2 bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?start=${video.start}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-shazmeen-red/20 text-shazmeen-blush text-sm font-medium">
                      {video.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Categories */}
      {VIDEO_CATEGORIES.map((category, categoryIndex) => (
        <section 
          key={category.title}
          className={`py-16 md:py-24 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-shazmeen-blush/10'}`}
        >
          <div className="container-custom">
            <div className="flex items-center gap-4 mb-12">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  {category.title}
                </h2>
                <p className="text-muted-foreground">{category.videos.length} videos</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.videos.map((video) => (
                <div key={video.id} className="group animate-fade-in">
                  <div className="relative overflow-hidden rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1 bg-card">
                    <div className="aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground group-hover:text-shazmeen-red transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-shazmeen-dark to-shazmeen-red text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Want More Content?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Subscribe to my YouTube channel for weekly videos on relationships, personal growth, and healing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://www.youtube.com/@shazmeenbank/videos" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-shazmeen-dark hover:bg-white/90 rounded-xl px-8 py-6 text-lg font-bold shadow-elegant"
              >
                <Youtube className="mr-2" />
                Subscribe on YouTube
              </Button>
            </a>
            <a href="/courses">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 rounded-xl px-8 py-6 text-lg font-bold"
              >
                Explore Courses
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;

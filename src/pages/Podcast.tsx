
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Headphones, Share2, Download } from "lucide-react";
import PodcastPlayer from "@/components/podcast/PodcastPlayer";
import PodcastEpisodeCard from "@/components/podcast/PodcastEpisodeCard";

const Podcast = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(podcastEpisodes[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayEpisode = (episode) => {
    setSelectedEpisode(episode);
    setIsPlaying(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 heading-elegant font-serif">Love Better</h1>
            <p className="text-xl text-shazmeen-gray mt-4 max-w-2xl mx-auto">
              Exploring relationships, attachment, and the journey to secure love with Shazmeen Bank
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Button 
                className="bg-shazmeen-red hover:bg-opacity-90 text-white flex gap-2 items-center" 
                size="lg"
              >
                <Headphones size={20} />
                Subscribe to Podcast
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:bg-opacity-10"
                size="lg"
              >
                Explore Episodes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode Player */}
      <section className="py-16 bg-gradient-soft">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-premium p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <img 
                    src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg" 
                    alt="Love Better Podcast" 
                    className="rounded-xl w-full h-auto shadow-md"
                  />
                  <div className="mt-4 flex gap-2">
                    <Button 
                      className="w-full bg-shazmeen-red hover:bg-opacity-90"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? "Pause" : "Play"} Episode
                    </Button>
                  </div>
                  <div className="mt-3 flex gap-2 justify-between">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 size={16} className="mr-1" /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download size={16} className="mr-1" /> Download
                    </Button>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <span className="text-sm text-gray-500">{selectedEpisode.date}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-1 font-serif text-shazmeen-dark">
                    {selectedEpisode.title}
                  </h2>
                  <div className="mt-4 prose max-w-none">
                    <p className="text-gray-700">
                      {selectedEpisode.description.slice(0, 300)}...
                    </p>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium text-lg">In this episode:</h4>
                    <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-1">
                      {selectedEpisode.topics?.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  {isPlaying && (
                    <div className="mt-6">
                      <PodcastPlayer episode={selectedEpisode} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Episode List */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-serif">Latest Episodes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcastEpisodes.map((episode, index) => (
              <PodcastEpisodeCard 
                key={index}
                episode={episode}
                onPlay={() => handlePlayEpisode(episode)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-r from-shazmeen-red to-shazmeen-blush text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Never Miss an Episode</h2>
            <p className="text-lg mb-8">
              Follow on your favorite platform and get notified when new episodes drop
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Button size="lg" className="bg-black hover:bg-opacity-90">
                Apple Podcasts
              </Button>
              <Button size="lg" className="bg-[#25D366] hover:bg-opacity-90">
                Spotify
              </Button>
              <Button size="lg" className="bg-[#5000B9] hover:bg-opacity-90">
                Google Podcasts
              </Button>
              <Button size="lg" className="bg-[#F43E37] hover:bg-opacity-90">
                YouTube
              </Button>
            </div>
            <div className="max-w-md mx-auto mt-10">
              <p className="text-white mb-4">Get episode updates directly to your inbox</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-shazmeen-dark text-gray-900"
                />
                <Button className="bg-shazmeen-dark hover:bg-black">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Connect */}
      <section className="py-16 bg-shazmeen-gray">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif text-shazmeen-dark">Connect With Shazmeen</h2>
            <p className="text-lg mb-8 text-gray-700">
              Join the conversation and get daily relationship insights
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <a 
                href="https://tiktok.com/@shazmeen_bank" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white py-4 px-6 rounded-lg hover:opacity-90 transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69C18.58 6.38 17.68 5.78 17.01 5C16.34 4.22 15.92 3.28 15.81 2.26H12.7V15.23C12.7 15.73 12.56 16.22 12.29 16.64C12.03 17.06 11.65 17.39 11.2 17.59C10.75 17.79 10.25 17.85 9.76 17.76C9.27 17.67 8.82 17.45 8.46 17.11C8.11 16.76 7.86 16.32 7.76 15.83C7.65 15.35 7.69 14.84 7.87 14.38C8.04 13.92 8.35 13.52 8.76 13.24C9.17 12.96 9.66 12.8 10.16 12.8C10.41 12.8 10.67 12.83 10.91 12.9V9.76C10.56 9.71 10.22 9.69 9.87 9.69C8.66 9.69 7.48 10.05 6.48 10.71C5.47 11.38 4.68 12.33 4.21 13.45C3.74 14.58 3.63 15.82 3.88 17.01C4.13 18.19 4.73 19.27 5.61 20.11C6.48 20.94 7.59 21.49 8.79 21.7C9.99 21.9 11.22 21.75 12.32 21.25C13.43 20.75 14.35 19.93 15 18.91C15.64 17.88 15.97 16.7 15.97 15.5V10.12C17.47 11.08 19.22 11.6 21 11.59V8.48C20.5 8.48 20.01 8.38 19.55 8.2C19.09 8.01 18.67 7.74 18.31 7.39L19.59 6.69Z" fill="currentColor"/>
                </svg>
                Follow on TikTok
              </a>
              <a 
                href="https://www.shazmeenbank.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white text-shazmeen-dark py-4 px-6 rounded-lg hover:opacity-90 transition-all"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM16.9 15.39C16.64 14.58 15.9 14 15 14H14V11C14 10.45 13.55 10 13 10H7V8H10C10.55 8 11 7.55 11 7V6H13C14.1 6 15 5.1 15 4V3.89C17.71 4.8 19.73 7.21 19.98 10.08L16.9 7H15V9L16.9 15.39Z" fill="currentColor"/>
                </svg>
                Visit Website
              </a>
            </div>
            <div className="mt-8">
              <p className="text-gray-700">
                Send me an email: <a href="mailto:shazmeen@shazmeenbank.com" className="text-shazmeen-red hover:underline">shazmeen@shazmeenbank.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Podcast episode data
const podcastEpisodes = [
  {
    id: 1,
    title: "What an Unhealthy Relationship Really Looks Like (You might be in one)",
    date: "February 22, 2022",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "We talk a lot about toxic love, but what does an unhealthy relationship actually look like in real life? In this episode, I'm diving deep into the signs of unhealthy relationships that often go unnoticed, minimized, or even mistaken for "just relationship struggles." We'll explore how unhealthy dynamics show up emotionally, mentally, and physically… and why so many of us stay even when we know something doesn't feel right.",
    topics: [
      "What healthy vs. unhealthy love really looks like",
      "Why you might be attracted to familiar patterns",
      "How to leave the relationship safely",
      "And can this relationship workout?",
      "HOW DO YOU LOVE YOURSELF BETTER"
    ],
    audioUrl: "#"
  },
  {
    id: 2,
    title: "Traits of Anxious Attachment: What It Really Looks Like in Relationships",
    date: "February 22, 2022",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "When we begin to understand the traits around our attachment styles, the coins really begin to drop and so much begins to make sense on how we love, almost that you will stop feeling like something is wrong with you or judging yourself for wanting more or feeling like you just do not understand why you cant be "normal" the way your partner wants you to be. Why is there this lingering feeling in your heart always feeling like something is just not quite right! you are not alone. When i began to heal my anxious attachment I felt like I was giving myself the hug I always needed!",
    topics: [
      "What anxious attachment really sounds and feels like",
      "The traits that show up in everyday connection",
      "How these patterns often start in childhood",
      "Why it's not your fault—and how awareness is the first step toward change"
    ],
    audioUrl: "#"
  },
  {
    id: 3,
    title: "The 4 Attachment Styles—And How They Secretly Shape Every Relationship You Have",
    date: "December 6, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "I felt it was really important we set a foundation for the rest of the episodes to come. Once we know and understand our blue print, understanding how we navigate adult relationships will make so much sense. I want you to keep in mind we are not looking back in our childhoods to demonise our parents or beat ourselves up. This is a blue print on how you were loved and how you look for a very similar love. Its so important you walk away from this episode knowing you can change your attachment style.",
    topics: [
      "What each of the 4 attachment styles actually looks like in real life",
      "How your early experiences wired your nervous system to seek certain types of love",
      "Why some people constantly chase connection while others run from it",
      "What kind of upbringing leads to each style (this will hit home)",
      "Why your attachment style is fluid—not fixed—and how you can move toward secure love"
    ],
    audioUrl: "#"
  },
  {
    id: 4,
    title: "Hooked On Hurt: The Truth About Trauma Bonds & Toxic Love",
    date: "October 23, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "Why you keep falling for the same person, new face and they keep hurting you? Why do we keep falling for the same toxic relationships? Why does love sometimes feel like pain? Why do we stay—even when we know we should leave? If you've ever found yourself drawn to emotionally unavailable partners, stuck in relationships that drain you, or trapped in a painful push-and-pull dynamic, this episode is for you.",
    topics: [
      "What a trauma bond REALLY is (and why it's not love, even if it feels like it)",
      "How your nervous system gets addicted to emotional highs & lows",
      "The hidden childhood patterns that shape your adult relationships",
      "Why anxious attachment makes you chase people who pull away"
    ],
    audioUrl: "#"
  },
  {
    id: 5,
    title: "Why Walking Away Feels Impossible: The Hidden Shame of Toxic Love",
    date: "August 13, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "Why do we feel ashamed for staying in a toxic relationship—even when we know it's hurting us? The truth is, leaving isn't as easy as people think, and the shame of staying often keeps us even more stuck. But here's what no one tells you: you don't have to feel ashamed.",
    topics: [
      "Why we stay—the emotional, psychological, and even biological reasons that make leaving feel impossible",
      "The hidden shame—how self-blame, societal judgment, and past wounds fuel our guilt",
      "Why leaving is so hard—and why that doesn't mean you're weak or broken",
      "Releasing the shame—how to shift from self-blame to self-compassion so you can move forward"
    ],
    audioUrl: "#"
  },
  {
    id: 6,
    title: "The Anxious-Avoidant Trap: Why We Chase, Why They Run",
    date: "August 12, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "Why do we crave love, yet end up in relationships that feel like an emotional tug-of-war? The anxious-avoidant trap is one of the most common yet painful relationship cycles—one person seeks closeness, while the other pulls away. If you've ever felt like you're chasing someone who won't commit or avoiding someone who wants more from you, this episode is for you.",
    topics: [
      "The anxious-avoidant dynamic and why it creates push-pull relationships",
      "Why anxious and avoidant partners are drawn to each other (but struggle to stay happy)",
      "How avoidants retreat and why anxious partners feel abandoned",
      "The cycle that keeps this dynamic going—and how to break free"
    ],
    audioUrl: "#"
  },
  {
    id: 7,
    title: "The Moment That Changed Everything: Love, Trust & Secrets",
    date: "August 12, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "This episode took a lot of vulnerability yet almost two years into healing to be able to share. I share because so many of you are silently hoping for a bette relationship and many of you write to me and ask me how do i just "love better". This episode covers, pain, shame, guilt, confusion, wonder, loss and self discovery.",
    topics: [
      "Being brave about your relationship journey",
      "The importance of honesty with yourself",
      "Discovering what you truly desire in relationships",
      "Finding freedom through vulnerability"
    ],
    audioUrl: "#"
  },
  {
    id: 8,
    title: "KEEPING SOCIAL IN AN ANTI SOCIAL GENERATION",
    date: "August 12, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "This episode is to really ground you and bring you back home. To a place we have all forgotten, and that is a deep connection with ourself.",
    topics: [
      "Finding connection in a disconnected world",
      "Returning to authentic relationships",
      "Building deeper self-awareness",
      "Creating meaningful connections"
    ],
    audioUrl: "#"
  },
  {
    id: 9,
    title: "THE CANCER OF RELATIONSHIPS",
    date: "August 11, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "We live in a world where we are already really fighting for space and recognition. Already feel so lonely and alone. You need to thrive in your relationships.",
    topics: [
      "Identifying toxic patterns in relationships",
      "Creating healthy boundaries",
      "Finding your voice and space",
      "Building thriving connections"
    ],
    audioUrl: "#"
  },
  {
    id: 10,
    title: "REVIVING THE SOUL OF YOUR RELATIONSHIP",
    date: "June 4, 2021",
    image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
    description: "All relationships hit that point where you wonder will this work or not... together Mohammed and I, shazmeen Bank talk you through how so much can change to bring you two back from the edge.",
    topics: [
      "Rekindling the connection in your relationship",
      "Working through challenges together",
      "Creating new patterns of communication",
      "Building a stronger foundation"
    ],
    audioUrl: "#"
  }
];

export default Podcast;

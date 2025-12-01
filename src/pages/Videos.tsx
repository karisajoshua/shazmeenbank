import { Helmet } from "react-helmet";
import { Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  title: string;
  category: "my-story" | "relationship-wisdom" | "attachment-healing";
}

const videos: Video[] = [
  // My Story
  {
    id: "R7AglaXRgWA",
    title: "I divorced my husband and married him again",
    category: "my-story"
  },
  {
    id: "PDhK4FqbROE",
    title: "My Marriage, Divorce and Love again",
    category: "my-story"
  },
  {
    id: "OyK1-tnqOqw",
    title: "Life and relationship coach who divorced then remarried",
    category: "my-story"
  },
  // Relationship Wisdom
  {
    id: "i5LAj8zyVpQ",
    title: "Do this to make Your Relationship Work",
    category: "relationship-wisdom"
  },
  {
    id: "1ihO__bAwVs",
    title: "19 warning signs your friendship may turn into an affair",
    category: "relationship-wisdom"
  },
  {
    id: "p8N7RcOnBvA",
    title: "Why Doesn't the Unfaithful See What They Are in Danger of Losing",
    category: "relationship-wisdom"
  },
  // Attachment & Healing
  {
    id: "Mea1aggNDVU",
    title: "A WORD OF ENCOURAGEMENT BY SHAZMEEN BANK IN YOUR JOBLESSNESS",
    category: "attachment-healing"
  },
  {
    id: "naPvHOhqdqA",
    title: "Trauma bonded relationships #attachmentstyle",
    category: "attachment-healing"
  },
  {
    id: "s1OPbgwjz5g",
    title: "7 Things ONLY Fearful Avoidants Will Understand ❤️❤️‍🩹",
    category: "attachment-healing"
  }
];

const Videos = () => {
  const myStoryVideos = videos.filter(v => v.category === "my-story");
  const relationshipVideos = videos.filter(v => v.category === "relationship-wisdom");
  const attachmentVideos = videos.filter(v => v.category === "attachment-healing");

  const VideoCard = ({ video }: { video: Video }) => (
    <div className="group animate-fade-in">
      <div className="relative overflow-hidden rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300 transform hover:-translate-y-1">
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
      <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-shazmeen-red transition-colors duration-300">
        {video.title}
      </h3>
    </div>
  );

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
            <p className="text-xl md:text-2xl text-muted-foreground">
              Relationship insights, personal stories, and coaching wisdom
            </p>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-shazmeen-dark mb-4">
              My Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The journey of divorce, healing, and remarriage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myStoryVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Relationship Wisdom Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-shazmeen-blush/20 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-shazmeen-dark mb-4">
              Relationship Wisdom
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical guidance for building stronger connections
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relationshipVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Attachment & Healing Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-shazmeen-dark mb-4">
              Attachment & Healing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding trauma bonds and attachment patterns
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attachmentVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

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
              href="https://www.youtube.com/@ShazmeenBank" 
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

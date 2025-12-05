import { Helmet } from "react-helmet";
import { Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

      {/* Embedded YouTube Channel Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-shazmeen-dark mb-4">
              Latest Videos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse all my videos directly from YouTube
            </p>
          </div>
          
          {/* YouTube Channel Embed */}
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-premium bg-white">
              <div className="aspect-[16/10] md:aspect-[16/9]">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=UU-JYSYmYSMPi8YZ3TjHl4JGg&autoplay=0"
                  title="Shazmeen Bank YouTube Channel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            
            {/* Video Grid from Channel */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Featured Videos */}
              {[
                { id: "R7AglaXRgWA", title: "I divorced my husband and married him again" },
                { id: "PDhK4FqbROE", title: "My Marriage, Divorce and Love again" },
                { id: "OyK1-tnqOqw", title: "Life and relationship coach who divorced then remarried" },
                { id: "i5LAj8zyVpQ", title: "Do this to make Your Relationship Work" },
                { id: "1ihO__bAwVs", title: "19 warning signs your friendship may turn into an affair" },
                { id: "p8N7RcOnBvA", title: "Why Doesn't the Unfaithful See What They Are in Danger of Losing" },
                { id: "Mea1aggNDVU", title: "A WORD OF ENCOURAGEMENT BY SHAZMEEN BANK" },
                { id: "naPvHOhqdqA", title: "Trauma bonded relationships" },
                { id: "s1OPbgwjz5g", title: "7 Things ONLY Fearful Avoidants Will Understand" },
              ].map((video) => (
                <div key={video.id} className="group animate-fade-in">
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
                  <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-shazmeen-red transition-colors duration-300 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
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

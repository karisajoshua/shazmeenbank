import ScrollReveal from "@/components/ui/ScrollReveal";

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights, Stories & Strategy</h1>
            <p className="text-xl text-gray-300">
              Explore our collection of articles designed to help you grow personally and professionally.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BlogHero;

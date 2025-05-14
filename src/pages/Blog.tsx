
import { Button } from "@/components/ui/button";

const Blog = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights, Stories & Strategy</h1>
            <p className="text-xl text-shazmeen-gray">
              Explore our collection of articles designed to help you grow personally and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-shazmeen-dark mb-4">Blog Coming Soon!</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on bringing you valuable content that will inspire and guide you on your journey.
              Our blog will be launching soon with articles on mindset, growth, and transformation.
            </p>
            <Button className="btn-primary">Subscribe for Updates</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;

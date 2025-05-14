
import { Button } from "@/components/ui/button";

const Podcast = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Conversations that Shift Perspectives</h1>
            <p className="text-xl text-shazmeen-gray">
              Tune in to our podcast for insights, stories, and strategies to help you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-shazmeen-dark mb-4">Podcast Coming Soon!</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on bringing you inspiring conversations that will shift your perspective and help you grow. 
              Stay tuned for our podcast launch!
            </p>
            <Button className="btn-primary">Get Notified When We Launch</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Podcast;


import { Button } from "@/components/ui/button";

const InstagramCTA = () => {
  return (
    <section className="section-padding bg-shazmeen-blush">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-dark mb-4">Want a free mindset guide?</h2>
          <p className="text-xl text-gray-700 mb-8">
            DM "MINDSET" on Instagram to receive our comprehensive guide to shifting your mindset for success.
          </p>
          <Button className="btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramCTA;

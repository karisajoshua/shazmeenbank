
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const CoachingCTA = () => {
  return (
    <section className="section-padding bg-shazmeen-dark text-shazmeen-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready for personalized guidance?</h2>
            <p className="text-xl text-shazmeen-gray">
              Book a 1:1 coaching session with our expert coaches to get tailored advice for your unique situation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-shazmeen-red mr-2" />
                <span>Personalized action plans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-shazmeen-red mr-2" />
                <span>Accountability and support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-shazmeen-red mr-2" />
                <span>Expert guidance from experienced coaches</span>
              </div>
            </div>
            <div className="pt-4">
              <Link to="/bookings">
                <Button className="btn-primary">Book Your Session Now</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="1:1 Coaching Session"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingCTA;

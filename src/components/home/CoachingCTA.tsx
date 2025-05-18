import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
const CoachingCTA = () => {
  return <section className="section-padding bg-white text-shazmeen-dark relative overflow-hidden">
      {/* Premium decorative element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-shazmeen-red/5 to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl heading-elegant font-bold">Ready for personalized guidance?</h2>
            <p className="text-xl text-gray-600">Book a 1:1 coaching session with me to get tailored advice for your unique situation.</p>
            <div className="space-y-5">
              <div className="flex items-center">
                <CheckCircle className="text-shazmeen-red mr-3" size={24} />
                <span className="text-lg">Personalized action plans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-shazmeen-red mr-3" size={24} />
                <span className="text-lg">Accountability and support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-shazmeen-red mr-3" size={24} />
                <span className="text-lg">Expert guidance from an experience coach</span>
              </div>
            </div>
            <div className="pt-6">
              <Link to="/bookings">
                <Button className="btn-primary text-lg px-8 py-4">Book Your Session Now</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-premium-hover">
              <img src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeenBank3.jpg" alt="1:1 Coaching Session" className="object-cover w-full h-full" />
              {/* Premium decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-shazmeen-red rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CoachingCTA;
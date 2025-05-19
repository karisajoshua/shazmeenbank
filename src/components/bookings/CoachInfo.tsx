
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoachProps {
  id: number;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  reviews: number;
  bio: string;
}

interface CoachInfoProps {
  coach: CoachProps;
  onSelect: (coachId: number) => void;
}

const CoachInfo = ({ coach, onSelect }: CoachInfoProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
      <div className="md:flex items-start space-y-6 md:space-y-0">
        <div className="md:w-1/3 flex justify-center">
          <img src={coach.image} alt={coach.name} className="w-48 h-48 object-cover rounded-full" />
        </div>
        <div className="md:w-2/3">
          <h3 className="text-2xl font-bold text-shazmeen-dark mb-2">{coach.name}</h3>
          <p className="font-medium text-lg mb-2 text-shazmeen-secondary">{coach.specialization}</p>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 font-medium">{coach.rating} ({coach.reviews} reviews)</span>
          </div>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">{coach.bio}</p>
          <div>
            <Button className="btn-primary px-8 py-2" onClick={() => onSelect(coach.id)}>
              Book a Session with {coach.name.split(' ')[0]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachInfo;

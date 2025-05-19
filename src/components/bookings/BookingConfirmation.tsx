
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface BookingConfirmationProps {
  selectedCoachData: {
    id: number;
    name: string;
    specialization: string;
    image: string;
    rating: number;
    reviews: number;
    bio: string;
  } | null;
  selectedDate: string | null;
  selectedTime: string | null;
  onPrevious: () => void;
  onConfirm: () => void;
}

const BookingConfirmation = ({
  selectedCoachData,
  selectedDate,
  selectedTime,
  onPrevious,
  onConfirm
}: BookingConfirmationProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <button className="text-shazmeen-dark hover:text-shazmeen-red flex items-center" onClick={onPrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to scheduling
        </button>
      </div>

      <h2 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">Confirm Your Booking</h2>
      
      {selectedCoachData && (
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
            <img src={selectedCoachData.image} alt={selectedCoachData.name} className="w-20 h-20 object-cover rounded-full" />
            <div>
              <h3 className="text-xl font-bold text-shazmeen-dark">{selectedCoachData.name}</h3>
              <p className="text-shazmeen-red">{selectedCoachData.specialization}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-shazmeen-red mr-3" />
              <div>
                <p className="font-semibold">Date</p>
                <p className="text-gray-600">{selectedDate}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-5 h-5 text-shazmeen-red mr-3" />
              <div>
                <p className="font-semibold">Time</p>
                <p className="text-gray-600">{selectedTime}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shazmeen-red mr-3">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <p className="font-semibold">Duration</p>
                <p className="text-gray-600">60 minutes</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-lg font-semibold mb-4">Session Notes (Optional)</h3>
        <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shazmeen-red focus:outline-none" rows={4} placeholder="Let Shazmeen know what topics you'd like to discuss in this session..."></textarea>
      </div>
      
      <div className="text-center">
        <Button className="btn-primary text-lg px-8 py-3" onClick={onConfirm}>
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmation;

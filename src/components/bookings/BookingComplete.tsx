
import { Button } from "@/components/ui/button";

interface BookingCompleteProps {
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
  onReset: () => void;
}

const BookingComplete = ({ 
  selectedCoachData, 
  selectedDate, 
  selectedTime, 
  onReset 
}: BookingCompleteProps) => {
  return (
    <div className="max-w-2xl mx-auto text-center py-12 px-4 bg-shazmeen-blush rounded-xl">
      <div className="text-shazmeen-dark mb-6 flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-shazmeen-dark mb-4">Booking Confirmed!</h2>
      <p className="text-xl text-gray-700 mb-6">
        Your session with {selectedCoachData?.name} is scheduled for {selectedDate} at {selectedTime}.
      </p>
      <p className="text-gray-700 mb-8">
        You will receive an email confirmation with all the details and a calendar invitation.
      </p>
      <Button className="btn-primary" onClick={onReset}>Book Another Session</Button>
    </div>
  );
};

export default BookingComplete;

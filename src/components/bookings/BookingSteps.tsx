
import { User, Calendar, Clock } from "lucide-react";

interface BookingStepsProps {
  bookingStep: number;
}

const BookingSteps = ({ bookingStep }: BookingStepsProps) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className={`flex items-center ${bookingStep >= 1 ? 'text-shazmeen-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${bookingStep >= 1 ? 'bg-shazmeen-red text-white' : 'bg-gray-200'}`}>
            <User size={20} />
          </div>
          <span className="font-semibold">About Me</span>
        </div>
        <div className="hidden md:block w-16 h-0.5 bg-gray-300"></div>
        <div className={`flex items-center ${bookingStep >= 2 ? 'text-shazmeen-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${bookingStep >= 2 ? 'bg-shazmeen-red text-white' : 'bg-gray-200'}`}>
            <Calendar size={20} />
          </div>
          <span className="font-semibold">Select Date & Time</span>
        </div>
        <div className="hidden md:block w-16 h-0.5 bg-gray-300"></div>
        <div className={`flex items-center ${bookingStep >= 3 ? 'text-shazmeen-red' : 'text-gray-400'}`}>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${bookingStep >= 3 ? 'bg-shazmeen-red text-white' : 'bg-gray-200'}`}>
            <Clock size={20} />
          </div>
          <span className="font-semibold">Confirm Booking</span>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;

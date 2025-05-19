
import { Button } from "@/components/ui/button";

interface TimeSlot {
  date: string;
  times: string[];
}

interface DateTimeSelectorProps {
  timeSlots: TimeSlot[];
  selectedDate: string | null;
  selectedTime: string | null;
  selectedCoachId: number | null;
  selectedCoachData: {
    id: number;
    name: string;
    specialization: string;
    image: string;
    rating: number;
    reviews: number;
    bio: string;
  } | null;
  onDateSelect: (date: string) => void;
  onTimeSelect: (time: string) => void;
  onPrevious: () => void;
  onContinue: () => void;
}

const DateTimeSelector = ({ 
  timeSlots,
  selectedDate,
  selectedTime,
  selectedCoachData,
  onDateSelect,
  onTimeSelect,
  onPrevious,
  onContinue
}: DateTimeSelectorProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <button className="text-shazmeen-dark hover:text-shazmeen-red flex items-center" onClick={onPrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to coach information
        </button>
        
        {selectedCoachData && (
          <div className="flex items-center">
            <img src={selectedCoachData.image} alt={selectedCoachData.name} className="w-10 h-10 object-cover rounded-full mr-3" />
            <div>
              <h3 className="font-bold text-shazmeen-dark">{selectedCoachData.name}</h3>
              <p className="text-sm text-gray-600">{selectedCoachData.specialization}</p>
            </div>
          </div>
        )}
      </div>

      <h2 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">Select a date and time</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Date Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Available Dates</h3>
          <div className="space-y-3">
            {timeSlots.map(slot => (
              <div 
                key={slot.date} 
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedDate === slot.date 
                    ? 'bg-shazmeen-red text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`} 
                onClick={() => onDateSelect(slot.date)}
              >
                {slot.date}
              </div>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {selectedDate ? `Available Times for ${selectedDate}` : 'Select a date first'}
          </h3>
          
          {selectedDate ? (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.find(slot => slot.date === selectedDate)?.times.map(time => (
                <div 
                  key={time} 
                  className={`p-4 rounded-lg text-center cursor-pointer transition-all ${
                    selectedTime === time 
                      ? 'bg-shazmeen-red text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`} 
                  onClick={() => onTimeSelect(time)}
                >
                  {time}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 bg-gray-100 rounded-lg text-center text-gray-500">
              Available times will appear here
            </div>
          )}
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button 
          className="btn-primary" 
          disabled={!selectedDate || !selectedTime} 
          onClick={onContinue}
        >
          Continue to Confirmation
        </Button>
      </div>
    </div>
  );
};

export default DateTimeSelector;

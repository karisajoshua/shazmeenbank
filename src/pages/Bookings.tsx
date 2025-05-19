
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { coaches, generateTimeSlots } from "@/components/bookings/bookingUtils";
import BookingHeader from "@/components/bookings/BookingHeader";
import BookingSteps from "@/components/bookings/BookingSteps";
import CoachInfo from "@/components/bookings/CoachInfo";
import ServiceFeatures from "@/components/bookings/ServiceFeatures";
import DateTimeSelector from "@/components/bookings/DateTimeSelector";
import BookingConfirmation from "@/components/bookings/BookingConfirmation";
import BookingComplete from "@/components/bookings/BookingComplete";
import DiscountOffer from "@/components/bookings/DiscountOffer";

const timeSlots = generateTimeSlots();

const Bookings = () => {
  const [selectedCoach, setSelectedCoach] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [showDiscountOffer, setShowDiscountOffer] = useState(false);
  const [multiSessionBooked, setMultiSessionBooked] = useState(false);
  
  const handleCoachSelect = (coachId: number) => {
    setSelectedCoach(coachId);
    setBookingStep(2);
    setSelectedDate(null);
    setSelectedTime(null);
  };
  
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };
  
  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };
  
  const handleBookSession = () => {
    // In a real app, this would submit the booking to an API
    setBookingComplete(true);
    // Show the discount offer after a short delay
    setTimeout(() => {
      setShowDiscountOffer(true);
    }, 1000);
  };
  
  const handleBookMultipleSessions = () => {
    setMultiSessionBooked(true);
    setShowDiscountOffer(false);
  };
  
  const resetBooking = () => {
    setSelectedCoach(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingStep(1);
    setBookingComplete(false);
    setShowDiscountOffer(false);
    setMultiSessionBooked(false);
  };
  
  const selectedCoachData = selectedCoach ? coaches.find(coach => coach.id === selectedCoach) : null;
  
  return (
    <>
      {/* Header Section */}
      <BookingHeader />

      {/* Booking Process */}
      <section className="section-padding bg-shazmeen-white">
        <div className="container-custom">
          {/* Booking Steps */}
          <BookingSteps bookingStep={bookingStep} />

          {bookingComplete ? (
            // Booking Complete
            <BookingComplete 
              selectedCoachData={selectedCoachData} 
              selectedDate={selectedDate} 
              selectedTime={selectedTime} 
              onReset={resetBooking} 
            />
          ) : (
            <>
              {bookingStep === 1 && (
                // Step 1: About Shazmeen
                <div>
                  <h2 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">About Your Coach</h2>
                  <div className="max-w-4xl mx-auto">
                    {coaches.map(coach => (
                      <CoachInfo key={coach.id} coach={coach} onSelect={handleCoachSelect} />
                    ))}
                  </div>
                  
                  <ServiceFeatures />
                </div>
              )}

              {bookingStep === 2 && selectedCoachData && (
                // Step 2: Select Date & Time
                <DateTimeSelector 
                  timeSlots={timeSlots}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  selectedCoachId={selectedCoach}
                  selectedCoachData={selectedCoachData}
                  onDateSelect={handleDateSelect}
                  onTimeSelect={handleTimeSelect}
                  onPrevious={() => setBookingStep(1)}
                  onContinue={() => selectedDate && selectedTime && setBookingStep(3)}
                />
              )}

              {bookingStep === 3 && selectedCoachData && selectedDate && selectedTime && (
                // Step 3: Confirm Booking
                <BookingConfirmation 
                  selectedCoachData={selectedCoachData}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  onPrevious={() => setBookingStep(2)}
                  onConfirm={handleBookSession}
                />
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Special Offer Dialog */}
      <Dialog open={showDiscountOffer} onOpenChange={setShowDiscountOffer}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-shazmeen-dark">
              Special Offer: 30% Off When You Book a Package!
            </DialogTitle>
            <button 
              className="absolute right-2 top-2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={() => setShowDiscountOffer(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </DialogHeader>
          
          <DiscountOffer 
            multiSessionBooked={multiSessionBooked}
            onBookPackage={handleBookMultipleSessions}
            onClose={() => setShowDiscountOffer(false)}
            onReturn={() => {
              setMultiSessionBooked(false);
              setShowDiscountOffer(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Bookings;

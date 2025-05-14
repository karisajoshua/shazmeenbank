
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star, User } from "lucide-react";

// Mock coaches data
const coaches = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialization: "Financial Coaching",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    rating: 4.9,
    reviews: 124,
    bio: "Sarah is a certified financial coach with 10 years of experience helping women build wealth and financial independence."
  },
  {
    id: 2,
    name: "Michael Chen",
    specialization: "Leadership & Career Development",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    rating: 4.8,
    reviews: 98,
    bio: "Michael specializes in helping professionals advance their careers through authentic leadership development."
  },
  {
    id: 3,
    name: "Priya Patel",
    specialization: "Business & Entrepreneurship",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
    rating: 5.0,
    reviews: 75,
    bio: "Priya has founded three successful businesses and now coaches aspiring entrepreneurs to build sustainable companies."
  },
  {
    id: 4,
    name: "David Williams",
    specialization: "Mindset & Productivity",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    rating: 4.7,
    reviews: 110,
    bio: "David helps clients overcome limiting beliefs and develop systems for peak productivity and work-life balance."
  }
];

// Mock time slots
const generateTimeSlots = () => {
  const today = new Date();
  let slots = [];
  
  // Generate slots for the next 7 days
  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    
    // Format date as string
    const dateStr = date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
    
    // Generate random available times for each day
    const times = [];
    const numSlots = 3 + Math.floor(Math.random() * 4); // 3-6 slots
    
    const baseHour = 9 + Math.floor(Math.random() * 2); // Start between 9-10 AM
    for (let j = 0; j < numSlots; j++) {
      const hour = (baseHour + j * 2) % 12 || 12; // Convert 0 to 12
      const period = (baseHour + j * 2) < 12 ? 'AM' : 'PM';
      times.push(`${hour}:00 ${period}`);
    }
    
    slots.push({ date: dateStr, times });
  }
  
  return slots;
};

const timeSlots = generateTimeSlots();

const Bookings = () => {
  const [selectedCoach, setSelectedCoach] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingComplete, setBookingComplete] = useState(false);

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
  };

  const resetBooking = () => {
    setSelectedCoach(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setBookingStep(1);
    setBookingComplete(false);
  };

  const selectedCoachData = selectedCoach ? coaches.find(coach => coach.id === selectedCoach) : null;

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your 1:1 Coaching Session</h1>
            <p className="text-xl text-shazmeen-gray">
              Get personalized guidance from our expert coaches to help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Booking Steps */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className={`flex items-center ${bookingStep >= 1 ? 'text-shazmeen-red' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${bookingStep >= 1 ? 'bg-shazmeen-red text-white' : 'bg-gray-200'}`}>
                  <User size={20} />
                </div>
                <span className="font-semibold">Select Coach</span>
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

          {bookingComplete ? (
            // Booking Complete
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
              <Button className="btn-primary" onClick={resetBooking}>Book Another Session</Button>
            </div>
          ) : (
            <>
              {bookingStep === 1 && (
                // Step 1: Select Coach
                <div>
                  <h2 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">Choose your coach</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {coaches.map(coach => (
                      <div 
                        key={coach.id} 
                        className={`bg-white p-6 rounded-xl shadow-md cursor-pointer transition-all hover:shadow-lg ${selectedCoach === coach.id ? 'ring-2 ring-shazmeen-red' : ''}`}
                        onClick={() => handleCoachSelect(coach.id)}
                      >
                        <div className="flex items-start space-x-4">
                          <img 
                            src={coach.image} 
                            alt={coach.name}
                            className="w-24 h-24 object-cover rounded-full"
                          />
                          <div>
                            <h3 className="text-xl font-bold text-shazmeen-dark">{coach.name}</h3>
                            <p className="text-shazmeen-red font-medium mb-1">{coach.specialization}</p>
                            <div className="flex items-center mb-2">
                              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                              <span className="text-sm ml-1">{coach.rating} ({coach.reviews} reviews)</span>
                            </div>
                            <p className="text-gray-600 text-sm">{coach.bio}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 2 && selectedCoachData && (
                // Step 2: Select Date & Time
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <button 
                      className="text-shazmeen-dark hover:text-shazmeen-red flex items-center"
                      onClick={() => setBookingStep(1)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                      Back to coaches
                    </button>
                    
                    <div className="flex items-center">
                      <img 
                        src={selectedCoachData.image} 
                        alt={selectedCoachData.name}
                        className="w-10 h-10 object-cover rounded-full mr-3"
                      />
                      <div>
                        <h3 className="font-bold text-shazmeen-dark">{selectedCoachData.name}</h3>
                        <p className="text-sm text-gray-600">{selectedCoachData.specialization}</p>
                      </div>
                    </div>
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
                            className={`p-4 rounded-lg cursor-pointer transition-all ${selectedDate === slot.date 
                              ? 'bg-shazmeen-red text-white' 
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                            onClick={() => handleDateSelect(slot.date)}
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
                              className={`p-4 rounded-lg text-center cursor-pointer transition-all ${selectedTime === time 
                                ? 'bg-shazmeen-red text-white' 
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                              onClick={() => handleTimeSelect(time)}
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
                      onClick={() => selectedDate && selectedTime && setBookingStep(3)}
                    >
                      Continue to Confirmation
                    </Button>
                  </div>
                </div>
              )}

              {bookingStep === 3 && selectedCoachData && selectedDate && selectedTime && (
                // Step 3: Confirm Booking
                <div className="max-w-2xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <button 
                      className="text-shazmeen-dark hover:text-shazmeen-red flex items-center"
                      onClick={() => setBookingStep(2)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                      </svg>
                      Back to scheduling
                    </button>
                  </div>

                  <h2 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">Confirm Your Booking</h2>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                    <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                      <img 
                        src={selectedCoachData.image} 
                        alt={selectedCoachData.name}
                        className="w-20 h-20 object-cover rounded-full"
                      />
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
                  
                  <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                    <h3 className="text-lg font-semibold mb-4">Session Notes (Optional)</h3>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                      rows={4}
                      placeholder="Let your coach know what topics you'd like to discuss in this session..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      className="btn-primary text-lg px-8 py-3"
                      onClick={handleBookSession}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Bookings;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Star, User, Check, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Shazmeen's coaching data
const coaches = [{
  id: 1,
  name: "Shazmeen Bank",
  specialization: "Relationship & Self-Worth Coach",
  image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
  rating: 5.0,
  reviews: 124,
  bio: "Shazmeen Bank is an expert relationship coach specializing in helping you build healthy relationships and discover your authentic self. With years of experience and her popular podcast 'Love Better', Shazmeen guides you through healing attachment wounds and creating meaningful connections."
}];

// Mock time slots
const generateTimeSlots = () => {
  const today = new Date();
  let slots = [];

  // Generate slots for the next 7 days
  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    // Format date as string
    const dateStr = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });

    // Generate random available times for each day
    const times = [];
    const numSlots = 3 + Math.floor(Math.random() * 4); // 3-6 slots

    const baseHour = 9 + Math.floor(Math.random() * 2); // Start between 9-10 AM
    for (let j = 0; j < numSlots; j++) {
      const hour = (baseHour + j * 2) % 12 || 12; // Convert 0 to 12
      const period = baseHour + j * 2 < 12 ? 'AM' : 'PM';
      times.push(`${hour}:00 ${period}`);
    }
    slots.push({
      date: dateStr,
      times
    });
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
  return <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your 1:1 Coaching Session with Me</h1>
            <p className="text-xl text-shazmeen-gray">
              Get personalized guidance to transform your relationships and discover your authentic self.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-padding bg-shazmeen-white">
        <div className="container-custom">
          {/* Booking Steps */}
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

          {bookingComplete ?
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
            </div> : <>
              {bookingStep === 1 &&
          // Step 1: About Shazmeen
          <div>
                  <h2 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">About Your Coach</h2>
                  <div className="max-w-4xl mx-auto">
                    {coaches.map(coach => <div key={coach.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
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
                              <Button className="btn-primary px-8 py-2" onClick={() => handleCoachSelect(coach.id)}>
                                Book a Session with Shazmeen
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                  
                  <div className="mt-16">
                    <h3 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">What to Expect in Your Session</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-shazmeen-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shazmeen-red">
                            <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
                            <polyline points="15 3 15 9 21 9"></polyline>
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-shazmeen-dark mb-2">Personalized Plan</h4>
                        <p className="text-gray-600">Receive a customized action plan tailored specifically to your relationship needs and goals.</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-shazmeen-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shazmeen-red">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-shazmeen-dark mb-2">Expert Guidance</h4>
                        <p className="text-gray-600">Learn practical strategies to heal attachment wounds and create healthier relationships.</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-shazmeen-white">
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shazmeen-red">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                          </svg>
                        </div>
                        <h4 className="text-lg font-bold text-shazmeen-dark mb-2">Transformative Results</h4>
                        <p className="text-gray-600">Walk away with clarity, confidence, and actionable steps to transform your relationships.</p>
                      </div>
                    </div>
                  </div>
                </div>}

              {bookingStep === 2 && selectedCoachData &&
          // Step 2: Select Date & Time
          <div>
                  <div className="flex items-center justify-between mb-8">
                    <button className="text-shazmeen-dark hover:text-shazmeen-red flex items-center" onClick={() => setBookingStep(1)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Back to coach information
                    </button>
                    
                    <div className="flex items-center">
                      <img src={selectedCoachData.image} alt={selectedCoachData.name} className="w-10 h-10 object-cover rounded-full mr-3" />
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
                        {timeSlots.map(slot => <div key={slot.date} className={`p-4 rounded-lg cursor-pointer transition-all ${selectedDate === slot.date ? 'bg-shazmeen-red text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`} onClick={() => handleDateSelect(slot.date)}>
                            {slot.date}
                          </div>)}
                      </div>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        {selectedDate ? `Available Times for ${selectedDate}` : 'Select a date first'}
                      </h3>
                      
                      {selectedDate ? <div className="grid grid-cols-2 gap-3">
                          {timeSlots.find(slot => slot.date === selectedDate)?.times.map(time => <div key={time} className={`p-4 rounded-lg text-center cursor-pointer transition-all ${selectedTime === time ? 'bg-shazmeen-red text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`} onClick={() => handleTimeSelect(time)}>
                              {time}
                            </div>)}
                        </div> : <div className="p-8 bg-gray-100 rounded-lg text-center text-gray-500">
                          Available times will appear here
                        </div>}
                    </div>
                  </div>

                  <div className="mt-10 text-center">
                    <Button className="btn-primary" disabled={!selectedDate || !selectedTime} onClick={() => selectedDate && selectedTime && setBookingStep(3)}>
                      Continue to Confirmation
                    </Button>
                  </div>
                </div>}

              {bookingStep === 3 && selectedCoachData && selectedDate && selectedTime &&
          // Step 3: Confirm Booking
          <div className="max-w-2xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <button className="text-shazmeen-dark hover:text-shazmeen-red flex items-center" onClick={() => setBookingStep(2)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      Back to scheduling
                    </button>
                  </div>

                  <h2 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">Confirm Your Booking</h2>
                  
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
                  
                  <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                    <h3 className="text-lg font-semibold mb-4">Session Notes (Optional)</h3>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shazmeen-red focus:outline-none" rows={4} placeholder="Let Shazmeen know what topics you'd like to discuss in this session..."></textarea>
                  </div>
                  
                  <div className="text-center">
                    <Button className="btn-primary text-lg px-8 py-3" onClick={handleBookSession}>
                      Confirm Booking
                    </Button>
                  </div>
                </div>}
            </>}
        </div>
      </section>
      
      {/* Special Offer Dialog */}
      <Dialog open={showDiscountOffer} onOpenChange={setShowDiscountOffer}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-shazmeen-dark">
              Special Offer: 30% Off When You Book a Package!
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setShowDiscountOffer(false)}
              className="absolute right-2 top-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          {multiSessionBooked ? (
            <div className="py-6 text-center">
              <div className="mb-6 text-shazmeen-dark flex justify-center">
                <Check size={60} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-3">Package Booked Successfully!</h3>
              <p className="text-gray-600 mb-4">
                You've saved 30% on your 3-session package. You'll receive a confirmation email with all the details.
              </p>
              <Button className="btn-primary" onClick={() => {
                setMultiSessionBooked(false);
                setShowDiscountOffer(false);
              }}>
                Return to Bookings
              </Button>
            </div>
          ) : (
            <div className="py-4">
              <div className="bg-shazmeen-blush/30 p-4 rounded-lg mb-6 border-l-4 border-shazmeen-red">
                <p className="text-shazmeen-dark font-medium">
                  Congratulations! Your session has been booked successfully.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                <h3 className="text-lg font-bold text-shazmeen-dark mb-4">
                  Book 3 More Sessions Now and Save 30%
                </h3>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <span className="text-gray-600">Single Session Price</span>
                  <span className="font-semibold">$150.00</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <span className="text-gray-600">3-Session Package</span>
                  <span className="font-semibold">$450.00</span>
                </div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <span className="text-green-600 font-medium">30% Discount</span>
                  <span className="text-green-600 font-medium">-$135.00</span>
                </div>
                <div className="flex items-center justify-between text-lg">
                  <span className="font-semibold text-shazmeen-dark">You Pay</span>
                  <span className="font-bold text-shazmeen-dark">$315.00</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-shazmeen-dark mb-2">Why Book a Package?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Save 30% on your coaching investment</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Guarantee your spot in Shazmeen's calendar</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Build momentum with consistent coaching</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>See more significant transformations in your relationships</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col space-y-3">
                <Button className="btn-primary py-6 text-lg" onClick={handleBookMultipleSessions}>
                  Book 3-Session Package (Save 30%)
                </Button>
                <Button variant="outline" className="btn-outline" onClick={() => setShowDiscountOffer(false)}>
                  No thanks, just keep my single session
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      
      {/* Coach Recommendations */}
      {bookingComplete && !showDiscountOffer && !multiSessionBooked && (
        <div className="container-custom mt-12 mb-20">
          <h2 className="text-2xl font-bold text-shazmeen-dark mb-6">Our Coaches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden text-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f8f38f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                alt="Sarah Johnson" 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-shazmeen-dark">Sarah Johnson</h3>
              <p className="text-shazmeen-red mb-2">Financial Coaching</p>
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm ml-1">5.0</span>
              </div>
              <Button className="w-full btn-primary">Book a Session</Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden text-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" 
                alt="Priya Patel" 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-shazmeen-dark">Priya Patel</h3>
              <p className="text-shazmeen-red mb-2">Business Coaching</p>
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm ml-1">5.0</span>
              </div>
              <Button className="w-full btn-primary">Book a Session</Button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden text-center p-6">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                alt="Michael Chen" 
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="font-bold text-shazmeen-dark">Michael Chen</h3>
              <p className="text-shazmeen-red mb-2">Leadership Coaching</p>
              <div className="flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm ml-1">4.8</span>
              </div>
              <Button className="w-full btn-primary">Book a Session</Button>
            </div>
          </div>
        </div>
      )}
    </>;
};

export default Bookings;

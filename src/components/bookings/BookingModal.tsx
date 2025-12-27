import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { format, isSameDay, startOfDay } from 'date-fns';
import { ArrowLeft, ArrowRight, Check, Calendar as CalendarIcon, Clock, User, Mail, FileText, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AddToCalendar from './AddToCalendar';
import PayPalButton from './PayPalButton';

type Service = {
  id: number;
  title: string;
  price: string;
  duration: string;
};

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
};

type AvailabilitySlot = {
  id: string;
  available_date: string;
  is_available: boolean;
  time_slots: string[];
};

const STEPS = ['Select Date & Time', 'Your Information', 'Payment', 'Confirmation'];

const BookingModal = ({ isOpen, onClose, service }: BookingModalProps) => {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [paymentOrderId, setPaymentOrderId] = useState<string>('');
  const { toast } = useToast();

  // Extract numeric price for PayPal
  const getNumericPrice = (priceString: string): string => {
    return priceString.replace(/[^0-9.]/g, '');
  };

  // Fetch availability
  const { data: availability = [] } = useQuery({
    queryKey: ['coach-availability'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('coach_availability')
        .select('*')
        .eq('is_available', true)
        .gte('available_date', format(new Date(), 'yyyy-MM-dd'))
        .order('available_date', { ascending: true });
      
      if (error) throw error;
      return data as AvailabilitySlot[];
    },
    enabled: isOpen,
  });

  // Create booking mutation
  const createBookingMutation = useMutation({
    mutationFn: async (paymentId: string) => {
      if (!selectedDate || !selectedTime || !clientName || !clientEmail) {
        throw new Error('Missing required fields');
      }

      const { error } = await supabase.from('bookings').insert({
        booking_date: format(selectedDate, 'yyyy-MM-dd'),
        booking_time: selectedTime,
        client_name: clientName,
        client_email: clientEmail,
        notes: notes ? `${notes}\n\nPayPal Order ID: ${paymentId}` : `PayPal Order ID: ${paymentId}`,
        status: 'upcoming',
        payment_status: 'paid',
        user_id: '00000000-0000-0000-0000-000000000000', // Guest booking placeholder
      });

      if (error) throw error;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setStep(3);
      toast({
        title: 'Booking confirmed!',
        description: 'Your payment was successful. See you soon!',
      });
    },
    onError: (error) => {
      toast({
        title: 'Booking failed',
        description: 'Payment was processed but booking failed. Please contact support.',
        variant: 'destructive',
      });
      console.error('Booking error:', error);
    },
  });

  // Get available dates as Date objects
  const availableDates = availability.map((slot) => new Date(slot.available_date));

  // Check if a date is available
  const isDateAvailable = (date: Date) => {
    return availableDates.some((availableDate) => isSameDay(date, availableDate));
  };

  // Get time slots for selected date
  const getTimeSlotsForDate = (date: Date) => {
    const slot = availability.find((a) => isSameDay(new Date(a.available_date), date));
    return slot?.time_slots || [];
  };

  const timeSlots = selectedDate ? getTimeSlotsForDate(selectedDate) : [];

  const handleNext = () => {
    if (step === 0 && (!selectedDate || !selectedTime)) {
      toast({
        title: 'Please select a date and time',
        variant: 'destructive',
      });
      return;
    }
    if (step === 1 && (!clientName || !clientEmail)) {
      toast({
        title: 'Please fill in your details',
        variant: 'destructive',
      });
      return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleClose = () => {
    setStep(0);
    setSelectedDate(undefined);
    setSelectedTime('');
    setClientName('');
    setClientEmail('');
    setNotes('');
    setIsSubmitted(false);
    setPaymentOrderId('');
    onClose();
  };

  const handlePaymentSuccess = (details: { orderId: string; payerEmail: string; payerName: string }) => {
    setPaymentOrderId(details.orderId);
    createBookingMutation.mutate(details.orderId);
  };

  const handlePaymentError = (error: string) => {
    toast({
      title: 'Payment failed',
      description: error,
      variant: 'destructive',
    });
  };

  const handlePaymentCancel = () => {
    toast({
      title: 'Payment cancelled',
      description: 'You can try again when ready.',
    });
  };

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-zinc-900 border-2 border-[#FD0061]/50 text-white shadow-[0_0_60px_rgba(253,0,97,0.3)] [&>button]:text-white [&>button]:hover:text-gray-300">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">
            {isSubmitted ? 'Booking Confirmed!' : `Book: ${service.title}`}
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-500">
              <Check className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Thank You!</h3>
            <p className="text-gray-300 mb-4">
              Your booking for <strong className="text-white">{service.title}</strong> on{' '}
              <strong className="text-white">{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</strong> at{' '}
              <strong className="text-white">{selectedTime}</strong> has been confirmed.
            </p>
            <p className="text-sm text-gray-400 mb-6">
              A confirmation email has been sent to <strong className="text-white">{clientEmail}</strong>.
            </p>
            
            {/* Google Calendar / ICS Integration */}
            {selectedDate && selectedTime && (
              <div className="mb-6">
                <p className="text-sm font-medium mb-3 text-white">Add to your calendar:</p>
                <AddToCalendar
                  title={`Coaching Session: ${service.title}`}
                  startDate={(() => {
                    const [hours, minutes] = selectedTime.split(':').map(Number);
                    const start = new Date(selectedDate);
                    start.setHours(hours || 0, minutes || 0, 0, 0);
                    return start;
                  })()}
                  endDate={(() => {
                    const [hours, minutes] = selectedTime.split(':').map(Number);
                    const end = new Date(selectedDate);
                    end.setHours((hours || 0) + 1, minutes || 0, 0, 0);
                    return end;
                  })()}
                  description={`Your coaching session with Shazmeen Bank.\n\nNotes: ${notes || 'None'}`}
                  location="Online via Zoom"
                />
              </div>
            )}
            
            <Button onClick={handleClose} className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white">
              Close
            </Button>
          </motion.div>
        ) : (
          <>
            {/* Progress Steps */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {STEPS.map((stepName, index) => (
                <div key={stepName} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      index <= step
                        ? 'bg-[#FD0061] text-white'
                        : 'bg-zinc-700 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`w-8 h-0.5 mx-1 ${
                        index < step ? 'bg-[#FD0061]' : 'bg-zinc-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-zinc-800 rounded-lg p-4 flex items-center gap-4 border border-zinc-700">
                    <div className="p-2 bg-[#FD0061]/20 rounded-lg">
                      <CalendarIcon className="w-5 h-5 text-[#FD0061]" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{service.title}</p>
                      <p className="text-sm text-gray-400">
                        {service.duration} • {service.price}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2 text-white">
                      <CalendarIcon className="w-4 h-4" />
                      Select a Date
                    </h4>
                    {availability.length === 0 ? (
                      <div className="text-center py-8 text-gray-400 bg-zinc-800 rounded-lg border border-zinc-700">
                        <p>No available dates at the moment.</p>
                        <p className="text-sm mt-1">Please check back later or contact us directly.</p>
                      </div>
                    ) : (
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) =>
                          date < startOfDay(new Date()) || !isDateAvailable(date)
                        }
                        modifiers={{
                          available: availableDates,
                        }}
                        modifiersStyles={{
                          available: {
                            backgroundColor: 'rgba(253, 0, 97, 0.1)',
                            fontWeight: 'bold',
                          },
                        }}
                        className="rounded-md border border-zinc-700 mx-auto bg-zinc-800"
                      />
                    )}
                  </div>

                  {selectedDate && timeSlots.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2 text-white">
                        <Clock className="w-4 h-4" />
                        Select a Time
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? 'default' : 'outline'}
                            className={`w-full ${selectedTime === time ? 'bg-[#FD0061] hover:bg-[#FD0061]/90' : 'border-zinc-500 bg-zinc-800 text-white hover:bg-zinc-700'}`}
                            onClick={() => setSelectedTime(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                    <p className="text-sm text-gray-400">
                      Booking for: <strong className="text-white">{service.title}</strong>
                    </p>
                    <p className="text-sm text-gray-400">
                      Date: <strong className="text-white">{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</strong> at{' '}
                      <strong className="text-white">{selectedTime}</strong>
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2 text-white">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <Input
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2 text-white">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2 text-white">
                      <FileText className="w-4 h-4" />
                      Notes (Optional)
                    </label>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any specific topics you'd like to discuss?"
                      rows={3}
                      className="bg-zinc-800 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-[#FD0061]" />
                      <h4 className="font-medium text-white">Order Summary</h4>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Service:</span>
                        <span className="text-white">{service.title}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Date:</span>
                        <span className="text-white">{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</span>
                      </div>
                      <div className="flex justify-between text-gray-400">
                        <span>Time:</span>
                        <span className="text-white">{selectedTime}</span>
                      </div>
                      <div className="border-t border-zinc-700 pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span className="text-white">Total:</span>
                          <span className="text-[#FD0061] text-lg">{service.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                    <h4 className="font-medium text-white mb-4 text-center">Complete Your Payment</h4>
                    <PayPalButton
                      amount={getNumericPrice(service.price)}
                      description={`${service.title} - ${service.duration}`}
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                      onCancel={handlePaymentCancel}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {step < 2 && (
              <div className="flex justify-between mt-6 pt-4 border-t border-zinc-700">
                <Button
                  variant="outline"
                  onClick={step === 0 ? handleClose : handleBack}
                  className="border-zinc-500 bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {step === 0 ? 'Cancel' : 'Back'}
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="flex justify-start mt-6 pt-4 border-t border-zinc-700">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  className="border-zinc-500 bg-zinc-800 text-white hover:bg-zinc-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { format, isSameDay, startOfDay, parse } from 'date-fns';
import { ArrowLeft, ArrowRight, Check, Calendar as CalendarIcon, Clock, User, Mail, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AddToCalendar from './AddToCalendar';

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

const STEPS = ['Select Date & Time', 'Your Information', 'Confirmation'];

const BookingModal = ({ isOpen, onClose, service }: BookingModalProps) => {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

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
    mutationFn: async () => {
      if (!selectedDate || !selectedTime || !clientName || !clientEmail) {
        throw new Error('Missing required fields');
      }

      const { error } = await supabase.from('bookings').insert({
        booking_date: format(selectedDate, 'yyyy-MM-dd'),
        booking_time: selectedTime,
        client_name: clientName,
        client_email: clientEmail,
        notes: notes || null,
        status: 'upcoming',
        payment_status: 'pending',
        user_id: '00000000-0000-0000-0000-000000000000', // Guest booking placeholder
      });

      if (error) throw error;
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: 'Booking submitted!',
        description: 'You will receive payment instructions shortly.',
      });
    },
    onError: (error) => {
      toast({
        title: 'Booking failed',
        description: 'Please try again or contact support.',
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
    if (step === 1) {
      createBookingMutation.mutate();
    } else {
      setStep((prev) => Math.min(prev + 1, 2));
    }
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
    onClose();
  };

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {isSubmitted ? 'Booking Confirmed!' : `Book: ${service.title}`}
          </DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-4">
              Your booking request for <strong>{service.title}</strong> on{' '}
              <strong>{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</strong> at{' '}
              <strong>{selectedTime}</strong> has been submitted.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Payment instructions will be sent to <strong>{clientEmail}</strong>.
              Once payment is confirmed, your appointment will be approved.
            </p>
            
            {/* Google Calendar / ICS Integration */}
            {selectedDate && selectedTime && (
              <div className="mb-6">
                <p className="text-sm font-medium mb-3">Add to your calendar:</p>
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
                    end.setHours((hours || 0) + 1, minutes || 0, 0, 0); // Default 1 hour session
                    return end;
                  })()}
                  description={`Your coaching session with Shazmeen Bank.\n\nNotes: ${notes || 'None'}`}
                  location="Online via Zoom"
                />
              </div>
            )}
            
            <Button onClick={handleClose} className="btn-primary">
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
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`w-12 h-0.5 mx-1 ${
                        index < step ? 'bg-primary' : 'bg-muted'
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
                  <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CalendarIcon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{service.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {service.duration} • {service.price}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      Select a Date
                    </h4>
                    {availability.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground bg-muted/30 rounded-lg">
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
                            backgroundColor: 'hsl(var(--primary) / 0.1)',
                            fontWeight: 'bold',
                          },
                        }}
                        className="rounded-md border mx-auto"
                      />
                    )}
                  </div>

                  {selectedDate && timeSlots.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Select a Time
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? 'default' : 'outline'}
                            className="w-full"
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
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      Booking for: <strong>{service.title}</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Date: <strong>{selectedDate && format(selectedDate, 'MMMM d, yyyy')}</strong> at{' '}
                      <strong>{selectedTime}</strong>
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2">
                      <User className="w-4 h-4" />
                      Your Name
                    </label>
                    <Input
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4" />
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4" />
                      Notes (Optional)
                    </label>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any specific topics you'd like to discuss?"
                      rows={3}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6 pt-4 border-t">
              <Button
                variant="outline"
                onClick={step === 0 ? handleClose : handleBack}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {step === 0 ? 'Cancel' : 'Back'}
              </Button>
              <Button
                onClick={handleNext}
                disabled={createBookingMutation.isPending}
                className="btn-primary"
              >
                {createBookingMutation.isPending
                  ? 'Submitting...'
                  : step === 1
                  ? 'Submit Booking'
                  : 'Continue'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

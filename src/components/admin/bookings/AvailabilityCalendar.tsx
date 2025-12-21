import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { format, isSameDay, addDays } from 'date-fns';
import { Plus, X, Clock, Check, Pencil } from 'lucide-react';

type AvailabilitySlot = {
  id: string;
  available_date: string;
  is_available: boolean;
  time_slots: string[];
  notes: string | null;
};

const DEFAULT_TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: availability = [] } = useQuery({
    queryKey: ['admin-availability'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('coach_availability')
        .select('*')
        .order('available_date', { ascending: true });

      if (error) throw error;
      return data as AvailabilitySlot[];
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async ({
      date,
      timeSlots,
      isAvailable,
    }: {
      date: Date;
      timeSlots: string[];
      isAvailable: boolean;
    }) => {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const existingSlot = availability.find(
        (a) => a.available_date === formattedDate
      );

      if (existingSlot) {
        const { error } = await supabase
          .from('coach_availability')
          .update({
            time_slots: timeSlots,
            is_available: isAvailable,
          })
          .eq('id', existingSlot.id);

        if (error) throw error;
      } else {
        const { error } = await supabase.from('coach_availability').insert({
          available_date: formattedDate,
          time_slots: timeSlots,
          is_available: isAvailable,
        });

        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-availability'] });
      queryClient.invalidateQueries({ queryKey: ['coach-availability'] });
      toast({ title: 'Availability updated' });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to update availability.',
        variant: 'destructive',
      });
      console.error('Availability error:', error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (date: Date) => {
      const formattedDate = format(date, 'yyyy-MM-dd');
      const { error } = await supabase
        .from('coach_availability')
        .delete()
        .eq('available_date', formattedDate);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-availability'] });
      queryClient.invalidateQueries({ queryKey: ['coach-availability'] });
      setSelectedDate(undefined);
      setSelectedTimeSlots([]);
      toast({ title: 'Date removed from availability' });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to remove date.',
        variant: 'destructive',
      });
      console.error('Delete error:', error);
    },
  });

  // Get available dates
  const availableDates = availability
    .filter((a) => a.is_available)
    .map((a) => new Date(a.available_date));

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const existingSlot = availability.find((a) =>
        isSameDay(new Date(a.available_date), date)
      );
      setSelectedTimeSlots(existingSlot?.time_slots || []);
    } else {
      setSelectedTimeSlots([]);
    }
  };

  // Handle clicking on availability summary card to edit
  const handleEditFromCard = (slot: AvailabilitySlot) => {
    const date = new Date(slot.available_date);
    setSelectedDate(date);
    setSelectedTimeSlots(slot.time_slots || []);
  };

  // Toggle time slot
  const toggleTimeSlot = (time: string) => {
    setSelectedTimeSlots((prev) =>
      prev.includes(time) ? prev.filter((t) => t !== time) : [...prev, time]
    );
  };

  // Save availability for selected date
  const handleSave = () => {
    if (!selectedDate) return;
    upsertMutation.mutate({
      date: selectedDate,
      timeSlots: selectedTimeSlots,
      isAvailable: selectedTimeSlots.length > 0,
    });
  };

  // Remove date from availability
  const handleRemove = () => {
    if (!selectedDate) return;
    deleteMutation.mutate(selectedDate);
  };

  // Quick add next 7 days
  const handleQuickAddWeek = () => {
    const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i + 1));
    dates.forEach((date) => {
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      if (!isWeekend) {
        upsertMutation.mutate({
          date,
          timeSlots: DEFAULT_TIME_SLOTS.slice(0, 5), // 9 AM - 1 PM
          isAvailable: true,
        });
      }
    });
  };

  const existingSlot = selectedDate
    ? availability.find((a) =>
        isSameDay(new Date(a.available_date), selectedDate)
      )
    : null;

  const isEditing = !!existingSlot;

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Set Your Availability
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleDateSelect}
            disabled={(date) => date < new Date()}
            modifiers={{
              available: availableDates,
            }}
            modifiersStyles={{
              available: {
                backgroundColor: 'hsl(var(--primary) / 0.15)',
                fontWeight: 'bold',
                color: 'hsl(var(--primary))',
              },
            }}
            className="rounded-md border"
          />

          <p className="text-xs text-muted-foreground text-center">
            Highlighted dates have availability set. Click to edit.
          </p>

          <Button variant="outline" className="w-full" onClick={handleQuickAddWeek}>
            <Plus className="mr-2 h-4 w-4" />
            Quick Add Next 7 Weekdays
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              {selectedDate
                ? format(selectedDate, 'EEEE, MMMM d, yyyy')
                : 'Select a date'}
            </CardTitle>
            {selectedDate && (
              <Badge variant={isEditing ? 'secondary' : 'outline'}>
                {isEditing ? (
                  <>
                    <Pencil className="mr-1 h-3 w-3" />
                    Editing
                  </>
                ) : (
                  <>
                    <Plus className="mr-1 h-3 w-3" />
                    New
                  </>
                )}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {selectedDate ? (
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-3">Available Time Slots</p>
                <div className="grid grid-cols-3 gap-2">
                  {DEFAULT_TIME_SLOTS.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTimeSlots.includes(time) ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => toggleTimeSlot(time)}
                      className="text-xs"
                    >
                      {selectedTimeSlots.includes(time) && (
                        <Check className="mr-1 h-3 w-3" />
                      )}
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t space-y-2">
                <Button
                  className="w-full"
                  onClick={handleSave}
                  disabled={upsertMutation.isPending}
                >
                  {upsertMutation.isPending ? 'Saving...' : isEditing ? 'Update Availability' : 'Save Availability'}
                </Button>
                {existingSlot && (
                  <Button
                    variant="outline"
                    className="w-full text-destructive hover:text-destructive"
                    onClick={handleRemove}
                    disabled={deleteMutation.isPending}
                  >
                    <X className="mr-2 h-4 w-4" />
                    Remove This Date
                  </Button>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Clock className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Select a date from the calendar to set available time slots.</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upcoming Availability Summary */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Availability</CardTitle>
          <p className="text-sm text-muted-foreground">Click any date card to edit its time slots</p>
        </CardHeader>
        <CardContent>
          {availability.filter((a) => a.is_available && new Date(a.available_date) >= new Date()).length === 0 ? (
            <p className="text-center py-4 text-muted-foreground">
              No upcoming availability set. Select dates above to add availability.
            </p>
          ) : (
            <div className="flex flex-wrap gap-3">
              {availability
                .filter((a) => a.is_available && new Date(a.available_date) >= new Date())
                .sort((a, b) => new Date(a.available_date).getTime() - new Date(b.available_date).getTime())
                .slice(0, 14)
                .map((slot) => {
                  const isSelected = selectedDate && isSameDay(new Date(slot.available_date), selectedDate);
                  return (
                    <button
                      key={slot.id}
                      onClick={() => handleEditFromCard(slot)}
                      className={`bg-muted rounded-lg p-3 min-w-[140px] text-left transition-all hover:ring-2 hover:ring-primary/50 ${
                        isSelected ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-sm">
                          {format(new Date(slot.available_date), 'EEE, MMM d')}
                        </p>
                        <Pencil className="h-3 w-3 text-muted-foreground" />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {slot.time_slots.slice(0, 3).map((time) => (
                          <Badge key={time} variant="secondary" className="text-xs">
                            {time}
                          </Badge>
                        ))}
                        {slot.time_slots.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{slot.time_slots.length - 3}
                          </Badge>
                        )}
                      </div>
                    </button>
                  );
                })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AvailabilityCalendar;
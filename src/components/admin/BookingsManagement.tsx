import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Calendar, ClipboardList, Users } from 'lucide-react';
import BookingsList from './bookings/BookingsList';
import AvailabilityCalendar from './bookings/AvailabilityCalendar';

const BookingsManagement = () => {
  const [activeTab, setActiveTab] = useState('requests');

  const { data: bookings = [], isLoading: bookingsLoading } = useQuery({
    queryKey: ['admin-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const { data: waitlistCount = 0 } = useQuery({
    queryKey: ['waitlist-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('course_waitlist')
        .select('*', { count: 'exact', head: true });

      if (error) throw error;
      return count || 0;
    },
  });

  const pendingBookings = bookings.filter((b) => b.payment_status === 'pending').length;
  const approvedBookings = bookings.filter((b) => b.payment_status === 'approved').length;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6 flex items-center justify-between">
        <Button variant="outline" asChild>
          <Link to="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/admin/waitlist">
            <Users className="mr-2 h-4 w-4" />
            View Course Waitlist ({waitlistCount})
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <ClipboardList className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{pendingBookings}</p>
                <p className="text-sm text-muted-foreground">Pending Requests</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{approvedBookings}</p>
                <p className="text-sm text-muted-foreground">Approved Bookings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{waitlistCount}</p>
                <p className="text-sm text-muted-foreground">Course Waitlist</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Booking Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="requests" className="flex items-center gap-2">
                <ClipboardList className="h-4 w-4" />
                Booking Requests
              </TabsTrigger>
              <TabsTrigger value="availability" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Set Availability
              </TabsTrigger>
            </TabsList>

            <TabsContent value="requests">
              <BookingsList bookings={bookings} isLoading={bookingsLoading} />
            </TabsContent>

            <TabsContent value="availability">
              <AvailabilityCalendar />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingsManagement;

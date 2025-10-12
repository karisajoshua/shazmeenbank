import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import CoachRecommendations from "./CoachRecommendations";

interface Coach {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  reviews: number;
}

interface Booking {
  id: string;
  booking_date: string;
  booking_time: string;
  duration: number;
  status: string;
  notes: string;
  coaches: Coach;
}

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchBookings();

    // Set up real-time subscription
    const channel = supabase
      .channel('bookings_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'bookings'
        },
        () => {
          fetchBookings();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchBookings = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('bookings')
        .select(`
          *,
          coaches (*)
        `)
        .eq('user_id', user.id)
        .order('booking_date', { ascending: true });

      if (error) throw error;
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast({
        title: "Error",
        description: "Failed to load bookings",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Filter bookings based on active tab
  const filteredBookings = bookings.filter(booking => booking.status === activeTab);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-shazmeen-dark">My Bookings</h1>
        <Button className="btn-primary">Book New Session</Button>
      </div>
      
      {/* Tabs */}
      <div className="flex mb-8 border-b border-gray-200">
        <button
          className={`py-3 px-6 border-b-2 font-medium text-sm ${
            activeTab === "upcoming"
              ? "border-shazmeen-red text-shazmeen-dark"
              : "border-transparent text-gray-500 hover:text-shazmeen-dark"
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`py-3 px-6 border-b-2 font-medium text-sm ${
            activeTab === "completed"
              ? "border-shazmeen-red text-shazmeen-dark"
              : "border-transparent text-gray-500 hover:text-shazmeen-dark"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Past Sessions
        </button>
      </div>
      
      {/* Bookings List */}
      <div className="space-y-6">
        {loading ? (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">Loading bookings...</p>
          </div>
        ) : filteredBookings.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl">
            <h3 className="text-xl font-semibold text-shazmeen-dark mb-2">
              {activeTab === "upcoming" ? "No upcoming sessions" : "No past sessions"}
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === "upcoming" 
                ? "Book a coaching session to get personalized guidance" 
                : "Your completed sessions will appear here"}
            </p>
            <Button className="btn-primary">Book a Session</Button>
          </div>
        ) : (
          filteredBookings.map(booking => (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 p-6 bg-gray-50 flex flex-col items-center justify-center">
                  <img 
                    src={booking.coaches.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'} 
                    alt={booking.coaches.name}
                    className="w-20 h-20 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-bold text-shazmeen-dark text-center">{booking.coaches.name}</h3>
                  <p className="text-shazmeen-red text-sm text-center">{booking.coaches.specialization}</p>
                </div>
                <div className="p-6 md:w-3/4">
                  <div className="md:flex justify-between mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shazmeen-red mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">{new Date(booking.booking_date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shazmeen-red mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>{booking.booking_time} ({booking.duration} minutes)</span>
                      </div>
                    </div>
                    
                    {booking.status === "upcoming" && (
                      <div className="mt-4 md:mt-0">
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                          Upcoming
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {booking.notes && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-500 mb-1">Session Notes</h4>
                      <p className="text-gray-700">{booking.notes}</p>
                    </div>
                  )}
                  
                  <div className="flex space-x-3">
                    {booking.status === "upcoming" ? (
                      <>
                        <Button className="btn-primary">Add to Calendar</Button>
                        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                          Reschedule
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button className="btn-primary">View Notes</Button>
                        <Button variant="outline" className="btn-outline">Book Follow Up</Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Coach Recommendations */}
      <CoachRecommendations />
    </div>
  );
};

export default MyBookings;

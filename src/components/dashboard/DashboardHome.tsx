import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Stats {
  activeCourses: number;
  completedCourses: number;
  upcomingBookings: number;
  savedPodcasts: number;
}

interface Course {
  id: string;
  title: string;
  progress: number;
  modules_completed: number;
  total_modules: number;
}

interface UpcomingBooking {
  id: string;
  booking_date: string;
  booking_time: string;
  coaches: {
    name: string;
    specialization: string;
  } | null;
}

const DashboardHome = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<Stats>({
    activeCourses: 0,
    completedCourses: 0,
    upcomingBookings: 0,
    savedPodcasts: 0
  });
  const [activeCourses, setActiveCourses] = useState<Course[]>([]);
  const [upcomingBookings, setUpcomingBookings] = useState<UpcomingBooking[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Fetch stats
      const [userCoursesRes, bookingsRes] = await Promise.all([
        supabase
          .from('user_courses')
          .select('status')
          .eq('user_id', user.id),
        supabase
          .from('bookings')
          .select('status')
          .eq('user_id', user.id)
      ]);

      const activeCourseCount = userCoursesRes.data?.filter(c => c.status === 'active').length || 0;
      const completedCourseCount = userCoursesRes.data?.filter(c => c.status === 'completed').length || 0;
      const upcomingBookingCount = bookingsRes.data?.filter(b => b.status === 'upcoming').length || 0;

      setStats({
        activeCourses: activeCourseCount,
        completedCourses: completedCourseCount,
        upcomingBookings: upcomingBookingCount,
        savedPodcasts: 0
      });

      // Fetch active courses with details
      const { data: coursesData } = await supabase
        .from('user_courses')
        .select(`
          id,
          progress,
          modules_completed,
          courses (
            id,
            title,
            total_modules
          )
        `)
        .eq('user_id', user.id)
        .eq('status', 'active')
        .limit(2);

      if (coursesData) {
        const formattedCourses = coursesData.map(uc => ({
          id: uc.id,
          title: (uc.courses as any)?.title || 'Untitled Course',
          progress: uc.progress || 0,
          modules_completed: uc.modules_completed || 0,
          total_modules: (uc.courses as any)?.total_modules || 0
        }));
        setActiveCourses(formattedCourses);
      }

      // Fetch upcoming bookings
      const { data: bookingsData } = await supabase
        .from('bookings')
        .select(`
          id,
          booking_date,
          booking_time,
          coaches (
            name,
            specialization
          )
        `)
        .eq('user_id', user.id)
        .eq('status', 'upcoming')
        .gte('booking_date', new Date().toISOString().split('T')[0])
        .order('booking_date', { ascending: true })
        .limit(3);

      if (bookingsData) {
        setUpcomingBookings(bookingsData);
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-shazmeen-red mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-shazmeen-dark">Welcome Back!</h1>
        <p className="text-gray-600">Continue your learning journey</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-shazmeen-dark">{stats.activeCourses}</div>
          <div className="text-gray-600 text-sm">Active Courses</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-shazmeen-dark">{stats.completedCourses}</div>
          <div className="text-gray-600 text-sm">Completed Courses</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-shazmeen-dark">{stats.upcomingBookings}</div>
          <div className="text-gray-600 text-sm">Upcoming Bookings</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="text-3xl font-bold text-shazmeen-dark">{stats.savedPodcasts}</div>
          <div className="text-gray-600 text-sm">Saved Podcasts</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Course Progress */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-shazmeen-dark">Continue Learning</h2>
            <Link to="/dashboard/courses" className="text-shazmeen-red hover:underline text-sm">
              View All Courses
            </Link>
          </div>
          
          {activeCourses.length > 0 ? (
            <div className="space-y-6">
              {activeCourses.map(course => (
                <div key={course.id} className="border border-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-shazmeen-dark mb-2">{course.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500 mb-3">
                    <span>Module {course.modules_completed} of {course.total_modules} completed</span>
                    <span>{course.progress}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-shazmeen-red h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <Button className="w-full btn-primary">Continue Course</Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">You haven't started any courses yet</p>
              <Link to="/courses">
                <Button className="btn-primary">Browse Courses</Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Upcoming Bookings */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-shazmeen-dark">Upcoming Bookings</h2>
            <Link to="/dashboard/bookings" className="text-shazmeen-red hover:underline text-sm">
              View All
            </Link>
          </div>
          
          {upcomingBookings.length > 0 ? (
            <div className="space-y-4">
              {upcomingBookings.map(booking => (
                <div key={booking.id} className="flex items-start p-4 border-l-4 border-shazmeen-red bg-gray-50 rounded-r-lg">
                  <div className="mr-4 p-2 bg-shazmeen-blush rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-shazmeen-dark">
                      {booking.coaches ? `Session with ${booking.coaches.name}` : 'Coaching Session'}
                    </h3>
                    <div className="text-sm text-gray-600">
                      {format(new Date(booking.booking_date), 'MMM dd, yyyy')} • {booking.booking_time}
                    </div>
                    {booking.coaches?.specialization && (
                      <div className="text-xs text-gray-500 mt-1">{booking.coaches.specialization}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No upcoming bookings</p>
              <Link to="/bookings">
                <Button className="btn-primary">Book a Session</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

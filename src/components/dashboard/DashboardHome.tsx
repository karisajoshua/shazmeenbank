
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  // Mock data
  const stats = [
    { label: "Active Courses", value: 2 },
    { label: "Completed Courses", value: 1 },
    { label: "Upcoming Bookings", value: 1 },
    { label: "Saved Podcasts", value: 5 }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Leadership Coaching Session",
      date: "May 18, 2025",
      time: "10:00 AM",
      type: "booking"
    },
    {
      id: 2,
      title: "Financial Mindset Mastery: Module 3 Deadline",
      date: "May 20, 2025",
      time: "",
      type: "course"
    },
    {
      id: 3,
      title: "Live Q&A: Entrepreneurship Basics",
      date: "May 25, 2025",
      time: "2:00 PM",
      type: "webinar"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Completed Module 2",
      course: "Financial Mindset Mastery",
      date: "May 10, 2025"
    },
    {
      id: 2,
      action: "Scheduled Coaching Session",
      course: "with Sarah Johnson",
      date: "May 9, 2025"
    },
    {
      id: 3,
      action: "Saved Podcast",
      course: "Overcoming Imposter Syndrome",
      date: "May 7, 2025"
    }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-shazmeen-dark">Welcome Back, Jane!</h1>
        <p className="text-gray-600">Continue your learning journey</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl font-bold text-shazmeen-dark">{stat.value}</div>
            <div className="text-gray-600 text-sm">{stat.label}</div>
          </div>
        ))}
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
          
          <div className="space-y-6">
            {/* Course 1 */}
            <div className="border border-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-shazmeen-dark mb-2">Financial Mindset Mastery</h3>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>Module 2 of 8 completed</span>
                <span>25% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-shazmeen-red h-2.5 rounded-full" style={{ width: "25%" }}></div>
              </div>
              <Button className="w-full btn-primary">Continue Course</Button>
            </div>
            
            {/* Course 2 */}
            <div className="border border-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-shazmeen-dark mb-2">Leadership for Women</h3>
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <span>Module 3 of 6 completed</span>
                <span>50% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-shazmeen-red h-2.5 rounded-full" style={{ width: "50%" }}></div>
              </div>
              <Button className="w-full btn-primary">Continue Course</Button>
            </div>
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-shazmeen-dark">Upcoming Events</h2>
            <Link to="/dashboard/bookings" className="text-shazmeen-red hover:underline text-sm">
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            {upcomingEvents.map(event => (
              <div key={event.id} className="flex items-start p-4 border-l-4 border-shazmeen-red bg-gray-50 rounded-r-lg">
                <div className="mr-4 p-2 bg-shazmeen-blush rounded-lg">
                  {event.type === "booking" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  )}
                  {event.type === "course" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {event.type === "webinar" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-shazmeen-dark">{event.title}</h3>
                  <div className="text-sm text-gray-600">
                    {event.date} {event.time && `• ${event.time}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-shazmeen-dark">Recent Activity</h2>
          </div>
          
          <div className="space-y-4">
            {recentActivity.map(activity => (
              <div key={activity.id} className="flex items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="h-2 w-2 rounded-full bg-shazmeen-red mr-3"></div>
                <div className="flex-1">
                  <p className="text-shazmeen-dark">
                    <span className="font-semibold">{activity.action}</span> — {activity.course}
                  </p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

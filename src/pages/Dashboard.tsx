
import { useState } from "react";
import { Link, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MyCourses from "../components/dashboard/MyCourses";
import MyBookings from "../components/dashboard/MyBookings";
import SavedPodcasts from "../components/dashboard/SavedPodcasts";
import NewsletterPreferences from "../components/dashboard/NewsletterPreferences";
import DashboardHome from "../components/dashboard/DashboardHome";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const isActiveRoute = (route: string) => {
    return location.pathname === route || location.pathname === `${route}/`;
  };

  // Mock user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden sticky top-0 z-20 bg-white shadow-sm">
        <div className="container-custom py-4 flex justify-between items-center">
          <button
            onClick={toggleSidebar}
            className="text-shazmeen-dark p-2 rounded-md hover:bg-gray-100"
          >
            <Menu size={24} />
          </button>
          <div className="font-bold text-xl">Dashboard</div>
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Dashboard Layout */}
      <div className="flex">
        {/* Sidebar - Mobile (off-canvas) */}
        <aside
          className={`lg:hidden fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-200 ease-in-out`}
        >
          <div className="p-4 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>

          <nav className="py-4">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/dashboard"
                  className={`block px-4 py-2 ${
                    isActiveRoute("/dashboard")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeSidebar}
                >
                  Dashboard Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/courses"
                  className={`block px-4 py-2 ${
                    isActiveRoute("/dashboard/courses")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeSidebar}
                >
                  My Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/bookings"
                  className={`block px-4 py-2 ${
                    isActiveRoute("/dashboard/bookings")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeSidebar}
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/podcasts"
                  className={`block px-4 py-2 ${
                    isActiveRoute("/dashboard/podcasts")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeSidebar}
                >
                  Saved Podcasts
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/newsletter"
                  className={`block px-4 py-2 ${
                    isActiveRoute("/dashboard/newsletter")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={closeSidebar}
                >
                  Newsletter Preferences
                </Link>
              </li>
            </ul>

            <div className="mt-8 px-4">
              <Button
                variant="outline"
                className="w-full border-shazmeen-red text-shazmeen-red hover:bg-shazmeen-red hover:text-white"
                onClick={() => {
                  // In real app, this would log out the user
                  navigate("/");
                }}
              >
                Log Out
              </Button>
            </div>
          </nav>
        </aside>

        {/* Backdrop for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
            onClick={closeSidebar}
          ></div>
        )}

        {/* Sidebar - Desktop */}
        <aside className="hidden lg:block w-64 bg-white shadow-md min-h-screen">
          <div className="p-6 border-b">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>

          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/dashboard"
                  className={`block px-4 py-3 rounded-lg ${
                    isActiveRoute("/dashboard")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Dashboard Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/courses"
                  className={`block px-4 py-3 rounded-lg ${
                    isActiveRoute("/dashboard/courses")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  My Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/bookings"
                  className={`block px-4 py-3 rounded-lg ${
                    isActiveRoute("/dashboard/bookings")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/podcasts"
                  className={`block px-4 py-3 rounded-lg ${
                    isActiveRoute("/dashboard/podcasts")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Saved Podcasts
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/newsletter"
                  className={`block px-4 py-3 rounded-lg ${
                    isActiveRoute("/dashboard/newsletter")
                      ? "bg-shazmeen-blush text-shazmeen-dark font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Newsletter Preferences
                </Link>
              </li>
            </ul>

            <div className="mt-12">
              <Button
                variant="outline"
                className="w-full border-shazmeen-red text-shazmeen-red hover:bg-shazmeen-red hover:text-white"
                onClick={() => {
                  // In real app, this would log out the user
                  navigate("/");
                }}
              >
                Log Out
              </Button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:py-10 lg:px-12">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="courses" element={<MyCourses />} />
            <Route path="bookings" element={<MyBookings />} />
            <Route path="podcasts" element={<SavedPodcasts />} />
            <Route path="newsletter" element={<NewsletterPreferences />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

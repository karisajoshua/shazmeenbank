import { Routes, Route, Navigate } from 'react-router-dom';
import { useRequireAdmin } from '@/hooks/useAuth';
import AdminDashboard from '@/components/admin/AdminDashboard';
import BlogManagement from '@/components/admin/BlogManagement';
import PodcastManagement from '@/components/admin/PodcastManagement';
import CoursesManagement from '@/components/admin/CoursesManagement';
import BookingsManagement from '@/components/admin/BookingsManagement';
import WaitlistManagement from '@/components/admin/WaitlistManagement';
import ServicesManagement from '@/components/admin/ServicesManagement';
import CoachesManagement from '@/components/admin/CoachesManagement';
import MediaLibrary from '@/components/admin/MediaLibrary';
import { Loader2 } from 'lucide-react';

const Admin = () => {
  const { isLoading, isAdmin } = useRequireAdmin();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-grow">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="blog/*" element={<BlogManagement />} />
          <Route path="podcasts/*" element={<PodcastManagement />} />
          <Route path="courses/*" element={<CoursesManagement />} />
          <Route path="bookings" element={<BookingsManagement />} />
          <Route path="waitlist" element={<WaitlistManagement />} />
          <Route path="services/*" element={<ServicesManagement />} />
          <Route path="coaches/*" element={<CoachesManagement />} />
          <Route path="media" element={<MediaLibrary />} />
          <Route path="*" element={<Navigate to="/admin" replace />} />
        </Routes>
      </div>
      
      <footer className="border-t bg-muted/30 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Powered by <span className="font-semibold text-foreground">Texcortech Systems</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Admin;

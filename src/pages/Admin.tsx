import { Routes, Route, Navigate } from 'react-router-dom';
import { useRequireAdmin } from '@/hooks/useAuth';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminDashboard from '@/components/admin/AdminDashboard';
import BlogManagement from '@/components/admin/BlogManagement';
import PodcastManagement from '@/components/admin/PodcastManagement';
import CoursesManagement from '@/components/admin/CoursesManagement';
import BookingsManagement from '@/components/admin/BookingsManagement';
import WaitlistManagement from '@/components/admin/WaitlistManagement';
import ServicesManagement from '@/components/admin/ServicesManagement';
import CoachesManagement from '@/components/admin/CoachesManagement';
import MediaLibrary from '@/components/admin/MediaLibrary';
import NewsletterManagement from '@/components/admin/NewsletterManagement';
import ContactMessagesManagement from '@/components/admin/ContactMessagesManagement';
import FreeResourcesManagement from '@/components/admin/FreeResourcesManagement';
import RevenueOverview from '@/components/admin/RevenueOverview';
import { Loader2 } from 'lucide-react';

const Admin = () => {
  const { isLoading, isAdmin } = useRequireAdmin();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <AdminLayout>
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
        <Route path="newsletter" element={<NewsletterManagement />} />
        <Route path="messages" element={<ContactMessagesManagement />} />
        <Route path="resources/*" element={<FreeResourcesManagement />} />
        <Route path="revenue" element={<RevenueOverview />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
    </AdminLayout>
  );
};

export default Admin;

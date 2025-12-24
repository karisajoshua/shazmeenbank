import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Mic2, 
  GraduationCap, 
  Calendar, 
  Heart,
  Users,
  TrendingUp,
  Image as ImageIcon,
  Mail,
  MessageSquare
} from 'lucide-react';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    blogPosts: 0,
    podcasts: 0,
    courses: 0,
    bookings: 0,
    services: 0,
    coaches: 0,
    subscribers: 0,
    messages: 0,
    unreadMessages: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const [blogCount, podcastCount, courseCount, bookingCount, serviceCount, coachCount, subscriberCount, messageCount, unreadCount] = 
      await Promise.all([
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('podcast_episodes').select('*', { count: 'exact', head: true }),
        supabase.from('courses').select('*', { count: 'exact', head: true }),
        supabase.from('bookings').select('*', { count: 'exact', head: true }),
        supabase.from('booking_services').select('*', { count: 'exact', head: true }),
        supabase.from('coaches').select('*', { count: 'exact', head: true }),
        supabase.from('newsletter_subscribers').select('*', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true }),
        supabase.from('contact_messages').select('*', { count: 'exact', head: true }).eq('is_read', false),
      ]);

    setStats({
      blogPosts: blogCount.count || 0,
      podcasts: podcastCount.count || 0,
      courses: courseCount.count || 0,
      bookings: bookingCount.count || 0,
      services: serviceCount.count || 0,
      coaches: coachCount.count || 0,
      subscribers: subscriberCount.count || 0,
      messages: messageCount.count || 0,
      unreadMessages: unreadCount.count || 0,
    });
  };

  const quickActions = [
    { title: 'New Blog Post', href: '/admin/blog/new', icon: FileText, color: 'text-blue-600' },
    { title: 'Add Podcast', href: '/admin/podcasts/new', icon: Mic2, color: 'text-purple-600' },
    { title: 'Create Course', href: '/admin/courses/new', icon: GraduationCap, color: 'text-green-600' },
    { title: 'Add Service', href: '/admin/services/new', icon: Heart, color: 'text-pink-600' },
    { title: 'Upload Media', href: '/admin/media', icon: ImageIcon, color: 'text-cyan-600' },
  ];

  const managementCards = [
    { 
      title: 'Blog Posts', 
      count: stats.blogPosts, 
      href: '/admin/blog', 
      icon: FileText,
      description: 'Manage your blog content',
      color: 'text-blue-600 bg-blue-50'
    },
    { 
      title: 'Podcasts', 
      count: stats.podcasts, 
      href: '/admin/podcasts', 
      icon: Mic2,
      description: 'Manage podcast episodes',
      color: 'text-purple-600 bg-purple-50'
    },
    { 
      title: 'Courses', 
      count: stats.courses, 
      href: '/admin/courses', 
      icon: GraduationCap,
      description: 'Manage courses and content',
      color: 'text-green-600 bg-green-50'
    },
    { 
      title: 'Bookings', 
      count: stats.bookings, 
      href: '/admin/bookings', 
      icon: Calendar,
      description: 'View and manage bookings',
      color: 'text-orange-600 bg-orange-50'
    },
    { 
      title: 'Services', 
      count: stats.services, 
      href: '/admin/services', 
      icon: Heart,
      description: 'Manage booking services',
      color: 'text-pink-600 bg-pink-50'
    },
    { 
      title: 'Coaches', 
      count: stats.coaches, 
      href: '/admin/coaches', 
      icon: Users,
      description: 'Manage coach profiles',
      color: 'text-indigo-600 bg-indigo-50'
    },
    { 
      title: 'Newsletter Subscribers', 
      count: stats.subscribers, 
      href: '/admin/newsletter', 
      icon: Mail,
      description: 'View and export subscribers',
      color: 'text-teal-600 bg-teal-50'
    },
    { 
      title: 'Contact Messages', 
      count: stats.messages, 
      href: '/admin/messages', 
      icon: MessageSquare,
      description: `${stats.unreadMessages} unread messages`,
      color: 'text-red-600 bg-red-50',
      badge: stats.unreadMessages > 0 ? stats.unreadMessages : null
    },
    { 
      title: 'Media Library', 
      count: null, 
      href: '/admin/media', 
      icon: ImageIcon,
      description: 'Upload images and copy URLs',
      color: 'text-cyan-600 bg-cyan-50'
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your website content</p>
        </div>
        <Button asChild>
          <Link to="/">
            <TrendingUp className="mr-2 h-4 w-4" />
            View Site
          </Link>
        </Button>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {quickActions.map((action) => (
            <Button 
              key={action.href}
              asChild 
              variant="outline" 
              className="h-24 flex-col gap-2"
            >
              <Link to={action.href}>
                <action.icon className={`h-6 w-6 ${action.color}`} />
                <span>{action.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Management Cards */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Content Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementCards.map((card) => (
            <Card key={card.href} className="hover:shadow-lg transition-shadow relative">
              {card.badge && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {card.badge}
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg ${card.color}`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  {card.count !== null && (
                    <span className="text-3xl font-bold">{card.count}</span>
                  )}
                </div>
                <CardTitle className="mt-4">{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to={card.href}>
                    {card.title === 'Media Library' ? 'Open Media Library' : `Manage ${card.title}`}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
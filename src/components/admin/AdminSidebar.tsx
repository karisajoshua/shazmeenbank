import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  LayoutDashboard,
  FileText,
  Mic,
  GraduationCap,
  Gift,
  Calendar,
  Briefcase,
  Users,
  Mail,
  MessageSquare,
  UserPlus,
  DollarSign,
  Image,
  ExternalLink,
  ChevronRight,
  LogOut,
  MessageCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

const menuSections = [
  {
    label: 'Overview',
    items: [
      { title: 'Dashboard', url: '/admin', icon: LayoutDashboard, exact: true },
      { title: 'Revenue', url: '/admin/revenue', icon: DollarSign },
    ],
  },
  {
    label: 'Content',
    items: [
      { title: 'Blog Posts', url: '/admin/blog', icon: FileText },
      { title: 'Comments', url: '/admin/comments', icon: MessageCircle },
      { title: 'Podcasts', url: '/admin/podcasts', icon: Mic },
      { title: 'Courses', url: '/admin/courses', icon: GraduationCap },
      { title: 'Free Resources', url: '/admin/resources', icon: Gift },
    ],
  },
  {
    label: 'Bookings',
    items: [
      { title: 'Booking Requests', url: '/admin/bookings', icon: Calendar },
      { title: 'Services', url: '/admin/services', icon: Briefcase },
    ],
  },
  {
    label: 'People',
    items: [
      { title: 'Coaches', url: '/admin/coaches', icon: Users },
      { title: 'Newsletter', url: '/admin/newsletter', icon: Mail },
      { title: 'Messages', url: '/admin/messages', icon: MessageSquare },
      { title: 'Waitlist', url: '/admin/waitlist', icon: UserPlus },
    ],
  },
  {
    label: 'Media',
    items: [
      { title: 'Media Library', url: '/admin/media', icon: Image },
    ],
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = useSidebar();
  const { signOut } = useAuth();
  const collapsed = state === 'collapsed';

  const isActive = (url: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === url;
    }
    return location.pathname.startsWith(url);
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <Sidebar 
      className="border-r border-gray-200 bg-white"
      collapsible="icon"
    >
      <SidebarHeader className="border-b border-gray-200 p-4">
        <Link to="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          {!collapsed && (
            <span className="font-semibold text-gray-900">Admin Panel</span>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        {menuSections.map((section) => (
          <SidebarGroup key={section.label}>
            {!collapsed && (
              <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 mb-2">
                {section.label}
              </SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => {
                  const active = isActive(item.url, item.exact);
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        tooltip={collapsed ? item.title : undefined}
                        className={cn(
                          'w-full justify-start gap-3 px-3 py-2 rounded-lg transition-colors',
                          active
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                        )}
                      >
                        <Link to={item.url}>
                          <item.icon className={cn('h-4 w-4', active ? 'text-primary' : 'text-gray-500')} />
                          {!collapsed && <span>{item.title}</span>}
                          {!collapsed && active && (
                            <ChevronRight className="ml-auto h-4 w-4 text-primary" />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-200 p-4 space-y-2">
        <Link
          to="/"
          className={cn(
            'flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors',
            collapsed && 'justify-center'
          )}
        >
          <ExternalLink className="h-4 w-4" />
          {!collapsed && <span>View Site</span>}
        </Link>
        <button
          onClick={handleLogout}
          className={cn(
            'flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors w-full',
            collapsed && 'justify-center'
          )}
        >
          <LogOut className="h-4 w-4" />
          {!collapsed && <span>Logout</span>}
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;

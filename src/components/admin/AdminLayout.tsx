import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import AdminSidebar from './AdminSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <header className="h-14 border-b border-gray-200 bg-white flex items-center px-4 sticky top-0 z-10">
            <SidebarTrigger className="text-gray-600 hover:text-gray-900 hover:bg-gray-100" />
            <div className="ml-4 text-sm text-gray-500">
              Admin Dashboard
            </div>
          </header>

          {/* Main content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-200 bg-white py-4 mt-auto">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm text-gray-500">
                Powered by <span className="font-semibold text-gray-900">Texcortech Systems</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;

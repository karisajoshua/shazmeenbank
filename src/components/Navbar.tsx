import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import sbLogo from "@/assets/logo/shazmeen-sb-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, isAdmin, signOut } = useAuth();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    toast.success('Signed out successfully');
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/60 backdrop-blur-xl shadow-2xl border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center gap-3">
            <img alt="Shazmeen Bank Logo" className="h-16 md:h-20 object-contain" src={sbLogo} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-all duration-300 ${isActive('/') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>Home</Link>
            <Link to="/courses" className={`transition-all duration-300 ${isActive('/courses') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>Courses</Link>
            <Link to="/bookings" className={`transition-all duration-300 ${isActive('/bookings') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>Book Me</Link>
            <Link to="/podcast" className={`transition-all duration-300 ${isActive('/podcast') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>Podcast</Link>
            <Link to="/videos" className={`transition-all duration-300 ${isActive('/videos') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>Videos</Link>
            <Link to="/blog" className={`transition-all duration-300 ${isActive('/blog') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>Blog</Link>
            <Link to="/about" className={`transition-all duration-300 ${isActive('/about') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>My Story</Link>
            <Link to="/contact" className={`transition-all duration-300 ${isActive('/contact') ? 'text-[#FD0061] font-medium' : 'text-white hover:text-[#FD0061]'}`}>Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to={isAdmin ? "/admin" : "/dashboard"}>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 rounded-xl px-5 py-3 font-bold"
                  >
                    {isAdmin ? "Admin Dashboard" : "Dashboard"}
                  </Button>
                </Link>
                <Button 
                  onClick={handleSignOut}
                  variant="outline"
                  className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 rounded-xl px-5 py-3 font-bold flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Sign Out
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button 
                  className="bg-[#FD0061] text-white hover:bg-[#FD0061]/90 transition-all duration-300 rounded-xl px-5 py-3 font-bold"
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in bg-black/95 backdrop-blur-xl py-6 absolute top-full left-0 right-0 shadow-premium border-t border-white/10">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className={`px-4 py-2 rounded-md ${isActive('/') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>Home</Link>
              <Link to="/courses" className={`px-4 py-2 rounded-md ${isActive('/courses') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>Courses</Link>
              <Link to="/bookings" className={`px-4 py-2 rounded-md ${isActive('/bookings') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>Book Me</Link>
              <Link to="/podcast" className={`px-4 py-2 rounded-md ${isActive('/podcast') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>Podcast</Link>
              <Link to="/videos" className={`px-4 py-2 rounded-md ${isActive('/videos') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>Videos</Link>
              <Link to="/blog" className={`px-4 py-2 rounded-md ${isActive('/blog') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>Blog</Link>
              <Link to="/about" className={`px-4 py-2 rounded-md ${isActive('/about') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>My Story</Link>
              <Link to="/contact" className={`px-4 py-2 rounded-md ${isActive('/contact') ? 'bg-[#FD0061]/20 text-[#FD0061] font-medium' : 'text-white hover:bg-white/10'}`} onClick={toggleMenu}>Contact</Link>
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                {user ? (
                  <>
                    <Link to={isAdmin ? "/admin" : "/dashboard"} className="w-full" onClick={toggleMenu}>
                      <Button variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white hover:text-black w-full rounded-xl px-5 py-3 font-bold">{isAdmin ? "Admin Dashboard" : "Dashboard"}</Button>
                    </Link>
                    <Button 
                      onClick={handleSignOut}
                      variant="outline" 
                      className="border-white/30 text-white bg-white/10 hover:bg-white hover:text-black w-full rounded-xl px-5 py-3 font-bold flex items-center justify-center gap-2"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <Link to="/login" className="w-full">
                    <Button className="bg-[#FD0061] text-white hover:bg-[#FD0061]/90 w-full rounded-xl px-5 py-3 font-bold">Sign In</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

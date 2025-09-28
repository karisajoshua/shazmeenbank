
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-premium py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo and brand name */}
          <Link to="/" className="flex items-center gap-3">
            <img alt="Shazmeen Bank Logo" className="h-20 object-contain" src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeen_logo-removebg-preview.png" />
            <span className={`text-2xl font-serif font-bold ${isScrolled ? 'text-shazmeen-dark' : 'text-white'}`}></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-all duration-300 ${isActive('/') ? 'text-shazmeen-red font-medium' : isScrolled ? 'text-shazmeen-dark hover:text-shazmeen-red' : 'text-white hover:text-shazmeen-red'}`}>Home</Link>
            <Link to="/courses" className={`transition-all duration-300 ${isActive('/courses') ? 'text-shazmeen-red font-medium' : isScrolled ? 'text-shazmeen-dark hover:text-shazmeen-red' : 'text-white hover:text-shazmeen-red'}`}>Courses</Link>
            <Link to="/bookings" className={`transition-all duration-300 ${isActive('/bookings') ? 'text-shazmeen-red font-medium' : isScrolled ? 'text-shazmeen-dark hover:text-shazmeen-red' : 'text-white hover:text-shazmeen-red'}`}>Bookings</Link>
            <Link to="/podcast" className={`transition-all duration-300 ${isActive('/podcast') ? 'text-shazmeen-red font-medium' : isScrolled ? 'text-shazmeen-dark hover:text-shazmeen-red' : 'text-white hover:text-shazmeen-red'}`}>Podcast</Link>
            <Link to="/blog" className={`transition-all duration-300 ${isActive('/blog') ? 'text-shazmeen-red font-medium' : isScrolled ? 'text-shazmeen-dark hover:text-shazmeen-red' : 'text-white hover:text-shazmeen-red'}`}>Blog</Link>
            <Link to="/about" className={`transition-all duration-300 ${isActive('/about') ? 'text-shazmeen-red font-medium' : isScrolled ? 'text-shazmeen-dark hover:text-shazmeen-red' : 'text-white hover:text-shazmeen-red'}`}>About</Link>
            <Link to="/contact" className={`transition-all duration-300 ${isActive('/contact') ? 'text-shazmeen-red font-medium' : isScrolled ? 'text-shazmeen-dark hover:text-shazmeen-red' : 'text-white hover:text-shazmeen-red'}`}>Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button 
                variant="outline" 
                className={`${isScrolled ? 'border-shazmeen-dark text-black hover:bg-shazmeen-dark hover:text-white' : 'border-white text-black hover:bg-white hover:text-shazmeen-dark'} transition-all duration-300 rounded-xl px-5 py-3 font-bold`}
              >
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-shazmeen-dark text-white hover:bg-opacity-90 transition-all duration-300 rounded-xl px-5 py-3 font-bold">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`${isScrolled ? 'text-shazmeen-dark' : 'text-white'} p-2`}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in bg-white py-6 absolute top-full left-0 right-0 shadow-premium">
            <div className="flex flex-col space-y-4 px-4">
              <Link to="/" className={`px-4 py-2 rounded-md ${isActive('/') ? 'bg-shazmeen-blush/30 text-shazmeen-red font-medium' : 'text-shazmeen-dark hover:bg-shazmeen-blush/20'}`} onClick={toggleMenu}>Home</Link>
              <Link to="/courses" className={`px-4 py-2 rounded-md ${isActive('/courses') ? 'bg-shazmeen-blush/30 text-shazmeen-red font-medium' : 'text-shazmeen-dark hover:bg-shazmeen-blush/20'}`} onClick={toggleMenu}>Courses</Link>
              <Link to="/bookings" className={`px-4 py-2 rounded-md ${isActive('/bookings') ? 'bg-shazmeen-blush/30 text-shazmeen-red font-medium' : 'text-shazmeen-dark hover:bg-shazmeen-blush/20'}`} onClick={toggleMenu}>Bookings</Link>
              <Link to="/podcast" className={`px-4 py-2 rounded-md ${isActive('/podcast') ? 'bg-shazmeen-blush/30 text-shazmeen-red font-medium' : 'text-shazmeen-dark hover:bg-shazmeen-blush/20'}`} onClick={toggleMenu}>Podcast</Link>
              <Link to="/blog" className={`px-4 py-2 rounded-md ${isActive('/blog') ? 'bg-shazmeen-blush/30 text-shazmeen-red font-medium' : 'text-shazmeen-dark hover:bg-shazmeen-blush/20'}`} onClick={toggleMenu}>Blog</Link>
              <Link to="/about" className={`px-4 py-2 rounded-md ${isActive('/about') ? 'bg-shazmeen-blush/30 text-shazmeen-red font-medium' : 'text-shazmeen-dark hover:bg-shazmeen-blush/20'}`} onClick={toggleMenu}>About</Link>
              <Link to="/contact" className={`px-4 py-2 rounded-md ${isActive('/contact') ? 'bg-shazmeen-blush/30 text-shazmeen-red font-medium' : 'text-shazmeen-dark hover:bg-shazmeen-blush/20'}`} onClick={toggleMenu}>Contact</Link>
              
              <div className="flex space-x-4 pt-4 border-t border-gray-100">
                <Link to="/login" className="w-1/2">
                  <Button variant="outline" className="border-shazmeen-dark text-shazmeen-dark hover:bg-shazmeen-dark hover:text-white w-full rounded-xl px-5 py-3 font-bold">Login</Button>
                </Link>
                <Link to="/register" className="w-1/2">
                  <Button className="bg-shazmeen-dark text-white hover:bg-opacity-90 w-full rounded-xl px-5 py-3 font-bold">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

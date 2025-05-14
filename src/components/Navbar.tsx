
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-shazmeen-white border-b border-shazmeen-gray shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-shazmeen-dark">Shazmeen Bank</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">Home</Link>
            <Link to="/courses" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">Courses</Link>
            <Link to="/bookings" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">Bookings</Link>
            <Link to="/podcast" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">Podcast</Link>
            <Link to="/blog" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">Blog</Link>
            <Link to="/newsletter" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">Newsletter</Link>
            <Link to="/about" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">About</Link>
            <Link to="/contact" className="text-shazmeen-dark hover:text-shazmeen-red font-medium">Contact</Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="btn-outline">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="btn-primary">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-shazmeen-dark">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in bg-shazmeen-white py-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>Home</Link>
              <Link to="/courses" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>Courses</Link>
              <Link to="/bookings" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>Bookings</Link>
              <Link to="/podcast" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>Podcast</Link>
              <Link to="/blog" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>Blog</Link>
              <Link to="/newsletter" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>Newsletter</Link>
              <Link to="/about" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="px-4 py-2 text-shazmeen-dark hover:bg-shazmeen-blush rounded-md" onClick={toggleMenu}>Contact</Link>
              
              <div className="flex space-x-4 px-4 pt-2">
                <Link to="/login" className="w-1/2">
                  <Button variant="outline" className="btn-outline w-full">Login</Button>
                </Link>
                <Link to="/register" className="w-1/2">
                  <Button className="btn-primary w-full">Sign Up</Button>
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

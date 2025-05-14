
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-shazmeen-dark text-shazmeen-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Shazmeen Bank</h3>
            <p className="text-shazmeen-gray">Learn. Grow. Transform — with Shazmeen Bank.</p>
            <p className="text-shazmeen-gray">Over 10,000+ women empowered.</p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Courses</Link></li>
              <li><Link to="/bookings" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Bookings</Link></li>
              <li><Link to="/podcast" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Podcast</Link></li>
              <li><Link to="/blog" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3 - More links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Contact</Link></li>
              <li><Link to="/newsletter" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Newsletter</Link></li>
              <li><Link to="/login" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe to Newsletter</h4>
            <p className="text-shazmeen-gray mb-4">Join 10K+ women getting tools to grow — free every week.</p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-xl border border-shazmeen-gray focus:ring-2 focus:ring-shazmeen-red focus:outline-none bg-transparent"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-shazmeen-gray mt-10 pt-6">
          <p className="text-center text-shazmeen-gray">
            &copy; {new Date().getFullYear()} Shazmeen Bank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

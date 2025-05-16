
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-shazmeen-dark to-gray-900 text-shazmeen-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 - Logo and info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">Shazmeen Bank</h3>
            <p className="text-shazmeen-gray">Learn. Grow. Transform — with Shazmeen Bank.</p>
            <p className="text-shazmeen-gray">Over 10,000+ women empowered.</p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-shazmeen-blush">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Home</Link></li>
              <li><Link to="/courses" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Courses</Link></li>
              <li><Link to="/bookings" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Bookings</Link></li>
              <li><Link to="/podcast" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Podcast</Link></li>
              <li><Link to="/blog" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Column 3 - More links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-shazmeen-blush">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Contact</Link></li>
              <li><Link to="/newsletter" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Newsletter</Link></li>
              <li><Link to="/login" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Login</Link></li>
              <li><Link to="/register" className="text-shazmeen-gray hover:text-shazmeen-red transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-shazmeen-blush">Subscribe to Newsletter</h4>
            <p className="text-shazmeen-gray mb-4">Join 10K+ women getting tools to grow — free every week.</p>
            <div className="flex flex-col space-y-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-shazmeen-red focus:outline-none bg-transparent"
              />
              <button className="btn-primary py-3">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <p className="text-center text-shazmeen-gray">
            &copy; {new Date().getFullYear()} Shazmeen Bank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

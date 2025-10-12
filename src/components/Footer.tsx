
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
              <a href="https://www.facebook.com/profile.php?id=100078764546585" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/shazmeenbank/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.tiktok.com/@shazmeen_bank" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69C18.58 6.38 17.68 5.78 17.01 5C16.34 4.22 15.92 3.28 15.81 2.26H12.7V15.23C12.7 15.73 12.56 16.22 12.29 16.64C12.03 17.06 11.65 17.39 11.2 17.59C10.75 17.79 10.25 17.85 9.76 17.76C9.27 17.67 8.82 17.45 8.46 17.11C8.11 16.76 7.86 16.32 7.76 15.83C7.65 15.35 7.69 14.84 7.87 14.38C8.04 13.92 8.35 13.52 8.76 13.24C9.17 12.96 9.66 12.8 10.16 12.8C10.41 12.8 10.67 12.83 10.91 12.9V9.76C10.56 9.71 10.22 9.69 9.87 9.69C8.66 9.69 7.48 10.05 6.48 10.71C5.47 11.38 4.68 12.33 4.21 13.45C3.74 14.58 3.63 15.82 3.88 17.01C4.13 18.19 4.73 19.27 5.61 20.11C6.48 20.94 7.59 21.49 8.79 21.7C9.99 21.9 11.22 21.75 12.32 21.25C13.43 20.75 14.35 19.93 15 18.91C15.64 17.88 15.97 16.7 15.97 15.5V10.12C17.47 11.08 19.22 11.6 21 11.59V8.48C20.5 8.48 20.01 8.38 19.55 8.2C19.09 8.01 18.67 7.74 18.31 7.39L19.59 6.69Z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCYYSYmYSMPi8YZ3TjHl4JGg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://x.com/bankshazmeen" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-shazmeen-red/20 flex items-center justify-center text-shazmeen-red hover:bg-shazmeen-red hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
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
          <p className="text-center text-shazmeen-gray mt-2">
            Powered by Texcortech Systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

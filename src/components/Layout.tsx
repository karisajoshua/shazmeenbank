
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsletterPopup from "./popups/NewsletterPopup";
import ExitIntentPopup from "./popups/ExitIntentPopup";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center bg-white py-4 border-b border-gray-100">
        <img 
          src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeen_logo-removebg-preview.png" 
          alt="Shazmeen Bank Logo" 
          className="h-20 object-contain"
        />
      </div>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* Popups */}
      <NewsletterPopup />
      <ExitIntentPopup />
    </div>
  );
};

export default Layout;


import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsletterPopup from "./popups/NewsletterPopup";
import ExitIntentPopup from "./popups/ExitIntentPopup";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
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

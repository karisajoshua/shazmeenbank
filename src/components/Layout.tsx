
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewsletterPopup from "./popups/NewsletterPopup";
import ExitIntentPopup from "./popups/ExitIntentPopup";
import FloatingSocialIcons from "./FloatingSocialIcons";

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
      
      {/* Floating Social Icons */}
      <FloatingSocialIcons />
    </div>
  );
};

export default Layout;

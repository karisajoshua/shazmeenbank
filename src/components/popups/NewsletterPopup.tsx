
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const NewsletterPopup = () => {
  const [open, setOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem("newsletterPopupShown") === "true";
    if (popupShown) {
      setHasShownPopup(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 300 && !hasScrolled) {
        setHasScrolled(true);
        setTimeout(() => {
          setOpen(true);
          sessionStorage.setItem("newsletterPopupShown", "true");
          setHasShownPopup(true);
        }, 1000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setOpen(false);
  };

  // Don't render if already shown
  if (hasShownPopup) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white p-0 overflow-hidden max-w-md w-[90vw] rounded-xl border-none shadow-premium [&>button]:text-shazmeen-dark [&>button]:hover:bg-shazmeen-gray/20 [&>button]:rounded-full">
        <div className="bg-gradient-soft p-6 pt-12 pb-8">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl md:text-3xl heading-elegant font-bold text-shazmeen-dark mb-2">
              Join 10K+ Women Getting Tools to Grow
            </DialogTitle>
            <DialogDescription className="text-lg text-shazmeen-dark mb-6">
              Free weekly content designed to help you transform your mindset.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                placeholder="Your email address"
              />
            </div>
            
            <div className="flex items-start">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="h-4 w-4 mt-1 text-shazmeen-red focus:ring-shazmeen-red border-gray-300 rounded"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                I agree to receive emails from Shazmeen Bank. I understand I can unsubscribe at any time.
              </label>
            </div>
            
            <Button type="submit" className="w-full btn-primary py-3 text-lg">
              Subscribe Now
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterPopup;

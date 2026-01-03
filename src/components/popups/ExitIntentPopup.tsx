
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem("exitIntentShown") === "true";
    if (popupShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Exit intent detected when mouse moves to top of page quickly
      if (e.clientY <= 5 && !hasShown) {
        setOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Only add listener after a delay to prevent triggering immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 3000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the email to your backend here
    setIsSubmitted(true);
  };

  const handleDownload = () => {
    // In a real app, this would trigger a file download
    // For this example, we'll just close the modal
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-white p-0 overflow-hidden max-w-md w-[90vw] rounded-xl border-none shadow-premium [&>button]:text-shazmeen-dark [&>button]:hover:bg-shazmeen-gray/20 [&>button]:rounded-full">
        <div className="bg-gradient-to-b from-shazmeen-secondary to-white p-6 pt-12 pb-8">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl md:text-3xl heading-elegant font-bold text-shazmeen-dark mb-2">
              Wait! Before You Go...
            </DialogTitle>
            <DialogDescription className="text-lg text-shazmeen-dark mb-4">
              Get our free "7-Day Mindset Transformation Plan" and start seeing results immediately.
            </DialogDescription>
          </DialogHeader>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  id="exit-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                  placeholder="Your email address"
                />
              </div>
              
              <Button type="submit" className="w-full btn-primary py-3 text-lg">
                Send Me The Free PDF
              </Button>
              
              <p className="text-xs text-center text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="py-3 text-shazmeen-dark">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-shazmeen-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="mt-2 text-lg font-medium">Thank you!</p>
                <p>Your download is ready</p>
              </div>
              
              <Button onClick={handleDownload} className="btn-secondary py-3 px-6">
                Download PDF Now
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;

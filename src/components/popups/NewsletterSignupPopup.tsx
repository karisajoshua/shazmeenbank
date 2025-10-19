
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type NewsletterSignupPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewsletterSignupPopup = ({ isOpen, onClose }: NewsletterSignupPopupProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Send newsletter subscription to info@shazmeenbank.com
    
    // Show success message
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter. Welcome to the community!",
      duration: 5000,
    });
    
    // Set submitted state to show thank you message
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setEmail("");
    setName("");
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full shadow-xl relative overflow-hidden">
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-shazmeen-dark mb-2">
                  The Newsletter Reset
                </h3>
                <p className="text-gray-600">
                  Real talk, healing prompts, and soulful check-ins straight to your inbox.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-shazmeen-dark focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-shazmeen-dark focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-shazmeen-dark text-white hover:bg-opacity-90 transition-all duration-300 rounded-xl px-6 py-3 font-bold">
                  Subscribe to Newsletter
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-2">Welcome!</h3>
              <p className="text-gray-600 mb-4">
                You're now part of the community. Check your inbox for a welcome message.
              </p>
              <Button onClick={handleClose} className="bg-shazmeen-dark text-white hover:bg-opacity-90 transition-all duration-300 rounded-xl px-6 py-3 font-bold">
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupPopup;

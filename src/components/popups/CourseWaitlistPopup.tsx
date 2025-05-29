
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type CourseWaitlistPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    description: string;
  } | null;
};

const CourseWaitlistPopup = ({ isOpen, onClose, course }: CourseWaitlistPopupProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to info@shazmeenbank.com
    console.log("Added to waitlist:", { name, email, course: course?.title, sendTo: "info@shazmeenbank.com" });
    
    // Show success message
    toast({
      title: "Success!",
      description: "You've been added to the waitlist. We'll notify you when the course is available.",
      duration: 5000,
    });
    
    // Set submitted state to show thank you message
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full shadow-xl relative overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src="https://loqubmypggsmkuwjomvb.supabase.co/storage/v1/object/public/shazmeen//Screen%20Shot%202025-05-30%20at%2002.21.33.png" 
              alt="Shazmeen Bank" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            {!isSubmitted ? (
              <>
                <div className="mb-6">
                  <img 
                    src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeen_logo-removebg-preview.png" 
                    alt="Shazmeen Bank Logo" 
                    className="h-12 mb-4"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-shazmeen-dark mb-2">
                  Join the Waitlist
                </h3>
                <p className="text-gray-600 mb-6">
                  Be the first to know when enrollment opens and get exclusive early bird pricing.
                </p>
                
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
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
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
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary text-lg py-3">
                    Join Waitlist
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
                <h3 className="text-2xl font-bold text-shazmeen-dark mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-4">
                  You're on the waitlist. We'll notify you when enrollment opens with exclusive early bird pricing.
                </p>
                <Button onClick={onClose} className="btn-primary">
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseWaitlistPopup;

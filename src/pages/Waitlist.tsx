
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Send waitlist data to backend
    
    // Show success message
    toast({
      title: "Welcome to the waitlist!",
      description: "You'll be the first to know about our early bird offer when the course launches.",
      duration: 5000,
    });
    
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-shazmeen-dark via-[#1a2d43] to-shazmeen-dark">
      <div className="container-custom py-20">
        <Link to="/" className="inline-flex items-center text-white hover:text-shazmeen-blush mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-premium overflow-hidden">
            {!isSubmitted ? (
              <>
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                    alt="Shazmeen Bank teaching" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <img 
                        src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeen_logo-removebg-preview.png" 
                        alt="Shazmeen Bank Logo" 
                        className="h-12 mb-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h1 className="text-3xl font-bold text-shazmeen-dark mb-4">
                    Unlearn. Rebuild. Love Better.
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Be the first to access my transformative course on healing attachment wounds and stepping into your worth. Join the waitlist for exclusive early bird pricing.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full btn-primary text-lg py-3">
                      Join the Waitlist
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="text-center py-12 px-8">
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-shazmeen-dark mb-4">You're In!</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Welcome to the waitlist. You'll receive an email with exclusive early bird pricing as soon as the course launches.
                </p>
                <Link to="/">
                  <Button className="btn-primary">
                    Return to Home
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;


import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join 10K+ Women Getting Tools to Grow</h1>
            <p className="text-xl text-shazmeen-gray">
              Free weekly content designed to help you transform your mindset and master your future.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Sign Up */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-shazmeen-dark mb-6 text-center">Subscribe to Our Newsletter</h2>
              
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Every week, we'll send you:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Practical tips for personal and professional growth</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Inspiring stories from women who've transformed their lives</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive resources, worksheets, and tools</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-shazmeen-red mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Early access to new courses and events</span>
                  </li>
                </ul>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
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
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
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
                    I agree to receive emails from Shazmeen Bank. I understand I can unsubscribe at any time. View our{" "}
                    <a href="#" className="text-shazmeen-red hover:underline">Privacy Policy</a>.
                  </label>
                </div>
                
                <Button className="w-full btn-primary py-3 text-lg">
                  Subscribe Now
                </Button>
              </form>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-xl font-bold text-shazmeen-dark mb-4">Already subscribed?</h3>
              <p className="text-gray-700 mb-6">
                Check out our free resources available for download.
              </p>
              <Button variant="outline" className="btn-outline">
                View Free Resources
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;

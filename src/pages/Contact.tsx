
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // In a real app this would send the data to a backend
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-shazmeen-gray">
              Have questions or want to learn more? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-shazmeen-dark mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-lg text-shazmeen-dark mb-1">Email Us</p>
                  <a href="mailto:hello@shazmeenbank.com" className="text-shazmeen-red hover:underline">
                    hello@shazmeenbank.com
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold text-lg text-shazmeen-dark mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-shazmeen-red hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
                
                <div>
                  <p className="font-semibold text-lg text-shazmeen-dark mb-1">Office Location</p>
                  <address className="not-italic text-gray-700">
                    123 Growth Street<br />
                    San Francisco, CA 94107<br />
                    United States
                  </address>
                </div>
                
                <div>
                  <p className="font-semibold text-lg text-shazmeen-dark mb-3">Follow Us</p>
                  <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-shazmeen-dark text-white flex items-center justify-center hover:bg-shazmeen-red transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-shazmeen-dark text-white flex items-center justify-center hover:bg-shazmeen-red transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-shazmeen-dark text-white flex items-center justify-center hover:bg-shazmeen-red transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-shazmeen-dark text-white flex items-center justify-center hover:bg-shazmeen-red transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* FAQ Preview */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-shazmeen-dark mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-shazmeen-dark">How do I access my courses after purchase?</h4>
                    <p className="text-gray-600">
                      After purchasing a course, you'll receive login credentials to access our learning platform where all your course materials are available.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-shazmeen-dark">Can I get a refund if I'm not satisfied?</h4>
                    <p className="text-gray-600">
                      We offer a 14-day money-back guarantee on all our courses if you're not completely satisfied.
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button variant="link" className="text-shazmeen-red p-0 h-auto hover:underline">
                      View all FAQs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-md">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-8 w-8 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-xl font-bold text-green-800">Message Sent Successfully!</h3>
                      <div className="mt-2 text-green-700">
                        <p>Thank you for contacting us, {formData.name}! We've received your message and will get back to you soon.</p>
                      </div>
                      <div className="mt-4">
                        <Button className="btn-primary" onClick={() => setSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-shazmeen-dark mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
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
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="Course Inquiry">Course Inquiry</option>
                        <option value="Coaching Session">Coaching Session</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full">
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="aspect-w-16 aspect-h-7 bg-gray-200 min-h-[400px]">
          {/* Replace with actual map integration */}
          <div className="flex items-center justify-center text-gray-400">
            <p>Map will be displayed here</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

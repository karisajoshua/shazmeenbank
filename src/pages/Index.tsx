import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import VideoHero from "@/components/VideoHero";
import LogoCarousel from "@/components/LogoCarousel";

const Index = () => {
  return (
    <>
      {/* Hero Section with Video Background */}
      <VideoHero />

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-dark mb-4">How Shazmeen Bank Helps You Grow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My comprehensive suite of resources designed to transform your mindset and help you achieve your personal and financial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-shazmeen-blush p-6 rounded-xl card-hover">
              <div className="text-shazmeen-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                  <path d="M12 7V3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Expert-Led Courses</h3>
              <p className="text-gray-700">Self-paced programs built for real transformation in your life and career.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-shazmeen-blush p-6 rounded-xl card-hover">
              <div className="text-shazmeen-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 20v-9a2 2 0 0 0-2-2h-1"></path>
                  <path d="M7 13H5a2 2 0 0 0-2 2v5"></path>
                  <path d="M12 22v-9"></path>
                  <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M12 3v4"></path>
                  <path d="M18 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M6 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-2">1:1 Coaching Sessions</h3>
              <p className="text-gray-700">Personalized guidance from Shazmeen to help you navigate challenges and reach your goals.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-shazmeen-blush p-6 rounded-xl card-hover">
              <div className="text-shazmeen-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path>
                  <path d="M2 10h4"></path>
                  <path d="M2 16h4"></path>
                  <path d="M18 10h4"></path>
                  <path d="M18 16h4"></path>
                  <path d="M10 2h4"></path>
                  <path d="M10 22h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Inspiring Podcasts</h3>
              <p className="text-gray-700">Shazmeen's conversations that shift perspectives and provide actionable insights.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-shazmeen-blush p-6 rounded-xl card-hover">
              <div className="text-shazmeen-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                  <path d="m3 9 9-6 9 6"></path>
                  <path d="M15 21v-6a3 3 0 1 0-6 0v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Free Downloads & Newsletter</h3>
              <p className="text-gray-700">Weekly tips and resources from Shazmeen Bank to support your personal growth journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-dark mb-2">Featured Courses</h2>
              <p className="text-xl text-gray-600">Self-paced programs built for real transformation.</p>
            </div>
            <Link to="/courses" className="mt-4 md:mt-0">
              <Button className="btn-primary">View All Courses</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt="Financial Mindset Mastery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-shazmeen-blush text-shazmeen-dark text-xs font-bold px-3 py-1 rounded-full">Beginner</span>
                  <span className="text-sm text-gray-500">8 weeks</span>
                </div>
                <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Financial Mindset Mastery</h3>
                <p className="text-gray-600 mb-4">Transform your relationship with money and build wealth with purpose.</p>
                <Link to="/courses/financial-mindset-mastery">
                  <Button className="w-full btn-primary">Enroll Now</Button>
                </Link>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Leadership for Women"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-shazmeen-blush text-shazmeen-dark text-xs font-bold px-3 py-1 rounded-full">Intermediate</span>
                  <span className="text-sm text-gray-500">6 weeks</span>
                </div>
                <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Leadership for Women</h3>
                <p className="text-gray-600 mb-4">Develop your authentic leadership style and excel in any environment.</p>
                <Link to="/courses/leadership-for-women">
                  <Button className="w-full btn-primary">Enroll Now</Button>
                </Link>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Entrepreneurship Essentials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-shazmeen-blush text-shazmeen-dark text-xs font-bold px-3 py-1 rounded-full">Advanced</span>
                  <span className="text-sm text-gray-500">10 weeks</span>
                </div>
                <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Entrepreneurship Essentials</h3>
                <p className="text-gray-600 mb-4">Build a sustainable business aligned with your values and purpose.</p>
                <Link to="/courses/entrepreneurship-essentials">
                  <Button className="w-full btn-primary">Enroll Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching CTA Section */}
      <section className="section-padding bg-shazmeen-dark text-shazmeen-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready for personalized guidance?</h2>
              <p className="text-xl text-shazmeen-gray">
                Book a 1:1 coaching session with our expert coaches to get tailored advice for your unique situation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="text-shazmeen-red mr-2" />
                  <span>Personalized action plans</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-shazmeen-red mr-2" />
                  <span>Accountability and support</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="text-shazmeen-red mr-2" />
                  <span>Expert guidance from experienced coaches</span>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/bookings">
                  <Button className="btn-primary">Book Your Session Now</Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="1:1 Coaching Session"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Free Guide CTA */}
      <section className="section-padding bg-shazmeen-blush">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-dark mb-4">Want a free mindset guide?</h2>
            <p className="text-xl text-gray-700 mb-8">
              DM "MINDSET" on Instagram to receive our comprehensive guide to shifting your mindset for success.
            </p>
            <Button className="btn-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow on Instagram
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

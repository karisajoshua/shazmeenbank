
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Shazmeen Bank</h1>
            <p className="text-xl text-shazmeen-gray">
              Our mission is to empower women to transform their mindset and master their future.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-shazmeen-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Shazmeen Bank was founded with a clear vision: to create a space where women could access the tools, resources, and community needed to transform their mindset and achieve their full potential.
                </p>
                <p>
                  What started as a small coaching practice has grown into a comprehensive platform offering courses, coaching, podcasts, and resources designed specifically for women on a journey of growth.
                </p>
                <p>
                  Today, we've empowered over 10,000 women to break through limitations, build confidence, and create lives and businesses aligned with their values and purpose.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1573497620053-ea5300f8f38f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                alt="Our founder story" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-shazmeen-blush">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shazmeen-dark mb-4">Our Approach</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At Shazmeen Bank, we believe in a holistic approach to growth that integrates mindset work with practical strategies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-shazmeen-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Learn</h3>
              <p className="text-gray-700">
                Access expert-led courses designed to give you the knowledge and tools needed for transformation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-shazmeen-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 17a10 10 0 1 1-20 0"></path>
                  <path d="M8 17s.5-2 2-3c.7-.7 1.7-1 3-1s2.3.3 3 1c1.5 1 2 3 2 3"></path>
                  <path d="M9 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                  <path d="M17 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Grow</h3>
              <p className="text-gray-700">
                Implement strategies and build habits that create sustainable growth in all areas of your life.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="text-shazmeen-red mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                  <line x1="16" y1="8" x2="2" y2="22"></line>
                  <line x1="17.5" y1="15" x2="9" y2="15"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark mb-2">Transform</h3>
              <p className="text-gray-700">
                Experience profound shifts in your mindset that allow you to create lasting change and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-shazmeen-dark mb-4">Meet Our Team</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our diverse team of experts is passionate about helping women reach their full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f8f38f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Sarah Johnson" 
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark">Sarah Johnson</h3>
              <p className="text-shazmeen-red mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Financial coach with a passion for helping women build wealth and independence.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="Michael Chen" 
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark">Michael Chen</h3>
              <p className="text-shazmeen-red mb-2">Leadership Coach</p>
              <p className="text-gray-600 text-sm">
                Specializes in helping professionals advance through authentic leadership.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" 
                    alt="Priya Patel" 
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark">Priya Patel</h3>
              <p className="text-shazmeen-red mb-2">Business Coach</p>
              <p className="text-gray-600 text-sm">
                Entrepreneur who helps women build sustainable businesses aligned with their values.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="mb-4 relative">
                <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="David Williams" 
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-shazmeen-dark">David Williams</h3>
              <p className="text-shazmeen-red mb-2">Mindset Coach</p>
              <p className="text-gray-600 text-sm">
                Helps clients overcome limiting beliefs for peak productivity and balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-shazmeen-dark text-shazmeen-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-shazmeen-gray mb-8">
              Join thousands of women who have transformed their mindset and mastered their future with Shazmeen Bank.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="btn-primary">Start Learning</Button>
              <Button variant="outline" className="border-shazmeen-white text-shazmeen-white hover:bg-shazmeen-white hover:text-shazmeen-dark">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

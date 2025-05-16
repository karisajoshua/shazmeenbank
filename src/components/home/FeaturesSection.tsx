
import { CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;

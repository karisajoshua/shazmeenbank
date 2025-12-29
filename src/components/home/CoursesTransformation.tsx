import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CoursesTransformationProps {
  onWaitlistClick: () => void;
  onNewsletterClick: () => void;
}

const CoursesTransformation = ({ onWaitlistClick, onNewsletterClick }: CoursesTransformationProps) => {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        {/* CTA Buttons moved from Hero */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={onNewsletterClick}
            className="bg-zinc-900 text-white border border-zinc-700 shadow-xl text-lg w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 hover:bg-zinc-800"
          >
            Unlearn. Rebuild. Love Better.
          </Button>
          <Link to="/bookings">
            <Button className="bg-shazmeen-red text-white shadow-xl text-lg w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 hover:bg-shazmeen-red/90">
              Begin 1:1 healing
            </Button>
          </Link>
          <Link to="/bookings">
            <Button className="bg-shazmeen-blush text-black shadow-xl text-lg w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 hover:bg-shazmeen-blush/90">
              Couples coaching
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-white mb-6">
            Courses for Heart & Life Transformation
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Go at your own pace with immersive courses designed to help you break old patterns, create healthier relationships, and build a life rooted in self-worth and clarity.
          </p>
          <Link to="/courses">
            <Button 
              className="bg-transparent text-white text-xl px-10 py-5 border-2 border-shazmeen-red hover:bg-shazmeen-red/10 transition-all duration-300"
            >
              View Available Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesTransformation;

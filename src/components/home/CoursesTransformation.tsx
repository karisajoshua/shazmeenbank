import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CoursesTransformationProps {
  onWaitlistClick: () => void;
}

const CoursesTransformation = ({ onWaitlistClick }: CoursesTransformationProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* CTA Buttons moved from Hero */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            onClick={onWaitlistClick}
            className="bg-shazmeen-dark text-white shadow-xl text-lg w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 hover:bg-shazmeen-dark/90"
          >
            Unlearn. Rebuild. Love Better.
          </Button>
          <Link to="/bookings">
            <Button className="bg-shazmeen-red text-white shadow-xl text-lg w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 hover:bg-shazmeen-red/90">
              Begin 1:1 healing
            </Button>
          </Link>
          <Link to="/bookings">
            <Button className="bg-shazmeen-blush text-shazmeen-dark shadow-xl text-lg w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 hover:bg-shazmeen-blush/90">
              Couples coaching
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Courses for Heart & Life Transformation
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Go at your own pace with immersive courses designed to help you break old patterns, create healthier relationships, and build a life rooted in self-worth and clarity.
          </p>
          <Button 
            onClick={onWaitlistClick}
            className="btn-primary text-lg px-8 py-4"
          >
            View Available Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesTransformation;

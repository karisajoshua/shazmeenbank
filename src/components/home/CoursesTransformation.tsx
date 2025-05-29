
import React from "react";
import { Button } from "@/components/ui/button";

interface CoursesTransformationProps {
  onWaitlistClick: () => void;
}

const CoursesTransformation = ({ onWaitlistClick }: CoursesTransformationProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
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

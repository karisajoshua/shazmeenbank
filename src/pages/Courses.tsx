
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseWaitlistPopup from "@/components/popups/CourseWaitlistPopup";

const Courses = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const { data: courses, isLoading } = useQuery({
    queryKey: ['published-courses'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleEnrollClick = (course: any) => {
    setSelectedCourse(course);
    setIsWaitlistOpen(true);
  };

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Self-paced programs built for real transformation</h1>
            <p className="text-xl text-shazmeen-gray leading-relaxed">
              Designed to help you heal deeply, love securely, and grow into the most grounded version of yourself.
              Everything here is built to give you structure, tools, and the emotional insight to create real change — in love, in life, and in how you show up for yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading courses...</p>
            </div>
          ) : !courses || courses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No courses available at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-12">
              {courses.map(course => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      {course.image ? (
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-shazmeen-dark to-shazmeen-red flex items-center justify-center">
                          <span className="text-white text-xl font-semibold">Course</span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="mb-4">
                        <span className="text-sm text-gray-500 font-medium">{course.total_modules} modules</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-shazmeen-dark mb-4">{course.title}</h2>
                      {course.description && (
                        <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">{course.description}</p>
                      )}
                      
                      <Button 
                        className="btn-primary"
                        onClick={() => handleEnrollClick(course)}
                      >
                        Get Notified
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-dark mb-8">Ready for personalized guidance?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/bookings">
                <Button className="btn-primary px-8 py-4 text-lg">Book a 1:1 Session</Button>
              </Link>
              <Link to="/bookings">
                <Button className="btn-outline px-8 py-4 text-lg">Book Couples Session</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Waitlist Popup */}
      {isWaitlistOpen && (
        <CourseWaitlistPopup 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
          course={selectedCourse}
        />
      )}
    </>
  );
};

export default Courses;

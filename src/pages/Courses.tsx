import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CourseWaitlistPopup from "@/components/popups/CourseWaitlistPopup";
import ScrollReveal from "@/components/ui/ScrollReveal";

const INITIAL_OUTCOMES_COUNT = 3;

const LearningOutcomes = ({ outcomes }: { outcomes: string[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMore = outcomes.length > INITIAL_OUTCOMES_COUNT;
  const displayedOutcomes = isExpanded ? outcomes : outcomes.slice(0, INITIAL_OUTCOMES_COUNT);

  return (
    <div className="bg-zinc-800 rounded-2xl p-6 mb-8">
      <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-[#FD0061]" />
        You'll learn to:
      </h3>
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {displayedOutcomes.map((outcome: string, idx: number) => (
            <motion.div 
              key={idx} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-5 h-5 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-400" />
              </div>
              <span className="text-gray-300">{outcome}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-2 text-[#FD0061] font-medium hover:text-[#FD0061]/80 transition-colors"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              Show less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              Show {outcomes.length - INITIAL_OUTCOMES_COUNT} more
            </>
          )}
        </button>
      )}
    </div>
  );
};

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
      <section className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white pt-28 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD0061]/20 text-[#FD0061] mb-6">
                <Sparkles className="w-4 h-4" />
                Transform Your Life
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Self-paced programs built for real transformation</h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Designed to help you heal deeply, love securely, and grow into the most grounded version of yourself.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-gray-400">Loading courses...</p>
            </div>
          ) : !courses || courses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No courses available at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-24">
              {courses.map((course: any, index: number) => {
                const isEven = index % 2 === 0;
                
                return (
                  <ScrollReveal key={course.id} delay={index * 0.1}>
                    <div className="relative">
                      <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start`}>
                        {/* Image Section */}
                        <div className={`relative group ${!isEven ? 'lg:order-2' : ''}`}>
                          <div className="absolute inset-0 bg-gradient-to-br from-[#FD0061]/20 to-amber-500/20 rounded-3xl transform rotate-2 group-hover:rotate-4 transition-transform duration-500" />
                          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            {course.image ? (
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-[350px] lg:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                              />
                            ) : (
                              <div className="w-full h-[350px] lg:h-[450px] bg-gradient-to-br from-zinc-800 to-[#FD0061] flex items-center justify-center">
                                <span className="text-white text-xl font-semibold">Course</span>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            
                            {/* Duration badge */}
                            {course.duration_text && (
                              <div className="absolute top-6 left-6">
                                <span className="bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-black shadow-lg">
                                  {course.duration_text}
                                </span>
                              </div>
                            )}
                            
                            {/* Modules badge */}
                            {course.total_modules > 0 && (
                              <div className="absolute bottom-6 left-6">
                                <span className="bg-[#FD0061]/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg">
                                  {course.total_modules} {course.total_modules === 1 ? 'Module' : 'Modules'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                          {/* Subtitle */}
                          {course.subtitle && (
                            <p className="text-[#FD0061] font-medium mb-3">
                              {course.subtitle}
                            </p>
                          )}
                          
                          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                            {course.title}
                          </h2>
                          
                          {course.description && (
                            <div className="text-gray-300 mb-8 leading-relaxed whitespace-pre-line">
                              {course.description}
                            </div>
                          )}
                          
                          {/* Learning Outcomes - Now collapsible */}
                          {course.learning_outcomes && course.learning_outcomes.length > 0 && (
                            <LearningOutcomes outcomes={course.learning_outcomes} />
                          )}
                          
                          {/* CTA Text */}
                          {course.cta_text && (
                            <p className="text-[#FD0061] font-semibold italic mb-6 border-l-4 border-[#FD0061] pl-4">
                              {course.cta_text}
                            </p>
                          )}
                          
                          <Button 
                            className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white px-8 py-6 text-lg"
                            onClick={() => handleEnrollClick(course)}
                          >
                            Get Notified
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FD0061]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container-custom relative">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready for personalized guidance?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                If you're looking for 1:1 support, book a session and let's work together on your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/bookings">
                  <Button className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white px-8 py-6 text-lg">Book a 1:1 Session</Button>
                </a>
                <a href="/bookings">
                  <Button variant="outline" className="border-2 border-white/60 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg">
                    Book Couples Session
                  </Button>
                </a>
              </div>
            </ScrollReveal>
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

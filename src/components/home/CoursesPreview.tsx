import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const CourseCard = ({
  title,
  description,
  level,
  duration,
  imageSrc,
  slug
}: {
  title: string;
  description: string;
  level: string;
  duration: string;
  imageSrc: string;
  slug: string;
}) => {
  return (
    <div className="premium-card shadow-premium overflow-hidden card-hover">
      <div className="h-52 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
      </div>
      <div className="p-8">
        <div className="flex justify-between items-center mb-3">
          <span className="bg-shazmeen-blush text-shazmeen-dark text-xs font-bold px-4 py-1 rounded-full">{level}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <h3 className="text-xl heading-elegant font-bold text-shazmeen-dark mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link to={`/courses/${slug}`}>
          <Button className="w-full btn-primary">Enroll Now</Button>
        </Link>
      </div>
    </div>
  );
};

const CoursesPreview = () => {
  const { data: courses, isLoading } = useQuery({
    queryKey: ['published-courses-preview'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center py-12">
            <p className="text-gray-600">Loading courses...</p>
          </div>
        </div>
      </section>
    );
  }

  if (!courses || courses.length === 0) {
    return null; // Don't show section if no courses
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl heading-elegant font-bold text-shazmeen-dark mb-2">Courses Coming Soon</h2>
            <p className="text-xl text-gray-600">Self-paced programs built for real transformation.</p>
            <div className="w-20 h-1 bg-shazmeen-red mt-4 hidden md:block"></div>
          </div>
          <Link to="/courses" className="mt-6 md:mt-0">
            <Button className="btn-primary">View All Courses</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map(course => (
            <CourseCard 
              key={course.id} 
              title={course.title} 
              description={course.description || ''} 
              level="Self-paced" 
              duration={`${course.total_modules} modules`} 
              imageSrc={course.image || 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800'} 
              slug={course.id} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;

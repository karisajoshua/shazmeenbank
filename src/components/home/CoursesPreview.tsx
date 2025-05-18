
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
  const featuredCourses = [
    {
      title: "Attachment Healing Journey",
      description: "Learn how to recognize and heal insecure attachment patterns for healthier relationships.",
      level: "Beginner",
      duration: "8 weeks",
      imageSrc: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      slug: "attachment-healing-journey"
    },
    {
      title: "Breaking Trauma Bonds",
      description: "Recognize, understand and break free from toxic relationship patterns.",
      level: "Intermediate",
      duration: "6 weeks",
      imageSrc: "https://images.unsplash.com/photo-1519834484944-d587de5abed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      slug: "breaking-trauma-bonds"
    },
    {
      title: "Secure Love Blueprint",
      description: "Build lasting, healthy relationships through emotional intelligence and secure attachment.",
      level: "Advanced",
      duration: "10 weeks",
      imageSrc: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      slug: "secure-love-blueprint"
    }
  ];

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
          {featuredCourses.map(course => (
            <CourseCard 
              key={course.slug} 
              title={course.title} 
              description={course.description} 
              level={course.level} 
              duration={course.duration} 
              imageSrc={course.imageSrc} 
              slug={course.slug} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPreview;

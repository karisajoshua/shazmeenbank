
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CourseCard = ({ title, description, level, duration, imageSrc, slug }: {
  title: string;
  description: string;
  level: string;
  duration: string;
  imageSrc: string;
  slug: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-shazmeen-blush text-shazmeen-dark text-xs font-bold px-3 py-1 rounded-full">{level}</span>
          <span className="text-sm text-gray-500">{duration}</span>
        </div>
        <h3 className="text-xl font-bold text-shazmeen-dark mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
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
      title: "Financial Mindset Mastery",
      description: "Transform your relationship with money and build wealth with purpose.",
      level: "Beginner",
      duration: "8 weeks",
      imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      slug: "financial-mindset-mastery"
    },
    {
      title: "Leadership for Women",
      description: "Develop your authentic leadership style and excel in any environment.",
      level: "Intermediate",
      duration: "6 weeks",
      imageSrc: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      slug: "leadership-for-women"
    },
    {
      title: "Entrepreneurship Essentials",
      description: "Build a sustainable business aligned with your values and purpose.",
      level: "Advanced",
      duration: "10 weeks",
      imageSrc: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      slug: "entrepreneurship-essentials"
    }
  ];

  return (
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
          {featuredCourses.map((course) => (
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

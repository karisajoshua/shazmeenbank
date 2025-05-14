
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// Mock course data
const courseData = [
  {
    id: 1,
    title: "Financial Mindset Mastery",
    description: "Transform your relationship with money and build wealth with purpose.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    level: "Beginner",
    duration: "8 weeks",
    category: "Finance"
  },
  {
    id: 2,
    title: "Leadership for Women",
    description: "Develop your authentic leadership style and excel in any environment.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    level: "Intermediate",
    duration: "6 weeks",
    category: "Leadership"
  },
  {
    id: 3,
    title: "Entrepreneurship Essentials",
    description: "Build a sustainable business aligned with your values and purpose.",
    image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    level: "Advanced",
    duration: "10 weeks",
    category: "Business"
  },
  {
    id: 4,
    title: "Mindful Productivity",
    description: "Achieve more with less stress using mindfulness techniques.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    level: "Beginner",
    duration: "4 weeks",
    category: "Productivity"
  },
  {
    id: 5,
    title: "Personal Brand Building",
    description: "Create an authentic personal brand that attracts opportunities.",
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    level: "Intermediate",
    duration: "6 weeks",
    category: "Marketing"
  },
  {
    id: 6,
    title: "Negotiation Skills",
    description: "Master the art of negotiation for better outcomes in work and life.",
    image: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    level: "Advanced",
    duration: "5 weeks",
    category: "Business"
  }
];

// Available filters
const categories = ["All", "Finance", "Leadership", "Business", "Productivity", "Marketing"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const durations = ["All", "4 weeks", "5 weeks", "6 weeks", "8 weeks", "10 weeks"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");

  // Filter courses based on search and filters
  const filteredCourses = courseData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    const matchesDuration = selectedDuration === "All" || course.duration === selectedDuration;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesDuration;
  });

  return (
    <>
      {/* Header Section */}
      <section className="bg-gradient-to-r from-shazmeen-dark to-[#1a2d43] text-shazmeen-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Self-paced programs built for real transformation</h1>
            <p className="text-xl text-shazmeen-gray">
              Discover courses designed to help you grow personally and professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          {/* Search */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-xl border border-shazmeen-gray focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
              placeholder="Search courses by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                className="w-full p-2 border border-shazmeen-gray rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Level</label>
              <select
                className="w-full p-2 border border-shazmeen-gray rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                {levels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Duration Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select
                className="w-full p-2 border border-shazmeen-gray rounded-xl focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
              >
                {durations.map(duration => (
                  <option key={duration} value={duration}>{duration}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="bg-shazmeen-blush text-shazmeen-dark text-xs font-bold px-3 py-1 rounded-full">
                        {course.level}
                      </span>
                      <span className="text-sm text-gray-500">{course.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-shazmeen-dark mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <Button className="w-full btn-primary">Enroll Now</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-2">No courses found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
              <Button 
                variant="outline" 
                className="btn-outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                  setSelectedLevel("All");
                  setSelectedDuration("All");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-shazmeen-blush">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-dark mb-4">Not sure which course is right for you?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Book a free consultation call with one of our coaches to get personalized recommendations.
            </p>
            <Button className="btn-primary">Book a Free Call</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;

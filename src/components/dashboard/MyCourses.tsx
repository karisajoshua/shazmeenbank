
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Mock course data
const courseData = [
  {
    id: 1,
    title: "Financial Mindset Mastery",
    description: "Transform your relationship with money and build wealth with purpose.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    progress: 25,
    modules: 8,
    modulesCompleted: 2,
    status: "active"
  },
  {
    id: 2,
    title: "Leadership for Women",
    description: "Develop your authentic leadership style and excel in any environment.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    progress: 50,
    modules: 6,
    modulesCompleted: 3,
    status: "active"
  },
  {
    id: 3,
    title: "Entrepreneurship Essentials",
    description: "Build a sustainable business aligned with your values and purpose.",
    image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    progress: 100,
    modules: 10,
    modulesCompleted: 10,
    status: "completed"
  }
];

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  // Filter courses based on active tab
  const filteredCourses = courseData.filter(course => course.status ===  activeTab);

  return (
    <div>
      <h1 className="text-3xl font-bold text-shazmeen-dark mb-8">My Courses</h1>
      
      {/* Tabs */}
      <div className="flex mb-8 border-b border-gray-200">
        <button
          className={`py-3 px-6 border-b-2 font-medium text-sm ${
            activeTab === "active"
              ? "border-shazmeen-red text-shazmeen-dark"
              : "border-transparent text-gray-500 hover:text-shazmeen-dark"
          }`}
          onClick={() => setActiveTab("active")}
        >
          In Progress
        </button>
        <button
          className={`py-3 px-6 border-b-2 font-medium text-sm ${
            activeTab === "completed"
              ? "border-shazmeen-red text-shazmeen-dark"
              : "border-transparent text-gray-500 hover:text-shazmeen-dark"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>
      
      {/* Courses List */}
      <div className="space-y-6">
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl">
            <h3 className="text-xl font-semibold text-shazmeen-dark mb-2">
              {activeTab === "active" ? "No courses in progress" : "No completed courses"}
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === "active" 
                ? "Browse our course catalog to find your next learning journey" 
                : "Complete a course to see it here"}
            </p>
            <Button className="btn-primary">Browse Courses</Button>
          </div>
        ) : (
          filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-bold text-shazmeen-dark mb-2">{course.title}</h2>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  {course.status === "active" ? (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Module {course.modulesCompleted} of {course.modules} completed</span>
                        <span>{course.progress}% Complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-shazmeen-red h-2.5 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <div className="flex items-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Course Completed</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex space-x-3">
                    {course.status === "active" ? (
                      <Button className="btn-primary">Continue Course</Button>
                    ) : (
                      <Button className="btn-primary">View Certificate</Button>
                    )}
                    <Button variant="outline" className="btn-outline">View Details</Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Course Recommendations */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-shazmeen-dark mb-6">Recommended For You</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Course recommendation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-shazmeen-dark mb-2">Effective Communication</h3>
              <p className="text-sm text-gray-600 mb-4">Master the art of clear and impactful communication.</p>
              <Button className="w-full btn-primary">Learn More</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80"
                alt="Course recommendation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-shazmeen-dark mb-2">Team Management</h3>
              <p className="text-sm text-gray-600 mb-4">Build and lead high-performing teams effectively.</p>
              <Button className="w-full btn-primary">Learn More</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Course recommendation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-shazmeen-dark mb-2">Digital Marketing</h3>
              <p className="text-sm text-gray-600 mb-4">Learn strategies to grow your business online.</p>
              <Button className="w-full btn-primary">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;

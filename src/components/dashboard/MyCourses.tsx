import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  total_modules: number;
}

interface UserCourse {
  id: string;
  course_id: string;
  progress: number;
  modules_completed: number;
  status: string;
  courses: Course;
}

const MyCourses = () => {
  const [activeTab, setActiveTab] = useState("active");
  const [userCourses, setUserCourses] = useState<UserCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchUserCourses();

    // Set up real-time subscription
    const channel = supabase
      .channel('user_courses_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'user_courses'
        },
        () => {
          fetchUserCourses();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchUserCourses = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_courses')
        .select(`
          *,
          courses (*)
        `)
        .eq('user_id', user.id);

      if (error) throw error;
      setUserCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      toast({
        title: "Error",
        description: "Failed to load courses",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Filter courses based on active tab
  const filteredCourses = userCourses.filter(enrollment => enrollment.status === activeTab);

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
        {loading ? (
          <div className="text-center py-12 bg-white rounded-xl">
            <p className="text-gray-500">Loading courses...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
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
          filteredCourses.map(enrollment => (
            <div key={enrollment.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={enrollment.courses.image} 
                    alt={enrollment.courses.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-bold text-shazmeen-dark mb-2">{enrollment.courses.title}</h2>
                  <p className="text-gray-600 mb-4">{enrollment.courses.description}</p>
                  
                  {enrollment.status === "active" ? (
                    <div className="mb-6">
                      <div className="flex justify-between text-sm text-gray-500 mb-2">
                        <span>Module {enrollment.modules_completed} of {enrollment.courses.total_modules} completed</span>
                        <span>{enrollment.progress}% Complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-shazmeen-red h-2.5 rounded-full" 
                          style={{ width: `${enrollment.progress}%` }}
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
                    {enrollment.status === "active" ? (
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

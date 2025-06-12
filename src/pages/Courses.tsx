
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseWaitlistPopup from "@/components/popups/CourseWaitlistPopup";

// Real course data
const courseData = [
  {
    id: 1,
    title: "Healing Anxious Attachment – 8-Week Course",
    description: "This course is for the ones who love deeply but constantly question their worth. The ones who overthink every message, lose themselves in every relationship, and feel like they're always chasing safety in someone else. Healing Anxious Attachment is a guided process to help you untangle the patterns that keep pulling you back into emotional chaos. It's for the version of you that's tired of begging to be chosen, and finally ready to choose yourself. With structure, depth, and compassion — this course invites you into the kind of healing that creates lasting change. Not just in love, but in how you show up for yourself.",
    image: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    duration: "8 weeks",
    status: "🔒 Enrollment now open. Begin at your own pace.",
    enrollmentOpen: true
  },
  {
    id: 2,
    title: "Heal through heartbreak with love",
    description: "This course is for anyone standing at the edge of an ending — whether it was a relationship, a marriage, or the future you once planned. Heal Through heartbreak is not about moving on quickly. It's about moving through fully — with clarity, compassion, and the tools to rebuild yourself from the inside out. Whether your ending was recent or years ago, this course will guide you back to wholeness — not who you were before, but who you're becoming next.",
    image: "https://images.unsplash.com/photo-1519834484944-d587de5abed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: "Self-paced",
    status: "🔒 Enrollment opens soon. Get notified first when the course goes live.",
    enrollmentOpen: false
  },
  {
    id: 3,
    title: "Masterclass: The Anxious-Avoidant Dynamic",
    description: "How to Break the Cycle, Rebuild Connection & Stop Losing Yourself in Love. This 90-minute masterclass is for anyone caught in the emotional tug-of-war between anxious and avoidant attachment. One partner pulls away. The other clings. And somewhere in the middle, both feel misunderstood, unsafe, and unseen. We will look into what it takes to be in a relationship with a dismissive avoidant & a fearful avoidant as an anxiously attached partner. If you've ever felt like you're always asking for more, while your partner is always asking for space — this is where you begin to understand why. This masterclass isn't about blaming one style. It's about bridging the gap — with clarity, compassion, and boundaries that heal instead of harm.",
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: "90 minutes",
    status: "🔒 Enrollment opens soon. Get notified first when the course goes live.",
    enrollmentOpen: false,
    additionalInfo: "🎥 Includes: 90-minute video + companion workbook\n📥 Format: Instant lifetime access after purchase"
  }
];

const Courses = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

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
          <div className="space-y-12">
            {courseData.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="mb-4">
                      <span className="text-sm text-gray-500 font-medium">{course.duration}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-shazmeen-dark mb-4">{course.title}</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>
                    
                    {course.additionalInfo && (
                      <div className="mb-4 p-4 bg-shazmeen-blush/30 rounded-lg">
                        <pre className="text-sm text-shazmeen-dark whitespace-pre-line font-sans">{course.additionalInfo}</pre>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <p className="text-shazmeen-red font-medium">{course.status}</p>
                    </div>
                    
                    <Button 
                      className="btn-primary"
                      onClick={() => handleEnrollClick(course)}
                    >
                      {course.enrollmentOpen ? "Enroll Now" : "Get Notified"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

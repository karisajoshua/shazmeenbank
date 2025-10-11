
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CourseWaitlistPopup from "@/components/popups/CourseWaitlistPopup";

// Real course data
const courseData = [
  {
    id: 1,
    title: "Healing Anxious Attachment: 8-Week Course",
    format: "Video + workbook + meditations • Instant access after purchase",
    description: "This course is for the ones who love deeply but constantly question their worth. For the ones who overthink every message, lose themselves in every relationship, and keep chasing safety in someone else's presence.\n\nHealing Anxious Attachment is a guided process designed to help you untangle the emotional patterns that pull you back into self-doubt and chaos. It's for the version of you that's tired of waiting to be chosen and finally ready to choose yourself.\n\nThrough structure, depth, and compassion, you'll learn how to regulate your nervous system, hold space for your emotions, and build a secure sense of self that doesn't depend on someone else's reassurance.\n\nThis course isn't just about love—it's about transforming how you show up for yourself, in every part of your life.",
    image: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    duration: "8 weeks",
    status: "🔒 Enrollment opens soon. Get notified first when the course goes live.",
    enrollmentOpen: false,
    learnings: [
      "Recognize the moments your nervous system takes over—and shift from panic to presence before it runs your relationships.",
      "Learn to sit in the discomfort of pain and find new ways to move through it",
      "Stop chasing emotional crumbs and start creating the love, safety, and connection you've always tried to earn.",
      "Hear your anxiety as information, not identity—and learn to respond, not react.",
      "Soften your need to be chosen by choosing yourself first—not as a slogan, but as a lived daily practice.",
      "Replace people-pleasing with self-attunement: knowing what you feel, what you need, and what you no longer have to explain away.",
      "Rebuild your sense of self so fully that love becomes something you share, not something you seek to survive on."
    ]
  },
  {
    id: 2,
    title: "Heal Through Heartbreak with Love",
    format: "Video + workbook + meditations • Instant access after purchase",
    description: "Standing at the edge of an ending—whether a relationship, a marriage, or the future you once planned—can shake your entire nervous system. This course isn't about 'moving on' fast. It's about moving through fully: honoring grief, restoring safety in your body, and rebuilding a self that feels steady and whole.\n\nInside, you'll learn science-backed tools and compassionate practices to process emotion without getting lost in it, release the stories that keep you looping, and create a life that fits who you're becoming—not who you were before.\n\nWhether your ending was recent or years ago, you'll be guided back to wholeness, clarity, and self-trust at your own pace.",
    image: "https://images.unsplash.com/photo-1519834484944-d587de5abed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: "Self-paced",
    status: "🔒 Enrollment opens soon. Get notified first when the course goes live.",
    enrollmentOpen: false,
    learnings: [
      "Sit with your pain without letting it swallow you—learning how heartbreak can become the doorway back to your own heart.",
      "Turn 'what went wrong' into 'what this is showing me' without bypassing the grief or pretending it didn't hurt.",
      "Reclaim your body from the tension, longing, and stories it's been carrying since the ending.",
      "Let go of needing closure from someone else by creating emotional closure within yourself.",
      "Redefine what love means now—not as a return to the past, but as the courage to build something truer.",
      "Begin to live from the version of you that no longer needs to be rescued—the one who can hold her own heart with gentleness and strength."
    ]
  },
  {
    id: 3,
    title: "Masterclass: The Anxious-Avoidant Dynamic",
    format: "90-minute course • Video + workbook • Instant access after purchase",
    description: "Being caught in the anxious-avoidant cycle can feel like a tug-of-war—one partner pulls away for space, the other clings for closeness, and both end up feeling unseen, unsafe, and misunderstood. In this 90-minute masterclass, we'll explore exactly how these opposing attachment styles play out in relationships—and how you can begin to break the cycle without blame or shame.\n\nTogether, we'll unpack why avoidantly attached partners sometimes withdraw, why anxiously attached partners chase connection, and how each style can learn to lean into vulnerability and safety. You'll learn the tools to communicate your needs with confidence and compassion, set boundaries that heal instead of harm, and rediscover the unique strengths each of you bring to the relationship.\n\nThis masterclass isn't about labeling each other—it's about understanding the root patterns that keep you apart and bridging the gap with clarity, courage, and tenderness. By the end, you'll feel more confident asking for what you need and better equipped to build a relationship where both partners feel secure and deeply connected.",
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    duration: "90 minutes",
    status: "🔒 Enrollment opens soon. Get notified first when the course goes live.",
    enrollmentOpen: false,
    learnings: [
      "Recognize anxious and avoidant triggers in real time and respond with curiosity rather than criticism.",
      "Move from emotional tug-of-war to genuine dialogue, so both partners feel heard, seen, and valued.",
      "Ask for your needs without fear of 'rocking the boat,' and encourage your partner to give more than they thought possible.",
      "Use compassionate boundaries to create safety for both closeness and space without losing yourself.",
      "Transform conflict into an opportunity for deeper connection, rather than a source of shutdown or overreaction."
    ]
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
                      {(course as any).format && (
                        <div className="mt-2">
                          <span className="text-sm text-shazmeen-dark font-medium">{(course as any).format}</span>
                        </div>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-shazmeen-dark mb-4">{course.title}</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">{course.description}</p>
                    
                    {(course as any).learnings && (
                      <div className="mb-6">
                        <h3 className="font-semibold text-shazmeen-dark mb-3">You'll learn to:</h3>
                        <ul className="space-y-2">
                          {(course as any).learnings.map((learning: string, index: number) => (
                            <li key={index} className="flex items-start">
                              <span className="text-shazmeen-red mr-2 mt-1">•</span>
                              <span className="text-gray-700">{learning}</span>
                            </li>
                          ))}
                        </ul>
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


import { Button } from "@/components/ui/button";
import { useState } from "react";

// Mock podcast data
const podcastData = [
  {
    id: 1,
    title: "Overcoming Imposter Syndrome",
    host: "Sarah Johnson",
    guest: "Dr. Lisa Williams",
    duration: "45 minutes",
    date: "May 7, 2025",
    description: "Learn strategies to identify and overcome imposter syndrome in your career and personal life.",
    saved: true,
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Financial Freedom for Women",
    host: "Sarah Johnson",
    guest: "Emily Chen",
    duration: "52 minutes",
    date: "April 23, 2025",
    description: "Practical advice on achieving financial independence and building wealth as a woman.",
    saved: true,
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Building a Purpose-Driven Business",
    host: "Michael Chen",
    guest: "Priya Patel",
    duration: "58 minutes",
    date: "April 15, 2025",
    description: "How to create and grow a business that aligns with your values and makes an impact.",
    saved: true,
    image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80"
  },
  {
    id: 4,
    title: "Mindfulness Practices for Leaders",
    host: "Sarah Johnson",
    guest: "David Williams",
    duration: "39 minutes",
    date: "March 30, 2025",
    description: "Incorporating mindfulness into leadership for better decision-making and team management.",
    saved: true,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1499&q=80"
  },
  {
    id: 5,
    title: "Negotiation Skills for Career Advancement",
    host: "Michael Chen",
    guest: "Sophia Rodriguez",
    duration: "47 minutes",
    date: "March 22, 2025",
    description: "Master the art of negotiation to advance your career and secure better opportunities.",
    saved: true,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
];

const SavedPodcasts = () => {
  const [savedEpisodes, setSavedEpisodes] = useState(podcastData);

  const handleUnsavePodcast = (id: number) => {
    setSavedEpisodes(savedEpisodes.filter(podcast => podcast.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-shazmeen-dark">Saved Podcasts</h1>
        <p className="text-gray-600">Listen to your favorite episodes</p>
      </div>
      
      {savedEpisodes.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl">
          <h3 className="text-xl font-semibold text-shazmeen-dark mb-2">
            No saved podcasts
          </h3>
          <p className="text-gray-600 mb-6">
            Explore our podcast library and save episodes to listen to later
          </p>
          <Button className="btn-primary">Explore Podcasts</Button>
        </div>
      ) : (
        <div className="space-y-6">
          {savedEpisodes.map(podcast => (
            <div key={podcast.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={podcast.image} 
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-bold text-shazmeen-dark mb-2">{podcast.title}</h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="mr-4">Host: {podcast.host}</span>
                    <span className="mr-4">Guest: {podcast.guest}</span>
                    <span className="mr-4">{podcast.duration}</span>
                    <span>{podcast.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{podcast.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <Button className="mb-2 sm:mb-0 btn-primary flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Listen Now
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center" onClick={() => handleUnsavePodcast(podcast.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      Remove from Saved
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Audio Player Placeholder */}
              <div className="bg-gray-50 px-6 py-3 flex items-center">
                <button className="w-8 h-8 rounded-full bg-shazmeen-red text-white flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="flex-1 mx-4">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                    <div className="bg-shazmeen-red h-1.5 rounded-full" style={{ width: "30%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>13:40</span>
                    <span>{podcast.duration}</span>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="text-gray-500 hover:text-shazmeen-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-shazmeen-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4.293 15.707a1 1 0 001.414 0L10 11.414l4.293 4.293a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414zm0-6a1 1 0 001.414 0L10 5.414l4.293 4.293a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 0l-5 5a1 1 0 000 1.414z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Recommended Podcasts */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-shazmeen-dark mb-6">Recommended Podcasts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Building Resilience"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-shazmeen-dark mb-1">Building Resilience</h3>
              <p className="text-sm text-gray-500 mb-2">Sarah Johnson with Jane Doe</p>
              <p className="text-sm text-gray-600 mb-4">Strategies for building resilience in challenging times.</p>
              <Button className="w-full btn-primary">Listen Now</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Work-Life Harmony"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-shazmeen-dark mb-1">Work-Life Harmony</h3>
              <p className="text-sm text-gray-500 mb-2">Michael Chen with Alex Kim</p>
              <p className="text-sm text-gray-600 mb-4">Finding balance between career success and personal life.</p>
              <Button className="w-full btn-primary">Listen Now</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Leadership Mindset"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-shazmeen-dark mb-1">Leadership Mindset</h3>
              <p className="text-sm text-gray-500 mb-2">Sarah Johnson with Mark Johnson</p>
              <p className="text-sm text-gray-600 mb-4">Developing the mindset needed for effective leadership.</p>
              <Button className="w-full btn-primary">Listen Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedPodcasts;


import { Button } from "@/components/ui/button";
import { useState } from "react";

const NewsletterPreferences = () => {
  // Mock preferences data
  const [preferences, setPreferences] = useState({
    generalNewsletter: true,
    courseUpdates: true,
    podcastAlerts: true,
    promotions: false,
    events: true,
    frequency: "weekly",
    format: "html"
  });
  
  const handleToggleChange = (key: string) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key as keyof typeof preferences]
    });
  };
  
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: value
    });
  };
  
  const [email, setEmail] = useState("jane.doe@example.com");
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    // In a real app, this would update the user's email in the backend
  };
  
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const handleSavePreferences = () => {
    // In a real app, this would save preferences to the backend
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-shazmeen-dark">Newsletter Preferences</h1>
        <p className="text-gray-600">Customize how you receive updates from us</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold text-shazmeen-dark mb-4">Email Subscription</h2>
        
        {isEditing ? (
          <form onSubmit={handleEmailSubmit} className="flex items-end space-x-3">
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
              />
            </div>
            <Button type="submit" className="btn-primary">Save</Button>
            <Button 
              type="button" 
              variant="outline" 
              className="border-gray-300"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </Button>
          </form>
        ) : (
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">Current Email</div>
              <div>{email}</div>
            </div>
            <Button variant="outline" className="btn-outline" onClick={() => setIsEditing(true)}>
              Change Email
            </Button>
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold text-shazmeen-dark mb-4">Email Content Preferences</h2>
        <p className="text-sm text-gray-600 mb-6">
          Select which types of emails you'd like to receive. You'll always receive essential account notifications.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-shazmeen-dark">General Newsletter</h3>
              <p className="text-sm text-gray-500">Weekly tips, insights, and resources</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.generalNewsletter} 
                onChange={() => handleToggleChange("generalNewsletter")}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-shazmeen-red rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shazmeen-red"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-shazmeen-dark">Course Updates</h3>
              <p className="text-sm text-gray-500">New courses, modules, and learning materials</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.courseUpdates} 
                onChange={() => handleToggleChange("courseUpdates")}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-shazmeen-red rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shazmeen-red"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-shazmeen-dark">Podcast Alerts</h3>
              <p className="text-sm text-gray-500">New podcast episodes and features</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.podcastAlerts} 
                onChange={() => handleToggleChange("podcastAlerts")}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-shazmeen-red rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shazmeen-red"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-shazmeen-dark">Promotions and Offers</h3>
              <p className="text-sm text-gray-500">Special deals, discounts, and limited-time offers</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.promotions} 
                onChange={() => handleToggleChange("promotions")}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-shazmeen-red rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shazmeen-red"></div>
            </label>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-shazmeen-dark">Events and Webinars</h3>
              <p className="text-sm text-gray-500">Invitations to virtual and in-person events</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={preferences.events} 
                onChange={() => handleToggleChange("events")}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-shazmeen-red rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-shazmeen-red"></div>
            </label>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-xl font-semibold text-shazmeen-dark mb-4">Delivery Preferences</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Frequency
            </label>
            <select
              name="frequency"
              value={preferences.frequency}
              onChange={handleSelectChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Format
            </label>
            <select
              name="format"
              value={preferences.format}
              onChange={handleSelectChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-shazmeen-red focus:outline-none"
            >
              <option value="html">HTML (Rich design with images)</option>
              <option value="plain">Plain Text (Simple, no images)</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
          Unsubscribe from All
        </Button>
        
        <Button className="btn-primary" onClick={handleSavePreferences}>
          Save Preferences
        </Button>
      </div>
      
      {/* Success Message */}
      {saveSuccess && (
        <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-green-700">
                Your newsletter preferences have been updated successfully.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterPreferences;

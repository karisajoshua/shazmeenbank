
const ServiceFeatures = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-shazmeen-dark text-center mb-8">What to Expect in Your Session</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-shazmeen-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shazmeen-red">
              <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"></path>
              <polyline points="15 3 15 9 21 9"></polyline>
            </svg>
          </div>
          <h4 className="text-lg font-bold text-shazmeen-dark mb-2">Personalized Plan</h4>
          <p className="text-gray-600">Receive a customized action plan tailored specifically to your relationship needs and goals.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-shazmeen-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shazmeen-red">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h4 className="text-lg font-bold text-shazmeen-dark mb-2">Expert Guidance</h4>
          <p className="text-gray-600">Learn practical strategies to heal attachment wounds and create healthier relationships.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-shazmeen-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shazmeen-red">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h4 className="text-lg font-bold text-shazmeen-dark mb-2">Transformative Results</h4>
          <p className="text-gray-600">Walk away with clarity, confidence, and actionable steps to transform your relationships.</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;

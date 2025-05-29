
import React from "react";

const HowIHelp = () => {
  const helpAreas = [
    {
      title: "Regulate Your Nervous System",
      description: "I'll teach you how to reconnect with your body and calm the anxiety that drives reactive patterns—so you can stop living in survival mode and start living from self-trust."
    },
    {
      title: "Break Emotional Cycles",
      description: "Together, we'll unpack the root of your anxious patterns and why you're drawn to unavailable or unfulfilling love. You'll learn to stop chasing and start choosing from a secure place."
    },
    {
      title: "Rebuild Your Self-Worth",
      description: "You'll learn how to validate yourself, set boundaries, and stop people-pleasing—not just in relationships, but in every area of your life. I promise you when you step into your true self, a level of self confidence will become your shadow."
    },
    {
      title: "Reconnect With Your Voice and Vision",
      description: "As a Master life coach, I also help you get clear on your identity beyond relationships. Who are you when you're not performing for love? We explore your purpose, your passions, and the life you're meant to lead—securely and unapologetically."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            How I Help You Grow
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Healing anxious attachment isn't just about love—it's about who you become in the process. My work combines relationship healing, nervous system regulation, and life coaching so you can finally feel grounded, worthy, and in control of your story.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
            Whether you're stuck in anxious loops, constantly overthinking, or giving too much in love, here's how I support your growth, whether you do the course or take on sessions with me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {helpAreas.map((area, index) => (
            <div key={index} className="premium-card p-8 card-hover">
              <h3 className="text-2xl font-bold text-shazmeen-dark mb-4 heading-elegant">
                {area.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIHelp;

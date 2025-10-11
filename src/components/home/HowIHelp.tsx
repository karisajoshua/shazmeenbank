
import React from "react";

const HowIHelp = () => {
  const helpAreas = [
    {
      title: "For Couples: From Conflict to Connection",
      description: "I help couples break free from painful cycles of disconnection by teaching you how to communicate in ways that create openness rather than defensiveness. Together, we work on moving from a \"conflict mind\" into a \"compassionate heart.\" You'll learn how to understand your partner's attachment style, hold space for each other's pain and deepest needs, and ask for what you long for in ways that invite love instead of resistance. This is about building the kind of relationship where you both feel safe, seen, and deeply connected again a relationship you want to keep coming home to."
    },
    {
      title: "Healing Anxious Attachment",
      description: "If you feel stuck in overthinking, people-pleasing, or fearing abandonment, this work will help you find your center again. You'll learn how to hold space for your emotions without being overwhelmed by them, heal your core wounds, and feel safe in your own body. I'll guide you in building boundaries that honor your needs, stepping into your voice with strength and compassion, and moving from self-abandonment to self-trust. As you grow more secure within yourself, you'll naturally bring more stability and love into your relationships even with an avoidant partner."
    },
    {
      title: "Healing Through Breakup or Divorce",
      description: "Ending a relationship can feel like losing the ground beneath you. The sadness, shame, and grief can sit heavy for a long time, and it's easy to feel lost in the darkness. Together, we'll create space for you to process your pain with compassion and care. I'll help you validate your emotions, honor your sorrow, and slowly rebuild your life piece by piece. Healing doesn't mean rushing through the pain it means learning to hold it with love as you begin creating a new world around yourself, one that feels steady, whole, and full of possibility."
    },
    {
      title: "Life Coaching: Finding Your North Star",
      description: "As your life coach, I'll help you realign with what truly matters to you and guide you back to your sense of purpose. Whether it's reclaiming your self-worth, following through on the goals you've been putting off, or rediscovering your voice outside of relationships, this is about reconnecting with your inner compass. Together, we'll get clear on the vision you hold for your life, and I'll support you in taking the steps to bring that vision to life with confidence, clarity, and joy."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            Your Path to Healing & Growth
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Healing isn't about becoming someone new—it's about returning to yourself. Whether you're here as a couple wanting to reconnect, as someone navigating anxious attachment, moving through the heartbreak of divorce, or simply searching for your North Star again, this is your path to healing and growth.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
            Here's how I can support you along the way.
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

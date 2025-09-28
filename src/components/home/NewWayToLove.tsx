import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewWayToLove = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            A New Way to Love
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            You don't have to chase, overthink, or abandon yourself anymore. Here, you'll learn to regulate your emotions, embrace your sensitivity, and show up secure in love.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="premium-card p-10 mb-8">
            <h3 className="text-3xl font-bold text-shazmeen-dark mb-6 heading-elegant">
              Healing Anxious Attachment
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                By now you've probably heard the term anxious attachment - but if you're honest, you've likely spent more time Googling about your avoidantly attached partner than truly focusing on yourself. You may have noticed the painful cycle: they pull away, you chase harder. You've been told you're "too sensitive," that you talk about emotions too much, or that you need too much closeness.
              </p>
              <p>
                Maybe you've found yourself calling non-stop when you couldn't reach them, or realizing that over time, you've isolated yourself - making the relationship your whole world while friendships, hobbies, and family connections have fallen away.
              </p>
              <p>
                If this feels familiar, know this: nothing is "wrong" with you. Anxious attachment is not a flaw -it's a pattern that grew out of your early experiences, and it can absolutely be healed. Together, we'll help you feel safer in your own body, regulate your nervous system, and begin to trust that your needs are valid.
              </p>
              <p>
                You'll learn how to embrace your sensitivity as a strength, how to stop abandoning yourself in relationships, and how to grow a stronger sense of self so that your worth doesn't depend on someone else's responses.
              </p>
              <p>
                Whether you're looking to heal your anxious attachment after a breakup, separation, or divorce - or you want to transform your attachment style so you can show up more grounded, whole, and secure in your current relationships - this is the work that creates lasting change.
              </p>
              <p>
                This is about balance: being able to love deeply without losing yourself. You'll learn how to set boundaries with compassion, communicate your longings in ways that open your partner instead of pushing them away, and step into a more secure version of yourself. With time, you'll find that your relationships feel steadier, your emotions less overwhelming, and your sense of safety more rooted inside of you than in someone else's presence.
              </p>
              <p className="font-semibold text-shazmeen-dark">
                Healing anxious attachment doesn't mean silencing your sensitivity- it means finding the power within it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewWayToLove;
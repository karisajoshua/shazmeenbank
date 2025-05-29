import React from "react";
import { Button } from "@/components/ui/button";
interface NewsletterResetProps {
  onNewsletterClick: () => void;
}
const NewsletterReset = ({
  onNewsletterClick
}: NewsletterResetProps) => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
            The Newsletter Reset
          </h2>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Real talk, healing prompts, and soulful check-ins straight to your inbox. Think of it as your weekly moment to reflect, reconnect, and grow.
          </p>
          <Button onClick={onNewsletterClick} className="border-2 border-shazmeen-dark hover:bg-shazmeen-dark transition-all duration-300 rounded-xl px-8 py-4 font-bold text-lg text-shazmeen-white">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </section>;
};
export default NewsletterReset;
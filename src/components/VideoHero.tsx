import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
interface VideoHeroProps {
  onWaitlistClick: () => void;
}
const VideoHero = ({
  onWaitlistClick
}: VideoHeroProps) => {
  return <section className="relative overflow-hidden min-h-[100vh]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/95 via-shazmeen-dark/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center bg-top bg-no-repeat w-full h-full" style={{
        backgroundImage: `url('https://loqubmypggsmkuwjomvb.supabase.co/storage/v1/object/public/shazmeen//shaz.jpeg')`
      }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 py-28 md:py-36 flex items-center min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-16">
          <div className="space-y-8 animate-fade-in">
            <div className="mb-8">
              <img src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeen_logo-removebg-preview.png" alt="Shazmeen Bank Logo" className="h-24 object-contain mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-shazmeen-white">
              If you've landed here, you're ready to <span className="text-shazmeen-blush">heal</span>, take <span className="text-shazmeen-secondary">responsibility</span> and begin again
            </h1>
            <p className="text-xl md:text-2xl text-shazmeen-gray font-light leading-relaxed">
              Maybe you're rebuilding after a breakup or divorce, maybe you're learning to navigate conflict, or maybe you're carrying the deep wounds of betrayal and infidelity. Wherever you are, this is the place to unpack, understand, and begin again.
            </p>
            <p className="text-lg text-shazmeen-gray font-light leading-relaxed mt-4">
              You might be here to heal your attachment style, to learn how to resolve conflict with more ease, or to grow into the version of yourself that feels secure, steady, and whole—in your work, your friendships, and your relationships. Because conflict is not something to fear; it is a doorway into another person's soul.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button onClick={onWaitlistClick} className="bg-cream text-shazmeen-dark shadow-xl text-xl w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 border-2 border-cream bg-white">
                Unlearn. Rebuild. Love Better.
              </Button>
              <Link to="/bookings">
                <Button className="bg-cream text-shazmeen-dark shadow-xl text-xl w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 border-2 border-cream bg-white">
                  Begin 1:1 healing
                </Button>
              </Link>
              <Link to="/bookings">
                <Button className="bg-cream text-shazmeen-dark shadow-xl text-xl w-full sm:w-auto px-8 py-6 rounded-xl font-bold transition-all duration-300 border-2 border-cream bg-white">
                  Couples coaching
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            {/* Just spacing for layout - image is in background */}
          </div>
        </div>
      </div>
    </section>;
};
export default VideoHero;
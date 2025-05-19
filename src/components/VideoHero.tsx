import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const VideoHero = () => {
  return <section className="relative overflow-hidden min-h-[100vh]">
      {/* Video background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/95 via-shazmeen-dark/80 to-transparent z-10"></div>
        <video autoPlay muted loop playsInline className="object-cover w-full h-full" poster="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//Screen%20Shot%202025-05-17%20at%2015.22.14.png">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-her-laptop-at-home-746-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 py-28 md:py-36 flex items-center min-h-[100vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-16">
          <div className="space-y-8 animate-fade-in">
            <div className="mb-8">
              <img src="https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//shazmeen_logo-removebg-preview.png" alt="Shazmeen Bank Logo" className="h-24 object-contain mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-shazmeen-white">
              Transform Your <span className="text-shazmeen-blush">Mindset</span>.<br />
              Master Your <span className="text-shazmeen-secondary">Future</span>.
            </h1>
            <p className="text-xl md:text-2xl text-shazmeen-gray font-light">
              Courses, coaching, and community designed by Shazmeen Bank to help you grow — inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to="/courses">
                <Button className="btn-primary text-lg w-full sm:w-auto px-8 py-4">Start Learning</Button>
              </Link>
              <Link to="/bookings">
                <Button variant="outline" className="border-2 border-shazmeen-white hover:bg-shazmeen-white transition-all rounded-xl px-8 py-4 font-bold text-lg w-full sm:w-auto text-gray-900">
                  Book a Session
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block"> {/* Just spacing for layout - video is in background */} </div>
        </div>
      </div>
    </section>;
};
export default VideoHero;
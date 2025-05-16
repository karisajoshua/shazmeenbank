
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const VideoHero = () => {
  return <section className="relative overflow-hidden">
      {/* Video background with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-shazmeen-dark/95 via-shazmeen-dark/80 to-transparent z-10"></div>
        <video autoPlay muted loop playsInline className="object-cover w-full h-full" poster="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-working-on-her-laptop-at-home-746-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in text-shazmeen-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Mindset. Master Your Future.
            </h1>
            <p className="text-xl md:text-2xl text-shazmeen-gray">
              Courses, coaching, and community designed by Shazmeen Bank to help you grow — inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/courses">
                <Button className="btn-primary text-lg w-full sm:w-auto">Start Learning</Button>
              </Link>
              <Link to="/bookings">
                <Button variant="outline" className="border-2 border-shazmeen-white text-shazmeen-white hover:bg-shazmeen-white hover:text-shazmeen-dark transition-all rounded-xl px-5 py-2.5 font-bold text-lg w-full sm:w-auto">
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

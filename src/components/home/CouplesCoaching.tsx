import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const couplesCoachingPhoto = "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1766522428561-c4m1zp.JPG";
const CouplesCoaching = () => {
  return <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl heading-elegant font-bold text-shazmeen-dark mb-6">
              Couples Coaching
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transform your relationship together. My couples coaching helps partners break unhealthy patterns, improve communication, and build the secure, loving connection you both deserve.
            </p>
            <Link to="/bookings">
              <Button className="btn-primary text-lg px-8 py-4">
                Book Couples Session
              </Button>
            </Link>
          </div>
          <div className="lg:order-first">
            <img alt="Shazmeen and her partner" className="w-full h-80 object-cover rounded-xl shadow-premium" src={couplesCoachingPhoto} />
          </div>
        </div>
      </div>
    </section>;
};
export default CouplesCoaching;
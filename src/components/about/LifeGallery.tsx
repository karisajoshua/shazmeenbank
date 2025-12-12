import React from "react";
import shazmeenHeart from "@/assets/about/shazmeen-heart.png";
import shazmeenMedal from "@/assets/about/shazmeen-medal.png";
import shazmeenMedalTogether from "@/assets/about/shazmeen-medal-together.png";
import shazmeenMarathon from "@/assets/about/shazmeen-marathon-stats.png";

const LifeGallery = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-shazmeen-dark to-shazmeen-dark/95">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-white mb-4 heading-elegant">
            Life Beyond Coaching
          </h2>
          <p className="text-shazmeen-gray text-lg max-w-2xl mx-auto">
            I believe in practicing what I preach — pushing boundaries, embracing challenges, 
            and celebrating every milestone with the people I love.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Large featured image - Heart gesture */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src={shazmeenHeart}
              alt="Shazmeen making a heart gesture"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-shazmeen-white font-serif text-xl">
                  "Love is the foundation of everything I do"
                </p>
              </div>
            </div>
          </div>

          {/* Medal solo shot */}
          <div className="relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src={shazmeenMedal}
              alt="Shazmeen with marathon medal"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-shazmeen-white text-sm font-medium">
                  First Half Marathon
                </p>
              </div>
            </div>
          </div>

          {/* Marathon stats */}
          <div className="relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src={shazmeenMarathon}
              alt="Marathon stats - 21.10km in 2h 38m"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-shazmeen-white text-sm font-medium">
                  21.10km • 2h 38m
                </p>
              </div>
            </div>
          </div>

          {/* Together with medals - wide */}
          <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src={shazmeenMedalTogether}
              alt="Celebrating marathon finish together"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-shazmeen-white text-sm font-medium">
                  Celebrating victories together
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl font-serif text-shazmeen-blush italic max-w-3xl mx-auto">
            "Running taught me that the finish line isn't about speed — it's about showing up, 
            even when it's hard. The same is true for healing."
          </blockquote>
          <p className="mt-4 text-shazmeen-gray">— Shazmeen Bank</p>
        </div>
      </div>
    </section>
  );
};

export default LifeGallery;

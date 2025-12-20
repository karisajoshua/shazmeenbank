import React from "react";

// Old images from Supabase storage for this section now
const LifeGallery = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-shazmeen-dark to-shazmeen-dark/95">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shazmeen-white mb-4 heading-elegant">
            Featured in Media
          </h2>
          <p className="text-shazmeen-gray text-lg max-w-2xl mx-auto">
            Sharing insights, wisdom, and stories across platforms — helping hearts heal one conversation at a time.
          </p>
        </div>

        {/* Bento Grid Gallery with Supabase images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Large featured image */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src="https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1765556247954-taibp9.png"
              alt="Shazmeen Bank featured"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-shazmeen-white font-serif text-xl">
                  "Every story matters. Every heart deserves to heal."
                </p>
              </div>
            </div>
          </div>

          {/* Top right image */}
          <div className="relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src="https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1765557751120-s0ecbx.png"
              alt="Shazmeen Bank media appearance"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-shazmeen-white text-sm font-medium">
                  TV & Radio Features
                </p>
              </div>
            </div>
          </div>

          {/* Second small image */}
          <div className="relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src="https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1765556247954-iadsk.png"
              alt="Shazmeen Bank speaking"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-shazmeen-white text-sm font-medium">
                  Podcast Guest
                </p>
              </div>
            </div>
          </div>

          {/* Wide bottom image */}
          <div className="col-span-2 relative group overflow-hidden rounded-2xl shadow-premium">
            <img
              src="https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1765557751118-tpyf5g.png"
              alt="Shazmeen Bank media feature"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-shazmeen-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-shazmeen-white text-sm font-medium">
                  Spreading love, one conversation at a time
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-xl md:text-2xl font-serif text-shazmeen-blush italic max-w-3xl mx-auto">
            "Healing is not a destination — it's a way of living. Each day, we choose ourselves again."
          </blockquote>
          <p className="mt-4 text-shazmeen-gray">— Shazmeen Bank</p>
        </div>
      </div>
    </section>
  );
};

export default LifeGallery;

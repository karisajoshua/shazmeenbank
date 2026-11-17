import { useSiteContent } from '@/lib/siteContent';

import React from "react";

const LogoCarousel = () => {
 const content = useSiteContent('home','featured-in');


  // Verified gallery URLs supplied by the site owner, in their requested order.
  const featuredLogos = [
    { name: "Featured media logo 1", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984799-zpfva.png" },
    { name: "Featured media logo 2", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984800-j6nvn8.jpg" },
    { name: "Featured media logo 3", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984799-r9oatj.jpg" },
    { name: "Featured media logo 4", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984800-dxksbl.jpg" },
    { name: "Featured media logo 5", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984800-8w2mi8.png" },
    { name: "Featured media logo 6", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984799-cuigj7.jpg" },
    { name: "Featured media logo 7", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984800-iw9hg.jpg" },
    { name: "Featured media logo 8", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984799-r61kk.jpg" },
    { name: "Featured media logo 9", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984799-s7kxdg.jpg" },
    { name: "Featured media logo 10", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984799-7zptv.jpg" },
    { name: "Featured media logo 11", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984799-jtqp5p.jpg" },
    { name: "Featured media logo 12", logo: "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1764884984800-8on9i88.jpg" }
  ];

  let configuredLogos: {name:string;logo:string}[] = [];
  try {
    const parsed = JSON.parse(content.image_url || '[]');
    if (Array.isArray(parsed)) configuredLogos = parsed.filter((item): item is {name:string;logo:string} => typeof item?.name === 'string' && typeof item?.logo === 'string' && /^https:\/\//.test(item.logo));
  } catch { /* use gallery or original logos */ }
  const logos = configuredLogos.length ? configuredLogos : featuredLogos;

  return (
    <div className="bg-white py-12 border-y border-gray-200">
      <div className="container-custom">
        <div className="text-center mb-8">
          <p className="text-gray-900 text-3xl font-bold">{content.heading || "Featured in"}</p>
        </div>
      </div>
      
      <div className="overflow-hidden relative">
        <div className="flex animate-super-slow-scroll">
          {/* Triple the logos to create seamless loop with better spacing */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="mx-12 flex-shrink-0">
              <img 
                src={logo.logo} 
                alt={`${logo.name} Logo`} 
                className="h-16 w-auto object-contain" loading="lazy" onError={(event) => { event.currentTarget.style.display = "none"; }} 
                style={{
                  maxWidth: "180px"
                }} 
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>
        {`
          @keyframes super-slow-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-33.333%);
            }
          }
          
          .animate-super-slow-scroll {
            animation: super-slow-scroll 25s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .animate-super-slow-scroll { animation: none; }
          }
        `}
      </style>
    </div>
  );
};

export default LogoCarousel;

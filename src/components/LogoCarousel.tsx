import { supabase } from '@/integrations/supabase/client';
import { useSiteContent } from '@/lib/siteContent';

import React, { useEffect, useState } from "react";

const LogoCarousel = () => {
 const content = useSiteContent('home','featured-in');
  const [galleryLogos, setGalleryLogos] = useState<{name:string;logo:string}[]>([]);

  // Real featured platform logos from Supabase
  const featuredLogos = [
    {
      name: "BBC",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/bbc.jpg"
    },
    {
      name: "Choice",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/choice.jpg"
    },
    {
      name: "Citizen",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/citizen.jpg"
    },
    {
      name: "Ebru",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/ebru.jpg"
    },
    {
      name: "Engage",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/engage.png"
    },
    {
      name: "K24",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/k24.jpg"
    },
    {
      name: "KTN",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/ktn.jpg"
    },
    {
      name: "NRG Radio",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/nrgRadio.jpg"
    },
    {
      name: "NRG Vent",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/nrgVent.jpg"
    },
    {
      name: "NTV",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/ntv.jpg"
    },
    {
      name: "Star",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/star.jpg"
    },
    {
      name: "Switch",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/switch.jpg"
    },
    {
      name: "Tuko",
      logo: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen/Featured%20logos/tuko.png"
    }
  ];

  useEffect(() => {
    let active = true;
    supabase.storage.from('admin-media').list('', {limit: 1000}).then(({data,error}) => {
      if (!active || error || !data) return;
      const matches = data.filter(file => /\.(png|jpe?g|webp|svg)$/i.test(file.name) && /(bbc|choice|citizen|ebru|engage|k24|ktn|nrg|ntv|star|switch|tuko|logo|featured)/i.test(file.name));
      if (matches.length) setGalleryLogos(matches.map(file => ({name:file.name.replace(/\.[^.]+$/,''),logo:supabase.storage.from('admin-media').getPublicUrl(file.name).data.publicUrl})));
    });
    return () => { active = false; };
  }, []);
  let configuredLogos: {name:string;logo:string}[] = [];
  try {
    const parsed = JSON.parse(content.image_url || '[]');
    if (Array.isArray(parsed)) configuredLogos = parsed.filter((item): item is {name:string;logo:string} => typeof item?.name === 'string' && typeof item?.logo === 'string' && /^https:\/\//.test(item.logo));
  } catch { /* use gallery or original logos */ }
  const logos = configuredLogos.length ? configuredLogos : galleryLogos.length ? galleryLogos : featuredLogos;

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
            animation: super-slow-scroll 35s linear infinite;
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

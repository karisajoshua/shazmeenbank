import { Link } from "react-router-dom";
import podcastCover from "@/assets/podcast/love-better-cover.jpg";

const newsletterImage = "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1766874371977-jno8pb.png";
const freeResourcesImage = "https://hxmnbsirehwbicpjmenj.supabase.co/storage/v1/object/public/admin-media/1766874371977-3lar4n.png";

interface FullWidthCTASectionsProps {
  onNewsletterClick: () => void;
}

const FullWidthCTASections = ({ onNewsletterClick }: FullWidthCTASectionsProps) => {
  const sections = [
    {
      title: "The Love Better Podcast",
      subtitle: "Honest conversations about love, healing & growth",
      image: podcastCover,
      href: "/podcast",
      isLink: true,
    },
    {
      title: "Join the Newsletter",
      subtitle: "Weekly insights on relationships & self-worth",
      image: newsletterImage,
      href: "#",
      isLink: false,
    },
    {
      title: "Free Resources",
      subtitle: "Workbooks, guides & healing prompts",
      image: freeResourcesImage,
      href: "/free-resources",
      isLink: true,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3">
      {sections.map((section, index) => {
        const content = (
          <div
            className="relative h-80 md:h-[500px] w-full overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${section.image})` }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 heading-elegant transition-colors duration-300 group-hover:text-[#FD0061]">
                {section.title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-200 transition-colors duration-300 group-hover:text-[#FD0061]">
                {section.subtitle}
              </p>
            </div>
          </div>
        );

        if (section.isLink) {
          return (
            <Link key={index} to={section.href}>
              {content}
            </Link>
          );
        }

        return (
          <div key={index} onClick={onNewsletterClick}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default FullWidthCTASections;

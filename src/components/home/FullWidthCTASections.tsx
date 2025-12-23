import { Link } from "react-router-dom";
import podcastCover from "@/assets/podcast/love-better-cover.jpg";
import marathonFinish from "@/assets/podcast/marathon-finish.png";
import marathonMedals from "@/assets/podcast/marathon-medals.png";

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
      image: marathonFinish,
      href: "#",
      isLink: false,
    },
    {
      title: "Free Resources",
      subtitle: "Workbooks, guides & healing prompts",
      image: marathonMedals,
      href: "/free-resources",
      isLink: true,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3">
      {sections.map((section, index) => {
        const content = (
          <div
            className="relative h-64 md:h-96 w-full overflow-hidden group cursor-pointer"
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 heading-elegant">
                {section.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-200">
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

import { Instagram, Facebook, Youtube } from "lucide-react";

const FloatingSocialIcons = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/shazmeenbank/",
      icon: Instagram,
      bgColor: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      hoverBg: "hover:from-purple-700 hover:via-pink-700 hover:to-orange-600"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@shazmeen_bank",
      icon: null,
      bgColor: "bg-black",
      hoverBg: "hover:bg-gray-900"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCYYSYmYSMPi8YZ3TjHl4JGg",
      icon: Youtube,
      bgColor: "bg-red-600",
      hoverBg: "hover:bg-red-700"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100078764546585",
      icon: Facebook,
      bgColor: "bg-blue-600",
      hoverBg: "hover:bg-blue-700"
    },
    {
      name: "X",
      url: "https://x.com/bankshazmeen",
      icon: null,
      bgColor: "bg-black",
      hoverBg: "hover:bg-gray-900"
    }
  ];

  return (
    <div className="hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-50 flex-col gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full ${social.bgColor} ${social.hoverBg} flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg`}
          aria-label={social.name}
        >
          {social.icon ? (
            <social.icon size={20} />
          ) : social.name === "TikTok" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69C18.58 6.38 17.68 5.78 17.01 5C16.34 4.22 15.92 3.28 15.81 2.26H12.7V15.23C12.7 15.73 12.56 16.22 12.29 16.64C12.03 17.06 11.65 17.39 11.2 17.59C10.75 17.79 10.25 17.85 9.76 17.76C9.27 17.67 8.82 17.45 8.46 17.11C8.11 16.76 7.86 16.32 7.76 15.83C7.65 15.35 7.69 14.84 7.87 14.38C8.04 13.92 8.35 13.52 8.76 13.24C9.17 12.96 9.66 12.8 10.16 12.8C10.41 12.8 10.67 12.83 10.91 12.9V9.76C10.56 9.71 10.22 9.69 9.87 9.69C8.66 9.69 7.48 10.05 6.48 10.71C5.47 11.38 4.68 12.33 4.21 13.45C3.74 14.58 3.63 15.82 3.88 17.01C4.13 18.19 4.73 19.27 5.61 20.11C6.48 20.94 7.59 21.49 8.79 21.7C9.99 21.9 11.22 21.75 12.32 21.25C13.43 20.75 14.35 19.93 15 18.91C15.64 17.88 15.97 16.7 15.97 15.5V10.12C17.47 11.08 19.22 11.6 21 11.59V8.48C20.5 8.48 20.01 8.38 19.55 8.2C19.09 8.01 18.67 7.74 18.31 7.39L19.59 6.69Z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialIcons;

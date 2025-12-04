const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100078764546585",
      bgColor: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#166FE5]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/shazmeenbank/",
      bgColor: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
      hoverColor: "hover:opacity-90",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@shazmeen_bank",
      bgColor: "bg-[#010101]",
      hoverColor: "hover:bg-[#1a1a1a]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69C18.58 6.38 17.68 5.78 17.01 5C16.34 4.22 15.92 3.28 15.81 2.26H12.7V15.23C12.7 15.73 12.56 16.22 12.29 16.64C12.03 17.06 11.65 17.39 11.2 17.59C10.75 17.79 10.25 17.85 9.76 17.76C9.27 17.67 8.82 17.45 8.46 17.11C8.11 16.76 7.86 16.32 7.76 15.83C7.65 15.35 7.69 14.84 7.87 14.38C8.04 13.92 8.35 13.52 8.76 13.24C9.17 12.96 9.66 12.8 10.16 12.8C10.41 12.8 10.67 12.83 10.91 12.9V9.76C10.56 9.71 10.22 9.69 9.87 9.69C8.66 9.69 7.48 10.05 6.48 10.71C5.47 11.38 4.68 12.33 4.21 13.45C3.74 14.58 3.63 15.82 3.88 17.01C4.13 18.19 4.73 19.27 5.61 20.11C6.48 20.94 7.59 21.49 8.79 21.7C9.99 21.9 11.22 21.75 12.32 21.25C13.43 20.75 14.35 19.93 15 18.91C15.64 17.88 15.97 16.7 15.97 15.5V10.12C17.47 11.08 19.22 11.6 21 11.59V8.48C20.5 8.48 20.01 8.38 19.55 8.2C19.09 8.01 18.67 7.74 18.31 7.39L19.59 6.69Z"/>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCYYSYmYSMPi8YZ3TjHl4JGg",
      bgColor: "bg-[#FF0000]",
      hoverColor: "hover:bg-[#CC0000]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/bankshazmeen",
      bgColor: "bg-[#000000]",
      hoverColor: "hover:bg-[#333333]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:shazmeen@shazmeenbank.com",
      bgColor: "bg-[#0891B2]",
      hoverColor: "hover:bg-[#0E7490]",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full">
      {/* Social Tiles Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`${social.bgColor} ${social.hoverColor} text-white flex flex-col items-center justify-center py-12 md:py-16 transition-all duration-300 transform hover:scale-105`}
          >
            {social.icon}
            <span className="mt-4 text-lg font-semibold">{social.name}</span>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="bg-shazmeen-dark py-6">
        <div className="container-custom text-center">
          <p className="text-shazmeen-gray text-sm">
            © 2025 Shazmeen Bank. All rights reserved.
          </p>
          <p className="text-shazmeen-gray text-sm mt-2">
            Powered by <span className="text-shazmeen-white font-semibold">Texcortech Systems</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

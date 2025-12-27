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
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
          <path d="M34.1 10.5c-1.8-1.9-2.9-4.5-2.9-7.3V2h-6.4v28.7c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.6 0 1.2.1 1.8.3v-6.5c-.6-.1-1.2-.1-1.8-.1-6.9 0-12.5 5.6-12.5 12.5S11.9 43.4 18.8 43.4s12.5-5.6 12.5-12.5V18.1c2.5 1.8 5.5 2.9 8.7 2.9v-6.4c-2-.1-3.9-.9-5.9-2.1z"/>
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
      name: "Threads",
      href: "https://www.threads.net/@shazmeenbank",
      bgColor: "bg-gradient-to-br from-[#000000] to-[#404040]",
      hoverColor: "hover:opacity-90",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.812-.673 1.927-1.084 3.227-1.19.93-.076 1.876-.035 2.81.12-.075-.784-.323-1.388-.737-1.791-.533-.519-1.394-.792-2.49-.792l-.072.001c-.834.012-1.544.197-2.106.55-.428.27-.757.636-.975 1.085l-1.878-.78c.32-.77.862-1.416 1.567-1.878.968-.635 2.139-.972 3.386-.972l.089.001c1.7.017 3.075.55 3.972 1.538.753.83 1.18 1.94 1.265 3.297.503.126.983.29 1.436.494 1.28.575 2.278 1.464 2.886 2.569.834 1.516.937 4.063-.921 5.882-1.736 1.698-4.003 2.47-7.134 2.49z"/>
          <path d="M12.641 13.485c-1.474 0-2.664.511-2.607 1.551.034.622.445 1.266 1.696 1.266 1.382 0 2.282-.69 2.615-2.009-.528-.258-1.075-.808-1.704-.808z"/>
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
      <div className="bg-black py-6">
        <div className="container-custom text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Shazmeen Bank. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Powered by <span className="text-white font-semibold">Texcortech Systems</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


const SocialConnect = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif text-shazmeen-dark">Connect With Shazmeen</h2>
          <p className="text-lg mb-8 text-gray-700">
            Join the conversation and get daily relationship insights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
            <a 
              href="https://tiktok.com/@shazmeen_bank" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black text-white py-4 px-6 rounded-lg hover:opacity-90 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.59 6.69C18.58 6.38 17.68 5.78 17.01 5C16.34 4.22 15.92 3.28 15.81 2.26H12.7V15.23C12.7 15.73 12.56 16.22 12.29 16.64C12.03 17.06 11.65 17.39 11.2 17.59C10.75 17.79 10.25 17.85 9.76 17.76C9.27 17.67 8.82 17.45 8.46 17.11C8.11 16.76 7.86 16.32 7.76 15.83C7.65 15.35 7.69 14.84 7.87 14.38C8.04 13.92 8.35 13.52 8.76 13.24C9.17 12.96 9.66 12.8 10.16 12.8C10.41 12.8 10.67 12.83 10.91 12.9V9.76C10.56 9.71 10.22 9.69 9.87 9.69C8.66 9.69 7.48 10.05 6.48 10.71C5.47 11.38 4.68 12.33 4.21 13.45C3.74 14.58 3.63 15.82 3.88 17.01C4.13 18.19 4.73 19.27 5.61 20.11C6.48 20.94 7.59 21.49 8.79 21.7C9.99 21.9 11.22 21.75 12.32 21.25C13.43 20.75 14.35 19.93 15 18.91C15.64 17.88 15.97 16.7 15.97 15.5V10.12C17.47 11.08 19.22 11.6 21 11.59V8.48C20.5 8.48 20.01 8.38 19.55 8.2C19.09 8.01 18.67 7.74 18.31 7.39L19.59 6.69Z" fill="currentColor"/>
              </svg>
              Follow on TikTok
            </a>
            <a 
              href="https://www.shazmeenbank.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-shazmeen-dark text-white py-4 px-6 rounded-lg hover:opacity-90 transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM16.9 15.39C16.64 14.58 15.9 14 15 14H14V11C14 10.45 13.55 10 13 10H7V8H10C10.55 8 11 7.55 11 7V6H13C14.1 6 15 5.1 15 4V3.89C17.71 4.8 19.73 7.21 19.98 10.08L16.9 7H15V9L16.9 15.39Z" fill="currentColor"/>
              </svg>
              Visit Website
            </a>
          </div>
          <div className="mt-8">
            <p className="text-gray-700">
              Send me an email: <a href="mailto:shazmeen@shazmeenbank.com" className="text-shazmeen-red hover:underline">shazmeen@shazmeenbank.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialConnect;

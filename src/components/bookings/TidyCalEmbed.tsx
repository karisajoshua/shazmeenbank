import { useEffect, useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { getTidyCalUrl } from "@/config/tidycal";

interface TidyCalEmbedProps {
  path: string;
  className?: string;
}

const TidyCalEmbed = ({ path, className = "" }: TidyCalEmbedProps) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const url = getTidyCalUrl(path);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    const timer = window.setTimeout(() => {
      setFailed((prev) => prev || false);
    }, 15000);
    return () => window.clearTimeout(timer);
  }, [path]);

  return (
    <div className={`relative w-full ${className}`}>
      {!loaded && !failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60">
          <Loader2 className="w-6 h-6 animate-spin text-[#FD0061]" />
          <p className="text-sm text-gray-300">Loading available times…</p>
        </div>
      )}

      {failed ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <p className="text-gray-300">
            The scheduling calendar couldn't load here.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#FD0061] px-6 py-3 text-white hover:bg-[#FD0061]/90 transition-colors"
          >
            Open the booking page
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ) : (
        <>
          <iframe
            key={path}
            src={url}
            title="Booking calendar"
            className="w-full min-h-[70vh] rounded-xl border-0 bg-white"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            allow="payment *; clipboard-write"
          />
          <div className="mt-3 text-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#FD0061] transition-colors"
            >
              Having trouble? Open the booking page in a new tab
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default TidyCalEmbed;

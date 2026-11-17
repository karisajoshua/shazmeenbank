import { useState } from "react";
import { Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TidyCalEmbed from "./TidyCalEmbed";
import { tidyCalBookings, TidyCalServiceKey } from "@/config/tidycal";

interface TidyCalModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: TidyCalServiceKey | null;
  priceLabel?: string;
}

const TidyCalModal = ({ isOpen, onClose, serviceKey, priceLabel }: TidyCalModalProps) => {
  const [showSchedulingHelp, setShowSchedulingHelp] = useState(false);
  const booking = serviceKey ? tidyCalBookings[serviceKey] : null;

  const handleBookingClose = () => {
    onClose();
    // We can detect the visitor closing our calendar, but not their reason
    // or whether a booking was completed inside the cross-origin TidyCal iframe.
    if (booking) setShowSchedulingHelp(true);
  };

  const emailSubject = booking
    ? `Help finding a time for ${booking.title}`
    : "Help finding a coaching session time";
  const emailUrl = `mailto:shazmeen@shazmeenbank.com?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <>
      <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleBookingClose(); }}>
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto bg-zinc-900 border-zinc-800 [&>button]:text-white [&>button]:hover:text-[#FD0061] [&>button]:rounded-full">
          <DialogHeader>
            <DialogTitle className="text-white text-xl">
              {booking ? `Book ${booking.title}` : "Book a session"}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {priceLabel
                ? `Pick a time that works for you. Payment (${priceLabel}) is completed as you book.`
                : "Pick a time that works for you. Payment is completed as you book."}
            </DialogDescription>
          </DialogHeader>
          {booking && <TidyCalEmbed path={booking.path} />}
        </DialogContent>
      </Dialog>

      <Dialog open={showSchedulingHelp} onOpenChange={setShowSchedulingHelp}>
        <DialogContent className="max-w-md bg-zinc-900 border-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl text-white">
              Can’t find a time that suits you?
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-gray-300 pt-2">
              <span className="block">Send me an email at</span>
              <a className="block whitespace-nowrap text-[clamp(0.75rem,3.2vw,1rem)] font-medium text-[#FD0061] hover:underline" href={emailUrl}>
                shazmeen@shazmeenbank.com
              </a>
              <span className="block">and we’ll find a time that works for you.</span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button asChild className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white flex-1">
              <a href={emailUrl} onClick={() => setShowSchedulingHelp(false)}>
                <Mail className="w-4 h-4 mr-2" /> Email Shazmeen
              </a>
            </Button>
            <Button variant="outline" className="border-zinc-600 bg-zinc-800 text-white hover:bg-zinc-700 hover:text-white flex-1" onClick={() => setShowSchedulingHelp(false)}>
              No thanks
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TidyCalModal;

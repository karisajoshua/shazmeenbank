import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import TidyCalEmbed from "./TidyCalEmbed";
import { tidyCalBookings, TidyCalServiceKey } from "@/config/tidycal";

interface TidyCalModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceKey: TidyCalServiceKey | null;
  priceLabel?: string;
}

const TidyCalModal = ({ isOpen, onClose, serviceKey, priceLabel }: TidyCalModalProps) => {
  const booking = serviceKey ? tidyCalBookings[serviceKey] : null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
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
  );
};

export default TidyCalModal;

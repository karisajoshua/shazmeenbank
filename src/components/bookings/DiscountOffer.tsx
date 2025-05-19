
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface DiscountOfferProps {
  multiSessionBooked: boolean;
  onBookPackage: () => void;
  onClose: () => void;
  onReturn: () => void;
}

const DiscountOffer = ({ 
  multiSessionBooked, 
  onBookPackage, 
  onClose,
  onReturn
}: DiscountOfferProps) => {
  return (
    <>
      {multiSessionBooked ? (
        <div className="py-6 text-center">
          <div className="mb-6 text-shazmeen-dark flex justify-center">
            <Check size={60} className="text-green-500" />
          </div>
          <h3 className="text-xl font-bold text-shazmeen-dark mb-3">Package Booked Successfully!</h3>
          <p className="text-gray-600 mb-4">
            You've saved 30% on your 3-session package. You'll receive a confirmation email with all the details.
          </p>
          <Button className="btn-primary" onClick={onReturn}>
            Return to Bookings
          </Button>
        </div>
      ) : (
        <div className="py-4">
          <div className="bg-shazmeen-blush/30 p-4 rounded-lg mb-6 border-l-4 border-shazmeen-red">
            <p className="text-shazmeen-dark font-medium">
              Congratulations! Your session has been booked successfully.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
            <h3 className="text-lg font-bold text-shazmeen-dark mb-4">
              Book 3 More Sessions Now and Save 30%
            </h3>
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <span className="text-gray-600">Single Session Price</span>
              <span className="font-semibold">$150.00</span>
            </div>
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <span className="text-gray-600">3-Session Package</span>
              <span className="font-semibold">$450.00</span>
            </div>
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
              <span className="text-green-600 font-medium">30% Discount</span>
              <span className="text-green-600 font-medium">-$135.00</span>
            </div>
            <div className="flex items-center justify-between text-lg">
              <span className="font-semibold text-shazmeen-dark">You Pay</span>
              <span className="font-bold text-shazmeen-dark">$315.00</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold text-shazmeen-dark mb-2">Why Book a Package?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Save 30% on your coaching investment</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Guarantee your spot in Shazmeen's calendar</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Build momentum with consistent coaching</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>See more significant transformations in your relationships</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-3">
            <Button className="btn-primary py-6 text-lg" onClick={onBookPackage}>
              Book 3-Session Package (Save 30%)
            </Button>
            <Button variant="outline" className="btn-outline" onClick={onClose}>
              No thanks, just keep my single session
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default DiscountOffer;

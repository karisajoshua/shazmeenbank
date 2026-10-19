import { Link } from "react-router-dom";
import { CheckCircle2, Mail, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingConfirmation = () => (
  <main className="min-h-screen bg-black text-white pt-36 pb-24">
    <div className="container-custom max-w-3xl text-center">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 px-6 py-14 md:px-12">
        <CheckCircle2 className="mx-auto mb-6 h-14 w-14 text-[#FD0061]" aria-hidden="true" />
        <h1 className="text-3xl md:text-5xl font-bold mb-5">Thank You for Booking</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Thank you for choosing Shazmeen Bank. If you completed your booking successfully, your appointment details and any payment receipt will be provided by TidyCal.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 text-left mb-9">
          <div className="rounded-2xl border border-zinc-700 p-5">
            <Mail className="h-6 w-6 text-[#FD0061] mb-3" aria-hidden="true" />
            <h2 className="font-semibold mb-2">Check your email</h2>
            <p className="text-sm text-gray-400">Look for your TidyCal confirmation and appointment information. Check your spam folder if needed.</p>
          </div>
          <div className="rounded-2xl border border-zinc-700 p-5">
            <Video className="h-6 w-6 text-[#FD0061] mb-3" aria-hidden="true" />
            <h2 className="font-semibold mb-2">Prepare for your session</h2>
            <p className="text-sm text-gray-400">Follow the joining instructions in your confirmation email for your scheduled Zoom session.</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white">
            <Link to="/">Return Home <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" className="border-zinc-600 bg-transparent text-white hover:bg-zinc-800 hover:text-white">
            <Link to="/booking-help">Need Help?</Link>
          </Button>
        </div>
      </div>
    </div>
  </main>
);
export default BookingConfirmation;

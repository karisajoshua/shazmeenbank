import { Link } from "react-router-dom";
import { AlertCircle, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookingHelp = () => (
  <main className="min-h-screen bg-black text-white pt-36 pb-24">
    <div className="container-custom max-w-3xl text-center">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 px-6 py-14 md:px-12">
        <AlertCircle className="mx-auto mb-6 h-14 w-14 text-[#FD0061]" aria-hidden="true" />
        <h1 className="text-3xl md:text-5xl font-bold mb-5">Need Help With Your Booking?</h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          If your calendar isn't loading, a booking link isn't working, or you have questions about payment, we're here to help.
        </p>
        <div className="rounded-2xl border border-zinc-700 p-6 text-left mb-8">
          <h2 className="font-semibold text-xl mb-4">Try these steps</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Return to the booking page and choose your program.</li>
            <li>Try opening the booking link in a new browser tab.</li>
            <li>If you've already paid, check your TidyCal confirmation email before booking again.</li>
            <li>If the problem continues, contact us with the program name and a description of the issue. Do not send payment card details.</li>
          </ol>
        </div>
        <a href="mailto:shazmeen@shazmeenbank.com?subject=Booking%20Assistance" className="inline-flex items-center justify-center gap-2 text-[#FD0061] hover:underline mb-8">
          <Mail className="h-5 w-5" /> shazmeen@shazmeenbank.com
        </a>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild className="bg-[#FD0061] hover:bg-[#FD0061]/90 text-white">
            <Link to="/bookings">View Programs <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild variant="outline" className="border-zinc-600 bg-transparent text-white hover:bg-zinc-800 hover:text-white">
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </div>
  </main>
);
export default BookingHelp;

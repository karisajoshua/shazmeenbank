import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, BookOpen, Check, CreditCard, LockKeyhole, ShieldCheck } from "lucide-react";

type Course = { id: string; title: string; subtitle: string | null; description: string | null; image: string | null; duration_text: string | null; learning_outcomes: string[] | null; status: string | null; price_amount?: number | null; price_currency?: string | null };
export default function CourseCheckout() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    let active = true;
    const load = async () => {
      const [courseResult, userResult] = await Promise.all([
        supabase.from("courses").select("*").eq("id", courseId!).eq("status", "published").maybeSingle(),
        supabase.auth.getUser()
      ]);
      if (!active) return;
      if (courseResult.error) setError(courseResult.error.message);
      else if (!courseResult.data) setError("This course is unavailable.");
      else setCourse(courseResult.data as Course);
      setIsSignedIn(!!userResult.data.user);
      setLoading(false);
    };
    if (courseId) load();
    return () => { active = false; };
  }, [courseId]);
  const price = course?.price_amount;
  const currency = course?.price_currency || "USD";
  const priceLabel = typeof price === "number" && price > 0 ? new Intl.NumberFormat("en-US", { style: "currency", currency }).format(price) : null;
  return <main className="min-h-screen bg-black text-white pt-28 pb-20">
    <div className="container-custom max-w-6xl">
      <Link to="/courses" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8"><ArrowLeft size={18}/> Back to courses</Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Complete your enrollment</h1>
      <p className="text-gray-300 mb-10">Review your course before proceeding to secure checkout.</p>
      {loading ? <p className="text-gray-300">Loading course…</p> : error ? <p role="alert" className="text-red-300">{error}</p> : course && <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden" aria-label="Course summary">
          {course.image && <img src={course.image} alt={course.title} className="w-full aspect-video object-cover"/>}
          <div className="p-6 md:p-8 space-y-5">
            <div><p className="text-[#FD0061] font-semibold mb-2">YOUR COURSE</p><h2 className="text-2xl font-bold">{course.title}</h2>{course.subtitle && <p className="text-gray-300 mt-2">{course.subtitle}</p>}</div>
            {course.description && <p className="text-gray-300 whitespace-pre-line leading-relaxed">{course.description}</p>}
            {course.duration_text && <p className="flex items-center gap-2 text-gray-300"><BookOpen size={18}/>{course.duration_text}</p>}
            {!!course.learning_outcomes?.length && <div><h3 className="font-semibold mb-3">What you'll learn</h3><ul className="space-y-2">{course.learning_outcomes.map((outcome,i)=><li key={i} className="flex gap-2 text-gray-300"><Check className="text-[#FD0061] shrink-0 mt-1" size={16}/>{outcome}</li>)}</ul></div>}
          </div>
        </section>
        <section className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 space-y-6" aria-label="Checkout">
          <div><p className="text-sm font-semibold text-[#B50048] uppercase tracking-wide">Secure checkout</p><h2 className="text-2xl font-bold mt-2">Order summary</h2></div>
          <div className="flex justify-between gap-4 border-b border-gray-200 pb-4"><span className="font-medium">{course.title}</span><span className="font-bold shrink-0">{priceLabel || "Price pending"}</span></div>
          <div className="flex justify-between text-lg font-bold"><span>Total</span><span>{priceLabel || "Not available"}</span></div>
          {!isSignedIn && <div className="rounded-lg bg-gray-100 p-4"><p className="text-sm text-gray-700 mb-3">Sign in or create an account to keep your course in My Courses after purchase.</p><Link to="/login" className="inline-flex bg-gray-900 text-white hover:bg-gray-800 rounded-lg px-4 py-2 font-semibold">Sign in to continue</Link></div>}
          <div className="rounded-xl border border-gray-200 p-5 space-y-3">
            <div className="flex items-center gap-2 font-bold"><CreditCard className="text-[#B50048]"/> PayPal</div>
            <p className="text-sm text-gray-600">Payments will be processed securely through PayPal. Course access is granted only after the payment is verified.</p>
            <button type="button" disabled className="w-full rounded-lg bg-gray-300 text-gray-700 py-3 font-semibold cursor-not-allowed">PayPal checkout — setup required</button>
            <p className="text-xs text-gray-600">Checkout is temporarily unavailable until PayPal server-side order creation and verification are configured. No payment has been taken.</p>
          </div>
          <div className="flex gap-2 items-start text-sm text-gray-600"><ShieldCheck className="shrink-0 text-green-700" size={19}/><span>Secure payment verification before enrollment</span></div>
          <div className="flex gap-2 items-start text-sm text-gray-600"><LockKeyhole className="shrink-0" size={19}/><span>Your course access will be linked to your account</span></div>
        </section>
      </div>}
    </div>
  </main>;
}

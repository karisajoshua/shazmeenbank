-- Create payment_status enum for booking workflow
CREATE TYPE public.payment_status AS ENUM ('pending', 'payment_instructions_sent', 'paid', 'approved', 'rejected', 'cancelled');

-- Create course_waitlist table
CREATE TABLE public.course_waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES public.courses(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  course_title TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS on course_waitlist
ALTER TABLE public.course_waitlist ENABLE ROW LEVEL SECURITY;

-- Anyone can join the waitlist (public insert)
CREATE POLICY "Anyone can join waitlist" 
ON public.course_waitlist 
FOR INSERT 
WITH CHECK (true);

-- Only admins can view waitlist
CREATE POLICY "Admins can view waitlist" 
ON public.course_waitlist 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete from waitlist
CREATE POLICY "Admins can delete from waitlist" 
ON public.course_waitlist 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'));

-- Create coach_availability table
CREATE TABLE public.coach_availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coach_id UUID REFERENCES public.coaches(id) ON DELETE CASCADE,
  available_date DATE NOT NULL,
  is_available BOOLEAN DEFAULT true,
  time_slots TEXT[] DEFAULT '{}',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(coach_id, available_date)
);

-- Enable RLS on coach_availability
ALTER TABLE public.coach_availability ENABLE ROW LEVEL SECURITY;

-- Anyone can view availability (for booking calendar)
CREATE POLICY "Anyone can view availability" 
ON public.coach_availability 
FOR SELECT 
USING (true);

-- Only admins can manage availability
CREATE POLICY "Admins can insert availability" 
ON public.coach_availability 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update availability" 
ON public.coach_availability 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete availability" 
ON public.coach_availability 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'));

-- Add trigger for updated_at on coach_availability
CREATE TRIGGER update_coach_availability_updated_at
BEFORE UPDATE ON public.coach_availability
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add new columns to bookings table for payment workflow
ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS payment_status public.payment_status DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS payment_instructions_sent_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS client_name TEXT,
ADD COLUMN IF NOT EXISTS client_email TEXT,
ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS rejected_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS rejection_reason TEXT;

-- Update bookings RLS to allow public inserts (for guest bookings)
CREATE POLICY "Anyone can create bookings" 
ON public.bookings 
FOR INSERT 
WITH CHECK (true);
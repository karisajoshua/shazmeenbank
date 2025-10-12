-- Create coaches table
CREATE TABLE public.coaches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  specialization TEXT NOT NULL,
  image TEXT,
  rating DECIMAL(2,1) DEFAULT 5.0,
  reviews INTEGER DEFAULT 0,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create courses table
CREATE TABLE public.courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  total_modules INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create user_courses table (user enrollments)
CREATE TABLE public.user_courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0,
  modules_completed INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create bookings table
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  coach_id UUID REFERENCES public.coaches(id) ON DELETE CASCADE,
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  duration INTEGER DEFAULT 60,
  status TEXT DEFAULT 'upcoming',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.coaches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for coaches (public read)
CREATE POLICY "Coaches are viewable by everyone"
  ON public.coaches FOR SELECT
  USING (true);

-- RLS Policies for courses (public read)
CREATE POLICY "Courses are viewable by everyone"
  ON public.courses FOR SELECT
  USING (true);

-- RLS Policies for user_courses
CREATE POLICY "Users can view their own enrollments"
  ON public.user_courses FOR SELECT
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own enrollments"
  ON public.user_courses FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own enrollments"
  ON public.user_courses FOR UPDATE
  USING (auth.uid()::text = user_id::text);

-- RLS Policies for bookings
CREATE POLICY "Users can view their own bookings"
  ON public.bookings FOR SELECT
  USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can insert their own bookings"
  ON public.bookings FOR INSERT
  WITH CHECK (auth.uid()::text = user_id::text);

CREATE POLICY "Users can update their own bookings"
  ON public.bookings FOR UPDATE
  USING (auth.uid()::text = user_id::text);

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.coaches;
ALTER PUBLICATION supabase_realtime ADD TABLE public.courses;
ALTER PUBLICATION supabase_realtime ADD TABLE public.user_courses;
ALTER PUBLICATION supabase_realtime ADD TABLE public.bookings;

-- Create update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
CREATE TRIGGER update_coaches_updated_at BEFORE UPDATE ON public.coaches
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON public.courses
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_courses_updated_at BEFORE UPDATE ON public.user_courses
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON public.bookings
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample coach data
INSERT INTO public.coaches (name, specialization, image, rating, reviews, bio)
VALUES (
  'Shazmeen Bank',
  'Relationship & Self-Worth Coach',
  'https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg',
  5.0,
  124,
  'Shazmeen Bank is an expert relationship coach specializing in helping you build healthy relationships and discover your authentic self. With years of experience and her popular podcast ''Love Better'', Shazmeen guides you through healing attachment wounds and creating meaningful connections.'
);

-- Insert sample courses
INSERT INTO public.courses (title, description, image, total_modules, status)
VALUES 
  (
    'Secure Attachment Mastery',
    'Transform your relationships by developing secure attachment patterns. Learn to build trust, communicate effectively, and create lasting emotional bonds.',
    'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
    12,
    'published'
  ),
  (
    'From Anxious to Empowered',
    'Break free from anxious attachment and cultivate self-confidence. Discover tools to manage relationship anxiety and build emotional resilience.',
    'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800',
    10,
    'published'
  ),
  (
    'Healing After Heartbreak',
    'Navigate the journey from heartbreak to healing. Learn to process emotions, rebuild self-worth, and open your heart to love again.',
    'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
    8,
    'published'
  );
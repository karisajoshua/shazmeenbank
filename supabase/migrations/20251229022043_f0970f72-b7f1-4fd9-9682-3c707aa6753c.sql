-- Add payment_amount column to bookings table for revenue tracking
ALTER TABLE public.bookings ADD COLUMN payment_amount numeric DEFAULT NULL;

-- Add index for faster revenue queries
CREATE INDEX idx_bookings_payment_amount ON public.bookings(payment_amount) WHERE payment_amount IS NOT NULL;

// Shazmeen's coaching data
export const coaches = [{
  id: 1,
  name: "Shazmeen Bank",
  specialization: "Relationship & Self-Worth Coach",
  image: "https://bkjmzbdrgwbgaotweauh.supabase.co/storage/v1/object/public/shazmeen//lovebetter.jpg",
  rating: 5.0,
  reviews: 124,
  bio: "Shazmeen Bank is an expert relationship coach specializing in helping you build healthy relationships and discover your authentic self. With years of experience and her popular podcast 'Love Better', Shazmeen guides you through healing attachment wounds and creating meaningful connections."
}];

// Generate mock time slots
export const generateTimeSlots = () => {
  const today = new Date();
  let slots = [];

  // Generate slots for the next 7 days
  for (let i = 1; i <= 7; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    // Format date as string
    const dateStr = date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });

    // Generate random available times for each day
    const times = [];
    const numSlots = 3 + Math.floor(Math.random() * 4); // 3-6 slots

    const baseHour = 9 + Math.floor(Math.random() * 2); // Start between 9-10 AM
    for (let j = 0; j < numSlots; j++) {
      const hour = (baseHour + j * 2) % 12 || 12; // Convert 0 to 12
      const period = baseHour + j * 2 < 12 ? 'AM' : 'PM';
      times.push(`${hour}:00 ${period}`);
    }
    slots.push({
      date: dateStr,
      times
    });
  }
  return slots;
};

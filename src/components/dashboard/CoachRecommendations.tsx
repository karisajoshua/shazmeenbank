import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Coach {
  id: string;
  name: string;
  specialization: string;
  image: string;
  rating: number;
  reviews: number;
  bio: string;
}

const CoachRecommendations = () => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchCoaches();

    // Set up real-time subscription
    const channel = supabase
      .channel('coaches_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'coaches'
        },
        () => {
          fetchCoaches();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchCoaches = async () => {
    try {
      const { data, error } = await supabase
        .from('coaches')
        .select('*')
        .order('rating', { ascending: false });

      if (error) throw error;
      setCoaches(data || []);
    } catch (error) {
      console.error('Error fetching coaches:', error);
      toast({
        title: "Error",
        description: "Failed to load coaches",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-shazmeen-dark mb-6">Available Coaches</h2>
        <p className="text-gray-500">Loading coaches...</p>
      </div>
    );
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-shazmeen-dark mb-6">Available Coaches</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coaches.map((coach) => (
          <div key={coach.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
            <img 
              src={coach.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800'} 
              alt={coach.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-shazmeen-dark mb-1">{coach.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{coach.specialization}</p>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(coach.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">({coach.reviews} reviews)</span>
            </div>
            <Button className="btn-primary w-full">Book a Session</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoachRecommendations;

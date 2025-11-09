import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';

interface DeletePodcastDialogProps {
  episodeId: string;
  onClose: () => void;
  onSuccess: () => void;
}

export const DeletePodcastDialog = ({ episodeId, onClose, onSuccess }: DeletePodcastDialogProps) => {
  const { data: episode } = useQuery({
    queryKey: ['podcast-episode', episodeId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcast_episodes')
        .select('title, episode_number')
        .eq('id', episodeId)
        .single();
      if (error) throw error;
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('podcast_episodes')
        .delete()
        .eq('id', episodeId);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success('Episode deleted successfully');
      onSuccess();
    },
    onError: (error) => {
      toast.error('Failed to delete episode: ' + error.message);
    },
  });

  return (
    <AlertDialog open={true} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Podcast Episode</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete Episode #{episode?.episode_number}: "{episode?.title}"? 
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => deleteMutation.mutate()}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

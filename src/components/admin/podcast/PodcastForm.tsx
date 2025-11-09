import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CalendarIcon, X } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { podcastFormSchema, type PodcastFormValues } from './PodcastFormSchema';
import { cn } from '@/lib/utils';

interface PodcastFormProps {
  episodeId?: string;
  onBack: () => void;
  onSuccess: () => void;
}

export const PodcastForm = ({ episodeId, onBack, onSuccess }: PodcastFormProps) => {
  const [topicInput, setTopicInput] = useState('');
  const isEditMode = !!episodeId;

  // Fetch existing episode data if editing
  const { data: existingEpisode } = useQuery({
    queryKey: ['podcast-episode', episodeId],
    queryFn: async () => {
      if (!episodeId) return null;
      const { data, error } = await supabase
        .from('podcast_episodes')
        .select('*')
        .eq('id', episodeId)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!episodeId,
  });

  // Fetch next episode number suggestion
  const { data: nextEpisodeNumber } = useQuery({
    queryKey: ['next-episode-number'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('podcast_episodes')
        .select('episode_number')
        .order('episode_number', { ascending: false })
        .limit(1)
        .maybeSingle();
      if (error) throw error;
      return data ? data.episode_number + 1 : 1;
    },
    enabled: !isEditMode,
  });

  const form = useForm<PodcastFormValues>({
    resolver: zodResolver(podcastFormSchema),
    defaultValues: {
      episode_number: 1,
      title: '',
      description: '',
      publish_date: new Date(),
      image_url: '',
      spotify_url: '',
      apple_podcast_url: '',
      topics: [],
      status: 'draft',
    },
  });

  useEffect(() => {
    if (existingEpisode) {
      form.reset({
        episode_number: existingEpisode.episode_number,
        title: existingEpisode.title,
        description: existingEpisode.description || '',
        publish_date: new Date(existingEpisode.publish_date),
        image_url: existingEpisode.image_url || '',
        spotify_url: existingEpisode.spotify_url || '',
        apple_podcast_url: existingEpisode.apple_podcast_url || '',
        topics: existingEpisode.topics || [],
        status: existingEpisode.status as 'published' | 'draft',
      });
    } else if (nextEpisodeNumber) {
      form.setValue('episode_number', nextEpisodeNumber);
    }
  }, [existingEpisode, nextEpisodeNumber, form]);

  const saveMutation = useMutation({
    mutationFn: async (values: PodcastFormValues) => {
      const episodeData = {
        episode_number: values.episode_number,
        title: values.title,
        description: values.description,
        publish_date: format(values.publish_date, 'yyyy-MM-dd'),
        image_url: values.image_url || null,
        spotify_url: values.spotify_url || null,
        apple_podcast_url: values.apple_podcast_url || null,
        topics: values.topics,
        status: values.status,
      };

      if (isEditMode) {
        const { error } = await supabase
          .from('podcast_episodes')
          .update(episodeData)
          .eq('id', episodeId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('podcast_episodes')
          .insert([episodeData]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(isEditMode ? 'Episode updated successfully' : 'Episode created successfully');
      onSuccess();
    },
    onError: (error: any) => {
      toast.error(`Failed to save episode: ${error.message}`);
    },
  });

  const onSubmit = (values: PodcastFormValues) => {
    saveMutation.mutate(values);
  };

  const addTopic = () => {
    const trimmedTopic = topicInput.trim();
    if (trimmedTopic && !form.getValues('topics').includes(trimmedTopic)) {
      form.setValue('topics', [...form.getValues('topics'), trimmedTopic]);
      setTopicInput('');
    }
  };

  const removeTopic = (topicToRemove: string) => {
    form.setValue(
      'topics',
      form.getValues('topics').filter((topic) => topic !== topicToRemove)
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle>{isEditMode ? 'Edit Episode' : 'Create New Episode'}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="episode_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Episode Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(parseInt(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Episode title..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Episode description..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="publish_date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Publish Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="spotify_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Spotify URL (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://open.spotify.com/..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="apple_podcast_url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apple Podcast URL (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://podcasts.apple.com/..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="topics"
              render={() => (
                <FormItem>
                  <FormLabel>Topics</FormLabel>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a topic..."
                      value={topicInput}
                      onChange={(e) => setTopicInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addTopic();
                        }
                      }}
                    />
                    <Button type="button" onClick={addTopic} variant="secondary">
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {form.watch('topics').map((topic) => (
                      <Badge key={topic} variant="secondary" className="gap-1">
                        {topic}
                        <button
                          type="button"
                          onClick={() => removeTopic(topic)}
                          className="ml-1 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Publish Status</FormLabel>
                    <div className="text-sm text-muted-foreground">
                      {field.value === 'published' ? 'Episode is published' : 'Episode is a draft'}
                    </div>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value === 'published'}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? 'published' : 'draft')
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-4">
              <Button type="button" variant="outline" onClick={onBack} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" disabled={saveMutation.isPending} className="flex-1">
                {saveMutation.isPending ? 'Saving...' : isEditMode ? 'Update Episode' : 'Create Episode'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

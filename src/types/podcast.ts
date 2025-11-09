export interface PodcastEpisode {
  id: string;
  episode_number: number;
  title: string;
  description: string;
  publish_date: string;
  image_url: string;
  spotify_url?: string;
  apple_podcast_url?: string;
  topics?: string[];
  status: 'published' | 'draft';
  created_at?: string;
  updated_at?: string;
}

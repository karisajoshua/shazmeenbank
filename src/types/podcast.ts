
export interface PodcastEpisode {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  topics?: string[];
  audioUrl: string;
}

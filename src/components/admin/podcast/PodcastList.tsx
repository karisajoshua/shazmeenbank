import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pencil, Trash2, Plus, Search } from 'lucide-react';
import { DeletePodcastDialog } from './DeletePodcastDialog';
import { format } from 'date-fns';

interface PodcastListProps {
  onEdit: (id: string) => void;
  onCreateNew: () => void;
}

export const PodcastList = ({ onEdit, onCreateNew }: PodcastListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState<string | null>(null);

  const { data: episodes, isLoading, refetch } = useQuery({
    queryKey: ['podcast-episodes-admin', statusFilter],
    queryFn: async () => {
      let query = supabase
        .from('podcast_episodes')
        .select('*')
        .order('episode_number', { ascending: false });

      if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });

  const filteredEpisodes = episodes?.filter(episode =>
    episode.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setSelectedEpisodeId(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteSuccess = () => {
    setDeleteDialogOpen(false);
    setSelectedEpisodeId(null);
    refetch();
  };

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle>Podcast Episodes</CardTitle>
            <Button onClick={onCreateNew}>
              <Plus className="h-4 w-4 mr-2" />
              Create New Episode
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search episodes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={(value: any) => setStatusFilter(value)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Episodes</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Drafts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isLoading ? (
            <div className="text-center py-8 text-muted-foreground">Loading episodes...</div>
          ) : filteredEpisodes && filteredEpisodes.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">Ep #</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Status</TableHead>
                    <TableHead className="hidden lg:table-cell">Publish Date</TableHead>
                    <TableHead className="hidden xl:table-cell">Topics</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEpisodes.map((episode) => (
                    <TableRow key={episode.id}>
                      <TableCell className="font-medium">#{episode.episode_number}</TableCell>
                      <TableCell>
                        <div className="max-w-md truncate">{episode.title}</div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Badge variant={episode.status === 'published' ? 'default' : 'secondary'}>
                          {episode.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {format(new Date(episode.publish_date), 'MMM d, yyyy')}
                      </TableCell>
                      <TableCell className="hidden xl:table-cell">
                        <div className="flex flex-wrap gap-1">
                          {episode.topics?.slice(0, 2).map((topic, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {topic}
                            </Badge>
                          ))}
                          {episode.topics && episode.topics.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{episode.topics.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => onEdit(episode.id)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(episode.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No episodes found. Create your first episode!
            </div>
          )}
        </CardContent>
      </Card>

      {selectedEpisodeId && (
        <DeletePodcastDialog
          episodeId={selectedEpisodeId}
          onClose={() => {
            setDeleteDialogOpen(false);
            setSelectedEpisodeId(null);
          }}
          onSuccess={handleDeleteSuccess}
        />
      )}
    </>
  );
};

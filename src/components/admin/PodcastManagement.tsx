import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PodcastList } from './podcast/PodcastList';
import { PodcastForm } from './podcast/PodcastForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type View = 'list' | 'create' | 'edit';

const PodcastManagement = () => {
  const [view, setView] = useState<View>('list');
  const [editingEpisodeId, setEditingEpisodeId] = useState<string | undefined>();

  const handleEdit = (id: string) => {
    setEditingEpisodeId(id);
    setView('edit');
  };

  const handleCreateNew = () => {
    setEditingEpisodeId(undefined);
    setView('create');
  };

  const handleBack = () => {
    setView('list');
    setEditingEpisodeId(undefined);
  };

  const handleSuccess = () => {
    setView('list');
    setEditingEpisodeId(undefined);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" asChild className="bg-white text-gray-900 hover:bg-gray-100 border-gray-300">
          <Link to="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
      
      {view === 'list' ? (
        <PodcastList onEdit={handleEdit} onCreateNew={handleCreateNew} />
      ) : (
        <PodcastForm
          episodeId={editingEpisodeId}
          onBack={handleBack}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

export default PodcastManagement;
import { useState } from 'react';
import { PodcastList } from './podcast/PodcastList';
import { PodcastForm } from './podcast/PodcastForm';

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
import { useState } from 'react';
import { BlogList } from './blog/BlogList';
import { BlogForm } from './blog/BlogForm';

type View = 'list' | 'create' | 'edit';

const BlogManagement = () => {
  const [view, setView] = useState<View>('list');
  const [editingPostId, setEditingPostId] = useState<string | undefined>();

  const handleEdit = (id: string) => {
    setEditingPostId(id);
    setView('edit');
  };

  const handleCreateNew = () => {
    setEditingPostId(undefined);
    setView('create');
  };

  const handleBack = () => {
    setView('list');
    setEditingPostId(undefined);
  };

  const handleSuccess = () => {
    setView('list');
    setEditingPostId(undefined);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {view === 'list' ? (
        <BlogList onEdit={handleEdit} onCreateNew={handleCreateNew} />
      ) : (
        <BlogForm
          postId={editingPostId}
          onBack={handleBack}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

export default BlogManagement;

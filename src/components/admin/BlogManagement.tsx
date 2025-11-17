import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogList } from './blog/BlogList';
import { BlogForm } from './blog/BlogForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

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
      {view !== 'list' && (
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link to="/admin">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      )}
      
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

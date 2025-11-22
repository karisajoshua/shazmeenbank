import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CourseList } from './courses/CourseList';
import { CourseForm } from './courses/CourseForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type View = 'list' | 'create' | 'edit';

const CoursesManagement = () => {
  const [view, setView] = useState<View>('list');
  const [editingCourseId, setEditingCourseId] = useState<string | undefined>();

  const handleEdit = (id: string) => {
    setEditingCourseId(id);
    setView('edit');
  };

  const handleCreateNew = () => {
    setEditingCourseId(undefined);
    setView('create');
  };

  const handleBack = () => {
    setView('list');
    setEditingCourseId(undefined);
  };

  const handleSuccess = () => {
    setView('list');
    setEditingCourseId(undefined);
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
        <CourseList onEdit={handleEdit} onCreateNew={handleCreateNew} />
      ) : (
        <CourseForm
          courseId={editingCourseId}
          onBack={handleBack}
          onSuccess={handleSuccess}
        />
      )}
    </div>
  );
};

export default CoursesManagement;

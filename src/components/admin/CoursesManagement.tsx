import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CourseList } from './courses/CourseList';
import { CourseForm } from './courses/CourseForm';
import { CourseContentEditor } from './courses/CourseContentEditor';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type View = 'list' | 'create' | 'edit' | 'content';

const CoursesManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [view, setView] = useState<View>(location.pathname.endsWith('/new') ? 'create' : 'list');
  const [editingCourseId, setEditingCourseId] = useState<string | undefined>();

  const handleEdit = (id: string) => {
    setEditingCourseId(id);
    setView('edit');
    navigate('/admin/courses');
  };

  const handleContent = (id: string) => {
    setEditingCourseId(id);
    setView('content');
    navigate('/admin/courses');
  };

  const handleCreateNew = () => {
    setEditingCourseId(undefined);
    setView('create');
    navigate('/admin/courses/new');
  };

  const handleBack = () => {
    setView('list');
    setEditingCourseId(undefined);
    navigate('/admin/courses');
  };

  const handleSuccess = () => {
    setView('list');
    setEditingCourseId(undefined);
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
      
      {view === 'content' && editingCourseId ? (
        <CourseContentEditor courseId={editingCourseId} onBack={handleBack} />
      ) : view === 'list' ? (
        <CourseList onEdit={handleEdit} onCreateNew={handleCreateNew} onManageContent={handleContent} />
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

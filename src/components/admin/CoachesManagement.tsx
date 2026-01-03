import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CoachesManagement = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="outline" asChild>
          <Link to="/admin">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="text-gray-900">Coaches Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Coaches management coming soon...</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoachesManagement;
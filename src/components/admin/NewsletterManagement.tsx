import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import { ArrowLeft, Trash2, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

type Subscriber = {
  id: string;
  email: string;
  name: string | null;
  subscribed_at: string;
  source: string | null;
  is_active: boolean;
};

const NewsletterManagement = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: subscribers = [], isLoading } = useQuery({
    queryKey: ['newsletter-subscribers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false });
      
      if (error) throw error;
      return data as Subscriber[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .delete()
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['newsletter-subscribers'] });
      toast({ title: 'Subscriber removed' });
    },
    onError: () => {
      toast({ title: 'Error removing subscriber', variant: 'destructive' });
    },
  });

  const exportToCSV = () => {
    const csvContent = [
      ['Name', 'Email', 'Source', 'Subscribed At', 'Active'].join(','),
      ...subscribers.map(sub => [
        sub.name || '',
        sub.email,
        sub.source || '',
        format(new Date(sub.subscribed_at), 'yyyy-MM-dd HH:mm'),
        sub.is_active ? 'Yes' : 'No'
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="icon" asChild>
          <Link to="/admin">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">Newsletter Subscribers</h1>
          <p className="text-gray-600">Manage your newsletter subscribers</p>
        </div>
        <Button onClick={exportToCSV} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900">
            <Mail className="h-5 w-5" />
            All Subscribers ({subscribers.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-center py-8 text-gray-600">Loading...</p>
          ) : subscribers.length === 0 ? (
            <p className="text-center py-8 text-gray-600">No subscribers yet</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Source</TableHead>
                  <TableHead>Subscribed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscribers.map((subscriber) => (
                  <TableRow key={subscriber.id}>
                    <TableCell className="font-medium text-gray-900">{subscriber.name || '-'}</TableCell>
                    <TableCell className="text-gray-700">{subscriber.email}</TableCell>
                    <TableCell className="text-gray-700">
                      <Badge variant="secondary">{subscriber.source || 'unknown'}</Badge>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {format(new Date(subscriber.subscribed_at), 'MMM d, yyyy')}
                    </TableCell>
                    <TableCell>
                      <Badge variant={subscriber.is_active ? 'default' : 'destructive'}>
                        {subscriber.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteMutation.mutate(subscriber.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterManagement;
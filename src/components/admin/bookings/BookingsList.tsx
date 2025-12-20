import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Send, CheckCircle, XCircle, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';

type Booking = {
  id: string;
  client_name: string | null;
  client_email: string | null;
  booking_date: string;
  booking_time: string;
  status: string | null;
  payment_status: string | null;
  notes: string | null;
  created_at: string | null;
};

type BookingsListProps = {
  bookings: Booking[];
  isLoading: boolean;
};

const getStatusBadge = (status: string | null) => {
  switch (status) {
    case 'pending':
      return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
    case 'payment_instructions_sent':
      return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Payment Sent</Badge>;
    case 'paid':
      return <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">Paid</Badge>;
    case 'approved':
      return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Approved</Badge>;
    case 'rejected':
      return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejected</Badge>;
    case 'cancelled':
      return <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">Cancelled</Badge>;
    default:
      return <Badge variant="outline">{status || 'Unknown'}</Badge>;
  }
};

const BookingsList = ({ bookings, isLoading }: BookingsListProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, payment_status }: { id: string; payment_status: string }) => {
      const updateData: Record<string, unknown> = { payment_status };
      
      if (payment_status === 'payment_instructions_sent') {
        updateData.payment_instructions_sent_at = new Date().toISOString();
      } else if (payment_status === 'approved') {
        updateData.approved_at = new Date().toISOString();
        updateData.status = 'upcoming';
      } else if (payment_status === 'rejected') {
        updateData.rejected_at = new Date().toISOString();
        updateData.status = 'cancelled';
      }

      const { error } = await supabase
        .from('bookings')
        .update(updateData)
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['admin-bookings'] });
      const action = variables.payment_status === 'payment_instructions_sent' 
        ? 'Payment instructions sent'
        : variables.payment_status === 'approved'
        ? 'Booking approved'
        : 'Booking rejected';
      toast({ title: action });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to update booking status.',
        variant: 'destructive',
      });
      console.error('Update error:', error);
    },
  });

  const exportToCSV = () => {
    const headers = ['Client Name', 'Email', 'Date', 'Time', 'Status', 'Payment Status', 'Notes', 'Created'];
    const csvContent = [
      headers.join(','),
      ...bookings.map((booking) =>
        [
          `"${booking.client_name || ''}"`,
          `"${booking.client_email || ''}"`,
          `"${booking.booking_date}"`,
          `"${booking.booking_time}"`,
          `"${booking.status || ''}"`,
          `"${booking.payment_status || ''}"`,
          `"${(booking.notes || '').replace(/"/g, '""')}"`,
          `"${booking.created_at ? format(new Date(booking.created_at), 'yyyy-MM-dd HH:mm') : ''}"`,
        ].join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `bookings-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();

    toast({
      title: 'Export complete',
      description: `Exported ${bookings.length} bookings to CSV.`,
    });
  };

  if (isLoading) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Loading bookings...
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No booking requests yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" onClick={exportToCSV}>
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div>
                    <p className="font-medium">{booking.client_name || 'N/A'}</p>
                    <a
                      href={`mailto:${booking.client_email}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {booking.client_email}
                    </a>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">
                      {format(new Date(booking.booking_date), 'MMM d, yyyy')}
                    </p>
                    <p className="text-sm text-muted-foreground">{booking.booking_time}</p>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(booking.payment_status)}</TableCell>
                <TableCell className="max-w-[200px]">
                  <p className="text-sm text-muted-foreground truncate">
                    {booking.notes || '-'}
                  </p>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() =>
                          updateStatusMutation.mutate({
                            id: booking.id,
                            payment_status: 'payment_instructions_sent',
                          })
                        }
                        disabled={booking.payment_status !== 'pending'}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Payment Instructions
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          updateStatusMutation.mutate({
                            id: booking.id,
                            payment_status: 'approved',
                          })
                        }
                        disabled={!['payment_instructions_sent', 'paid'].includes(booking.payment_status || '')}
                      >
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Approve Booking
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          updateStatusMutation.mutate({
                            id: booking.id,
                            payment_status: 'rejected',
                          })
                        }
                        disabled={['approved', 'rejected', 'cancelled'].includes(booking.payment_status || '')}
                        className="text-destructive"
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject Booking
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookingsList;

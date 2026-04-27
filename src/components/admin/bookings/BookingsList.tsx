import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { MoreHorizontal, Send, CheckCircle, XCircle, Download, Trash2 } from 'lucide-react';
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
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState<Booking | null>(null);
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [bookingToApprove, setBookingToApprove] = useState<Booking | null>(null);
  const [paymentAmount, setPaymentAmount] = useState('');

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, payment_status, payment_amount }: { id: string; payment_status: string; payment_amount?: number }) => {
      const updateData: Record<string, any> = { payment_status };
      
      if (payment_status === 'payment_instructions_sent') {
        updateData.payment_instructions_sent_at = new Date().toISOString();
      } else if (payment_status === 'approved') {
        updateData.approved_at = new Date().toISOString();
        updateData.status = 'upcoming';
        if (payment_amount !== undefined) {
          updateData.payment_amount = payment_amount;
        }
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
      queryClient.invalidateQueries({ queryKey: ['revenue-bookings'] });
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

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-bookings'] });
      toast({ title: 'Booking deleted' });
      setBookingToDelete(null);
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to delete booking.',
        variant: 'destructive',
      });
      console.error('Delete error:', error);
    },
  });

  const handleDeleteClick = (booking: Booking) => {
    setBookingToDelete(booking);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (bookingToDelete) {
      deleteMutation.mutate(bookingToDelete.id);
    }
    setDeleteDialogOpen(false);
  };

  const handleApproveClick = (booking: Booking) => {
    setBookingToApprove(booking);
    setPaymentAmount('');
    setApproveDialogOpen(true);
  };

  const confirmApprove = () => {
    if (bookingToApprove) {
      const amount = parseFloat(paymentAmount);
      updateStatusMutation.mutate({
        id: bookingToApprove.id,
        payment_status: 'approved',
        payment_amount: isNaN(amount) ? undefined : amount,
      });
    }
    setApproveDialogOpen(false);
    setBookingToApprove(null);
    setPaymentAmount('');
  };

  const canDelete = (status: string | null) => {
    return ['rejected', 'cancelled'].includes(status || '');
  };

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
      <div className="text-center py-8 text-gray-500">
        Loading bookings...
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No booking requests yet.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button variant="outline" onClick={exportToCSV} className="bg-white text-gray-900 hover:bg-gray-100 border-gray-300">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <div className="rounded-md border border-gray-200 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="text-gray-700">Client</TableHead>
              <TableHead className="text-gray-700">Date & Time</TableHead>
              <TableHead className="text-gray-700">Payment Status</TableHead>
              <TableHead className="text-gray-700">Notes</TableHead>
              <TableHead className="w-[100px] text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((booking) => (
              <TableRow key={booking.id}>
                <TableCell>
                  <div>
                    <p className="font-medium text-gray-900">{booking.client_name || 'N/A'}</p>
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
                    <p className="font-medium text-gray-900">
                      {format(new Date(booking.booking_date), 'MMM d, yyyy')}
                    </p>
                    <p className="text-sm text-gray-500">{booking.booking_time}</p>
                  </div>
                </TableCell>
                <TableCell>{getStatusBadge(booking.payment_status)}</TableCell>
                <TableCell className="max-w-[200px]">
                  <p className="text-sm text-gray-500 truncate">
                    {booking.notes || '-'}
                  </p>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:text-gray-900">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white border-gray-200">
                      <DropdownMenuItem
                        onClick={() =>
                          updateStatusMutation.mutate({
                            id: booking.id,
                            payment_status: 'payment_instructions_sent',
                          })
                        }
                        disabled={booking.payment_status !== 'pending'}
                        className="text-gray-700 hover:bg-gray-100"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Payment Instructions
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleApproveClick(booking)}
                        disabled={!['payment_instructions_sent', 'paid'].includes(booking.payment_status || '')}
                        className="text-gray-700 hover:bg-gray-100"
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
                        className="text-red-600 hover:bg-red-50"
                      >
                        <XCircle className="mr-2 h-4 w-4" />
                        Reject Booking
                      </DropdownMenuItem>
                      {canDelete(booking.payment_status) && (
                        <>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDeleteClick(booking)}
                            className="text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Booking
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-gray-900">Delete Booking</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-500">
              Are you sure you want to delete this booking for{' '}
              <strong className="text-gray-900">{bookingToDelete?.client_name}</strong> on{' '}
              <strong className="text-gray-900">
                {bookingToDelete?.booking_date
                  ? format(new Date(bookingToDelete.booking_date), 'MMM d, yyyy')
                  : ''}
              </strong>
              ? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-white text-gray-900 hover:bg-gray-100 border-gray-300">Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Approve Booking Dialog with Payment Amount */}
      <Dialog open={approveDialogOpen} onOpenChange={setApproveDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Approve Booking</DialogTitle>
            <DialogDescription className="text-gray-500">
              Enter the payment amount received for this booking (optional but recommended for revenue tracking).
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <Label htmlFor="payment-amount" className="text-gray-700">Payment Amount ($)</Label>
            <Input
              id="payment-amount"
              type="number"
              placeholder="0.00"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              className="mt-2 bg-white text-gray-900 border-gray-300"
            />
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setApproveDialogOpen(false)}
              className="bg-white text-gray-900 hover:bg-gray-100 border-gray-300"
            >
              Cancel
            </Button>
            <Button onClick={confirmApprove} className="bg-green-600 hover:bg-green-700 text-white">
              Approve Booking
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingsList;

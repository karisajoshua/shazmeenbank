import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ArrowLeft, DollarSign, TrendingUp, Calendar, CreditCard } from 'lucide-react';
import { format, startOfMonth, endOfMonth, subMonths } from 'date-fns';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

type BookingWithPayment = {
  id: string;
  client_name: string | null;
  client_email: string | null;
  booking_date: string;
  payment_amount: number | null;
  payment_status: string | null;
  approved_at: string | null;
};

const RevenueOverview = () => {
  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ['revenue-bookings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('bookings')
        .select('id, client_name, client_email, booking_date, payment_amount, payment_status, approved_at')
        .eq('payment_status', 'approved')
        .not('payment_amount', 'is', null)
        .order('approved_at', { ascending: false });

      if (error) throw error;
      return data as BookingWithPayment[];
    },
  });

  // Calculate total revenue
  const totalRevenue = bookings.reduce((sum, b) => sum + (b.payment_amount || 0), 0);

  // Calculate monthly revenue for chart
  const getMonthlyRevenue = () => {
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const date = subMonths(new Date(), i);
      const start = startOfMonth(date);
      const end = endOfMonth(date);
      
      const monthRevenue = bookings
        .filter((b) => {
          if (!b.approved_at) return false;
          const approvedDate = new Date(b.approved_at);
          return approvedDate >= start && approvedDate <= end;
        })
        .reduce((sum, b) => sum + (b.payment_amount || 0), 0);

      months.push({
        month: format(date, 'MMM'),
        revenue: monthRevenue,
      });
    }
    return months;
  };

  const monthlyData = getMonthlyRevenue();
  
  // Current month revenue
  const currentMonthRevenue = monthlyData[monthlyData.length - 1]?.revenue || 0;
  
  // Previous month revenue for comparison
  const previousMonthRevenue = monthlyData[monthlyData.length - 2]?.revenue || 0;
  
  // Growth percentage
  const growthPercentage = previousMonthRevenue > 0 
    ? ((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue * 100).toFixed(1)
    : currentMonthRevenue > 0 ? '100' : '0';

  // Recent payments (last 10)
  const recentPayments = bookings.slice(0, 10);

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

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Revenue Overview</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-white border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ${totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-gray-500">Total Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ${currentMonthRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </p>
                <p className="text-sm text-gray-500">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {parseFloat(growthPercentage) >= 0 ? '+' : ''}{growthPercentage}%
                </p>
                <p className="text-sm text-gray-500">vs Last Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card className="bg-white border-gray-200 mb-8">
        <CardHeader>
          <CardTitle className="text-gray-900">Monthly Revenue (Last 6 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
                <YAxis 
                  tick={{ fill: '#6b7280' }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  formatter={(value: number) => [`$${value.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Recent Payments Table */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-900 flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Recent Payments
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <p className="text-center py-8 text-gray-500">Loading...</p>
          ) : recentPayments.length === 0 ? (
            <p className="text-center py-8 text-gray-500">No payments recorded yet.</p>
          ) : (
            <div className="rounded-md border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="text-gray-700">Client</TableHead>
                    <TableHead className="text-gray-700">Date</TableHead>
                    <TableHead className="text-gray-700 text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900">{payment.client_name || 'N/A'}</p>
                          <p className="text-sm text-gray-500">{payment.client_email}</p>
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-700">
                        {payment.approved_at 
                          ? format(new Date(payment.approved_at), 'MMM d, yyyy')
                          : '-'}
                      </TableCell>
                      <TableCell className="text-right font-medium text-green-600">
                        ${payment.payment_amount?.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueOverview;

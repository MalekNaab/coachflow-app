import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Download, Plus, DollarSign, TrendingUp, Clock, CreditCard, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { payments, clients } from '../data/mockData';
import { NoPaymentsEmptyState, FilterEmptyState } from '../components/EmptyState';

export function PaymentsPage() {
  const [dateRange, setDateRange] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all-status');
  const [isLoading] = useState(false);

  // Filter payments based on date range
  const filterByDateRange = (payment: typeof payments[0]) => {
    if (dateRange === 'all') return true;
    
    const paymentDate = new Date(payment.date);
    const today = new Date(2025, 1, 17); // Feb 17, 2025
    const daysAgo = parseInt(dateRange);
    const cutoffDate = new Date(today);
    cutoffDate.setDate(today.getDate() - daysAgo);
    
    return paymentDate >= cutoffDate;
  };

  // Filter by status
  const filterByStatus = (payment: typeof payments[0]) => {
    if (statusFilter === 'all-status') return true;
    return payment.status.toLowerCase() === statusFilter;
  };

  const filteredPayments = payments
    .filter(filterByDateRange)
    .filter(filterByStatus)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calculate revenue stats from filtered payments
  const totalRevenue = filteredPayments.reduce((sum, p) => sum + p.amount, 0);
  const completedRevenue = filteredPayments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + p.amount, 0);
  const pendingRevenue = filteredPayments
    .filter((p) => p.status === 'Pending')
    .reduce((sum, p) => sum + p.amount, 0);
  const failedRevenue = filteredPayments
    .filter((p) => p.status === 'Failed')
    .reduce((sum, p) => sum + p.amount, 0);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleExport = () => {
    // Create CSV content
    const csvHeader = 'Client,Date,Amount,Method,Status\n';
    const csvRows = filteredPayments
      .map(p => `${p.clientName},${p.date},$${p.amount},${p.method},${p.status}`)
      .join('\n');
    const csvContent = csvHeader + csvRows;

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `payments-export-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">Payments</h1>
          <p className="text-neutral-600 mt-1">Track your revenue and payments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExport} className="hover:bg-neutral-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Record Payment
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Record New Payment</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="payment-client">Client *</Label>
                  <Select>
                    <SelectTrigger id="payment-client">
                      <SelectValue placeholder="Select a client" />
                    </SelectTrigger>
                    <SelectContent>
                      {clients.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                          {client.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-amount">Amount ($) *</Label>
                  <Input id="payment-amount" type="number" placeholder="300.00" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-method">Payment Method *</Label>
                  <Select>
                    <SelectTrigger id="payment-method">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="check">Check</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-status">Status *</Label>
                  <Select defaultValue="completed">
                    <SelectTrigger id="payment-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-date">Date *</Label>
                  <Input id="payment-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-notes">Notes (Optional)</Label>
                  <Textarea id="payment-notes" placeholder="Add any notes about this payment..." rows={3} />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Record Payment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-neutral-600 mb-1">Total Revenue</p>
              <p className="text-3xl font-semibold text-neutral-900 mb-2">
                ${totalRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-neutral-500">{filteredPayments.length} payments</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-neutral-600 mb-1">Completed</p>
              <p className="text-3xl font-semibold text-emerald-600 mb-2">
                ${completedRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-emerald-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {filteredPayments.filter(p => p.status === 'Completed').length} payments
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-neutral-600 mb-1">Pending</p>
              <p className="text-3xl font-semibold text-amber-600 mb-2">
                ${pendingRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-amber-600 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {filteredPayments.filter(p => p.status === 'Pending').length} payments
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
          </div>
        </Card>
        <Card className="p-6 bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm text-neutral-600 mb-1">Failed</p>
              <p className="text-3xl font-semibold text-red-600 mb-2">
                ${failedRevenue.toLocaleString()}
              </p>
              <p className="text-xs text-red-600 flex items-center gap-1">
                <XCircle className="w-3 h-3" />
                {filteredPayments.filter(p => p.status === 'Failed').length} payments
              </p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4 border border-neutral-200 shadow-sm">
        <div className="flex flex-wrap gap-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="180">Last 6 months</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-status">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          {(dateRange !== 'all' || statusFilter !== 'all-status') && (
            <Button
              variant="outline"
              onClick={() => {
                setDateRange('all');
                setStatusFilter('all-status');
              }}
              className="hover:bg-neutral-50"
            >
              Clear Filters
            </Button>
          )}
        </div>
      </Card>

      {/* Payments Table */}
      {isLoading ? (
        <Card className="p-12 border border-neutral-200 shadow-sm">
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
            <p className="text-neutral-600">Loading payments...</p>
          </div>
        </Card>
      ) : filteredPayments.length > 0 ? (
        <Card className="border border-neutral-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Client</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Date</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Method</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {filteredPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-neutral-50 transition-colors">
                    <td className="p-4">
                      <span className="font-medium text-neutral-900">{payment.clientName}</span>
                    </td>
                    <td className="p-4 text-neutral-700">{formatDate(payment.date)}</td>
                    <td className="p-4">
                      <span className="font-semibold text-neutral-900">${payment.amount}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2 text-neutral-700">
                        <CreditCard className="w-4 h-4 text-neutral-400" />
                        {payment.method}
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-sm rounded-md font-medium ${
                          payment.status === 'Completed'
                            ? 'bg-emerald-100 text-emerald-700'
                            : payment.status === 'Pending'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {payment.status === 'Completed' && <CheckCircle2 className="w-3.5 h-3.5" />}
                        {payment.status === 'Pending' && <Clock className="w-3.5 h-3.5" />}
                        {payment.status === 'Failed' && <XCircle className="w-3.5 h-3.5" />}
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : (
        <Card className="p-12 border border-neutral-200 shadow-sm">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
              <AlertCircle className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No payments found</h3>
            <p className="text-neutral-600 mb-6 max-w-md">
              {dateRange !== 'all' || statusFilter !== 'all-status'
                ? "No payments match your current filters. Try adjusting your search criteria."
                : "No payments have been recorded yet. Click 'Record Payment' to add your first payment."}
            </p>
            {(dateRange !== 'all' || statusFilter !== 'all-status') ? (
              <Button
                variant="outline"
                onClick={() => {
                  setDateRange('all');
                  setStatusFilter('all-status');
                }}
              >
                Clear Filters
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Record Your First Payment
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Record New Payment</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="payment-client-empty">Client *</Label>
                      <Select>
                        <SelectTrigger id="payment-client-empty">
                          <SelectValue placeholder="Select a client" />
                        </SelectTrigger>
                        <SelectContent>
                          {clients.map((client) => (
                            <SelectItem key={client.id} value={client.id}>
                              {client.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-amount-empty">Amount ($) *</Label>
                      <Input id="payment-amount-empty" type="number" placeholder="300.00" step="0.01" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-method-empty">Payment Method *</Label>
                      <Select>
                        <SelectTrigger id="payment-method-empty">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="cash">Cash</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="check">Check</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-status-empty">Status *</Label>
                      <Select defaultValue="completed">
                        <SelectTrigger id="payment-status-empty">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="completed">Completed</SelectItem>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="failed">Failed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-date-empty">Date *</Label>
                      <Input id="payment-date-empty" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="payment-notes-empty">Notes (Optional)</Label>
                      <Textarea id="payment-notes-empty" placeholder="Add any notes about this payment..." rows={3} />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Record Payment
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
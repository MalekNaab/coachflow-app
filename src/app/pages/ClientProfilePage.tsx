import { useParams, useNavigate } from 'react-router';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, User, Target, Calendar, DollarSign, TrendingDown, FileText, Receipt, CalendarDays, Plus } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { clients } from '../data/mockData';
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

export function ClientProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const client = clients.find((c) => c.id === id);

  if (!client) {
    return (
      <div className="p-6">
        <Card className="p-12 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 mb-2">Client not found</h2>
          <p className="text-neutral-600 mb-6">The client you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/app/clients')}>Back to Clients</Button>
        </Card>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const formatJoinedDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  };

  const weightChange = client.measurements.length > 1
    ? client.measurements[0].weight - client.measurements[client.measurements.length - 1].weight
    : 0;

  return (
    <div className="p-6 space-y-6">
      {/* Back Button */}
      <Button variant="ghost" onClick={() => navigate('/app/clients')} className="hover:bg-neutral-100">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Clients
      </Button>

      {/* Header Section */}
      <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-neutral-900">{client.name}</h1>
              <p className="text-neutral-600 mt-1">{client.email}</p>
              <div className="flex items-center gap-3 mt-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-lg font-medium">
                  <Target className="w-3.5 h-3.5" />
                  {client.goal}
                </span>
                <span
                  className={`inline-flex px-3 py-1 text-sm rounded-lg font-medium ${
                    client.status === 'Active'
                      ? 'bg-emerald-100 text-emerald-700'
                      : client.status === 'At Risk'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  {client.status}
                </span>
                <span className="text-sm text-neutral-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Joined {formatJoinedDate(client.joinedDate)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="hover:bg-neutral-50">
                  <FileText className="w-4 h-4 mr-2" />
                  Add Note
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Session Note</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="note-date">Date</Label>
                    <Input id="note-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="note-type">Session Type</Label>
                    <Select>
                      <SelectTrigger id="note-type">
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hiit">HIIT</SelectItem>
                        <SelectItem value="strength">Strength</SelectItem>
                        <SelectItem value="cardio">Cardio</SelectItem>
                        <SelectItem value="flexibility">Flexibility</SelectItem>
                        <SelectItem value="therapy">Physical Therapy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="note-content">Notes</Label>
                    <Textarea id="note-content" placeholder="Session details, progress, observations..." rows={4} />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Note
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="hover:bg-neutral-50">
                  <TrendingDown className="w-4 h-4 mr-2" />
                  Log Measurement
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Log Measurement</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="measure-date">Date</Label>
                    <Input id="measure-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="weight">Weight (lbs)</Label>
                    <Input id="weight" type="number" placeholder="150" step="0.1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea id="notes" placeholder="Any observations or notes..." rows={3} />
                  </div>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Log Measurement
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Receipt className="w-4 h-4 mr-2" />
                  Record Payment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Record Payment</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="payment-amount">Amount ($)</Label>
                    <Input id="payment-amount" type="number" placeholder="300" step="0.01" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-method">Payment Method</Label>
                    <Select>
                      <SelectTrigger id="payment-method">
                        <SelectValue placeholder="Select payment method" />
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
                    <Label htmlFor="payment-date">Date</Label>
                    <Input id="payment-date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="payment-notes">Notes (Optional)</Label>
                    <Textarea id="payment-notes" placeholder="Payment notes..." rows={2} />
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

        {/* Quick Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Total Spend</p>
              <p className="text-lg font-semibold text-neutral-900">
                ${client.totalSpend.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Total Sessions</p>
              <p className="text-lg font-semibold text-neutral-900">{client.sessions.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Weight Change</p>
              <p className="text-lg font-semibold text-neutral-900">
                {weightChange > 0 ? '-' : '+'}{Math.abs(weightChange)} lbs
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-xs text-neutral-500">Total Payments</p>
              <p className="text-lg font-semibold text-neutral-900">{client.payments.length}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Progress Chart Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Progress Tracking</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-neutral-900">Weight Over Time</h3>
            <div className="text-right">
              <p className="text-sm text-neutral-600">Current Weight</p>
              <p className="text-2xl font-semibold text-emerald-600">
                {client.measurements[client.measurements.length - 1].weight} lbs
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={client.measurements}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis 
                dataKey="date" 
                stroke="#737373" 
                fontSize={12}
                tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              />
              <YAxis 
                stroke="#737373" 
                fontSize={12}
                domain={['dataMin - 5', 'dataMax + 5']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
                labelFormatter={(value) => `Date: ${new Date(value).toLocaleDateString()}`}
                formatter={(value: number) => [`${value} lbs`, 'Weight']}
              />
              <Line
                type="monotone"
                dataKey="weight"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Session History Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Session History</h2>
        </div>
        <Card className="border border-neutral-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          {client.sessions.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-neutral-700">Date</th>
                    <th className="text-left p-4 text-sm font-semibold text-neutral-700">Type</th>
                    <th className="text-left p-4 text-sm font-semibold text-neutral-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {client.sessions.map((session) => (
                    <tr key={session.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4 text-neutral-700 font-medium">{formatDate(session.date)}</td>
                      <td className="p-4">
                        <span className="inline-flex px-2.5 py-1 bg-blue-100 text-blue-700 text-sm rounded-md font-medium">
                          {session.type}
                        </span>
                      </td>
                      <td className="p-4 text-neutral-700">{session.notes || <span className="text-neutral-400 italic">No notes</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <CalendarDays className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-600">No sessions recorded yet</p>
            </div>
          )}
        </Card>
      </div>

      {/* Payment History Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Receipt className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Payment History</h2>
        </div>
        <Card className="border border-neutral-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          {client.payments.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-50 border-b border-neutral-200">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-neutral-700">Date</th>
                    <th className="text-left p-4 text-sm font-semibold text-neutral-700">Amount</th>
                    <th className="text-left p-4 text-sm font-semibold text-neutral-700">Method</th>
                    <th className="text-left p-4 text-sm font-semibold text-neutral-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {client.payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4 text-neutral-700 font-medium">{formatDate(payment.date)}</td>
                      <td className="p-4">
                        <span className="font-semibold text-neutral-900">${payment.amount}</span>
                      </td>
                      <td className="p-4 text-neutral-700">{payment.method}</td>
                      <td className="p-4">
                        <span
                          className={`inline-flex px-2.5 py-1 text-sm rounded-md font-medium ${
                            payment.status === 'Completed'
                              ? 'bg-emerald-100 text-emerald-700'
                              : payment.status === 'Pending'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {payment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center">
              <Receipt className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-600">No payments recorded yet</p>
            </div>
          )}
        </Card>
      </div>

      {/* Notes Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Client Notes</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="prose max-w-none">
            <p className="text-neutral-700 leading-relaxed">
              {client.notes || <span className="text-neutral-400 italic">No notes added yet. Use the "Add Note" button above to record observations about this client.</span>}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
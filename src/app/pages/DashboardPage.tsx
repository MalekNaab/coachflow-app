import { KPICard } from '../components/KPICard';
import { GoalTracker } from '../components/GoalTracker';
import { SmartInsights } from '../components/SmartInsights';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  DollarSign,
  Calendar,
  Users,
  TrendingUp,
  CalendarClock,
  Receipt,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { revenueData, sessionsPerWeek, clientsByGoal, sessions, payments } from '../data/mockData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { formatCurrency } from '../utils/formatters';

export function DashboardPage() {
  const upcomingSessions = sessions.slice(0, 5);
  const recentPayments = payments.slice(0, 4);

  // Mini trend data for KPI cards (last 7 data points)
  const revenueTrendData = [6800, 7200, 7500, 7100, 7800, 8000, 8100];
  const sessionsTrendData = [20, 22, 21, 23, 24, 23, 25];
  const clientsTrendData = [22, 21, 21, 20, 20, 19, 18];
  const retentionTrendData = [91, 91, 92, 92, 93, 93, 94];

  // Revenue goal tracking
  const currentMonthRevenue = 9840;
  const monthlyGoal = 12000;
  const averageDailyRevenue = 540; // £540/day average
  const daysRemainingInMonth = 11; // 11 days left in February

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">Dashboard</h1>
          <p className="text-neutral-600 mt-1">Welcome back, here's your overview</p>
        </div>
        <Select defaultValue="30">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 90 days</SelectItem>
            <SelectItem value="custom">Custom range</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Monthly Revenue"
          value={formatCurrency(currentMonthRevenue)}
          change="+12.5%"
          trend="up"
          icon={DollarSign}
          color="emerald"
          trendData={revenueTrendData}
          comparisonText="vs last month"
        />
        <KPICard
          title="Sessions Booked"
          value="25"
          change="+8.3%"
          trend="up"
          icon={Calendar}
          color="blue"
          trendData={sessionsTrendData}
          comparisonText="vs last month"
        />
        <KPICard
          title="Active Clients"
          value="18"
          change="-18%"
          trend="down"
          icon={Users}
          color="purple"
          trendData={clientsTrendData}
          comparisonText="vs last month"
        />
        <KPICard
          title="Retention Rate"
          value="94%"
          change="+3.2%"
          trend="up"
          icon={TrendingUp}
          color="amber"
          trendData={retentionTrendData}
          comparisonText="vs last month"
        />
      </div>

      {/* Revenue Goal Tracker */}
      <GoalTracker
        title="Monthly Revenue Goal"
        current={currentMonthRevenue}
        goal={monthlyGoal}
        period="February 2026"
        projectedDaily={averageDailyRevenue}
        daysRemaining={daysRemainingInMonth}
        color="emerald"
      />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Revenue Trend (Last 6 Months)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="month" stroke="#737373" fontSize={12} />
              <YAxis stroke="#737373" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Sessions Per Week */}
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Weekly Sessions</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={sessionsPerWeek}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="week" stroke="#737373" fontSize={12} />
              <YAxis stroke="#737373" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="sessions" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Clients by Goal */}
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">Clients by Goal</h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={clientsByGoal}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {clientsByGoal.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Upcoming Sessions */}
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-neutral-900">Upcoming Sessions</h3>
            <CalendarClock className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="space-y-3">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className="flex items-start justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <div>
                  <p className="font-medium text-neutral-900">{session.clientName}</p>
                  <p className="text-sm text-neutral-600">
                    {session.date} at {session.time}
                  </p>
                </div>
                <span className="text-sm font-medium text-emerald-600">{formatCurrency(session.price)}</span>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Sessions
          </Button>
        </Card>

        {/* Recent Payments */}
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-neutral-900">Recent Payments</h3>
            <Receipt className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="space-y-3">
            {recentPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-start justify-between p-3 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <div>
                  <p className="font-medium text-neutral-900">{payment.clientName}</p>
                  <p className="text-sm text-neutral-600">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-neutral-900">{formatCurrency(payment.amount)}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      payment.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All Payments
          </Button>
        </Card>
      </div>

      {/* Insights */}
      <SmartInsights />
    </div>
  );
}
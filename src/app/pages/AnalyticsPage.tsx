import { useState } from 'react';
import { Card } from '../components/ui/card';
import { KPICard } from '../components/KPICard';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  DollarSign, 
  Calendar, 
  Award,
  BarChart3,
  PieChart as PieChartIcon,
  Target,
  Activity
} from 'lucide-react';
import { clients } from '../data/mockData';

export function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('180');

  // Revenue by Month Data
  const revenueByMonth = [
    { id: 'sep', month: 'Sep', revenue: 4200, sessions: 48, clients: 12 },
    { id: 'oct', month: 'Oct', revenue: 5100, sessions: 56, clients: 14 },
    { id: 'nov', month: 'Nov', revenue: 6300, sessions: 72, clients: 16 },
    { id: 'dec', month: 'Dec', revenue: 5800, sessions: 64, clients: 15 },
    { id: 'jan', month: 'Jan', revenue: 7200, sessions: 82, clients: 18 },
    { id: 'feb', month: 'Feb', revenue: 8100, sessions: 95, clients: 20 },
  ];

  // Retention Funnel Data
  const retentionData = [
    { id: 'new', stage: 'New Clients', count: 25, percentage: 100 },
    { id: '1mo', stage: '1 Month', count: 22, percentage: 88 },
    { id: '3mo', stage: '3 Months', count: 20, percentage: 80 },
    { id: '6mo', stage: '6 Months', count: 18, percentage: 72 },
    { id: '12mo', stage: '12 Months', count: 16, percentage: 64 },
  ];

  // Top Clients by Spend
  const topClients = clients
    .sort((a, b) => b.totalSpend - a.totalSpend)
    .slice(0, 5)
    .map((c, index) => ({
      rank: index + 1,
      name: c.name,
      spend: c.totalSpend,
      sessions: c.sessions.length,
      goal: c.goal,
    }));

  // Package Performance Data
  const packageData = [
    { id: '1on1', package: '1-on-1 Training', revenue: 12500, clients: 15, sessions: 180 },
    { id: 'group', package: 'Group Classes', revenue: 8200, clients: 25, sessions: 120 },
    { id: 'monthly', package: 'Monthly Package', revenue: 15600, clients: 12, sessions: 156 },
    { id: 'single', package: 'Single Session', revenue: 4500, clients: 18, sessions: 60 },
  ];

  // Client Goals Distribution
  const clientsByGoal = [
    { id: 'fat-loss', name: 'Fat Loss', value: 35, color: '#10b981' },
    { id: 'strength', name: 'Strength', value: 28, color: '#3b82f6' },
    { id: 'rehab', name: 'Rehab', value: 15, color: '#f59e0b' },
    { id: 'general', name: 'General Fitness', value: 22, color: '#8b5cf6' },
  ];

  // Calculate key metrics
  const totalRevenue = revenueByMonth.reduce((sum, month) => sum + month.revenue, 0);
  const totalSessions = revenueByMonth.reduce((sum, month) => sum + month.sessions, 0);
  const avgRevenuePerClient = Math.round(totalRevenue / clients.length);
  const avgSessionPrice = Math.round(totalRevenue / totalSessions);
  const revenueGrowth = ((revenueByMonth[5].revenue - revenueByMonth[4].revenue) / revenueByMonth[4].revenue * 100).toFixed(1);

  // Trend data for KPI sparklines
  const revenueTrendData = revenueByMonth.map(m => m.revenue);
  const sessionsTrendData = revenueByMonth.map(m => m.sessions);
  const clientsTrendData = revenueByMonth.map(m => m.clients);
  const avgPriceTrendData = [73, 75, 74, 76, 78, 77];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">Analytics</h1>
          <p className="text-neutral-600 mt-1">Comprehensive business performance insights</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="180">Last 6 months</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Enhanced KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          change={`+${revenueGrowth}%`}
          trend="up"
          icon={DollarSign}
          color="emerald"
          trendData={revenueTrendData}
          comparisonText="vs last month"
        />
        <KPICard
          title="Total Sessions"
          value={totalSessions}
          change="+18.5%"
          trend="up"
          icon={Calendar}
          color="blue"
          trendData={sessionsTrendData}
          subtitle={`${Math.round(totalSessions / 6)} per month avg`}
          comparisonText="vs last month"
        />
        <KPICard
          title="Avg Revenue/Client"
          value={`$${avgRevenuePerClient.toLocaleString()}`}
          change="+8.2%"
          trend="up"
          icon={Users}
          color="purple"
          trendData={clientsTrendData}
          subtitle={`${clients.length} active clients`}
          comparisonText="vs last month"
        />
        <KPICard
          title="Avg Session Price"
          value={`$${avgSessionPrice}`}
          change="+4.1%"
          trend="up"
          icon={Activity}
          color="amber"
          trendData={avgPriceTrendData}
          comparisonText="vs last month"
        />
      </div>

      {/* Revenue Breakdown by Month - Primary Chart */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Revenue Breakdown by Month</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <ResponsiveContainer key="revenue-area-chart" width="100%" height={350}>
            <AreaChart data={revenueByMonth}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis 
                dataKey="month" 
                stroke="#737373"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="#737373"
                style={{ fontSize: '12px' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                  padding: '12px'
                }}
                formatter={(value: number, name: string) => {
                  if (name === 'revenue') return [`$${value}`, 'Revenue'];
                  if (name === 'sessions') return [value, 'Sessions'];
                  if (name === 'clients') return [value, 'Clients'];
                  return [value, name];
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorRevenue)"
                name="Revenue ($)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200">
            <div className="text-center">
              <p className="text-sm text-neutral-600 mb-1">Highest Month</p>
              <p className="text-lg font-semibold text-emerald-600">Feb - $8,100</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-neutral-600 mb-1">Average Monthly</p>
              <p className="text-lg font-semibold text-neutral-900">${Math.round(totalRevenue / 6).toLocaleString()}</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-neutral-600 mb-1">Growth Rate</p>
              <p className="text-lg font-semibold text-emerald-600">+{revenueGrowth}%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Second Row: Retention & Package Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Retention Funnel */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-neutral-700" />
            <h2 className="text-xl font-semibold text-neutral-900">Client Retention Funnel</h2>
          </div>
          <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <ResponsiveContainer key="retention-bar-chart" width="100%" height={300}>
              <BarChart data={retentionData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis type="number" stroke="#737373" style={{ fontSize: '12px' }} />
                <YAxis 
                  dataKey="stage" 
                  type="category" 
                  stroke="#737373" 
                  width={100}
                  style={{ fontSize: '12px' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number, name: string, props: any) => {
                    return [
                      `${value} clients (${props.payload.percentage}%)`,
                      'Count'
                    ];
                  }}
                />
                <Bar 
                  dataKey="count" 
                  fill="#10b981" 
                  radius={[0, 8, 8, 0]}
                  label={{ position: 'right', fill: '#737373', fontSize: 12 }}
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-emerald-700 font-medium mb-1">12-Month Retention Rate</p>
                  <p className="text-2xl font-bold text-emerald-900">64%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-emerald-700">16 of 25 clients</p>
                  <p className="text-xs text-emerald-600 mt-1">stay for 12+ months</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Package Performance Comparison */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-neutral-700" />
            <h2 className="text-xl font-semibold text-neutral-900">Package Performance</h2>
          </div>
          <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <ResponsiveContainer key="package-bar-chart" width="100%" height={300}>
              <BarChart data={packageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis 
                  dataKey="package" 
                  stroke="#737373" 
                  angle={-15} 
                  textAnchor="end" 
                  height={100}
                  style={{ fontSize: '11px' }}
                />
                <YAxis 
                  stroke="#737373"
                  style={{ fontSize: '12px' }}
                  tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Bar 
                  dataKey="revenue" 
                  fill="#10b981" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {packageData.map((pkg) => (
                <div key={pkg.id} className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                  <p className="text-xs text-neutral-600 mb-1">{pkg.package}</p>
                  <p className="font-semibold text-neutral-900">${Math.round(pkg.revenue / pkg.clients)}</p>
                  <p className="text-xs text-neutral-500 mt-1">per client avg</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Third Row: Top Clients & Client Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Clients Ranking */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-neutral-700" />
            <h2 className="text-xl font-semibold text-neutral-900">Top Clients by Spend</h2>
          </div>
          <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="space-y-3">
              {topClients.map((client) => (
                <div 
                  key={client.rank} 
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-neutral-50 to-white rounded-lg border border-neutral-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      client.rank === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                      client.rank === 2 ? 'bg-gradient-to-br from-neutral-300 to-neutral-500' :
                      client.rank === 3 ? 'bg-gradient-to-br from-amber-600 to-amber-800' :
                      'bg-gradient-to-br from-emerald-400 to-emerald-600'
                    }`}>
                      {client.rank}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{client.name}</p>
                      <p className="text-sm text-neutral-500">{client.sessions} sessions • {client.goal}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-emerald-600">${client.spend.toLocaleString()}</p>
                    <p className="text-xs text-neutral-500">total spend</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Client Goals Distribution */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <PieChartIcon className="w-5 h-5 text-neutral-700" />
            <h2 className="text-xl font-semibold text-neutral-900">Client Goals Distribution</h2>
          </div>
          <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
            <ResponsiveContainer key="goals-pie-chart" width="100%" height={280}>
              <PieChart>
                <Pie
                  data={clientsByGoal}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
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
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {clientsByGoal.map((goal) => (
                <div key={goal.id} className="flex items-center gap-2 p-2">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: goal.color }}
                  />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">{goal.name}</p>
                    <p className="text-xs text-neutral-500">{goal.value} clients</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Package Details Table */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Package Details & Performance</h2>
        </div>
        <Card className="border border-neutral-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Package</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Revenue</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Clients</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Sessions</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Avg per Client</th>
                  <th className="text-left p-4 text-sm font-semibold text-neutral-700">Avg per Session</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {packageData
                  .sort((a, b) => b.revenue - a.revenue)
                  .map((pkg) => (
                    <tr key={pkg.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="p-4 font-medium text-neutral-900">{pkg.package}</td>
                      <td className="p-4">
                        <span className="font-semibold text-emerald-600">${pkg.revenue.toLocaleString()}</span>
                      </td>
                      <td className="p-4 text-neutral-700">{pkg.clients}</td>
                      <td className="p-4 text-neutral-700">{pkg.sessions}</td>
                      <td className="p-4 text-neutral-700">${Math.round(pkg.revenue / pkg.clients)}</td>
                      <td className="p-4 text-neutral-700">${Math.round(pkg.revenue / pkg.sessions)}</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot className="bg-neutral-50 border-t border-neutral-200">
                <tr>
                  <td className="p-4 font-semibold text-neutral-900">Total</td>
                  <td className="p-4">
                    <span className="font-bold text-emerald-600">
                      ${packageData.reduce((sum, pkg) => sum + pkg.revenue, 0).toLocaleString()}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-neutral-700">
                    {packageData.reduce((sum, pkg) => sum + pkg.clients, 0)}
                  </td>
                  <td className="p-4 font-semibold text-neutral-700">
                    {packageData.reduce((sum, pkg) => sum + pkg.sessions, 0)}
                  </td>
                  <td className="p-4 text-neutral-500">—</td>
                  <td className="p-4 text-neutral-500">—</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
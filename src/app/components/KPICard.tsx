import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Card } from './ui/card';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  trendData?: number[];
  subtitle?: string;
  color?: 'emerald' | 'blue' | 'purple' | 'amber' | 'red' | 'neutral';
  loading?: boolean;
  comparisonText?: string; // e.g., "vs last month", "vs last week"
}

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'text-emerald-600',
    gradient: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
    text: 'text-emerald-600',
    chart: '#10b981',
    ring: 'ring-emerald-100',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    gradient: 'bg-gradient-to-br from-blue-400 to-blue-600',
    text: 'text-blue-600',
    chart: '#3b82f6',
    ring: 'ring-blue-100',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    gradient: 'bg-gradient-to-br from-purple-400 to-purple-600',
    text: 'text-purple-600',
    chart: '#8b5cf6',
    ring: 'ring-purple-100',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'text-amber-600',
    gradient: 'bg-gradient-to-br from-amber-400 to-amber-600',
    text: 'text-amber-600',
    chart: '#f59e0b',
    ring: 'ring-amber-100',
  },
  red: {
    bg: 'bg-red-50',
    icon: 'text-red-600',
    gradient: 'bg-gradient-to-br from-red-400 to-red-600',
    text: 'text-red-600',
    chart: '#ef4444',
    ring: 'ring-red-100',
  },
  neutral: {
    bg: 'bg-stone-50',
    icon: 'text-stone-600',
    gradient: 'bg-gradient-to-br from-stone-400 to-stone-600',
    text: 'text-stone-600',
    chart: '#78716c',
    ring: 'ring-stone-100',
  },
};

export function KPICard({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon, 
  trendData,
  subtitle,
  color = 'emerald',
  loading = false,
  comparisonText = 'vs last month',
}: KPICardProps) {
  // Convert trendData array to format needed for chart
  const chartData = trendData?.map((val, idx) => ({ value: val, index: idx })) || [];
  const colors = colorClasses[color];

  if (loading) {
    return (
      <Card className="p-8 bg-white border border-stone-200 rounded-2xl">
        <div className="animate-pulse">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="h-3.5 bg-stone-200 rounded w-24 mb-3"></div>
              <div className="h-9 bg-stone-200 rounded w-36"></div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-stone-200"></div>
          </div>
          {trendData && <div className="h-12 bg-stone-100 rounded"></div>}
        </div>
      </Card>
    );
  }

  // Determine trend icon
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <Card className="group p-8 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md hover:border-stone-300 transition-all duration-200 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-5">
        <div className="flex-1">
          <p className="text-xs font-medium text-stone-600 uppercase tracking-wider mb-2.5">
            {title}
          </p>
          <p className="text-3xl font-semibold text-stone-900 tracking-tight leading-none">
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-stone-500 mt-2">{subtitle}</p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-2xl ${colors.gradient} flex items-center justify-center shadow-sm ring-4 ${colors.ring} transition-transform duration-200 group-hover:scale-105`}>
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>
      
      {/* Mini trend sparkline */}
      {trendData && trendData.length > 0 && (
        <div className="h-12 mb-4 -mx-2 relative">
          <ResponsiveContainer width="100%" height={48}>
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={
                  trend === 'up' ? '#10b981' : 
                  trend === 'down' ? '#ef4444' : 
                  colors.chart
                }
                strokeWidth={2.5}
                dot={false}
                strokeLinecap="round"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Trend indicator with arrow */}
      {change && (
        <div className="flex items-center gap-2 pt-4 border-t border-stone-100">
          <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${
            trend === 'up' 
              ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' 
              : trend === 'down' 
              ? 'bg-red-50 text-red-700 ring-1 ring-red-200' 
              : 'bg-stone-50 text-stone-700 ring-1 ring-stone-200'
          }`}>
            <TrendIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
            <span className="text-sm font-semibold">
              {change}
            </span>
          </div>
          <span className="text-xs text-stone-500">{comparisonText}</span>
        </div>
      )}
    </Card>
  );
}
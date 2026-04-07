import { Card } from './ui/card';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ChartWrapperProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
  action?: ReactNode;
  footer?: ReactNode;
  loading?: boolean;
  emptyMessage?: string;
  isEmpty?: boolean;
}

export function ChartWrapper({
  title,
  subtitle,
  icon: Icon,
  children,
  action,
  footer,
  loading = false,
  emptyMessage = 'No data available',
  isEmpty = false,
}: ChartWrapperProps) {
  if (loading) {
    return (
      <Card className="p-8 border border-stone-200 rounded-2xl shadow-sm">
        <div className="animate-pulse">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-200"></div>
              <div>
                <div className="h-5 bg-stone-200 rounded w-48 mb-2"></div>
                {subtitle && <div className="h-3 bg-stone-100 rounded w-32"></div>}
              </div>
            </div>
          </div>
          <div className="h-80 bg-stone-50 rounded-xl"></div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4 flex-1">
          {Icon && (
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm ring-4 ring-emerald-100">
              <Icon className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold text-stone-900 tracking-tight">{title}</h3>
            {subtitle && (
              <p className="text-sm text-stone-600 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        {action && <div className="flex-shrink-0">{action}</div>}
      </div>

      {/* Chart Content */}
      {isEmpty ? (
        <div className="h-80 flex flex-col items-center justify-center text-stone-500 bg-stone-50/50 rounded-2xl border border-stone-200 border-dashed">
          <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-stone-900">{emptyMessage}</p>
        </div>
      ) : (
        <div className="min-h-[320px]">{children}</div>
      )}

      {/* Footer */}
      {footer && (
        <div className="mt-8 pt-8 border-t border-stone-200">
          {footer}
        </div>
      )}
    </Card>
  );
}

// Stats Footer Component
interface ChartStatsProps {
  stats: Array<{
    label: string;
    value: string | number;
    color?: 'emerald' | 'blue' | 'purple' | 'amber' | 'neutral';
  }>;
}

export function ChartStats({ stats }: ChartStatsProps) {
  const colorClasses = {
    emerald: 'text-emerald-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600',
    amber: 'text-amber-600',
    neutral: 'text-stone-900',
  };

  return (
    <div className={`grid grid-cols-${Math.min(stats.length, 4)} gap-8`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-xs font-medium text-stone-600 uppercase tracking-wider mb-2">{stat.label}</p>
          <p className={`text-xl font-semibold tracking-tight ${colorClasses[stat.color || 'neutral']}`}>
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}
// Skeleton loading components with shimmer animations

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 bg-[length:200%_100%] rounded ${className}`}
      style={{
        animation: 'skeleton-shimmer 2s infinite linear',
      }}
    />
  );
}

// KPI Card Skeleton
export function KPICardSkeleton() {
  return (
    <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          {/* Label */}
          <Skeleton className="h-3 w-32 mb-3" />
          {/* Value */}
          <Skeleton className="h-8 w-24 mb-3" />
          {/* Sparkline */}
          <div className="flex items-end gap-1 h-8 mt-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton
                key={i}
                className="flex-1"
                style={{ height: `${Math.random() * 60 + 40}%` }}
              />
            ))}
          </div>
        </div>
        {/* Icon */}
        <Skeleton className="w-12 h-12 rounded-xl" />
      </div>
      {/* Trend badge */}
      <Skeleton className="h-6 w-20 rounded-lg" />
    </div>
  );
}

// Table Row Skeleton
export function TableRowSkeleton({ columns = 5 }: { columns?: number }) {
  return (
    <tr className="border-b border-stone-200">
      {Array.from({ length: columns }).map((_, i) => (
        <td key={i} className="p-4">
          <Skeleton className="h-4 w-full" />
        </td>
      ))}
    </tr>
  );
}

// Table Skeleton
export function TableSkeleton({
  rows = 5,
  columns = 5,
  headers = [],
}: {
  rows?: number;
  columns?: number;
  headers?: string[];
}) {
  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
      <table className="w-full">
        <thead className="bg-stone-50 border-b border-stone-200">
          <tr>
            {(headers.length > 0 ? headers : Array.from({ length: columns })).map((header, i) => (
              <th key={i} className="text-left p-4">
                {typeof header === 'string' ? (
                  <span className="text-sm font-semibold text-stone-700">{header}</span>
                ) : (
                  <Skeleton className="h-4 w-20" />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <TableRowSkeleton key={i} columns={columns} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Card Skeleton
export function CardSkeleton() {
  return (
    <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm">
      <Skeleton className="h-6 w-40 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

// Client Card Skeleton
export function ClientCardSkeleton() {
  return (
    <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <Skeleton className="w-14 h-14 rounded-full flex-shrink-0" />
        
        <div className="flex-1 min-w-0">
          {/* Name */}
          <Skeleton className="h-5 w-32 mb-2" />
          {/* Email */}
          <Skeleton className="h-4 w-48 mb-3" />
          
          {/* Stats */}
          <div className="flex flex-wrap gap-3 mb-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
          </div>
          
          {/* Badge */}
          <Skeleton className="h-6 w-16 rounded-md" />
        </div>
        
        {/* Action button */}
        <Skeleton className="w-20 h-9 rounded-lg" />
      </div>
    </div>
  );
}

// Session Card Skeleton
export function SessionCardSkeleton() {
  return (
    <div className="p-4 bg-white border border-stone-200 rounded-xl">
      <div className="flex items-start justify-between mb-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-6 w-20 rounded-md" />
      </div>
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-4 w-40" />
    </div>
  );
}

// Payment Row Skeleton
export function PaymentRowSkeleton() {
  return (
    <div className="flex items-start justify-between p-3 bg-stone-50 rounded-lg">
      <div className="flex-1">
        <Skeleton className="h-4 w-32 mb-2" />
        <Skeleton className="h-3 w-24" />
      </div>
      <div className="text-right">
        <Skeleton className="h-4 w-16 mb-2 ml-auto" />
        <Skeleton className="h-5 w-20 ml-auto rounded" />
      </div>
    </div>
  );
}

// Chart Skeleton - Line Chart
export function LineChartSkeleton() {
  return (
    <div className="h-64 flex items-end gap-2 px-4 pb-8">
      {/* Y-axis labels */}
      <div className="flex flex-col justify-between h-full pr-2 text-xs text-stone-400">
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
        <Skeleton className="h-3 w-8" />
      </div>
      
      {/* Chart area with line simulation */}
      <div className="flex-1 h-full relative">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-px bg-stone-200" />
          ))}
        </div>
        
        {/* Line chart points */}
        <div className="absolute inset-0 flex items-end justify-between px-2">
          {Array.from({ length: 7 }).map((_, i) => {
            const height = Math.random() * 60 + 30;
            return (
              <div key={i} className="flex flex-col items-center gap-2" style={{ height: '100%' }}>
                <div className="flex-1 flex items-end">
                  <Skeleton className="w-2 rounded-full" style={{ height: `${height}%` }} />
                </div>
                <Skeleton className="h-3 w-8" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Chart Skeleton - Bar Chart
export function BarChartSkeleton() {
  return (
    <div className="h-64 flex items-end gap-3 px-4 pb-8">
      {Array.from({ length: 7 }).map((_, i) => {
        const height = Math.random() * 70 + 20;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex items-end" style={{ height: '220px' }}>
              <Skeleton className="w-full rounded-t-lg" style={{ height: `${height}%` }} />
            </div>
            <Skeleton className="h-3 w-full" />
          </div>
        );
      })}
    </div>
  );
}

// Chart Skeleton - Pie Chart
export function PieChartSkeleton() {
  return (
    <div className="h-64 flex items-center justify-center gap-8 px-4">
      {/* Pie circle */}
      <div className="relative w-40 h-40">
        <Skeleton className="w-full h-full rounded-full" />
        {/* Center hole for donut effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full" />
        </div>
      </div>
      
      {/* Legend */}
      <div className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}

// List Skeleton
export function ListSkeleton({ items = 5 }: { items?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
          <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
          <div className="flex-1">
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-3 w-48" />
          </div>
          <Skeleton className="w-16 h-8 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

// Dashboard Stats Grid Skeleton
export function DashboardStatsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <KPICardSkeleton key={i} />
      ))}
    </div>
  );
}

// Goal Tracker Skeleton
export function GoalTrackerSkeleton() {
  return (
    <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-xl" />
          <div>
            <Skeleton className="h-5 w-48 mb-2" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
        <Skeleton className="w-24 h-7 rounded-lg" />
      </div>
      
      <div className="grid grid-cols-3 gap-6 mb-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <Skeleton className="h-3 w-20 mb-2" />
            <Skeleton className="h-7 w-24" />
          </div>
        ))}
      </div>
      
      <div className="mb-2">
        <div className="flex items-center justify-between mb-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-3 w-full rounded-full" />
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-stone-200">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-40" />
      </div>
    </div>
  );
}

// Insights Panel Skeleton
export function InsightsSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-xl" />
          <div>
            <Skeleton className="h-5 w-32 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>
        </div>
        <Skeleton className="w-20 h-7 rounded-lg" />
      </div>
      
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className="p-4 rounded-xl border border-stone-200 bg-stone-50"
          >
            <div className="flex items-start gap-4">
              <Skeleton className="w-10 h-10 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-5 w-16" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-3" />
                <Skeleton className="h-8 w-32 rounded-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Full Page Loading Skeleton
export function PageLoadingSkeleton() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="w-32 h-10 rounded-lg" />
      </div>
      
      {/* Stats Grid */}
      <DashboardStatsSkeleton />
      
      {/* Content Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

// Compact Loading Spinner
export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  return (
    <div
      className={`${sizeClasses[size]} border-stone-200 border-t-emerald-600 rounded-full animate-spin`}
    />
  );
}

// Loading State with Message
export function LoadingState({
  message = 'Loading...',
  size = 'md',
}: {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <LoadingSpinner size={size} />
      <p className="mt-4 text-stone-600 text-sm">{message}</p>
    </div>
  );
}

// Card with Loading State
export function LoadingCard({ title }: { title?: string }) {
  return (
    <div className="p-12 bg-white border border-stone-200 rounded-2xl shadow-sm">
      <div className="flex flex-col items-center justify-center">
        <LoadingSpinner size="lg" />
        {title && <p className="mt-4 text-stone-600">{title}</p>}
      </div>
    </div>
  );
}

// Button Loading State
export function ButtonSkeleton() {
  return <Skeleton className="h-10 w-32 rounded-lg" />;
}

// Avatar Skeleton
export function AvatarSkeleton({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  return <Skeleton className={`${sizeClasses[size]} rounded-full`} />;
}

// Badge Skeleton
export function BadgeSkeleton() {
  return <Skeleton className="h-6 w-16 rounded-md" />;
}

// Input Skeleton
export function InputSkeleton() {
  return <Skeleton className="h-10 w-full rounded-lg" />;
}

// Calendar Day Skeleton
export function CalendarDaySkeleton() {
  return (
    <div className="p-2 border border-stone-200 rounded-lg min-h-24">
      <Skeleton className="h-4 w-8 mb-2" />
      <div className="space-y-1">
        <Skeleton className="h-2 w-full rounded" />
        <Skeleton className="h-2 w-3/4 rounded" />
      </div>
    </div>
  );
}

// Week Calendar Skeleton
export function WeekCalendarSkeleton() {
  return (
    <div className="grid grid-cols-7 gap-2">
      {Array.from({ length: 7 }).map((_, i) => (
        <CalendarDaySkeleton key={i} />
      ))}
    </div>
  );
}
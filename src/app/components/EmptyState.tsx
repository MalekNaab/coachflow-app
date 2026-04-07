import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  illustration?: 'default' | 'search' | 'filter' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  secondaryAction,
  illustration = 'default',
  size = 'md',
}: EmptyStateProps) {
  const sizeClasses = {
    sm: {
      container: 'py-8',
      iconContainer: 'w-16 h-16 mb-4',
      icon: 'w-8 h-8',
      title: 'text-lg',
      description: 'text-sm',
    },
    md: {
      container: 'py-12',
      iconContainer: 'w-20 h-20 mb-6',
      icon: 'w-10 h-10',
      title: 'text-xl',
      description: 'text-base',
    },
    lg: {
      container: 'py-16',
      iconContainer: 'w-24 h-24 mb-8',
      icon: 'w-12 h-12',
      title: 'text-2xl',
      description: 'text-lg',
    },
  };

  const illustrationStyles = {
    default: {
      bg: 'bg-gradient-to-br from-stone-100 to-stone-200',
      iconColor: 'text-stone-400',
      pattern: false,
    },
    search: {
      bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconColor: 'text-blue-400',
      pattern: true,
    },
    filter: {
      bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconColor: 'text-purple-400',
      pattern: true,
    },
    success: {
      bg: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      iconColor: 'text-emerald-400',
      pattern: false,
    },
  };

  const classes = sizeClasses[size];
  const illustrationStyle = illustrationStyles[illustration];

  return (
    <div className={`flex flex-col items-center justify-center text-center ${classes.container} px-4`}>
      {/* Icon Container with Illustration */}
      <div className="relative mb-6">
        {/* Background Pattern (optional) */}
        {illustrationStyle.pattern && (
          <div className="absolute inset-0 -m-8">
            <svg
              className="w-full h-full opacity-20"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="empty-state-pattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="currentColor" className="text-stone-300" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#empty-state-pattern)" />
            </svg>
          </div>
        )}

        {/* Icon Circle */}
        <div
          className={`relative ${classes.iconContainer} ${illustrationStyle.bg} rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-stone-200/50`}
        >
          <Icon className={`${classes.icon} ${illustrationStyle.iconColor}`} strokeWidth={1.5} />
          
          {/* Decorative elements */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-sm" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full shadow-sm" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto space-y-3">
        <h3 className={`font-semibold text-stone-900 ${classes.title}`}>{title}</h3>
        <p className={`text-stone-600 leading-relaxed ${classes.description}`}>{description}</p>
      </div>

      {/* Actions */}
      {(action || secondaryAction) && (
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
          {action && (
            <Button onClick={action.onClick} className="min-w-[160px]">
              {action.label}
            </Button>
          )}
          {secondaryAction && (
            <Button variant="outline" onClick={secondaryAction.onClick} className="min-w-[160px]">
              {secondaryAction.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

// Preset empty states for common scenarios
interface PresetEmptyStateProps {
  onAction?: () => void;
  onSecondaryAction?: () => void;
}

export function NoClientsEmptyState({ onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )}
      title="No clients yet"
      description="Add your first client to start tracking sessions, progress, and build your training business."
      action={
        onAction
          ? {
              label: 'Add First Client',
              onClick: onAction,
            }
          : undefined
      }
      illustration="default"
      size="lg"
    />
  );
}

export function NoSessionsEmptyState({ onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
        </svg>
      )}
      title="No sessions scheduled"
      description="Book your first training session to start growing your business and helping clients achieve their goals."
      action={
        onAction
          ? {
              label: 'Schedule Session',
              onClick: onAction,
            }
          : undefined
      }
      illustration="default"
      size="lg"
    />
  );
}

export function NoPaymentsEmptyState({ onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      )}
      title="No payments recorded"
      description="Track your income by recording payments from clients. Get insights into revenue trends and outstanding balances."
      action={
        onAction
          ? {
              label: 'Record Payment',
              onClick: onAction,
            }
          : undefined
      }
      illustration="default"
      size="lg"
    />
  );
}

export function SearchEmptyState({ searchTerm, onClear }: { searchTerm: string; onClear: () => void }) {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      )}
      title="No results found"
      description={`We couldn't find any results for "${searchTerm}". Try adjusting your search or filters.`}
      action={{
        label: 'Clear Search',
        onClick: onClear,
      }}
      illustration="search"
      size="md"
    />
  );
}

export function FilterEmptyState({ onClear }: { onClear: () => void }) {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      )}
      title="No matches found"
      description="No items match your current filters. Try adjusting your filter criteria to see more results."
      action={{
        label: 'Clear Filters',
        onClick: onClear,
      }}
      illustration="filter"
      size="md"
    />
  );
}

export function AllCaughtUpEmptyState() {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )}
      title="All caught up!"
      description="You're doing great! There are no pending items at the moment. Keep up the excellent work."
      illustration="success"
      size="md"
    />
  );
}

export function NoUpcomingSessionsEmptyState({ onAction }: PresetEmptyStateProps) {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )}
      title="No upcoming sessions"
      description="Your schedule is clear. Time to reach out to clients and book more sessions!"
      action={
        onAction
          ? {
              label: 'Schedule Session',
              onClick: onAction,
            }
          : undefined
      }
      size="sm"
    />
  );
}

export function NoRecentActivityEmptyState() {
  return (
    <EmptyState
      icon={({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )}
      title="No recent activity"
      description="Activity from your clients will appear here once sessions are scheduled and completed."
      size="sm"
    />
  );
}

import { Card } from './ui/card';
import { TrendingUp, Target, Calendar, DollarSign } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

interface GoalTrackerProps {
  title: string;
  current: number;
  goal: number;
  period?: string; // e.g., "February 2026"
  projectedDaily?: number; // Average daily revenue for projection
  daysRemaining?: number; // Days left in period
  color?: 'emerald' | 'blue' | 'purple' | 'amber';
}

const colorClasses = {
  emerald: {
    progress: 'bg-emerald-500',
    progressBg: 'bg-emerald-100',
    text: 'text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    icon: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
  },
  blue: {
    progress: 'bg-blue-500',
    progressBg: 'bg-blue-100',
    text: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700 ring-blue-200',
    icon: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  purple: {
    progress: 'bg-purple-500',
    progressBg: 'bg-purple-100',
    text: 'text-purple-600',
    badge: 'bg-purple-50 text-purple-700 ring-purple-200',
    icon: 'bg-gradient-to-br from-purple-400 to-purple-600',
  },
  amber: {
    progress: 'bg-amber-500',
    progressBg: 'bg-amber-100',
    text: 'text-amber-600',
    badge: 'bg-amber-50 text-amber-700 ring-amber-200',
    icon: 'bg-gradient-to-br from-amber-400 to-amber-600',
  },
};

export function GoalTracker({
  title,
  current,
  goal,
  period = 'This Month',
  projectedDaily,
  daysRemaining,
  color = 'emerald',
}: GoalTrackerProps) {
  const percentage = Math.min((current / goal) * 100, 100);
  const remaining = Math.max(goal - current, 0);
  const isCompleted = current >= goal;
  const colors = colorClasses[color];

  // Calculate projection if daily revenue and days remaining are provided
  const projected = projectedDaily && daysRemaining 
    ? current + (projectedDaily * daysRemaining)
    : null;
  const willMeetGoal = projected ? projected >= goal : null;

  // Determine status
  let status: 'on-track' | 'at-risk' | 'completed' = 'on-track';
  if (isCompleted) {
    status = 'completed';
  } else if (willMeetGoal === false) {
    status = 'at-risk';
  }

  return (
    <Card className="group p-8 bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-stone-600" />
            <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
          </div>
          <p className="text-sm text-stone-500">{period}</p>
        </div>
        
        {/* Status Badge */}
        <div className={`px-3 py-1.5 rounded-lg text-xs font-semibold ring-1 ${
          status === 'completed' 
            ? 'bg-emerald-50 text-emerald-700 ring-emerald-200'
            : status === 'at-risk'
            ? 'bg-amber-50 text-amber-700 ring-amber-200'
            : colors.badge
        }`}>
          {status === 'completed' ? '✓ Completed' : 
           status === 'at-risk' ? '⚠ At Risk' : 
           '→ On Track'}
        </div>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Current */}
        <div>
          <p className="text-xs font-medium text-stone-600 uppercase tracking-wider mb-2">
            Current
          </p>
          <p className="text-2xl font-bold text-stone-900">
            {formatCurrency(current)}
          </p>
        </div>

        {/* Goal */}
        <div>
          <p className="text-xs font-medium text-stone-600 uppercase tracking-wider mb-2">
            Goal
          </p>
          <p className={`text-2xl font-bold ${colors.text}`}>
            {formatCurrency(goal)}
          </p>
        </div>

        {/* Remaining */}
        <div>
          <p className="text-xs font-medium text-stone-600 uppercase tracking-wider mb-2">
            {isCompleted ? 'Exceeded By' : 'Remaining'}
          </p>
          <p className={`text-2xl font-bold ${isCompleted ? 'text-emerald-600' : 'text-stone-900'}`}>
            {formatCurrency(Math.abs(remaining))}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-stone-700">Progress</span>
          <span className={`text-lg font-bold ${colors.text}`}>
            {percentage.toFixed(1)}%
          </span>
        </div>
        
        {/* Progress Bar Track */}
        <div className={`relative h-3 ${colors.progressBg} rounded-full overflow-hidden`}>
          {/* Progress Fill */}
          <div
            className={`absolute top-0 left-0 h-full ${colors.progress} rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${percentage}%` }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
          
          {/* Goal marker at 100% */}
          {!isCompleted && (
            <div className="absolute top-0 right-0 w-1 h-full bg-stone-400 rounded-full" />
          )}
        </div>

        {/* Progress milestones */}
        <div className="flex justify-between text-xs text-stone-500">
          <span>$0</span>
          <span className="text-stone-600 font-medium">{formatCurrency(goal / 2)}</span>
          <span>{formatCurrency(goal)}</span>
        </div>
      </div>

      {/* Projection & Insights */}
      {projected !== null && daysRemaining && (
        <div className="mt-6 pt-6 border-t border-stone-200">
          <div className="grid grid-cols-2 gap-4">
            {/* Daily Average */}
            <div className={`p-4 rounded-xl ${colors.progressBg} border ${
              status === 'at-risk' ? 'border-amber-300' : 'border-transparent'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="w-4 h-4 text-stone-600" />
                <p className="text-xs font-medium text-stone-600">Daily Average</p>
              </div>
              <p className="text-lg font-bold text-stone-900">
                {formatCurrency(projectedDaily)}
              </p>
            </div>

            {/* Projected Total */}
            <div className={`p-4 rounded-xl ${
              willMeetGoal 
                ? 'bg-emerald-50 border border-emerald-200' 
                : 'bg-amber-50 border border-amber-300'
            }`}>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-stone-600" />
                <p className="text-xs font-medium text-stone-600">Projected</p>
              </div>
              <p className={`text-lg font-bold ${
                willMeetGoal ? 'text-emerald-700' : 'text-amber-700'
              }`}>
                {formatCurrency(projected)}
              </p>
            </div>
          </div>

          {/* Days Remaining */}
          <div className="mt-4 flex items-center justify-between p-3 bg-stone-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-stone-500" />
              <span className="text-sm text-stone-600">
                {daysRemaining} days remaining
              </span>
            </div>
            {!isCompleted && (
              <span className="text-sm font-semibold text-stone-900">
                {formatCurrency(Math.round(remaining / daysRemaining))}/day needed
              </span>
            )}
          </div>
        </div>
      )}

      {/* Completion Message */}
      {isCompleted && (
        <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-emerald-900">Goal Achieved! 🎉</p>
              <p className="text-sm text-emerald-700">
                You've exceeded your target by {formatCurrency(Math.abs(remaining))}
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
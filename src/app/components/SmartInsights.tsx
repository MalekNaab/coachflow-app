import { Card } from './ui/card';
import { Button } from './ui/button';
import {
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Award,
  Users,
  Calendar,
  DollarSign,
  Target,
  Sparkles,
  ArrowRight,
  Clock,
  ThumbsUp,
  Activity,
  Zap,
} from 'lucide-react';
import { clients, sessions, payments } from '../data/mockData';

// Insight types with colors and icons
type InsightType = 'success' | 'warning' | 'info' | 'opportunity' | 'alert';

interface Insight {
  id: string;
  type: InsightType;
  title: string;
  description: string;
  metric?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon: React.ComponentType<{ className?: string }>;
}

const insightStyles: Record<InsightType, {
  bg: string;
  border: string;
  iconBg: string;
  iconColor: string;
  textColor: string;
}> = {
  success: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconBg: 'bg-emerald-500',
    iconColor: 'text-white',
    textColor: 'text-emerald-900',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    iconBg: 'bg-amber-500',
    iconColor: 'text-white',
    textColor: 'text-amber-900',
  },
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconBg: 'bg-blue-500',
    iconColor: 'text-white',
    textColor: 'text-blue-900',
  },
  opportunity: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    iconBg: 'bg-purple-500',
    iconColor: 'text-white',
    textColor: 'text-purple-900',
  },
  alert: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    iconBg: 'bg-red-500',
    iconColor: 'text-white',
    textColor: 'text-red-900',
  },
};

export function SmartInsights() {
  // Generate insights from data analysis
  const insights = generateInsights();

  // Get priority insights (limit to 6)
  const priorityInsights = insights.slice(0, 6);

  return (
    <Card className="p-8 bg-white border border-stone-200 rounded-2xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-stone-900">Smart Insights</h3>
            <p className="text-sm text-stone-600">AI-powered business intelligence</p>
          </div>
        </div>
        <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-lg ring-1 ring-emerald-200">
          {insights.length} insights
        </span>
      </div>

      <div className="space-y-4">
        {priorityInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>

      {insights.length > 6 && (
        <Button variant="outline" className="w-full mt-4">
          View All {insights.length} Insights <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      )}
    </Card>
  );
}

function InsightCard({ insight }: { insight: Insight }) {
  const styles = insightStyles[insight.type];
  const Icon = insight.icon;

  return (
    <div
      className={`p-4 rounded-xl border ${styles.bg} ${styles.border} hover:shadow-sm transition-all duration-200`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={`w-10 h-10 rounded-lg ${styles.iconBg} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-5 h-5 ${styles.iconColor}`} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className={`font-semibold ${styles.textColor} leading-tight`}>
              {insight.title}
            </h4>
            {insight.metric && (
              <span className={`text-sm font-bold ${styles.textColor} whitespace-nowrap`}>
                {insight.metric}
              </span>
            )}
          </div>
          <p className="text-sm text-stone-700 leading-relaxed mb-2">
            {insight.description}
          </p>
          {insight.action && (
            <Button
              variant="ghost"
              size="sm"
              onClick={insight.action.onClick}
              className="h-8 px-3 text-xs font-medium -ml-3"
            >
              {insight.action.label}
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

// Smart insight generation logic
function generateInsights(): Insight[] {
  const insights: Insight[] = [];

  // 1. Revenue Growth Analysis
  const revenueData = [6800, 7200, 7500, 7100, 7800, 8000, 8100];
  const currentRevenue = revenueData[revenueData.length - 1];
  const previousRevenue = revenueData[revenueData.length - 2];
  const revenueGrowth = ((currentRevenue - previousRevenue) / previousRevenue) * 100;

  if (revenueGrowth > 5) {
    insights.push({
      id: 'revenue-growth',
      type: 'success',
      title: 'Strong Revenue Growth',
      description: `Your revenue increased ${revenueGrowth.toFixed(1)}% this month, reaching $${currentRevenue.toLocaleString()}. You're on track to exceed your quarterly target.`,
      metric: `+${revenueGrowth.toFixed(1)}%`,
      icon: TrendingUp,
      action: {
        label: 'View revenue details',
        onClick: () => console.log('Navigate to analytics'),
      },
    });
  } else if (revenueGrowth < -3) {
    insights.push({
      id: 'revenue-decline',
      type: 'alert',
      title: 'Revenue Declined',
      description: `Revenue decreased ${Math.abs(revenueGrowth).toFixed(1)}% this month. Consider booking more high-value sessions or reaching out to inactive clients.`,
      metric: `${revenueGrowth.toFixed(1)}%`,
      icon: TrendingDown,
    });
  }

  // 2. At-Risk Clients Analysis
  const today = new Date();
  const atRiskClients = clients.filter((client) => {
    const lastSession = new Date(
      Math.max(...client.sessions.map((s) => new Date(s.date).getTime()))
    );
    const daysSinceLastSession = Math.floor(
      (today.getTime() - lastSession.getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysSinceLastSession >= 14 && client.status === 'Active';
  });

  if (atRiskClients.length > 0) {
    insights.push({
      id: 'at-risk-clients',
      type: 'warning',
      title: 'Clients at Risk of Churning',
      description: `${atRiskClients.length} active client${atRiskClients.length > 1 ? 's have' : ' has'} not booked a session in over 14 days. ${atRiskClients.slice(0, 2).map(c => c.name).join(', ')}${atRiskClients.length > 2 ? ` and ${atRiskClients.length - 2} more` : ''}.`,
      metric: `${atRiskClients.length} clients`,
      icon: AlertTriangle,
      action: {
        label: 'Send re-engagement email',
        onClick: () => console.log('Open email template'),
      },
    });
  }

  // 3. Package Performance Analysis
  const packageRevenue: Record<string, { revenue: number; count: number }> = {};
  payments.forEach((payment) => {
    const pkg = payment.description || 'Single Session';
    if (!packageRevenue[pkg]) {
      packageRevenue[pkg] = { revenue: 0, count: 0 };
    }
    packageRevenue[pkg].revenue += payment.amount;
    packageRevenue[pkg].count += 1;
  });

  const topPackage = Object.entries(packageRevenue).sort(
    (a, b) => b[1].revenue - a[1].revenue
  )[0];

  if (topPackage) {
    const [packageName, data] = topPackage;
    const avgValue = Math.round(data.revenue / data.count);
    insights.push({
      id: 'top-package',
      type: 'success',
      title: 'Top Performing Package',
      description: `"${packageName}" is your highest-grossing package with $${data.revenue.toLocaleString()} revenue from ${data.count} sales. Consider promoting this package to new clients.`,
      metric: `$${data.revenue.toLocaleString()}`,
      icon: Award,
      action: {
        label: 'Create promotion',
        onClick: () => console.log('Create package promotion'),
      },
    });
  }

  // 4. Client Goal Distribution Insight
  const goalCounts: Record<string, number> = {};
  clients.forEach((client) => {
    goalCounts[client.goal] = (goalCounts[client.goal] || 0) + 1;
  });
  const topGoal = Object.entries(goalCounts).sort((a, b) => b[1] - a[1])[0];

  if (topGoal) {
    const [goal, count] = topGoal;
    const percentage = Math.round((count / clients.length) * 100);
    insights.push({
      id: 'client-goals',
      type: 'info',
      title: 'Client Focus Area',
      description: `${percentage}% of your clients (${count}/${clients.length}) are focused on "${goal}". Consider creating specialized programs or content for this niche.`,
      metric: `${percentage}%`,
      icon: Target,
    });
  }

  // 5. Session Booking Patterns
  const upcomingSessions = sessions.filter((s) => new Date(s.date) > today);
  const thisWeekSessions = upcomingSessions.filter((s) => {
    const sessionDate = new Date(s.date);
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    return sessionDate <= nextWeek;
  });

  if (thisWeekSessions.length >= 15) {
    insights.push({
      id: 'busy-week',
      type: 'info',
      title: 'Busy Week Ahead',
      description: `You have ${thisWeekSessions.length} sessions scheduled for the next 7 days. Make sure to prepare and block recovery time between sessions.`,
      metric: `${thisWeekSessions.length} sessions`,
      icon: Calendar,
    });
  } else if (thisWeekSessions.length <= 5) {
    insights.push({
      id: 'low-bookings',
      type: 'opportunity',
      title: 'Light Schedule Opportunity',
      description: `Only ${thisWeekSessions.length} sessions booked this week. This is a great time to reach out to clients, create content, or offer limited-time slots.`,
      metric: `${thisWeekSessions.length} sessions`,
      icon: Clock,
      action: {
        label: 'Send booking reminder',
        onClick: () => console.log('Send booking reminder'),
      },
    });
  }

  // 6. High-Value Clients
  const highValueClients = clients
    .filter((c) => c.totalSpend > 1000)
    .sort((a, b) => b.totalSpend - a.totalSpend);

  if (highValueClients.length > 0) {
    const topClient = highValueClients[0];
    insights.push({
      id: 'high-value-clients',
      type: 'success',
      title: 'Top Client Performance',
      description: `${topClient.name} has invested $${topClient.totalSpend.toLocaleString()} in training. Consider offering exclusive perks or a loyalty discount to maintain this relationship.`,
      metric: `$${topClient.totalSpend.toLocaleString()}`,
      icon: Users,
    });
  }

  // 7. Payment Trends
  const recentPayments = payments.slice(0, 10);
  const completedPayments = recentPayments.filter((p) => p.status === 'Completed');
  const paymentCompletionRate = (completedPayments.length / recentPayments.length) * 100;

  if (paymentCompletionRate === 100) {
    insights.push({
      id: 'perfect-payments',
      type: 'success',
      title: 'Perfect Payment Record',
      description: 'All recent payments have been completed on time. Your clients appreciate your professionalism and value your services.',
      metric: '100%',
      icon: ThumbsUp,
    });
  } else if (paymentCompletionRate < 80) {
    const pendingCount = recentPayments.filter((p) => p.status === 'Pending').length;
    insights.push({
      id: 'payment-issues',
      type: 'warning',
      title: 'Payment Follow-up Needed',
      description: `${pendingCount} payment${pendingCount > 1 ? 's are' : ' is'} pending. Consider setting up automated payment reminders or requiring payment at booking.`,
      metric: `${pendingCount} pending`,
      icon: DollarSign,
      action: {
        label: 'Send payment reminder',
        onClick: () => console.log('Send payment reminder'),
      },
    });
  }

  // 8. Average Session Value Insight
  const totalRevenue = payments.reduce((sum, p) => sum + p.amount, 0);
  const totalSessions = sessions.length;
  const avgSessionValue = Math.round(totalRevenue / totalSessions);

  if (avgSessionValue >= 90) {
    insights.push({
      id: 'high-avg-value',
      type: 'success',
      title: 'Premium Pricing Strategy',
      description: `Your average session value is $${avgSessionValue}, which is above market average. This positions you as a premium trainer in your market.`,
      metric: `$${avgSessionValue}/session`,
      icon: Zap,
    });
  }

  // 9. Retention Rate Insight
  const activeClients = clients.filter((c) => c.status === 'Active').length;
  const retentionRate = (activeClients / clients.length) * 100;

  if (retentionRate >= 85) {
    insights.push({
      id: 'high-retention',
      type: 'success',
      title: 'Excellent Client Retention',
      description: `${retentionRate.toFixed(0)}% of your clients are active, which is excellent. Your training approach and client relationships are clearly working well.`,
      metric: `${retentionRate.toFixed(0)}%`,
      icon: Activity,
    });
  }

  // 10. New Client Opportunity
  const newClientsThisMonth = clients.filter((c) => {
    const joinDate = new Date(c.joinDate);
    const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    return joinDate >= monthAgo;
  }).length;

  if (newClientsThisMonth === 0) {
    insights.push({
      id: 'no-new-clients',
      type: 'opportunity',
      title: 'Client Acquisition Opportunity',
      description: 'No new clients joined this month. Consider running a referral campaign, offering a trial package, or increasing your social media presence.',
      icon: Users,
      action: {
        label: 'Create referral program',
        onClick: () => console.log('Create referral program'),
      },
    });
  } else if (newClientsThisMonth >= 3) {
    insights.push({
      id: 'strong-growth',
      type: 'success',
      title: 'Strong Client Acquisition',
      description: `${newClientsThisMonth} new clients joined this month. Your marketing efforts are paying off. Keep up the momentum!`,
      metric: `+${newClientsThisMonth} clients`,
      icon: TrendingUp,
    });
  }

  return insights;
}

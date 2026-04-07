import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';
import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  actions?: ReactNode;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
}

export function PageHeader({
  title,
  subtitle,
  icon: Icon,
  actions,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="space-y-5">
      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center gap-2 text-xs text-neutral-600">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="hover:text-emerald-600 transition-colors font-medium"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-neutral-900 font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4 flex-1">
          {Icon && (
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg ring-4 ring-emerald-100">
              <Icon className="w-7 h-7 text-white" />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight">{title}</h1>
            {subtitle && (
              <p className="text-sm text-neutral-600 mt-1.5">{subtitle}</p>
            )}
          </div>
        </div>
        {actions && (
          <div className="flex items-center gap-3 flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
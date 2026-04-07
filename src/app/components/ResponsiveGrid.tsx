import { ReactNode } from 'react';

interface ResponsiveGridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Responsive grid component for card-based layouts
 * Automatically adapts columns based on screen size
 * Desktop-first with mobile adaptive behavior
 */
export function ResponsiveGrid({
  children,
  cols = 3,
  gap = 'md',
  className = '',
}: ResponsiveGridProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
  };

  return (
    <div className={`grid ${colClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

/**
 * Responsive KPI Grid - Optimized for metric cards
 * 1 col mobile, 2 cols tablet, 4 cols desktop
 */
export function KPIGrid({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Responsive Two Column Layout
 * Stacks on mobile, side-by-side on desktop
 */
export function TwoColumnGrid({
  children,
  gap = 'md',
  className = '',
}: {
  children: ReactNode;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

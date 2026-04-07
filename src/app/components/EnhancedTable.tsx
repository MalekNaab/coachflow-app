import { ReactNode } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from './ui/button';

// ============================================================================
// ENHANCED TABLE COMPONENT WITH PRODUCTION UX
// ============================================================================

interface TableProps {
  children: ReactNode;
  className?: string;
}

export function Table({ children, className = '' }: TableProps) {
  return (
    <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm bg-white">
      <div className="overflow-x-auto">
        <table className={`w-full ${className}`}>{children}</table>
      </div>
    </div>
  );
}

interface TableHeaderProps {
  children: ReactNode;
  sticky?: boolean;
}

export function TableHeader({ children, sticky = true }: TableHeaderProps) {
  return (
    <thead
      className={`bg-stone-50 border-b border-stone-200 ${
        sticky ? 'sticky top-0 z-10' : ''
      }`}
    >
      {children}
    </thead>
  );
}

interface TableHeadProps {
  children: ReactNode;
  className?: string;
  sortable?: boolean;
  sorted?: 'asc' | 'desc' | null;
  onSort?: () => void;
}

export function TableHead({
  children,
  className = '',
  sortable = false,
  sorted = null,
  onSort,
}: TableHeadProps) {
  return (
    <th
      className={`text-left p-4 text-sm font-semibold text-stone-700 ${
        sortable ? 'cursor-pointer hover:text-stone-900 select-none' : ''
      } ${className}`}
      onClick={sortable ? onSort : undefined}
    >
      <div className="flex items-center gap-2">
        {children}
        {sortable && (
          <div className="flex flex-col">
            <svg
              className={`w-3 h-3 -mb-1 ${
                sorted === 'asc' ? 'text-emerald-600' : 'text-stone-400'
              }`}
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M6 3l4 4H2z" />
            </svg>
            <svg
              className={`w-3 h-3 ${
                sorted === 'desc' ? 'text-emerald-600' : 'text-stone-400'
              }`}
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M6 9l4-4H2z" />
            </svg>
          </div>
        )}
      </div>
    </th>
  );
}

interface TableBodyProps {
  children: ReactNode;
  alternatingRows?: boolean;
}

export function TableBody({ children, alternatingRows = true }: TableBodyProps) {
  return <tbody className={alternatingRows ? 'divide-y divide-stone-100' : ''}>{children}</tbody>;
}

interface TableRowProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  hoverable?: boolean;
  index?: number;
}

export function TableRow({
  children,
  onClick,
  className = '',
  hoverable = true,
  index,
}: TableRowProps) {
  const isEven = typeof index === 'number' ? index % 2 === 0 : false;

  return (
    <tr
      className={`
        border-b border-stone-100 last:border-0
        ${isEven ? 'bg-white' : 'bg-stone-50/30'}
        ${
          hoverable
            ? 'hover:bg-emerald-50/50 hover:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.1)] transition-all duration-150'
            : ''
        }
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}

interface TableCellProps {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export function TableCell({ children, className = '', align = 'left' }: TableCellProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align];

  return (
    <td className={`p-4 text-sm text-stone-700 ${alignClass} ${className}`}>{children}</td>
  );
}

// ============================================================================
// STATUS BADGE COMPONENT
// ============================================================================

interface StatusBadgeProps {
  status: string;
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 'sm' | 'md';
}

export function StatusBadge({ status, variant = 'neutral', size = 'sm' }: StatusBadgeProps) {
  const variants = {
    success: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-700',
      dot: 'bg-emerald-500',
      border: 'border-emerald-200',
    },
    warning: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      dot: 'bg-amber-500',
      border: 'border-amber-200',
    },
    danger: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      dot: 'bg-red-500',
      border: 'border-red-200',
    },
    info: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      dot: 'bg-blue-500',
      border: 'border-blue-200',
    },
    neutral: {
      bg: 'bg-stone-100',
      text: 'text-stone-700',
      dot: 'bg-stone-500',
      border: 'border-stone-200',
    },
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  const style = variants[variant];

  return (
    <span
      className={`
        inline-flex items-center gap-1.5 
        ${sizes[size]} 
        ${style.bg} ${style.text} ${style.border}
        border rounded-md font-medium
      `}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}

// Auto-detect variant based on status text
export function SmartStatusBadge({ status }: { status: string }) {
  const statusLower = status.toLowerCase();

  let variant: StatusBadgeProps['variant'] = 'neutral';

  if (
    statusLower === 'active' ||
    statusLower === 'completed' ||
    statusLower === 'paid' ||
    statusLower === 'success'
  ) {
    variant = 'success';
  } else if (
    statusLower === 'at risk' ||
    statusLower === 'pending' ||
    statusLower === 'scheduled' ||
    statusLower === 'warning'
  ) {
    variant = 'warning';
  } else if (
    statusLower === 'inactive' ||
    statusLower === 'cancelled' ||
    statusLower === 'failed' ||
    statusLower === 'error'
  ) {
    variant = 'danger';
  } else if (statusLower === 'in progress' || statusLower === 'processing') {
    variant = 'info';
  }

  return <StatusBadge status={status} variant={variant} />;
}

// ============================================================================
// PAGINATION COMPONENT
// ============================================================================

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
  showItemCount?: boolean;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
  showItemCount = true,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const canGoPrevious = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  // Generate page numbers to show
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7;

    if (totalPages <= maxVisible) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near start
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near end
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Middle
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border-t border-stone-200 bg-stone-50/50">
      {/* Item count */}
      {showItemCount && (
        <div className="text-sm text-stone-600">
          Showing <span className="font-medium text-stone-900">{startItem}</span> to{' '}
          <span className="font-medium text-stone-900">{endItem}</span> of{' '}
          <span className="font-medium text-stone-900">{totalItems}</span> results
        </div>
      )}

      {/* Page controls */}
      <div className="flex items-center gap-2">
        {/* First page */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(1)}
          disabled={!canGoPrevious}
          className="w-9 h-9 p-0"
          title="First page"
        >
          <ChevronsLeft className="w-4 h-4" />
        </Button>

        {/* Previous page */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious}
          className="w-9 h-9 p-0"
          title="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className="px-2 text-stone-400">
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <Button
                key={pageNum}
                variant={isActive ? 'default' : 'outline'}
                size="sm"
                onClick={() => onPageChange(pageNum)}
                className={`w-9 h-9 p-0 ${
                  isActive
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'hover:bg-stone-100'
                }`}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        {/* Next page */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          className="w-9 h-9 p-0"
          title="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* Last page */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(totalPages)}
          disabled={!canGoNext}
          className="w-9 h-9 p-0"
          title="Last page"
        >
          <ChevronsRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

// ============================================================================
// AVATAR COMPONENT FOR TABLES
// ============================================================================

interface AvatarProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Avatar({ name, src, size = 'md', className = '' }: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const colors = [
    'bg-emerald-100 text-emerald-700',
    'bg-blue-100 text-blue-700',
    'bg-purple-100 text-purple-700',
    'bg-amber-100 text-amber-700',
    'bg-rose-100 text-rose-700',
  ];

  // Simple hash function to pick consistent color for name
  const colorIndex =
    name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} rounded-full flex items-center justify-center font-medium ${colors[colorIndex]} ${className}`}
    >
      {initials}
    </div>
  );
}

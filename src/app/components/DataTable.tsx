import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Card } from './ui/card';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  sortable?: boolean;
  width?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  emptyMessage?: string;
  loading?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}

export function DataTable<T extends Record<string, any>>({
  data,
  columns,
  onRowClick,
  emptyMessage = 'No data available',
  loading = false,
  striped = false,
  hoverable = true,
  compact = false,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (!sortKey) return 0;
    
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortOrder === 'asc' 
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal);
    }
    
    if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
    }
    
    return 0;
  });

  if (loading) {
    return (
      <Card className="overflow-hidden border border-stone-200 rounded-2xl shadow-sm">
        <div className="p-8">
          <div className="animate-pulse space-y-3">
            <div className="h-10 bg-stone-100 rounded-xl"></div>
            <div className="h-14 bg-stone-50 rounded-xl"></div>
            <div className="h-14 bg-stone-50 rounded-xl"></div>
            <div className="h-14 bg-stone-50 rounded-xl"></div>
            <div className="h-14 bg-stone-50 rounded-xl"></div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-stone-50/80 hover:bg-stone-50/80 border-b border-stone-200">
              {columns.map((column) => (
                <TableHead 
                  key={column.key} 
                  className="font-semibold text-stone-900 text-xs uppercase tracking-wider py-4 first:pl-8 last:pr-8"
                  style={{ width: column.width }}
                >
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(column.key)}
                      className="flex items-center gap-1.5 hover:text-emerald-600 transition-colors group"
                    >
                      {column.header}
                      {sortKey === column.key ? (
                        sortOrder === 'asc' ? (
                          <ChevronUp className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2} />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2} />
                        )
                      ) : (
                        <ChevronsUpDown className="w-3.5 h-3.5 text-stone-400 group-hover:text-emerald-600" strokeWidth={2} />
                      )}
                    </button>
                  ) : (
                    column.header
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.length === 0 ? (
              <TableRow className="hover:bg-transparent">
                <TableCell 
                  colSpan={columns.length} 
                  className="text-center py-20 text-stone-500"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center mb-2">
                      <svg className="w-7 h-7 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    </div>
                    <p className="font-medium text-stone-900 text-sm">{emptyMessage}</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              sortedData.map((item, index) => (
                <TableRow
                  key={index}
                  onClick={() => onRowClick?.(item)}
                  className={`
                    border-b border-stone-100 last:border-0
                    ${onRowClick ? 'cursor-pointer' : ''}
                    ${hoverable ? 'hover:bg-stone-50/50' : ''}
                    ${striped && index % 2 === 1 ? 'bg-stone-25' : ''}
                    ${compact ? 'h-12' : 'h-16'}
                    transition-colors duration-150
                  `}
                >
                  {columns.map((column) => (
                    <TableCell 
                      key={column.key} 
                      className={`text-sm text-stone-700 first:pl-8 last:pr-8 ${compact ? 'py-2' : 'py-4'}`}
                    >
                      {column.render ? column.render(item) : item[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
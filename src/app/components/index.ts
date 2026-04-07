/**
 * Component System - Centralized Exports
 * 
 * Import reusable components from this file for consistency:
 * import { KPICard, DataTable, Modal, PageContainer } from './components';
 */

// Core Components
export { KPICard } from './KPICard';
export { DataTable } from './DataTable';
export { Sidebar } from './Sidebar';
export { Topbar } from './Topbar';

// Layout Components
export { PageContainer } from './PageContainer';
export { ResponsiveGrid, KPIGrid, TwoColumnGrid } from './ResponsiveGrid';

// Modal Components
export { Modal, ConfirmModal, FormModal } from './Modal';

// Chart Components
export { ChartWrapper, ChartStats } from './ChartWrapper';

// Utility Components
export { EmptyState } from './EmptyState';
export { PageHeader } from './PageHeader';

// UI Components (re-exported for convenience)
export { Button } from './ui/button';
export { Card } from './ui/card';
export { Input } from './ui/input';
export { Label } from './ui/label';
export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
export { Switch } from './ui/switch';
export { Badge } from './ui/badge';
export { Separator } from './ui/separator';
export { Textarea } from './ui/textarea';
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
export {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
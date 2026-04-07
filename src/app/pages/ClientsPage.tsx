import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Plus, Search, UserPlus } from 'lucide-react';
import { clients } from '../data/mockData';
import { NoClientsEmptyState, SearchEmptyState, FilterEmptyState } from '../components/EmptyState';
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  SmartStatusBadge,
  Pagination,
  Avatar,
} from '../components/EnhancedTable';

type SortField = 'name' | 'lastSession' | 'totalSpend';
type SortDirection = 'asc' | 'desc';

export function ClientsPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [goalFilter, setGoalFilter] = useState('all');
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const itemsPerPage = 10;

  // Check if there are any clients at all
  const hasClients = clients.length > 0;
  const hasActiveFilters = searchQuery !== '' || statusFilter !== 'all' || goalFilter !== 'all';

  // Filter clients
  const filteredClients = clients.filter((client) => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    const matchesGoal = goalFilter === 'all' || client.goal === goalFilter;
    return matchesSearch && matchesStatus && matchesGoal;
  });

  // Sort clients
  const sortedClients = [...filteredClients].sort((a, b) => {
    let aValue: string | number = a[sortField];
    let bValue: string | number = b[sortField];

    if (sortField === 'totalSpend') {
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }

    if (sortField === 'lastSession') {
      aValue = new Date(a.lastSession).getTime();
      bValue = new Date(b.lastSession).getTime();
      return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
    }

    // String comparison for name
    return sortDirection === 'asc'
      ? aValue.toString().localeCompare(bValue.toString())
      : bValue.toString().localeCompare(aValue.toString());
  });

  // Pagination
  const totalPages = Math.ceil(sortedClients.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedClients = sortedClients.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">Clients</h1>
          <p className="text-neutral-600 mt-1">Manage your client relationships</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal">Goal</Label>
                <Select>
                  <SelectTrigger id="goal">
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fat-loss">Fat Loss</SelectItem>
                    <SelectItem value="strength">Strength</SelectItem>
                    <SelectItem value="rehab">Rehab</SelectItem>
                    <SelectItem value="general">General Fitness</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add Client</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="p-4 border border-neutral-200 shadow-sm">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-64">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search clients by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="At Risk">At Risk</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
            </SelectContent>
          </Select>
          <Select value={goalFilter} onValueChange={setGoalFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Goals</SelectItem>
              <SelectItem value="Fat Loss">Fat Loss</SelectItem>
              <SelectItem value="Strength">Strength</SelectItem>
              <SelectItem value="Rehab">Rehab</SelectItem>
              <SelectItem value="General Fitness">General Fitness</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortField} onValueChange={(value) => setSortField(value as SortField)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Sort by Name</SelectItem>
              <SelectItem value="lastSession">Sort by Last Session</SelectItem>
              <SelectItem value="totalSpend">Sort by Total Spend</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Clients Table */}
      {paginatedClients.length > 0 ? (
        <>
          <Table>
            <TableHeader sticky={true}>
              <tr>
                <TableHead
                  sortable
                  sorted={sortField === 'name' ? sortDirection : null}
                  onSort={() => handleSort('name')}
                >
                  Client
                </TableHead>
                <TableHead>Goal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead
                  sortable
                  sorted={sortField === 'lastSession' ? sortDirection : null}
                  onSort={() => handleSort('lastSession')}
                >
                  Last Session
                </TableHead>
                <TableHead>Next Session</TableHead>
                <TableHead
                  sortable
                  sorted={sortField === 'totalSpend' ? sortDirection : null}
                  onSort={() => handleSort('totalSpend')}
                  align="right"
                >
                  Total Spend
                </TableHead>
              </tr>
            </TableHeader>
            <TableBody alternatingRows>
              {paginatedClients.map((client, index) => (
                <TableRow
                  key={client.id}
                  onClick={() => navigate(`/app/clients/${client.id}`)}
                  hoverable
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar name={client.name} size="md" />
                      <div>
                        <p className="font-medium text-stone-900">{client.name}</p>
                        <p className="text-sm text-stone-500">{client.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <SmartStatusBadge status={client.goal} />
                  </TableCell>
                  <TableCell>
                    <SmartStatusBadge status={client.status} />
                  </TableCell>
                  <TableCell>{formatDate(client.lastSession)}</TableCell>
                  <TableCell>
                    {client.nextSession ? (
                      formatDate(client.nextSession)
                    ) : (
                      <span className="text-stone-400 italic">Not scheduled</span>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <span className="font-semibold text-stone-900">
                      ${client.totalSpend.toLocaleString()}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={sortedClients.length}
              showItemCount
            />
          )}
        </>
      ) : (
        // Empty State
        <Card className="p-12 border border-neutral-200 shadow-sm">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
              <UserPlus className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No clients found</h3>
            <p className="text-neutral-600 mb-6 max-w-md">
              {searchQuery || statusFilter !== 'all' || goalFilter !== 'all'
                ? "No clients match your current filters. Try adjusting your search criteria."
                : "Get started by adding your first client to begin tracking their progress."}
            </p>
            {(searchQuery || statusFilter !== 'all' || goalFilter !== 'all') ? (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setStatusFilter('all');
                  setGoalFilter('all');
                }}
              >
                Clear Filters
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Your First Client
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Client</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name-empty">Full Name</Label>
                      <Input id="name-empty" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-empty">Email</Label>
                      <Input id="email-empty" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone-empty">Phone</Label>
                      <Input id="phone-empty" type="tel" placeholder="(555) 123-4567" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goal-empty">Goal</Label>
                      <Select>
                        <SelectTrigger id="goal-empty">
                          <SelectValue placeholder="Select goal" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fat-loss">Fat Loss</SelectItem>
                          <SelectItem value="strength">Strength</SelectItem>
                          <SelectItem value="rehab">Rehab</SelectItem>
                          <SelectItem value="general">General Fitness</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Add Client</Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
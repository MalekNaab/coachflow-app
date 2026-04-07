/**
 * TrainerPro Component System
 * 
 * This file serves as a comprehensive guide to all reusable components in the application.
 * Each component is designed to maintain consistency across the TrainerPro dashboard.
 */

// ============================================================================
// KPI CARD COMPONENT
// ============================================================================
/**
 * KPICard - Display key performance indicators with icons and trend data
 * 
 * Props:
 * - title: string - Card title
 * - value: string | number - Main metric value
 * - change?: string - Change indicator (e.g., "+12.5%")
 * - trend?: 'up' | 'down' | 'neutral' - Trend direction
 * - icon: LucideIcon - Icon to display
 * - trendData?: number[] - Array of numbers for mini chart
 * - subtitle?: string - Additional context text
 * - color?: 'emerald' | 'blue' | 'purple' | 'amber' | 'red' | 'neutral'
 * - loading?: boolean - Show loading state
 * 
 * Usage Example:
 * ```tsx
 * <KPICard
 *   title="Total Revenue"
 *   value="$36,800"
 *   change="+12.5%"
 *   trend="up"
 *   icon={DollarSign}
 *   trendData={[100, 120, 115, 130, 125, 140]}
 *   color="emerald"
 * />
 * ```
 */

// ============================================================================
// DATA TABLE COMPONENT
// ============================================================================
/**
 * DataTable - Flexible table component with sorting and customization
 * 
 * Props:
 * - data: T[] - Array of data objects
 * - columns: Column<T>[] - Column definitions
 *   - key: string - Object key to display
 *   - header: string - Column header text
 *   - render?: (item: T) => ReactNode - Custom render function
 *   - sortable?: boolean - Enable sorting for this column
 *   - width?: string - Column width (CSS value)
 * - onRowClick?: (item: T) => void - Row click handler
 * - emptyMessage?: string - Message when no data
 * - loading?: boolean - Show loading skeleton
 * - striped?: boolean - Alternate row colors
 * - hoverable?: boolean - Highlight on hover
 * - compact?: boolean - Reduce row height
 * 
 * Usage Example:
 * ```tsx
 * <DataTable
 *   data={clients}
 *   columns={[
 *     { key: 'name', header: 'Name', sortable: true },
 *     { key: 'email', header: 'Email' },
 *     { 
 *       key: 'status', 
 *       header: 'Status',
 *       render: (client) => <Badge>{client.status}</Badge>
 *     },
 *   ]}
 *   onRowClick={(client) => navigate(`/clients/${client.id}`)}
 *   hoverable
 * />
 * ```
 */

// ============================================================================
// MODAL COMPONENTS
// ============================================================================
/**
 * Modal - Base modal component for general use
 * 
 * Props:
 * - open: boolean - Control visibility
 * - onOpenChange: (open: boolean) => void - State handler
 * - title: string - Modal title
 * - description?: string - Modal description
 * - children: ReactNode - Modal content
 * - footer?: ReactNode - Custom footer
 * - size?: 'sm' | 'md' | 'lg' | 'xl' | 'full' - Modal size
 * - icon?: LucideIcon - Header icon
 * 
 * Usage Example:
 * ```tsx
 * <Modal
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Client Details"
 *   icon={User}
 *   size="lg"
 * >
 *   <div>Modal content here</div>
 * </Modal>
 * ```
 */

/**
 * ConfirmModal - Modal for confirmation dialogs
 * 
 * Props:
 * - open, onOpenChange, title, description
 * - confirmLabel?: string - Confirm button text (default: "Confirm")
 * - cancelLabel?: string - Cancel button text (default: "Cancel")
 * - onConfirm: () => void - Confirm action handler
 * - onCancel?: () => void - Cancel action handler
 * - variant?: 'default' | 'destructive' - Button variant
 * - icon?: LucideIcon - Header icon
 * - loading?: boolean - Show loading state
 * 
 * Usage Example:
 * ```tsx
 * <ConfirmModal
 *   open={showDelete}
 *   onOpenChange={setShowDelete}
 *   title="Delete Client"
 *   description="Are you sure you want to delete this client? This action cannot be undone."
 *   confirmLabel="Delete"
 *   variant="destructive"
 *   icon={Trash2}
 *   onConfirm={handleDelete}
 * />
 * ```
 */

/**
 * FormModal - Modal with form submission handling
 * 
 * Props:
 * - open, onOpenChange, title, description
 * - children: ReactNode - Form fields
 * - submitLabel?: string - Submit button text (default: "Save")
 * - cancelLabel?: string - Cancel button text (default: "Cancel")
 * - onSubmit: () => void - Form submit handler
 * - onCancel?: () => void - Cancel handler
 * - icon?: LucideIcon - Header icon
 * - loading?: boolean - Show loading state
 * - size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
 * 
 * Usage Example:
 * ```tsx
 * <FormModal
 *   open={showAddClient}
 *   onOpenChange={setShowAddClient}
 *   title="Add New Client"
 *   icon={UserPlus}
 *   onSubmit={handleSubmit}
 *   loading={isSubmitting}
 * >
 *   <div className="space-y-4">
 *     <Input label="Name" />
 *     <Input label="Email" />
 *   </div>
 * </FormModal>
 * ```
 */

// ============================================================================
// CHART WRAPPER COMPONENT
// ============================================================================
/**
 * ChartWrapper - Consistent wrapper for all charts
 * 
 * Props:
 * - title: string - Chart title
 * - subtitle?: string - Chart subtitle
 * - icon?: LucideIcon - Header icon
 * - children: ReactNode - Chart component (Recharts, etc.)
 * - action?: ReactNode - Header action buttons
 * - footer?: ReactNode - Footer content (stats, legends)
 * - loading?: boolean - Show loading skeleton
 * - emptyMessage?: string - Message when no data
 * - isEmpty?: boolean - Show empty state
 * 
 * Usage Example:
 * ```tsx
 * <ChartWrapper
 *   title="Revenue Trend"
 *   subtitle="Last 6 months"
 *   icon={TrendingUp}
 *   action={
 *     <Button variant="outline" size="sm">
 *       Export
 *     </Button>
 *   }
 *   footer={
 *     <ChartStats
 *       stats={[
 *         { label: 'Average', value: '$6,133', color: 'emerald' },
 *         { label: 'Total', value: '$36,800', color: 'blue' },
 *       ]}
 *     />
 *   }
 * >
 *   <ResponsiveContainer width="100%" height={300}>
 *     <LineChart data={data}>
 *       {/* Chart configuration */}
 *     </LineChart>
 *   </ResponsiveContainer>
 * </ChartWrapper>
 * ```
 */

/**
 * ChartStats - Footer stats for charts
 * 
 * Props:
 * - stats: Array<{ label: string, value: string | number, color?: string }>
 */

// ============================================================================
// EMPTY STATE COMPONENT
// ============================================================================
/**
 * EmptyState - Display when no data is available
 * 
 * Props:
 * - icon: LucideIcon - Icon to display
 * - title: string - Empty state title
 * - description: string - Description text
 * - action?: { label: string, onClick: () => void, icon?: LucideIcon }
 * - secondaryAction?: { label: string, onClick: () => void }
 * - variant?: 'default' | 'card' - Display variant
 * 
 * Usage Example:
 * ```tsx
 * <EmptyState
 *   icon={Users}
 *   title="No clients yet"
 *   description="Get started by adding your first client to the system."
 *   action={{
 *     label: "Add Client",
 *     onClick: () => setShowAddModal(true),
 *     icon: Plus,
 *   }}
 *   variant="card"
 * />
 * ```
 */

// ============================================================================
// PAGE HEADER COMPONENT
// ============================================================================
/**
 * PageHeader - Consistent page headers with actions
 * 
 * Props:
 * - title: string - Page title
 * - subtitle?: string - Page subtitle
 * - icon?: LucideIcon - Header icon
 * - actions?: ReactNode - Action buttons
 * - breadcrumbs?: Array<{ label: string, href?: string }>
 * 
 * Usage Example:
 * ```tsx
 * <PageHeader
 *   title="Clients"
 *   subtitle="Manage your client roster"
 *   icon={Users}
 *   breadcrumbs={[
 *     { label: 'Dashboard', href: '/' },
 *     { label: 'Clients' },
 *   ]}
 *   actions={
 *     <>
 *       <Button variant="outline">
 *         <Download className="w-4 h-4 mr-2" />
 *         Export
 *       </Button>
 *       <Button className="bg-emerald-600 hover:bg-emerald-700">
 *         <Plus className="w-4 h-4 mr-2" />
 *         Add Client
 *       </Button>
 *     </>
 *   }
 * />
 * ```
 */

// ============================================================================
// SIDEBAR COMPONENT
// ============================================================================
/**
 * Sidebar - Main navigation sidebar
 * 
 * Features:
 * - Collapsible
 * - Active state highlighting
 * - Icon-only mode when collapsed
 * - Emerald green accent for active items
 * 
 * The sidebar is automatically included in the app layout.
 */

// ============================================================================
// BUTTON SYSTEM
// ============================================================================
/**
 * Button - Base button component with variants
 * 
 * Variants:
 * - default: Primary action (use with emerald classes)
 * - secondary: Secondary actions
 * - outline: Neutral actions
 * - ghost: Tertiary/subtle actions
 * - destructive: Dangerous actions
 * - link: Text link style
 * 
 * Sizes:
 * - sm: Small buttons
 * - default: Standard size
 * - lg: Large buttons
 * - icon: Icon-only buttons
 * 
 * Usage Examples:
 * ```tsx
 * // Primary button
 * <Button className="bg-emerald-600 hover:bg-emerald-700">
 *   Save Changes
 * </Button>
 * 
 * // With icon
 * <Button className="bg-emerald-600 hover:bg-emerald-700">
 *   <Plus className="w-4 h-4 mr-2" />
 *   Add New
 * </Button>
 * 
 * // Destructive
 * <Button variant="destructive">
 *   <Trash2 className="w-4 h-4 mr-2" />
 *   Delete
 * </Button>
 * 
 * // Ghost
 * <Button variant="ghost">
 *   <Edit className="w-4 h-4 mr-2" />
 *   Edit
 * </Button>
 * ```
 */

// ============================================================================
// DESIGN TOKENS
// ============================================================================
/**
 * Color System:
 * - Primary: Emerald (emerald-50 to emerald-900)
 * - Secondary: Blue, Purple, Amber for accents
 * - Neutral: Gray scale (neutral-50 to neutral-900)
 * - Destructive: Red (red-50 to red-900)
 * 
 * Spacing:
 * - Consistent 4px grid system
 * - Common gaps: gap-2 (8px), gap-4 (16px), gap-6 (24px)
 * 
 * Shadows:
 * - shadow-sm: Subtle elevation
 * - shadow-md: Medium elevation
 * - shadow-lg: High elevation
 * 
 * Border Radius:
 * - rounded-lg: Standard cards (8px)
 * - rounded-xl: KPI cards, buttons (12px)
 * - rounded-full: Avatars, circular elements
 * 
 * Typography:
 * - Headings: text-3xl (h1), text-xl (h2), text-lg (h3)
 * - Body: text-sm (default), text-xs (captions)
 * - Font weights: font-medium, font-semibold, font-bold
 */

export const ComponentSystemDocumentation = {
  version: '1.0.0',
  lastUpdated: '2026-02-17',
  components: {
    KPICard: 'Display key metrics with trends',
    DataTable: 'Flexible table with sorting',
    Modal: 'Base modal component',
    ConfirmModal: 'Confirmation dialogs',
    FormModal: 'Form submission modals',
    ChartWrapper: 'Consistent chart containers',
    ChartStats: 'Chart footer statistics',
    EmptyState: 'No data placeholders',
    PageHeader: 'Page title headers',
    Sidebar: 'Navigation sidebar',
    Button: 'Action buttons with variants',
  },
};

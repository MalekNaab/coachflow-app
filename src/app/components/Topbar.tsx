import { Search, Bell, ChevronDown, User, Settings, CreditCard, LogOut, CheckCheck, Calendar, Users, CreditCard as PaymentIcon, TrendingUp, Settings2, UserPlus } from 'lucide-react';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { Button } from './ui/button';

// Mock notification data with proper typing and icons
interface Notification {
  id: string;
  type: 'payment' | 'session' | 'client';
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: typeof PaymentIcon;
  iconBg: string;
  iconColor: string;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'payment',
    title: 'Payment received',
    message: 'Marcus Thompson paid £600 for monthly package',
    time: '1 hour ago',
    read: false,
    icon: PaymentIcon,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    id: '2',
    type: 'session',
    title: 'Session reminder',
    message: 'Upcoming session with Sarah Johnson at 9:00 AM',
    time: '2 hours ago',
    read: false,
    icon: Calendar,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: '3',
    type: 'client',
    title: 'New client milestone',
    message: 'James O\'Connor lost 22.3kg - incredible transformation!',
    time: '5 hours ago',
    read: false,
    icon: TrendingUp,
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: '4',
    type: 'payment',
    title: 'Payment pending',
    message: 'Emma Clarke payment of £380 due in 2 days',
    time: '1 day ago',
    read: true,
    icon: PaymentIcon,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    id: '5',
    type: 'session',
    title: 'Session completed',
    message: 'Marked session with Charlotte Evans as complete',
    time: '1 day ago',
    read: true,
    icon: Calendar,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: '6',
    type: 'client',
    title: 'At-risk client',
    message: 'Emma Clarke has not responded to recent messages',
    time: '2 days ago',
    read: true,
    icon: Users,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
];

export function Topbar() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-4 md:px-6 lg:px-8 shadow-sm flex-shrink-0">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 transition-colors group-focus-within:text-emerald-600" strokeWidth={2} />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-11 h-10 bg-stone-50 border-stone-200 rounded-[12px] focus:bg-white focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 w-full sm:w-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 md:gap-4 ml-4">
        {/* Quick Stats Badge - Hidden on mobile */}
        <div className="hidden xl:flex items-center gap-2.5 px-4 py-2 bg-emerald-50 rounded-[12px] border border-emerald-100">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-emerald-700 whitespace-nowrap">12 sessions today</span>
        </div>

        {/* Notifications Dropdown */}
        <DropdownMenu open={notificationOpen} onOpenChange={setNotificationOpen}>
          <DropdownMenuTrigger className="relative p-2.5 hover:bg-stone-50 rounded-[12px] transition-all duration-200 group outline-none">
            <Bell className="w-5 h-5 text-stone-600 group-hover:text-stone-900 transition-colors group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-200" strokeWidth={2} />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-emerald-500 text-white text-[10px] font-bold rounded-full ring-2 ring-white animate-in fade-in scale-in-90 duration-200">
                {unreadCount}
              </span>
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[380px] max-w-[calc(100vw-2rem)] p-0 rounded-[16px] shadow-xl border-stone-200 overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-stone-200 bg-stone-50/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-stone-900">Notifications</h3>
                  {unreadCount > 0 && (
                    <p className="text-xs text-stone-500 mt-0.5">
                      {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
                {unreadCount > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleMarkAllRead}
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 h-7 px-3"
                  >
                    <CheckCheck className="w-3.5 h-3.5 mr-1.5" />
                    Mark all read
                  </Button>
                )}
              </div>
            </div>

            {/* Notifications List */}
            <div className="max-h-[420px] overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="px-4 py-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center">
                    <Bell className="w-7 h-7 text-stone-400" strokeWidth={2} />
                  </div>
                  <p className="text-sm font-medium text-stone-900 mb-1">No notifications</p>
                  <p className="text-xs text-stone-500">We'll notify you when something new arrives</p>
                </div>
              ) : (
                <div className="divide-y divide-stone-100">
                  {notifications.map((notification) => {
                    const Icon = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        onClick={() => {
                          if (!notification.read) {
                            handleMarkAsRead(notification.id);
                          }
                        }}
                        className={`px-4 py-3 hover:bg-stone-50 transition-colors duration-150 cursor-pointer group relative ${
                          !notification.read ? 'bg-emerald-50/30' : ''
                        }`}
                      >
                        <div className="flex gap-3">
                          {/* Icon */}
                          <div className={`w-10 h-10 rounded-[12px] ${notification.iconBg} flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                            <Icon className={`w-5 h-5 ${notification.iconColor}`} strokeWidth={2} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h4 className={`text-sm font-semibold ${
                                !notification.read ? 'text-stone-900' : 'text-stone-700'
                              }`}>
                                {notification.title}
                              </h4>
                              {!notification.read && (
                                <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 mt-1.5 animate-pulse" />
                              )}
                            </div>
                            <p className="text-xs text-stone-600 mb-1.5 line-clamp-2">
                              {notification.message}
                            </p>
                            <p className="text-xs text-stone-400 font-medium">
                              {notification.time}
                            </p>
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <div className="absolute inset-0 border-l-2 border-transparent group-hover:border-emerald-500 transition-colors duration-200" />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="px-4 py-3 border-t border-stone-200 bg-stone-50/50">
                <button className="w-full text-center text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors py-1 rounded-[10px] hover:bg-emerald-50">
                  View all notifications
                </button>
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 md:gap-3 hover:bg-stone-50 rounded-[12px] px-2 md:px-3 py-2 transition-all duration-200 group outline-none">
            <Avatar className="w-9 h-9 ring-2 ring-transparent group-hover:ring-emerald-100 transition-all rounded-[12px]">
              <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-semibold text-sm rounded-[12px]">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="text-left hidden md:block">
              <p className="text-sm font-semibold text-stone-900 leading-tight">John Doe</p>
              <p className="text-xs text-stone-500 leading-tight hidden lg:block">Pro Trainer</p>
            </div>
            <ChevronDown className="w-4 h-4 text-stone-400 group-hover:text-stone-600 transition-all group-hover:translate-y-0.5 hidden md:block" strokeWidth={2} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 p-2 rounded-[14px] shadow-lg border-stone-200">
            <DropdownMenuLabel className="px-3 py-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 rounded-[12px]">
                  <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-semibold rounded-[12px]">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm text-stone-900">John Doe</p>
                  <p className="text-xs text-stone-500">john.doe@trainerpro.com</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-stone-200" />
            <DropdownMenuItem className="px-3 py-2.5 cursor-pointer rounded-[10px] focus:bg-stone-50">
              <User className="w-4 h-4 mr-3 text-stone-500" strokeWidth={2} />
              <span className="text-sm">My Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-3 py-2.5 cursor-pointer rounded-[10px] focus:bg-stone-50">
              <Settings className="w-4 h-4 mr-3 text-stone-500" strokeWidth={2} />
              <span className="text-sm">Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="px-3 py-2.5 cursor-pointer rounded-[10px] focus:bg-stone-50">
              <CreditCard className="w-4 h-4 mr-3 text-stone-500" strokeWidth={2} />
              <span className="text-sm">Billing</span>
              <Badge className="ml-auto bg-emerald-100 text-emerald-700 text-xs border-0">Pro</Badge>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-stone-200" />
            <DropdownMenuItem className="px-3 py-2.5 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50 rounded-[10px]">
              <LogOut className="w-4 h-4 mr-3" strokeWidth={2} />
              <span className="text-sm font-medium">Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
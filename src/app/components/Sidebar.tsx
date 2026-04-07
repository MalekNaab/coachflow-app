import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Users,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  ChevronLeft,
  Dumbbell,
} from 'lucide-react';
import { useState } from 'react';

const navigationItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/app' },
  { icon: Users, label: 'Clients', path: '/app/clients' },
  { icon: Calendar, label: 'Sessions', path: '/app/sessions' },
  { icon: CreditCard, label: 'Payments', path: '/app/payments' },
  { icon: BarChart3, label: 'Analytics', path: '/app/analytics' },
  { icon: Settings, label: 'Settings', path: '/app/settings' },
];

export function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } h-screen bg-white border-r border-stone-200 flex flex-col transition-[width] duration-300 ease-in-out shadow-sm relative z-20`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-stone-200 flex-shrink-0">
        {!isCollapsed && (
          <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-2 duration-300">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[14px] flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200">
              <Dumbbell className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-stone-900 text-base tracking-tight whitespace-nowrap">CoachFlow</span>
              <span className="text-[10px] text-stone-500 font-medium tracking-wide uppercase">For Modern Trainers</span>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[14px] flex items-center justify-center mx-auto shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 animate-in fade-in scale-in-90 duration-300">
            <Dumbbell className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          // Check if current path matches or starts with the item path
          const isActive = item.path === '/app' 
            ? location.pathname === '/app'
            : location.pathname.startsWith(item.path);

          return (
            <div key={item.path} className="relative">
              <Link
                to={item.path}
                className={`group flex items-center gap-3 px-3 py-3 rounded-[14px] transition-all duration-200 relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 text-emerald-700 shadow-sm border border-emerald-200/50 hover:from-emerald-500/15 hover:to-emerald-600/15'
                    : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                {/* Active indicator bar on left */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-r-full animate-in slide-in-from-left-2 duration-300" />
                )}

                {/* Hover background effect */}
                {!isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-100/0 via-stone-100/50 to-stone-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
                )}
                
                {/* Icon with enhanced effects */}
                <div className={`relative z-10 flex items-center justify-center transition-all duration-200 ${
                  isActive 
                    ? 'scale-105' 
                    : 'group-hover:scale-110 group-hover:-translate-y-0.5'
                }`}>
                  <div className={`relative ${
                    isActive 
                      ? 'animate-in fade-in scale-in-95 duration-300' 
                      : ''
                  }`}>
                    {/* Icon background glow for active state */}
                    {isActive && (
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-md" />
                    )}
                    <Icon 
                      className={`w-5 h-5 flex-shrink-0 relative ${
                        isActive ? 'text-emerald-600' : ''
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>
                </div>
                
                {/* Label */}
                {!isCollapsed && (
                  <span className={`text-sm font-medium tracking-tight whitespace-nowrap relative z-10 transition-all duration-200 ${
                    isActive ? 'font-semibold text-emerald-700' : 'group-hover:translate-x-0.5'
                  }`}>
                    {item.label}
                  </span>
                )}
                
                {/* Active dot indicator on right */}
                {isActive && !isCollapsed && (
                  <div className="ml-auto relative z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-in fade-in scale-in-90 duration-300">
                      <div className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-75" />
                    </div>
                  </div>
                )}
              </Link>

              {/* Tooltip for collapsed mode */}
              {isCollapsed && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-2 bg-stone-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-4 border-transparent border-r-stone-900" />
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-stone-200 flex-shrink-0">
        <div className={`flex items-center gap-3 px-3 py-3 rounded-[14px] hover:bg-stone-50 transition-all duration-200 cursor-pointer group ${
          isCollapsed ? 'justify-center' : ''
        }`}>
          <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
            JD
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0 animate-in fade-in slide-in-from-left-2 duration-300">
              <p className="text-sm font-medium text-stone-900 truncate">John Doe</p>
              <p className="text-xs text-stone-500 truncate">john@trainerpro.com</p>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Toggle - Hidden on mobile */}
      <div className="p-4 border-t border-stone-200 flex-shrink-0 hidden lg:block">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center gap-2 px-3 py-3 rounded-[14px] text-stone-600 hover:bg-stone-50 hover:text-stone-900 transition-all duration-200 group hover:shadow-sm active:scale-95"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronLeft
            className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${
              isCollapsed ? 'rotate-180' : ''
            }`}
            strokeWidth={2}
          />
          {!isCollapsed && (
            <span className="text-sm font-medium whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-300">
              Collapse
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}
import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
      <Outlet />
    </div>
  );
}
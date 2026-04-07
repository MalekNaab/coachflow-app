import { Outlet } from 'react-router';

export function LandingLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
    </div>
  );
}

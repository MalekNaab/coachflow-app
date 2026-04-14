import { createBrowserRouter } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import { AuthLayout } from './layouts/AuthLayout';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { ClientsPage } from './pages/ClientsPage';
import { ClientProfilePage } from './pages/ClientProfilePage';
import { SessionsPage } from './pages/SessionsPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { SettingsPage } from './pages/SettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorBoundary } from './pages/ErrorBoundary';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: LandingPage,
      ErrorBoundary: ErrorBoundary,
    },
    {
      path: '/login',
      Component: AuthLayout,
      ErrorBoundary: ErrorBoundary,
      children: [{ index: true, Component: LoginPage }],
    },
    {
      path: '/app',
      Component: MainLayout,
      ErrorBoundary: ErrorBoundary,
      children: [
        { index: true, Component: DashboardPage },
        { path: 'clients', Component: ClientsPage },
        { path: 'clients/:id', Component: ClientProfilePage },
        { path: 'sessions', Component: SessionsPage },
        { path: 'payments', Component: PaymentsPage },
        { path: 'analytics', Component: AnalyticsPage },
        { path: 'settings', Component: SettingsPage },
      ],
    },
    {
      path: '*',
      Component: NotFoundPage,
      ErrorBoundary: ErrorBoundary,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

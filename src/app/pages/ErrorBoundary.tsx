import { useRouteError, Link } from 'react-router';
import { Button } from '../components/ui/button';
import { AlertTriangle } from 'lucide-react';

export function ErrorBoundary() {
  const error = useRouteError() as any;

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-200">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-600" strokeWidth={2} />
          </div>
          <h1 className="text-2xl font-semibold text-stone-900 mb-2">Something went wrong</h1>
          <p className="text-stone-600 mb-6">
            {error?.message || error?.statusText || 'An unexpected error occurred'}
          </p>
          <div className="flex flex-col gap-3">
            <Link to="/app">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                Go to Dashboard
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.location.reload()}>
              Reload Page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

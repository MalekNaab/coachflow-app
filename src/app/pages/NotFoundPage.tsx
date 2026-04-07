import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { FileQuestion } from 'lucide-react';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-24 h-24 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <FileQuestion className="w-12 h-12 text-emerald-600" />
        </div>
        <h1 className="text-4xl font-semibold text-neutral-900 mb-2">404 - Page Not Found</h1>
        <p className="text-neutral-600 mb-6">The page you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/app')} className="bg-emerald-600 hover:bg-emerald-700">
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}
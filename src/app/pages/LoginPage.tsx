import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Dumbbell, ArrowRight, Lock, Mail } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login with slight delay for better UX
    setTimeout(() => {
      navigate('/app');
    }, 800);
  };

  return (
    <Card className="w-full max-w-md p-8 shadow-xl border border-neutral-200 rounded-2xl bg-white/95 backdrop-blur-sm">
      <div className="text-center mb-8">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg ring-4 ring-emerald-100">
          <Dumbbell className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1 tracking-tight">CoachFlow</h1>
        <p className="text-xs text-emerald-600 font-semibold tracking-wide uppercase mb-3">SaaS Platform for Modern Trainers</p>
        <p className="text-sm text-neutral-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-neutral-700">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              id="email"
              type="email"
              placeholder="trainer@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 border-neutral-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 rounded-xl transition-all"
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-sm font-medium text-neutral-700">
              Password
            </Label>
            <button 
              type="button"
              className="text-xs text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Forgot?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10 border-neutral-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 rounded-xl transition-all"
              disabled={isLoading}
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-md hover:shadow-lg transition-all duration-200 rounded-xl h-11 font-medium group"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Signing in...</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span>Sign in</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          )}
        </Button>
      </form>

      <div className="mt-8 pt-6 border-t border-neutral-200">
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="text-xs font-medium text-emerald-900 mb-1">🎯 Demo Mode</p>
          <p className="text-xs text-emerald-700">
            Use any email and password to explore the dashboard
          </p>
        </div>
      </div>
    </Card>
  );
}
import { Link } from 'react-router';
import { 
  Dumbbell, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Calendar, 
  CreditCard,
  BarChart3,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';
import { Button } from '../components/ui/button';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50">
      {/* Navigation */}
      <nav className="border-b border-stone-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[14px] flex items-center justify-center shadow-sm">
              <Dumbbell className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-stone-900 text-base tracking-tight">CoachFlow</span>
              <span className="text-[9px] text-stone-500 font-medium tracking-wide uppercase">For Modern Trainers</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors">
              Sign In
            </Link>
            <Link to="/login">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-sm hover:shadow-md transition-all rounded-xl h-9 px-5 text-sm font-medium">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <Zap className="w-4 h-4" />
            <span>Trusted by 1,000+ Personal Trainers</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 tracking-tight leading-[1.1] animate-in fade-in slide-in-from-top-6 duration-700">
            The Modern Way to
            <span className="block bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              Run Your Coaching Business
            </span>
          </h1>
          
          <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-top-8 duration-900">
            CoachFlow is the all-in-one SaaS platform that helps personal trainers manage clients, 
            track progress, schedule sessions, and grow their revenue—all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-top-10 duration-1000">
            <Link to="/login">
              <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all rounded-xl h-12 px-8 text-base font-semibold group">
                <span>Start Free 14-Day Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-stone-300 hover:border-emerald-400 hover:bg-emerald-50 rounded-xl h-12 px-8 text-base font-semibold transition-all"
            >
              Watch Demo
            </Button>
          </div>
          
          <p className="text-sm text-stone-500 mt-6 animate-in fade-in duration-1000 delay-200">
            No credit card required • Setup in 5 minutes • Cancel anytime
          </p>
        </div>
        
        {/* Hero Screenshot */}
        <div className="mt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent blur-3xl -z-10" />
            <div className="rounded-2xl border border-stone-200 shadow-2xl overflow-hidden bg-white p-2">
              <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-xl aspect-[16/10] flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-24 h-24 text-emerald-500 mx-auto mb-4 opacity-50" />
                  <p className="text-stone-400 font-medium">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">
            Everything you need to scale your coaching business
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Stop juggling spreadsheets, notes apps, and payment trackers. 
            CoachFlow brings it all together in one beautiful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Value Prop 1 */}
          <div className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Grow Your Revenue</h3>
            <p className="text-stone-600 leading-relaxed">
              Track income, analyze pricing strategies, and identify your most profitable clients. 
              Make data-driven decisions to increase your earnings.
            </p>
          </div>

          {/* Value Prop 2 */}
          <div className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Save Time Daily</h3>
            <p className="text-stone-600 leading-relaxed">
              Automate scheduling, client tracking, and progress reports. 
              Spend less time on admin and more time coaching.
            </p>
          </div>

          {/* Value Prop 3 */}
          <div className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-3">Deliver Better Results</h3>
            <p className="text-stone-600 leading-relaxed">
              Track client progress with precision, identify trends, and provide 
              professional insights that keep clients engaged and achieving goals.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-white to-stone-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">
            Powerful features built for trainers
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Everything you need to manage clients, sessions, payments, and analytics—all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 hover:border-emerald-300 transition-colors">
            <Users className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-2">Client Management</h3>
            <p className="text-sm text-stone-600">
              Organize client profiles, track goals, monitor progress, and store session notes—all in one place.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 hover:border-emerald-300 transition-colors">
            <Calendar className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-2">Session Scheduling</h3>
            <p className="text-sm text-stone-600">
              Schedule sessions, send reminders, and track attendance. Never miss a session or double-book again.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 hover:border-emerald-300 transition-colors">
            <CreditCard className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-2">Payment Tracking</h3>
            <p className="text-sm text-stone-600">
              Track payments, manage invoices, and monitor outstanding balances. Keep your finances organized.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 hover:border-emerald-300 transition-colors">
            <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-2">Progress Tracking</h3>
            <p className="text-sm text-stone-600">
              Monitor client transformations with weight tracking, measurements, and visual progress charts.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 hover:border-emerald-300 transition-colors">
            <BarChart3 className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-2">Revenue Analytics</h3>
            <p className="text-sm text-stone-600">
              Visualize revenue trends, track monthly growth, and identify your most valuable clients.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-xl border border-stone-200 p-6 hover:border-emerald-300 transition-colors">
            <Zap className="w-8 h-8 text-emerald-600 mb-3" />
            <h3 className="font-semibold text-stone-900 mb-2">Smart Insights</h3>
            <p className="text-sm text-stone-600">
              AI-powered business insights help you identify trends, retention risks, and growth opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">
            See CoachFlow in action
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Beautiful, intuitive interface designed specifically for personal trainers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Screenshot 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-lg">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl aspect-[4/3] flex items-center justify-center">
                <Users className="w-16 h-16 text-emerald-600 opacity-50" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-stone-900 mb-1">Client Dashboard</h3>
                <p className="text-sm text-stone-600">View all clients at a glance with status indicators and quick actions.</p>
              </div>
            </div>
          </div>

          {/* Screenshot 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-lg">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl aspect-[4/3] flex items-center justify-center">
                <BarChart3 className="w-16 h-16 text-blue-600 opacity-50" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-stone-900 mb-1">Analytics & Insights</h3>
                <p className="text-sm text-stone-600">Track revenue, sessions, and client retention with beautiful charts.</p>
              </div>
            </div>
          </div>

          {/* Screenshot 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-lg">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl aspect-[4/3] flex items-center justify-center">
                <Calendar className="w-16 h-16 text-purple-600 opacity-50" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-stone-900 mb-1">Session Management</h3>
                <p className="text-sm text-stone-600">Schedule, track, and manage all your training sessions effortlessly.</p>
              </div>
            </div>
          </div>

          {/* Screenshot 4 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-lg">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl aspect-[4/3] flex items-center justify-center">
                <TrendingUp className="w-16 h-16 text-amber-600 opacity-50" />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-stone-900 mb-1">Progress Tracking</h3>
                <p className="text-sm text-stone-600">Monitor client transformations with detailed progress charts and metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Starter</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl font-bold text-stone-900">£29</span>
                <span className="text-stone-600">/month</span>
              </div>
              <p className="text-sm text-stone-600">Perfect for getting started</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Up to 15 active clients</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Session scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Payment tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Basic analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Email support</span>
              </li>
            </ul>

            <Link to="/login">
              <Button 
                variant="outline" 
                className="w-full border-stone-300 hover:border-emerald-400 hover:bg-emerald-50 rounded-xl h-11 font-medium transition-all"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Professional Plan (Highlighted) */}
          <div className="bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-2xl p-8 shadow-xl relative transform scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
              <Star className="w-3 h-3 fill-amber-900" />
              MOST POPULAR
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Professional</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl font-bold text-white">£59</span>
                <span className="text-emerald-100">/month</span>
              </div>
              <p className="text-sm text-emerald-100">For growing businesses</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Up to 50 active clients</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Advanced scheduling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Automated invoicing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Full analytics suite</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Smart insights & reports</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white">Priority support</span>
              </li>
            </ul>

            <Link to="/login">
              <Button className="w-full bg-white hover:bg-emerald-50 text-emerald-600 rounded-xl h-11 font-semibold shadow-lg hover:shadow-xl transition-all">
                Start Free Trial
              </Button>
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-2xl border border-stone-200 p-8 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Enterprise</h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-4xl font-bold text-stone-900">£99</span>
                <span className="text-stone-600">/month</span>
              </div>
              <p className="text-sm text-stone-600">For established businesses</p>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Unlimited clients</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Multi-location support</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Team collaboration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Custom integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">White-label options</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-stone-700">Dedicated account manager</span>
              </li>
            </ul>

            <Link to="/login">
              <Button 
                variant="outline" 
                className="w-full border-stone-300 hover:border-emerald-400 hover:bg-emerald-50 rounded-xl h-11 font-medium transition-all"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>

        <p className="text-center text-sm text-stone-600 mt-8">
          All plans include 14-day free trial • No credit card required • Cancel anytime
        </p>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to transform your coaching business?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join 1,000+ trainers who've streamlined their business with CoachFlow. 
            Start your free 14-day trial today—no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button className="bg-white hover:bg-emerald-50 text-emerald-600 shadow-lg hover:shadow-xl transition-all rounded-xl h-14 px-10 text-lg font-semibold group">
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white rounded-xl h-14 px-10 text-lg font-semibold transition-all"
            >
              Schedule a Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-8 mt-12 text-emerald-100">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[14px] flex items-center justify-center shadow-sm">
                  <Dumbbell className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-stone-900 text-base tracking-tight">CoachFlow</span>
                  <span className="text-[9px] text-stone-500 font-medium tracking-wide uppercase">For Modern Trainers</span>
                </div>
              </div>
              <p className="text-sm text-stone-600">
                The modern SaaS platform for personal trainers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Demo</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Roadmap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-stone-900 mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-stone-600">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-stone-600">
              © 2026 CoachFlow. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-stone-600 hover:text-emerald-600 transition-colors text-sm">Twitter</a>
              <a href="#" className="text-stone-600 hover:text-emerald-600 transition-colors text-sm">LinkedIn</a>
              <a href="#" className="text-stone-600 hover:text-emerald-600 transition-colors text-sm">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

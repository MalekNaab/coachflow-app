import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Plus, ChevronLeft, ChevronRight, Clock, MapPin, CheckCircle2, XCircle, Calendar } from 'lucide-react';
import { sessions, clients } from '../data/mockData';
import { NoSessionsEmptyState, NoUpcomingSessionsEmptyState } from '../components/EmptyState';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const hours = Array.from({ length: 14 }, (_, i) => i + 6); // 6 AM to 8 PM

export function SessionsPage() {
  const [currentDate] = useState(new Date(2025, 1, 17)); // Feb 17, 2025
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    return date;
  });

  const getSessionsForDate = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0];
    return sessions.filter((s) => s.date === dateStr);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isToday = (date: Date) => {
    const today = new Date(2025, 1, 17); // Current date
    return date.toDateString() === today.toDateString();
  };

  const isPastDate = (dateString: string) => {
    const sessionDate = new Date(dateString);
    const today = new Date(2025, 1, 17);
    return sessionDate < today;
  };

  // Separate sessions into categories
  const upcomingSessions = sessions
    .filter((s) => s.status === 'Scheduled' && !isPastDate(s.date))
    .sort((a, b) => new Date(a.date + ' ' + a.time).getTime() - new Date(b.date + ' ' + b.time).getTime());

  const completedSessions = sessions
    .filter((s) => s.status === 'Completed')
    .sort((a, b) => new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime());

  const cancelledSessions = sessions
    .filter((s) => s.status === 'Cancelled')
    .sort((a, b) => new Date(b.date + ' ' + b.time).getTime() - new Date(a.date + ' ' + a.time).getTime());

  const getSessionColor = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-emerald-100 border-emerald-300 text-emerald-900';
      case 'Completed':
        return 'bg-blue-100 border-blue-300 text-blue-900';
      case 'Cancelled':
        return 'bg-neutral-100 border-neutral-300 text-neutral-600';
      default:
        return 'bg-neutral-100 border-neutral-300 text-neutral-900';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-neutral-900">Sessions</h1>
          <p className="text-neutral-600 mt-1">Manage your training schedule</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="w-4 h-4 mr-2" />
              Create Session
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Session</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="session-client">Client *</Label>
                <Select>
                  <SelectTrigger id="session-client">
                    <SelectValue placeholder="Select a client" />
                  </SelectTrigger>
                  <SelectContent>
                    {clients.map((client) => (
                      <SelectItem key={client.id} value={client.id}>
                        {client.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="session-date">Date *</Label>
                  <Input id="session-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="session-time">Time *</Label>
                  <Input id="session-time" type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-location">Location *</Label>
                <Select>
                  <SelectTrigger id="session-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="main-studio">Main Studio</SelectItem>
                    <SelectItem value="outdoor">Outdoor Training Area</SelectItem>
                    <SelectItem value="gym-a">Gym A</SelectItem>
                    <SelectItem value="gym-b">Gym B</SelectItem>
                    <SelectItem value="client-home">Client's Home</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-price">Price ($) *</Label>
                <Input id="session-price" type="number" placeholder="75.00" step="0.01" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="session-notes">Session Notes (Optional)</Label>
                <Textarea 
                  id="session-notes" 
                  placeholder="Add any notes about the session focus, special requests, etc..." 
                  rows={3} 
                />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Plus className="w-4 h-4 mr-2" />
                Create Session
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Calendar Header */}
      <Card className="p-4 border border-neutral-200 shadow-sm">
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="hover:bg-neutral-50">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <h2 className="text-lg font-semibold text-neutral-900">
            {weekDates[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - {weekDates[6].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </h2>
          <Button variant="outline" size="sm" className="hover:bg-neutral-50">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </Card>

      {/* Calendar Grid */}
      <Card className="border border-neutral-200 shadow-sm overflow-hidden">
        <div className="grid grid-cols-8 border-b border-neutral-200">
          <div className="p-3 bg-neutral-50 border-r border-neutral-200"></div>
          {weekDates.map((date, i) => (
            <div
              key={i}
              className={`p-3 border-r border-neutral-200 last:border-r-0 text-center ${
                isToday(date) ? 'bg-emerald-50' : 'bg-neutral-50'
              }`}
            >
              <div className={`text-sm font-medium ${isToday(date) ? 'text-emerald-600' : 'text-neutral-600'}`}>
                {daysOfWeek[i]}
              </div>
              <div
                className={`text-lg font-semibold mt-1 ${
                  isToday(date) ? 'text-emerald-600' : 'text-neutral-900'
                }`}
              >
                {date.getDate()}
              </div>
            </div>
          ))}
        </div>
        <div className="max-h-96 overflow-y-auto">
          {hours.map((hour) => (
            <div key={hour} className="grid grid-cols-8 border-b border-neutral-200 last:border-b-0">
              <div className="p-3 border-r border-neutral-200 text-sm text-neutral-600 bg-neutral-50 font-medium">
                {hour > 12 ? hour - 12 : hour}:00 {hour >= 12 ? 'PM' : 'AM'}
              </div>
              {weekDates.map((date, i) => {
                const daySessions = getSessionsForDate(date).filter(
                  (s) => parseInt(s.time.split(':')[0]) === hour
                );
                return (
                  <div 
                    key={i} 
                    className={`p-2 border-r border-neutral-200 last:border-r-0 min-h-20 hover:bg-neutral-50 transition-colors ${
                      isToday(date) ? 'bg-emerald-50/30' : ''
                    }`}
                  >
                    {daySessions.map((session) => (
                      <div
                        key={session.id}
                        className={`${getSessionColor(session.status)} border rounded-lg p-2 mb-1 text-xs cursor-pointer hover:shadow-md transition-shadow`}
                      >
                        <p className="font-semibold truncate">{session.clientName}</p>
                        <p className="text-xs opacity-80">${session.price}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Sessions List */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Upcoming Sessions</h2>
          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
            {upcomingSessions.length}
          </span>
        </div>
        <div className="space-y-3">
          {upcomingSessions.length > 0 ? (
            upcomingSessions.map((session) => (
              <Card key={session.id} className="p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-emerald-50 flex flex-col items-center justify-center border border-emerald-200">
                      <span className="text-xs text-emerald-600 font-medium">
                        {new Date(session.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-lg font-bold text-emerald-700">
                        {new Date(session.date).getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900 text-lg">{session.clientName}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-neutral-600">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {session.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {session.location}
                        </span>
                      </div>
                      {session.notes && (
                        <p className="text-sm text-neutral-500 mt-2 italic">"{session.notes}"</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-neutral-900">${session.price}</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 text-emerald-700 text-sm rounded-lg font-medium">
                      <Clock className="w-3.5 h-3.5" />
                      {session.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <NoUpcomingSessionsEmptyState />
          )}
        </div>
      </div>

      {/* Completed Sessions List */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Completed Sessions</h2>
          <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
            {completedSessions.length}
          </span>
        </div>
        <div className="space-y-3">
          {completedSessions.length > 0 ? (
            completedSessions.map((session) => (
              <Card key={session.id} className="p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-blue-50 flex flex-col items-center justify-center border border-blue-200">
                      <span className="text-xs text-blue-600 font-medium">
                        {new Date(session.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-lg font-bold text-blue-700">
                        {new Date(session.date).getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900 text-lg">{session.clientName}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-neutral-600">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {session.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {session.location}
                        </span>
                      </div>
                      {session.notes && (
                        <p className="text-sm text-neutral-500 mt-2 italic">"{session.notes}"</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-neutral-900">${session.price}</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 text-sm rounded-lg font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {session.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <Card className="p-12 border border-neutral-200 shadow-sm text-center">
              <CheckCircle2 className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-neutral-600">No completed sessions yet</p>
            </Card>
          )}
        </div>
      </div>

      {/* Cancelled Sessions List */}
      {cancelledSessions.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-neutral-700" />
            <h2 className="text-xl font-semibold text-neutral-900">Cancelled Sessions</h2>
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 text-sm rounded-full font-medium">
              {cancelledSessions.length}
            </span>
          </div>
          <div className="space-y-3">
            {cancelledSessions.map((session) => (
              <Card key={session.id} className="p-4 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow opacity-75">
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-neutral-100 flex flex-col items-center justify-center border border-neutral-300">
                      <span className="text-xs text-neutral-600 font-medium">
                        {new Date(session.date).toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                      <span className="text-lg font-bold text-neutral-700">
                        {new Date(session.date).getDate()}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-neutral-900 text-lg line-through">{session.clientName}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-neutral-600">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {session.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {session.location}
                        </span>
                      </div>
                      {session.notes && (
                        <p className="text-sm text-neutral-500 mt-2 italic">"{session.notes}"</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-neutral-500 line-through">${session.price}</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm rounded-lg font-medium">
                      <XCircle className="w-3.5 h-3.5" />
                      {session.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
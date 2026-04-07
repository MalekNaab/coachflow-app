import { useState } from 'react';
import { Card } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Separator } from '../components/ui/separator';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  User,
  Briefcase,
  Bell,
  Shield,
  Palette,
  MapPin,
  DollarSign,
  Moon,
  Sun,
  Trash2,
  Save,
  Plus,
  X,
} from 'lucide-react';

export function SettingsPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [locations, setLocations] = useState([
    'Main Studio, 123 Fitness St',
    'Outdoor Training Area',
  ]);
  const [packages, setPackages] = useState([
    { name: 'Single Session', price: 75 },
    { name: '5 Session Package', price: 350 },
    { name: '10 Session Package', price: 650 },
    { name: 'Monthly Unlimited', price: 400 },
  ]);

  const addLocation = () => {
    setLocations([...locations, '']);
  };

  const removeLocation = (index: number) => {
    setLocations(locations.filter((_, i) => i !== index));
  };

  const addPackage = () => {
    setPackages([...packages, { name: '', price: 0 }]);
  };

  const removePackage = (index: number) => {
    setPackages(packages.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-neutral-900">Settings</h1>
        <p className="text-neutral-600 mt-1">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Profile Settings</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name *</Label>
                <Input id="first-name" defaultValue="John" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name *</Label>
                <Input id="last-name" defaultValue="Doe" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" defaultValue="john.doe@trainerpro.com" placeholder="your.email@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Professional Bio</Label>
              <Textarea
                id="bio"
                defaultValue="Certified Personal Trainer specializing in strength training and nutrition. 10+ years of experience helping clients achieve their fitness goals."
                placeholder="Tell clients about your experience and specialties..."
                rows={4}
              />
            </div>
            <Separator />
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="w-4 h-4 mr-2" />
              Save Profile Changes
            </Button>
          </div>
        </Card>
      </div>

      {/* Business Settings */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Business Settings</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="business-name">Business Name *</Label>
              <Input id="business-name" defaultValue="TrainerPro Fitness" placeholder="Your business name" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="currency">Currency *</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($) - US Dollar</SelectItem>
                    <SelectItem value="eur">EUR (€) - Euro</SelectItem>
                    <SelectItem value="gbp">GBP (£) - British Pound</SelectItem>
                    <SelectItem value="cad">CAD ($) - Canadian Dollar</SelectItem>
                    <SelectItem value="aud">AUD ($) - Australian Dollar</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone *</Label>
                <Select defaultValue="pst">
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific Time (PST/PDT)</SelectItem>
                    <SelectItem value="mst">Mountain Time (MST/MDT)</SelectItem>
                    <SelectItem value="cst">Central Time (CST/CDT)</SelectItem>
                    <SelectItem value="est">Eastern Time (EST/EDT)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <Label className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-600" />
                  Training Locations
                </Label>
                <Button variant="outline" size="sm" onClick={addLocation}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Location
                </Button>
              </div>
              <div className="space-y-3">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={location}
                      onChange={(e) => {
                        const newLocations = [...locations];
                        newLocations[index] = e.target.value;
                        setLocations(newLocations);
                      }}
                      placeholder="e.g., Main Studio, 123 Fitness St"
                    />
                    {locations.length > 1 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeLocation(index)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="w-4 h-4 mr-2" />
              Save Business Settings
            </Button>
          </div>
        </Card>
      </div>

      {/* Package Pricing */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Package Pricing</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <p className="text-sm text-neutral-600">
              Set your standard pricing for different session packages. You can always override these prices for individual clients.
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-2">
                <Label>Training Packages</Label>
                <Button variant="outline" size="sm" onClick={addPackage}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Package
                </Button>
              </div>
              {packages.map((pkg, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-1">
                    <Input
                      value={pkg.name}
                      onChange={(e) => {
                        const newPackages = [...packages];
                        newPackages[index].name = e.target.value;
                        setPackages(newPackages);
                      }}
                      placeholder="Package name"
                    />
                  </div>
                  <div className="w-32">
                    <Input
                      type="number"
                      value={pkg.price}
                      onChange={(e) => {
                        const newPackages = [...packages];
                        newPackages[index].price = parseFloat(e.target.value) || 0;
                        setPackages(newPackages);
                      }}
                      placeholder="Price"
                    />
                  </div>
                  {packages.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removePackage(index)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <Separator />
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Save className="w-4 h-4 mr-2" />
              Update Pricing
            </Button>
          </div>
        </Card>
      </div>

      {/* Appearance Settings */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Appearance</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-neutral-900 mb-1">Theme Mode</p>
                <p className="text-sm text-neutral-600">
                  Choose your preferred color theme
                </p>
              </div>
              <div className="flex items-center gap-2 p-1 bg-neutral-100 rounded-lg">
                <button
                  onClick={() => setTheme('light')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    theme === 'light'
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Sun className="w-4 h-4" />
                  Light
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    theme === 'dark'
                      ? 'bg-white text-neutral-900 shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  <Moon className="w-4 h-4" />
                  Dark
                </button>
              </div>
            </div>
            <Separator />
            <p className="text-sm text-neutral-500 italic">
              Note: Dark mode is coming soon. This setting will be applied once the feature is available.
            </p>
          </div>
        </Card>
      </div>

      {/* Notification Settings */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Bell className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Notifications</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <p className="text-sm text-neutral-600">
              Manage how and when you receive notifications
            </p>
            <div className="space-y-1">
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-neutral-900">Session Reminders</p>
                  <p className="text-sm text-neutral-600">Get notified 1 hour before sessions start</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-neutral-900">New Client Bookings</p>
                  <p className="text-sm text-neutral-600">Alert when clients book new sessions</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-neutral-900">Payment Notifications</p>
                  <p className="text-sm text-neutral-600">Alerts when payments are received or pending</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-neutral-900">Client Activity Alerts</p>
                  <p className="text-sm text-neutral-600">Notifications about inactive or at-risk clients</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-neutral-900">Weekly Summary Reports</p>
                  <p className="text-sm text-neutral-600">Receive weekly analytics and performance summaries</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between py-4">
                <div>
                  <p className="font-medium text-neutral-900">Marketing & Tips</p>
                  <p className="text-sm text-neutral-600">Receive training tips and product updates</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Security Settings */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-neutral-700" />
          <h2 className="text-xl font-semibold text-neutral-900">Security</h2>
        </div>
        <Card className="p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="space-y-6">
            <p className="text-sm text-neutral-600">
              Update your password to keep your account secure
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password *</Label>
                <Input id="current-password" type="password" placeholder="Enter current password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password *</Label>
                <Input id="new-password" type="password" placeholder="Enter new password" />
                <p className="text-xs text-neutral-500">Must be at least 8 characters with a mix of letters and numbers</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password *</Label>
                <Input id="confirm-password" type="password" placeholder="Confirm new password" />
              </div>
            </div>
            <Separator />
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Shield className="w-4 h-4 mr-2" />
              Update Password
            </Button>
          </div>
        </Card>
      </div>

      {/* Danger Zone */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Trash2 className="w-5 h-5 text-red-600" />
          <h2 className="text-xl font-semibold text-red-900">Danger Zone</h2>
        </div>
        <Card className="p-6 border-2 border-red-200 shadow-sm bg-red-50">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-red-900 mb-2">Delete Account</h3>
              <p className="text-sm text-red-700 mb-4">
                Permanently delete your account and all associated data. This action cannot be undone. 
                All clients, sessions, payments, and analytics data will be permanently removed.
              </p>
            </div>
            <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete Account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
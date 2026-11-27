import React, { useState } from 'react';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Tag,
  Wallet,
  Users,
  CreditCard,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Search,
  Bell,
  ChevronDown,
  Store,
  Building2,
  Shield,
  User,
  ChevronRight,
  X,
  Mail,
  Lock,
  Phone,
  MapPin,
  Check
} from 'lucide-react';

export default function App() {
  const [activeNav, setActiveNav] = useState('Settings');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form states for modals
  const [brandName, setBrandName] = useState('BABBAD Store');
  const [brandAddress, setBrandAddress] = useState('123 Business Ave, Suite 100');
  const [branchName, setBranchName] = useState('Main Headquarters');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [personalName, setPersonalName] = useState('Ahmed Muhammed');
  const [personalEmail, setPersonalEmail] = useState('ahmed@babbad.com');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleSave = (section: string) => {
    showToast(`${section} updated successfully!`);
    setSelectedCard(null);
  };

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Orders', icon: Package },
    { name: 'Products', icon: ShoppingBag },
    { name: 'Offers Managment', icon: Tag },
    { name: 'Financial', icon: Wallet },
    { name: 'Team Managment', icon: Users },
    { name: 'Subscriptions', icon: CreditCard },
    { name: 'Settings', icon: Settings },
  ];

  const settingsCards = [
    {
      id: 'brand',
      title: 'Brand Information',
      description: 'Update name, address, logo and description',
      icon: Store,
    },
    {
      id: 'branch',
      title: 'Branch Management',
      description: 'Manage all your business locations',
      icon: Building2,
    },
    {
      id: 'security',
      title: 'Password & Security',
      description: 'Change password and secure your account',
      icon: Shield,
    },
    {
      id: 'personal',
      title: 'Personal Information',
      description: 'Update your personal details, email, and profile photo',
      icon: User,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans text-gray-900 antialiased selection:bg-amber-100 selection:text-amber-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? 'w-20' : 'w-64'
        } bg-white border-r border-gray-200 flex flex-col transition-all duration-300 shrink-0 sticky top-0 h-screen select-none`}
      >
        {/* Logo Area */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-gray-100">
          {!isCollapsed ? (
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <div className="flex items-center tracking-tighter text-2xl font-black text-amber-900">
                  <span>BABBAD</span>
                  <div className="ml-1.5 w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-bold border border-amber-300">
                    B
                  </div>
                </div>
                <span className="text-[9px] font-bold tracking-widest text-gray-400 uppercase">
                  Everything. Simply
                </span>
              </div>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 font-black text-lg mx-auto">
              B
            </div>
          )}
        </div>

        {/* Nav Links */}
        <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.name;
            return (
              <button
                key={item.name}
                onClick={() => setActiveNav(item.name)}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-medium text-sm transition-all group ${
                  isActive
                    ? 'bg-[#B47522] text-white shadow-md shadow-amber-900/10'
                    : 'text-gray-600 hover:bg-gray-100/80 hover:text-gray-900'
                }`}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-105 ${
                    isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-900'
                  }`}
                />
                {!isCollapsed && (
                  <span className="truncate tracking-wide">{item.name}</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Footer Sidebar Items */}
        <div className="p-3 border-t border-gray-100 space-y-1.5 bg-gray-50/50">
          <button
            onClick={() => showToast('Opening Support & Help center...')}
            className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-medium text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            title={isCollapsed ? 'Support & Help' : undefined}
          >
            <HelpCircle className="w-5 h-5 text-gray-500 shrink-0" />
            {!isCollapsed && <span>Support & Help</span>}
          </button>

          <button
            onClick={() => showToast('Logged out successfully.')}
            className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-medium text-sm text-red-600 hover:bg-red-50 transition-colors"
            title={isCollapsed ? 'Log out' : undefined}
          >
            <LogOut className="w-5 h-5 text-red-500 shrink-0" />
            {!isCollapsed && <span>Log out</span>}
          </button>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-medium text-sm text-gray-600 hover:bg-gray-100 transition-colors"
            title={isCollapsed ? 'Expand' : 'Collapse'}
          >
            <ChevronLeft
              className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${
                isCollapsed ? 'rotate-180' : ''
              }`}
            />
            {!isCollapsed && <span>Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation Header */}
        <header className="h-20 bg-white border-b border-gray-200 px-8 flex items-center justify-between sticky top-0 z-30">
          {/* Search Bar */}
          <div className="relative w-96 max-w-full">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for anything"
              className="w-full pl-11 pr-4 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600 transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors relative"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-amber-600 text-white rounded-full text-[11px] font-bold flex items-center justify-center ring-2 ring-white">
                  2
                </span>
              </button>

              {notificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 pb-2 border-b border-gray-100 flex items-center justify-between">
                    <span className="font-semibold text-sm text-gray-900">Notifications</span>
                    <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded-full">2 new</span>
                  </div>
                  <div className="divide-y divide-gray-50 max-h-64 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                      <p className="text-xs font-semibold text-gray-900">New order received #1048</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">Customer placed an order 5 minutes ago.</p>
                    </div>
                    <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                      <p className="text-xs font-semibold text-gray-900">Branch update required</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">Please verify your new business location hours.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 hover:bg-gray-50 p-1.5 rounded-xl transition-colors"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 bg-amber-100 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="Ahmed Muhammed"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left hidden sm:block">
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">Ahmed Muhammed</h4>
                  <p className="text-xs text-gray-500 font-medium">Brand Owner</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-400 ml-1" />
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-xs font-semibold text-gray-900">Ahmed Muhammed</p>
                    <p className="text-[11px] text-gray-500">ahmed@vendor.com</p>
                  </div>
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      setSelectedCard('personal');
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Your Profile
                  </button>
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      setSelectedCard('security');
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Security Settings
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      showToast('Logged out successfully.');
                    }}
                    className="w-full text-left px-4 py-2.5 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8 max-w-5xl w-full mx-auto space-y-6">
          {/* Header Title & Subtitle */}
          <div className="space-y-1 mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Brand Settings</h1>
            <p className="text-sm text-gray-500 font-normal">
              Manage your identity and how customers see you
            </p>
          </div>

          {/* Settings Cards List */}
          <div className="space-y-4">
            {settingsCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  onClick={() => setSelectedCard(card.id)}
                  className="bg-white border border-gray-200/80 rounded-2xl p-6 flex items-center justify-between hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-900 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-0.5 font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all">
                    <ChevronRight className="w-5 h-5 stroke-[2]" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Need Help Card */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-6 mt-10">
            <h4 className="text-base font-bold text-gray-900 mb-2">Need Help?</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">
              If you need assistance with your settings, please contact our support team at{' '}
              <a
                href="mailto:support@vendor.com"
                className="text-amber-700 font-medium hover:underline"
              >
                support@vendor.com
              </a>
            </p>
          </div>
        </main>
      </div>

      {/* Modal Dialog for Editing Settings */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border border-gray-100 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Brand Information Modal */}
            {selectedCard === 'brand' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Store className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Brand Information</h3>
                    <p className="text-xs text-gray-500">Update your public brand identity</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Brand Name
                    </label>
                    <input
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Business Address
                    </label>
                    <input
                      type="text"
                      value={brandAddress}
                      onChange={(e) => setBrandAddress(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave('Brand Information')}
                      className="px-6 py-2.5 rounded-xl bg-amber-600 text-sm font-semibold text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20 transition-all"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Branch Management Modal */}
            {selectedCard === 'branch' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Branch Management</h3>
                    <p className="text-xs text-gray-500">Manage your business locations</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Primary Branch Name
                    </label>
                    <input
                      type="text"
                      value={branchName}
                      onChange={(e) => setBranchName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-gray-900">Main Headquarters</p>
                      <p className="text-[11px] text-gray-500">Active • Open 9:00 AM - 10:00 PM</p>
                    </div>
                    <span className="text-xs font-semibold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                      Primary
                    </span>
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave('Branch Management')}
                      className="px-6 py-2.5 rounded-xl bg-amber-600 text-sm font-semibold text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20 transition-all"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Password & Security Modal */}
            {selectedCard === 'security' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Password & Security</h3>
                    <p className="text-xs text-gray-500">Update your account password</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave('Password & Security')}
                      className="px-6 py-2.5 rounded-xl bg-amber-600 text-sm font-semibold text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20 transition-all"
                    >
                      Update Password
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Information Modal */}
            {selectedCard === 'personal' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Personal Information</h3>
                    <p className="text-xs text-gray-500">Update your personal details</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={personalName}
                      onChange={(e) => setPersonalName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={personalEmail}
                      onChange={(e) => setPersonalEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-600"
                    />
                  </div>
                  <div className="pt-4 flex justify-end gap-3">
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSave('Personal Information')}
                      className="px-6 py-2.5 rounded-xl bg-amber-600 text-sm font-semibold text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20 transition-all"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

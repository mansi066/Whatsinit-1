import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Home,
  ScanLine,
  Utensils,
  Sparkles,
  Calendar,
  ChefHat,
  Stethoscope,
  UserCheck,
  Crown,
  Briefcase,
  ShoppingBag,
  ShieldCheck,
  LayoutDashboard,
  UserRound,
  LogOut,
  Menu,
  X,
  History,
  ChevronDown,
  Leaf,
  Sparkle,
} from 'lucide-react';
import { ThemeToggle } from '../theme-toggle';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    user,
    dietitian,
    currentRole,
    logout,
    openAuthModal,
    groceryList,
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const pendingGroceryCount = groceryList.filter((g) => !g.purchased).length;

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setProfileDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 shadow-xs">
      {/* 3. Top Announcement Banner */}
      <div className="bg-[#E8F5E9] dark:bg-[#081f12] border-b border-[#C8E6C9]/80 dark:border-emerald-900/60 py-1.5 px-4 text-center transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <span className="inline-flex items-center space-x-1.5 bg-white/90 dark:bg-zinc-900 text-[#15803D] dark:text-emerald-400 border border-[#A7F3D0] dark:border-emerald-800 px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wide shadow-2xs">
            <span>🛡️</span>
            <span>INDIA'S FOOD INTELLIGENCE PLATFORM</span>
          </span>
          <span className="hidden md:inline-block text-[11px] text-[#4B6354] dark:text-emerald-300/80 font-medium">
            — Instant packaged food label decoding, FSSAI claim audits & healthier Indian swaps.
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 dark:bg-[#0c140f]/95 backdrop-blur-md border-b border-[#E2E8F0] dark:border-emerald-950/80 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo: Official WhatsInIt with Orange & Green Leaf Icon */}
            <div
              onClick={() => handleNav('home')}
              className="flex items-center space-x-3 cursor-pointer group shrink-0"
            >
              {/* Stylized emblem with orange & green leaf */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#E65100] flex items-center justify-center text-white shadow-sm shadow-[#FF7A00]/25 group-hover:scale-105 transition-transform duration-200">
                <Leaf className="w-5 h-5 text-white" />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#15803D] border-2 border-white flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-200" />
                </span>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-extrabold tracking-tight text-[#1E2922]">
                    WhatsInIt
                  </span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#E8F5E9] text-[#15803D] border border-[#A7F3D0] px-2 py-0.5 rounded-md">
                    FOOD INTELLIGENCE
                  </span>
                </div>
                <p className="text-[11px] text-[#64746B] font-medium tracking-tight hidden sm:block">
                  Before You Eat It, Know What's In It
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links with lucide-react icons */}
            <nav className="hidden xl:flex items-center space-x-1">
              <button
                onClick={() => handleNav('home')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'home'
                    ? 'text-[#15803D] bg-[#E8F5E9] font-bold'
                    : 'text-[#4B5563] hover:text-[#15803D] hover:bg-[#F4F9F4]'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>

              <button
                onClick={() => handleNav('scanner')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'scanner' || activeTab === 'report'
                    ? 'text-[#FF7A00] bg-[#FFF3E6] font-bold'
                    : 'text-[#4B5563] hover:text-[#FF7A00] hover:bg-[#FFF3E6]/60'
                }`}
              >
                <ScanLine className="w-3.5 h-3.5" />
                <span>Scan Food</span>
              </button>

              <button
                onClick={() => handleNav('recipes')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'recipes'
                    ? 'text-[#15803D] bg-[#E8F5E9] font-bold'
                    : 'text-[#4B5563] hover:text-[#15803D] hover:bg-[#F4F9F4]'
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Recipes</span>
              </button>

              <button
                onClick={() => handleNav('alternatives')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'alternatives' || activeTab === 'compare'
                    ? 'text-[#15803D] bg-[#E8F5E9] font-bold'
                    : 'text-[#4B5563] hover:text-[#15803D] hover:bg-[#F4F9F4]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Alternatives</span>
              </button>

              <button
                onClick={() => handleNav('mealplan')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'mealplan'
                    ? 'text-[#15803D] bg-[#E8F5E9] font-bold'
                    : 'text-[#4B5563] hover:text-[#15803D] hover:bg-[#F4F9F4]'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Meal Planner</span>
              </button>

              <button
                onClick={() => handleNav('dietitians')}
                className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'dietitians'
                    ? 'text-[#15803D] bg-[#E8F5E9] font-bold'
                    : 'text-[#4B5563] hover:text-[#15803D] hover:bg-[#F4F9F4]'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5" />
                <span>Find a Dietitian</span>
              </button>

              {/* Premium ₹89 with gold/orange badge outline */}
              <button
                onClick={() => handleNav('premium')}
                className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition-colors flex items-center space-x-1.5 border ${
                  activeTab === 'premium'
                    ? 'border-[#FF7A00] bg-[#FFF3E6] text-[#FF7A00]'
                    : 'border-[#FF9B42]/50 text-[#D97706] hover:bg-[#FFF3E6]'
                }`}
              >
                <Crown className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Premium</span>
                <span className="text-[10px] bg-gradient-to-r from-amber-500 to-[#FF7A00] text-white font-extrabold px-1.5 py-0.2 rounded">
                  ₹89
                </span>
              </button>

              <button
                onClick={() => handleNav('for-dietitians')}
                className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-colors flex items-center space-x-1.5 ${
                  activeTab === 'for-dietitians'
                    ? 'border-[#15803D] bg-[#15803D] text-white shadow-xs'
                    : 'border-[#15803D]/40 text-[#15803D] hover:bg-[#E8F5E9]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>For Dietitians</span>
              </button>
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center space-x-2 sm:space-x-2.5">
              {/* Theme Toggle (Light / Dark Mode) */}
              <ThemeToggle />

              {/* Shopping Cart Icon with item count badge (lucide-react: ShoppingBag) */}
              <button
                onClick={() => handleNav('grocery')}
                className="relative p-2 text-[#4B5563] dark:text-zinc-300 hover:text-[#15803D] hover:bg-[#E8F5E9] dark:hover:bg-zinc-800 rounded-xl transition-colors"
                title="View Grocery List"
              >
                <ShoppingBag className="w-5 h-5" />
                {pendingGroceryCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FF7A00] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-xs">
                    {pendingGroceryCount}
                  </span>
                )}
              </button>

              {/* Primary CTA Button: Scan Your Food (soft vibrant orange with hover effect) */}
              <button
                onClick={() => handleNav('scanner')}
                className="hidden sm:inline-flex items-center space-x-2 bg-[#FF7A00] hover:bg-[#F26522] active:scale-95 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-[#FF7A00]/25 transition-all duration-200"
              >
                <ScanLine className="w-4 h-4" />
                <span>Scan Your Food</span>
              </button>

              {/* User profile avatar / pill button (e.g., "M" / "Mansi") */}
              {currentRole === 'user' && user ? (
                <div className="relative">
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center space-x-2 px-2.5 py-1.5 rounded-full border border-[#C8E6C9] bg-[#E8F5E9]/60 hover:bg-[#E8F5E9] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#15803D] text-white font-extrabold text-[11px] flex items-center justify-center shadow-xs">
                      {user.name.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-[#1E2922] max-w-[80px] truncate hidden md:inline-block">
                      {user.name.split(' ')[0]}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#64746B]" />
                  </button>

                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#E2E8F0] py-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                      <div className="px-3.5 py-2 border-b border-[#F1F5F9]">
                        <p className="text-xs font-bold text-[#1E2922]">{user.name}</p>
                        <p className="text-[11px] text-[#64746B] truncate">{user.email}</p>
                        <div className="mt-1 flex items-center space-x-1">
                          <span className="text-[10px] bg-[#E8F5E9] text-[#15803D] px-1.5 py-0.5 rounded font-bold">
                            {user.isPremium ? 'Premium Consumer' : 'Free Member'}
                          </span>
                          <span className="text-[10px] bg-stone-100 text-[#64746B] px-1.5 py-0.5 rounded">
                            {user.dietaryPreference}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleNav('dashboard')}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#1E2922] hover:bg-[#F4F9F4] flex items-center space-x-2"
                      >
                        <LayoutDashboard className="w-4 h-4 text-[#64746B]" />
                        <span>User Dashboard</span>
                      </button>

                      <button
                        onClick={() => handleNav('history')}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#1E2922] hover:bg-[#F4F9F4] flex items-center space-x-2"
                      >
                        <History className="w-4 h-4 text-[#64746B]" />
                        <span>Scan & Meal History</span>
                      </button>

                      <button
                        onClick={() => handleNav('profile')}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#1E2922] hover:bg-[#F4F9F4] flex items-center space-x-2"
                      >
                        <UserRound className="w-4 h-4 text-[#64746B]" />
                        <span>Dietary Preferences</span>
                      </button>

                      <div className="border-t border-[#F1F5F9] my-1" />

                      <button
                        onClick={() => {
                          logout();
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#DC2626] hover:bg-red-50 flex items-center space-x-2 font-semibold"
                      >
                        <LogOut className="w-4 h-4 text-[#DC2626]" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : currentRole === 'dietitian' && dietitian ? (
                <div className="relative">
                  <button
                    onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                    className="flex items-center space-x-2 px-2.5 py-1.5 rounded-full border border-[#15803D]/30 bg-[#E8F5E9] hover:bg-[#D1E7D4] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#15803D] text-white font-bold text-[11px] flex items-center justify-center">
                      Dr
                    </div>
                    <span className="text-xs font-bold text-[#15803D] max-w-[85px] truncate hidden md:inline-block">
                      {dietitian.name.split(' ')[0]}
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 text-[#15803D]" />
                  </button>

                  {profileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-[#E2E8F0] py-1.5 z-50">
                      <div className="px-3.5 py-2 border-b border-[#F1F5F9]">
                        <p className="text-xs font-bold text-[#1E2922]">{dietitian.name}</p>
                        <p className="text-[11px] text-[#64746B] truncate">{dietitian.qualification}</p>
                        <div className="mt-1 flex items-center space-x-1">
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded font-bold ${
                              dietitian.verificationStatus === 'Verified'
                                ? 'bg-[#E8F5E9] text-[#15803D]'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {dietitian.verificationStatus}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleNav('for-dietitians')}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#1E2922] hover:bg-[#F4F9F4] flex items-center space-x-2"
                      >
                        <LayoutDashboard className="w-4 h-4 text-[#64746B]" />
                        <span>Dietitian Portal</span>
                      </button>

                      <div className="border-t border-[#F1F5F9] my-1" />

                      <button
                        onClick={() => {
                          logout();
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#DC2626] hover:bg-red-50 flex items-center space-x-2 font-semibold"
                      >
                        <LogOut className="w-4 h-4 text-[#DC2626]" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openAuthModal('user')}
                    className="text-xs font-semibold text-[#374151] hover:text-[#15803D] px-2.5 py-1.5 rounded-lg transition-colors"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => openAuthModal('user')}
                    className="flex items-center space-x-1.5 text-xs font-bold bg-[#E8F5E9] text-[#15803D] hover:bg-[#D1E7D4] border border-[#A7F3D0] px-3 py-1.5 rounded-full transition-colors"
                  >
                    <div className="w-4 h-4 rounded-full bg-[#15803D] text-white text-[9px] flex items-center justify-center font-bold">
                      M
                    </div>
                    <span>Mansi</span>
                  </button>
                </div>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-[#374151] hover:bg-[#E8F5E9]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 space-y-2">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-3 py-2 text-xs font-bold rounded-lg text-[#1E2922] flex items-center space-x-2"
            >
              <Home className="w-4 h-4 text-[#15803D]" />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNav('scanner')}
              className="w-full text-left px-3 py-2 text-xs font-bold rounded-lg bg-[#FFF3E6] text-[#FF7A00] flex items-center space-x-2"
            >
              <ScanLine className="w-4 h-4" />
              <span>Scan Food</span>
            </button>
            <button
              onClick={() => handleNav('recipes')}
              className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg text-[#1E2922] flex items-center space-x-2"
            >
              <Utensils className="w-4 h-4 text-[#15803D]" />
              <span>AI Recipes</span>
            </button>
            <button
              onClick={() => handleNav('alternatives')}
              className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg text-[#1E2922] flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-[#15803D]" />
              <span>Alternatives</span>
            </button>
            <button
              onClick={() => handleNav('mealplan')}
              className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg text-[#1E2922] flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4 text-[#15803D]" />
              <span>Meal Planner</span>
            </button>
            <button
              onClick={() => handleNav('dietitians')}
              className="w-full text-left px-3 py-2 text-xs font-semibold rounded-lg text-[#1E2922] flex items-center space-x-2"
            >
              <Stethoscope className="w-4 h-4 text-[#15803D]" />
              <span>Find a Dietitian</span>
            </button>
            <button
              onClick={() => handleNav('premium')}
              className="w-full text-left px-3 py-2 text-xs font-bold rounded-lg text-[#FF7A00] bg-[#FFF3E6] flex items-center space-x-2"
            >
              <Crown className="w-4 h-4 text-[#FF7A00]" />
              <span>Premium Plan (₹89/mo)</span>
            </button>
            <button
              onClick={() => handleNav('for-dietitians')}
              className="w-full text-left px-3 py-2 text-xs font-bold rounded-lg bg-[#15803D] text-white flex items-center space-x-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>For Dietitians Portal</span>
            </button>

            {user && (
              <div className="pt-2 border-t border-[#E2E8F0]">
                <button
                  onClick={() => handleNav('dashboard')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold text-[#1E2922] flex items-center space-x-2"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>My Dashboard</span>
                </button>
                <button
                  onClick={() => handleNav('history')}
                  className="w-full text-left px-3 py-2 text-xs font-semibold text-[#1E2922] flex items-center space-x-2"
                >
                  <History className="w-4 h-4" />
                  <span>Scan History</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

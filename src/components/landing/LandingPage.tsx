import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { GlareCard } from '@/components/ui/glare-cards';
import { Button } from '@/components/ui/button';
import { Component as ProfileButtonDemo } from '@/components/demo';
import {
  ScanLine,
  Utensils,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  HeartPulse,
  AlertTriangle,
  ArrowRight,
  Users,
  Crown,
  FileSearch,
  Scale,
  Award,
  ChevronRight,
  Flame,
  Candy,
  Waves,
  Apple,
  Camera,
  Check,
  Maximize2,
  QrCode,
  Barcode,
  Sparkle,
  Zap,
  Info,
  ExternalLink,
  Smartphone,
  Activity,
  Layers,
  Calendar,
  Stethoscope,
} from 'lucide-react';
import { SAMPLE_PRODUCTS } from '../../data/mockData';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

const chartData = [
  { time: '00:00', value: 45 },
  { time: '04:00', value: 52 },
  { time: '08:00', value: 48 },
  { time: '12:00', value: 70 },
  { time: '16:00', value: 61 },
  { time: '20:00', value: 85 },
  { time: '23:59', value: 99 },
];

export const LandingPage: React.FC = () => {
  const { setActiveTab, setActiveScan } = useApp();

  const [activeMobileTab, setActiveMobileTab] = useState<'center' | 'scanner' | 'insights'>('center');
  const sampleCard = SAMPLE_PRODUCTS[0]; // Kurkure Masala Munch

  const handleTestScan = (product = sampleCard) => {
    setActiveScan(product);
    setActiveTab('report');
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGlareShowcase = () => {
    const el = document.getElementById('glare-showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 transition-colors duration-300">
      {/* 1. HERO SECTION WITH RADIAL GREEN GLOW & 3D MOBILE SHOWCASE */}
      <section className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-24 border-b border-[#E2E8F0]/70 dark:border-emerald-950/60">
        {/* Soft green radial spotlight canvas background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 green-spotlight-radial pointer-events-none opacity-80 dark:opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute -top-40 right-1/4 w-[650px] h-[650px] bg-gradient-to-br from-emerald-200/40 via-green-100/30 dark:from-emerald-900/20 dark:via-emerald-950/20 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Side: Content & CTAs */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left z-10">
              {/* Top micro-tag & Demo Profile Badge */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center space-x-2 bg-[#E8F5E9] dark:bg-emerald-950/60 text-[#15803D] dark:text-emerald-400 border border-[#A7F3D0] dark:border-emerald-800/60 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#15803D] dark:text-emerald-400" />
                  <span>India's Food Intelligence Platform</span>
                </div>
                <ProfileButtonDemo />
              </div>

              {/* Bold Impactful Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#1E2922] dark:text-white tracking-tight leading-[1.12]">
                Before You Eat It, <br className="hidden sm:inline" />
                <span className="text-[#FF7A00]">Know What's In It.</span>
              </h1>

              {/* Sub-headline / Paragraph */}
              <p className="text-base sm:text-lg text-[#64746B] dark:text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                WhatsInIt empowers Indian families to decode packaged food labels in seconds. Understand hidden sugars in level teaspoons, audit marketing claims against FSSAI standards, and swap ultra-processed snacks for wholesome alternatives.
              </p>

              {/* Primary Buttons / CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setActiveTab('scanner')}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#FF7A00] hover:bg-[#F26522] text-white text-sm font-bold rounded-xl shadow-lg shadow-[#FF7A00]/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2.5 active:scale-95 cursor-pointer"
                >
                  <ScanLine className="w-4 h-4" />
                  <span>Scan Your Food</span>
                </button>

                <button
                  onClick={scrollToHowItWorks}
                  className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-zinc-900 hover:bg-[#F4F9F4] dark:hover:bg-zinc-800 text-[#1E2922] dark:text-white text-sm font-bold rounded-xl border border-[#CBD5E1] dark:border-zinc-700 shadow-2xs transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Explore How It Works</span>
                  <ChevronRight className="w-4 h-4 text-[#64746B] dark:text-zinc-400" />
                </button>
              </div>

              {/* Feature Trust Badges (Horizontal Row below CTAs) */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-semibold text-[#1E2922] dark:text-zinc-200">
                <div className="flex items-center space-x-1.5 bg-white/95 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-[#C8E6C9] dark:border-emerald-800/40 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] dark:text-emerald-400" />
                  <span>Real-Time AI Image Scanning</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white/95 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-[#C8E6C9] dark:border-emerald-800/40 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#15803D] dark:text-emerald-400" />
                  <span>FSSAI Regulations 2018 Grounded</span>
                </div>
                <div className="flex items-center space-x-1.5 bg-white/95 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-[#C8E6C9] dark:border-emerald-800/40 shadow-2xs">
                  <HeartPulse className="w-4 h-4 text-[#15803D] dark:text-emerald-400" />
                  <span>Simple Nutrition Insights</span>
                </div>
              </div>
            </div>

            {/* Right Side: High-Fidelity Floating 3D Mobile Phone Frames & Showcase */}
            <div className="lg:col-span-7 relative">
              {/* Responsive Selector for Small Screens (<lg) */}
              <div className="flex lg:hidden justify-center space-x-2 mb-4">
                <button
                  onClick={() => setActiveMobileTab('scanner')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                    activeMobileTab === 'scanner'
                      ? 'bg-[#15803D] text-white'
                      : 'bg-white dark:bg-zinc-900 text-[#64746B] dark:text-zinc-400 border border-[#CBD5E1] dark:border-zinc-800'
                  }`}
                >
                  1. Live Scanner
                </button>
                <button
                  onClick={() => setActiveMobileTab('center')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                    activeMobileTab === 'center'
                      ? 'bg-[#FF7A00] text-white'
                      : 'bg-white dark:bg-zinc-900 text-[#64746B] dark:text-zinc-400 border border-[#CBD5E1] dark:border-zinc-800'
                  }`}
                >
                  2. AI Analysis Result
                </button>
                <button
                  onClick={() => setActiveMobileTab('insights')}
                  className={`px-3 py-1 text-xs font-bold rounded-full transition-colors ${
                    activeMobileTab === 'insights'
                      ? 'bg-[#15803D] text-white'
                      : 'bg-white dark:bg-zinc-900 text-[#64746B] dark:text-zinc-400 border border-[#CBD5E1] dark:border-zinc-800'
                  }`}
                >
                  3. Health Warnings
                </button>
              </div>

              {/* 3D Showcase Container */}
              <div className="relative min-h-[580px] sm:min-h-[620px] flex items-center justify-center">
                {/* Background Ambient Glow Disc */}
                <div className="absolute w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-emerald-200/50 via-green-100/40 dark:from-emerald-950/60 dark:via-zinc-900/50 to-amber-100/30 blur-2xl -z-10" />

                {/* ---------------------------------------------------- */}
                {/* PHONE 1 (Left - Camera Scanner Viewfinder)           */}
                {/* ---------------------------------------------------- */}
                <div
                  className={`phone-mockup-frame absolute lg:left-0 z-10 w-[260px] sm:w-[280px] bg-[#111827] rounded-[38px] p-3 text-white border-4 border-slate-700/60 shadow-2xl transition-all duration-300 ${
                    activeMobileTab === 'scanner'
                      ? 'relative scale-100 opacity-100 block'
                      : 'hidden lg:block lg:-rotate-6 lg:scale-90 lg:hover:scale-95 lg:hover:-rotate-3 lg:hover:z-30'
                  }`}
                >
                  {/* Top Notch / Dynamic Island */}
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-4 bg-black rounded-full flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 rounded-full bg-slate-800" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                    </div>
                  </div>

                  {/* Status row */}
                  <div className="flex justify-between items-center text-[10px] text-slate-400 px-2 mb-2 font-mono">
                    <span>09:41</span>
                    <div className="flex items-center space-x-1.5">
                      <span>5G</span>
                      <div className="w-4 h-2 rounded-xs border border-slate-400 p-0.5 flex items-center">
                        <div className="w-full h-full bg-slate-300" />
                      </div>
                    </div>
                  </div>

                  {/* Camera Viewfinder Screen */}
                  <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 aspect-9/16 overflow-hidden flex flex-col justify-between p-3.5">
                    {/* Viewfinder Header */}
                    <div className="flex items-center justify-between text-[10px] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      <span className="flex items-center space-x-1 text-emerald-400 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live Scan Active</span>
                      </span>
                      <span className="text-slate-300 text-[9px]">Rear Macro Lens</span>
                    </div>

                    {/* Reticle Focus & Barcode Target Frame */}
                    <div className="relative border-2 border-dashed border-[#FF7A00] rounded-xl p-4 my-auto h-40 flex flex-col items-center justify-center text-center">
                      {/* Animated Laser Scanning Beam */}
                      <div className="absolute inset-x-2 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent shadow-[0_0_10px_#FF7A00] animate-pulse" />

                      {/* Corner Target Indicators */}
                      <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#FF7A00]" />
                      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#FF7A00]" />
                      <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#FF7A00]" />
                      <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#FF7A00]" />

                      {/* Barcode graphic simulation */}
                      <Barcode className="w-12 h-12 text-white/80 opacity-70" />
                      <p className="text-[10px] text-white font-bold mt-1 bg-black/70 px-2 py-0.5 rounded">
                        Scan Barcode / Align Label
                      </p>
                      <p className="text-[8px] text-slate-300 mt-0.5">8901491101837</p>
                    </div>

                    {/* Camera Controls */}
                    <div className="pt-2 text-center">
                      <div className="flex items-center justify-around mb-2 text-[10px] text-slate-300">
                        <span>Flash: Auto</span>
                        <span>HDR: On</span>
                        <span>1x</span>
                      </div>
                      <div className="w-11 h-11 mx-auto rounded-full border-2 border-white flex items-center justify-center bg-[#FF7A00]/90">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">
                    1. Mobile Camera Scanner
                  </p>
                </div>

                {/* ---------------------------------------------------- */}
                {/* PHONE 2 (Center / Front - Analysis Result Screen)    */}
                {/* ---------------------------------------------------- */}
                <div
                  className={`phone-mockup-frame z-20 w-[310px] sm:w-[330px] bg-white dark:bg-zinc-950 rounded-[40px] p-3 text-[#1E2922] dark:text-zinc-100 border-[5px] border-slate-800 dark:border-zinc-700 shadow-2xl transition-all duration-300 ${
                    activeMobileTab === 'center'
                      ? 'relative scale-100 opacity-100 block'
                      : 'hidden lg:block lg:scale-100'
                  }`}
                >
                  {/* Dynamic Island / Top Speaker */}
                  <div className="flex justify-center mb-1.5">
                    <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-between px-2.5">
                      <div className="w-2 h-2 rounded-full bg-slate-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-zinc-400 px-3 mb-1 font-mono">
                    <span className="font-bold">09:41</span>
                    <div className="flex items-center space-x-1.5">
                      <span>5G</span>
                      <div className="w-4 h-2 rounded-xs border border-slate-500 p-0.5 flex items-center">
                        <div className="w-full h-full bg-slate-700 dark:bg-zinc-400" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Content Container */}
                  <div className="rounded-2xl bg-[#F4F9F4] dark:bg-zinc-900/90 p-3.5 border border-[#C8E6C9] dark:border-emerald-800/40 space-y-3">
                    {/* Header: AI Food Vision Scanner | FSSAI License */}
                    <div className="flex items-center justify-between border-b border-[#E2E8F0] dark:border-zinc-800 pb-2">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#15803D] animate-pulse" />
                        <span className="text-[11px] font-extrabold text-[#1E2922] dark:text-white">
                          AI Food Vision Scanner
                        </span>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-[#FF7A00] bg-[#FFF3E6] dark:bg-orange-950/60 border border-[#FF9B42]/30 px-2 py-0.5 rounded">
                        FSSAI 10014022002789
                      </span>
                    </div>

                    {/* Product Card: Kurkure Masala Munch (PepsiCo India • 30g serving) | 168 kcal */}
                    <div className="p-3 bg-white dark:bg-zinc-800/90 rounded-xl border border-[#C8E6C9] dark:border-zinc-700 shadow-2xs">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-[#15803D] dark:text-emerald-400 bg-[#E8F5E9] dark:bg-emerald-950/80 px-2 py-0.5 rounded">
                            Indian Namkeen / Snack
                          </span>
                          <h4 className="text-sm font-extrabold text-[#1E2922] dark:text-white mt-1">
                            Kurkure Masala Munch
                          </h4>
                          <p className="text-[11px] text-[#64746B] dark:text-zinc-400">PepsiCo India • 30g serving</p>
                        </div>
                        <span className="text-xs font-black bg-[#FFF3E6] dark:bg-orange-950/80 text-[#FF7A00] border border-[#FF9B42]/40 px-2 py-1 rounded-lg">
                          168 kcal
                        </span>
                      </div>
                    </div>

                    {/* Key Metrics Row (Sodium, Sugar, Sat Fat) */}
                    <div className="grid grid-cols-3 gap-1.5 text-center">
                      <div className="bg-white dark:bg-zinc-800/80 p-2 rounded-xl border border-[#E2E8F0] dark:border-zinc-700 shadow-2xs">
                        <div className="flex items-center justify-center space-x-1 text-[9px] text-[#64746B] dark:text-zinc-400">
                          <Waves className="w-3 h-3 text-[#D97706]" />
                          <span className="font-semibold">Sodium</span>
                        </div>
                        <span className="text-xs font-extrabold text-[#1E2922] dark:text-white block mt-0.5">
                          280 mg
                        </span>
                        <span className="text-[8px] text-[#64746B] dark:text-zinc-400 block">~0.7g salt equiv</span>
                      </div>

                      <div className="bg-white dark:bg-zinc-800/80 p-2 rounded-xl border border-[#E2E8F0] dark:border-zinc-700 shadow-2xs">
                        <div className="flex items-center justify-center space-x-1 text-[9px] text-[#64746B] dark:text-zinc-400">
                          <Candy className="w-3 h-3 text-[#FF7A00]" />
                          <span className="font-semibold">Sugar</span>
                        </div>
                        <span className="text-xs font-extrabold text-[#1E2922] dark:text-white block mt-0.5">
                          1.8 g
                        </span>
                        <span className="text-[8px] text-[#64746B] dark:text-zinc-400 block">~0.45 tsp</span>
                      </div>

                      <div className="bg-white dark:bg-zinc-800/80 p-2 rounded-xl border border-[#E2E8F0] dark:border-zinc-700 shadow-2xs">
                        <div className="flex items-center justify-center space-x-1 text-[9px] text-[#64746B] dark:text-zinc-400">
                          <Apple className="w-3 h-3 text-[#15803D] dark:text-emerald-400" />
                          <span className="font-semibold">Sat Fat</span>
                        </div>
                        <span className="text-xs font-extrabold text-[#1E2922] dark:text-white block mt-0.5">
                          4.8 g
                        </span>
                        <span className="text-[8px] text-[#15803D] dark:text-emerald-400 block font-semibold">Palm oil used</span>
                      </div>
                    </div>

                    {/* FSSAI Claim Audit Box */}
                    <div className="p-2.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-300/80 dark:border-amber-800 text-[11px] text-amber-950 dark:text-amber-200 space-y-0.5">
                      <div className="flex items-center space-x-1.5 font-bold text-amber-900 dark:text-amber-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                        <span>FSSAI Claim Check: "Made with Dal & Corn"</span>
                      </div>
                      <p className="text-[10px] text-amber-900/90 dark:text-amber-200/90 leading-tight">
                        <strong className="text-amber-950 dark:text-amber-100">Potential Mismatch:</strong> Ingredients list shows Rice Meal (43%) first, whereas Gram Dal is merely 3%.
                      </p>
                    </div>

                    {/* Healthier Swap Card */}
                    <div className="p-2.5 bg-[#E8F5E9] dark:bg-emerald-950/60 rounded-xl border border-[#A7F3D0] dark:border-emerald-800/50 flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">🥣</span>
                        <div>
                          <span className="text-[10px] font-bold text-[#15803D] dark:text-emerald-400 block">
                            Healthier Swap:
                          </span>
                          <span className="text-[11px] font-bold text-[#1E2922] dark:text-white">
                            Roasted Makhana (80% less sat fat)
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleTestScan()}
                        className="text-[11px] font-extrabold text-[#15803D] dark:text-emerald-400 hover:underline flex items-center space-x-0.5 shrink-0"
                      >
                        <span>Explore &gt;</span>
                      </button>
                    </div>

                    {/* Floating Action Banner at bottom */}
                    <div className="pt-0.5 space-y-1.5">
                      <button
                        onClick={() => handleTestScan()}
                        className="w-full py-2.5 bg-[#FF7A00] hover:bg-[#F26522] active:scale-95 text-white text-xs font-bold rounded-xl shadow-md shadow-[#FF7A00]/25 transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                      >
                        <span>View Full Intelligence Report →</span>
                      </button>

                      {/* Floating AI Nutrition Guide Button */}
                      <div className="flex justify-end">
                        <div className="inline-flex items-center space-x-1 bg-[#FFF3E6] dark:bg-orange-950/60 text-[#FF7A00] border border-[#FF9B42]/40 px-2.5 py-1 rounded-full text-[10px] font-extrabold shadow-2xs">
                          <Sparkles className="w-3 h-3 text-[#FF7A00]" />
                          <span>AI Nutrition Guide</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-[10px] text-slate-500 dark:text-zinc-400 mt-2 font-bold">
                    2. AI Food Vision Scanner Result
                  </p>
                </div>

                {/* ---------------------------------------------------- */}
                {/* PHONE 3 (Right - Insights & Alternatives Screen)     */}
                {/* ---------------------------------------------------- */}
                <div
                  className={`phone-mockup-frame absolute lg:right-0 z-10 w-[260px] sm:w-[280px] bg-white dark:bg-zinc-950 rounded-[38px] p-3 text-[#1E2922] dark:text-zinc-100 border-4 border-slate-700/60 shadow-2xl transition-all duration-300 ${
                    activeMobileTab === 'insights'
                      ? 'relative scale-100 opacity-100 block'
                      : 'hidden lg:block lg:rotate-6 lg:scale-90 lg:hover:scale-95 lg:hover:rotate-3 lg:hover:z-30'
                  }`}
                >
                  {/* Top Notch */}
                  <div className="flex justify-center mb-2">
                    <div className="w-20 h-4 bg-slate-900 rounded-full flex items-center justify-center space-x-1">
                      <div className="w-2 h-2 rounded-full bg-slate-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    </div>
                  </div>

                  {/* Status row */}
                  <div className="flex justify-between items-center text-[10px] text-slate-500 dark:text-zinc-400 px-2 mb-2 font-mono">
                    <span>09:41</span>
                    <div className="flex items-center space-x-1.5">
                      <span>5G</span>
                      <div className="w-4 h-2 rounded-xs border border-slate-400 p-0.5 flex items-center">
                        <div className="w-full h-full bg-slate-600" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Content */}
                  <div className="rounded-2xl bg-[#F4F9F4] dark:bg-zinc-900/90 p-3 border border-[#C8E6C9] dark:border-emerald-800/40 space-y-2.5">
                    <div className="border-b border-[#E2E8F0] dark:border-zinc-800 pb-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#15803D] dark:text-emerald-400">
                        Food Quality & Warnings
                      </span>
                      <h4 className="text-xs font-extrabold text-[#1E2922] dark:text-white">Health Flags Detected</h4>
                    </div>

                    {/* Warning Chips */}
                    <div className="space-y-1.5 text-[10px]">
                      <div className="p-2 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-900/40 flex items-center space-x-1.5 font-bold">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>High in Sodium (280mg per 30g)</span>
                      </div>

                      <div className="p-2 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 rounded-lg border border-amber-200 dark:border-amber-900/40 flex items-center space-x-1.5 font-bold">
                        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>Contains Refined Palm Oil</span>
                      </div>

                      <div className="p-2 bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-300 rounded-lg border border-slate-200 dark:border-zinc-700 flex items-center space-x-1.5 font-medium">
                        <span>ℹ️</span>
                        <span>INS 627, 631 Flavour Enhancers</span>
                      </div>
                    </div>

                    {/* Wholesome Swaps */}
                    <div className="pt-1 space-y-1.5">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#15803D] dark:text-emerald-400 block">
                        Suggested Clean Swaps
                      </span>

                      <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg border border-[#C8E6C9] dark:border-zinc-700 flex items-center justify-between text-[10px]">
                        <div>
                          <span className="font-extrabold text-[#1E2922] dark:text-white block">Roasted Makhana</span>
                          <span className="text-[9px] text-[#15803D] dark:text-emerald-400">80% less sat fat • No palm oil</span>
                        </div>
                        <span className="text-xs">🥣</span>
                      </div>

                      <div className="p-2 bg-white dark:bg-zinc-800 rounded-lg border border-[#C8E6C9] dark:border-zinc-700 flex items-center justify-between text-[10px]">
                        <div>
                          <span className="font-extrabold text-[#1E2922] dark:text-white block">Baked Wheat Khakhra</span>
                          <span className="text-[9px] text-[#15803D] dark:text-emerald-400">High dietary fiber • 100% Atta</span>
                        </div>
                        <span className="text-xs">🌾</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTab('alternatives')}
                      className="w-full py-2 bg-[#15803D] hover:bg-[#166534] text-white text-[10px] font-bold rounded-lg transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <span>Compare All Alternatives &gt;</span>
                    </button>
                  </div>

                  <p className="text-center text-[10px] text-slate-500 dark:text-zinc-400 mt-2 font-medium">
                    3. Insights & Alternatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------------- */}
      {/* 2. INTERACTIVE GLARE CARDS SHOWCASE (framer-motion + recharts + glare-cards) */}
      {/* -------------------------------------------------------------------------- */}
      <section id="glare-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1E2922] dark:text-white tracking-tight">
            Next-Gen Indian Food Analytics & Nutrition Care
          </h2>
        </div>

        {/* 3 Interactive Glare Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* Card 1: FSSAI Audit & Nutrition Analysis */}
          <GlareCard
            tiltIntensity={12}
            glareColor="rgba(242, 101, 34, 0.28)"
            className="flex flex-col h-[460px] bg-white/90 dark:bg-zinc-900/80 border border-orange-200 dark:border-orange-900/40 p-7 shadow-xl backdrop-blur-xl"
          >
            <div className="flex justify-between items-start mb-auto">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                  <Activity size={18} />
                  <span className="text-xs font-mono uppercase tracking-widest font-bold">FSSAI Audit</span>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">Kurkure Masala Munch</h3>
                  <p className="text-xs text-[#64746B] dark:text-zinc-400 mt-0.5">PepsiCo India • 30g serving</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 border border-orange-300 dark:border-orange-800">
                168 kcal
              </span>
            </div>

            <div className="h-44 w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorValOrangeLanding" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#F26522" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#F26522" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#18181b',
                      border: '1px solid #3f3f46',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                    itemStyle={{ color: '#F26522' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#F26522"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValOrangeLanding)"
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <button
              onClick={() => handleTestScan()}
              className="mt-4 w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>Inspect Full OCR & Nutrition Table</span>
              <ArrowRight size={14} />
            </button>
          </GlareCard>

          {/* Card 2: Product Showcase & Healthy Swap */}
          <GlareCard
            tiltIntensity={16}
            glareColor="rgba(34, 164, 71, 0.35)"
            className="h-[460px] p-0 overflow-hidden group border border-emerald-300/80 dark:border-emerald-700/40 relative rounded-2xl shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000"
              alt="Healthy Organic Salad & Swaps"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 z-20 p-7 flex flex-col justify-end">
              <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                  <ShieldCheck size={16} /> FSSAI Verified Swap
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Roasted Makhana</h3>
                <p className="text-emerald-100 text-xs sm:text-sm mb-4 leading-relaxed">
                  Swap high-sodium palm oil snacks with 80% less saturated fat wholesome Indian superfood.
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-emerald-400/30">
                  <span className="text-xs text-emerald-300 font-bold">Explore Clean Alternatives</span>
                  <button
                    onClick={() => setActiveTab('alternatives')}
                    className="p-2 rounded-full bg-emerald-500/80 hover:bg-emerald-500 text-white cursor-pointer"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </GlareCard>

          {/* Card 3: Verified Dietitian Consultation with Real Image & Interactive Effects */}
          <GlareCard
            tiltIntensity={16}
            glareColor="rgba(242, 101, 34, 0.35)"
            className="h-[460px] p-0 overflow-hidden group border border-orange-300/80 dark:border-orange-500/30 relative rounded-2xl shadow-xl"
          >
            {/* Background Dark Gradient Overlay for optimal text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/20 z-10" />

            {/* Real Doctor / Dietitian Image from Unsplash */}
            <img
              src="https://images.unsplash.com/photo-1594824813628-984213768138?auto=format&fit=crop&q=80&w=800"
              alt="Dr. Ananya Sharma, Registered Dietitian"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
            />

            {/* Floating Top Status Badges */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/90 text-white backdrop-blur-md shadow-md">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>Verified IDA Dietitian</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/60 text-emerald-300 backdrop-blur-md border border-emerald-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available Today</span>
              </span>
            </div>

            {/* Bottom Card Content */}
            <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
              <div className="space-y-2.5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider font-bold">
                      Clinical Nutritionist
                    </span>
                    <span className="text-[10px] text-zinc-300 bg-white/10 px-2 py-0.5 rounded-full">
                      ★ 4.9 (140+ reviews)
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    Dr. Ananya Sharma, RD
                  </h3>
                  <p className="text-xs text-zinc-200 mt-0.5 font-medium">
                    M.Sc. Clinical Nutrition • 9+ Yrs Hospital Exp
                  </p>
                </div>

                {/* Specialization Chips */}
                <div className="flex flex-wrap gap-1.5 py-1">
                  <span className="text-[10px] font-medium text-emerald-200 bg-emerald-950/70 border border-emerald-400/30 px-2 py-0.5 rounded">
                    Diabetes Reversal
                  </span>
                  <span className="text-[10px] font-medium text-orange-200 bg-orange-950/70 border border-orange-400/30 px-2 py-0.5 rounded">
                    PCOS & Hormones
                  </span>
                  <span className="text-[10px] font-medium text-zinc-200 bg-zinc-800/80 border border-zinc-600/40 px-2 py-0.5 rounded">
                    Gut Health
                  </span>
                </div>

                {/* Pricing & Booking CTA */}
                <div className="pt-2.5 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-zinc-400 block uppercase font-mono">1-on-1 Consultation</span>
                    <span className="text-sm font-extrabold text-white">₹799 <span className="text-[10px] font-normal text-zinc-300">/ session</span></span>
                  </div>
                  <button
                    onClick={() => setActiveTab('dietitians')}
                    className="px-3.5 py-2 rounded-xl bg-[#FF7A00] hover:bg-[#F26522] text-white text-xs font-bold transition-all flex items-center space-x-1.5 shadow-lg shadow-orange-500/30 group-hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </GlareCard>
        </div>
      </section>

      {/* 3. SECTION: HOW IT WORKS (STEP-BY-STEP TRANSPARENCY) */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#E8F5E9] dark:bg-emerald-950/60 text-[#15803D] dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#A7F3D0] dark:border-emerald-800/50">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Step-by-Step Transparency</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2922] dark:text-white tracking-tight">
            How WhatsInIt Works
          </h2>
          <p className="text-xs sm:text-sm text-[#64746B] dark:text-zinc-300 mt-1.5">
            From capturing a back-of-pack photo to personalized Indian diet swaps in under 10 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <GlareCard
            tiltIntensity={10}
            glareColor="rgba(255, 122, 0, 0.25)"
            className="p-6 rounded-2xl border border-orange-200/80 dark:border-orange-800/40 bg-white/95 dark:bg-zinc-900/90 shadow-md hover:shadow-xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFF3E6] dark:bg-orange-950/60 text-[#FF7A00] font-extrabold flex items-center justify-center text-sm border border-[#FF9B42]/30">
              01
            </div>
            <h3 className="text-sm font-bold text-[#1E2922] dark:text-white">Scan or Upload Label</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Use your smartphone camera or upload an image of the nutrition table and ingredients list.
            </p>
          </GlareCard>

          {/* Step 2 */}
          <GlareCard
            tiltIntensity={10}
            glareColor="rgba(34, 164, 71, 0.25)"
            className="p-6 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40 bg-white/95 dark:bg-zinc-900/90 shadow-md hover:shadow-xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] dark:bg-emerald-950/60 text-[#15803D] dark:text-emerald-400 font-extrabold flex items-center justify-center text-sm border border-emerald-300/40">
              02
            </div>
            <h3 className="text-sm font-bold text-[#1E2922] dark:text-white">Review Extracted OCR</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Verify numbers before analysis. Nothing is fabricated or guessed; you inspect the evidence.
            </p>
          </GlareCard>

          {/* Step 3 */}
          <GlareCard
            tiltIntensity={10}
            glareColor="rgba(255, 122, 0, 0.25)"
            className="p-6 rounded-2xl border border-orange-200/80 dark:border-orange-800/40 bg-white/95 dark:bg-zinc-900/90 shadow-md hover:shadow-xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#FFF3E6] dark:bg-orange-950/60 text-[#FF7A00] font-extrabold flex items-center justify-center text-sm border border-[#FF9B42]/30">
              03
            </div>
            <h3 className="text-sm font-bold text-[#1E2922] dark:text-white">Plain-Language Analysis</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Understand sugars in level teaspoons, sodium in salt equivalents, and check marketing claims against FSSAI.
            </p>
          </GlareCard>

          {/* Step 4 */}
          <GlareCard
            tiltIntensity={10}
            glareColor="rgba(34, 164, 71, 0.25)"
            className="p-6 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40 bg-white/95 dark:bg-zinc-900/90 shadow-md hover:shadow-xl space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] dark:bg-emerald-950/60 text-[#15803D] dark:text-emerald-400 font-extrabold flex items-center justify-center text-sm border border-emerald-300/40">
              04
            </div>
            <h3 className="text-sm font-bold text-[#1E2922] dark:text-white">Smart Swaps & Recipes</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Discover cleaner Indian alternatives, generate budget-friendly recipes, or book verified dietitians.
            </p>
          </GlareCard>
        </div>
      </section>

      {/* 4. SECTION: CORE PILLARS & FEATURES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#FFF0E3] dark:bg-orange-950/60 text-[#FF7A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-2 border border-[#FF9B42]/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>All-In-One Platform</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2922] dark:text-white tracking-tight">
            Designed for Modern Indian Food Realities
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] dark:text-zinc-300 mt-1.5">
            Transparent food science for conscious households, students, and practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: FSSAI Claim Verification */}
          <GlareCard
            tiltIntensity={12}
            glareColor="rgba(34, 164, 71, 0.28)"
            className="p-7 rounded-2xl border border-emerald-300/80 dark:border-emerald-600/50 bg-white/95 dark:bg-zinc-900/90 shadow-lg hover:shadow-2xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/90 text-[#15803D] dark:text-emerald-400 flex items-center justify-center border border-emerald-300/60 dark:border-emerald-700/60 mb-4 shadow-xs">
                <FileSearch className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1E2922] dark:text-white leading-snug">
                FSSAI Claim Verification
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2.5">
                We audit claims like &quot;High Protein&quot;, &quot;No Added Sugar&quot;, and &quot;100% Whole Wheat&quot; against the exact descending ingredient order and statutory thresholds.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                  Statutory Audits
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                  False Claims Flagged
                </span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => setActiveTab('claims')}
                className="text-xs text-[#FF7A00] hover:text-[#F26522] font-bold flex items-center space-x-1 cursor-pointer group"
              >
                <span>Explore Claim Engine</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </GlareCard>

          {/* Pillar 2: Healthier Indian Alternatives */}
          <GlareCard
            tiltIntensity={12}
            glareColor="rgba(255, 122, 0, 0.28)"
            className="p-7 rounded-2xl border border-orange-300/80 dark:border-orange-600/50 bg-white/95 dark:bg-zinc-900/90 shadow-lg hover:shadow-2xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF0E3] dark:bg-orange-950/90 text-[#FF7A00] dark:text-orange-400 flex items-center justify-center border border-orange-300/60 dark:border-orange-700/60 mb-4 shadow-xs">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1E2922] dark:text-white leading-snug">
                Healthier Indian Alternatives
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2.5">
                Swap fried namkeen for roasted makhana or bhuna chana. Compare prices, sodium density, and protein on normalized 100g charts with zero palm oil.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/60 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-800/40">
                  80% Less Sat Fat
                </span>
                <span className="text-[10px] font-semibold text-orange-700 dark:text-orange-300 bg-orange-50 dark:bg-orange-950/60 px-2 py-0.5 rounded border border-orange-200 dark:border-orange-800/40">
                  Clean Indian Superfoods
                </span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => setActiveTab('alternatives')}
                className="text-xs text-[#FF7A00] hover:text-[#F26522] font-bold flex items-center space-x-1 cursor-pointer group"
              >
                <span>View Product Comparisons</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </GlareCard>

          {/* Pillar 3: Dietitian Consultation */}
          <GlareCard
            tiltIntensity={12}
            glareColor="rgba(34, 164, 71, 0.28)"
            className="p-7 rounded-2xl border border-emerald-300/80 dark:border-emerald-600/50 bg-white/95 dark:bg-zinc-900/90 shadow-lg hover:shadow-2xl backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/90 text-[#15803D] dark:text-emerald-400 flex items-center justify-center border border-emerald-300/60 dark:border-emerald-700/60 mb-4 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#1E2922] dark:text-white leading-snug">
                Dietitian Consultation
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed mt-2.5">
                Connect directly with verified clinical dietitians (IDA members) specializing in Diabetes reversal, PCOS balance, heart health, and sports nutrition.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                  IDA Registered
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800/40">
                  1-on-1 Video Calls
                </span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={() => setActiveTab('dietitians')}
                className="text-xs text-[#FF7A00] hover:text-[#F26522] font-bold flex items-center space-x-1 cursor-pointer group"
              >
                <span>Find a Dietitian</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </GlareCard>
        </div>
      </section>

      {/* 5. SECTION: POPULAR INDIAN PRODUCTS DEMO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803D] dark:text-emerald-400 bg-[#E8F5E9] dark:bg-emerald-950/60 px-2.5 py-0.5 rounded border border-[#A7F3D0] dark:border-emerald-800/50">
              Instant Live Showcase
            </span>
            <h2 className="text-xl font-extrabold text-[#1E2922] dark:text-white mt-1">
              Analyze Common Indian Pantry Staples
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('scanner')}
            className="text-xs text-[#FF7A00] font-bold hover:underline flex items-center space-x-1 cursor-pointer"
          >
            <span>Scan custom product</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PRODUCTS.map((prod, index) => {
            const isOrangeAccent = index % 2 === 0;
            const glareTint = isOrangeAccent
              ? "rgba(242, 101, 34, 0.28)"
              : "rgba(34, 164, 71, 0.28)";

            return (
              <GlareCard
                key={prod.id}
                onClick={() => handleTestScan(prod)}
                tiltIntensity={12}
                glareColor={glareTint}
                className="h-full bg-white/90 dark:bg-zinc-900/80 border border-emerald-200/80 dark:border-emerald-800/40 p-6 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Top Category & FSSAI Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-[#15803D] dark:text-emerald-400 bg-[#E8F5E9] dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-[#A7F3D0] dark:border-emerald-800/40 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#22A447]" />
                      <span>{prod.category}</span>
                    </span>
                    <span className="text-[10px] text-[#64746B] dark:text-zinc-400 font-mono bg-zinc-100/80 dark:bg-zinc-800/70 px-2 py-0.5 rounded">
                      FSSAI: {prod.fssaiLicenseNumber.substring(0, 7)}...
                    </span>
                  </div>

                  {/* Product Title & Brand */}
                  <div className="mt-4">
                    <h4 className="text-base font-bold text-[#1E2922] dark:text-white group-hover:text-[#FF7A00] transition-colors leading-snug">
                      {prod.productName}
                    </h4>
                    <p className="text-xs text-[#64746B] dark:text-zinc-400 mt-0.5">
                      {prod.brand} • <span className="font-medium text-zinc-500 dark:text-zinc-400">{prod.servingSize}</span>
                    </p>
                  </div>

                  {/* Nutrition Metric Pills Grid */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="bg-[#FFF0E3]/70 dark:bg-orange-950/30 p-2.5 rounded-xl border border-orange-200/60 dark:border-orange-900/40 text-center">
                      <div className="flex items-center justify-center text-[#FF7A00] mb-0.5">
                        <Flame className="w-3.5 h-3.5 mr-0.5" />
                        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Calories</span>
                      </div>
                      <div className="text-xs font-bold text-[#1E2922] dark:text-zinc-100">
                        {prod.nutritionSnapshot.energyKcal} <span className="text-[10px] font-normal text-zinc-500">kcal</span>
                      </div>
                    </div>

                    <div className="bg-[#EAF8EE]/70 dark:bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40 text-center">
                      <div className="flex items-center justify-center text-[#22A447] mb-0.5">
                        <Apple className="w-3.5 h-3.5 mr-0.5" />
                        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Protein</span>
                      </div>
                      <div className="text-xs font-bold text-[#1E2922] dark:text-zinc-100">
                        {prod.nutritionSnapshot.proteinG}g
                      </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-800/50 p-2.5 rounded-xl border border-zinc-200/70 dark:border-zinc-700/60 text-center">
                      <div className="flex items-center justify-center text-zinc-500 dark:text-zinc-400 mb-0.5">
                        <Scale className="w-3.5 h-3.5 mr-0.5" />
                        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Sodium</span>
                      </div>
                      <div className="text-xs font-bold text-[#1E2922] dark:text-zinc-100">
                        {prod.nutritionSnapshot.sodiumMg} <span className="text-[10px] font-normal text-zinc-500">mg</span>
                      </div>
                    </div>
                  </div>

                  {/* Product Claims / Tags */}
                  {prod.claims && prod.claims.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {prod.claims.slice(0, 2).map((claim, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-800/40"
                        >
                          ✓ {claim}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom CTA Bar */}
                <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-[#64746B] dark:text-zinc-400 flex items-center gap-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
                    AI Intelligence Scan
                  </span>
                  <div className="inline-flex items-center space-x-1 text-xs font-bold text-[#FF7A00] group-hover:text-[#F26522] transition-colors">
                    <span>Inspect Report</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </GlareCard>
            );
          })}
        </div>
      </section>

      {/* 6. SECTION: TWO DEDICATED ECOSYSTEMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#1E2922] to-[#2D3F35] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-900/40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF9B42]">
                Two Dedicated Ecosystems
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Empowering Indian Consumers & Nutrition Practitioners
              </h2>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Whether you are a health-conscious shopper deciphering breakfast cereals or a newly qualified dietitian building your first clinical client base, WhatsInIt provides the infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-xs space-y-2 border border-white/10">
                <span className="font-bold text-[#FFD2AC] block text-sm">For Consumers</span>
                <p className="text-white/80 leading-relaxed">
                  Decipher food packets, verify claims, get portion guidance, plan weekly menus, and generate smart grocery lists.
                </p>
                <button
                  onClick={() => setActiveTab('scanner')}
                  className="mt-2 text-[#FF9B42] hover:text-white font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  <span>Start Scanning</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-xs space-y-2 border border-white/10">
                <span className="font-bold text-[#FFD2AC] block text-sm">For Dietitians</span>
                <p className="text-white/80 leading-relaxed">
                  Start with a 100% free basic profile, display verified council credentials, receive booking requests, and upload diet plans.
                </p>
                <button
                  onClick={() => setActiveTab('for-dietitians')}
                  className="mt-2 text-[#FF9B42] hover:text-white font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  <span>Join as Dietitian</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: PREMIUM PREVIEW (₹89/month) */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-[#FFF3E6] dark:bg-orange-950/60 text-[#FF7A00] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#FF9B42]/30">
          <Crown className="w-4 h-4 text-[#FF7A00]" />
          <span>Fair & Affordable Food Intelligence</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E2922] dark:text-white">
          Consumer Premium at Just ₹89/month
        </h2>
        <p className="text-xs sm:text-sm text-[#64746B] dark:text-zinc-300 max-w-xl mx-auto">
          No heavy annual commitments. Cancel anytime. Unlocks unmetered scans, deep claim verifications, and weekly meal plan exports.
        </p>
        <div className="pt-2">
          <button
            onClick={() => setActiveTab('premium')}
            className="px-7 py-3.5 bg-[#FF7A00] hover:bg-[#F26522] text-white text-xs font-bold rounded-xl shadow-lg shadow-[#FF7A00]/25 transition-all inline-flex items-center space-x-2 cursor-pointer active:scale-95"
          >
            <Crown className="w-4 h-4 text-white" />
            <span>Explore Premium – ₹89/month</span>
          </button>
        </div>
      </section>

      {/* 8. SECTION: SAMPLE TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#15803D] dark:text-emerald-400 bg-[#E8F5E9] dark:bg-emerald-950/60 px-2.5 py-0.5 rounded border border-[#A7F3D0] dark:border-emerald-800/50">
              Community Feedback
            </span>
            <h2 className="text-xl font-bold text-[#1E2922] dark:text-white mt-1">What Indian Families Are Saying</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <GlareCard
            tiltIntensity={8}
            glareColor="rgba(255, 122, 0, 0.2)"
            className="p-5 rounded-2xl border border-slate-200/90 dark:border-zinc-700/70 bg-white/95 dark:bg-zinc-900/90 shadow-md space-y-3"
          >
            <p className="text-xs text-[#1E2922] dark:text-zinc-200 italic leading-relaxed">
              &quot;Finally an app that converts the 10g sugar on biscuit packets into level teaspoons (2.5 tsp)! It immediately made me rethink what I give my children before school.&quot;
            </p>
            <div className="text-[11px] pt-2 border-t border-slate-100 dark:border-zinc-800">
              <span className="font-bold text-[#1E2922] dark:text-white block">Priyanka Deshmukh</span>
              <span className="text-zinc-500 dark:text-zinc-400">Mother & Consumer, Pune</span>
            </div>
          </GlareCard>

          <GlareCard
            tiltIntensity={8}
            glareColor="rgba(34, 164, 71, 0.2)"
            className="p-5 rounded-2xl border border-slate-200/90 dark:border-zinc-700/70 bg-white/95 dark:bg-zinc-900/90 shadow-md space-y-3"
          >
            <p className="text-xs text-[#1E2922] dark:text-zinc-200 italic leading-relaxed">
              &quot;As someone managing hypertension, spotting that one instant noodle pack had over 820mg of sodium was eye-opening. The estimated salt breakdown is so useful.&quot;
            </p>
            <div className="text-[11px] pt-2 border-t border-slate-100 dark:border-zinc-800">
              <span className="font-bold text-[#1E2922] dark:text-white block">Rohan Mehta</span>
              <span className="text-zinc-500 dark:text-zinc-400">Software Engineer, Bengaluru</span>
            </div>
          </GlareCard>

          <GlareCard
            tiltIntensity={8}
            glareColor="rgba(255, 122, 0, 0.2)"
            className="p-5 rounded-2xl border border-slate-200/90 dark:border-zinc-700/70 bg-white/95 dark:bg-zinc-900/90 shadow-md space-y-3"
          >
            <p className="text-xs text-[#1E2922] dark:text-zinc-200 italic leading-relaxed">
              &quot;WhatsInIt helps me connect with clients who are serious about nutritional science rather than fad starvation diets. The meal plan upload feature saves me hours.&quot;
            </p>
            <div className="text-[11px] pt-2 border-t border-slate-100 dark:border-zinc-800">
              <span className="font-bold text-[#1E2922] dark:text-white block">Dr. Ananya Sharma, R.D.</span>
              <span className="text-zinc-500 dark:text-zinc-400">Clinical Nutritionist, Mumbai</span>
            </div>
          </GlareCard>
        </div>
      </section>

      {/* 9. SECTION: FAQ */}
      <section className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1E2922] dark:text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-[#64746B] dark:text-zinc-400 mt-1">Clear answers regarding data sources and regulations.</p>
        </div>

        <div className="space-y-3 text-xs">
          <div className="p-4 bg-white dark:bg-zinc-900/80 rounded-xl border border-[#CBD5E1]/80 dark:border-zinc-800 space-y-1">
            <h4 className="font-bold text-[#1E2922] dark:text-white">How does WhatsInIt verify packaging claims?</h4>
            <p className="text-[#64746B] dark:text-zinc-400 leading-relaxed">
              We extract declared ingredients and nutritional values via OCR and compare them against the statutory benchmarks defined in the FSSAI Advertising and Claims Regulations (2018).
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-zinc-900/80 rounded-xl border border-[#CBD5E1]/80 dark:border-zinc-800 space-y-1">
            <h4 className="font-bold text-[#1E2922] dark:text-white">Does having an FSSAI license guarantee a food is 100% healthy?</h4>
            <p className="text-[#64746B] dark:text-zinc-400 leading-relaxed">
              No. An FSSAI license indicates regulatory registration and manufacturing compliance; it does not mean the food is low in sugar, low in salt, or independently lab-tested for every batch.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-zinc-900/80 rounded-xl border border-[#CBD5E1]/80 dark:border-zinc-800 space-y-1">
            <h4 className="font-bold text-[#1E2922] dark:text-white">Can WhatsInIt diagnose diabetes or medical conditions?</h4>
            <p className="text-[#64746B] dark:text-zinc-400 leading-relaxed">
              No. WhatsInIt is strictly an educational nutrition intelligence tool. We never diagnose illnesses or prescribe medication. We connect you with qualified clinical dietitians for individual medical nutrition therapy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

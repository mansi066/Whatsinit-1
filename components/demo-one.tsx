"use client";

import React from "react";
import { GlareCard } from "@/components/ui/glare-cards";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sparkles, Activity, ShieldCheck, QrCode, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer, 
  Tooltip, 
  BarChart, 
  Bar 
} from "recharts";

const chartData = [
  { time: "00:00", value: 45 },
  { time: "04:00", value: 52 },
  { time: "08:00", value: 48 },
  { time: "12:00", value: 70 },
  { time: "16:00", value: 61 },
  { time: "20:00", value: 85 },
  { time: "23:59", value: 99 },
];

export default function DemoOne() {
  return (
    <div className="w-full bg-emerald-50/50 dark:bg-[#050B07] text-zinc-800 dark:text-zinc-100 flex flex-col items-center justify-center p-6 lg:p-16 relative overflow-hidden font-sans transition-colors duration-500 rounded-3xl my-8 border border-emerald-200/50 dark:border-emerald-800/20">
      
      {/* Background Orbs */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-[600px] h-[600px] bg-orange-500/15 rounded-full blur-[160px] pointer-events-none" />

      {/* Header Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl flex justify-between items-center mb-12 relative z-10"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white font-bold shadow-lg shadow-orange-500/30">
            <QrCode size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">WhatsInIt Interactive Glare Showcase</h2>
            <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">Know Food. Make Better Choices with 3D Holographic Glare Cards.</p>
          </div>
        </div>

        <ThemeToggle />
      </motion.div>

      {/* Grid Layout of Soft Orange & Green Glare Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl relative z-10">
        
        {/* Card 1: FSSAI Audit & Nutrition Analysis */}
        <GlareCard tiltIntensity={12} glareColor="rgba(242, 101, 34, 0.25)" className="flex flex-col h-[450px] bg-white/80 dark:bg-zinc-900/70 border-emerald-200 dark:border-emerald-800/40 p-8 shadow-xl backdrop-blur-lg">
          <div className="flex justify-between items-start mb-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
                <Activity size={18} />
                <span className="text-xs font-mono uppercase tracking-widest font-bold">FSSAI Audit</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Kurkure Masala Munch</h3>
            </div>
            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 border border-orange-300 dark:border-orange-800">
              168 kcal
            </span>
          </div>

          <div className="h-44 w-full mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValOrange" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F26522" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#F26522" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#F26522' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#F26522" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValOrange)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlareCard>

        {/* Card 2: Product Showcase & Healthy Swap */}
        <GlareCard 
          tiltIntensity={20} 
          glareColor="rgba(46, 125, 50, 0.35)"
          className="h-[450px] p-0 overflow-hidden group border-emerald-300 dark:border-emerald-700/30 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000"
            alt="Healthy Organic Salad"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
             <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase">
                  <ShieldCheck size={16} /> FSSAI Verified Swap
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Roasted Makhana</h3>
                <p className="text-emerald-100 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   Swap high-sodium palm oil snacks with 80% less saturated fat wholesome Indian superfood.
                </p>
                <div className="flex items-center gap-4">
                   <div className="h-[1px] flex-1 bg-emerald-400/30" />
                   <Sparkles className="text-orange-400 animate-pulse" size={18} />
                </div>
             </div>
          </div>
        </GlareCard>

        {/* Card 3: Ingredient Risk Bar Chart */}
        <GlareCard 
          tiltIntensity={15}
          glareColor="rgba(242, 101, 34, 0.3)"
          className="h-[450px] flex flex-col justify-between bg-white/80 dark:bg-zinc-900/70 border-orange-200 dark:border-orange-900/30 shadow-xl backdrop-blur-lg"
        >
          <div className="p-8 space-y-6">
            <div className="flex justify-between items-center">
              <AlertTriangle className="text-orange-500" size={24} />
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs font-mono mb-1 uppercase tracking-tighter">Sodium Content</p>
              <h3 className="text-4xl font-bold text-zinc-900 dark:text-white tracking-tighter">280 <span className="text-orange-500 text-lg">mg</span></h3>
              <p className="text-xs text-orange-600 dark:text-orange-400 font-medium mt-1">~0.7g Salt Equivalent</p>
            </div>
          </div>
          
          <div className="h-40 w-full px-2 overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <Bar 
                  dataKey="value" 
                  fill="#F26522" 
                  radius={[4, 4, 0, 0]}
                  animationBegin={500}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlareCard>
      </div>

    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./theme-provider";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (theme === "dark" || resolvedTheme === "dark") : false;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2.5 sm:p-3 rounded-full bg-emerald-100 dark:bg-zinc-800 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-zinc-700 transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer ${
        className || ""
      }`}
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
    >
      {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-emerald-800" />}
    </button>
  );
}

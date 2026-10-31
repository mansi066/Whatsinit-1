"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlareCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glareColor?: string;
  tiltIntensity?: number;
}

const GlareCard = React.forwardRef<HTMLDivElement, GlareCardProps>(
  (
    {
      children,
      className,
      glareColor = "rgba(255,255,255,0.2)",
      tiltIntensity = 15,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150, mass: 0.6 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!internalRef.current || prefersReducedMotion) return;

      const rect = internalRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    };

    const rotateX = useTransform(springY, (val) => `${val * -tiltIntensity}deg`);
    const rotateY = useTransform(springX, (val) => `${val * tiltIntensity}deg`);

    const glarePosX = useTransform(springX, (v) => `${50 + v * 40}%`);
    const glarePosY = useTransform(springY, (v) => `${50 + v * 40}%`);
    const backgroundGlare = useMotionTemplate`radial-gradient(
      circle at ${glarePosX} ${glarePosY}, 
      ${glareColor} 0%, 
      transparent 80%
    )`;

    const borderHighlight = useMotionTemplate`conic-gradient(
      from 0deg at ${glarePosX} ${glarePosY},
      transparent,
      ${glareColor},
      transparent
    )`;

    const shimmerX = useTransform(springX, (v) => `${v * -20}%`);

    return (
      <motion.div
        ref={(node) => {
          (internalRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        className={cn(
          "relative group isolate overflow-hidden rounded-[2rem] border border-emerald-500/20 bg-emerald-950/20 dark:bg-zinc-900/50 backdrop-blur-xl p-8 transition-all duration-500",
          "hover:border-orange-500/30 hover:shadow-[0_0_50px_-12px_rgba(242,101,34,0.3)]",
          className
        )}
        {...props}
      >
        {/* Layer 1: Border Beam */}
        <motion.div
          className="absolute inset-[-1px] z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
          style={{
            background: borderHighlight,
            WebkitMaskImage: "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
            WebkitMaskComposite: "destination-out",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />

        {/* Layer 2: Main Radial Glare */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-soft-light"
          style={{ background: backgroundGlare }}
        />

        {/* Layer 3: Reflective Shimmer */}
        <motion.div
          className="pointer-events-none absolute inset-[-50%] z-0 rotate-[15deg] opacity-0 transition-opacity duration-1000 group-hover:opacity-10"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            x: shimmerX,
          }}
        />

        {/* Content Container */}
        <div
          className="relative z-40 h-full w-full"
          style={{
            transform: prefersReducedMotion ? "none" : "translateZ(40px)",
            filter: isHovered ? "drop-shadow(0 20px 30px rgba(0,0,0,0.25))" : "none",
            transition: "filter 0.5s ease",
          }}
        >
          {children}
        </div>
      </motion.div>
    );
  }
);

GlareCard.displayName = "GlareCard";

export { GlareCard };

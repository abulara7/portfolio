"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

export default function HeroAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 260 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = (clientX / rect.width) - 0.5;
    const normalizedY = (clientY / rect.height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-2 cursor-pointer perspective-[1000px] select-none"
    >
      {/* Ambient Breathing Glow Aura behind Avatar */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-500/25 via-purple-500/20 to-amber-500/25 blur-2xl pointer-events-none animate-pulse opacity-80" />

      {/* 3D Tilting Avatar */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative"
      >
        <Avatar className="size-24 md:size-32 border-2 border-border/80 rounded-full shadow-xl ring-4 ring-muted/60 overflow-hidden">
          <AvatarImage
            alt={DATA.name}
            src={DATA.avatarUrl}
            className="object-cover size-full transition-transform duration-500 hover:scale-110"
          />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>

        {/* Floating Active Pulse Indicator */}
        <div className="absolute bottom-1 right-1 flex items-center justify-center size-5 rounded-full bg-background border-2 border-background shadow-xs">
          <span className="size-3 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}

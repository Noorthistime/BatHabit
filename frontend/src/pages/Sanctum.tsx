import { useState, useEffect } from 'react';
import { api } from '../api';
import { User, Flame, Coins, Shield, Book, Brain, Eye, Heart, Plus, CheckCircle, Terminal, Activity, Focus, Archive, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import '../sanctum-gothic.css';

const AnimatedFiligree = ({ widthClass = "w-[160px]" }: { widthClass?: string }) => {
  return (
    <div className={`absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 ${widthClass} pointer-events-none flex items-center justify-center z-20`}>
      <motion.svg 
        viewBox="0 0 160 32" 
        fill="none" 
        className="w-full h-auto text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]"
      >
        {/* Left primary sweeping vine */}
        <motion.path 
          d="M80,20 C 65,20 55,6 35,12 C 20,16 10,8 2,14" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* Right primary sweeping vine */}
        <motion.path 
          d="M80,20 C 95,20 105,6 125,12 C 140,16 150,8 158,14" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        {/* Center Crest */}
        <motion.path
          d="M80,6 L84,18 L80,28 L76,18 Z"
          fill="#F5D77F"
          initial={{ scale: 0, opacity: 0, y: -10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, type: "spring", bounce: 0.6 }}
        />
        {/* Inner flourish left */}
        <motion.path 
          d="M74,20 Q 65,28 50,22" 
          stroke="currentColor" 
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />
        {/* Inner flourish right */}
        <motion.path 
          d="M86,20 Q 95,28 110,22" 
          stroke="currentColor" 
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />
      </motion.svg>
    </div>
  );
};

const CornerFiligree = ({ className }: { className?: string }) => {
  const drawMain = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeOut" } 
    }
  };
  const drawSecondary = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeOut", delay: 0.5 } 
    }
  };
  const leafFade = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.2 } }
  };
  const starFade = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, delay: 1.5 } }
  };

  return (
    <motion.svg 
      className={`absolute w-16 h-16 md:w-20 md:h-20 pointer-events-none text-[#D4AF37] opacity-80 z-0 drop-shadow-[0_0_3px_rgba(212,175,55,0.4)] ${className}`}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
    >
      {/* Primary sweeping vines hugging the edges (subtle) */}
      <motion.path 
        d="M 2 2 C 20 5, 40 10, 95 15" 
        fill="none" stroke="currentColor" strokeWidth="1" variants={drawMain} 
      />
      <motion.path 
        d="M 2 2 C 5 20, 10 40, 15 95" 
        fill="none" stroke="currentColor" strokeWidth="1" variants={drawMain} 
      />

      {/* Secondary curling offshoots */}
      <motion.path 
        d="M 40 8 Q 50 20 60 15 T 70 8" 
        fill="none" stroke="currentColor" strokeWidth="0.5" variants={drawSecondary} 
      />
      <motion.path 
        d="M 70 12 Q 80 25 85 20 T 90 12" 
        fill="none" stroke="currentColor" strokeWidth="0.5" variants={drawSecondary} 
      />
      <motion.path 
        d="M 8 40 Q 20 50 15 60 T 8 70" 
        fill="none" stroke="currentColor" strokeWidth="0.5" variants={drawSecondary} 
      />
      <motion.path 
        d="M 12 70 Q 25 80 20 85 T 12 90" 
        fill="none" stroke="currentColor" strokeWidth="0.5" variants={drawSecondary} 
      />
      <motion.path 
        d="M 2 2 C 15 15, 30 30, 40 40 C 45 45, 50 40, 45 35 C 40 30, 35 35, 40 40" 
        fill="none" stroke="currentColor" strokeWidth="0.5" variants={drawSecondary} 
      />

      {/* Flourishing delicate leaves along horizontal stem */}
      <motion.g variants={leafFade}>
        <path d="M 20 5 C 18 8, 22 10, 25 10 C 25 7, 22 5, 20 5 Z" fill="currentColor" />
        <path d="M 35 7 C 32 11, 38 14, 42 13 C 42 10, 38 7, 35 7 Z" fill="currentColor" />
        <path d="M 55 10 C 52 15, 60 18, 65 17 C 65 13, 60 10, 55 10 Z" fill="currentColor" />
        <path d="M 80 13 C 78 17, 84 20, 88 18 C 88 15, 84 13, 80 13 Z" fill="currentColor" />
      </motion.g>

      {/* Flourishing delicate leaves along vertical stem */}
      <motion.g variants={leafFade}>
        <path d="M 5 20 C 8 18, 10 22, 10 25 C 7 25, 5 22, 5 20 Z" fill="currentColor" />
        <path d="M 7 35 C 11 32, 14 38, 13 42 C 10 42, 7 38, 7 35 Z" fill="currentColor" />
        <path d="M 10 55 C 15 52, 18 60, 17 65 C 13 65, 10 60, 10 55 Z" fill="currentColor" />
        <path d="M 13 80 C 17 78, 20 84, 18 88 C 15 88, 13 84, 13 80 Z" fill="currentColor" />
      </motion.g>
      
      {/* Delicate inner leaves for the diagonal curl */}
      <motion.g variants={leafFade}>
        <path d="M 15 15 C 12 18, 18 20, 20 18 C 20 15, 18 12, 15 15 Z" fill="currentColor" />
        <path d="M 25 25 C 22 28, 28 30, 30 28 C 30 25, 28 22, 25 25 Z" fill="currentColor" />
      </motion.g>

      {/* Sparkling stars */}
      <motion.g variants={starFade} style={{ originX: "50%", originY: "50%" }}>
        <path d="M 45 5 L 47 10 L 52 12 L 47 14 L 45 19 L 43 14 L 38 12 L 43 10 Z" fill="currentColor" className="opacity-80" />
        <path d="M 5 45 L 10 47 L 12 52 L 14 47 L 19 45 L 14 43 L 12 38 L 10 43 Z" fill="currentColor" className="opacity-80" />
        <path d="M 35 35 L 36 38 L 39 39 L 36 40 L 35 43 L 34 40 L 31 39 L 34 38 Z" fill="currentColor" className="opacity-60" />
        <path d="M 70 5 L 71 8 L 74 9 L 71 10 L 70 13 L 69 10 L 66 9 L 69 8 Z" fill="currentColor" className="opacity-60" />
        <path d="M 5 70 L 8 71 L 9 74 L 10 71 L 13 70 L 10 69 L 9 66 L 8 69 Z" fill="currentColor" className="opacity-60" />
      </motion.g>
    </motion.svg>
  );
};

const PrestigeHeaderDivider = () => (
  <div className="absolute inset-0 flex items-center justify-between w-[95%] max-w-5xl mx-auto pointer-events-none text-[#D4AF37]/90">
    {/* Left Flourish - Elaborate Art Deco Chevron */}
    <div className="w-48 h-8">
      <svg viewBox="0 0 192 32" fill="none" className="w-full h-full text-current drop-shadow-[0_0_4px_currentColor]">
        {/* Long connecting line */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
          d="M 192 16 L 64 16" stroke="currentColor" strokeWidth="1" 
        />
        {/* Outer extensive chevron knot */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
          d="M 64 16 L 48 0 L 16 0 L 32 16 L 16 32 L 48 32 Z" 
          stroke="currentColor" strokeWidth="1" 
        />
        {/* Inner nested chevron */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }}
          d="M 48 16 L 36 4 L 20 4 L 32 16 L 20 28 L 36 28 Z" 
          stroke="currentColor" strokeWidth="1" className="opacity-70"
        />
        {/* Final arrowhead line */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 2 }}
          d="M 16 16 L 0 16" 
          stroke="currentColor" strokeWidth="1" 
        />
        {/* Central tiny diamond core */}
        <motion.path 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          d="M 32 12 L 36 16 L 32 20 L 28 16 Z" fill="currentColor" 
        />
      </svg>
    </div>
    
    {/* Right Flourish - Elaborate Art Deco Chevron */}
    <div className="w-48 h-8 transform scale-x-[-1]">
      <svg viewBox="0 0 192 32" fill="none" className="w-full h-full text-current drop-shadow-[0_0_4px_currentColor]">
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
          d="M 192 16 L 64 16" stroke="currentColor" strokeWidth="1" 
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
          d="M 64 16 L 48 0 L 16 0 L 32 16 L 16 32 L 48 32 Z" 
          stroke="currentColor" strokeWidth="1" 
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }}
          d="M 48 16 L 36 4 L 20 4 L 32 16 L 20 28 L 36 28 Z" 
          stroke="currentColor" strokeWidth="1" className="opacity-70"
        />
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 2 }}
          d="M 16 16 L 0 16" 
          stroke="currentColor" strokeWidth="1" 
        />
        <motion.path 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          d="M 32 12 L 36 16 L 32 20 L 28 16 Z" fill="currentColor" 
        />
      </svg>
    </div>
  </div>
);

const PrestigeAttributeFrame = ({ delay = 1.4 }: { delay?: number }) => (
  <div className="absolute inset-0 pointer-events-none z-10 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors duration-700">
    
    {/* True Continuous Boundary Line (Fixes the progress bar gap issue!) */}
    <svg className="absolute inset-0 w-full h-full text-current drop-shadow-[0_0_2px_currentColor]" preserveAspectRatio="none">
       <motion.rect 
         variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay } }
         }}
         x="0" y="0" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1" 
         vectorEffect="non-scaling-stroke"
       />
       <motion.rect 
         variants={{
            hidden: { pathLength: 0, opacity: 0 },
            visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: delay + 0.2 } }
         }}
         x="5" y="5" width="calc(100% - 10px)" height="calc(100% - 10px)" fill="none" stroke="currentColor" strokeWidth="1" 
         className="opacity-50"
         vectorEffect="non-scaling-stroke"
       />
    </svg>
    
    {/* Corner Ornaments & Hover Extensions */}
    {[
      "top-0 left-0",
      "top-0 right-0 scale-x-[-1]",
      "bottom-0 left-0 scale-y-[-1]",
      "bottom-0 right-0 scale-x-[-1] scale-y-[-1]"
    ].map((pos, i) => (
      <div key={i} className={`absolute ${pos} w-16 h-16 overflow-hidden`}>
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full text-current drop-shadow-[0_0_2px_currentColor]">
          {/* Corner Decorative Geometric Cut */}
          <motion.path 
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: "easeInOut", delay: delay + 0.5 } }
            }}
            d="M 16 16 L 24 16 L 24 24 L 16 24 Z M 0 16 L 5 16 M 16 0 L 16 5" 
            stroke="currentColor" strokeWidth="1" 
          />
          {/* Inner tiny diamond */}
          <motion.path
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: delay + 0.8 } }
            }}
            d="M 20 18 L 22 20 L 20 22 L 18 20 Z"
            fill="currentColor"
          />

          {/* THE HOVER EXTENSION FILIGREE (Draws dynamically along the border!) */}
          <motion.path
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 0, opacity: 0, transition: { duration: 0.15 } },
              hover: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
            }}
            d="M 5 32 L 5 48 L 12 48 L 12 32 M 32 5 L 48 5 L 48 12 L 32 12"
            stroke="currentColor" strokeWidth="1"
          />
          <motion.path
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 0, opacity: 0, transition: { duration: 0.15 } },
              hover: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.05 } }
            }}
            d="M 24 24 L 32 32 M 16 24 L 16 32 M 24 16 L 32 16"
            stroke="currentColor" strokeWidth="1" className="opacity-70"
          />
        </svg>
      </div>
    ))}
  </div>
const VaultFrame = () => (
  <svg 
    className="absolute inset-0 w-full h-full pointer-events-none text-[#D4AF37] opacity-60 z-0" 
    preserveAspectRatio="none" 
    viewBox="0 0 100 100"
  >
    {/* Outer border */}
    <rect x="2" y="2" width="96" height="96" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
    {/* Inner border */}
    <rect x="4" y="4" width="92" height="92" fill="none" stroke="currentColor" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
    
    {/* Corner Flourishes */}
    <path d="M 4 10 C 6 8, 8 6, 10 4" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
    <path d="M 96 10 C 94 8, 92 6, 90 4" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
    <path d="M 4 90 C 6 92, 8 94, 10 96" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
    <path d="M 96 90 C 94 92, 92 94, 90 96" fill="none" stroke="currentColor" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
  </svg>
);

const CodexMasterFrame = () => (
  <svg 
    className="absolute inset-0 w-full h-full pointer-events-none text-[#D4AF37] opacity-60 z-0" 
    preserveAspectRatio="none" 
    viewBox="0 0 100 100"
  >
    <rect x="1.5" y="1.5" width="97" height="97" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    <rect x="3" y="3" width="94" height="94" fill="none" stroke="currentColor" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
    
    {/* Top Left Swirl */}
    <path d="M 1.5 12 Q 6 12 12 1.5 Q 6 6 1.5 1.5" fill="currentColor" />
    <path d="M 3 16 C 8 16 12 12 12 6 C 12 9 9 12 6 12 Z" fill="none" stroke="currentColor" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
    
    {/* Top Right Swirl */}
    <path d="M 98.5 12 Q 94 12 88 1.5 Q 94 6 98.5 1.5" fill="currentColor" />
    <path d="M 97 16 C 92 16 88 12 88 6 C 88 9 91 12 94 12 Z" fill="none" stroke="currentColor" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
    
    {/* Bottom Left Swirl */}
    <path d="M 1.5 88 Q 6 88 12 98.5 Q 6 94 1.5 98.5" fill="currentColor" />
    <path d="M 3 84 C 8 84 12 88 12 94 C 12 91 9 88 6 88 Z" fill="none" stroke="currentColor" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
    
    {/* Bottom Right Swirl */}
    <path d="M 98.5 88 Q 94 88 88 98.5 Q 94 94 98.5 98.5" fill="currentColor" />
    <path d="M 97 84 C 92 84 88 88 88 94 C 88 91 91 88 94 88 Z" fill="none" stroke="currentColor" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
  </svg>
);

const QuestRowDivider = () => (
  <div className="flex items-center justify-center my-2 opacity-40">
    <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
    <div className="mx-4 text-[#D4AF37]">
      <svg width="24" height="8" viewBox="0 0 24 8" fill="currentColor">
         <path d="M 12 0 L 16 4 L 12 8 L 8 4 Z" />
         <circle cx="4" cy="4" r="1.5" />
         <circle cx="20" cy="4" r="1.5" />
      </svg>
    </div>
    <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
  </div>
);

export function Sanctum() {
  const [profile, setProfile] = useState<any>(null);
  const { theme, toggleTheme } = useTheme();
  const [activeLedgerTab, setActiveLedgerTab] = useState<'treasury' | 'chronicle'>('treasury');

  useEffect(() => {
    api.get('/auth/me').then(res => setProfile(res.data)).catch(console.error);
  }, []);

  if (!profile) return <div className="p-8 text-[#F7F3E9] dark:text-[#EEEAD7] animate-pulse font-serif mt-20 text-xl text-center">Summoning your legacy...</div>;

  const char = profile.character || {};
  const attr = profile.attribute || {};
  const streak = profile.streak || {};
  const currency = profile.currency || {};

  const calculateRequiredXp = (level: number) => Math.floor(100 * Math.pow(level || 1, 1.5));
  const currentLevelXpRequired = calculateRequiredXp(char.level || 1);
  const nextLevelXpRequired = calculateRequiredXp((char.level || 1) + 1);
  const xpIntoLevel = (char.totalXp || 0) - currentLevelXpRequired;
  const xpNeededForNext = nextLevelXpRequired - currentLevelXpRequired;
  const progressPercent = Math.min(100, Math.max(0, (xpIntoLevel / xpNeededForNext) * 100)) || 0;
  
  return (
    <>
      {/* Main Container */}
      <div className="pt-32 px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Welcome Ribbon */}
          <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-4 border-b border-[#415A77] dark:border-[#D4AF37]/25 relative">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-serif text-[10px] md:text-xs uppercase text-[#D4AF37] tracking-[0.3em] font-bold">
                  Sanctum Noctis • Chamber of Command
                </span>
              </div>
              <h1 className="font-serif text-3xl lg:text-4xl text-[#F7F3E9] dark:text-[#EEEAD7] tracking-tight font-bold drop-shadow-md">
                The Veil Thins, {char.currentTitle || 'Novice'}.
              </h1>
              <p className="font-sans text-sm text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-2xl leading-relaxed">
                Your vows resonate through the obsidian arches. Seven consecutive lunar vigils sustained without wavering.
              </p>
            </div>
            
            {/* Quick Stats Pills */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              
              {/* Stat 1: Unbroken Vow */}
              <div className="relative group flex items-center gap-4 px-5 py-4 rounded-[12px] bg-[#110102] dark:bg-[radial-gradient(ellipse_at_center,_rgba(45,5,8,1)_0%,_rgba(15,2,4,1)_100%)] border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_4px_25px_rgba(212,175,55,0.2)]">
                <AnimatedFiligree />
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center border border-[#D4AF37]/50 text-[#F5D77F] shadow-[inset_0_0_8px_rgba(212,175,55,0.1)] transition-all duration-300 group-hover:bg-[#D4AF37]/10 group-hover:border-[#F5D77F] group-hover:scale-110">
                  <Flame size={20} strokeWidth={1.5} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-1.5 leading-none mb-1.5">
                    <span className="font-serif text-2xl font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.2)]">{streak?.currentStreak || 0}</span>
                    <span className="font-mono text-[11px] text-[#F7F3E9]/60 dark:text-[#F7F3E9]/50 uppercase tracking-wide">Days</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#D4AF37] dark:text-[#D4AF37]/90 uppercase tracking-[0.15em] font-bold">UNBROKEN VOW</span>
                </div>
              </div>

              {/* Stat 2: Tarnished Crowns */}
              <div className="relative group flex items-center gap-4 px-5 py-4 rounded-[12px] bg-[#110102] dark:bg-[radial-gradient(ellipse_at_center,_rgba(45,5,8,1)_0%,_rgba(15,2,4,1)_100%)] border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_4px_25px_rgba(212,175,55,0.2)]">
                <AnimatedFiligree widthClass="w-[200px]" />
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center border border-[#D4AF37]/50 text-[#F5D77F] shadow-[inset_0_0_8px_rgba(212,175,55,0.1)] transition-all duration-300 group-hover:bg-[#D4AF37]/10 group-hover:border-[#F5D77F] group-hover:scale-110">
                  <Coins size={20} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-baseline gap-1.5 leading-none mb-1.5">
                    <span className="font-serif text-2xl font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.2)]">{currency?.balance || 0}</span>
                  </div>
                  <span className="font-mono text-[9px] text-[#D4AF37] dark:text-[#D4AF37]/90 uppercase tracking-[0.15em] font-bold">TARNISHED CROWNS</span>
                </div>
              </div>

            </div>
          </section>

          {/* Hero Panel: Avatar & XP */}
          <section className="relative bg-[#0D1B2A] dark:bg-[#1a0202] rounded-xl p-6 md:p-8 border border-[#415A77] dark:border-[#D4AF37]/60 shadow-[0_8px_30px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Corner Filigrees */}
            <CornerFiligree className="top-0 left-0" />
            <CornerFiligree className="top-0 right-0 scale-x-[-1]" />
            <CornerFiligree className="bottom-0 left-0 scale-y-[-1]" />
            <CornerFiligree className="bottom-0 right-0 scale-x-[-1] scale-y-[-1]" />

            {/* Subtle glow */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.05)_0%,_transparent_70%)] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-center gap-5">
                <div className="relative group p-1">
                  {/* Outer double border */}
                  <div className="absolute inset-0 border border-[#D4AF37]/80 rounded-sm pointer-events-none"></div>
                  <div className="absolute inset-1 border border-[#D4AF37]/40 rounded-sm pointer-events-none"></div>
                  {/* Corner squares */}
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#1a0202] border border-[#D4AF37] rounded-sm"></div>
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1a0202] border border-[#D4AF37] rounded-sm"></div>
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#1a0202] border border-[#D4AF37] rounded-sm"></div>
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#1a0202] border border-[#D4AF37] rounded-sm"></div>
                  
                  <div className="w-48 h-48 lg:w-52 lg:h-52 bg-[#0a0000] m-1.5 flex items-center justify-center relative overflow-hidden">
                    {char.avatarUrl ? (
                      <img src={char.avatarUrl} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <User size={64} className="text-[#D4AF37]" />
                    )}
                  </div>
                  
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded bg-[#6D0808] text-[#EEEAD7] flex items-center whitespace-nowrap border border-[#D4AF37] shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    <span className="font-serif text-xs font-bold tracking-widest uppercase">LEVEL {char.level || 1} • {char.currentTitle || 'Novice'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-center space-y-4">
                <div className="space-y-3 bg-[#0a0000] p-5 rounded border border-[#D4AF37]/30 shadow-inner relative overflow-hidden">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-[#D4AF37] flex items-center gap-2 uppercase tracking-[0.2em] font-bold">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] border border-[#D4AF37]/50"></span>
                      Arcane Essence XP Gauge
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg font-bold text-[#D4AF37]">{char.totalXp}</span>
                      <span className="text-[#8d9685]">/</span>
                      <span className="font-mono text-xs text-[#8d9685]">{nextLevelXpRequired} XP</span>
                      <span className="text-[#EEEAD7] font-bold ml-2 bg-[#1a0202] px-2 py-0.5 rounded border border-[#D4AF37]/40 text-[10px]">{progressPercent.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="relative w-full h-3 bg-[#1a0202] rounded-full p-px shadow-inner border border-[#D4AF37]/20">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#6D0808] via-[#f59e0b] to-[#F5D77F]" style={{ width: progressPercent + "%" }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono pt-1">
                    <span className="text-[10px] text-[#8d9685] uppercase tracking-wider"><span className="text-[#D4AF37]">✦</span> +{Math.floor(xpNeededForNext)} XP to Level {(char.level || 1) + 1}</span>
                  </div>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  <div className="px-4 py-3 rounded bg-[#0a0000] border border-[#D4AF37]/20 flex items-center justify-between shadow-inner">
                    <span className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest">Active Vigor</span>
                    <span className="font-serif text-sm font-bold text-[#D4AF37]">94 / 100</span>
                  </div>
                  <div className="px-4 py-3 rounded bg-[#0a0000] border border-[#D4AF37]/20 flex items-center justify-between shadow-inner">
                    <span className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest">Shadow Will</span>
                    <span className="font-serif text-sm font-bold text-[#EEEAD7]">Tier III</span>
                  </div>
                  <div className="px-4 py-3 rounded bg-[#0a0000] border border-[#D4AF37]/20 flex items-center justify-between shadow-inner">
                    <span className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest">Discipline</span>
                    <span className="font-serif text-sm font-bold text-[#D4AF37]">1.25x</span>
                  </div>
                  <div className="px-4 py-3 rounded bg-[#0a0000] border border-[#D4AF37]/20 flex items-center justify-between shadow-inner">
                    <span className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest">Lunar Phase</span>
                    <span className="font-serif text-sm font-bold text-[#EEEAD7]">Waxing</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grimoire Attributes */}
          <section className="space-y-6 relative overflow-hidden pb-4 pt-2">
            
            {/* Header Box */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center justify-center w-full relative py-6"
            >
              <PrestigeHeaderDivider />
              
              <div className="relative px-10 py-3 bg-[#1a0202] dark:bg-[#0a0000] z-10 shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {/* Text Box Prestige Borders */}
                <div className="absolute inset-0 border border-[#D4AF37]/30 pointer-events-none"></div>
                <div className="absolute inset-[3px] border border-[#D4AF37]/10 pointer-events-none"></div>
                {/* 4 Corner precise brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#D4AF37]"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#D4AF37]"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#D4AF37]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#D4AF37]"></div>
                
                <h2 className="font-serif text-sm md:text-base uppercase tracking-[0.3em] text-[#D4AF37] font-bold drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] relative z-20">
                  Disciplines of Mastery <span className="text-[#8B0000] mx-3 dark:text-[#ff4444]">•</span> Grimoire Attributes
                </h2>
              </div>
            </motion.div>

            {/* Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { label: 'Strength', val: attr.strengthXp, icon: Shield, desc: 'Physical resilience & cold vigils' },
                { label: 'Intellect', val: attr.intellectXp, icon: Brain, desc: 'Architectural knowledge & code' },
                { label: 'Wisdom', val: attr.wisdomXp, icon: Book, desc: 'Mindfulness & sleep hygiene' },
                { label: 'Focus', val: attr.focusXp, icon: Eye, desc: 'Deep continuous work sessions' },
                { label: 'Vitality', val: attr.vitalityXp, icon: Heart, desc: 'Cardio & nocturnal nutrition' },
              ].map((a, i) => (
                <motion.div 
                  key={i} 
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.5 + (i * 0.15) } }
                  }}
                  className="relative group bg-[#1a0202] dark:bg-[#0a0000] p-6 shadow-[0_4px_16px_rgba(0,0,0,0.9)] flex flex-col justify-between overflow-hidden transition-all duration-150 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(212,175,55,0.25)] hover:bg-[#250303] dark:hover:bg-[#110102]"
                >
                  
                  {/* The Royal Geometric SVG Frame with Hover Drawing Extension */}
                  <PrestigeAttributeFrame delay={1.4} />
                  
                  <div className="flex flex-col h-full relative z-20 px-2 py-1">
                    {/* Shifted Icon and 0 inwards */}
                    <div className="flex items-start justify-between px-3 pt-2">
                      <div className="w-10 h-10 rounded-sm border border-[#D4AF37]/50 group-hover:border-[#D4AF37] flex items-center justify-center text-[#D4AF37]/80 group-hover:text-[#D4AF37] shadow-inner transition-colors duration-150">
                        <a.icon size={20} className="group-hover:scale-110 transition-transform duration-150" />
                      </div>
                      <span className="font-serif text-3xl text-[#D4AF37]/80 group-hover:text-[#D4AF37] font-bold transition-colors duration-150 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">{a.val || 0}</span>
                    </div>
                    
                    {/* Centered Text */}
                    <div className="flex-grow flex flex-col items-center justify-center text-center mt-6 mb-4 px-1">
                      <h3 className="font-serif text-lg text-[#EEEAD7] font-bold group-hover:text-[#FFF] transition-colors duration-150 tracking-wide">{a.label}</h3>
                      <p className="font-sans text-[10px] whitespace-nowrap text-[#8d9685] group-hover:text-[#EEEAD7] mt-1.5 transition-colors duration-150">{a.desc}</p>
                    </div>
                    
                    {/* Raised & Narrowed Progress Bar */}
                    <div className="w-full max-w-[85%] mx-auto bg-[#0a0000] dark:bg-[#000] h-1.5 rounded-sm overflow-hidden border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 mt-auto mb-3 transition-colors duration-150">
                      <div className="bg-gradient-to-r from-[#947014] to-[#D4AF37] h-full rounded-sm shadow-[0_0_8px_rgba(212,175,55,0.8)] transition-all duration-700 ease-out" style={{width: Math.min(100, Math.max(10, (a.val || 0) * 10)) + "%" }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Bottom Grid: 2-Column Grand Ledger Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Col (33%): Grand Ledger (Treasury / Chronicle) */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="bg-gradient-to-br from-[#1a0202] to-[#0a0000] rounded-lg border border-[#D4AF37]/60 shadow-[0_8px_24px_rgba(0,0,0,0.9)] flex flex-col relative overflow-hidden h-full">
                
                {/* Subtle top glare */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
                
                {/* Tab Switcher */}
                <div className="flex border-b border-[#D4AF37]/30 bg-[#1a0202]/50 relative z-10">
                  <button 
                    onClick={() => setActiveLedgerTab('treasury')}
                    className={`flex-1 py-4 font-serif text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeLedgerTab === 'treasury' 
                        ? 'text-[#1a0202] bg-[#D4AF37] shadow-[inset_0_-2px_10px_rgba(0,0,0,0.2)]' 
                        : 'text-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    <Shield size={14} /> Treasury
                  </button>
                  <div className="w-px bg-[#D4AF37]/30"></div>
                  <button 
                    onClick={() => setActiveLedgerTab('chronicle')}
                    className={`flex-1 py-4 font-serif text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      activeLedgerTab === 'chronicle' 
                        ? 'text-[#1a0202] bg-[#D4AF37] shadow-[inset_0_-2px_10px_rgba(0,0,0,0.2)]' 
                        : 'text-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    <Archive size={14} /> Chronicle
                  </button>
                </div>

                {/* Tab Content Container */}
                <div className="p-6 flex-1 flex flex-col relative overflow-hidden">
                  
                  {/* Treasury View */}
                  {activeLedgerTab === 'treasury' && (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col items-center flex-1 h-full relative"
                    >
                      <VaultFrame />
                      
                      <div className="flex flex-col items-center w-full mb-8 relative z-10">
                        <PrestigeHeaderDivider />
                        <h3 className="font-serif text-xl font-bold text-[#EEEAD7] tracking-[0.2em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1a0202] px-6">THE VAULT</h3>
                        <span className="font-mono text-[9px] text-[#8d9685] uppercase border border-[#D4AF37]/40 px-2 py-0.5 rounded-sm absolute right-0 top-1/2 -translate-y-1/2 bg-[#1a0202]">Secure</span>
                      </div>
                      
                      <div className="relative z-10 w-28 h-28 rounded-full bg-[radial-gradient(ellipse_at_center,_#F5D77F_0%,_#D4AF37_50%,_#947014_100%)] flex items-center justify-center text-[#1a0202] shadow-[0_0_60px_rgba(212,175,55,0.4)] mb-8 shrink-0 mt-4 border border-[#F5D77F]/50">
                        <span className="font-serif text-6xl font-bold">✦</span>
                      </div>
                      
                      <span className="font-serif text-5xl font-bold text-[#D4AF37] drop-shadow-[0_2px_10px_rgba(212,175,55,0.5)] relative z-10">{currency?.balance || 0}</span>
                      <span className="font-mono text-[10px] text-[#8d9685] uppercase text-center mt-3 tracking-[0.3em] relative z-10">Gilded Crowns • Obsidian Gold</span>
                      
                      <div className="w-full mt-auto pt-6 relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30"></div>
                          <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-[0.2em]">Recent Influx</span>
                          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center px-3 py-2 border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 transition-colors">
                            <span className="font-mono text-[10px] text-[#EEEAD7] tracking-wide">+ Solitude Rite</span>
                            <span className="font-mono text-[10px] font-bold text-[#D4AF37]">+15 Crowns</span>
                          </div>
                          <div className="flex justify-between items-center px-3 py-2 border-b border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 transition-colors">
                            <span className="font-mono text-[10px] text-[#8d9685] tracking-wide">- Raven Brooch</span>
                            <span className="font-mono text-[10px] font-bold text-[#ff4444]">-450 Crowns</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Chronicle View */}
                  {activeLedgerTab === 'chronicle' && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex flex-col flex-1"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-serif text-lg font-bold text-[#EEEAD7]">THE ARCHIVE</h3>
                        <span className="font-mono text-[9px] text-[#8d9685] uppercase hover:text-[#D4AF37] cursor-pointer transition-colors">Full History</span>
                      </div>
                      
                      <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-[9px] before:w-px before:bg-gradient-to-b before:from-[#D4AF37] before:to-transparent z-10 flex-1">
                        <div className="relative pl-8">
                          <span className="absolute left-[3px] top-1 w-3.5 h-3.5 rounded-full bg-[#1a0202] border-2 border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,1)]"></span>
                          <p className="font-serif text-[15px] font-bold text-[#EEEAD7] tracking-wide">QUEST SEALED: Solitude</p>
                          <p className="font-mono text-[10px] text-[#8d9685] mt-1.5 leading-relaxed">Yielded +50 XP and +15 Crowns.</p>
                        </div>
                        <div className="relative pl-8">
                          <span className="absolute left-[3px] top-1 w-3.5 h-3.5 rounded-full bg-[#1a0202] border-2 border-[#D4AF37] opacity-60"></span>
                          <p className="font-serif text-[15px] font-bold text-[#EEEAD7] tracking-wide opacity-80">ASCENSION: Level 7</p>
                          <p className="font-mono text-[10px] text-[#8d9685] mt-1.5 leading-relaxed opacity-80">Unlocked title Nightwalker.</p>
                        </div>
                        <div className="relative pl-8">
                          <span className="absolute left-[3px] top-1 w-3.5 h-3.5 rounded-full bg-[#1a0202] border-2 border-[#D4AF37] opacity-40"></span>
                          <p className="font-serif text-[15px] font-bold text-[#EEEAD7] tracking-wide opacity-60">ITEM FORGED: Raven Brooch</p>
                          <p className="font-mono text-[10px] text-[#8d9685] mt-1.5 leading-relaxed opacity-60">Artifact secured in the Vault.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                </div>
              </div>
            </div>

            {/* Right Col (67%): Quests */}
            <div className="lg:col-span-8 flex flex-col h-full">
              <div className="relative bg-gradient-to-br from-[#1a0202] to-[#0a0000] shadow-[0_12px_40px_rgba(0,0,0,0.9)] flex flex-col p-8 overflow-hidden h-full rounded-lg">
                
                {/* The serious outer filigree */}
                <CodexMasterFrame />

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 mb-8 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] shrink-0 bg-[#0a0000] shadow-inner">
                      <Book size={20} />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-[#EEEAD7] tracking-wide">Codex of Active Quests</h2>
                      <span className="font-mono text-[10px] text-[#8d9685] uppercase tracking-[0.2em]">3 Pending Rites • 1 Sealed</span>
                    </div>
                  </div>
                  <button className="px-5 py-2.5 rounded-sm border border-[#D4AF37] bg-transparent text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a0202] font-serif text-xs font-bold tracking-[0.1em] flex items-center gap-2 shadow-[0_0_12px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] shrink-0 transition-all">
                    <Plus size={16} /> FORGE QUEST
                  </button>
                </div>

                <div className="relative z-10 mb-4 opacity-50">
                   <PrestigeHeaderDivider />
                </div>

                {/* Quest Items List */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {[
                    { title: "Master 30 Minutes of React", icon: Terminal, tag: "Intellect • Epic Quest", xp: 120, crowns: 40, stat: "Intellect +2" },
                    { title: "Deep Focus: 5 km Dawn Run", icon: Activity, tag: "Vitality • Daily Ritual", xp: 80, crowns: 25, stat: "Vitality +3" },
                    { title: "Review 3 Algorithmic Systems", icon: Focus, tag: "Focus • Essential", xp: 68, crowns: 20, stat: "Focus +1" }
                  ].map((q, i, arr) => (
                    <React.Fragment key={i}>
                      <article className="group relative transition-all flex flex-col md:flex-row justify-between items-center gap-4 py-4 px-2 hover:bg-[#D4AF37]/5 rounded-sm overflow-hidden">
                        
                        <div className="flex flex-1 items-center gap-5 pl-2">
                          <div className="w-12 h-12 flex items-center justify-center text-[#D4AF37]/80 shrink-0 border border-transparent group-hover:border-[#D4AF37]/30 transition-colors">
                            <q.icon size={26} className="group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-[0.2em] font-bold opacity-80">{q.tag}</span>
                            <h3 className="font-serif text-lg font-bold text-[#EEEAD7] group-hover:text-white transition-colors">{q.title}</h3>
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="px-2 py-0.5 rounded-sm bg-[#6D0808]/40 text-[#EEEAD7] font-mono text-[9px] font-bold border border-[#ff4444]/20">
                                 +{q.xp} XP
                              </span>
                              <span className="px-2 py-0.5 rounded-sm bg-[#1a0202] text-[#D4AF37] font-mono text-[9px] font-bold border border-[#D4AF37]/20">
                                 +{q.crowns} Crowns
                              </span>
                              <span className="font-mono text-[9px] text-[#8d9685] tracking-wide">{q.stat}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <button className="px-5 py-2.5 rounded-sm border border-[#D4AF37]/50 bg-transparent text-[#D4AF37]/80 font-serif text-[10px] font-bold uppercase tracking-[0.1em] group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] hover:bg-[#6D0808] hover:text-[#EEEAD7] hover:border-[#ff4444] transition-all flex items-center gap-2 shrink-0">
                            <CheckCircle size={14} /> COMPLETE QUEST
                          </button>
                        </div>
                      </article>
                      {i < arr.length - 1 && <QuestRowDivider />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from 'react';
import { api } from '../api';
import { User, Flame, Coins, Shield, Book, Brain, Eye, Heart, Plus, CheckCircle, Terminal, Activity, Focus, Archive, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import '../sanctum-gothic.css';

const AnimatedFiligree = () => {
  return (
    <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-[160px] h-[32px] pointer-events-none flex items-center justify-center z-20">
      <motion.svg 
        viewBox="0 0 160 32" 
        fill="none" 
        className="w-full h-full text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]"
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

export function Sanctum() {
  const [profile, setProfile] = useState<any>(null);
  const { theme, toggleTheme } = useTheme();

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
                <AnimatedFiligree />
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
          <section className="space-y-3">
            <div className="flex items-center justify-between px-1">
              <h2 className="font-serif text-xs uppercase tracking-[0.25em] text-[#D4AF37] dark:text-[#F5D77F] font-bold">Disciplines of Mastery • Grimoire Attributes</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {[
                { label: 'Strength', val: attr.strengthXp, icon: Shield, desc: 'Physical resilience & cold vigils' },
                { label: 'Intellect', val: attr.intellectXp, icon: Brain, desc: 'Architectural knowledge & code' },
                { label: 'Wisdom', val: attr.wisdomXp, icon: Book, desc: 'Mindfulness & sleep hygiene' },
                { label: 'Focus', val: attr.focusXp, icon: Eye, desc: 'Deep continuous work sessions' },
                { label: 'Vitality', val: attr.vitalityXp, icon: Heart, desc: 'Cardio & nocturnal nutrition' },
              ].map((a, i) => (
                <div key={i} className="group bg-[#1a0202] rounded-lg p-5 border border-[#D4AF37]/60 shadow-[0_4px_12px_rgba(0,0,0,0.8)] flex flex-col justify-between space-y-4 cursor-pointer hover:border-[#D4AF37] transition-all relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-md border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-inner">
                      <a.icon size={20} />
                    </div>
                    <span className="font-serif text-2xl text-[#D4AF37] font-bold">{a.val || 0}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#EEEAD7] font-bold">{a.label}</h3>
                    <p className="font-sans text-[11px] text-[#8d9685] line-clamp-2 mt-1">{a.desc}</p>
                  </div>
                  <div className="w-full bg-[#0a0000] h-1.5 rounded-full overflow-hidden border border-[#D4AF37]/30 mt-1">
                    <div className="bg-[#D4AF37] h-full rounded-full" style={{width: Math.min(100, Math.max(10, (a.val || 0) * 10)) + "%" }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Grid: Quests & Treasury/Chronicle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Col: Quests */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#1a0202] p-5 rounded-lg border border-[#D4AF37]/60 shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Book size={20} />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-[#EEEAD7]">Codex of Active Quests</h2>
                    <span className="font-mono text-[10px] text-[#8d9685] uppercase tracking-widest">3 Pending Rites • 1 Sealed</span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded border border-[#D4AF37] bg-[#6D0808] text-[#D4AF37] font-serif text-xs font-bold tracking-widest hover:brightness-125 flex items-center gap-2 shadow-[0_0_12px_rgba(109,8,8,0.8)]">
                  <Plus size={16} /> FORGE QUEST
                </button>
              </div>

              {/* Quest Items */}
              {[
                { title: "Master 30 Minutes of React", icon: Terminal, tag: "Intellect • Epic Quest", xp: 120, crowns: 40, stat: "Intellect +2" },
                { title: "Deep Focus: 5 km Dawn Run", icon: Activity, tag: "Vitality • Daily Ritual", xp: 80, crowns: 25, stat: "Vitality +3" },
                { title: "Review 3 Algorithmic Systems", icon: Focus, tag: "Focus • Essential", xp: 68, crowns: 20, stat: "Focus +1" }
              ].map((q, i) => (
                <article key={i} className="relative bg-[#0a0000] rounded-lg p-5 border border-[#D4AF37]/60 shadow-[0_4px_12px_rgba(0,0,0,0.8)] hover:border-[#D4AF37] transition-all flex flex-col md:flex-row justify-between items-center gap-4 overflow-hidden">
                  <div className="absolute left-0 inset-y-0 w-1.5 bg-gradient-to-b from-[#F5D77F] to-[#6D0808]"></div>
                  
                  <div className="flex flex-1 items-center gap-5 pl-2">
                    <div className="w-12 h-12 rounded border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                      <q.icon size={24} />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold bg-[#1a0202] px-2 py-0.5 rounded border border-[#D4AF37]/40 w-fit">{q.tag}</span>
                      <h3 className="font-serif text-lg font-bold text-[#EEEAD7]">{q.title}</h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-[#6D0808] text-[#EEEAD7] font-mono text-[10px] font-bold border border-[#ff4444]/40">
                           +{q.xp} XP
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#1a0202] text-[#D4AF37] font-mono text-[10px] font-bold border border-[#D4AF37]/40">
                           +{q.crowns} Crowns
                        </span>
                        <span className="font-mono text-[10px] text-[#8d9685]">{q.stat}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <button className="px-5 py-2.5 rounded border border-[#D4AF37] bg-transparent text-[#D4AF37] font-serif text-xs font-bold uppercase tracking-widest hover:bg-[#6D0808] hover:text-[#EEEAD7] hover:border-[#ff4444] transition-all flex items-center gap-2">
                      <CheckCircle size={16} /> COMPLETE QUEST
                    </button>
                  </div>
                </article>
              ))}

            </div>

            {/* Right Col: Treasury & Chronicle */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              
              {/* The Treasury */}
              <div className="bg-[#1a0202] rounded-lg p-6 border border-[#D4AF37]/60 shadow-[0_4px_12px_rgba(0,0,0,0.8)] flex flex-col items-center relative overflow-hidden">
                <div className="flex items-center justify-between w-full mb-6 relative z-10">
                  <h3 className="font-serif text-lg font-bold text-[#EEEAD7] flex items-center gap-2">
                    <Shield size={18} className="text-[#D4AF37]" /> THE TREASURY
                  </h3>
                  <span className="font-mono text-[9px] text-[#8d9685] uppercase border border-[#D4AF37]/40 px-2 py-1 rounded">Vault Secure</span>
                </div>
                
                <div className="w-20 h-20 rounded-full bg-[radial-gradient(ellipse_at_center,_#F5D77F_0%,_#D4AF37_50%,_#947014_100%)] flex items-center justify-center text-[#1a0202] shadow-[0_0_30px_rgba(212,175,55,0.8)] mb-4 relative z-10">
                  <span className="font-serif text-4xl font-bold">✦</span>
                </div>
                
                <span className="font-serif text-3xl font-bold text-[#D4AF37] relative z-10">{currency?.balance || 0}</span>
                <span className="font-mono text-[10px] text-[#8d9685] uppercase text-center mt-2 relative z-10">Gilded Crowns • Obsidian Gold</span>
                
                <div className="w-full mt-6 space-y-2 border-t border-[#D4AF37]/20 pt-4 relative z-10">
                  <span className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest block mb-3">Recent Vault Influx</span>
                  <div className="flex justify-between items-center bg-[#6D0808]/20 p-2 rounded border border-[#6D0808]">
                    <span className="font-mono text-[11px] text-[#EEEAD7]">+ Solitude Rite</span>
                    <span className="font-mono text-[11px] font-bold text-[#D4AF37]">+15 Crowns</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#6D0808]/20 p-2 rounded border border-[#6D0808]">
                    <span className="font-mono text-[11px] text-[#8d9685]">- Raven Brooch</span>
                    <span className="font-mono text-[11px] font-bold text-[#ff4444]">-450 Crowns</span>
                  </div>
                </div>
              </div>

              {/* Chronicle of Deeds */}
              <div className="bg-[#1a0202] rounded-lg p-6 border border-[#D4AF37]/60 shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg font-bold text-[#EEEAD7] flex items-center gap-2">
                    <Archive size={18} className="text-[#D4AF37]" /> CHRONICLE
                  </h3>
                  <span className="font-mono text-[9px] text-[#8d9685] uppercase hover:text-[#D4AF37] cursor-pointer">Full Archive</span>
                </div>
                
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[9px] before:w-px before:bg-[#D4AF37]/30">
                  <div className="relative pl-8">
                    <span className="absolute left-[3px] top-1 w-3.5 h-3.5 rounded-full bg-[#1a0202] border-2 border-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
                    <p className="font-serif text-[15px] font-bold text-[#EEEAD7] tracking-wide">QUEST SEALED: Solitude</p>
                    <p className="font-mono text-[10px] text-[#8d9685] mt-1.5 leading-relaxed">Yielded +50 XP and +15 Crowns.</p>
                  </div>
                  <div className="relative pl-8">
                    <span className="absolute left-[3px] top-1 w-3.5 h-3.5 rounded-full bg-[#1a0202] border-2 border-[#D4AF37]"></span>
                    <p className="font-serif text-[15px] font-bold text-[#EEEAD7] tracking-wide">ASCENSION: Level 7</p>
                    <p className="font-mono text-[10px] text-[#8d9685] mt-1.5 leading-relaxed">Unlocked title Nightwalker.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

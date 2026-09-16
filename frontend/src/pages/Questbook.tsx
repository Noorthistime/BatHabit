import React, { useState, useEffect } from 'react';
import { 
  Search, SlidersHorizontal, BookOpen, Brain, 
  Dumbbell, Focus as FocusIcon, Eye, CheckCircle, 
  Flame, Calendar, Target, Award, Clock, X, Plus
} from 'lucide-react';
import { motion, animate, useMotionValue, useTransform } from 'framer-motion';

const CountUp = ({ to, prefix = "", suffix = "" }: { to: number, prefix?: string, suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const display = useTransform(rounded, (v) => `${prefix}${v}${suffix}`);

  useEffect(() => {
    const animation = animate(count, to, { duration: 1.5, ease: "easeOut" });
    return animation.stop;
  }, [count, to]);

  return <motion.span>{display}</motion.span>;
};

type Discipline = 'INTELLECT' | 'VITALITY' | 'FOCUS' | 'STRENGTH' | 'WISDOM';
type Tier = 'INITIATE' | 'ADEPT' | 'MASTER' | 'EPIC';

interface Quest {
  id: string;
  discipline: Discipline;
  type: string;
  tier: Tier;
  tierLevel: string;
  title: string;
  dueDate: string;
  dueStatus: 'normal' | 'urgent' | 'sealed';
  progress: {
    current: number;
    max: number;
    unit: string;
    label: string;
  };
  rewards: {
    xp: number;
    crowns: number;
    stat: string;
    statValue: string;
  };
  isSealed?: boolean;
}

const QUESTS: Quest[] = [
  {
    id: 'q1',
    discipline: 'INTELLECT',
    type: 'EPIC QUEST',
    tier: 'MASTER',
    tierLevel: 'TIER III',
    title: 'Master 30 Minutes of React & Vite Architecture',
    dueDate: 'Due Tonight • Nocturne Cycle 23:59',
    dueStatus: 'urgent',
    progress: { current: 25, max: 30, unit: 'mins', label: 'INSCRIBED PROGRESS' },
    rewards: { xp: 120, crowns: 40, stat: 'INT', statValue: '+2' }
  },
  {
    id: 'q2',
    discipline: 'VITALITY',
    type: 'DAILY RITUAL',
    tier: 'ADEPT',
    tierLevel: 'TIER II',
    title: 'Deep Focus: 5 km Dawn Run',
    dueDate: 'Due Before Sunset • Nocturnal Phase',
    dueStatus: 'normal',
    progress: { current: 3.8, max: 5.0, unit: 'km', label: 'STRIDE DISTANCE' },
    rewards: { xp: 80, crowns: 25, stat: 'VIT', statValue: '+3' }
  },
  {
    id: 'q3',
    discipline: 'FOCUS',
    type: 'ESSENTIAL VOW',
    tier: 'INITIATE',
    tierLevel: 'TIER I',
    title: 'Review 3 Algorithmic Systems & Notes',
    dueDate: 'Ready to Verify & Seal',
    dueStatus: 'normal',
    progress: { current: 3, max: 3, unit: 'systems', label: 'TOME INSCRIPTIONS' },
    rewards: { xp: 60, crowns: 20, stat: 'FOC', statValue: '+1' }
  },
  {
    id: 'q4',
    discipline: 'STRENGTH',
    type: 'PHYSICAL VIGIL',
    tier: 'ADEPT',
    tierLevel: 'TIER II',
    title: '45-Minute Kettlebell & Core Conditioning',
    dueDate: 'Due in 4 hours • Cold Sanctum',
    dueStatus: 'urgent',
    progress: { current: 20, max: 45, unit: 'mins', label: 'EXERTION THRESHOLD' },
    rewards: { xp: 90, crowns: 30, stat: 'STR', statValue: '+2' }
  },
  {
    id: 'q5',
    discipline: 'WISDOM',
    type: 'SOLITUDE RITE',
    tier: 'ADEPT',
    tierLevel: 'TIER II',
    title: 'Meditation in the Solitude Chamber (15m)',
    dueDate: 'Claimed 22 minutes ago • Waxing Moon',
    dueStatus: 'sealed',
    progress: { current: 15, max: 15, unit: 'mins', label: 'VOW INSCRIBED IN BLOODLINE' },
    rewards: { xp: 50, crowns: 15, stat: 'WIS', statValue: '+1' },
    isSealed: true
  }
];

const DISCIPLINES = ['ALL', 'INTELLECT', 'VITALITY', 'FOCUS', 'STRENGTH', 'WISDOM'];
const TIERS = ['ALL TIERS', 'INITIATE', 'ADEPT', 'MASTER'];

const GothicButton = ({ active, onClick, children, pulse = false }: any) => (
  <button
    onClick={onClick}
    className={`relative group px-2 py-1.5 sm:px-3 sm:py-2 border-none transition-all whitespace-nowrap overflow-hidden flex-shrink-0 ${
      active 
        ? 'bg-[#1B263B] dark:bg-[radial-gradient(ellipse_at_center,_rgba(35,6,8,1)_0%,_rgba(15,2,4,1)_100%)] text-[#D4AF37] dark:text-[#F5D77F] shadow-[0_0_12px_rgba(212,175,55,0.4)]' 
        : 'bg-[#1B263B]/40 dark:bg-[rgba(15,2,4,0.6)] text-[#F7F3E9]/60 dark:text-[#8d9685] hover:bg-[#1B263B]/60 dark:hover:bg-[#2A0505]'
    }`}
    style={{ clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)' }}
  >
    {/* Dynamic Ornate Frame */}
    <div className={`absolute inset-0 pointer-events-none transition-all duration-300 ${active ? 'opacity-100' : 'opacity-20 group-hover:opacity-40'}`}>
      
      {/* Central Border Lines */}
      <div className={`absolute top-0 left-3 right-3 h-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      <div className={`absolute bottom-0 left-3 right-3 h-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      <div className={`absolute left-0 top-3 bottom-3 w-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      <div className={`absolute right-0 top-3 bottom-3 w-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      
      {/* SVG Floral Corners */}
      {active && (
        <>
          {/* Top Left */}
          <svg className="absolute top-0 left-0 w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
            <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
            <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
          {/* Top Right */}
          <svg className="absolute top-0 right-0 w-4 h-4 text-[#D4AF37] transform rotate-90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
            <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
            <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
          {/* Bottom Right */}
          <svg className="absolute bottom-0 right-0 w-4 h-4 text-[#D4AF37] transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
            <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
            <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
          {/* Bottom Left */}
          <svg className="absolute bottom-0 left-0 w-4 h-4 text-[#D4AF37] transform -rotate-90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
            <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
            <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
        </>
      )}
    </div>
    
    <span className="relative z-10 flex items-center justify-center font-mono text-[8px] sm:text-[9px] uppercase tracking-wider font-bold">
      {active && pulse && <span className="mr-1.5 text-[8px] text-[#F5D77F] drop-shadow-[0_0_2px_rgba(245,215,127,1)] animate-[pulse_2s_ease-in-out_infinite]">✦</span>}
      {children}
    </span>
  </button>
);

export default function Questbook() {
  const [activeTab, setActiveTab] = useState('ACTIVE VOWS');
  const [selectedDisc, setSelectedDisc] = useState('ALL');
  const [selectedTier, setSelectedTier] = useState('ALL TIERS');
  const [showForgeModal, setShowForgeModal] = useState(false);

  const getDisciplineIcon = (disc: string) => {
    switch (disc) {
      case 'INTELLECT': return <Brain size={14} />;
      case 'VITALITY': return <Flame size={14} />;
      case 'FOCUS': return <Eye size={14} />;
      case 'STRENGTH': return <Dumbbell size={14} />;
      case 'WISDOM': return <BookOpen size={14} />;
      default: return <Target size={14} />;
    }
  };

  return (
    <>

      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">

        {/* Top Header Section */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 pb-5 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 relative">

          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase text-[#D4AF37] dark:text-[#F5D77F] tracking-[0.3em] flex items-center gap-1.5 bg-[#415A77]/20 dark:bg-[#250101] px-2.5 py-0.5 rounded border border-[#415A77]/40 dark:border-[#D4AF37]/35 shadow-inner">
                Sanctum Noctis • Chamber of Vows
              </span>
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl text-[#F7F3E9] dark:text-[#EEEAD7] tracking-tight font-bold drop-shadow-md">
              The Questbook
            </h1>
            <p className="font-sans text-sm text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-2xl leading-relaxed">
              Every vow inscribed resonates through the obsidian arches. Transmute mortal labor into sovereign arcane sovereignty through consecrated night vigils.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setShowForgeModal(true)}
                className="relative overflow-hidden px-6 py-3 border-none flex items-center gap-2 group transition-all duration-300 active:scale-95 bg-[#1B263B] dark:bg-[radial-gradient(ellipse_at_center,_rgba(60,8,12,1)_0%,_rgba(20,2,4,1)_100%)] text-[#D4AF37] dark:text-[#F5D77F] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(245,215,127,0.5)]"
                style={{ clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)' }}
              >
                {/* SVG Ornate Frame */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-[#D4AF37] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_5px_#F5D77F] transition-all"></div>
                  <div className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#D4AF37] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_5px_#F5D77F] transition-all"></div>
                  <div className="absolute left-0 top-4 bottom-4 w-[1.5px] bg-[#D4AF37] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_5px_#F5D77F] transition-all"></div>
                  <div className="absolute right-0 top-4 bottom-4 w-[1.5px] bg-[#D4AF37] opacity-50 group-hover:opacity-100 group-hover:shadow-[0_0_5px_#F5D77F] transition-all"></div>
                  
                  <svg className="absolute top-0 left-0 w-5 h-5 text-[#D4AF37] transition-transform duration-500 group-hover:scale-110 group-hover:text-[#F5D77F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
                    <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
                    <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
                  </svg>
                  <svg className="absolute top-0 right-0 w-5 h-5 text-[#D4AF37] transform rotate-90 transition-all duration-500 group-hover:scale-110 group-hover:rotate-90 group-hover:text-[#F5D77F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
                    <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
                    <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
                  </svg>
                  <svg className="absolute bottom-0 right-0 w-5 h-5 text-[#D4AF37] transform rotate-180 transition-all duration-500 group-hover:scale-110 group-hover:rotate-180 group-hover:text-[#F5D77F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
                    <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
                    <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
                  </svg>
                  <svg className="absolute bottom-0 left-0 w-5 h-5 text-[#D4AF37] transform -rotate-90 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-90 group-hover:text-[#F5D77F]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/>
                    <path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" />
                    <circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
                  </svg>
                </div>

                {/* Radiant Core Hover */}
                <div className="absolute inset-0 bg-[#F5D77F]/0 group-hover:bg-[#F5D77F]/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-white/20 dark:bg-white/10 w-16 blur-2xl skew-x-12 -translate-x-32 group-hover:animate-[sweep_1.5s_ease-in-out_infinite]"></div>

                <span className="relative z-10 flex items-center gap-2.5 font-serif text-[11px] lg:text-xs font-bold tracking-[0.2em]">
                  <Plus size={16} className="text-[#F5D77F] group-hover:rotate-180 transition-transform duration-500 group-hover:scale-125" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F5D77F] to-[#D4AF37] group-hover:brightness-125 transition-all">FORGE A QUEST</span>
                </span>
              </button>
            </div>
          </div>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">

            {/* Stat 1: Unbroken Vow */}
            <div className="group flex items-center gap-4 px-5 py-4 rounded-[12px] bg-[#110102] dark:bg-[radial-gradient(ellipse_at_center,_rgba(45,5,8,1)_0%,_rgba(15,2,4,1)_100%)] border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_4px_25px_rgba(212,175,55,0.2)]">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center border border-[#D4AF37]/50 text-[#F5D77F] shadow-[inset_0_0_8px_rgba(212,175,55,0.1)] transition-all duration-300 group-hover:bg-[#D4AF37]/10 group-hover:border-[#F5D77F] group-hover:scale-110">
                <Flame size={20} strokeWidth={1.5} className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 leading-none mb-1.5">
                  <span className="font-serif text-2xl font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.2)]">
                    <CountUp to={4} />
                  </span>
                  <span className="font-mono text-[11px] text-[#F7F3E9]/60 dark:text-[#F7F3E9]/50 uppercase tracking-wide">Days</span>
                </div>
                <span className="font-mono text-[9px] text-[#D4AF37] dark:text-[#D4AF37]/90 uppercase tracking-[0.15em] font-bold">UNBROKEN VOW</span>
              </div>
            </div>

            {/* Stat 2: Sealed Vows */}
            <div className="group flex items-center gap-4 px-5 py-4 rounded-[12px] bg-[#110102] dark:bg-[radial-gradient(ellipse_at_center,_rgba(45,5,8,1)_0%,_rgba(15,2,4,1)_100%)] border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_4px_25px_rgba(212,175,55,0.2)]">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center border border-[#D4AF37]/50 text-[#F5D77F] shadow-[inset_0_0_8px_rgba(212,175,55,0.1)] transition-all duration-300 group-hover:bg-[#D4AF37]/10 group-hover:border-[#F5D77F] group-hover:scale-110">
                <Award size={20} strokeWidth={1.5} className="transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 leading-none mb-1.5">
                  <span className="font-serif text-2xl font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.2)]">
                    <CountUp to={1} />
                  </span>
                </div>
                <span className="font-mono text-[9px] text-[#D4AF37] dark:text-[#D4AF37]/90 uppercase tracking-[0.15em] font-bold">SEALED VOWS</span>
              </div>
            </div>

            {/* Stat 3: XP & Crowns */}
            <div className="group flex items-center gap-4 px-5 py-4 rounded-[12px] bg-[#110102] dark:bg-[radial-gradient(ellipse_at_center,_rgba(45,5,8,1)_0%,_rgba(15,2,4,1)_100%)] border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_4px_25px_rgba(212,175,55,0.2)]">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center border border-[#D4AF37]/50 text-[#F5D77F] shadow-[inset_0_0_8px_rgba(212,175,55,0.1)] transition-all duration-300 group-hover:bg-[#D4AF37]/10 group-hover:border-[#F5D77F] group-hover:scale-110">
                <Target size={20} strokeWidth={1.5} className="transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 leading-none mb-1.5">
                  <span className="font-serif text-2xl font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.2)]">
                    <CountUp to={310} prefix="+" />
                  </span>
                  <span className="font-mono text-[11px] text-[#F7F3E9]/60 dark:text-[#F7F3E9]/50 uppercase tracking-wide">XP</span>
                </div>
                <span className="font-mono text-[9px] text-[#D4AF37] dark:text-[#D4AF37]/90 uppercase tracking-[0.15em] font-bold">+95 CROWNS</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabs and Filters - Dual Ribbon Layout */}
        <div className="flex flex-col pt-4">
          
          {/* Ribbon 1: Search (Left) & Tabs (Right) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-3 border-b border-[#415A77]/30 dark:border-[#D4AF37]/15">
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-1/2 shrink-0 lg:pr-8 group h-8 flex items-center">
              
              <div 
                className="absolute inset-0 right-0 lg:right-8 bg-[#1B263B]/30 dark:bg-[radial-gradient(ellipse_at_center,_rgba(35,6,8,0.7)_0%,_rgba(15,2,4,0.9)_100%)] pointer-events-none"
              >
                {/* Stepped edge line top and bottom */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 200 40" fill="none" stroke="#D4AF37">
                  <path d="M 12,1 L 95,1 L 100,4 L 105,1 L 188,1" strokeWidth="0.5" opacity="0.6"/>
                  <path d="M 12,39 L 95,39 L 100,36 L 105,39 L 188,39" strokeWidth="0.5" opacity="0.6"/>
                  <path d="M 1,12 L 1,28" strokeWidth="0.5" opacity="0.6"/>
                  <path d="M 199,12 L 199,28" strokeWidth="0.5" opacity="0.6"/>
                </svg>

                {/* Left Ornate Scroll */}
                <svg className="absolute left-0 top-0 h-full w-4 text-[#D4AF37] opacity-80 pointer-events-none" viewBox="0 0 16 32" fill="currentColor">
                  <path d="M 16,0 C 8,0 4,4 4,10 C 4,14 10,16 10,16 C 10,16 4,18 4,22 C 4,28 8,32 16,32 L 0,32 L 0,0 Z" opacity="0.4"/>
                  <path d="M 16,0 C 10,0 8,4 8,10 C 8,14 12,16 12,16 C 12,16 8,18 8,22 C 8,28 10,32 16,32 L 0,32 L 0,0 Z"/>
                  <circle cx="4" cy="16" r="1" fill="#F5D77F" />
                </svg>

                {/* Right Ornate Scroll */}
                <svg className="absolute right-0 top-0 h-full w-4 text-[#D4AF37] opacity-80 pointer-events-none transform rotate-180" viewBox="0 0 16 32" fill="currentColor">
                  <path d="M 16,0 C 8,0 4,4 4,10 C 4,14 10,16 10,16 C 10,16 4,18 4,22 C 4,28 8,32 16,32 L 0,32 L 0,0 Z" opacity="0.4"/>
                  <path d="M 16,0 C 10,0 8,4 8,10 C 8,14 12,16 12,16 C 12,16 8,18 8,22 C 8,28 10,32 16,32 L 0,32 L 0,0 Z"/>
                  <circle cx="4" cy="16" r="1" fill="#F5D77F" />
                </svg>
              </div>

              <Search size={14} className="absolute left-4 text-[#D4AF37] dark:text-[#F5D77F]/60 z-10" />
              
              <input 
                type="text" 
                placeholder="Search active vows or ancient rites..."
                className="w-full h-full relative z-10 bg-transparent text-[#F7F3E9] dark:text-[#EEEAD7] text-[10px] pl-10 pr-8 focus:outline-none placeholder-[#F7F3E9]/40 dark:placeholder-[#8d9685]/50 transition-all font-mono tracking-wide"
              />
              <div className="absolute right-4 lg:right-12 p-1 z-10 cursor-pointer text-[#D4AF37] dark:text-[#F5D77F]/80 hover:text-[#F5D77F] hover:scale-110 transition-all flex items-center">
                <SlidersHorizontal size={12} />
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-start w-full lg:w-1/2 gap-1.5">
              {['ACTIVE VOWS (4)', 'COMPLETED / SEALED (1)', 'RECURRING RITES (3)', 'ALL CODEX (5)'].map((tab) => (
                <GothicButton 
                  key={tab} 
                  active={activeTab === tab.split(' (')[0]} 
                  onClick={() => setActiveTab(tab.split(' (')[0])}
                  pulse={true}
                >
                  {tab}
                </GothicButton>
              ))}
            </div>
          </div>

          {/* Ribbon 2: Disciplines (Left) & Tiers (Right) */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pt-3 pb-2">
            
            {/* Disciplines */}
            <div className="flex flex-wrap items-center justify-start w-full xl:w-1/2 gap-1.5 xl:pr-8">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37] dark:text-[#F5D77F] font-bold mr-1">✦ DISCIPLINES:</span>
              {DISCIPLINES.map(d => (
                <GothicButton 
                  key={d} 
                  active={selectedDisc === d} 
                  onClick={() => setSelectedDisc(d)}
                >
                  {d}
                </GothicButton>
              ))}
            </div>

            {/* Tiers */}
            <div className="flex flex-wrap items-center justify-start w-full xl:w-1/2 gap-1.5">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37] dark:text-[#F5D77F] font-bold mr-1 xl:ml-0">TIER:</span>
              {TIERS.map(t => (
                <GothicButton 
                  key={t} 
                  active={selectedTier === t} 
                  onClick={() => setSelectedTier(t)}
                >
                  {t}
                </GothicButton>
              ))}
            </div>

          </div>
        </div>

        {/* Quests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 pb-12 overflow-hidden">
          {QUESTS.map((quest, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              key={quest.id}
              className={`flex flex-col relative bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md rounded-xl p-5 border transition-all hover:scale-[1.01] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] ${quest.isSealed
                ? 'border-[#415A77]/30 dark:border-[#D4AF37]/20 opacity-60'
                : 'border-[#415A77]/60 dark:border-[#D4AF37]/35 hover:border-[#415A77] dark:hover:border-[#F5D77F] shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                }`}
            >
              {/* Ambient Glow for Active Quests */}
              {!quest.isSealed && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 dark:bg-[#F5D77F]/5 rounded-bl-full blur-[40px] pointer-events-none"></div>
              )}

              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded bg-[#1B263B] dark:bg-[#200000] border ${quest.isSealed ? 'border-[#415A77]/30 dark:border-[#D4AF37]/30 text-[#F7F3E9]/40' : 'border-[#415A77]/50 dark:border-[#D4AF37]/45 text-[#D4AF37] dark:text-[#F5D77F] shadow-inner'}`}>
                    {getDisciplineIcon(quest.discipline)}
                  </div>
                  <span className={`font-mono text-[9px] uppercase tracking-widest font-bold ${quest.isSealed ? 'text-[#F7F3E9]/50 dark:text-[#8d9685]' : 'text-[#D4AF37] dark:text-[#F5D77F]'}`}>
                    {quest.discipline} • {quest.type}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {!quest.isSealed ? (
                    <div className="flex items-center gap-1.5 bg-[#1B263B] dark:bg-[#200000] border border-[#415A77] dark:border-[#D4AF37]/45 px-2 py-1 rounded shadow-inner">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#F7F3E9] dark:text-[#EEEAD7] font-bold">{quest.tierLevel} • {quest.tier}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 bg-[#1B263B]/50 dark:bg-[#1a0101] border border-[#415A77]/50 dark:border-[#D4AF37]/30 px-2 py-1 rounded">
                      <CheckCircle size={10} className="text-[#D4AF37] dark:text-[#F5D77F]" />
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#D4AF37] dark:text-[#F5D77F]">RITE SEALED</span>
                    </div>
                  )}
                  <button className="text-[#F7F3E9]/40 dark:text-[#D4AF37]/60 hover:text-[#D4AF37] dark:hover:text-[#F5D77F] transition-colors">
                    <span className="font-serif font-bold tracking-widest leading-none block -mt-1">...</span>
                  </button>
                </div>
              </div>

              {/* Title & Due */}
              <div className="flex flex-col gap-2 mb-8 relative z-10">
                <h3 className={`font-serif text-xl font-bold ${quest.isSealed ? 'text-[#F7F3E9]/50 dark:text-[#8d9685] line-through decoration-[#415A77] dark:decoration-[#D4AF37]/40' : 'text-[#F7F3E9] dark:text-[#EEEAD7] drop-shadow-sm'}`}>
                  {quest.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  {quest.isSealed ? (
                    <CheckCircle size={12} className="text-[#F7F3E9]/40 dark:text-[#8d9685]" />
                  ) : quest.dueStatus === 'urgent' ? (
                    <Clock size={12} className="text-[#D4AF37] dark:text-[#F5D77F]" />
                  ) : (
                    <Calendar size={12} className="text-[#F7F3E9]/50 dark:text-[#8d9685]" />
                  )}
                  <span className={`font-sans text-xs ${quest.isSealed ? 'text-[#F7F3E9]/40 dark:text-[#8d9685]' : quest.dueStatus === 'urgent' ? 'text-[#D4AF37] dark:text-[#F5D77F]' : 'text-[#F7F3E9]/60 dark:text-[#8d9685]'}`}>
                    {quest.dueDate}
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div className="flex flex-col gap-2 mb-8 relative z-10">
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#F7F3E9]/60 dark:text-[#C5A059]">
                  <span>{quest.progress.label}</span>
                  <span className="font-bold text-white dark:text-[#EEEAD7]">
                    {quest.progress.current} / {quest.progress.max} {quest.progress.unit} ({Math.round((quest.progress.current / quest.progress.max) * 100)}%)
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#1B263B] dark:bg-[#100000] rounded-full overflow-hidden border border-[#415A77]/30 dark:border-[#D4AF37]/35">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${quest.isSealed ? 'bg-[#415A77] dark:bg-[#4a0404]' : 'bg-[#D4AF37] dark:bg-gradient-to-r dark:from-[#6D0808] dark:to-[#F5D77F]'}`}
                    style={{ width: `${(quest.progress.current / quest.progress.max) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Footer / Bounties */}
              <div className="mt-auto flex items-center justify-between border-t border-[#415A77]/30 dark:border-[#D4AF37]/25 pt-4 relative z-10">

                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#F7F3E9]/40 dark:text-[#8d9685] mr-1">TITHE:</span>
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded ${quest.isSealed ? 'bg-[#1B263B]/30 dark:bg-[#1a0101] border-[#415A77]/30 dark:border-[#D4AF37]/20 text-[#F7F3E9]/40 dark:text-[#8d9685]' : 'bg-[#1B263B] dark:bg-[#200000] border-[#415A77]/50 dark:border-[#D4AF37]/45 text-white dark:text-[#EEEAD7]'}`}>
                    +{quest.rewards.xp} XP
                  </span>
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded ${quest.isSealed ? 'bg-[#1B263B]/30 dark:bg-[#1a0101] border-[#415A77]/30 dark:border-[#D4AF37]/20 text-[#F7F3E9]/40 dark:text-[#8d9685]' : 'bg-[#D4AF37]/10 dark:bg-[#D4AF37]/10 border-[#D4AF37]/30 dark:border-[#F5D77F]/50 text-[#D4AF37] dark:text-[#F5D77F]'}`}>
                    +{quest.rewards.crowns} Crowns
                  </span>
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-widest border px-2 py-0.5 rounded ${quest.isSealed ? 'bg-[#1B263B]/30 dark:bg-[#1a0101] border-[#415A77]/30 dark:border-[#D4AF37]/20 text-[#F7F3E9]/40 dark:text-[#8d9685]' : 'bg-[#415A77]/20 dark:bg-[#200000] border-[#415A77]/50 dark:border-[#D4AF37]/45 text-[#F7F3E9]/80 dark:text-[#EEEAD7]'}`}>
                    {quest.rewards.stat} {quest.rewards.statValue}
                  </span>
                </div>

                {!quest.isSealed && (
                  <button className="bg-gradient-to-r from-[#1B263B] to-[#415A77] dark:from-[#6D0808] dark:to-[#8e0c0c] text-[#D4AF37] dark:text-[#F5D77F] border border-[#415A77] dark:border-[#F5D77F] px-4 py-2 rounded font-serif text-[10px] font-bold uppercase tracking-widest hover:brightness-125 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.35)] flex items-center gap-1.5 whitespace-nowrap">
                    <CheckCircle size={12} />
                    COMPLETE QUEST
                  </button>
                )}

              </div>

            </motion.div>
          ))}
        </div>

        {/* Forge Quest Modal */}
      </div>
      {showForgeModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ background: 'rgba(10,2,4,0.85)', backdropFilter: 'blur(8px)' }}>
          <div
            className="w-full max-w-lg max-h-[90vh] overflow-y-auto relative"
            style={{ background: 'linear-gradient(135deg, #160003 0%, #0c0608 100%)', border: '1px solid rgba(212,175,55,0.5)', boxShadow: '0 0 60px rgba(109,8,8,0.6), inset 0 1px 0 rgba(212,175,55,0.15)' }}
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]/70" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]/70" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]/70" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]/70" />

            <div className="p-6 border-b border-[#D4AF37]/20 flex items-center justify-between">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">Sanctum Noctis • Codex of Vows</p>
                <h2 className="font-serif text-xl font-bold text-[#EEEAD7] mt-0.5">Forge a Quest</h2>
              </div>
              <button onClick={() => setShowForgeModal(false)} className="text-[#8d9685] hover:text-[#D4AF37] transition-colors">
                <X size={18} />
              </button>
            </div>

            <form className="p-6 flex flex-col gap-4" onSubmit={e => { e.preventDefault(); setShowForgeModal(false); }}>

              {/* Quest Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">Quest Name *</label>
                <input
                  type="text"
                  placeholder="Name your vow..."
                  className="bg-[#1a0204] border border-[#D4AF37]/25 px-3 py-2.5 font-sans text-sm text-[#EEEAD7] placeholder-[#8d9685]/50 focus:border-[#D4AF37]/60 focus:outline-none transition-colors"
                  style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
                />
              </div>

              {/* Category + Discipline row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">Category</label>
                  <select className="bg-[#1a0204] border border-[#D4AF37]/25 px-3 py-2.5 font-mono text-xs text-[#EEEAD7] focus:border-[#D4AF37]/60 focus:outline-none" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
                    <option value="">Select...</option>
                    <option>Daily Rite</option>
                    <option>Weekly Vow</option>
                    <option>Epic Quest</option>
                    <option>Recurring Rite</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">Discipline</label>
                  <select className="bg-[#1a0204] border border-[#D4AF37]/25 px-3 py-2.5 font-mono text-xs text-[#EEEAD7] focus:border-[#D4AF37]/60 focus:outline-none" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}>
                    <option value="">Select...</option>
                    <option>Intellect</option>
                    <option>Vitality</option>
                    <option>Focus</option>
                    <option>Strength</option>
                    <option>Wisdom</option>
                  </select>
                </div>
              </div>

              {/* Difficulty */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">Difficulty Tier</label>
                <div className="flex gap-2">
                  {['I', 'II', 'III', 'IV', 'V'].map(t => (
                    <button
                      key={t}
                      type="button"
                      className="flex-1 py-2 font-mono text-xs font-bold transition-all"
                      style={{ background: t === 'III' ? '#6D0808' : 'rgba(35,6,8,0.8)', border: `1px solid ${t === 'III' ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.15)'}`, color: t === 'III' ? '#D4AF37' : '#8d9685' }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* XP + Crowns */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">XP Reward</label>
                  <input type="number" defaultValue={50} className="bg-[#1a0204] border border-[#D4AF37]/25 px-3 py-2.5 font-mono text-sm text-[#EEEAD7] focus:border-[#D4AF37]/60 focus:outline-none" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">Crown Reward</label>
                  <input type="number" defaultValue={15} className="bg-[#1a0204] border border-[#D4AF37]/25 px-3 py-2.5 font-mono text-sm text-[#EEEAD7] focus:border-[#D4AF37]/60 focus:outline-none" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }} />
                </div>
              </div>

              {/* Due Date */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">Due Date</label>
                <input type="date" className="bg-[#1a0204] border border-[#D4AF37]/25 px-3 py-2.5 font-mono text-sm text-[#EEEAD7] focus:border-[#D4AF37]/60 focus:outline-none" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)', colorScheme: 'dark' }} />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37]">Quest Lore (optional)</label>
                <textarea
                  rows={3}
                  placeholder="Describe the ancient rite..."
                  className="bg-[#1a0204] border border-[#D4AF37]/25 px-3 py-2.5 font-sans text-sm text-[#EEEAD7] placeholder-[#8d9685]/50 focus:border-[#D4AF37]/60 focus:outline-none resize-none"
                  style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 font-mono text-xs uppercase tracking-widest font-bold transition-all"
                  style={{ background: '#6D0808', border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', boxShadow: '0 0 20px rgba(109,8,8,0.5)' }}
                >
                  ✦ Seal the Vow
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgeModal(false)}
                  className="px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all"
                  style={{ background: 'transparent', border: '1px solid rgba(212,175,55,0.2)', color: '#8d9685' }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

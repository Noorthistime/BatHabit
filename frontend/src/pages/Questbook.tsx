import React, { useState } from 'react';
import {
  Search, SlidersHorizontal, BookOpen, Brain,
  Dumbbell, Focus as FocusIcon, Eye, CheckCircle,
  Flame, Calendar, Target, Award, Clock, X, Plus
} from 'lucide-react';

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
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 pb-4 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 relative mb-6">

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
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1B263B] to-[#415A77] dark:from-[#6D0808] dark:to-[#8e0c0c] text-[#D4AF37] dark:text-[#F5D77F] font-serif text-xs font-bold tracking-widest hover:brightness-125 border border-[#415A77] dark:border-[#F5D77F] flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.35)] transition-all"
              >
                <Plus size={16} /> FORGE A QUEST <span className="font-mono text-[10px] ml-1 text-[#D4AF37]/70 dark:text-[#F5D77F]/70">[N]</span>
              </button>
            </div>
          </div>

          {/* Quick Stats Pills */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D0F4F0] dark:from-[#2b0303] to-[#415A77] dark:to-[#120000] flex items-center justify-center border border-[#415A77] dark:border-[#D4AF37]/45 shadow-inner text-[#D4AF37] dark:text-[#F5D77F]">
                <Flame size={20} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-xl font-bold text-[#D4AF37] dark:text-[#F5D77F]">4</span>
                  <span className="font-mono text-xs text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase">Days</span>
                </div>
                <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase tracking-widest font-semibold">UNBROKEN VOW</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D0F4F0] dark:from-[#2b0303] to-[#415A77] dark:to-[#120000] flex items-center justify-center border border-[#415A77] dark:border-[#D4AF37]/45 shadow-inner text-[#D4AF37] dark:text-[#F5D77F]">
                <Award size={20} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-xl font-bold text-[#D4AF37] dark:text-[#F5D77F]">1</span>
                </div>
                <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase tracking-widest font-semibold">SEALED VOWS</span>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#D0F4F0] dark:from-[#2b0303] to-[#415A77] dark:to-[#120000] flex items-center justify-center border border-[#415A77] dark:border-[#D4AF37]/45 shadow-inner text-[#D4AF37] dark:text-[#F5D77F]">
                <Target size={20} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-xl font-bold text-[#D4AF37] dark:text-[#F5D77F]">+310</span>
                  <span className="font-mono text-xs text-[#D4AF37]/70 dark:text-[#F5D77F]/70 uppercase">XP</span>
                </div>
                <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase tracking-widest font-semibold">+95 CROWNS</span>
              </div>
            </div>

          </div>

        </div>

        {/* Tabs and Filters - Dual Ribbon Layout */}
        <div className="flex flex-col border-t border-[#415A77]/50 dark:border-[#D4AF37]/25 pt-2 mt-4">
          
          {/* Ribbon 1: Tabs (Left) & Search (Right) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-3 border-b border-[#415A77]/30 dark:border-[#D4AF37]/15">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-6">
              {['ACTIVE VOWS (4)', 'COMPLETED / SEALED (1)', 'RECURRING RITES (3)', 'ALL CODEX (5)'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.split(' (')[0])}
                  className={`pb-2 border-b-2 font-mono text-[10px] uppercase tracking-widest font-bold transition-all ${
                    activeTab === tab.split(' (')[0]
                      ? 'border-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]' 
                      : 'border-transparent text-[#F7F3E9]/50 dark:text-[#8d9685] hover:text-[#F7F3E9]/80 dark:hover:text-[#F5D77F]/80'
                  }`}
                >
                  {activeTab === tab.split(' (')[0] && <span className="mr-2 text-[8px] animate-pulse">✦</span>}
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-sm shrink-0">
              <Search size={14} className="absolute left-3 top-2.5 text-[#D4AF37] dark:text-[#F5D77F]/60" />
              <input 
                type="text" 
                placeholder="Search active vows or ancient rites..."
                className="w-full bg-[#1B263B]/30 dark:bg-[#120000]/80 border border-[#415A77]/50 dark:border-[#D4AF37]/35 text-[#F7F3E9] dark:text-[#EEEAD7] text-sm pl-9 pr-3 py-2 rounded focus:outline-none focus:border-[#D4AF37]/70 placeholder-[#F7F3E9]/30 dark:placeholder-[#8d9685]/50 transition-all shadow-inner"
              />
              <div className="absolute right-2 top-1.5 p-1 bg-[#415A77]/20 dark:bg-[#3a0404] rounded border border-[#415A77]/30 dark:border-[#D4AF37]/30 cursor-pointer hover:bg-[#415A77]/40 dark:hover:bg-[#4a0505]">
                <SlidersHorizontal size={12} className="text-[#D4AF37] dark:text-[#F5D77F]/80" />
              </div>
            </div>
          </div>

          {/* Ribbon 2: Disciplines (Left) & Tiers (Right) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-4 pb-2">
            
            {/* Disciplines */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37] dark:text-[#F5D77F] font-bold mr-2">✦ DISCIPLINES:</span>
              {DISCIPLINES.map(d => (
                <button 
                  key={d} onClick={() => setSelectedDisc(d)}
                  className={`px-3 py-1 rounded border font-mono text-[9px] uppercase tracking-widest transition-all ${
                    selectedDisc === d 
                      ? 'bg-[#D4AF37]/10 dark:bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] dark:text-[#F5D77F] font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)]' 
                      : 'bg-transparent border-[#415A77]/30 dark:border-[#D4AF37]/30 text-[#F7F3E9]/50 dark:text-[#8d9685] hover:border-[#D4AF37]/60'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Tiers */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37] dark:text-[#F5D77F] font-bold mr-2">TIER:</span>
              {TIERS.map(t => (
                <button 
                  key={t} onClick={() => setSelectedTier(t)}
                  className={`px-3 py-1 rounded border font-mono text-[9px] uppercase tracking-widest transition-all ${
                    selectedTier === t 
                      ? 'bg-[#D4AF37]/10 dark:bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37] dark:text-[#F5D77F] font-bold shadow-[0_0_10px_rgba(212,175,55,0.2)]' 
                      : 'bg-transparent border-[#415A77]/30 dark:border-[#D4AF37]/30 text-[#F7F3E9]/50 dark:text-[#8d9685] hover:border-[#D4AF37]/60'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Quests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 pb-12">
          {QUESTS.map((quest) => (
            <div
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

            </div>
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

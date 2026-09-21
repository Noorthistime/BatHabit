import React, { useState } from 'react';
import { Shield, Zap, Heart, Eye, BookOpen, Star, Award, TrendingUp, ChevronRight, Crown, Swords, Scroll, Skull, Flame, Moon } from 'lucide-react';
import { GiDragonHead } from 'react-icons/gi';
import { motion } from 'framer-motion';

const ATTRIBUTES = [
  { key: 'STR', label: 'Strength', icon: Shield, value: 72, color: '#ff6b6b', desc: 'Physical discipline & endurance' },
  { key: 'INT', label: 'Intellect', icon: BookOpen, value: 88, color: '#D4AF37', desc: 'Mental focus & learning' },
  { key: 'VIT', label: 'Vitality', icon: Heart, value: 65, color: '#6ee7b7', desc: 'Health & recovery rituals' },
  { key: 'FOC', label: 'Focus', icon: Eye, value: 91, color: '#818cf8', desc: 'Concentration & mindfulness' },
  { key: 'WIS', label: 'Wisdom', icon: Zap, value: 79, color: '#fbbf24', desc: 'Insight & reflection practices' },
];

const EVOLUTION_STAGES = [
  { rank: 'I', title: 'Initiate', xpRequired: 0, xpTotal: 500, achieved: true, class: 'Neophyte of the Obsidian Order' },
  { rank: 'II', title: 'Adept', xpRequired: 500, xpTotal: 1500, achieved: true, class: 'Acolyte of the Crimson Path' },
  { rank: 'III', title: 'Seeker', xpRequired: 1500, xpTotal: 3500, achieved: true, class: 'Keeper of the Ancient Flame' },
  { rank: 'IV', title: 'Ascendant', xpRequired: 3500, xpTotal: 7000, achieved: false, class: 'Warden of the Lunar Codex', current: true },
  { rank: 'V', title: 'Master', xpRequired: 7000, xpTotal: 15000, achieved: false, class: 'Sovereign of the Eternal Night' },
];

const ACHIEVEMENTS = [
  { icon: Flame, title: 'Iron Resolve', desc: '7-day unbroken streak', rarity: 'Rare', earned: true },
  { icon: Zap, title: 'Mind Forge', desc: 'Completed 50 Intellect quests', rarity: 'Epic', earned: true },
  { icon: Moon, title: 'Nocturnal Rite', desc: 'Completed quest past midnight', rarity: 'Common', earned: true },
  { icon: Eye, title: 'The Watcher', desc: '30-day login streak', rarity: 'Legendary', earned: false },
  { icon: Skull, title: 'Obsidian Will', desc: '100-day streak', rarity: 'Mythic', earned: false },
  { icon: Award, title: 'Relic Forged', desc: 'Reached Rank IV', rarity: 'Epic', earned: false },
  { icon: Crown, title: 'Golden Sovereign', desc: 'Mastered all basic attributes', rarity: 'Legendary', earned: false },
  { icon: Shield, title: 'Silent Guardian', desc: 'Maintained 100% focus for 10 days', rarity: 'Epic', earned: false },
  { icon: Swords, title: 'Blood Ritual', desc: 'Sacrificed 500 XP to upgrade a relic', rarity: 'Mythic', earned: false },
];

const RARITY_COLORS: Record<string, { text: string, border: string, bg: string, frame: string }> = {
  Common: { text: '#a69052', border: 'rgba(166,144,82,0.4)', bg: 'rgba(166,144,82,0.05)', frame: 'rgba(166,144,82,0.3)' },
  Rare: { text: '#D4AF37', border: 'rgba(212,175,55,0.6)', bg: 'rgba(212,175,55,0.1)', frame: 'rgba(212,175,55,0.5)' },
  Epic: { text: '#ff4d4d', border: 'rgba(255,77,77,0.5)', bg: 'rgba(255,77,77,0.1)', frame: 'rgba(255,77,77,0.4)' },
  Legendary: { text: '#F5D77F', border: '#D4AF37', bg: 'rgba(245,215,127,0.15)', frame: '#D4AF37' },
  Mythic: { text: '#F5D77F', border: '#D4AF37', bg: 'rgba(245,215,127,0.2)', frame: '#ff4d4d' },
};

const AnimatedNumber = ({ value, duration = 1000 }: { value: number, duration?: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeOut * value));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return <>{count}</>;
};

export function Grimoire() {
  const [activeTab, setActiveTab] = useState<'attributes' | 'evolution' | 'achievements'>('attributes');
  const currentXP = 4820;
  const nextXP = 7000;
  const progress = ((currentXP - 3500) / (7000 - 3500)) * 100;

  return (
    <>


      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-2 min-h-[calc(100vh-120px)]">

        {/* Page Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 pb-2 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 relative mb-0">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase text-[#D4AF37] dark:text-[#F5D77F] tracking-[0.3em] flex items-center gap-1.5 bg-[#415A77]/20 dark:bg-[#250101] px-2.5 py-0.5 rounded border border-[#415A77]/40 dark:border-[#D4AF37]/35 shadow-inner">
                Sanctum Noctis • The Grimoire
              </span>
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl text-[#F7F3E9] dark:text-[#EEEAD7] tracking-tight font-bold drop-shadow-md">
              The Grimoire
            </h1>
            <p className="font-sans text-sm text-[#F7F3E9]/70 dark:text-[#8d9685] leading-relaxed">
              Your living character scroll. Every completed vow carves new runes into your eternal legend.
            </p>
          </div>
        </div>

        {/* Character Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 flex-1">
          <div className="rounded-xl p-4 flex flex-col items-center text-center gap-3 justify-between relative col-span-1 h-full bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.85)] backdrop-blur-xl border border-[#415A77]/60 dark:border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(109,8,8,0.5)]">
            {/* Background Watermark */}
            <div className="absolute bottom-0 left-0 right-0 h-56 overflow-hidden rounded-b-xl pointer-events-none flex items-end justify-center opacity-[0.06] text-[#D4AF37]">
              <GiDragonHead className="w-64 h-64 translate-y-4" />
            </div>
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/80" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/80" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/80" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/80" />

            {/* Avatar */}
            <div className="relative mt-2">
              {/* Pulsing Aura */}
              <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#D4AF37', boxShadow: '0 0 40px #D4AF37' }}></div>
              <div className="absolute inset-[-15px] rounded-full opacity-30 blur-xl" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}></div>

              <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center text-5xl font-serif font-bold text-[#F5D77F] shadow-[0_0_30px_rgba(212,175,55,0.4)] z-10"
                style={{ background: 'linear-gradient(135deg, #4a0505 0%, #8e0c0c 100%)', border: '2px solid rgba(212,175,55,0.8)' }}
              >
                A
              </div>
              <div
                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold text-[#0c0608] z-20 shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                style={{ background: 'linear-gradient(135deg, #F5D77F 0%, #D4AF37 100%)', border: '2px solid #250101' }}
              >
                IV
              </div>
            </div>

            <div className="mt-2">
              <p className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-[0.4em] drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]">Rank IV Ascendant</p>
              <h2 className="font-serif text-2xl text-[#EEEAD7] font-bold mt-2 drop-shadow-md">Alistair Vance</h2>
              <p className="font-mono text-[10px] text-[#D4AF37]/80 uppercase tracking-widest mt-1">Keeper of the Ancient Flame</p>
            </div>

            {/* XP Bar */}
            <div className="w-full space-y-2 mt-2">
              <div className="flex justify-between font-mono text-[10px] text-[#8d9685] tracking-widest">
                <span>XP PROGRESS</span>
                <span className="text-[#D4AF37] drop-shadow-[0_0_3px_rgba(212,175,55,0.5)]">{currentXP.toLocaleString()} <span className="text-[#8d9685]">/ {nextXP.toLocaleString()}</span></span>
              </div>
              <div className="h-2.5 bg-[#1a0204] border border-[#D4AF37]/30 rounded-full overflow-hidden relative shadow-inner">
                {/* Liquid Gold/Blood Gradient */}
                <div
                  className="h-full relative transition-all duration-1000 ease-out rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #6D0808 0%, #b31212 50%, #D4AF37 100%)',
                    boxShadow: '0 0 15px rgba(212,175,55,0.6)',
                  }}
                >
                  {/* Shimmer effect inside the bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <p className="font-mono text-[9px] text-[#8d9685] text-right">{Math.round(nextXP - currentXP).toLocaleString()} XP to Rank V</p>
            </div>

            {/* Quick Stats */}
            <div className="w-full grid grid-cols-3 gap-2 border-t border-[#D4AF37]/20 pt-4 relative z-10">
              {[
                { label: 'QUESTS', value: '147' },
                { label: 'STREAK', value: '12d' },
                { label: 'CROWNS', value: '2840' },
              ].map(s => (
                <div key={s.label} className="text-center group">
                  <div className="font-mono text-lg font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform cursor-default">{s.value}</div>
                  <div className="font-mono text-[9px] text-[#D4AF37]/70 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Gothic Oath */}
            <div className="w-full mt-auto pt-4 relative z-10 flex flex-col items-center justify-center">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mb-2"></div>
              <p className="font-serif text-[#D4AF37]/70 italic text-xs leading-relaxed drop-shadow-md px-6">
                "Through the darkest vigils, the flame endures."
              </p>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-2"></div>
            </div>
          </div>

          {/* Right Panel — Tabs */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-2 h-full overflow-hidden">
            {/* Tab Selector */}
            <div className="relative flex justify-center items-center gap-6 py-2 mb-4">
              {/* Ornate Golden SVG Flourish Divider (Edges only) */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 flex justify-between items-center opacity-80 w-full px-2">
                {/* Left Flourish */}
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <circle cx="4" cy="12" r="1.5" fill="#D4AF37" />
                  <circle cx="10" cy="12" r="2" fill="#D4AF37" />
                  <line x1="16" y1="12" x2="30" y2="12" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M 30 12 Q 40 0, 50 12 T 60 12" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M 40 12 Q 45 20, 50 15 T 55 12" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  <circle cx="50" cy="12" r="2" fill="#D4AF37" />
                </svg>
                
                {/* Straight connecting line */}
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/30 to-[#D4AF37]/50" />
                
                {/* Right Flourish */}
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M 30 12 Q 20 0, 10 12 T 0 12" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M 20 12 Q 15 20, 10 15 T 5 12" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  <circle cx="10" cy="12" r="2" fill="#D4AF37" />
                  <line x1="30" y1="12" x2="44" y2="12" stroke="#D4AF37" strokeWidth="1.5" />
                  <circle cx="50" cy="12" r="2" fill="#D4AF37" />
                  <circle cx="56" cy="12" r="1.5" fill="#D4AF37" />
                </svg>
              </div>
              
              {(['attributes', 'evolution', 'achievements'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3.5 font-mono text-[10.5px] uppercase tracking-widest font-bold transition-all relative z-10 flex items-center justify-center group
                    ${activeTab === tab
                    ? 'text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                    : 'text-[#8d9685] hover:text-[#D4AF37]'
                    }`}
                >
                  {/* Absolute positioning keeps the background decoupled from button sizing */}
                  <svg 
                    className={`absolute inset-0 w-full h-full -z-10 transition-all duration-300 ${activeTab === tab ? 'drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]' : ''}`} 
                    preserveAspectRatio="none" 
                    viewBox="0 0 100 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Gothic Scalloped Plaque Shape */}
                    <path d="M 12 2 L 88 2 A 6 6 0 0 0 94 8 L 98 20 L 94 32 A 6 6 0 0 0 88 38 L 12 38 A 6 6 0 0 0 6 32 L 2 20 L 6 8 A 6 6 0 0 0 12 2 Z" fill="#230608" stroke={activeTab === tab ? "#D4AF37" : "rgba(212,175,55,0.5)"} strokeWidth={activeTab === tab ? "1.5" : "1"} vectorEffect="non-scaling-stroke" />
                    {/* Inner detailed ring for active tab */}
                    {activeTab === tab && <path d="M 14 5 L 86 5 A 4 4 0 0 0 91 9 L 94 20 L 91 31 A 4 4 0 0 0 86 35 L 14 35 A 4 4 0 0 0 9 31 L 6 20 L 9 9 A 4 4 0 0 0 14 5 Z" stroke="rgba(212,175,55,0.3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />}
                  </svg>
                  {tab}
                </button>
              ))}
            </div>

            {/* Attributes Tab */}
            {activeTab === 'attributes' && (
              <div className="flex flex-col gap-2 flex-1 min-h-0">
                {/* Total Power (Moved to top) */}
                <div
                  className="px-4 py-3 flex flex-col sm:flex-row items-center justify-between rounded-xl relative overflow-hidden group gap-2 mt-1"
                  style={{ background: 'radial-gradient(circle at center, rgba(109,8,8,0.6) 0%, rgba(15,2,4,0.9) 100%)', border: '1px solid rgba(212,175,55,0.5)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.1)' }}
                >
                  {/* Subtle Obsidian Texture */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

                  <div className="relative z-10 text-center sm:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-90 drop-shadow-md">Combined Power Level</p>
                    <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                      <p className="font-serif text-4xl font-bold text-[#F5D77F] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:animate-pulse">
                        <AnimatedNumber value={395} />
                      </p>
                      <p className="font-mono text-sm text-[#D4AF37]/50 font-bold">/ 500</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 px-4 py-2 bg-[#1a0204]/90 border border-[#D4AF37]/40 rounded backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default group/badge">
                    <TrendingUp size={16} className="text-[#D4AF37] transition-all duration-300 group-hover/badge:-translate-y-1 group-hover/badge:scale-125" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                      +<AnimatedNumber value={12} duration={1200} /> this week
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 flex-1 min-h-0">
                  {ATTRIBUTES.map((attr, index) => (
                    <div 
                      key={attr.key} 
                      className={index === 4 ? "col-span-1 sm:col-span-2 flex justify-center" : ""}
                    >
                      <div className={`p-3 flex flex-col gap-2 justify-between h-full relative rounded-xl bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-sm border border-[#415A77]/60 dark:border-[#D4AF37]/35 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] hover:border-[#415A77] dark:hover:border-[#F5D77F] group ${index === 4 ? 'w-full sm:w-[calc(50%-0.25rem)]' : 'w-full'}`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <attr.icon size={14} style={{ color: attr.color }} className="group-hover:scale-110 transition-transform" />
                            <span className="font-mono text-xs uppercase tracking-widest text-[#EEEAD7]">{attr.label}</span>
                          </div>
                          <span className="font-mono text-xl font-bold drop-shadow-[0_0_8px_currentColor]" style={{ color: attr.color }}>{attr.value}</span>
                        </div>
                        <p className="font-sans text-[11px] text-[#8d9685] leading-relaxed">{attr.desc}</p>

                        {/* Glowing RPG Energy Meter */}
                        <div className="h-1.5 w-full bg-[#1a0204] rounded-full overflow-hidden border border-white/5 relative mt-auto">
                          <div
                            className="h-full relative transition-all duration-1000 ease-out rounded-full"
                            style={{ width: `${attr.value}%`, background: `linear-gradient(90deg, transparent, ${attr.color})`, boxShadow: `0 0 10px ${attr.color}` }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/40 blur-[2px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Evolution Tab */}
            {activeTab === 'evolution' && (
              <div className="flex flex-col gap-1.5 flex-1 min-h-0">
                {EVOLUTION_STAGES.map((stage, i) => {
                  let animationProps = {};
                  let glowEffect = null;
                  
                  // Progressive Styling Variables
                  let bgStyle = '';
                  let borderStyle = '';
                  let iconBg = '';
                  let iconColor = '';
                  let iconBorder = '';
                  let iconShadow = 'none';

                  if (stage.rank === 'I') {
                    // Rank I - Basic
                    animationProps = { animate: { opacity: [0.8, 1, 0.8] }, transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(20,5,5,0.8)';
                    borderStyle = '1px solid rgba(212,175,55,0.15)';
                    iconBg = '#2A0505';
                    iconColor = '#D4AF37';
                    iconBorder = '1px solid rgba(212,175,55,0.3)';
                  } else if (stage.rank === 'II') {
                    // Rank II - Richer
                    animationProps = { animate: { boxShadow: ['0 0 0px rgba(109,8,8,0)', '0 0 10px rgba(109,8,8,0.2)', '0 0 0px rgba(109,8,8,0)'] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(35,6,8,0.85)';
                    borderStyle = '1px solid rgba(212,175,55,0.35)';
                    iconBg = '#4A0A0A';
                    iconColor = '#F5D77F';
                    iconBorder = '1px solid rgba(212,175,55,0.6)';
                  } else if (stage.rank === 'III') {
                    // Rank III - Bright & Imposing
                    animationProps = { animate: { boxShadow: ['0 0 5px rgba(212,175,55,0.1)', '0 0 20px rgba(212,175,55,0.3)', '0 0 5px rgba(212,175,55,0.1)'] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(50,8,12,0.9)';
                    borderStyle = '1px solid rgba(212,175,55,0.6)';
                    iconBg = '#6D0808';
                    iconColor = '#F5D77F';
                    iconBorder = '1px solid #D4AF37';
                    iconShadow = '0 0 10px rgba(212,175,55,0.5)';
                  } else if (stage.rank === 'IV') {
                    // Rank IV (CURRENT) - Blazing Gold
                    animationProps = {
                      animate: {
                        boxShadow: ['0 0 15px rgba(212,175,55,0.4), inset 0 0 15px rgba(212,175,55,0.2)', '0 0 30px rgba(212,175,55,0.8), inset 0 0 20px rgba(109,8,8,0.4)', '0 0 15px rgba(212,175,55,0.4), inset 0 0 15px rgba(212,175,55,0.2)'],
                        scale: [1, 1.015, 1]
                      },
                      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    };
                    glowEffect = (
                      <>
                        <motion.div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#6D0808]/40 to-transparent mix-blend-overlay" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                        <motion.div className="absolute inset-0 rounded-lg border border-[#D4AF37]/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                      </>
                    );
                    bgStyle = 'rgba(35,6,8,0.95)';
                    borderStyle = '1px solid rgba(212,175,55,0.8)';
                    iconBg = 'linear-gradient(135deg, #F5D77F 0%, #D4AF37 100%)';
                    iconColor = '#0c0608';
                    iconBorder = '2px solid #FFF';
                    iconShadow = '0 0 20px rgba(212,175,55,0.8)';
                  } else if (stage.rank === 'V') {
                    // Rank V - Locked
                    animationProps = { animate: { opacity: [0.3, 0.5, 0.3] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(15,2,4,0.3)';
                    borderStyle = '1px solid rgba(212,175,55,0.05)';
                    iconBg = '#0f0204';
                    iconColor = '#4a3c20';
                    iconBorder = '1px solid rgba(212,175,55,0.1)';
                  }

                  return (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                      key={stage.rank}
                      className="flex-1 min-h-0 flex"
                    >
                      <motion.div
                        {...animationProps}
                        className={`w-full h-full px-3 py-3 sm:px-4 sm:py-3.5 flex items-center gap-4 relative rounded-lg overflow-hidden ${stage.current ? 'ring-1 ring-[#D4AF37]' : ''}`}
                        style={{ background: bgStyle, border: borderStyle }}
                      >
                        {glowEffect}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold shrink-0 relative z-10"
                          style={{
                            background: iconBg,
                            color: iconColor,
                            border: iconBorder,
                            boxShadow: iconShadow
                          }}
                        >
                          {stage.rank}
                        </div>
                        <div className="flex-1 relative z-10">
                          <div className="flex items-center gap-2">
                            <span className={`font-serif text-sm font-bold ${stage.current ? 'text-[#F5D77F] drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]' : stage.achieved ? 'text-[#F5D77F]' : 'text-[#EEEAD7]'}`}>{stage.title}</span>
                            {stage.current && <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 uppercase tracking-wider font-bold shadow-[0_0_8px_rgba(212,175,55,0.4)]">CURRENT</span>}
                            {stage.achieved && !stage.current && <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#6D0808]/40 text-[#D4AF37]/60 border border-[#6D0808]/40 uppercase tracking-wider">ACHIEVED</span>}
                          </div>
                          <p className={`font-mono text-[10px] mt-0.5 ${stage.current ? 'text-[#D4AF37] drop-shadow-[0_0_2px_rgba(212,175,55,0.5)]' : stage.achieved ? 'text-[#EEEAD7]' : 'text-[#8d9685]'}`}>{stage.class}</p>
                        </div>
                        <div className="text-right shrink-0 relative z-10">
                          <p className={`font-mono text-xs ${stage.current ? 'text-[#F5D77F] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-[#D4AF37]'}`}>
                            {stage.xpRequired > 0 ? <AnimatedNumber value={stage.xpRequired} /> : '0'}
                          </p>
                          <p className={`font-mono text-[9px] ${stage.current ? 'text-[#D4AF37]' : 'text-[#8d9685]'}`}>XP REQ</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0">
                {ACHIEVEMENTS.map((a, i) => {
                  const rStyle = RARITY_COLORS[a.rarity];
                  const Icon = a.icon;
                  return (
                    <motion.div
                      key={a.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2, delay: 0 } }}
                      className={`relative p-2 sm:p-2.5 flex flex-col gap-1.5 justify-between h-full rounded-none bg-[radial-gradient(ellipse_at_center,_rgba(35,6,8,0.9)_0%,_rgba(15,2,4,0.95)_100%)] overflow-hidden group ${!a.earned ? 'opacity-40 grayscale' : ''}`}
                      style={{ border: `1px solid ${rStyle.frame}`, boxShadow: a.rarity === 'Mythic' || a.rarity === 'Legendary' ? `inset 0 0 15px ${rStyle.bg}, 0 0 10px rgba(0,0,0,0.5)` : '0 0 10px rgba(0,0,0,0.5)' }}
                    >
                      {/* Gothic cut corners (pseudo-elements via span) */}
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: rStyle.frame }} />
                      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r" style={{ borderColor: rStyle.frame }} />
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l" style={{ borderColor: rStyle.frame }} />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: rStyle.frame }} />
                      
                      {/* Golden Sweep Hover Animation */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out" 
                      />

                      {/* Icon inside a metallic frame */}
                      <div className="w-8 h-8 mx-auto flex items-center justify-center relative shrink-0">
                        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 20 2 L 38 20 L 20 38 L 2 20 Z" stroke={rStyle.frame} strokeWidth="2" fill={rStyle.bg} />
                        </svg>
                        <Icon size={14} color={a.earned ? (a.rarity === 'Epic' || a.rarity === 'Mythic' ? '#ff4d4d' : '#D4AF37') : '#8d9685'} className="relative z-10 drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                      </div>

                      <div className="text-center">
                        <p className={`font-serif text-[12px] font-bold ${a.rarity === 'Mythic' && a.earned ? 'text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-[#EEEAD7]'}`}>{a.title}</p>
                        <p className="font-sans text-[9px] text-[#8d9685] mt-0.5 leading-tight">{a.desc}</p>
                      </div>
                      
                      <span
                        className={`font-mono text-[8px] uppercase tracking-widest px-1.5 py-0.5 self-start mt-auto ${a.rarity === 'Mythic' ? 'animate-pulse font-bold drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]' : ''}`}
                        style={{ color: rStyle.text, border: `1px solid ${rStyle.border}`, background: rStyle.bg }}
                      >
                        {a.rarity}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}

export default Grimoire;

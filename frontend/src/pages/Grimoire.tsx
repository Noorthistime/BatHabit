import React, { useState } from 'react';
import { Shield, Zap, Heart, Eye, BookOpen, Star, Award, TrendingUp, ChevronRight, Crown } from 'lucide-react';
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
  { icon: '🔥', title: 'Iron Resolve', desc: '7-day unbroken streak', rarity: 'Rare', earned: true },
  { icon: '⚡', title: 'Mind Forge', desc: 'Completed 50 Intellect quests', rarity: 'Epic', earned: true },
  { icon: '🌙', title: 'Nocturnal Rite', desc: 'Completed quest past midnight', rarity: 'Common', earned: true },
  { icon: '👁', title: 'The Watcher', desc: '30-day login streak', rarity: 'Legendary', earned: false },
  { icon: '💀', title: 'Obsidian Will', desc: '100-day streak', rarity: 'Mythic', earned: false },
  { icon: '🏆', title: 'Relic Forged', desc: 'Reached Rank IV', rarity: 'Epic', earned: false },
];

const RARITY_COLORS: Record<string, string> = {
  Common: '#8d9685',
  Rare: '#60a5fa',
  Epic: '#a855f7',
  Legendary: '#D4AF37',
  Mythic: '#ff6b6b',
};

export function Grimoire() {
  const [activeTab, setActiveTab] = useState<'attributes' | 'evolution' | 'achievements'>('attributes');
  const currentXP = 4820;
  const nextXP = 7000;
  const progress = ((currentXP - 3500) / (7000 - 3500)) * 100;

  return (
    <>


      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">

        {/* Page Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 pb-4 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 relative mb-2">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            className="rounded-xl p-8 flex flex-col items-center text-center gap-5 relative col-span-1 bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.85)] backdrop-blur-xl border border-[#415A77]/60 dark:border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(109,8,8,0.5)]"
          >
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
            <div className="w-full space-y-2 mt-4">
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
            <div className="w-full grid grid-cols-3 gap-2 border-t border-[#D4AF37]/20 pt-6 mt-2">
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
          </div>

          {/* Right Panel — Tabs */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
            {/* Tab Selector */}
            <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-[#415A77]/30 dark:border-[#D4AF37]/15">
              {(['attributes', 'evolution', 'achievements'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded border font-mono text-[10px] uppercase tracking-widest font-bold transition-all ${
                    activeTab === tab
                      ? 'bg-[#1B263B] dark:bg-[#4a1c02] border-[#D4AF37] text-[#D4AF37] dark:text-[#F5D77F] shadow-[0_0_12px_rgba(212,175,55,0.3)]' 
                      : 'bg-[#1B263B]/40 dark:bg-[#2A0505] border-[#415A77]/50 dark:border-[#D4AF37]/25 text-[#F7F3E9]/60 dark:text-[#8d9685] hover:border-[#D4AF37]/50 hover:bg-[#1B263B]/60 dark:hover:bg-[#3A0A0A]'
                  }`}
                >
                  {activeTab === tab && <span className="mr-2 text-[8px] animate-pulse">✦</span>}
                  {tab}
                </button>
              ))}
            </div>

            {/* Attributes Tab */}
            {activeTab === 'attributes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ATTRIBUTES.map(attr => (
                  <div
                    key={attr.key}
                    className="p-5 flex flex-col gap-3 relative rounded-xl bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-sm border border-[#415A77]/60 dark:border-[#D4AF37]/35 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] hover:border-[#415A77] dark:hover:border-[#F5D77F] group"
                  >
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
                ))}

                {/* Total Power */}
                <div
                  className="p-6 sm:col-span-2 flex flex-col sm:flex-row items-center justify-between rounded-xl relative overflow-hidden group gap-4 mt-2"
                  style={{ background: 'radial-gradient(circle at center, rgba(109,8,8,0.6) 0%, rgba(15,2,4,0.9) 100%)', border: '1px solid rgba(212,175,55,0.5)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.1)' }}
                >
                  {/* Subtle Obsidian Texture */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                  
                  <div className="relative z-10 text-center sm:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-90 drop-shadow-md">Combined Power Level</p>
                    <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                      <p className="font-serif text-4xl font-bold text-[#F5D77F] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:animate-pulse">395</p>
                      <p className="font-mono text-sm text-[#D4AF37]/50 font-bold">/ 500</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center gap-2 px-4 py-2 bg-[#1a0204]/90 border border-[#D4AF37]/40 rounded backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    <TrendingUp size={16} className="text-[#D4AF37]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">+12 this week</span>
                  </div>
                </div>
              </div>
            )}

            {/* Evolution Tab */}
            {activeTab === 'evolution' && (
              <div className="flex flex-col gap-3">
                {EVOLUTION_STAGES.map((stage, i) => {
                  let animationProps = {};
                  let glowEffect = null;
                  
                  if (stage.rank === 'I') {
                    animationProps = { animate: { opacity: [0.7, 1, 0.7] }, transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } };
                  } else if (stage.rank === 'II') {
                    animationProps = { animate: { boxShadow: ['0 0 0px rgba(109,8,8,0)', '0 0 15px rgba(109,8,8,0.4)', '0 0 0px rgba(109,8,8,0)'] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } };
                  } else if (stage.rank === 'III') {
                    animationProps = { animate: { boxShadow: ['0 0 5px rgba(212,175,55,0.1)', '0 0 20px rgba(212,175,55,0.4)', '0 0 5px rgba(212,175,55,0.1)'] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } };
                  } else if (stage.rank === 'IV') {
                    animationProps = { 
                      animate: { 
                        boxShadow: ['0 0 10px rgba(212,175,55,0.4), inset 0 0 10px rgba(212,175,55,0.1)', '0 0 30px rgba(212,175,55,0.8), inset 0 0 20px rgba(109,8,8,0.4)', '0 0 10px rgba(212,175,55,0.4), inset 0 0 10px rgba(212,175,55,0.1)'],
                        scale: [1, 1.015, 1]
                      }, 
                      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } 
                    };
                    glowEffect = (
                      <>
                        <motion.div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#6D0808]/30 to-transparent mix-blend-overlay" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                        <motion.div className="absolute inset-0 rounded-lg border border-[#D4AF37]/50" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                      </>
                    );
                  } else if (stage.rank === 'V') {
                    animationProps = { animate: { opacity: [0.3, 0.5, 0.3] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } };
                  }

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      key={stage.rank}
                    >
                      <motion.div
                        {...animationProps}
                        className={`p-4 flex items-center gap-4 relative rounded-lg overflow-hidden ${stage.current ? 'ring-1 ring-[#D4AF37]' : ''}`}
                        style={{
                          background: stage.achieved
                            ? 'rgba(109,8,8,0.25)'
                            : stage.current
                            ? 'rgba(35,6,8,0.95)'
                            : 'rgba(15,2,4,0.5)',
                          border: `1px solid ${stage.achieved ? 'rgba(212,175,55,0.3)' : stage.current ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.1)'}`,
                        }}
                      >
                        {glowEffect}
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold shrink-0 relative z-10"
                          style={{
                            background: stage.achieved ? '#6D0808' : stage.current ? 'linear-gradient(135deg, #D4AF37 0%, #a67c00 100%)' : '#1a0204',
                            color: stage.achieved ? '#D4AF37' : stage.current ? '#0c0608' : '#8d9685',
                            border: `2px solid ${stage.achieved ? '#D4AF37' : stage.current ? '#FFF' : 'rgba(212,175,55,0.2)'}`,
                            boxShadow: stage.current ? '0 0 15px rgba(212,175,55,0.8)' : 'none'
                          }}
                        >
                          {stage.rank}
                        </div>
                        <div className="flex-1 relative z-10">
                          <div className="flex items-center gap-2">
                            <span className={`font-serif text-sm font-bold ${stage.current ? 'text-[#F5D77F] drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]' : 'text-[#EEEAD7]'}`}>{stage.title}</span>
                            {stage.current && <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 uppercase tracking-wider font-bold shadow-[0_0_8px_rgba(212,175,55,0.4)]">CURRENT</span>}
                            {stage.achieved && !stage.current && <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#6D0808]/40 text-[#D4AF37]/60 border border-[#6D0808]/40 uppercase tracking-wider">ACHIEVED</span>}
                          </div>
                          <p className={`font-mono text-[10px] mt-0.5 ${stage.current ? 'text-[#D4AF37] drop-shadow-[0_0_2px_rgba(212,175,55,0.5)]' : 'text-[#8d9685]'}`}>{stage.class}</p>
                        </div>
                        <div className="text-right shrink-0 relative z-10">
                          <p className={`font-mono text-xs ${stage.current ? 'text-[#F5D77F] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-[#D4AF37]'}`}>{stage.xpRequired.toLocaleString()}</p>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ACHIEVEMENTS.map(a => (
                  <div
                    key={a.title}
                    className={`p-4 flex flex-col gap-2 rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-sm shadow-md ${!a.earned ? 'opacity-40 grayscale border border-[#415A77]/50 dark:border-[#D4AF37]/20' : 'border border-[#415A77] dark:border-[#D4AF37]/45'}`}
                  >
                    <div className="text-2xl">{a.icon}</div>
                    <div>
                      <p className="font-serif text-sm font-bold text-[#EEEAD7]">{a.title}</p>
                      <p className="font-sans text-[11px] text-[#8d9685] mt-0.5">{a.desc}</p>
                    </div>
                    <span
                      className="font-mono text-[9px] uppercase tracking-widest px-1.5 py-0.5 self-start"
                      style={{ color: RARITY_COLORS[a.rarity], border: `1px solid ${RARITY_COLORS[a.rarity]}40`, background: RARITY_COLORS[a.rarity] + '15' }}
                    >
                      {a.rarity}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}

export default Grimoire;

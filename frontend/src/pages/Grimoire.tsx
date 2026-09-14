import React, { useState } from 'react';
import { Shield, Zap, Heart, Eye, BookOpen, Star, Award, TrendingUp, ChevronRight, Crown } from 'lucide-react';

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
      {/* Royal Background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundColor: '#0c0608',
          backgroundImage: `
            radial-gradient(circle at 18% 15%, rgba(109, 8, 8, 0.45) 0%, transparent 50%),
            radial-gradient(circle at 82% 22%, rgba(212, 175, 55, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(69, 3, 3, 0.55) 0%, transparent 60%)
          `,
        }}
      />

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div
            className="rounded-none p-6 flex flex-col items-center text-center gap-4 relative overflow-hidden col-span-1"
            style={{
              background: 'linear-gradient(135deg, rgba(35,6,8,0.95) 0%, rgba(25,2,4,0.98) 100%)',
              border: '1px solid rgba(212,175,55,0.45)',
              boxShadow: '0 0 30px rgba(109,8,8,0.4), inset 0 1px 0 rgba(212,175,55,0.15)',
            }}
          >
            {/* Corner Brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/70" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/70" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/70" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/70" />

            {/* Avatar */}
            <div className="relative">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-serif font-bold text-[#D4AF37] shadow-[0_0_30px_rgba(109,8,8,0.8)]"
                style={{ background: 'linear-gradient(135deg, #3d0303 0%, #6D0808 100%)', border: '2px solid rgba(212,175,55,0.6)' }}
              >
                A
              </div>
              <div
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold text-[#0c0608]"
                style={{ background: '#D4AF37', border: '2px solid #0c0608' }}
              >
                IV
              </div>
            </div>

            <div>
              <p className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-[0.3em]">Rank IV Ascendant</p>
              <h2 className="font-serif text-xl text-[#EEEAD7] font-bold mt-1">Alistair Vance</h2>
              <p className="font-mono text-[10px] text-[#8d9685] uppercase tracking-wider mt-0.5">Keeper of the Ancient Flame</p>
            </div>

            {/* XP Bar */}
            <div className="w-full space-y-1.5">
              <div className="flex justify-between font-mono text-[10px] text-[#8d9685]">
                <span>XP PROGRESS</span>
                <span className="text-[#D4AF37]">{currentXP.toLocaleString()} / {nextXP.toLocaleString()}</span>
              </div>
              <div className="h-2 bg-[#1a0204] border border-[#D4AF37]/20 rounded-none overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #6D0808 0%, #D4AF37 100%)',
                    boxShadow: '0 0 8px rgba(212,175,55,0.5)',
                  }}
                />
              </div>
              <p className="font-mono text-[9px] text-[#8d9685]">{Math.round(nextXP - currentXP).toLocaleString()} XP to Rank V</p>
            </div>

            {/* Quick Stats */}
            <div className="w-full grid grid-cols-3 gap-2 border-t border-[#D4AF37]/20 pt-4">
              {[
                { label: 'QUESTS', value: '147' },
                { label: 'STREAK', value: '12d' },
                { label: 'CROWNS', value: '2840' },
              ].map(s => (
                <div key={s.label} className="text-center">
                  <div className="font-mono text-base font-bold text-[#D4AF37]">{s.value}</div>
                  <div className="font-mono text-[8px] text-[#8d9685] uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel — Tabs */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
            {/* Tab Selector */}
            <div className="flex gap-1 border-b border-[#D4AF37]/20">
              {(['attributes', 'evolution', 'achievements'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? 'text-[#D4AF37] border-b-2 border-[#D4AF37] -mb-px'
                      : 'text-[#8d9685] hover:text-[#D4AF37]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Attributes Tab */}
            {activeTab === 'attributes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ATTRIBUTES.map(attr => (
                  <div
                    key={attr.key}
                    className="p-4 flex flex-col gap-2 relative"
                    style={{
                      background: 'rgba(35,6,8,0.7)',
                      border: '1px solid rgba(212,175,55,0.2)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)',
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <attr.icon size={14} style={{ color: attr.color }} />
                        <span className="font-mono text-xs uppercase tracking-widest text-[#EEEAD7]">{attr.label}</span>
                      </div>
                      <span className="font-mono text-lg font-bold" style={{ color: attr.color }}>{attr.value}</span>
                    </div>
                    <p className="font-sans text-[11px] text-[#8d9685]">{attr.desc}</p>
                    <div className="h-1 bg-[#1a0204] rounded-none overflow-hidden">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${attr.value}%`, background: attr.color, boxShadow: `0 0 6px ${attr.color}60` }}
                      />
                    </div>
                  </div>
                ))}
                {/* Total Power */}
                <div
                  className="p-4 sm:col-span-2 flex items-center justify-between"
                  style={{ background: 'rgba(109,8,8,0.2)', border: '1px solid rgba(212,175,55,0.35)' }}
                >
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#8d9685]">Combined Power Level</p>
                    <p className="font-serif text-2xl font-bold text-[#D4AF37] mt-0.5">395 / 500</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-[#D4AF37]" />
                    <span className="font-mono text-xs text-[#D4AF37]">+12 this week</span>
                  </div>
                </div>
              </div>
            )}

            {/* Evolution Tab */}
            {activeTab === 'evolution' && (
              <div className="flex flex-col gap-2">
                {EVOLUTION_STAGES.map((stage, i) => (
                  <div
                    key={stage.rank}
                    className={`p-4 flex items-center gap-4 relative ${stage.current ? 'ring-1 ring-[#D4AF37]/60' : ''}`}
                    style={{
                      background: stage.achieved
                        ? 'rgba(109,8,8,0.25)'
                        : stage.current
                        ? 'rgba(35,6,8,0.95)'
                        : 'rgba(15,2,4,0.5)',
                      border: `1px solid ${stage.achieved ? 'rgba(212,175,55,0.4)' : stage.current ? 'rgba(212,175,55,0.6)' : 'rgba(212,175,55,0.1)'}`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold shrink-0"
                      style={{
                        background: stage.achieved ? '#6D0808' : stage.current ? '#D4AF37' : '#1a0204',
                        color: stage.achieved ? '#D4AF37' : stage.current ? '#0c0608' : '#8d9685',
                        border: `1px solid ${stage.achieved || stage.current ? '#D4AF37' : 'rgba(212,175,55,0.2)'}`,
                      }}
                    >
                      {stage.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-sm font-bold text-[#EEEAD7]">{stage.title}</span>
                        {stage.current && <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 uppercase tracking-wider">CURRENT</span>}
                        {stage.achieved && !stage.current && <span className="font-mono text-[9px] px-1.5 py-0.5 bg-[#6D0808]/40 text-[#8d9685] border border-[#6D0808]/40 uppercase tracking-wider">ACHIEVED</span>}
                      </div>
                      <p className="font-mono text-[10px] text-[#8d9685] mt-0.5">{stage.class}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-xs text-[#D4AF37]">{stage.xpRequired.toLocaleString()}</p>
                      <p className="font-mono text-[9px] text-[#8d9685]">XP REQ</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {ACHIEVEMENTS.map(a => (
                  <div
                    key={a.title}
                    className={`p-4 flex flex-col gap-2 ${!a.earned ? 'opacity-40 grayscale' : ''}`}
                    style={{
                      background: 'rgba(35,6,8,0.7)',
                      border: `1px solid ${a.earned ? RARITY_COLORS[a.rarity] + '50' : 'rgba(212,175,55,0.1)'}`,
                    }}
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

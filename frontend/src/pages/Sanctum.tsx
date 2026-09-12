import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { User, Target, Flame, Coins, Shield, Book, Brain, Eye, Heart } from 'lucide-react';
import '../sanctum-gothic.css';

export function Sanctum() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get('/auth/me').then(res => setProfile(res.data)).catch(console.error);
  }, []);

  if (!profile) return <div className="p-8 text-amber-500 animate-pulse font-serif">Summoning data...</div>;

  const char = profile.character;
  const attr = profile.attribute;
  const streak = profile.streak;
  const currency = profile.currency;

  const calculateRequiredXp = (level: number) => Math.floor(100 * Math.pow(level, 1.5));
  const currentLevelXpRequired = calculateRequiredXp(char.level);
  const nextLevelXpRequired = calculateRequiredXp(char.level + 1);
  const xpIntoLevel = char.totalXp - currentLevelXpRequired;
  const xpNeededForNext = nextLevelXpRequired - currentLevelXpRequired;
  const progressPercent = Math.min(100, Math.max(0, (xpIntoLevel / xpNeededForNext) * 100));

  return (
    <div className="bg-[#0c0608] min-h-screen text-[#EEEAD7] font-sans selection:bg-[#6D0808] selection:text-[#F5D77F] p-6 md:p-10">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="flex justify-between items-end mb-8 border-b border-[#D4AF37]/25 pb-4">
          <div>
            <span className="font-mono text-xs uppercase text-[#f59e0b] tracking-[0.3em] flex items-center gap-1.5 bg-[#250101] px-2.5 py-0.5 rounded border border-[#D4AF37]/35 shadow-inner w-max mb-2">
              Sanctum Noctis • Chamber of Command
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight drop-shadow-md">
              The Veil Thins, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EEEAD7] via-[#F5D77F] to-[#f59e0b]">{char.currentTitle || 'Novice'}</span>.
            </h1>
            <p className="text-[#8d9685] mt-2 max-w-2xl text-sm font-sans">
              Your vows resonate through the obsidian arches.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Avatar Section */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-center gap-5 text-center">
            <div className="relative group">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-xl bg-gradient-to-b from-[#3d0303] via-[#1a0000] to-[#0f0000] p-2 shadow-2xl flex items-center justify-center relative border-2 border-[#F5D77F] gothic-pulsing-aura">
                {/* Filigree */}
                <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#F5D77F]"></div>
                <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#F5D77F]"></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#F5D77F]"></div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#F5D77F]"></div>
                
                <div className="w-full h-full rounded-lg overflow-hidden relative border border-[#D4AF37]/60 flex items-center justify-center bg-[#200000]">
                  {char.avatarUrl ? (
                    <img src={char.avatarUrl} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <User size={64} className="text-[#D4AF37]" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200000]/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-md bg-gradient-to-r from-[#6D0808] via-[#8e0e0e] to-[#6D0808] text-[#F5D77F] shadow-[0_4px_20px_rgba(0,0,0,0.95)] flex items-center gap-2 whitespace-nowrap border border-[#F5D77F] ring-1 ring-[#f59e0b]/40">
                <span className="font-serif text-xs font-bold tracking-widest text-[#EEEAD7]">LEVEL {char.level} • {char.currentTitle || 'INITIATE'}</span>
              </div>
            </div>
          </div>

          {/* XP & Progression */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-center space-y-5">
            <div className="space-y-2.5 bg-[#140305]/95 p-5 rounded-lg border border-[#D4AF37]/40 shadow-inner relative overflow-hidden">
              <div className="flex justify-between items-baseline font-mono text-xs">
                <span className="text-[#F5D77F] flex items-center gap-2 uppercase tracking-wider font-semibold">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F5D77F] animate-ping"></span>
                  Arcane Essence XP Gauge
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-bold text-[#F5D77F]">{char.totalXp}</span>
                  <span className="text-[#8d9685]">/</span>
                  <span className="font-mono text-xs text-[#8d9685]">{nextLevelXpRequired} XP</span>
                  <span className="text-[#EEEAD7] font-bold ml-1 bg-[#250101] px-2 py-0.5 rounded border border-[#D4AF37]/35">{progressPercent.toFixed(1)}%</span>
                </div>
              </div>

              <div className="relative w-full h-5 bg-[#0a0000] rounded-md p-0.5 shadow-inner overflow-hidden border border-[#D4AF37]/55">
                <div 
                  className="h-full rounded-sm bg-gradient-to-r from-[#6D0808] via-[#f59e0b] to-[#F5D77F] relative overflow-hidden shimmer-bar transition-all duration-700 ease-out" 
                  style={{ width: `${progressPercent}%` }}
                >
                </div>
              </div>
              
              <div className="flex justify-between items-center text-xs font-mono pt-1">
                <span className="text-[11px] text-[#8d9685]">
                  <span className="text-[#F5D77F]">✦</span> +{Math.floor(xpNeededForNext)} XP to Level {char.level + 1}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-4 px-4 py-4 rounded-lg bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#D4AF37]/45 shadow-[0_6px_22px_rgba(0,0,0,0.7)] hover:border-[#F5D77F] transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#9e1313] to-[#2D0000] flex items-center justify-center text-[#F5D77F] border border-[#D4AF37]/60 shadow-inner">
                  <Flame size={24} className="flame-particle text-[#ff6600]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-bold text-[#F5D77F]">{streak?.currentStreak || 0}</span>
                    <span className="font-mono text-xs text-[#8d9685] uppercase">Days</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">Unbroken Vow</span>
                </div>
              </div>

              <div className="flex items-center gap-4 px-4 py-4 rounded-lg bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#D4AF37]/45 shadow-[0_6px_22px_rgba(0,0,0,0.7)] hover:border-[#F5D77F] transition-all">
                <div className="w-12 h-12 rounded-lg bg-[#200000] flex items-center justify-center text-[#F5D77F] border border-[#D4AF37]/55 shadow-inner">
                  <Coins size={24} className="coin-shimmer-interactive text-[#F5D77F]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-2xl font-bold text-[#F5D77F]">{currency?.balance || 0}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-widest font-semibold">Tarnished Crowns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grimoire Attributes */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="font-serif text-lg uppercase tracking-[0.25em] text-[#F5D77F] font-bold">The Grimoire Attributes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { label: 'Strength', val: attr.strengthXp, icon: Shield },
              { label: 'Intellect', val: attr.intellectXp, icon: Brain },
              { label: 'Wisdom', val: attr.wisdomXp, icon: Book },
              { label: 'Focus', val: attr.focusXp, icon: Eye },
              { label: 'Vitality', val: attr.vitalityXp, icon: Heart },
            ].map((a, i) => (
              <div key={i} className="stat-card-3d group bg-[rgba(35,6,8,0.78)] backdrop-blur-md rounded-xl p-4 border border-[#D4AF37]/35 shadow-lg flex flex-col space-y-3 cursor-pointer hover:border-[#F5D77F] transition-all">
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2b0303] to-[#120000] border border-[#D4AF37]/45 flex items-center justify-center text-[#F5D77F] shadow-inner group-hover:scale-110 transition-transform">
                    <a.icon size={20} />
                  </div>
                  <span className="font-serif text-2xl text-[#EEEAD7] font-bold group-hover:text-[#F5D77F] transition-colors">{a.val}</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[#EEEAD7] font-bold mt-0.5">{a.label}</h3>
                  <div className="w-full bg-[#100000] h-1.5 mt-2 rounded-full overflow-hidden border border-[#D4AF37]/35">
                    <div className="bg-gradient-to-r from-[#6D0808] to-[#F5D77F] h-full rounded-full shadow-[0_0_10px_rgba(212,175,55,0.6)]" style={{width: `${Math.min(100, Math.max(10, a.val)) }%`}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

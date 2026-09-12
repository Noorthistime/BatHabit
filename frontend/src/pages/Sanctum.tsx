import { useState, useEffect } from 'react';
import { api } from '../api';
import { User, Flame, Coins, Shield, Book, Brain, Eye, Heart, Plus, CheckCircle, Terminal, Activity, Focus, Archive, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import '../sanctum-gothic.css';

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
      {/* Top Header */}
      <header className="hidden md:flex fixed top-0 left-72 right-0 h-20 bg-[#0D1B2A]/92 dark:bg-[#140406]/92 backdrop-blur-xl z-40 px-8 items-center justify-between border-b border-[#415A77] dark:border-[#D4AF37]/35 shadow-[0_4px_32px_rgba(0,0,0,0.85)]">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] tracking-wide flex items-center gap-2">
              Good evening, {char.currentTitle || 'Novice'}
              <span className="font-mono text-[11px] font-normal px-2 py-0.5 rounded bg-[#415A77] dark:bg-[#2c0000] text-[#D4AF37] dark:text-[#F5D77F] border border-[#415A77] dark:border-[#D4AF37]/45">RANK {char.level || 1}</span>
            </span>
            <span className="font-mono text-xs text-[#D4AF37] dark:text-[#C5A059] flex items-center gap-1.5">
              Waxing Gibbous • Cycle VII Nocturne
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D1B2A] dark:bg-gradient-to-r dark:from-[#280406] dark:to-[#140203] border border-[#415A77] dark:border-[#D4AF37]/60 shadow-[0_0_18px_rgba(212,175,55,0.3)]">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#947014] via-[#F5D77F] to-[#D4AF37] flex items-center justify-center text-[#0c0608] font-bold text-xs shadow-md border border-[#FFF5C0]">
              <span className="font-serif">✦</span>
            </div>
            <span className="font-serif text-base font-bold text-[#D4AF37] dark:text-[#F5D77F] tracking-wider">{currency?.balance || 0}</span>
            <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase font-bold tracking-widest">Crowns</span>
          </div>
          <div className="flex items-center gap-3 pl-3 border-l border-[#415A77] dark:border-[#D4AF37]/30">
            <button onClick={toggleTheme} className="w-10 h-10 rounded-full bg-[#1B263B] dark:bg-[#3d0303] flex items-center justify-center border-2 border-[#415A77] dark:border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)] text-[#D4AF37] dark:text-[#F5D77F] hover:scale-105 transition-transform">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="w-10 h-10 rounded-full bg-[#1B263B] dark:bg-[#3d0303] flex items-center justify-center border-2 border-[#415A77] dark:border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)] text-[#D4AF37] dark:text-[#F5D77F]">
              <User size={20} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="pt-20 px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Welcome Ribbon */}
          <section className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 pb-4 border-b border-[#415A77] dark:border-[#D4AF37]/25 relative">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase text-[#D4AF37] dark:text-[#F5D77F] tracking-[0.3em] flex items-center gap-1.5 bg-[#415A77] dark:bg-[#250101] px-2.5 py-0.5 rounded border border-[#415A77] dark:border-[#D4AF37]/35 shadow-inner">
                  Sanctum Noctis • Chamber of Command
                </span>
              </div>
              <h1 className="font-serif text-3xl lg:text-4xl text-[#F7F3E9] dark:text-[#EEEAD7] tracking-tight font-bold drop-shadow-md">
                The Veil Thins, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EEEAD7] via-[#F5D77F] to-[#f59e0b]">{char.currentTitle || 'Novice'}</span>.
              </h1>
              <p className="font-sans text-sm text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-2xl leading-relaxed">
                Your vows resonate through the obsidian arches. Seven consecutive lunar vigils sustained without wavering.
              </p>
            </div>
            
            {/* Quick Stats Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#B6CBF6] dark:from-[#9e1313] to-[#D4AF37] dark:to-[#2D0000] flex items-center justify-center border border-[#415A77] dark:border-[#D4AF37]/60 shadow-inner text-[#D4AF37] dark:text-[#F5D77F]">
                  <Flame size={20} className="text-[#ff6600]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-xl font-bold text-[#D4AF37] dark:text-[#F5D77F]">{streak?.currentStreak || 0}</span>
                    <span className="font-mono text-xs text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase">Days</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase tracking-widest font-semibold">Unbroken Vow</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-[#1B263B] dark:bg-[#200000] flex items-center justify-center border border-[#415A77] dark:border-[#D4AF37]/55 shadow-inner text-[#D4AF37] dark:text-[#F5D77F]">
                  <Coins size={20} />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1">
                    <span className="font-serif text-xl font-bold text-[#D4AF37] dark:text-[#F5D77F]">{currency?.balance || 0}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase tracking-widest font-semibold">Tarnished Crowns</span>
                </div>
              </div>
            </div>
          </section>

          {/* Hero Panel: Avatar & XP */}
          <section className="relative bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-xl rounded-xl p-7 border border-[#415A77] dark:border-[#D4AF37]/45 shadow-[0_14px_50px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="absolute top-2 left-2 text-[#D4AF37] dark:text-[#D4AF37]/60 font-serif text-xs">❖</div>
            <div className="absolute top-2 right-2 text-[#D4AF37] dark:text-[#D4AF37]/60 font-serif text-xs">❖</div>
            <div className="absolute bottom-2 left-2 text-[#D4AF37] dark:text-[#D4AF37]/60 font-serif text-xs">❖</div>
            <div className="absolute bottom-2 right-2 text-[#D4AF37] dark:text-[#D4AF37]/60 font-serif text-xs">❖</div>
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-transparent dark:bg-[#6D0808]/40 blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#f59e0b]/15 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 xl:col-span-3 flex flex-col items-center gap-5">
                <div className="relative group">
                  <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-xl bg-gradient-to-b from-[#D0F4F0] dark:from-[#3d0303] via-[#415A77] dark:via-[#1a0000] to-[#D0F4F0] dark:to-[#0f0000] p-2 shadow-2xl flex items-center justify-center relative border-2 border-[#415A77] dark:border-[#F5D77F]">
                    <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#415A77] dark:border-[#F5D77F]"></div>
                    <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#415A77] dark:border-[#F5D77F]"></div>
                    <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#415A77] dark:border-[#F5D77F]"></div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#415A77] dark:border-[#F5D77F]"></div>
                    <div className="w-full h-full rounded-lg overflow-hidden relative border border-[#415A77] dark:border-[#D4AF37]/60 flex items-center justify-center bg-[#1B263B] dark:bg-[#200000]">
                      {char.avatarUrl ? (
                        <img src={char.avatarUrl} alt="Avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      ) : (
                        <User size={64} className="text-[#D4AF37] dark:text-[#D4AF37]" />
                      )}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-md bg-gradient-to-r from-[#1B263B] via-[#415A77] to-[#1B263B] dark:from-[#6D0808] dark:via-[#8e0e0e] dark:to-[#6D0808] text-[#D4AF37] dark:text-[#F5D77F] shadow-[0_4px_12px_rgba(0,0,0,0.6)] dark:shadow-lg flex items-center gap-2 whitespace-nowrap border border-[#415A77] dark:border-[#F5D77F]">
                    <span className="font-serif text-xs font-bold tracking-widest text-[#F7F3E9] dark:text-[#EEEAD7]">LEVEL {char.level || 1} • {char.currentTitle || 'INITIATE'}</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-center space-y-5">
                <div className="space-y-2.5 bg-[#0D1B2A]/90 dark:bg-[#140305]/95 p-5 rounded-lg border border-[#415A77] dark:border-[#D4AF37]/40 shadow-[0_4px_24px_rgba(0,0,0,0.4)] dark:shadow-inner relative overflow-hidden">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-[#D4AF37] dark:text-[#F5D77F] flex items-center gap-2 uppercase tracking-wider font-semibold">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F5D77F] animate-ping"></span>
                      Arcane Essence XP Gauge
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg font-bold text-[#D4AF37] dark:text-[#F5D77F]">{char.totalXp}</span>
                      <span className="text-[#F7F3E9]/70 dark:text-[#8d9685]">/</span>
                      <span className="font-mono text-xs text-[#F7F3E9]/70 dark:text-[#8d9685]">{nextLevelXpRequired} XP</span>
                      <span className="text-[#F7F3E9] dark:text-[#EEEAD7] font-bold ml-1 bg-[#415A77] dark:bg-[#250101] px-2 py-0.5 rounded border border-[#415A77] dark:border-[#D4AF37]/35">{progressPercent.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="relative w-full h-5 bg-[#0a0000] rounded-md p-0.5 shadow-inner overflow-hidden border border-[#415A77] dark:border-[#D4AF37]/55">
                    <div className="h-full rounded-sm bg-gradient-to-r from-[#6D0808] via-[#f59e0b] to-[#F5D77F]" style={{ width: progressPercent + "%" }}></div>
                  </div>
                  <div className="flex justify-between items-center text-xs font-mono pt-1">
                    <span className="text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685]"><span className="text-[#D4AF37] dark:text-[#F5D77F]">✦</span> +{Math.floor(xpNeededForNext)} XP to Level {(char.level || 1) + 1}</span>
                  </div>
                </div>
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-1">
                  <div className="px-3.5 py-2.5 rounded bg-[#1B263B] dark:bg-[#160202] border border-[#415A77] dark:border-[#D4AF37]/30 flex items-center justify-between shadow-sm">
                    <span className="font-mono text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase">Active Vigor</span>
                    <span className="font-serif text-sm font-bold text-[#D4AF37] dark:text-[#F5D77F]">94 / 100</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded bg-[#1B263B] dark:bg-[#160202] border border-[#415A77] dark:border-[#D4AF37]/30 flex items-center justify-between shadow-sm">
                    <span className="font-mono text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase">Shadow Will</span>
                    <span className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">Tier III</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded bg-[#1B263B] dark:bg-[#160202] border border-[#415A77] dark:border-[#D4AF37]/30 flex items-center justify-between shadow-sm">
                    <span className="font-mono text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase">Discipline</span>
                    <span className="font-serif text-sm font-bold text-[#D4AF37] dark:text-[#F5D77F]">1.25x</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded bg-[#1B263B] dark:bg-[#160202] border border-[#415A77] dark:border-[#D4AF37]/30 flex items-center justify-between shadow-sm">
                    <span className="font-mono text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase">Lunar Phase</span>
                    <span className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">Waxing</span>
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
                <div key={i} className="group bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md rounded-xl p-4 border border-[#415A77] dark:border-[#D4AF37]/35 shadow-lg flex flex-col justify-between space-y-3 cursor-pointer hover:border-[#415A77] dark:border-[#F5D77F] transition-all">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D0F4F0] dark:from-[#2b0303] to-[#415A77] dark:to-[#120000] border border-[#415A77] dark:border-[#D4AF37]/45 flex items-center justify-center text-[#D4AF37] dark:text-[#F5D77F] shadow-inner group-hover:scale-110 transition-transform">
                      <a.icon size={20} />
                    </div>
                    <span className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7] font-bold group-hover:text-[#D4AF37] dark:text-[#F5D77F] transition-colors">{a.val || 0}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#F7F3E9] dark:text-[#EEEAD7] font-bold mt-0.5">{a.label}</h3>
                    <p className="font-sans text-xs text-[#F7F3E9]/70 dark:text-[#8d9685] line-clamp-2 mt-0.5">{a.desc}</p>
                  </div>
                  <div className="space-y-1 pt-1">
                    <div className="w-full bg-[#100000] h-2 rounded-full overflow-hidden border border-[#415A77] dark:border-[#D4AF37]/35">
                      <div className="bg-gradient-to-r from-[#6D0808] to-[#F5D77F] h-full rounded-full" style={{width: Math.min(100, Math.max(10, (a.val || 0) * 10)) + "%" }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Grid: Quests & Treasury/Chronicle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Col: Quests */}
            <div className="lg:col-span-8 flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md p-4 rounded-xl border border-[#415A77] dark:border-[#D4AF37]/35 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#415A77] dark:bg-[#2a0303] border border-[#415A77] dark:border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] dark:text-[#F5D77F] shadow-inner">
                    <Book size={20} />
                  </div>
                  <div>
                    <h2 className="font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">Codex of Active Quests</h2>
                    <span className="font-mono text-[11px] text-[#D4AF37] dark:text-[#C5A059] uppercase tracking-wider">3 Pending Rites • 1 Sealed</span>
                  </div>
                </div>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#1B263B] to-[#415A77] dark:from-[#6D0808] dark:to-[#8e0c0c] text-[#D4AF37] dark:text-[#F5D77F] font-serif text-xs font-bold tracking-widest hover:brightness-125 border border-[#415A77] dark:border-[#F5D77F] flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.35)]">
                  <Plus size={16} /> FORGE QUEST
                </button>
              </div>

              {/* Quest Items */}
              {[
                { title: "Master 30 Minutes of React", icon: Terminal, tag: "Intellect • Epic Quest", xp: 120, crowns: 40, stat: "Intellect +2" },
                { title: "Deep Focus: 5 km Dawn Run", icon: Activity, tag: "Vitality • Daily Ritual", xp: 80, crowns: 25, stat: "Vitality +3" },
                { title: "Review 3 Algorithmic Systems", icon: Focus, tag: "Focus • Essential", xp: 68, crowns: 20, stat: "Focus +1" }
              ].map((q, i) => (
                <article key={i} className="relative bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md rounded-xl p-5 border border-[#415A77] dark:border-[#D4AF37]/35 shadow-md hover:border-[#415A77] dark:border-[#F5D77F] transition-all flex flex-col md:flex-row justify-between gap-4">
                  <div className="absolute left-0 inset-y-0 w-1.5 bg-gradient-to-b from-[#F5D77F] to-[#6D0808]"></div>
                  <div className="flex items-start gap-4 pl-2">
                    <div className="w-12 h-12 rounded-lg bg-[#1B263B] dark:bg-[#200000] border border-[#415A77] dark:border-[#D4AF37]/45 flex items-center justify-center text-[#D4AF37] dark:text-[#F5D77F] shadow-inner">
                      <q.icon size={24} />
                    </div>
                    <div className="space-y-1.5">
                      <span className="px-2.5 py-0.5 rounded bg-[#415A77] dark:bg-[#180000] border border-[#415A77] dark:border-[#D4AF37]/45 font-mono text-[10px] text-[#D4AF37] dark:text-[#F5D77F] uppercase tracking-widest font-semibold">{q.tag}</span>
                      <h3 className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">{q.title}</h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-[#D4AF37] dark:bg-[#6D0808] text-[#D4AF37] dark:text-[#F5D77F] font-mono text-xs font-semibold flex items-center gap-1 border border-[#415A77] dark:border-[#D4AF37]/40 shadow-sm">
                           +{q.xp} XP
                        </span>
                        <span className="px-2.5 py-0.5 rounded bg-[#415A77] dark:bg-[#1c0000] text-[#D4AF37] dark:text-[#F5D77F] font-mono text-xs flex items-center gap-1 border border-[#415A77] dark:border-[#D4AF37]/40 shadow-sm">
                           +{q.crowns} Crowns
                        </span>
                        <span className="font-mono text-xs text-[#F7F3E9]/70 dark:text-[#8d9685] font-medium">{q.stat}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center pl-2 md:pl-0">
                    <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#1B263B] to-[#415A77] dark:from-[#6D0808] dark:to-[#8b0e0e] text-[#D4AF37] dark:text-[#F5D77F] font-serif text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(65,90,119,0.6)] dark:shadow-[0_0_15px_rgba(109,8,8,0.6)] border border-[#415A77] dark:border-[#F5D77F] flex items-center gap-2">
                      <CheckCircle size={16} /> COMPLETE QUEST
                    </button>
                  </div>
                </article>
              ))}

            </div>

            {/* Right Col: Treasury & Chronicle */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              
              {/* The Treasury */}
              <div className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md rounded-xl p-5 border border-[#415A77] dark:border-[#D4AF37]/35 shadow-md flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] flex items-center gap-2">
                    <Shield size={18} className="text-[#D4AF37] dark:text-[#F5D77F]" /> THE TREASURY
                  </h3>
                  <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase border border-[#415A77] dark:border-[#D4AF37]/40 px-2 py-0.5 rounded">Vault Secure</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#947014] via-[#F5D77F] to-[#D4AF37] flex items-center justify-center text-[#0c0608] shadow-[0_0_20px_rgba(212,175,55,0.6)] mb-2">
                  <span className="font-serif text-2xl font-bold">✦</span>
                </div>
                <span className="font-serif text-3xl font-bold text-[#D4AF37] dark:text-[#F5D77F]">{currency?.balance || 0}</span>
                <span className="font-mono text-[11px] text-[#D4AF37] dark:text-[#C5A059] uppercase text-center mt-1">Gilded Crowns • Obsidian Gold</span>
                
                <div className="w-full mt-5 space-y-2 border-t border-[#415A77] dark:border-[#D4AF37]/25 pt-3">
                  <span className="font-mono text-[10px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-wider block">Recent Vault Influx</span>
                  <div className="flex justify-between items-center bg-[#415A77] dark:bg-[#1c0000] p-2 rounded border border-[#415A77] dark:border-[#D4AF37]/20">
                    <span className="font-mono text-xs text-[#F7F3E9] dark:text-[#EEEAD7]">+ Solitude Rite</span>
                    <span className="font-mono text-xs font-bold text-[#D4AF37] dark:text-[#F5D77F]">+15 Crowns</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#415A77] dark:bg-[#1c0000] p-2 rounded border border-[#415A77] dark:border-[#D4AF37]/20">
                    <span className="font-mono text-xs text-[#F7F3E9]/70 dark:text-[#8d9685]">- Raven Brooch</span>
                    <span className="font-mono text-xs font-bold text-[#6D0808]">-450 Crowns</span>
                  </div>
                </div>
              </div>

              {/* Chronicle of Deeds */}
              <div className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md rounded-xl p-5 border border-[#415A77] dark:border-[#D4AF37]/35 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] flex items-center gap-2">
                    <Archive size={18} className="text-[#D4AF37] dark:text-[#C5A059]" /> CHRONICLE
                  </h3>
                  <span className="font-mono text-[10px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase hover:text-[#D4AF37] dark:text-[#F5D77F] cursor-pointer">Full Archive</span>
                </div>
                <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-2 before:w-[1px] before:bg-[#D4AF37]/20">
                  <div className="relative pl-6">
                    <span className="absolute left-[3px] top-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] dark:bg-[#6D0808] border border-[#415A77] dark:border-[#F5D77F] shadow-[0_0_8px_#6D0808]"></span>
                    <p className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">QUEST SEALED: Solitude</p>
                    <p className="font-sans text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685] mt-0.5">Yielded +50 XP and +15 Crowns.</p>
                  </div>
                  <div className="relative pl-6">
                    <span className="absolute left-[3px] top-1 w-2.5 h-2.5 rounded-full bg-[#3d0303] border border-[#C5A059]"></span>
                    <p className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">ASCENSION: Level 7</p>
                    <p className="font-sans text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685] mt-0.5">Unlocked title Nightwalker.</p>
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

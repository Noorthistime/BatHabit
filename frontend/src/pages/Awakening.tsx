import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Moon, Sun, Search, Book, Dumbbell, Eye, Shield, Activity, Brain, Focus as FocusIcon, User } from 'lucide-react';

const PATHS = [
  { id: 'scholar', name: 'The Night Scholar', desc: 'Knowledge, arcane syntax & reading...', icon: Book },
  { id: 'iron', name: 'The Iron Initiate', desc: 'Cold vigils, physical stamina & tendo...', icon: Dumbbell },
  { id: 'shadow', name: 'The Shadow Wanderer', desc: 'Total digital silence & deep flow medi...', icon: Eye },
  { id: 'bloodline', name: 'The Bloodline Keeper', desc: 'Strict circadian timing & unbroken ch...', icon: Shield },
];

const DISCIPLINES = [
  { id: 'strength', name: 'STRENGTH', desc: 'Physical resilience, morning vigils & cold iron.', icon: Dumbbell },
  { id: 'intellect', name: 'INTELLECT', desc: 'Architectural mastery, code, algorithms & lore.', icon: Brain },
  { id: 'wisdom', name: 'WISDOM', desc: 'Mindfulness, nocturnal sleep hygiene &...', icon: Book },
  { id: 'focus', name: 'FOCUS', desc: 'Deep continuous work chambers & zero digital...', icon: FocusIcon },
  { id: 'vitality', name: 'VITALITY', desc: 'Cardio endurance, biological nutrition & clean...', icon: Activity },
];

export function Awakening() {
  const [characterName, setCharacterName] = useState('Alistair Vance');
  const [selectedPath, setSelectedPath] = useState('scholar');
  const [selectedVessel, setSelectedVessel] = useState(1);
  const [selectedDiscipline, setSelectedDiscipline] = useState('intellect');
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleAwaken = () => {
    // In the future: API call to save character setup, then redirect to dashboard
    navigate('/dashboard');
  };

  const currentPath = PATHS.find(p => p.id === selectedPath) || PATHS[0];
  const currentDiscipline = DISCIPLINES.find(d => d.id === selectedDiscipline) || DISCIPLINES[1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1B2A] to-[#1B263B] dark:from-[#0f0103] dark:to-[#1a0204] text-[#F7F3E9] dark:text-[#EEEAD7] font-sans overflow-x-hidden flex flex-col relative pb-24">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[#415A77]/20 dark:bg-[#6D0808]/20 rounded-bl-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-[#415A77]/20 dark:bg-[#6D0808]/20 rounded-tr-full blur-[100px]"></div>
      </div>

      {/* Header */}
      <header className="relative z-40 w-full border-b border-[#415A77] dark:border-[#3a0404] bg-[#0D1B2A]/90 dark:bg-[#060102]/90 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#1B263B] dark:bg-[#250101] shadow-[0_0_10px_rgba(212,175,55,0.3)]">
            <span className="font-serif text-[#D4AF37] font-bold text-lg">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg text-[#F7F3E9] dark:text-[#EEEAD7] tracking-widest">BATHABIT</span>
            <span className="font-mono text-[9px] text-[#F7F3E9]/50 dark:text-[#8d9685] tracking-[0.2em] uppercase">Gothic Nocturnal Codex • The Awakening</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-6 font-mono text-[10px] uppercase tracking-widest font-bold">
            <span className="text-[#D4AF37] px-2 py-1 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/30">The Awakening</span>
            <span className="text-[#F7F3E9]/50 hover:text-[#D4AF37] cursor-pointer">Rites & Vows</span>
            <span className="text-[#F7F3E9]/50 hover:text-[#D4AF37] cursor-pointer">Codex Archives</span>
          </nav>
          
          <div className="flex items-center gap-4 border-l border-[#415A77] dark:border-[#3a0404] pl-4">
            <button className="font-mono text-[10px] uppercase tracking-widest text-[#F7F3E9]/70 hover:text-[#D4AF37] transition-colors">
              — The Threshold
            </button>
            <button onClick={toggleTheme} className="flex items-center gap-2 border border-[#415A77] dark:border-[#D4AF37]/30 rounded-full px-3 py-1.5 hover:bg-[#1B263B] dark:hover:bg-[#1e0306] transition-colors">
              {theme === 'dark' ? (
                <>
                  <Moon size={12} className="text-[#F5D77F]" />
                  <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-wider font-semibold">Night Realm</span>
                </>
              ) : (
                <>
                  <Sun size={12} className="text-[#F5D77F]" />
                  <span className="font-mono text-[9px] text-[#F5D77F] uppercase tracking-wider font-semibold">Light Realm</span>
                </>
              )}
            </button>
            <div className="w-8 h-8 rounded-full bg-[#1B263B] dark:bg-[#3a0404] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37]">
              <User size={14} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 py-8 flex flex-col items-center">
        
        {/* Title Section */}
        <div className="text-center mb-10 mt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B263B] dark:bg-[#250101] border border-[#415A77] dark:border-[#3a0404] rounded shadow-inner mb-6">
            <span className="text-[#D4AF37] text-[10px]">✦</span>
            <span className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">Sanctum Noctis • Rite of Initiation • Phase I</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white tracking-wider mb-4 drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)] dark:drop-shadow-[0_2px_15px_rgba(255,255,255,0.2)]">
            CHOOSE WHO YOU BECOME.
          </h1>
          <p className="font-sans text-sm text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-xl mx-auto leading-relaxed">
            Inscribe your true name into the nocturnal codex. Select your vessel and prime discipline before consecrating your soul into the Sanctum.
          </p>
          <div className="flex justify-center mt-6">
            <span className="text-[#415A77] dark:text-[#3a0404] text-xs">─ ✦ ─</span>
          </div>
        </div>

        {/* 3 Columns Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-10 gap-8">
          
          {/* Col 1: The Nom De Guerre */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="border border-[#415A77]/80 dark:border-[#D4AF37]/30 bg-gradient-to-b from-[#1B263B]/90 to-[#0D1B2A]/90 dark:from-[#1a0505]/90 dark:to-[#0a0204]/90 backdrop-blur-xl rounded-lg p-8 relative shadow-[0_8px_30px_rgba(65,90,119,0.2)] dark:shadow-[0_8px_30px_rgba(212,175,55,0.08)] h-full">
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>
              
              <div className="flex items-center justify-between border-b border-[#415A77] dark:border-[#3a0404] pb-3 mb-5">
                <h3 className="font-serif text-base font-bold text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-widest flex items-center gap-2">
                  <span className="text-[#D4AF37] font-mono text-xs">I.</span> The Nom De Guerre
                </h3>
                <Book size={14} className="text-[#D4AF37]/70" />
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest font-bold">Initiate Title & Name</label>
                  <span className="font-mono text-[8px] text-[#6D0808] dark:text-[#9e1313] uppercase tracking-widest bg-[#1B263B] dark:bg-[#250101] px-1 rounded border border-[#6D0808]/30">Gothic Citizen</span>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    className="w-full bg-[#1B263B]/50 dark:bg-[#1a0101] border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37] dark:text-[#F5D77F] font-serif text-xl px-4 py-3 rounded focus:outline-none focus:border-[#D4AF37]"
                  />
                  <Search size={14} className="absolute right-3 top-3.5 text-[#F7F3E9]/40" />
                </div>
                <p className="text-[10px] text-[#F7F3E9]/50 dark:text-[#8d9685] leading-relaxed mt-1">
                  Permanently bound to your ancestral ledger and Sanctum log.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center bg-[#1B263B]/30 dark:bg-[#250101]/30 p-2 border border-[#415A77]/50 dark:border-[#3a0404] rounded">
                  <div className="flex flex-col">
                     <span className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest mb-0.5">Initiate Archetype</span>
                     <span className="font-serif text-[#F7F3E9] dark:text-[#EEEAD7] text-sm font-bold">{currentPath.name}</span>
                  </div>
                  <span className="font-mono text-[8px] text-white bg-red-900/80 dark:bg-red-900 px-2 py-0.5 rounded border border-red-500/50 uppercase tracking-widest">Pact!</span>
                </div>

                <div>
                  <h4 className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest font-bold mb-3 flex items-center gap-1">
                    <Book size={10}/> Select Covenant Path
                  </h4>
                  <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                    {PATHS.map((path) => (
                      <button 
                        key={path.id}
                        onClick={() => setSelectedPath(path.id)}
                        className={`w-full text-left p-4 rounded border flex items-start gap-4 transition-all duration-300 ${selectedPath === path.id ? 'bg-gradient-to-r from-[#415A77]/40 to-transparent dark:from-[#6D0808]/40 dark:to-transparent border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)] scale-[1.02]' : 'bg-transparent border-[#415A77]/30 dark:border-[#3a0404] hover:border-[#415A77] dark:hover:border-[#D4AF37]/50'}`}
                      >
                        <div className={`p-2 rounded border ${selectedPath === path.id ? 'bg-[#1B263B] dark:bg-[#3a0404] border-[#D4AF37]/50 text-[#D4AF37]' : 'bg-transparent border-[#415A77]/30 dark:border-[#3a0404] text-[#F7F3E9]/50'}`}>
                          <path.icon size={16} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className={`font-serif text-sm font-bold ${selectedPath === path.id ? 'text-[#F7F3E9] dark:text-[#EEEAD7]' : 'text-[#F7F3E9]/70 dark:text-[#8d9685]'}`}>{path.name}</span>
                          <span className="text-[10px] text-[#F7F3E9]/50 dark:text-[#8d9685]/70 line-clamp-1">{path.desc}</span>
                        </div>
                      </button>
                    ))}
                    
                    <div className="p-3 rounded border border-dashed border-[#415A77]/30 dark:border-[#3a0404] flex items-center gap-3 opacity-60">
                       <Shield size={14} />
                       <div className="flex flex-col gap-0.5">
                          <span className="font-serif text-[11px] font-bold">Unbreakable Oaths</span>
                          <span className="text-[9px]">Daily defaults reset at midnight bell</span>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Altar Mirror */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="border border-[#415A77]/80 dark:border-[#D4AF37]/30 bg-gradient-to-b from-[#1B263B]/90 to-[#0D1B2A]/90 dark:from-[#1a0505]/90 dark:to-[#0a0204]/90 backdrop-blur-xl rounded-lg p-6 flex-1 flex flex-col relative h-full shadow-[0_8px_30px_rgba(65,90,119,0.2)] dark:shadow-[0_8px_30px_rgba(212,175,55,0.08)]">
              <div className="absolute top-1/2 -left-2 w-4 h-4 bg-[#0D1B2A] dark:bg-[#060102] rotate-45 border-l border-b border-[#415A77] dark:border-[#3a0404]"></div>
              
              <div className="flex items-center justify-between mb-4 px-2">
                <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="text-[8px]">✦</span> Altar Mirror <span className="text-[8px]">✦</span>
                </span>
                <span className="font-mono text-[9px] text-[#F7F3E9]/50 dark:text-[#8d9685] uppercase tracking-widest">
                  Vessel Noctis
                </span>
              </div>

              {/* Main Avatar Preview */}
              <div className="w-full h-[340px] border border-[#415A77]/50 dark:border-[#3a0404] bg-gradient-to-b from-[#1B263B]/50 dark:from-[#1a0101] to-[#0D1B2A] dark:to-[#0a0204] rounded relative overflow-hidden flex flex-col justify-end p-6 group">
                
                {/* CSS Avatar Placeholder (Since we don't have images) */}
                <div className="absolute inset-0 flex items-center justify-center pt-4">
                  <div className="w-3/5 h-4/5 border border-[#415A77]/30 dark:border-[#3a0404] rounded-t-full bg-gradient-to-b from-[#1B263B] dark:from-[#3a0404] to-[#0D1B2A] dark:to-[#0a0204] flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                     <div className="absolute top-1/4 w-1/2 h-1/2 bg-[#415A77] dark:bg-[#6D0808] rounded-t-full flex items-center justify-center border border-[#D4AF37]/20">
                       <div className="w-1/2 h-2/3 bg-[#0D1B2A] dark:bg-[#1a0101] rounded-t-full relative mt-4">
                          <div className="absolute top-4 left-1.5 w-1.5 h-1.5 bg-[#F5D77F] rounded-full shadow-[0_0_5px_#F5D77F]"></div>
                          <div className="absolute top-4 right-1.5 w-1.5 h-1.5 bg-[#F5D77F] rounded-full shadow-[0_0_5px_#F5D77F]"></div>
                       </div>
                     </div>
                  </div>
                </div>

                <div className="relative z-10 w-full flex justify-between items-end bg-gradient-to-t from-[#0D1B2A] dark:from-[#0a0204] to-transparent pt-12 pb-2">
                   <div className="flex flex-col">
                     <h2 className="font-serif text-3xl font-bold text-white drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">{characterName}</h2>
                     <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest drop-shadow-md">Initiate of {currentPath.name}</span>
                   </div>
                </div>
                
                {/* Arrows */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-black/50 text-white rounded cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">‹</div>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-black/50 text-white rounded cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">›</div>
              </div>

              {/* Stats Bar */}
              <div className="flex justify-between items-center bg-[#1B263B]/40 dark:bg-[#250101]/40 border-x border-b border-[#415A77]/50 dark:border-[#3a0404] px-4 py-2 rounded-b mb-6">
                 <div className="flex items-center gap-2">
                    <span className="text-[#D4AF37] font-serif">🏆</span>
                    <span className="font-serif text-[11px] font-bold uppercase tracking-widest text-[#F7F3E9] dark:text-[#EEEAD7]">Level 1 • Novice</span>
                 </div>
                 <div className="flex items-center gap-3 font-mono text-[9px] font-bold text-[#F7F3E9]/70 dark:text-[#8d9685] tracking-widest">
                    <span>0 XP</span>
                    <span className="text-[#D4AF37]">✦ 0 Crowns</span>
                 </div>
              </div>

              {/* Resource blocks */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-[#1B263B]/20 dark:bg-[#1a0101] border border-[#415A77]/30 dark:border-[#3a0404] p-3 flex flex-col items-center justify-center text-center rounded">
                  <span className="font-mono text-[8px] text-[#F7F3E9]/50 dark:text-[#8d9685] uppercase tracking-widest mb-2">Vigor Reservoir</span>
                  <span className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] leading-none mb-2">100 / 100</span>
                  <div className="w-full h-1 bg-[#1B263B] dark:bg-[#3a0404] rounded-full"><div className="w-full h-full bg-[#D4AF37] rounded-full"></div></div>
                </div>
                <div className="bg-[#1B263B]/20 dark:bg-[#1a0101] border border-[#415A77]/30 dark:border-[#3a0404] p-3 flex flex-col items-center justify-center text-center rounded">
                  <span className="font-mono text-[8px] text-[#F7F3E9]/50 dark:text-[#8d9685] uppercase tracking-widest mb-2">Crown Multiplier</span>
                  <span className="font-serif text-lg font-bold text-[#D4AF37] leading-none mb-1">1.00x</span>
                  <span className="font-mono text-[8px] text-[#F7F3E9]/40 dark:text-[#8d9685]/60 uppercase tracking-widest">Humble Cloth</span>
                </div>
                <div className="bg-[#1B263B]/20 dark:bg-[#1a0101] border border-[#415A77]/30 dark:border-[#3a0404] p-3 flex flex-col items-center justify-center text-center rounded">
                  <span className="font-mono text-[8px] text-[#F7F3E9]/50 dark:text-[#8d9685] uppercase tracking-widest mb-2">Lunar Affinity</span>
                  <span className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7] flex items-center gap-1 mb-1">
                    <Moon size={12} className="text-[#F5D77F]" /> Waxing
                  </span>
                  <span className="font-mono text-[8px] text-[#4ade80] uppercase tracking-widest">+5% Midnight Focus</span>
                </div>
              </div>

              {/* Vessel Selector */}
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <User size={10} className="text-[#D4AF37]"/> Select Initiate Vessel
                  </h4>
                  <span className="font-mono text-[8px] text-[#F7F3E9]/40 dark:text-[#8d9685]/60 tracking-widest uppercase">4 Novice Forms</span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[1, 2, 3, 4].map(num => (
                    <button 
                      key={num}
                      onClick={() => setSelectedVessel(num)}
                      className={`aspect-square rounded border overflow-hidden relative ${selectedVessel === num ? 'border-[#D4AF37]' : 'border-[#415A77]/30 dark:border-[#3a0404] opacity-50 hover:opacity-100'}`}
                    >
                      <div className="w-full h-full bg-[#1B263B]/50 dark:bg-[#1a0101] flex flex-col justify-end items-center pb-2">
                         <div className="w-3/5 h-3/4 rounded-t-full bg-[#415A77] dark:bg-[#6D0808] flex items-center justify-center border border-[#415A77] dark:border-[#3a0404]"></div>
                         {selectedVessel === num && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-[#D4AF37]"></div>}
                      </div>
                    </button>
                  ))}
                </div>
                
                <p className="text-[10px] text-[#F7F3E9]/50 dark:text-[#8d9685]/80 text-center leading-relaxed">
                  Initiate vessels begin in humble cloth. Legendary regalia, brooches, and illuminated gothic auras are forged through daily quests in The Sanctum.
                </p>
              </div>

            </div>
          </div>

          {/* Col 3: The Foundational Discipline */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="border border-[#415A77]/80 dark:border-[#D4AF37]/30 bg-gradient-to-b from-[#1B263B]/90 to-[#0D1B2A]/90 dark:from-[#1a0505]/90 dark:to-[#0a0204]/90 backdrop-blur-xl rounded-lg p-8 relative h-full shadow-[0_8px_30px_rgba(65,90,119,0.2)] dark:shadow-[0_8px_30px_rgba(212,175,55,0.08)]">
              <div className="absolute top-1/2 -right-2 w-4 h-4 bg-[#0D1B2A] dark:bg-[#060102] rotate-45 border-r border-t border-[#415A77] dark:border-[#3a0404]"></div>
              <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#D4AF37] rotate-45"></div>

              <div className="flex items-center justify-between border-b border-[#415A77] dark:border-[#3a0404] pb-3 mb-4">
                <h3 className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-widest flex items-center gap-2">
                  <span className="text-[#D4AF37] font-mono text-xs">II.</span> The Foundational Discipline
                </h3>
                <Activity size={14} className="text-[#D4AF37]/70" />
              </div>

              <p className="text-[10px] text-[#F7F3E9]/70 dark:text-[#8d9685] mb-5 leading-relaxed">
                Select your starting prime attribute. Bestows an instant <strong className="text-[#D4AF37]">+2 starting affinity</strong> and aligns your initial nocturnal habits:
              </p>

              <div className="space-y-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                {DISCIPLINES.map(disc => (
                  <button
                    key={disc.id}
                    onClick={() => setSelectedDiscipline(disc.id)}
                    className={`w-full text-left flex items-center gap-4 p-4 rounded border transition-all duration-300 ${selectedDiscipline === disc.id ? 'bg-gradient-to-r from-[#415A77]/30 to-transparent dark:from-[#6D0808]/30 dark:to-transparent border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.25)] scale-[1.02]' : 'bg-[#1B263B]/10 dark:bg-transparent border-[#415A77]/30 dark:border-[#3a0404] hover:border-[#415A77]/60 dark:hover:border-[#D4AF37]/50'}`}
                  >
                    <div className={`p-3 rounded border flex-shrink-0 ${selectedDiscipline === disc.id ? 'bg-[#1B263B] dark:bg-red-900/20 border-[#D4AF37]/50 dark:border-red-500/30 text-[#D4AF37] dark:text-red-400' : 'bg-[#1B263B]/30 dark:bg-[#1a0101] border-[#415A77]/30 dark:border-[#3a0404] text-[#F7F3E9]/40'}`}>
                      <disc.icon size={20} />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-serif text-sm font-bold tracking-wider ${selectedDiscipline === disc.id ? 'text-[#F7F3E9] dark:text-[#EEEAD7]' : 'text-[#F7F3E9]/60 dark:text-[#8d9685]'}`}>{disc.name}</span>
                        <span className="text-[8px] font-mono uppercase bg-[#1B263B] dark:bg-[#3a0404] text-[#F7F3E9]/50 dark:text-[#8d9685] px-1.5 py-0.5 rounded">+2 Bonus</span>
                      </div>
                      <span className="text-[10px] text-[#F7F3E9]/50 dark:text-[#8d9685]/80 leading-tight">{disc.desc}</span>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedDiscipline === disc.id ? 'bg-[#D4AF37]/20 dark:bg-red-900/30 border-[#D4AF37] dark:border-red-500 text-[#D4AF37] dark:text-red-500' : 'border-[#415A77]/50 dark:border-[#3a0404]'}`}>
                         {selectedDiscipline === disc.id && <div className="w-2 h-2 rounded-full bg-[#D4AF37] dark:bg-red-500"></div>}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-[#1B263B]/30 dark:bg-[#1a0101] border border-[#415A77]/30 dark:border-[#3a0404] rounded flex gap-3 items-start">
                <div className="mt-0.5 text-[#D4AF37]"><Activity size={12}/></div>
                <p className="text-[9px] text-[#F7F3E9]/50 dark:text-[#8d9685] leading-relaxed">
                  Each completed nocturnal rite grants +15 XP toward this discipline's mastery branch.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Animated Bottom Ledger (Not fixed) */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "0px 0px -50px 0px" }} 
        transition={{ duration: 0.6 }} 
        className="relative mt-12 w-full max-w-[1400px] mx-auto rounded-t-xl border border-b-0 border-[#415A77] dark:border-[#3a0404] bg-gradient-to-t from-[#1B263B] to-[#0D1B2A] dark:from-[#1a0101] dark:to-[#0a0204] backdrop-blur-xl z-40 p-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]"
      >
         <div className="flex flex-col">
            <span className="font-mono text-[8px] text-[#D4AF37] uppercase tracking-widest font-bold mb-1 flex items-center gap-1.5">
               <span className="text-[6px]">✦</span> Conscript Summary Ledger
            </span>
            <div className="font-serif text-sm md:text-base text-[#F7F3E9] dark:text-[#EEEAD7] tracking-wide">
               Vessel: <span className="font-bold">{characterName}</span> • 
               Path: <span className="font-bold text-[#F7F3E9]/70 dark:text-[#8d9685]">{currentPath.name}</span> • 
               Prime: <span className="font-bold text-[#D4AF37] dark:text-red-800">{currentDiscipline.name} (+2)</span> • 
               Rank: <span className="font-bold text-[#F7F3E9]/70 dark:text-[#8d9685]">Novice I</span>
            </div>
            <div className="mt-1 flex items-center gap-3 font-mono text-[9px] text-[#F7F3E9]/40 dark:text-[#8d9685]/70">
               <span>Solemn Seal pending in Blood & Ink</span>
               <span className="cursor-pointer hover:text-[#D4AF37] underline underline-offset-2">→ Alter Prior Inscription</span>
            </div>
         </div>
         
         <button 
           onClick={handleAwaken}
           className="bg-gradient-to-r from-[#415A77] dark:from-[#3a0000] to-[#1B263B] dark:to-[#1a0000] border border-[#D4AF37]/50 dark:border-red-700/50 hover:border-[#D4AF37] dark:hover:border-red-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] dark:hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] text-[#F7F3E9] dark:text-[#EEEAD7] font-serif uppercase tracking-[0.2em] font-bold text-xs py-3 px-12 rounded transition-all flex items-center justify-center gap-3 shrink-0"
         >
            Awaken ✦ →
         </button>
      </motion.div>

    </div>
  );
}

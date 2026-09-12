
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { Moon, Sun, Shield, Target, Zap, Book, ShieldAlert, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Landing() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[#0D1B2A] dark:bg-[#0a0204] text-[#F7F3E9] dark:text-[#EEEAD7] font-sans selection:bg-[#415A77] dark:bg-[#6D0808] selection:text-[#F5D77F] overflow-x-hidden">
      
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#1B263B] dark:bg-[#3a0404]/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#415A77] dark:bg-[#6d0808]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/3 w-[800px] h-[800px] bg-[#0D1B2A] dark:bg-[#1a0101]/60 rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D1B2A] dark:bg-[#0a0204]/90 backdrop-blur-md border-b border-[#415A77] dark:border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#415A77]/40 dark:bg-[#1e0306] border border-[#415A77] dark:border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)] text-[#F5D77F]">
              <span className="font-serif font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] tracking-[0.2em] flex items-center gap-1.5">
                BATHABIT <span className="w-1 h-1 rounded-full bg-[#F5D77F] shadow-[0_0_8px_#D4AF37]"></span>
              </span>
              <span className="font-mono text-[9px] text-[#C5A059] tracking-[0.3em] uppercase">The Codex</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-[#F7F3E9]/70 dark:text-[#8d9685] font-semibold">
            <a href="#ranks" className="hover:text-[#F5D77F] transition-colors">Progression Ranks</a>
            <a href="#path" className="hover:text-[#F5D77F] transition-colors">The Fourfold Path</a>
            <a href="#grimoire" className="hover:text-[#F5D77F] transition-colors">The Grimoire</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#415A77] dark:border-[#D4AF37]/30 bg-[#415A77]/40 dark:bg-[#1e0306] cursor-pointer hover:bg-[#415A77]/60 dark:hover:bg-[#3a0404] transition-colors"
            >
              {theme === 'dark' ? (
                <>
                  <Moon size={14} className="text-[#F5D77F]" />
                  <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-wider">Night Realm</span>
                </>
              ) : (
                <>
                  <Sun size={14} className="text-[#F5D77F]" />
                  <span className="font-mono text-[9px] text-[#F5D77F] uppercase tracking-wider">Light Realm</span>
                </>
              )}
            </button>
            <Link to="/auth">
              <button className="px-5 py-2 font-mono text-[10px] uppercase tracking-widest text-[#F7F3E9]/70 dark:text-[#8d9685] hover:text-[#F7F3E9] dark:text-[#EEEAD7] border border-transparent hover:border-[#415A77] dark:border-[#D4AF37]/30 rounded transition-all">
                Threshold
              </button>
            </Link>
            <Link to="/auth">
              <button className="px-6 py-2 bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#3a0404] text-[#F5D77F] font-serif text-[11px] font-bold uppercase tracking-[0.2em] rounded shadow-[0_0_15px_rgba(65,90,119,0.5)] dark:shadow-[0_0_15px_rgba(109,8,8,0.5)] border border-[#415A77] dark:border-[#D4AF37]/50 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2">
                <span className="text-[#D4AF37]">✦</span> Enter Sanctum
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-32 px-6 flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl flex flex-col items-center">
          <div className="px-4 py-1.5 rounded-full border border-[#415A77] dark:border-[#D4AF37]/30 bg-[#415A77]/40 dark:bg-[#1e0306]/50 mb-8 flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold">
              Sanctum Noctis • The Threshold of Ascension
            </span>
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] leading-tight tracking-tight mb-6 drop-shadow-2xl">
            TURN YOUR LIFE <br />
            <span className="italic text-[#D4AF37] font-light">INTO LEGEND.</span>
          </h1>

          <p className="text-[#F7F3E9]/70 dark:text-[#8d9685] text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium">
            Your vows resonate through the obsidian arches. BatHabit transforms real-world habits and daily discipline into epic RPG quests — rewarding your consistency with Arcane Essence XP, Tarnished Crowns, attribute mastery, and true character ascension.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link to="/auth">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#4a0202] text-[#F5D77F] font-serif text-sm font-bold uppercase tracking-[0.2em] rounded-lg shadow-[0_0_30px_rgba(65,90,119,0.7)] dark:shadow-[0_0_30px_rgba(109,8,8,0.7)] border border-[#415A77] dark:border-[#D4AF37]/60 hover:scale-105 transition-transform flex items-center justify-center gap-3">
                <span className="text-[#D4AF37]">✦</span> Begin Your Awakening
              </button>
            </Link>
            <Link to="/auth">
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#D4AF37] font-serif text-sm font-bold uppercase tracking-[0.2em] rounded-lg border border-[#415A77] dark:border-[#D4AF37]/30 hover:bg-[#415A77]/40 dark:bg-[#1e0306] hover:border-[#415A77] dark:border-[#D4AF37]/60 transition-all flex items-center justify-center">
                Enter The Threshold
              </button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 text-[10px] font-mono text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest opacity-60">
            <span>✦ Zero Shattered Vows</span>
            <span>•</span>
            <span>Open To All Initiates</span>
            <span>•</span>
            <span>No Credit Grimoire Required ✦</span>
          </div>
        </motion.div>
      </section>

      {/* Mockup Showcase */}
      <section className="relative z-10 pb-32 px-6">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
          className="max-w-5xl mx-auto rounded-xl border border-[#415A77] dark:border-[#D4AF37]/30 bg-[#0c0608] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden relative"
        >
          {/* Mockup Top Bar */}
          <div className="h-12 border-b border-[#415A77] dark:border-[#D4AF37]/20 bg-[#1B263B] dark:bg-[#120305] flex items-center justify-between px-6">
             <div className="flex gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-[#1B263B] dark:bg-[#3a0404]"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/30"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-[#415A77]/40 dark:bg-[#1e0306]"></div>
             </div>
             <span className="font-mono text-[10px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">Sanctum Noctis • Chamber of Command</span>
             <div className="flex gap-4 font-mono text-[9px] text-[#D4AF37]">
                <span className="flex items-center gap-1">✦ 7 Days <span className="text-[#F7F3E9]/70 dark:text-[#8d9685]">Unbroken Vow</span></span>
                <span className="flex items-center gap-1">✦ 2,840 <span className="text-[#F7F3E9]/70 dark:text-[#8d9685]">Crowns</span></span>
             </div>
          </div>
          
          {/* Mockup Body */}
          <div className="p-8 flex flex-col md:flex-row gap-8 bg-gradient-to-b from-[#0c0608] to-[#120305]">
            {/* Mockup Avatar Box */}
            <div className="w-64 shrink-0 flex flex-col items-center">
              <div className="w-full h-72 border border-[#415A77] dark:border-[#D4AF37]/40 bg-[#415A77]/40 dark:bg-[#1e0306] rounded-lg p-2 shadow-[0_0_30px_rgba(65,90,119,0.3)] dark:shadow-[0_0_30px_rgba(109,8,8,0.3)] relative overflow-hidden flex flex-col items-center justify-center">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=600&auto=format&fit=crop')] opacity-30 bg-cover bg-center"></div>
                 <div className="relative z-10 bg-[#0D1B2A] dark:bg-[#0a0204]/80 px-4 py-1.5 rounded border border-[#415A77] dark:border-[#D4AF37]/50 mb-4 mt-auto shadow-lg backdrop-blur-sm">
                   <span className="font-serif text-[10px] font-bold text-[#F5D77F] uppercase tracking-widest">Covenant of the Eclipse</span>
                 </div>
                 <div className="relative z-10 bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#3a0404] px-4 py-1.5 rounded-full border border-[#415A77] dark:border-[#D4AF37]/50 shadow-lg mb-4">
                   <span className="font-serif text-[11px] font-bold text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-widest">Level 1 • Novice</span>
                 </div>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">The Uninitiated Seeker</h3>
              <p className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest mt-1">Rank I Initiate • Novitiate Vigil</p>
            </div>
            
            {/* Mockup Right Side */}
            <div className="flex-1 flex flex-col gap-6">
              {/* XP Bar */}
              <div className="bg-[#415A77]/40 dark:bg-[#1e0306]/50 rounded-lg p-6 border border-[#415A77] dark:border-[#D4AF37]/20 relative">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F5D77F] shadow-[0_0_8px_#D4AF37]"></span>
                    Arcane Essence XP Gauge
                  </span>
                  <span className="font-mono text-[10px] text-[#F7F3E9] dark:text-[#EEEAD7]">142 / 282 XP <span className="text-[#F7F3E9]/70 dark:text-[#8d9685]">(50.3%)</span></span>
                </div>
                <div className="w-full h-3 bg-[#0D1B2A] dark:bg-[#0a0204] rounded-full overflow-hidden border border-[#415A77] dark:border-[#D4AF37]/10">
                   <div className="h-full bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] via-[#D4AF37] to-[#F5D77F] w-[50.3%] shadow-[0_0_10px_#D4AF37]"></div>
                </div>
                <div className="flex justify-between mt-3 font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase">
                  <span>✦ 140 XP Required to achieve Level 2</span>
                  <span>Next Title: Night Walker</span>
                </div>
              </div>
              
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4">
                {['Active Vigor', 'Shadow Will', 'Discipline', 'Lunar Phase'].map((stat, i) => (
                  <div key={i} className="bg-[#415A77]/40 dark:bg-[#1e0306]/30 border border-[#415A77] dark:border-[#D4AF37]/10 p-4 rounded-lg flex flex-col items-center justify-center text-center">
                    <span className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest mb-1">{stat}</span>
                    <span className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">{['100 / 100', 'Tier I', '1.00x', 'Waxing'][i]}</span>
                  </div>
                ))}
              </div>

              {/* Quest item */}
              <div className="bg-gradient-to-r from-[#415A77] dark:from-[#1e0306] to-[#0D1B2A] dark:to-[#0a0204] border border-[#415A77] dark:border-[#D4AF37]/20 p-5 rounded-lg flex justify-between items-center mt-auto">
                 <div>
                   <div className="flex items-center gap-2 mb-1">
                     <span className="px-2 py-0.5 bg-[#1B263B] dark:bg-[#3a0404] text-[#D4AF37] font-mono text-[8px] uppercase tracking-wider rounded border border-[#415A77] dark:border-[#D4AF37]/30">Daily Ritual</span>
                     <span className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685]">Ends in 12h 45m</span>
                   </div>
                   <h4 className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">Awaken at First Light & 20 Min Meditation</h4>
                   <p className="font-mono text-[9px] text-[#D4AF37] mt-2">Rewards: +45 XP • +20 Crowns • Wisdom +1</p>
                 </div>
                 <button className="px-6 py-2 bg-[#415A77] dark:bg-[#6D0808] text-[#D4AF37] font-serif text-[10px] font-bold uppercase tracking-widest rounded border border-[#415A77] dark:border-[#D4AF37]/50 shadow-[0_0_15px_rgba(65,90,119,0.4)] dark:shadow-[0_0_15px_rgba(109,8,8,0.4)]">
                   Complete Quest
                 </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Celestial Ascension Path */}
      <section id="ranks" className="relative z-10 py-32 px-6 bg-[#1B263B] dark:bg-[#120305] border-y border-[#415A77] dark:border-[#D4AF37]/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 mb-4">
              <span className="text-[#D4AF37]">✦</span> Disciplines of Ascension • Fivefold Sovereignty <span className="text-[#D4AF37]">✦</span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] mb-6">
              The Celestial Ascension Path
            </h2>
            <p className="text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-2xl mx-auto">
              Consistency is forged in darkness. As your vows endure without faltering, your soul rises through ceremonial nocturnal ranks, granting permanent multiplier bonuses.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-5 gap-4"
          >
            {[
              { rank: 'I', name: 'Novice', level: '1 - 4', desc: 'The uncarved obsidian stone. Binding first vows and mastering physicality.', bonus: '+0% Damage Multiplier', title: 'True Initiate of Awakening', color: 'from-[#415A77] dark:from-[#1e0306] to-[#0D1B2A] dark:to-[#0a0204]' },
              { rank: 'II', name: 'Awakened', level: '5 - 14', desc: 'The Raven Soul awakened. Seven consecutive dawns witnessed.', bonus: '+5% Damage Multiplier', title: 'True Night Walker', color: 'from-[#1B263B] dark:from-[#2a0404] to-[#0D1B2A] dark:to-[#0f0000]' },
              { rank: 'III', name: 'Disciplined', level: '15 - 24', desc: 'The Iron Bloodline chain forged. Willpower acts as obsidian armor.', bonus: '+10% Crown Harvest', title: 'True Warden of Iron', color: 'from-[#1B263B] dark:from-[#3a0404] to-[#0D1B2A] dark:to-[#140000]' },
              { rank: 'IV', name: 'Ascendant', level: '25 - 49', desc: 'The Scholar of Shadows. Rare Grimoire transmutations unlock.', bonus: '+15% All Attribute Gain', title: 'True Nightseer', color: 'from-[#415A77] dark:from-[#6D0808] to-[#1e0306]', glow: true },
              { rank: 'V', name: 'Master', level: '50+', desc: 'The Nocturnal Sovereign. Life discipline becomes effortlessly mythic.', bonus: '+25% Perpetual Sovereignty', title: 'True Architect of the Gate', color: 'from-[#1B263B] dark:from-[#201004] to-[#0D1B2A] dark:to-[#0a0204]' }
            ].map((r, i) => (
              <motion.div key={i} variants={fadeIn} className={`bg-gradient-to-b ${r.color} rounded-xl p-6 border ${r.glow ? 'border-[#415A77] dark:border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-105 z-10' : 'border-[#415A77] dark:border-[#D4AF37]/20'} relative flex flex-col items-center text-center`}>
                {r.glow && <div className="absolute -top-3 bg-[#415A77] dark:bg-[#6D0808] border border-[#415A77] dark:border-[#D4AF37] px-3 py-0.5 rounded font-mono text-[8px] text-[#F5D77F] uppercase tracking-widest shadow-lg">Most Honored</div>}
                
                <div className="flex justify-between w-full font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest mb-6 opacity-60">
                  <span>Rank {r.rank}</span>
                  <span>{'+'.repeat(i+1)}</span>
                </div>
                
                <div className={`w-12 h-12 rounded-full border ${r.glow ? 'border-[#F5D77F] bg-[#1B263B] dark:bg-[#3a0404] shadow-[0_0_15px_rgba(212,175,55,0.5)] text-[#F5D77F]' : 'border-[#415A77] dark:border-[#D4AF37]/30 bg-[#415A77]/40 dark:bg-[#1e0306] text-[#D4AF37]'} flex items-center justify-center mb-4`}>
                  {i === 0 && <span className="font-serif text-lg font-bold">I</span>}
                  {i === 1 && <span className="font-serif text-lg font-bold">II</span>}
                  {i === 2 && <span className="font-serif text-lg font-bold">III</span>}
                  {i === 3 && <span className="font-serif text-lg font-bold">IV</span>}
                  {i === 4 && <span className="font-serif text-lg font-bold">V</span>}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] mb-1">{r.name}</h3>
                <span className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest mb-4">Level {r.level}</span>
                
                <p className="text-[11px] text-[#F7F3E9]/70 dark:text-[#8d9685] leading-relaxed mb-6 flex-1">
                  {r.desc}
                </p>
                
                <div className="w-full pt-4 border-t border-[#415A77] dark:border-[#D4AF37]/10 flex flex-col gap-1">
                  <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest font-semibold">{r.bonus}</span>
                  <span className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">{r.title}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ritual Mechanics */}
      <section id="path" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 mb-4">
              <span className="text-[#D4AF37]">✦</span> Ritual Mechanics of the Sanctum <span className="text-[#D4AF37]">✦</span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] mb-6">
              How the Codex Binds Reality to Power
            </h2>
            <p className="text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-2xl mx-auto">
              Four ceremonial rites that transform mundane checklists into sacred mythic ascension.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { step: 'I - Inscribe', title: 'Awaken the Vow', desc: 'Convert real-life workouts, algorithmic study, meditation, and healthy nutrition into binding codex quests. Define your difficulty and attribute affinity.' },
              { step: 'II - Execute', title: 'Forge Daily Rites', desc: 'Execute actions in the physical realm. Check off rites before dusk to sustain your unbroken bloodline streak and invoke the nocturnal multiplier bonus.' },
              { step: 'III - Harvest', title: 'Harvest Essence', desc: 'Collect non-linear XP, earn Obsidian Crowns, and directly augment your Strength, Intellect, Wisdom, Focus, and Vitality stats in real-time.' },
              { step: 'IV - Transmute', title: 'Ascend Sovereignty', desc: 'Level up, unlock ceremonial titles, summon rare shop relics from the Night Market, and transmute your character avatar with prestigious gear.' }
            ].map((r, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-[#1B263B] dark:bg-[#120305] rounded-xl p-6 border border-[#415A77] dark:border-[#D4AF37]/20 relative overflow-hidden group hover:border-[#415A77] dark:border-[#D4AF37]/50 transition-colors">
                <div className="absolute -right-8 -bottom-8 font-serif text-[120px] font-bold text-[#D4AF37]/5 leading-none select-none group-hover:text-[#D4AF37]/10 transition-colors">
                  {['I', 'II', 'III', 'IV'][i]}
                </div>
                <div className="relative z-10">
                  <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest font-semibold mb-2 block">Rite {r.step}</span>
                  <h3 className="font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] mb-4">{r.title}</h3>
                  <p className="text-sm text-[#F7F3E9]/70 dark:text-[#8d9685] leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grimoire Attributes & Streaks */}
      <section id="grimoire" className="relative z-10 py-32 px-6 bg-[#1B263B] dark:bg-[#120305] border-y border-[#415A77] dark:border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold flex items-center justify-center gap-2 mb-4">
              <span className="text-[#D4AF37]">✦</span> Grimoire Attributes & Streak Covenant <span className="text-[#D4AF37]">✦</span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] mb-6">
              Disciplines of Mastery
            </h2>
            <p className="text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-2xl mx-auto">
              Mirrored from the Sanctum Command Chamber. Every habit completed permanently raises your five core archetypal stats.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          >
            {[
              { name: 'Strength', icon: Shield, val: 18, desc: 'Physical resilience, iron conditioning & cold vigils', color: 'text-blue-400' },
              { name: 'Intellect', icon: Book, val: 24, desc: 'Architectural knowledge, coding & deep algorithms', color: 'text-pink-400' },
              { name: 'Wisdom', icon: ShieldAlert, val: 19, desc: 'Mindfulness, sleep hygiene & mental clarity rituals', color: 'text-white' },
              { name: 'Focus', icon: Target, val: 22, desc: 'Deep continuous work sessions and digital distraction', color: 'text-purple-400' },
              { name: 'Vitality', icon: Zap, val: 16, desc: 'Cardio endurance, whole biological nutrition & clean energy', color: 'text-red-400' }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-[#0D1B2A] dark:bg-[#0a0204] border border-[#415A77] dark:border-[#D4AF37]/20 p-5 rounded-lg hover:border-[#415A77] dark:border-[#D4AF37]/50 transition-all flex flex-col h-full">
                 <div className="flex justify-between items-start mb-6">
                   <div className={`w-8 h-8 rounded bg-[#415A77]/40 dark:bg-[#1e0306] border border-[#415A77] dark:border-[#D4AF37]/30 flex items-center justify-center ${stat.color}`}>
                     <stat.icon size={14} />
                   </div>
                   <div className="text-right">
                     <span className="font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] block leading-none">{stat.val}</span>
                     <span className="font-mono text-[8px] text-[#4ade80] uppercase">+2 Bonus</span>
                   </div>
                 </div>
                 <span className="font-mono text-[8px] text-[#D4AF37] uppercase tracking-widest mb-1">Discipline {i+1}</span>
                 <h4 className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] mb-2">{stat.name}</h4>
                 <p className="text-[10px] text-[#F7F3E9]/70 dark:text-[#8d9685] leading-relaxed mb-4 flex-1">
                   {stat.desc}
                 </p>
                 <div className="w-full h-1 bg-[#415A77]/40 dark:bg-[#1e0306] rounded-full overflow-hidden mt-auto">
                   <div className="h-full bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#D4AF37] w-2/3"></div>
                 </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
             {/* Streak Card */}
             <div className="bg-[#0D1B2A] dark:bg-[#0a0204] border border-[#415A77] dark:border-[#D4AF37]/20 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] flex items-center gap-2">
                    <span className="text-[#f59e0b]">🔥</span> The Unbroken Bloodline
                  </h3>
                  <span className="font-mono text-[9px] text-[#D4AF37] px-2 py-1 border border-[#415A77] dark:border-[#D4AF37]/30 rounded uppercase font-semibold">
                    7 / 7 Days Sustained
                  </span>
                </div>
                <p className="text-xs text-[#F7F3E9]/70 dark:text-[#8d9685] mb-6">
                  Every day your habits are fulfilled before the midnight chiming, your bloodline multiplier increases. A shattered day breaks the seal; unbroken devotion multiplies your rewards.
                </p>
                <div className="grid grid-cols-7 gap-2 mb-6">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                    <div key={i} className={`flex flex-col items-center p-2 rounded border ${i === 6 ? 'bg-[#1B263B] dark:bg-[#3a0404] border-[#1B263B] dark:border-[#6D0808]' : 'bg-[#415A77]/40 dark:bg-[#1e0306] border-[#415A77] dark:border-[#D4AF37]/20'}`}>
                      <span className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest mb-2">{d}</span>
                      {i === 6 ? (
                        <span className="text-[#D4AF37]">🔥</span>
                      ) : (
                        <Check size={12} className="text-[#4ade80]" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between border-t border-[#415A77] dark:border-[#D4AF37]/10 pt-4 font-mono text-[9px] uppercase tracking-widest">
                   <span className="text-[#F7F3E9]/70 dark:text-[#8d9685]">Current Multiplier: <span className="text-[#D4AF37] font-bold">1.25x Cross Yield</span></span>
                   <span className="text-[#F7F3E9]/70 dark:text-[#8d9685]">Consistency: <span className="text-[#4ade80] font-bold">100%</span></span>
                </div>
             </div>

             {/* Relics Card */}
             <div className="bg-[#0D1B2A] dark:bg-[#0a0204] border border-[#415A77] dark:border-[#D4AF37]/20 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] flex items-center gap-2">
                    <span className="text-[#D4AF37]">🪙</span> Night Market Relics
                  </h3>
                  <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest">
                    Treasury Vault
                  </span>
                </div>
                <p className="text-xs text-[#F7F3E9]/70 dark:text-[#8d9685] mb-6">
                  Spend your earned Tarnished Crowns on real cosmetic armor, nocturnal titles, and rare occult brooches.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-[#415A77]/40 dark:bg-[#1e0306] p-3 rounded border border-[#415A77] dark:border-[#D4AF37]/20">
                    <div className="flex items-center gap-3">
                      <div className="text-[#D4AF37]">🦅</div>
                      <div>
                        <div className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">Raven Sigil Brooch</div>
                        <div className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">Crowns Sink Multiplier</div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#F5D77F] flex items-center gap-1">450 <span className="text-[#D4AF37]">🪙</span></span>
                  </div>
                  <div className="flex justify-between items-center bg-[#415A77]/40 dark:bg-[#1e0306] p-3 rounded border border-[#415A77] dark:border-[#D4AF37]/20">
                    <div className="flex items-center gap-3">
                      <div className="text-[#D4AF37]">📜</div>
                      <div>
                        <div className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7]">Grimoire of Deep Midnight</div>
                        <div className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">Title Ascension Orb</div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-[#F5D77F] flex items-center gap-1">900 <span className="text-[#D4AF37]">🪙</span></span>
                  </div>
                </div>
                <div className="mt-6 text-center font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest">
                   ✦ Real Rewards For Real Self-Mastery ✦
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-40 px-6 text-center bg-[#0D1B2A] dark:bg-[#0a0204]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-[#415A77] dark:border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            ✦
          </div>
          <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-widest font-semibold mb-4">
            The Obsidian Threshold Awaits
          </span>
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] mb-6">
            Your Campaign Awaits <br />
            <span className="italic text-[#D4AF37] font-light">in the Shadows.</span>
          </h2>
          <p className="text-[#F7F3E9]/70 dark:text-[#8d9685] text-lg max-w-xl mx-auto mb-10">
            Stop logging habits on lifeless corporate checklists. Inscribe your real vows into the Gothic Nocturnal Codex today and awaken the sovereign within.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/auth">
               <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#4a0202] text-[#F5D77F] font-serif text-xs font-bold uppercase tracking-[0.2em] rounded border border-[#415A77] dark:border-[#D4AF37]/60 shadow-[0_0_30px_rgba(65,90,119,0.5)] dark:shadow-[0_0_30px_rgba(109,8,8,0.5)] hover:scale-105 transition-transform">
                 Begin Your Awakening
               </button>
            </Link>
            <Link to="/auth">
               <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#D4AF37] font-serif text-xs font-bold uppercase tracking-[0.2em] rounded border border-[#415A77] dark:border-[#D4AF37]/30 hover:bg-[#415A77]/40 dark:bg-[#1e0306] transition-colors">
                 Explore The Sanctum Demo
               </button>
            </Link>
          </div>

          <div className="mt-20 flex flex-col items-center text-center opacity-60">
             <p className="font-serif italic text-sm text-[#D4AF37] mb-2">"The quill does not question the darkness; it records the vow."</p>
             <span className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">— Chapter VII : Verse 14</span>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#415A77] dark:border-[#D4AF37]/10 bg-[#0D1B2A] dark:bg-[#060102] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
             <div className="w-8 h-8 rounded-full bg-[#415A77]/40 dark:bg-[#1e0306] border border-[#415A77] dark:border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
               B
             </div>
             <div>
               <div className="font-serif text-sm font-bold text-[#F7F3E9] dark:text-[#EEEAD7] tracking-widest uppercase">BatHabit • Gothic Nocturnal Codex</div>
               <div className="font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase mt-1">Forged for the backend dev realm with React, Tailwind, Framer Motion & Prisma.</div>
             </div>
           </div>
           <div className="flex flex-wrap justify-center gap-6 font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">
              <a href="https://github.com/Noorthistime" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
           </div>
           <div className="text-right font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">
             © 2026 BatHabit Sanctum <br/>
             All Vows Consecrated.
           </div>
        </div>
      </footer>
    </div>
  );
}

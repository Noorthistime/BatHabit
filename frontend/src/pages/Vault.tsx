import React, { useState } from 'react';
import { Check, Swords, Crown, Square, Moon, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { GiDragonHead } from 'react-icons/gi';

type VaultCategory = 'All' | 'Frames' | 'Themes' | 'Badges' | 'Cosmetics';

const VAULT_CATEGORIES: VaultCategory[] = ['All', 'Frames', 'Themes', 'Badges', 'Cosmetics'];

const OWNED_ITEMS = [
  { id: 1, name: 'Iron Vow Badge', category: 'Badges', icon: <Swords size={32} />, rarity: 'Rare', equipped: true },
  { id: 2, name: 'Ember Crown', category: 'Cosmetics', icon: <Crown size={32} />, rarity: 'Common', equipped: false },
  { id: 3, name: 'Standard Frame', category: 'Frames', icon: <Square size={32} />, rarity: 'Common', equipped: true },
  { id: 4, name: 'Default Theme', category: 'Themes', icon: <Moon size={32} />, rarity: 'Common', equipped: true },
  { id: 5, name: 'Initiate Badge', category: 'Badges', icon: <Shield size={32} />, rarity: 'Common', equipped: false },
  { id: 6, name: 'Apprentice Seal', category: 'Cosmetics', icon: <Sparkles size={32} />, rarity: 'Common', equipped: false },
];

const RARITY_COLORS: Record<string, string> = {
  Common: '#8d9685', Rare: '#60a5fa', Epic: '#a855f7', Legendary: '#D4AF37', Mythic: '#ff6b6b',
};

const NavEndFiligree = ({ flipped = false }: { flipped?: boolean }) => (
  <div className={`relative w-[80px] md:w-[120px] h-[32px] flex items-center ${flipped ? 'scale-x-[-1]' : ''}`}>
    <motion.svg 
      width="100%" height="100%" viewBox="0 0 120 32" fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#D4AF37] drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]"
      initial="hidden"
      animate="visible"
    >
      {/* Central horizontal line */}
      <motion.path 
        d="M0 16 L25 16" 
        stroke="currentColor" strokeWidth="1.5" 
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.8, ease: "easeOut" } } }}
      />
      <motion.path 
        d="M95 16 L120 16" 
        stroke="currentColor" strokeWidth="1.5" 
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.8 } } }}
      />
      
      {/* Eye curves */}
      <motion.path 
        d="M25 16 C 45 -4, 75 -4, 95 16" 
        stroke="currentColor" strokeWidth="1.5" 
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.4 } } }}
      />
      <motion.path 
        d="M25 16 C 45 36, 75 36, 95 16" 
        stroke="currentColor" strokeWidth="1.5" 
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.4 } } }}
      />
      
      {/* Inner flourish */}
      <motion.path 
        d="M35 16 Q 50 6 60 16" 
        stroke="currentColor" strokeWidth="1" 
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1 } } }}
      />
      <motion.path 
        d="M85 16 Q 70 26 60 16" 
        stroke="currentColor" strokeWidth="1" 
        variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1 } } }}
      />
      
      {/* Diamonds and Dots */}
      <motion.g variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1.2 } } }} style={{ transformOrigin: '15px 16px' }}>
        <path d="M12 16 L15 13 L18 16 L15 19 Z" fill="currentColor" />
      </motion.g>
      <motion.g variants={{ hidden: { opacity: 0, scale: 0 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 1.4 } } }} style={{ transformOrigin: '60px 16px' }}>
        <path d="M57 16 L60 13 L63 16 L60 19 Z" fill="currentColor" />
      </motion.g>
      <motion.circle cx="45" cy="16" r="2" fill="currentColor" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.6 } } }} />
      <motion.circle cx="75" cy="16" r="2" fill="currentColor" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.6 } } }} />
    </motion.svg>
  </div>
);

const ActiveLoadoutFrame = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Continuous Outer Gold Border with Beveled Corners */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/80 to-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.4)]" 
         style={{ clipPath: 'polygon(16px 0, calc(100% - 16px) 0, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0 calc(100% - 16px), 0 16px)' }}>
    </div>
    
    {/* Inner panel background cutting out the center of the border to make it 1.5px thick */}
    <div className="absolute inset-[1.5px] bg-[#110102]" 
         style={{ clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)' }}>
      {/* Deep Crimson Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(109,8,8,0.4)_0%,_rgba(17,1,2,1)_100%)]" />
    </div>

    {/* Inner Thin Accent Border */}
    <div className="absolute inset-[6px] border border-[#D4AF37]/20" 
         style={{ clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)' }} />

    {/* Elegant Corner Flourishes (Inside the frame) */}
    <svg className="absolute top-[8px] left-[8px] w-6 h-6 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" viewBox="0 0 24 24">
      <path d="M 0 12 L 12 0 L 14 2 L 2 14 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
    <svg className="absolute top-[8px] right-[8px] w-6 h-6 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(212,175,55,0.8)] scale-x-[-1]" viewBox="0 0 24 24">
      <path d="M 0 12 L 12 0 L 14 2 L 2 14 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
    <svg className="absolute bottom-[8px] left-[8px] w-6 h-6 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(212,175,55,0.8)] scale-y-[-1]" viewBox="0 0 24 24">
      <path d="M 0 12 L 12 0 L 14 2 L 2 14 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
    <svg className="absolute bottom-[8px] right-[8px] w-6 h-6 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(212,175,55,0.8)] scale-[-1]" viewBox="0 0 24 24">
      <path d="M 0 12 L 12 0 L 14 2 L 2 14 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>

    {/* Top-Center Royal Crest */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 flex items-center justify-center">
      <svg viewBox="0 0 40 10" className="h-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,1)]">
        <path d="M 0 0 L 20 10 L 40 0 L 20 4 Z" fill="currentColor" />
      </svg>
    </div>
    
    {/* Bottom-Center Royal Crest */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-3 flex items-center justify-center">
      <svg viewBox="0 0 40 10" className="h-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,1)] scale-y-[-1]">
        <path d="M 0 0 L 20 10 L 40 0 L 20 4 Z" fill="currentColor" />
      </svg>
    </div>
  </div>
);

const RoyalTab = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className={`relative group flex items-center justify-center px-4 md:px-6 py-2.5 z-20 transition-all duration-300 ${active ? 'scale-[1.15] md:mx-4 mx-2 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]' : 'hover:scale-105 hover:z-30'}`}
      style={{ minWidth: '80px' }}
    >
      {/* Border Layer */}
      <div className={`absolute inset-0 ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/30 group-hover:bg-[#D4AF37]/70 transition-colors'}`} 
           style={{ clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)' }}>
      </div>
      
      {/* Inner Fill Layer */}
      <div className={`absolute inset-[1.5px] ${active ? 'bg-gradient-to-b from-[#4A0404] to-[#1a0101]' : 'bg-[#110102]'}`} 
           style={{ clipPath: 'polygon(7px 0, calc(100% - 7px) 0, 100% 7px, 100% calc(100% - 7px), calc(100% - 7px) 100%, 7px 100%, 0 calc(100% - 7px), 0 7px)' }}>
      </div>

      {/* Corner accents for active state */}
      {active && (
        <>
          <div className="absolute top-[1px] left-[1px] w-2 h-2 border-t-2 border-l-2 border-[#F5D77F] pointer-events-none rounded-tl-sm shadow-[-2px_-2px_4px_rgba(245,215,127,0.5)]" />
          <div className="absolute top-[1px] right-[1px] w-2 h-2 border-t-2 border-r-2 border-[#F5D77F] pointer-events-none rounded-tr-sm shadow-[2px_-2px_4px_rgba(245,215,127,0.5)]" />
          <div className="absolute bottom-[1px] left-[1px] w-2 h-2 border-b-2 border-l-2 border-[#F5D77F] pointer-events-none rounded-bl-sm shadow-[-2px_2px_4px_rgba(245,215,127,0.5)]" />
          <div className="absolute bottom-[1px] right-[1px] w-2 h-2 border-b-2 border-r-2 border-[#F5D77F] pointer-events-none rounded-br-sm shadow-[2px_2px_4px_rgba(245,215,127,0.5)]" />
        </>
      )}
      
      {/* Text */}
      <span className={`relative z-10 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mt-0.5 ${active ? 'text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.9)]' : 'text-[#8d9685] group-hover:text-[#D4AF37]'}`}>
        {label}
      </span>
    </button>
  );
};

export function Vault() {
  const [activeCategory, setActiveCategory] = useState<VaultCategory>('All');
  const [equipped, setEquipped] = useState<Set<number>>(new Set(OWNED_ITEMS.filter(i => i.equipped).map(i => i.id)));

  const filtered = activeCategory === 'All' ? OWNED_ITEMS : OWNED_ITEMS.filter(i => i.category === activeCategory);

  const toggleEquip = (id: number, category: string) => {
    setEquipped(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        // Unequip same-category item
        OWNED_ITEMS.filter(i => i.category === category && i.id !== id).forEach(i => next.delete(i.id));
        next.add(id);
      }
      return next;
    });
  };

  const loadout = OWNED_ITEMS.filter(i => equipped.has(i.id));

  return (
    <>

      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex flex-col pb-4 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 gap-2 mb-2">
          <span className="font-mono text-xs uppercase text-[#D4AF37] tracking-[0.3em] bg-[#415A77]/20 dark:bg-[#250101] px-2.5 py-0.5 border border-[#415A77]/40 dark:border-[#D4AF37]/35 self-start">
            Sanctum Noctis • The Vault
          </span>
          <h1 className="font-serif text-3xl lg:text-4xl text-[#EEEAD7] font-bold drop-shadow-md">The Vault</h1>
          <p className="font-sans text-sm text-[#8d9685] leading-relaxed">
            Your treasury of earned relics. Equip your trophies to forge your unique nocturnal identity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Active Loadout Panel (Now on Left) */}
          <div className="p-5 flex flex-col gap-4 relative overflow-hidden shadow-[0_8px_30px_rgba(109,8,8,0.5)] bg-transparent">
            <ActiveLoadoutFrame />

            {/* Background Watermark */}
            <div className="absolute top-0 right-0 h-40 w-40 overflow-hidden pointer-events-none opacity-[0.05] text-[#D4AF37] translate-x-10 -translate-y-10">
              <GiDragonHead className="w-full h-full" />
            </div>

            <div className="relative z-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">Active Loadout</p>
              <p className="font-mono text-[9px] text-[#8d9685] mt-0.5">Currently equipped relics</p>
            </div>

            {/* Character Preview */}
            <div
              className="flex flex-col items-center gap-3 py-6 border border-[#D4AF37]/20 relative z-10 rounded-lg overflow-hidden group"
              style={{ background: 'radial-gradient(circle at center, rgba(109,8,8,0.4) 0%, rgba(15,2,4,0.7) 100%)' }}
            >
              {/* Gothic cut corners (pseudo-elements via span) */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/40" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/40" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/40" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/40" />

              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-[#D4AF37] relative z-10"
                  style={{ background: 'linear-gradient(135deg, #3d0303, #6D0808)', border: '2px solid rgba(212,175,55,0.6)', boxShadow: '0 0 20px rgba(109,8,8,0.7)' }}
                >
                  A
                </div>
                <div className="absolute -top-3 -right-3 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] z-20">
                  {loadout.find(i => i.category === 'Cosmetics')?.icon || ''}
                </div>
              </div>
              <div className="text-center relative z-10">
                <p className="font-serif text-sm font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]">Alistair Vance</p>
                <p className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest mt-1">Rank IV Ascendant</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              {(['Frames', 'Themes', 'Badges', 'Cosmetics'] as const).map(cat => {
                const item = loadout.find(i => i.category === cat);
                return (
                  <div key={cat} className="flex items-center justify-between py-2 border-b border-[#D4AF37]/20">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]/80">{cat}</span>
                    {item ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[#D4AF37] drop-shadow-[0_0_5px_rgba(212,175,55,0.5)] scale-75">{item.icon}</span>
                        <span className="font-serif text-xs text-[#EEEAD7] font-bold">{item.name}</span>
                      </div>
                    ) : (
                      <span className="font-mono text-[9px] text-[#8d9685]/50 italic">None</span>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              className="w-full py-2.5 font-mono text-xs uppercase tracking-widest transition-all mt-2 relative z-10 hover:brightness-110 active:scale-95"
              style={{ background: 'linear-gradient(90deg, #6D0808, #3d0303)', border: '1px solid rgba(212,175,55,0.6)', color: '#F5D77F', boxShadow: '0 0 15px rgba(109,8,8,0.6)' }}
            >
              Save Loadout
            </button>
          </div>

          {/* Inventory Panel (Now on Right) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Category Filter: Royal Navigation Row */}
            <div className="relative w-full py-8 flex items-center justify-center my-2 overflow-visible">
              {/* Continuous Golden Line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent shadow-[0_0_8px_rgba(212,175,55,0.8)] z-0 pointer-events-none" />
              
              <div className="relative z-10 flex items-center w-full max-w-[950px] justify-between px-2">
                <NavEndFiligree />
                
                {VAULT_CATEGORIES.map((cat, index) => (
                  <React.Fragment key={cat}>
                    <RoyalTab label={cat} active={activeCategory === cat} onClick={() => setActiveCategory(cat)} />
                    {/* Diamond Divider */}
                    {index < VAULT_CATEGORIES.length - 1 && (
                      <div className="relative z-10 flex items-center justify-center hidden sm:flex">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,1)]">
                          <path d="M6 0 L12 6 L6 12 L0 6 Z" fill="currentColor" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
                
                <NavEndFiligree flipped />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filtered.map((item, index) => {
                const isEquipped = equipped.has(item.id);
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    key={item.id}
                    className={`p-4 flex flex-col items-center justify-between gap-3 text-center cursor-pointer transition-all duration-300 group rounded-xl backdrop-blur-md relative overflow-hidden ${
                      isEquipped 
                        ? 'bg-[rgba(109,8,8,0.4)] border border-[#D4AF37] ring-1 ring-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                        : 'bg-[rgba(35,6,8,0.6)] border border-[#D4AF37]/40 hover:border-[#D4AF37]/80 hover:shadow-[0_4px_15px_rgba(109,8,8,0.6)]'
                    }`}
                    onClick={() => toggleEquip(item.id, item.category)}
                  >
                    {/* Golden Sweep Hover Animation */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out" 
                    />

                    <div className={`text-[#D4AF37] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 relative z-10 ${isEquipped ? 'drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]' : 'opacity-80'}`}>
                      {item.icon}
                    </div>
                    
                    <div className="relative z-10 mt-auto w-full">
                      <p className={`font-serif text-[13px] font-bold leading-tight ${isEquipped ? 'text-[#F5D77F]' : 'text-[#EEEAD7]'}`}>{item.name}</p>
                      <p
                        className="font-mono text-[9px] mt-1 tracking-widest uppercase"
                        style={{ color: RARITY_COLORS[item.rarity] }}
                      >
                        {item.rarity}
                      </p>
                    </div>

                    {isEquipped ? (
                      <span className="relative z-10 flex items-center justify-center gap-1.5 font-mono text-[9px] text-[#0c0608] bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] border border-[#FFF] shadow-[0_0_10px_rgba(212,175,55,0.6)] w-full py-1.5 font-bold uppercase tracking-widest">
                        <Check size={10} strokeWidth={3} /> Equipped
                      </span>
                    ) : (
                      <span className="relative z-10 font-mono text-[9px] text-[#8d9685] opacity-0 group-hover:opacity-100 transition-all uppercase tracking-widest w-full py-1.5 border border-dashed border-[#D4AF37]/30">
                        Click to Equip
                      </span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Vault;

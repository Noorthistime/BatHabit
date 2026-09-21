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
          <div
            className="p-5 flex flex-col gap-4 rounded-xl bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.85)] backdrop-blur-xl border border-[#415A77]/60 dark:border-[#D4AF37]/50 shadow-[0_8px_30px_rgba(109,8,8,0.5)] relative overflow-hidden"
          >
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
            {/* Category Filter */}
            <div className="flex gap-1 flex-wrap">
              {VAULT_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all hover:border-[#D4AF37]/50"
                  style={{
                    background: activeCategory === cat ? 'linear-gradient(180deg, rgba(109,8,8,0.8) 0%, rgba(35,6,8,0.9) 100%)' : 'rgba(35,6,8,0.4)',
                    border: `1px solid ${activeCategory === cat ? 'rgba(212,175,55,0.8)' : 'rgba(212,175,55,0.2)'}`,
                    color: activeCategory === cat ? '#F5D77F' : '#8d9685',
                    boxShadow: activeCategory === cat ? '0 0 15px rgba(109,8,8,0.5)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
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
                        ? 'bg-[rgba(109,8,8,0.3)] border border-[#D4AF37]/60 shadow-[0_0_20px_rgba(109,8,8,0.6)] ring-1 ring-[#D4AF37]/30' 
                        : 'bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.6)] border border-[#415A77]/50 dark:border-[#D4AF37]/25 hover:border-[#415A77] dark:hover:border-[#D4AF37]/60 hover:shadow-[0_8px_20px_rgba(109,8,8,0.4)]'
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

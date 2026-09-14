import React, { useState } from 'react';
import { Check, Shirt } from 'lucide-react';

type VaultCategory = 'All' | 'Frames' | 'Themes' | 'Badges' | 'Cosmetics';

const VAULT_CATEGORIES: VaultCategory[] = ['All', 'Frames', 'Themes', 'Badges', 'Cosmetics'];

const OWNED_ITEMS = [
  { id: 1, name: 'Iron Vow Badge', category: 'Badges', icon: '⚔️', rarity: 'Rare', equipped: true },
  { id: 2, name: 'Ember Crown', category: 'Cosmetics', icon: '👑', rarity: 'Common', equipped: false },
  { id: 3, name: 'Standard Frame', category: 'Frames', icon: '🔲', rarity: 'Common', equipped: true },
  { id: 4, name: 'Default Theme', category: 'Themes', icon: '🌑', rarity: 'Common', equipped: true },
  { id: 5, name: 'Initiate Badge', category: 'Badges', icon: '🔰', rarity: 'Common', equipped: false },
  { id: 6, name: 'Apprentice Seal', category: 'Cosmetics', icon: '🪬', rarity: 'Common', equipped: false },
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

          {/* Inventory Panel */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Category Filter */}
            <div className="flex gap-1 flex-wrap">
              {VAULT_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-all"
                  style={{
                    background: activeCategory === cat ? '#6D0808' : 'rgba(35,6,8,0.6)',
                    border: `1px solid ${activeCategory === cat ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.15)'}`,
                    color: activeCategory === cat ? '#D4AF37' : '#8d9685',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filtered.map(item => {
                const isEquipped = equipped.has(item.id);
                return (
                  <div
                    key={item.id}
                    className="p-4 flex flex-col items-center gap-2 text-center cursor-pointer transition-all group"
                    style={{
                      background: isEquipped ? 'rgba(109,8,8,0.3)' : 'rgba(25,4,6,0.9)',
                      border: `1px solid ${isEquipped ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.15)'}`,
                      boxShadow: isEquipped ? '0 0 15px rgba(109,8,8,0.4)' : 'none',
                    }}
                    onClick={() => toggleEquip(item.id, item.category)}
                  >
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <p className="font-serif text-xs font-bold text-[#EEEAD7] leading-tight">{item.name}</p>
                      <p
                        className="font-mono text-[8px] mt-0.5"
                        style={{ color: RARITY_COLORS[item.rarity] }}
                      >
                        {item.rarity}
                      </p>
                    </div>
                    {isEquipped ? (
                      <span className="flex items-center gap-1 font-mono text-[9px] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-2 py-0.5 uppercase tracking-wider">
                        <Check size={8} /> Equipped
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] text-[#8d9685] opacity-0 group-hover:opacity-100 transition-all uppercase tracking-wider">
                        Click to Equip
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Loadout Panel */}
          <div
            className="p-5 flex flex-col gap-4"
            style={{ background: 'rgba(25,4,6,0.95)', border: '1px solid rgba(212,175,55,0.3)', boxShadow: 'inset 0 1px 0 rgba(212,175,55,0.08)' }}
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">Active Loadout</p>
              <p className="font-mono text-[9px] text-[#8d9685] mt-0.5">Currently equipped relics</p>
            </div>

            {/* Character Preview */}
            <div
              className="flex flex-col items-center gap-3 py-6 border border-[#D4AF37]/20"
              style={{ background: 'rgba(35,6,8,0.6)' }}
            >
              <div className="relative">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-serif text-3xl font-bold text-[#D4AF37]"
                  style={{ background: 'linear-gradient(135deg, #3d0303, #6D0808)', border: '2px solid rgba(212,175,55,0.6)', boxShadow: '0 0 20px rgba(109,8,8,0.7)' }}
                >
                  A
                </div>
                <div className="absolute -top-3 -right-3 text-2xl">{loadout.find(i => i.category === 'Cosmetics')?.icon || ''}</div>
              </div>
              <div className="text-center">
                <p className="font-serif text-sm font-bold text-[#EEEAD7]">Alistair Vance</p>
                <p className="font-mono text-[9px] text-[#8d9685]">Rank IV Ascendant</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {(['Frames', 'Themes', 'Badges', 'Cosmetics'] as const).map(cat => {
                const item = loadout.find(i => i.category === cat);
                return (
                  <div key={cat} className="flex items-center justify-between py-2 border-b border-[#D4AF37]/10">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8d9685]">{cat}</span>
                    {item ? (
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">{item.icon}</span>
                        <span className="font-serif text-xs text-[#EEEAD7]">{item.name}</span>
                      </div>
                    ) : (
                      <span className="font-mono text-[9px] text-[#8d9685]/50 italic">None</span>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              className="w-full py-2.5 font-mono text-xs uppercase tracking-widest transition-all mt-2"
              style={{ background: '#6D0808', border: '1px solid rgba(212,175,55,0.4)', color: '#EEEAD7', boxShadow: '0 0 12px rgba(109,8,8,0.4)' }}
            >
              Save Loadout
            </button>
          </div>

        </div>

      </div>
    </>
  );
}

export default Vault;

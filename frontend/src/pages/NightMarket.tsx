import React, { useState } from 'react';
import { ShoppingBag, Coins, Check, Star } from 'lucide-react';

type Category = 'All' | 'Frames' | 'Themes' | 'Badges' | 'Cosmetics';

const CATEGORIES: Category[] = ['All', 'Frames', 'Themes', 'Badges', 'Cosmetics'];

const ITEMS = [
  { id: 1, name: 'Obsidian Sovereign', category: 'Frames', price: 850, icon: '🔲', rarity: 'Legendary', owned: false, desc: 'A dark frame forged from void-glass' },
  { id: 2, name: 'Crimson Pact', category: 'Themes', price: 1200, icon: '🌑', rarity: 'Mythic', owned: false, desc: 'Blood-red interface theme of the ancients' },
  { id: 3, name: 'Iron Vow Badge', category: 'Badges', price: 250, icon: '⚔️', rarity: 'Rare', owned: true, desc: 'Awarded to those who never break a vow' },
  { id: 4, name: 'Rune Sigil Frame', category: 'Frames', price: 600, icon: '🔯', rarity: 'Epic', owned: false, desc: 'Ancient runic frame inscribed with power' },
  { id: 5, name: 'Lunar Scholar', category: 'Badges', price: 400, icon: '🌙', rarity: 'Rare', owned: false, desc: 'For those who quest beneath the moon' },
  { id: 6, name: 'Twilight Veil', category: 'Themes', price: 950, icon: '🌒', rarity: 'Epic', owned: false, desc: 'A theme born from the space between night and dawn' },
  { id: 7, name: 'Ember Crown', category: 'Cosmetics', price: 300, icon: '👑', rarity: 'Common', owned: true, desc: 'Fiery crown for devoted servants of the flame' },
  { id: 8, name: 'Void Mantle', category: 'Cosmetics', price: 750, icon: '🪬', rarity: 'Epic', owned: false, desc: 'Cloak woven from shadow-silk' },
  { id: 9, name: 'Phantom Sigil', category: 'Frames', price: 500, icon: '👁', rarity: 'Rare', owned: false, desc: 'The all-seeing eye watches over your progress' },
];

const RARITY_COLORS: Record<string, string> = {
  Common: '#8d9685', Rare: '#60a5fa', Epic: '#a855f7', Legendary: '#D4AF37', Mythic: '#ff6b6b',
};

export function NightMarket() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [purchasing, setPurchasing] = useState<number | null>(null);
  const walletBalance = 2840;

  const filtered = activeCategory === 'All' ? ITEMS : ITEMS.filter(i => i.category === activeCategory);

  const handlePurchase = (id: number) => {
    setPurchasing(id);
    setTimeout(() => setPurchasing(null), 1500);
  };

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
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 pb-4 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25">
          <div className="space-y-1.5">
            <span className="font-mono text-xs uppercase text-[#D4AF37] tracking-[0.3em] bg-[#415A77]/20 dark:bg-[#250101] px-2.5 py-0.5 border border-[#415A77]/40 dark:border-[#D4AF37]/35">
              Sanctum Noctis • The Night Market
            </span>
            <h1 className="font-serif text-3xl lg:text-4xl text-[#EEEAD7] font-bold drop-shadow-md mt-1">The Night Market</h1>
            <p className="font-sans text-sm text-[#8d9685] leading-relaxed">
              Spend your earned Crowns on relics, frames, and cosmetics forged by the ancient artisans.
            </p>
          </div>

          {/* Wallet */}
          <div
            className="flex items-center gap-3 px-5 py-3 shrink-0 rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg"
          >
            <Coins size={18} className="text-[#D4AF37]" />
            <div>
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#8d9685]">Crown Balance</p>
              <p className="font-mono text-xl font-bold text-[#D4AF37]">{walletBalance.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1 flex-wrap">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all"
              style={{
                background: activeCategory === cat ? '#6D0808' : 'rgba(35,6,8,0.6)',
                border: `1px solid ${activeCategory === cat ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.15)'}`,
                color: activeCategory === cat ? '#D4AF37' : '#8d9685',
                boxShadow: activeCategory === cat ? '0 0 12px rgba(109,8,8,0.5)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(item => (
            <div
              key={item.id}
              className={`p-5 flex flex-col gap-3 relative transition-all group rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md shadow-lg ${
                item.owned 
                  ? 'border border-[#415A77] dark:border-[#D4AF37]/45 dark:shadow-[0_0_15px_rgba(212,175,55,0.1)]' 
                  : 'border border-[#415A77]/50 dark:border-[#D4AF37]/25'
              }`}
            >
              {/* Corner brackets on hover */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37]/70 transition-all" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/70 transition-all" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/0 group-hover:border-[#D4AF37]/70 transition-all" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/70 transition-all" />

              {item.owned && (
                <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[9px] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-1.5 py-0.5 uppercase tracking-wider">
                  <Check size={8} /> Owned
                </div>
              )}

              <div className="text-4xl">{item.icon}</div>

              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <span
                    className="font-mono text-[8px] uppercase tracking-widest px-1.5 py-0.5"
                    style={{ color: RARITY_COLORS[item.rarity], background: RARITY_COLORS[item.rarity] + '15', border: `1px solid ${RARITY_COLORS[item.rarity]}30` }}
                  >
                    {item.rarity}
                  </span>
                  <span className="font-mono text-[9px] text-[#8d9685]">{item.category}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-[#EEEAD7]">{item.name}</h3>
                <p className="font-sans text-xs text-[#8d9685] mt-0.5">{item.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-1.5">
                  <Coins size={12} className="text-[#D4AF37]" />
                  <span className="font-mono text-sm font-bold text-[#D4AF37]">{item.price.toLocaleString()}</span>
                </div>
                {item.owned ? (
                  <span className="font-mono text-[10px] text-[#8d9685] uppercase tracking-wider">In Collection</span>
                ) : (
                  <button
                    onClick={() => handlePurchase(item.id)}
                    disabled={purchasing === item.id || walletBalance < item.price}
                    className="px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-all"
                    style={{
                      background: purchasing === item.id ? '#D4AF37' : '#6D0808',
                      border: '1px solid rgba(212,175,55,0.4)',
                      color: purchasing === item.id ? '#0c0608' : '#EEEAD7',
                      opacity: walletBalance < item.price ? 0.4 : 1,
                      cursor: walletBalance < item.price ? 'not-allowed' : 'pointer',
                    }}
                  >
                    {purchasing === item.id ? 'Sealing...' : 'Purchase'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default NightMarket;

import React, { useState } from 'react';
import { ShoppingBag, Coins, Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedFiligree = () => {
  return (
    <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[24px] pointer-events-none flex items-center justify-center z-20">
      <motion.svg 
        viewBox="0 0 160 32" 
        fill="none" 
        className="w-full h-full text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]"
      >
        <motion.path 
          d="M80,20 C 65,20 55,6 35,12 C 20,16 10,8 2,14" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.path 
          d="M80,20 C 95,20 105,6 125,12 C 140,16 150,8 158,14" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
        <motion.path
          d="M80,6 L84,18 L80,28 L76,18 Z"
          fill="#F5D77F"
          initial={{ scale: 0, opacity: 0, y: -10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, type: "spring", bounce: 0.6 }}
        />
        <motion.path 
          d="M74,20 Q 65,28 50,22" 
          stroke="currentColor" 
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />
        <motion.path 
          d="M86,20 Q 95,28 110,22" 
          stroke="currentColor" 
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />
      </motion.svg>
    </div>
  );
};

const AnimatedNavFiligree = ({ flip }: { flip?: boolean }) => {
  return (
    <div className={`w-[120px] sm:w-[220px] h-[50px] flex items-center justify-center text-[#D4AF37] ${flip ? 'scale-x-[-1]' : ''}`}>
      <motion.svg viewBox="0 0 200 50" fill="none" className="w-full h-full drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
        {/* Central connecting line flowing outward */}
        <motion.path
          d="M 200 25 L 40 25"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Main upper sweeping royal curl */}
        <motion.path
          d="M 160 25 C 150 10 130 5 110 20 C 100 28 90 25 80 15 C 60 -5 30 5 15 25"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        />

        {/* Main lower sweeping royal curl */}
        <motion.path
          d="M 160 25 C 150 40 130 45 110 30 C 100 22 90 25 80 35 C 60 55 30 45 15 25"
          stroke="currentColor" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        />
        
        {/* Inner flourish loop */}
        <motion.path
          d="M 110 20 C 115 15 125 15 125 25 C 125 35 115 35 110 30"
          stroke="currentColor" strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.6 }} transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
        />

        {/* Leaf accents top */}
        <motion.path
          d="M 80 15 C 75 10 65 10 60 15 Z" fill="currentColor"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.8 }} transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
        />
        
        {/* Leaf accents bottom */}
        <motion.path
          d="M 80 35 C 75 40 65 40 60 35 Z" fill="currentColor"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.8 }} transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
        />

        {/* Outer large diamond */}
        <motion.path
          d="M 30 25 L 35 30 L 40 25 L 35 20 Z" fill="#F5D77F"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1.7, type: "spring" }}
        />

        {/* Far end small diamond */}
        <motion.path
          d="M 10 25 L 13 28 L 16 25 L 13 22 Z" fill="#F5D77F"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1.9, type: "spring" }}
        />
        
        {/* Accent dots */}
        <motion.circle cx="130" cy="18" r="1.5" fill="#F5D77F" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.0 }} />
        <motion.circle cx="130" cy="32" r="1.5" fill="#F5D77F" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.0 }} />
        <motion.circle cx="5" cy="25" r="1.5" fill="#F5D77F" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.1 }} />

      </motion.svg>
    </div>
  );
};

const NightMarketTabButton = ({ active, onClick, children }: any) => {
  return (
    <button
      onClick={onClick}
      className="relative group px-8 py-2.5 sm:px-12 sm:py-3 mx-1 transition-all flex-shrink-0 outline-none"
    >
      <div 
        className={`absolute inset-0 transition-colors duration-500 ${
          active ? 'bg-[radial-gradient(ellipse_at_center,_rgba(35,6,8,1)_0%,_rgba(15,2,4,1)_100%)]' : 'bg-[rgba(15,2,4,0.7)] group-hover:bg-[#2A0505]'
        }`}
        style={{
          clipPath: 'polygon(15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px), 0 15px)'
        }}
      />
      
      <svg 
        className={`absolute inset-0 w-full h-full pointer-events-none transition-all duration-300 ${active ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.98] group-hover:scale-100 group-hover:opacity-70'}`}
        preserveAspectRatio="none"
        viewBox="0 0 200 60"
        fill="none"
      >
        <path d="M 20 4 L 180 4" stroke="#D4AF37" strokeWidth="3.5" />
        <path d="M 20 56 L 180 56" stroke="#D4AF37" strokeWidth="3.5" />
        
        <path d="M 20 4 C 10 4 4 10 4 20 C 8 25 8 35 4 40 C 4 50 10 56 20 56 L 20 4 Z" fill="#D4AF37" />
        <path d="M 180 4 C 190 4 196 10 196 20 C 192 25 192 35 196 40 C 196 50 190 56 180 56 L 180 4 Z" fill="#D4AF37" />

        <circle cx="10" cy="12" r="1.5" fill="#F5D77F" />
        <circle cx="10" cy="48" r="1.5" fill="#F5D77F" />
        <circle cx="190" cy="12" r="1.5" fill="#F5D77F" />
        <circle cx="190" cy="48" r="1.5" fill="#F5D77F" />
      </svg>

      <span className={`relative z-10 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-colors ${active ? 'text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-[#8d9685] group-hover:text-[#D4AF37]'}`}>
        {children}
      </span>
    </button>
  );
};

const GothicButton = ({ active, onClick, children, disabled = false, className = "px-3 py-1.5" }: any) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`relative group ${className} border-none transition-all whitespace-nowrap overflow-hidden flex-shrink-0 ${
      active 
        ? 'bg-[radial-gradient(ellipse_at_center,_rgba(35,6,8,1)_0%,_rgba(15,2,4,1)_100%)] text-[#F5D77F] shadow-[0_0_12px_rgba(212,175,55,0.4)]' 
        : 'bg-[rgba(15,2,4,0.6)] text-[#8d9685] hover:bg-[#2A0505]'
    } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    style={{ clipPath: 'polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)' }}
  >
    <div className={`absolute inset-0 pointer-events-none transition-all duration-300 ${active ? 'opacity-100' : 'opacity-20 group-hover:opacity-40'}`}>
      <div className={`absolute top-0 left-3 right-3 h-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      <div className={`absolute bottom-0 left-3 right-3 h-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      <div className={`absolute left-0 top-3 bottom-3 w-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      <div className={`absolute right-0 top-3 bottom-3 w-[1.5px] ${active ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/50'}`}></div>
      {active && (
        <>
          <svg className="absolute top-0 left-0 w-4 h-4 text-[#D4AF37]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/><path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" /><circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
          <svg className="absolute top-0 right-0 w-4 h-4 text-[#D4AF37] transform rotate-90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/><path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" /><circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
          <svg className="absolute bottom-0 right-0 w-4 h-4 text-[#D4AF37] transform rotate-180" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/><path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" /><circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
          <svg className="absolute bottom-0 left-0 w-4 h-4 text-[#D4AF37] transform -rotate-90" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0,0 L24,0 C 18,2 14,6 12,12 C 10,18 8,22 8,24 L0,24 Z" opacity="0.4"/><path d="M0,0 L16,0 C 12,2 8,6 6,10 C 4,14 2,16 0,16 Z" /><circle cx="5" cy="5" r="1.5" fill="#F5D77F"/>
          </svg>
        </>
      )}
    </div>
    <span className="relative z-10 flex items-center justify-center font-mono text-[9px] uppercase tracking-wider font-bold">
      {children}
    </span>
  </button>
);

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
            className="flex items-center gap-4 px-6 py-4 shrink-0 rounded-xl relative group"
            style={{ background: 'radial-gradient(circle at center, rgba(109,8,8,0.6) 0%, rgba(15,2,4,0.9) 100%)', border: '1px solid rgba(212,175,55,0.5)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.2)' }}
          >
            <AnimatedFiligree />
            <div className="absolute inset-0 opacity-20 mix-blend-overlay overflow-hidden rounded-xl" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
            <Coins size={20} className="relative z-10 text-[#D4AF37] drop-shadow-[0_0_8px_currentColor] group-hover:scale-110 transition-transform" />
            <div className="relative z-10">
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#D4AF37]">Crown Balance</p>
              <p className="font-serif text-2xl font-bold text-[#F5D77F] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">{walletBalance.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center w-full my-4 max-w-[1100px] mx-auto overflow-hidden">
          <AnimatedNavFiligree />
          <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37]/50 max-w-[20px] sm:max-w-[40px]" />
          
          {CATEGORIES.map((cat, index) => (
            <React.Fragment key={cat}>
              <NightMarketTabButton
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </NightMarketTabButton>
              {index < CATEGORIES.length - 1 && (
                <div className="flex-1 h-[1.5px] bg-[#D4AF37]/40 max-w-[15px] sm:max-w-[30px]" />
              )}
            </React.Fragment>
          ))}

          <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37]/50 max-w-[20px] sm:max-w-[40px]" />
          <AnimatedNavFiligree flip />
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(item => (
            <div
              key={item.id}
              className="p-5 flex flex-col gap-3 relative transition-all group rounded-xl hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)]"
              style={{ 
                background: 'radial-gradient(circle at center, rgba(109,8,8,0.6) 0%, rgba(15,2,4,0.9) 100%)', 
                border: item.owned ? '1px solid rgba(212,175,55,0.7)' : '1px solid rgba(212,175,55,0.3)', 
                boxShadow: item.owned ? 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 15px rgba(212,175,55,0.2)' : 'inset 0 0 40px rgba(0,0,0,0.8)' 
              }}
            >
              <AnimatedFiligree />
              <div className="absolute inset-0 opacity-20 mix-blend-overlay overflow-hidden rounded-xl pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
              
              {item.owned && (
                <div className="absolute top-2 right-2 flex items-center gap-1 font-mono text-[9px] text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-1.5 py-0.5 uppercase tracking-wider z-10">
                  <Check size={8} /> Owned
                </div>
              )}

              <div className="text-5xl relative z-10 text-center py-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="font-mono text-[8px] uppercase tracking-widest px-1.5 py-0.5"
                    style={{ color: RARITY_COLORS[item.rarity], background: RARITY_COLORS[item.rarity] + '15', border: `1px solid ${RARITY_COLORS[item.rarity]}30` }}
                  >
                    {item.rarity}
                  </span>
                  <span className="font-mono text-[9px] text-[#8d9685]">{item.category}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#EEEAD7] drop-shadow-md">{item.name}</h3>
                <p className="font-sans text-xs text-[#8d9685] mt-1">{item.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#D4AF37]/10 relative z-10">
                <div className="flex items-center gap-1.5">
                  <Coins size={14} className="text-[#D4AF37] drop-shadow-[0_0_5px_currentColor]" />
                  <span className="font-serif text-lg font-bold text-[#D4AF37] drop-shadow-[0_0_5px_currentColor]">{item.price.toLocaleString()}</span>
                </div>
                {item.owned ? (
                  <span className="font-mono text-[10px] text-[#8d9685] uppercase tracking-wider">In Collection</span>
                ) : (
                  <GothicButton
                    active={purchasing === item.id}
                    disabled={purchasing === item.id || walletBalance < item.price}
                    onClick={() => handlePurchase(item.id)}
                  >
                    {purchasing === item.id ? 'Sealing...' : 'Purchase'}
                  </GothicButton>
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

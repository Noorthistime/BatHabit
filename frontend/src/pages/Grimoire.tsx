import React, { useState } from 'react';
import { Shield, Zap, Heart, Eye, BookOpen, Star, Award, TrendingUp, ChevronRight, Crown, Swords, Scroll, Skull, Flame, Moon } from 'lucide-react';
import { GiDragonHead } from 'react-icons/gi';
import { motion } from 'framer-motion';

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
  { icon: Flame, title: 'Iron Resolve', desc: '7-day unbroken streak', rarity: 'Rare', earned: true },
  { icon: Zap, title: 'Mind Forge', desc: 'Completed 50 Intellect quests', rarity: 'Epic', earned: true },
  { icon: Moon, title: 'Nocturnal Rite', desc: 'Completed quest past midnight', rarity: 'Common', earned: true },
  { icon: Eye, title: 'The Watcher', desc: '30-day login streak', rarity: 'Legendary', earned: true },
  { icon: Skull, title: 'Obsidian Will', desc: '100-day streak', rarity: 'Mythic', earned: true },
  { icon: Award, title: 'Relic Forged', desc: 'Reached Rank IV', rarity: 'Epic', earned: true },
  { icon: Crown, title: 'Golden Sovereign', desc: 'Mastered all basic attributes', rarity: 'Legendary', earned: true },
  { icon: Shield, title: 'Silent Guardian', desc: 'Maintained 100% focus for 10 days', rarity: 'Epic', earned: true },
  { icon: Swords, title: 'Blood Ritual', desc: 'Sacrificed 500 XP to upgrade a relic', rarity: 'Mythic', earned: true },
];

const RARITY_COLORS: Record<string, { text: string, border: string, bg: string, frame: string, glow: string }> = {
  Legendary: { 
    text: '#F5D77F', 
    border: '#D4AF37', 
    bg: 'rgba(109,8,8,0.5)', 
    frame: '#D4AF37', 
    glow: 'rgba(212,175,55,0.8)' 
  },
  Mythic: { 
    text: '#FFF5D1', 
    border: '#FFD700', 
    bg: 'rgba(212,175,55,0.15)', 
    frame: '#F5D77F', 
    glow: 'rgba(255,215,0,0.6)' 
  },
  Epic: { 
    text: '#D4AF37', 
    border: '#C5A028', 
    bg: 'rgba(197,160,40,0.1)', 
    frame: '#C5A028', 
    glow: 'rgba(197,160,40,0.3)' 
  },
  Rare: { 
    text: '#B8860B', 
    border: '#8B6508', 
    bg: 'rgba(139,101,8,0.1)', 
    frame: '#8B6508', 
    glow: 'rgba(139,101,8,0.2)' 
  },
  Common: { 
    text: '#8B4513', 
    border: '#5C3317', 
    bg: 'rgba(92,51,23,0.1)', 
    frame: '#5C3317', 
    glow: 'transparent' 
  },
};

const AchievementFrame = ({ rarity, color, isEarned }: { rarity: string, color: string, isEarned: boolean }) => {
  if (!isEarned) return <div className="absolute inset-0 border border-[#333] opacity-50 z-0" />;

  if (rarity === 'Common') {
    return (
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 border" style={{ borderColor: color, opacity: 0.6 }} />
        <div className="absolute top-0 left-0 w-2 h-2 border-r border-b" style={{ borderColor: color }} />
        <div className="absolute top-0 right-0 w-2 h-2 border-l border-b" style={{ borderColor: color }} />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-r border-t" style={{ borderColor: color }} />
        <div className="absolute bottom-0 right-0 w-2 h-2 border-l border-t" style={{ borderColor: color }} />
      </div>
    );
  }

  if (rarity === 'Rare') {
    return (
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 border" style={{ borderColor: color, opacity: 0.8 }} />
        <div className="absolute inset-[3px] border border-dashed" style={{ borderColor: color, opacity: 0.3 }} />
        {[
          'top-0 left-0', 'top-0 right-0 rotate-90',
          'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'
        ].map((pos, i) => (
          <svg key={i} className={`absolute ${pos} w-4 h-4`} viewBox="0 0 16 16" fill="none">
             <path d="M0 0h16v1H1v15H0V0z" fill={color} />
             <path d="M3 3h4v1H4v3H3V3z" fill={color} />
          </svg>
        ))}
      </div>
    );
  }

  if (rarity === 'Epic') {
    return (
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 border-[1px]" style={{ borderColor: color, opacity: 0.9 }} />
        <div className="absolute inset-[3px] border" style={{ borderColor: color, opacity: 0.4 }} />
        {[
          'top-0 left-0', 'top-0 right-0 rotate-90',
          'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'
        ].map((pos, i) => (
          <svg key={i} className={`absolute ${pos} w-8 h-8`} viewBox="0 0 32 32" fill="none">
             <path d="M0 0h32v2H2v30H0V0z" fill={color} />
             <path d="M0 0C10 0 16 6 16 16C6 16 0 10 0 0Z" fill={color} fillOpacity="0.2" />
             <path d="M4 4C12 4 16 8 16 16" stroke={color} strokeWidth="1.5" />
             <circle cx="16" cy="16" r="2" fill={color} />
             <path d="M24 2L2 24" stroke={color} strokeWidth="1" opacity="0.5" />
          </svg>
        ))}
      </div>
    );
  }

  if (rarity === 'Mythic') {
    return (
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 border-[1.5px]" style={{ borderColor: color, boxShadow: `0 0 10px ${color}` }} />
        
        {/* Continuous Filigree Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-80">
          <defs>
             <pattern id="mythic-x" width="40" height="10" patternUnits="userSpaceOnUse">
               <path d="M0 5 L10 2 L20 5 L10 8 Z" fill="none" stroke={color} strokeWidth="1" />
               <path d="M20 5 L30 2 L40 5 L30 8 Z" fill="none" stroke={color} strokeWidth="1" />
               <path d="M0 5 Q10 10 20 5 T40 5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.8"/>
               <path d="M0 5 Q10 0 20 5 T40 5" fill="none" stroke={color} strokeWidth="0.5" opacity="0.8"/>
               <rect x="9.5" y="4.5" width="1" height="1" fill="#000" stroke={color} strokeWidth="0.5" transform="rotate(45 10 5)" />
               <rect x="29.5" y="4.5" width="1" height="1" fill="#000" stroke={color} strokeWidth="0.5" transform="rotate(45 30 5)" />
             </pattern>
             <pattern id="mythic-y" width="10" height="40" patternUnits="userSpaceOnUse">
               <path d="M5 0 L2 10 L5 20 L8 10 Z" fill="none" stroke={color} strokeWidth="1" />
               <path d="M5 20 L2 30 L5 40 L8 30 Z" fill="none" stroke={color} strokeWidth="1" />
               <path d="M5 0 Q10 10 5 20 T5 40" fill="none" stroke={color} strokeWidth="0.5" opacity="0.8"/>
               <path d="M5 0 Q0 10 5 20 T5 40" fill="none" stroke={color} strokeWidth="0.5" opacity="0.8"/>
               <rect x="4.5" y="9.5" width="1" height="1" fill="#000" stroke={color} strokeWidth="0.5" transform="rotate(45 5 10)" />
               <rect x="4.5" y="29.5" width="1" height="1" fill="#000" stroke={color} strokeWidth="0.5" transform="rotate(45 5 30)" />
             </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="10" fill="url(#mythic-x)" />
          <rect x="0" y="calc(100% - 10px)" width="100%" height="10" fill="url(#mythic-x)" />
          <rect x="0" y="0" width="10" height="100%" fill="url(#mythic-y)" />
          <rect x="calc(100% - 10px)" y="0" width="10" height="100%" fill="url(#mythic-y)" />
        </svg>

        {[
          'top-0 left-0', 'top-0 right-0 rotate-90',
          'bottom-0 right-0 rotate-180', 'bottom-0 left-0 -rotate-90'
        ].map((pos, i) => (
          <svg key={i} className={`absolute ${pos} w-10 h-10 drop-shadow-[0_0_3px_${color}]`} viewBox="0 0 40 40" fill="none">
             <path d="M2 2 L38 2 L2 38 Z" fill="none" stroke={color} strokeWidth="1" opacity="0.4" />
             <path d="M6 6 C18 10 24 16 24 24" stroke={color} strokeWidth="1.5" />
             <path d="M12 12 C20 15 23 18 23 23" stroke={color} strokeWidth="1" />
             <rect x="23" y="23" width="4" height="4" fill={color} transform="rotate(45 25 25)" />
             <path d="M35 2 L2 35" stroke={color} strokeWidth="1" opacity="0.7" />
             <circle cx="6" cy="6" r="1.5" fill={color} />
             <path d="M18 2 L24 8 M2 18 L8 24" stroke={color} strokeWidth="0.5" opacity="0.5" />
          </svg>
        ))}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 flex justify-center">
          <div className="w-2.5 h-2.5 rotate-45 border" style={{ borderColor: color, backgroundColor: '#000', boxShadow: `0 0 8px ${color}` }} />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-3 flex justify-center items-end">
          <div className="w-2.5 h-2.5 rotate-45 border translate-y-1.5" style={{ borderColor: color, backgroundColor: '#000', boxShadow: `0 0 8px ${color}` }} />
        </div>
      </div>
    );
  }

  if (rarity === 'Legendary') {
    const CornerSVG = ({ pos, transform }: { pos: string, transform: string }) => (
      <div className={`absolute ${pos} w-[40px] h-[40px] pointer-events-none z-20`} style={{ transform }}>
        <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" fill="none">
          <path d="M 40 2 L 30 2 C 15 2, 2 15, 2 30 L 2 40" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 2 15 C 10 15, 15 10, 15 2" stroke={color} strokeWidth="1" strokeLinecap="round" />
          <polygon points="6,6 9,9 6,12 3,9" fill={color} />
        </svg>
      </div>
    );

    const EdgeCenterHorizontal = ({ pos, transform }: { pos: string, transform: string }) => (
      <div className={`absolute ${pos} w-[100px] h-[12px] pointer-events-none z-20 flex items-center justify-center`} style={{ transform }}>
        <svg viewBox="0 0 100 12" className="w-full h-full drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" fill="none">
          <path d="M 0 2 L 30 2 C 40 2, 45 8, 50 8 C 55 8, 60 2, 70 2 L 100 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 35 2 C 35 6, 45 6, 45 2" stroke={color} strokeWidth="1" strokeLinecap="round" />
          <path d="M 65 2 C 65 6, 55 6, 55 2" stroke={color} strokeWidth="1" strokeLinecap="round" />
          <circle cx="50" cy="8" r="2" fill="#8A0F0F" stroke={color} strokeWidth="0.5" />
          <circle cx="50" cy="8" r="0.5" fill="#fff" />
        </svg>
      </div>
    );

    const EdgeCenterVertical = ({ pos, transform }: { pos: string, transform: string }) => (
      <div className={`absolute ${pos} w-[12px] h-[100px] pointer-events-none z-20 flex items-center justify-center`} style={{ transform }}>
        <svg viewBox="0 0 12 100" className="w-full h-full drop-shadow-[0_0_4px_rgba(212,175,55,0.8)]" fill="none">
          <path d="M 2 0 L 2 30 C 2 40, 8 45, 8 50 C 8 55, 2 60, 2 70 L 2 100" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 2 35 C 6 35, 6 45, 2 45" stroke={color} strokeWidth="1" strokeLinecap="round" />
          <path d="M 2 65 C 6 65, 6 55, 2 55" stroke={color} strokeWidth="1" strokeLinecap="round" />
          <circle cx="8" cy="50" r="2" fill="#8A0F0F" stroke={color} strokeWidth="0.5" />
          <circle cx="8" cy="50" r="0.5" fill="#fff" />
        </svg>
      </div>
    );

    const BorderLineHorizontal = ({ pos, left, right }: { pos: string, left: string, right: string }) => (
      <div className={`absolute ${pos} h-[1.5px] pointer-events-none z-10 opacity-90 shadow-[0_0_4px_rgba(212,175,55,0.8)]`} style={{ left, right, backgroundColor: color }} />
    );

    const BorderLineVertical = ({ pos, top, bottom }: { pos: string, top: string, bottom: string }) => (
      <div className={`absolute ${pos} w-[1.5px] pointer-events-none z-10 opacity-90 shadow-[0_0_4px_rgba(212,175,55,0.8)]`} style={{ top, bottom, backgroundColor: color }} />
    );

    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden rounded-sm">
        {/* Ambient Premium Red/Gold Glow */}
        <div className="absolute inset-0" style={{ 
          background: 'radial-gradient(ellipse at center, rgba(138,15,15,0.4) 0%, rgba(20,2,2,0.95) 100%)',
          boxShadow: `inset 0 0 40px rgba(0,0,0,0.8), 0 0 15px rgba(212,175,55,0.3)`
        }} />
        
        {/* --- STRAIGHT FRAME LINES (Hugging 2px from the edge) --- */}
        {/* Top Edge */}
        <BorderLineHorizontal pos="top-[2px]" left="40px" right="calc(50% + 50px)" />
        <BorderLineHorizontal pos="top-[2px]" left="calc(50% + 50px)" right="40px" />
        {/* Bottom Edge */}
        <BorderLineHorizontal pos="bottom-[2px]" left="40px" right="calc(50% + 50px)" />
        <BorderLineHorizontal pos="bottom-[2px]" left="calc(50% + 50px)" right="40px" />
        
        {/* Left Edge */}
        <BorderLineVertical pos="left-[2px]" top="40px" bottom="calc(50% + 50px)" />
        <BorderLineVertical pos="left-[2px]" top="calc(50% + 50px)" bottom="40px" />
        {/* Right Edge */}
        <BorderLineVertical pos="right-[2px]" top="40px" bottom="calc(50% + 50px)" />
        <BorderLineVertical pos="right-[2px]" top="calc(50% + 50px)" bottom="40px" />

        {/* --- CORNERS --- */}
        <CornerSVG pos="top-0 left-0" transform="" />
        <CornerSVG pos="top-0 right-0" transform="scale(-1, 1)" />
        <CornerSVG pos="bottom-0 right-0" transform="scale(-1, -1)" />
        <CornerSVG pos="bottom-0 left-0" transform="scale(1, -1)" />

        {/* --- CENTER ORNAMENTS --- */}
        <EdgeCenterHorizontal pos="top-0 left-1/2 -translate-x-1/2" transform="" />
        <EdgeCenterHorizontal pos="bottom-0 left-1/2 -translate-x-1/2" transform="scale(1, -1)" />
        
        <EdgeCenterVertical pos="left-0 top-1/2 -translate-y-1/2" transform="" />
        <EdgeCenterVertical pos="right-0 top-1/2 -translate-y-1/2" transform="scale(-1, 1)" />
      </div>
    );
  }

  return null;
}

const AnimatedNumber = ({ value, duration = 1000 }: { value: number, duration?: number }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(easeOut * value));
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return <>{count}</>;
};

const GrimoireFrame = () => (
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

const RoyalGrimoireFrame = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Outer border straight edges (Bevel size: 10px) */}
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} className="absolute top-0 h-[1.5px] bg-[#D4AF37]/60 origin-center" style={{ left: 10, right: 10 }} />
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} className="absolute bottom-0 h-[1.5px] bg-[#D4AF37]/60 origin-center" style={{ left: 10, right: 10 }} />
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} className="absolute left-0 w-[1.5px] bg-[#D4AF37]/60 origin-center" style={{ top: 10, bottom: 10 }} />
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1 }} className="absolute right-0 w-[1.5px] bg-[#D4AF37]/60 origin-center" style={{ top: 10, bottom: 10 }} />
    
    {/* Outer border bevels */}
    <svg className="absolute top-0 left-0 w-[10px] h-[10px] text-[#D4AF37]/60"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1 }} x1="0" y1="10" x2="10" y2="0" stroke="currentColor" strokeWidth="2.5" /></svg>
    <svg className="absolute top-0 right-0 w-[10px] h-[10px] text-[#D4AF37]/60"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1 }} x1="0" y1="0" x2="10" y2="10" stroke="currentColor" strokeWidth="2.5" /></svg>
    <svg className="absolute bottom-0 left-0 w-[10px] h-[10px] text-[#D4AF37]/60"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1 }} x1="0" y1="0" x2="10" y2="10" stroke="currentColor" strokeWidth="2.5" /></svg>
    <svg className="absolute bottom-0 right-0 w-[10px] h-[10px] text-[#D4AF37]/60"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1 }} x1="0" y1="10" x2="10" y2="0" stroke="currentColor" strokeWidth="2.5" /></svg>

    {/* Inner border straight edges (Inset: 4px, Bevel size: 8px) */}
    <div className="absolute inset-[4px]">
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute top-0 h-[0.5px] bg-[#D4AF37]/30 origin-center" style={{ left: 8, right: 8 }} />
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute bottom-0 h-[0.5px] bg-[#D4AF37]/30 origin-center" style={{ left: 8, right: 8 }} />
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute left-0 w-[0.5px] bg-[#D4AF37]/30 origin-center" style={{ top: 8, bottom: 8 }} />
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute right-0 w-[0.5px] bg-[#D4AF37]/30 origin-center" style={{ top: 8, bottom: 8 }} />
      
      {/* Inner border bevels */}
      <svg className="absolute top-0 left-0 w-[8px] h-[8px] text-[#D4AF37]/30"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2 }} x1="0" y1="8" x2="8" y2="0" stroke="currentColor" strokeWidth="1" /></svg>
      <svg className="absolute top-0 right-0 w-[8px] h-[8px] text-[#D4AF37]/30"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2 }} x1="0" y1="0" x2="8" y2="8" stroke="currentColor" strokeWidth="1" /></svg>
      <svg className="absolute bottom-0 left-0 w-[8px] h-[8px] text-[#D4AF37]/30"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2 }} x1="0" y1="0" x2="8" y2="8" stroke="currentColor" strokeWidth="1" /></svg>
      <svg className="absolute bottom-0 right-0 w-[8px] h-[8px] text-[#D4AF37]/30"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2 }} x1="0" y1="8" x2="8" y2="0" stroke="currentColor" strokeWidth="1" /></svg>
    </div>

    {/* Elegant Corner Flourishes (Exact from Character Card) */}
    {[
      "top-[5px] left-[5px]",
      "top-[5px] right-[5px] scale-x-[-1]",
      "bottom-[5px] left-[5px] scale-y-[-1]",
      "bottom-[5px] right-[5px] scale-[-1]"
    ].map((pos, i) => (
      <motion.svg key={i} className={`absolute ${pos} w-4 h-4 text-[#F5D77F] drop-shadow-[0_0_2px_rgba(212,175,55,0.8)]`} viewBox="0 0 24 24"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1.4 }}>
        <path d="M 0 12 L 12 0 L 14 2 L 2 14 Z" fill="currentColor" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </motion.svg>
    ))}

    {/* Center Crests */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-2.5 flex items-center justify-center">
      <motion.svg viewBox="0 0 40 10" className="h-full text-[#F5D77F]"
        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
        <path d="M 0 0 L 20 10 L 40 0 L 20 4 Z" fill="currentColor" />
      </motion.svg>
    </div>
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-2.5 flex items-center justify-center scale-y-[-1]">
      <motion.svg viewBox="0 0 40 10" className="h-full text-[#F5D77F]"
        initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
        <path d="M 0 0 L 20 10 L 40 0 L 20 4 Z" fill="currentColor" />
      </motion.svg>
    </div>
  </div>
);

const SubtleGrimoireFrame = ({ delay = 0 }: { delay?: number }) => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Outer border straight edges (Bevel size: 8px) */}
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay }} className="absolute top-0 h-[1px] bg-[#D4AF37]/50 origin-center" style={{ left: 8, right: 8 }} />
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay }} className="absolute bottom-0 h-[1px] bg-[#D4AF37]/50 origin-center" style={{ left: 8, right: 8 }} />
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay }} className="absolute left-0 w-[1px] bg-[#D4AF37]/50 origin-center" style={{ top: 8, bottom: 8 }} />
    <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay }} className="absolute right-0 w-[1px] bg-[#D4AF37]/50 origin-center" style={{ top: 8, bottom: 8 }} />
    
    {/* Outer border bevels */}
    <svg className="absolute top-0 left-0 w-[8px] h-[8px] text-[#D4AF37]/50"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.8 }} x1="0" y1="8" x2="8" y2="0" stroke="currentColor" strokeWidth="1.5" /></svg>
    <svg className="absolute top-0 right-0 w-[8px] h-[8px] text-[#D4AF37]/50"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.8 }} x1="0" y1="0" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" /></svg>
    <svg className="absolute bottom-0 left-0 w-[8px] h-[8px] text-[#D4AF37]/50"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.8 }} x1="0" y1="0" x2="8" y2="8" stroke="currentColor" strokeWidth="1.5" /></svg>
    <svg className="absolute bottom-0 right-0 w-[8px] h-[8px] text-[#D4AF37]/50"><motion.line initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.4, delay: delay + 0.8 }} x1="0" y1="8" x2="8" y2="0" stroke="currentColor" strokeWidth="1.5" /></svg>

    {/* Elegant Corner Flourishes (Exact from Character Card, slightly scaled down) */}
    {[
      "top-[4px] left-[4px]",
      "top-[4px] right-[4px] scale-x-[-1]",
      "bottom-[4px] left-[4px] scale-y-[-1]",
      "bottom-[4px] right-[4px] scale-[-1]"
    ].map((pos, i) => (
      <motion.svg key={i} className={`absolute ${pos} w-3 h-3 text-[#D4AF37]/80`} viewBox="0 0 24 24"
        initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: delay + 1.0 }}>
        <path d="M 0 12 L 12 0 L 14 2 L 2 14 Z" fill="currentColor" />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
      </motion.svg>
    ))}
  </div>
);

const EvolutionGrimoireFrame = ({ borderColor, delay = 0, isCurrent = false }: { borderColor: string, delay?: number, isCurrent?: boolean }) => {
  const SwordCorner = ({ className, d }: { className: string, d: number }) => (
    <motion.svg 
      className={`absolute ${className} w-16 h-16`} 
      style={{ color: borderColor }}
      viewBox="0 0 64 64" 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.6, delay: d }}
    >
      <g style={{ stroke: "currentColor", fill: "currentColor" }}>
        {/* Guard Diamond (hollow) */}
        <path d="M 12 4 L 20 12 L 12 20 L 4 12 Z" fill="none" strokeWidth="1.5" />
        <path d="M 12 8 L 16 12 L 12 16 L 8 12 Z" fill="currentColor" />
        
        {/* Left Pommel */}
        <path d="M 2 12 L 4 10 L 6 12 L 4 14 Z" fill="currentColor" />
        {/* Left Grip */}
        <line x1="5" y1="12" x2="9" y2="12" strokeWidth="1.5" />
        
        {/* Top Pommel */}
        <path d="M 12 2 L 14 4 L 12 6 L 10 4 Z" fill="currentColor" />
        {/* Top Grip */}
        <line x1="12" y1="5" x2="12" y2="9" strokeWidth="1.5" />
        
        {/* Right Blade */}
        <path d="M 20 10.5 L 54 10.5 L 64 12 L 54 13.5 L 20 13.5 Z" fill="none" strokeWidth="1" />
        <line x1="20" y1="12" x2="56" y2="12" strokeWidth="0.5" />
        
        {/* Down Blade */}
        <path d="M 10.5 20 L 10.5 54 L 12 64 L 13.5 54 L 13.5 20 Z" fill="none" strokeWidth="1" />
        <line x1="12" y1="20" x2="12" y2="56" strokeWidth="0.5" />
      </g>
    </motion.svg>
  );

  const CenterDiamond = ({ className, d }: { className: string, d: number }) => (
    <motion.svg
      className={`absolute ${className} w-4 h-4`}
      style={{ color: borderColor }}
      viewBox="0 0 16 16"
      initial={{ opacity: 0, rotate: -45, scale: 0 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: d }}
    >
      <g style={{ stroke: "currentColor", fill: "currentColor" }}>
        <path d="M 8 0 L 16 8 L 8 16 L 0 8 Z" fill="none" strokeWidth="1" />
        <path d="M 8 4 L 12 8 L 8 12 L 4 8 Z" fill="currentColor" />
      </g>
    </motion.svg>
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* 4 Corners (Swords crossed) */}
      <SwordCorner className="-top-1 -left-1" d={delay + 0.8} />
      <SwordCorner className="-top-1 -right-1 scale-x-[-1]" d={delay + 0.8} />
      <SwordCorner className="-bottom-1 -left-1 scale-y-[-1]" d={delay + 0.8} />
      <SwordCorner className="-bottom-1 -right-1 scale-[-1]" d={delay + 0.8} />

      {/* Thin Connecting Razor Lines - Broken up to perfectly merge with diamonds */}
      {/* Top Edge */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay }} className="absolute top-[8px] h-[0.5px] origin-left opacity-60" style={{ left: 60, right: 'calc(50% + 8px)', backgroundColor: borderColor }} />
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay }} className="absolute top-[8px] h-[0.5px] origin-right opacity-60" style={{ left: 'calc(50% + 8px)', right: 60, backgroundColor: borderColor }} />
      
      {/* Bottom Edge */}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay }} className="absolute bottom-[8px] h-[0.5px] origin-left opacity-60" style={{ left: 60, right: 'calc(50% + 8px)', backgroundColor: borderColor }} />
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay }} className="absolute bottom-[8px] h-[0.5px] origin-right opacity-60" style={{ left: 'calc(50% + 8px)', right: 60, backgroundColor: borderColor }} />

      {/* Left Edge */}
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, delay }} className="absolute left-[8px] w-[0.5px] origin-top opacity-60" style={{ top: 60, bottom: 'calc(50% + 8px)', backgroundColor: borderColor }} />
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, delay }} className="absolute left-[8px] w-[0.5px] origin-bottom opacity-60" style={{ top: 'calc(50% + 8px)', bottom: 60, backgroundColor: borderColor }} />

      {/* Right Edge */}
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, delay }} className="absolute right-[8px] w-[0.5px] origin-top opacity-60" style={{ top: 60, bottom: 'calc(50% + 8px)', backgroundColor: borderColor }} />
      <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, delay }} className="absolute right-[8px] w-[0.5px] origin-bottom opacity-60" style={{ top: 'calc(50% + 8px)', bottom: 60, backgroundColor: borderColor }} />

      {/* Center Crest Diamonds */}
      <CenterDiamond className="top-[8px] left-1/2 -translate-x-1/2 -translate-y-1/2" d={delay + 1.2} />
      <CenterDiamond className="bottom-[8px] left-1/2 -translate-x-1/2 translate-y-1/2" d={delay + 1.2} />
      <CenterDiamond className="left-[8px] top-1/2 -translate-x-1/2 -translate-y-1/2" d={delay + 1.2} />
      <CenterDiamond className="right-[8px] top-1/2 translate-x-1/2 -translate-y-1/2" d={delay + 1.2} />

      {/* Current Rank Special Effect */}
      {isCurrent && (
        <motion.div 
          className="absolute inset-0 rounded-md"
          animate={{ boxShadow: ['inset 0 0 0px rgba(212,175,55,0)', 'inset 0 0 25px rgba(212,175,55,0.25)', 'inset 0 0 0px rgba(212,175,55,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export function Grimoire() {
  const [activeTab, setActiveTab] = useState<'attributes' | 'evolution' | 'achievements'>('attributes');
  const currentXP = 4820;
  const nextXP = 7000;
  const progress = ((currentXP - 3500) / (7000 - 3500)) * 100;

  return (
    <>


      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-2 min-h-[calc(100vh-120px)]">

        {/* Page Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 pb-2 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 relative mb-0">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 flex-1">
          <div className="p-4 flex flex-col items-center text-center gap-3 justify-between relative col-span-1 h-full overflow-hidden shadow-[0_8px_30px_rgba(109,8,8,0.5)] bg-transparent">
            <GrimoireFrame />
            {/* Background Watermark */}
            <div className="absolute bottom-0 left-0 right-0 h-56 overflow-hidden rounded-b-xl pointer-events-none flex items-end justify-center opacity-[0.06] text-[#D4AF37]">
              <GiDragonHead className="w-64 h-64 translate-y-4" />
            </div>

            {/* Avatar */}
            <div className="relative mt-2">
              {/* Pulsing Aura */}
              <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#D4AF37', boxShadow: '0 0 40px #D4AF37' }}></div>
              <div className="absolute inset-[-15px] rounded-full opacity-30 blur-xl" style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}></div>

              <div
                className="relative w-28 h-28 rounded-full flex items-center justify-center text-5xl font-serif font-bold text-[#F5D77F] shadow-[0_0_30px_rgba(212,175,55,0.4)] z-10"
                style={{ background: 'linear-gradient(135deg, #4a0505 0%, #8e0c0c 100%)', border: '2px solid rgba(212,175,55,0.8)' }}
              >
                A
              </div>
              <div
                className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center text-sm font-mono font-bold text-[#0c0608] z-20 shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                style={{ background: 'linear-gradient(135deg, #F5D77F 0%, #D4AF37 100%)', border: '2px solid #250101' }}
              >
                IV
              </div>
            </div>

            <div className="mt-2 relative z-10 flex flex-col items-center">
              <p className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-[0.4em] drop-shadow-[0_0_5px_rgba(212,175,55,0.5)] flex items-center gap-2">
                <span className="w-4 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60"></span>
                Rank IV Ascendant
                <span className="w-4 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60"></span>
              </p>
              <h2 className="font-serif text-3xl font-bold mt-2 drop-shadow-[0_0_10px_rgba(245,215,127,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">
                Alistair Vance
              </h2>
              <p className="font-mono text-[10px] text-[#D4AF37]/80 uppercase tracking-widest mt-1">Keeper of the Ancient Flame</p>
            </div>

            {/* XP Bar */}
            <div className="w-full space-y-2 mt-4 relative z-10">
              <div className="flex flex-col items-center justify-center font-mono text-[10px] text-[#8d9685] tracking-widest gap-1">
                <span>XP PROGRESS</span>
                <span className="text-[#D4AF37] drop-shadow-[0_0_3px_rgba(212,175,55,0.5)] font-bold">{currentXP.toLocaleString()} <span className="text-[#8d9685] font-normal">/ {nextXP.toLocaleString()}</span></span>
              </div>
              <div className="h-2.5 bg-[#1a0204] border border-[#D4AF37]/30 rounded-full overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]">
                {/* Liquid Gold/Blood Gradient */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full relative rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #6D0808 0%, #b31212 50%, #D4AF37 100%)',
                    boxShadow: '0 0 15px rgba(212,175,55,0.6)',
                  }}
                >
                  {/* Shimmer effect inside the bar */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </motion.div>
              </div>
              <p className="font-mono text-[9px] text-[#8d9685] text-center">{Math.round(nextXP - currentXP).toLocaleString()} XP to Rank V</p>
            </div>

            {/* Quick Stats */}
            <div className="w-full grid grid-cols-3 gap-3 border-t border-[#D4AF37]/20 pt-5 relative z-10">
              {[
                { label: 'QUESTS', value: '147' },
                { label: 'STREAK', value: '12d' },
                { label: 'CROWNS', value: '2840' },
              ].map(s => (
                <div key={s.label} className="text-center group flex flex-col items-center justify-center py-2 px-1 rounded bg-[#1B263B]/20 dark:bg-[#250101]/40 border border-[#415A77]/30 dark:border-[#D4AF37]/20 shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]">
                  <div className="font-mono text-lg font-bold text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform cursor-default">{s.value}</div>
                  <div className="font-mono text-[8px] text-[#D4AF37]/70 uppercase tracking-widest mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Gothic Oath */}
            <div className="w-full mt-auto pt-4 relative z-10 flex flex-col items-center justify-center">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mb-2"></div>
              <p className="font-serif text-[#D4AF37]/70 italic text-xs leading-relaxed drop-shadow-md px-6">
                "Through the darkest vigils, the flame endures."
              </p>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto mt-2"></div>
            </div>
          </div>

          {/* Right Panel — Tabs */}
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-2 h-full overflow-hidden">
            {/* Tab Selector */}
            <div className="relative flex justify-center items-center gap-6 py-2 mb-4">
              {/* Ornate Golden SVG Flourish Divider (Edges only) */}
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 -z-10 flex justify-between items-center opacity-80 w-full px-2">
                {/* Left Flourish */}
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <circle cx="4" cy="12" r="1.5" fill="#D4AF37" />
                  <circle cx="10" cy="12" r="2" fill="#D4AF37" />
                  <line x1="16" y1="12" x2="30" y2="12" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M 30 12 Q 40 0, 50 12 T 60 12" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M 40 12 Q 45 20, 50 15 T 55 12" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  <circle cx="50" cy="12" r="2" fill="#D4AF37" />
                </svg>
                
                {/* Straight connecting line */}
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D4AF37]/50 via-[#D4AF37]/30 to-[#D4AF37]/50" />
                
                {/* Right Flourish */}
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M 30 12 Q 20 0, 10 12 T 0 12" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                  <path d="M 20 12 Q 15 20, 10 15 T 5 12" fill="none" stroke="#D4AF37" strokeWidth="1" />
                  <circle cx="10" cy="12" r="2" fill="#D4AF37" />
                  <line x1="30" y1="12" x2="44" y2="12" stroke="#D4AF37" strokeWidth="1.5" />
                  <circle cx="50" cy="12" r="2" fill="#D4AF37" />
                  <circle cx="56" cy="12" r="1.5" fill="#D4AF37" />
                </svg>
              </div>
              
              {(['attributes', 'evolution', 'achievements'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3.5 font-mono text-[10.5px] uppercase tracking-widest font-bold transition-all relative z-10 flex items-center justify-center group
                    ${activeTab === tab
                    ? 'text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]'
                    : 'text-[#8d9685] hover:text-[#D4AF37]'
                    }`}
                >
                  {/* Absolute positioning keeps the background decoupled from button sizing */}
                  <svg 
                    className={`absolute inset-0 w-full h-full -z-10 transition-all duration-300 ${activeTab === tab ? 'drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]' : ''}`} 
                    preserveAspectRatio="none" 
                    viewBox="0 0 100 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Gothic Scalloped Plaque Shape */}
                    <path d="M 12 2 L 88 2 A 6 6 0 0 0 94 8 L 98 20 L 94 32 A 6 6 0 0 0 88 38 L 12 38 A 6 6 0 0 0 6 32 L 2 20 L 6 8 A 6 6 0 0 0 12 2 Z" fill="#230608" stroke={activeTab === tab ? "#D4AF37" : "rgba(212,175,55,0.5)"} strokeWidth={activeTab === tab ? "1.5" : "1"} vectorEffect="non-scaling-stroke" />
                    {/* Inner detailed ring for active tab */}
                    {activeTab === tab && <path d="M 14 5 L 86 5 A 4 4 0 0 0 91 9 L 94 20 L 91 31 A 4 4 0 0 0 86 35 L 14 35 A 4 4 0 0 0 9 31 L 6 20 L 9 9 A 4 4 0 0 0 14 5 Z" stroke="rgba(212,175,55,0.3)" strokeWidth="1" vectorEffect="non-scaling-stroke" />}
                  </svg>
                  {tab}
                </button>
              ))}
            </div>

            {/* Attributes Tab */}
            {activeTab === 'attributes' && (
              <div className="flex flex-col gap-2 flex-1 min-h-0">
                {/* Total Power (Moved to top) */}
                <div
                  className="px-4 py-3 flex flex-col sm:flex-row items-center justify-between relative overflow-hidden group gap-2 mt-1"
                  style={{ 
                    clipPath: 'polygon(10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px), 0 10px)',
                    background: 'radial-gradient(circle at center, rgba(109,8,8,0.6) 0%, rgba(15,2,4,0.9) 100%)', 
                    boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.1)' 
                  }}
                >
                  <RoyalGrimoireFrame />
                  {/* Subtle Obsidian Texture */}
                  <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>

                  <div className="relative z-10 text-center sm:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] opacity-90 drop-shadow-md">Combined Power Level</p>
                    <div className="flex items-baseline justify-center sm:justify-start gap-2 mt-1">
                      <p className="font-serif text-4xl font-bold text-[#F5D77F] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:animate-pulse">
                        <AnimatedNumber value={395} />
                      </p>
                      <p className="font-mono text-sm text-[#D4AF37]/50 font-bold">/ 500</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 px-4 py-2 bg-[#1a0204]/90 border border-[#D4AF37]/40 rounded backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default group/badge">
                    <TrendingUp size={16} className="text-[#D4AF37] transition-all duration-300 group-hover/badge:-translate-y-1 group-hover/badge:scale-125" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                      +<AnimatedNumber value={12} duration={1200} /> this week
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 flex-1 min-h-0">
                  {ATTRIBUTES.map((attr, index) => (
                    <div 
                      key={attr.key} 
                      className={index === 4 ? "col-span-1 sm:col-span-2 flex justify-center" : ""}
                    >
                      <div 
                        className={`p-3 flex flex-col gap-2 justify-between h-full relative bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] group ${index === 4 ? 'w-full sm:w-[calc(50%-0.25rem)]' : 'w-full'}`}
                        style={{ clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)' }}
                      >
                        <SubtleGrimoireFrame delay={index * 0.15} />
                        <div className="flex items-center justify-between relative z-10">
                          <div className="flex items-center gap-2">
                            <attr.icon size={14} style={{ color: attr.color }} className="group-hover:scale-110 transition-transform" />
                            <span className="font-mono text-xs uppercase tracking-widest text-[#EEEAD7]">{attr.label}</span>
                          </div>
                          <span className="font-mono text-xl font-bold drop-shadow-[0_0_8px_currentColor]" style={{ color: attr.color }}>{attr.value}</span>
                        </div>
                        <p className="font-sans text-[11px] text-[#8d9685] leading-relaxed">{attr.desc}</p>

                        {/* Glowing RPG Energy Meter */}
                        <div className="h-1.5 w-full bg-[#1a0204] rounded-full overflow-hidden border border-white/5 relative mt-auto">
                          <motion.div
                            className="h-full relative rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${attr.value}%` }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.15 }}
                            style={{ background: `linear-gradient(90deg, transparent, ${attr.color})`, boxShadow: `0 0 10px ${attr.color}` }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/40 blur-[2px]"></div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Evolution Tab */}
            {activeTab === 'evolution' && (
              <div className="flex flex-col gap-1.5 flex-1 min-h-0">
                {EVOLUTION_STAGES.map((stage, i) => {
                  let animationProps = {};
                  let glowEffect = null;
                  
                  // Progressive Styling Variables
                  let bgStyle = '';
                  let borderColor = '';
                  let iconBg = '';
                  let iconColor = '';
                  let iconBorder = '';
                  let iconShadow = 'none';

                  if (stage.rank === 'I') {
                    // Rank I - Basic
                    animationProps = { animate: { opacity: [0.8, 1, 0.8] }, transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(20,5,5,0.8)';
                    borderColor = 'rgba(212,175,55,0.15)';
                    iconBg = '#2A0505';
                    iconColor = '#D4AF37';
                    iconBorder = '1px solid rgba(212,175,55,0.3)';
                  } else if (stage.rank === 'II') {
                    // Rank II - Richer
                    animationProps = { animate: { boxShadow: ['0 0 0px rgba(109,8,8,0)', '0 0 10px rgba(109,8,8,0.2)', '0 0 0px rgba(109,8,8,0)'] }, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(35,6,8,0.85)';
                    borderColor = 'rgba(212,175,55,0.35)';
                    iconBg = '#4A0A0A';
                    iconColor = '#F5D77F';
                    iconBorder = '1px solid rgba(212,175,55,0.6)';
                  } else if (stage.rank === 'III') {
                    // Rank III - Bright & Imposing
                    animationProps = { animate: { boxShadow: ['0 0 5px rgba(212,175,55,0.1)', '0 0 20px rgba(212,175,55,0.3)', '0 0 5px rgba(212,175,55,0.1)'] }, transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(50,8,12,0.9)';
                    borderColor = 'rgba(212,175,55,0.6)';
                    iconBg = '#6D0808';
                    iconColor = '#F5D77F';
                    iconBorder = '1px solid #D4AF37';
                    iconShadow = '0 0 10px rgba(212,175,55,0.5)';
                  } else if (stage.rank === 'IV') {
                    // Rank IV (CURRENT) - Blazing Gold
                    animationProps = {
                      animate: {
                        boxShadow: ['0 0 15px rgba(212,175,55,0.4), inset 0 0 15px rgba(212,175,55,0.2)', '0 0 30px rgba(212,175,55,0.8), inset 0 0 20px rgba(109,8,8,0.4)', '0 0 15px rgba(212,175,55,0.4), inset 0 0 15px rgba(212,175,55,0.2)']
                      },
                      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    };
                    glowEffect = (
                      <>
                        <motion.div className="absolute inset-0 bg-gradient-to-t from-[#6D0808]/40 to-transparent mix-blend-overlay" animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
                        <motion.div className="absolute inset-0 border border-[#D4AF37]/60" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
                      </>
                    );
                    bgStyle = 'rgba(35,6,8,0.95)';
                    borderColor = 'rgba(212,175,55,0.8)';
                    iconBg = 'linear-gradient(135deg, #F5D77F 0%, #D4AF37 100%)';
                    iconColor = '#0c0608';
                    iconBorder = '2px solid #FFF';
                    iconShadow = '0 0 20px rgba(212,175,55,0.8)';
                  } else if (stage.rank === 'V') {
                    // Rank V - Locked
                    animationProps = { animate: { opacity: [0.3, 0.5, 0.3] }, transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } };
                    bgStyle = 'rgba(15,2,4,0.3)';
                    borderColor = 'rgba(212,175,55,0.05)';
                    iconBg = '#0f0204';
                    iconColor = '#4a3c20';
                    iconBorder = '1px solid rgba(212,175,55,0.1)';
                  }

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                      key={stage.rank}
                      className="flex-1 min-h-0 flex"
                    >
                      <motion.div
                        {...animationProps}
                        className="w-full h-full px-4 sm:px-8 py-3 sm:py-3.5 flex items-center relative overflow-hidden group rounded-md"
                        style={{ background: bgStyle }}
                      >
                        <EvolutionGrimoireFrame borderColor={borderColor} delay={i * 0.15} isCurrent={stage.current} />
                        {glowEffect}

                        {/* Main Content Grid */}
                        <div className="flex-1 w-full flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-start md:items-center relative z-10 min-w-0">
                          
                          {/* Column 1: Left Block */}
                          <div className="flex items-center justify-start md:justify-end gap-3 sm:gap-4 w-full md:pr-6 lg:pr-8">
                            {/* Rank Circle */}
                            <div
                              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-serif text-base sm:text-lg font-bold shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                              style={{
                                background: iconBg,
                                color: iconColor,
                                border: iconBorder,
                                boxShadow: iconShadow
                              }}
                            >
                              {stage.rank}
                            </div>
                            
                            {/* Title */}
                            <span className={`w-28 sm:w-36 shrink-0 text-left font-serif text-lg sm:text-xl font-bold tracking-widest ${stage.current ? 'text-[#F5D77F] drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : stage.achieved ? 'text-[#F5D77F]' : 'text-[#EEEAD7]'}`}>
                              {stage.title}
                            </span>
                            
                            {/* Badge */}
                            <div className="w-[72px] sm:w-[84px] shrink-0 flex items-center justify-end">
                              {stage.current && <span className="font-mono text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/60 uppercase tracking-wider font-bold shadow-[0_0_8px_rgba(212,175,55,0.4)]">CURRENT</span>}
                              {stage.achieved && !stage.current && <span className="font-mono text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-[#6D0808]/40 text-[#D4AF37]/60 border border-[#6D0808]/40 uppercase tracking-wider">ACHIEVED</span>}
                            </div>
                          </div>

                          {/* Column 2: Hyphen (Dead Center) */}
                          <div className="hidden md:flex justify-center items-center">
                             <span className={`font-mono text-base ${stage.current ? 'text-[#D4AF37]' : 'text-[#8d9685]/50'}`}>—</span>
                          </div>

                          {/* Column 3: Class Name */}
                          <div className="w-full flex items-center justify-start overflow-hidden min-w-0 mt-1 md:mt-0 md:pl-6 lg:pl-8 pr-12 sm:pr-16">
                             {/* Mobile Hyphen */}
                             <span className={`md:hidden mr-2 font-mono text-sm ${stage.current ? 'text-[#D4AF37]' : 'text-[#8d9685]/50'}`}>—</span>
                             
                             <span className={`font-mono text-[10px] sm:text-xs xl:text-sm whitespace-nowrap uppercase ${stage.current ? 'text-[#D4AF37] drop-shadow-[0_0_2px_rgba(212,175,55,0.5)]' : stage.achieved ? 'text-[#EEEAD7]/90' : 'text-[#8d9685]'}`}>
                               {stage.class}
                             </span>
                          </div>

                        </div>

                        {/* XP Block (Absolute Right Aligned) */}
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-right shrink-0 z-10">
                          <p className={`font-mono text-xs sm:text-sm ${stage.current ? 'text-[#F5D77F] font-bold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'text-[#D4AF37]'}`}>
                            {stage.xpRequired > 0 ? <AnimatedNumber value={stage.xpRequired} /> : '0'}
                          </p>
                          <p className={`font-mono text-[9px] ${stage.current ? 'text-[#D4AF37]' : 'text-[#8d9685]'}`}>XP REQ</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-1 min-h-0">
                {ACHIEVEMENTS.map((a, i) => {
                  const rStyle = RARITY_COLORS[a.rarity];
                  const Icon = a.icon;
                  return (
                    <motion.div
                      key={a.title}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2, delay: 0 } }}
                      className={`relative p-2 sm:p-2.5 flex flex-col h-full rounded-none overflow-hidden group ${!a.earned ? 'opacity-40 grayscale' : ''}`}
                      style={{ 
                        backgroundColor: '#0a0a0a',
                        backgroundImage: `radial-gradient(ellipse at center, ${rStyle.bg} 0%, transparent 100%)`,
                        boxShadow: a.earned ? `inset 0 0 15px ${rStyle.bg}, 0 0 10px ${rStyle.glow || 'rgba(0,0,0,0.5)'}` : '0 0 10px rgba(0,0,0,0.5)'
                      }}
                    >
                      <AchievementFrame rarity={a.rarity} color={rStyle.frame} isEarned={a.earned} />
                      
                      {/* Golden Sweep Hover Animation */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out pointer-events-none" 
                      />

                      {/* Perfectly centered icon and text */}
                      <div className="flex-1 flex flex-col justify-center items-center gap-1.5 relative z-10 pb-4">
                        {/* Icon inside a metallic frame */}
                        <div className="w-8 h-8 flex items-center justify-center relative shrink-0">
                          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 20 2 L 38 20 L 20 38 L 2 20 Z" stroke={rStyle.frame} strokeWidth="2" fill={rStyle.bg} />
                          </svg>
                          <Icon size={14} color={a.earned ? rStyle.text : '#8d9685'} className="relative z-10 drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]" />
                        </div>

                        <div className="text-center">
                          <p className={`font-serif text-[12px] font-bold`} style={{ color: a.earned ? rStyle.text : '#EEEAD7' }}>{a.title}</p>
                          <p className="font-sans text-[9px] text-[#8d9685] mt-0.5 leading-tight">{a.desc}</p>
                        </div>
                      </div>
                      
                      {/* Elevated Rarity Badge */}
                      <div className="absolute bottom-5 left-0 w-full flex justify-center z-10 pointer-events-none">
                        <span
                          className={`font-mono text-[8px] uppercase tracking-widest px-1.5 py-0.5 pointer-events-auto ${a.rarity === 'Mythic' ? 'animate-pulse font-bold drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]' : ''}`}
                          style={{ color: rStyle.text, border: `1px solid ${rStyle.border}`, background: rStyle.bg }}
                        >
                          {a.rarity}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
}

export default Grimoire;

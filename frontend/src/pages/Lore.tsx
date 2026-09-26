import { motion, type Variants } from 'framer-motion';
import { Compass, Home, BookOpen, Scroll, Droplet, Store, Archive, Coins, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

const ContinuousLoreFrame = () => (
  <motion.div 
    initial={{ clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' }}
    whileInView={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    className="absolute inset-0 pointer-events-none z-0"
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(109,8,8,0.3)_0%,_rgba(17,1,2,0.8)_100%)] rounded-lg" />

    {/* The Continuous Straight Lines (Stopping before corners) */}
    <div className="absolute top-[6px] left-[40px] right-[40px] h-[1.5px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
    <div className="absolute bottom-[6px] left-[40px] right-[40px] h-[1.5px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
    <div className="absolute left-[6px] top-[40px] bottom-[40px] w-[1.5px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
    <div className="absolute right-[6px] top-[40px] bottom-[40px] w-[1.5px] bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />

    {/* Top-Left Scythe Corner */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute top-[1px] left-[1px] w-12 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)]">
      <svg viewBox="0 0 48 64" className="w-full h-full" fill="none" stroke="currentColor">
        <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
        <path d="M 16 5 L 40 5" strokeWidth="1.5" />
        <path d="M 22 5 L 19 11 L 16 5 Z" fill="currentColor" stroke="none" />
        <path d="M 5 16 L 5 40" strokeWidth="1.5" />
        <path d="M 5 16 C 12 30 18 45 28 55 C 16 48 7 32 5 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Top-Right Scythe Corner */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute top-[1px] right-[1px] w-12 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)] scale-x-[-1]">
      <svg viewBox="0 0 48 64" className="w-full h-full" fill="none" stroke="currentColor">
        <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
        <path d="M 16 5 L 40 5" strokeWidth="1.5" />
        <path d="M 22 5 L 19 11 L 16 5 Z" fill="currentColor" stroke="none" />
        <path d="M 5 16 L 5 40" strokeWidth="1.5" />
        <path d="M 5 16 C 12 30 18 45 28 55 C 16 48 7 32 5 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Bottom-Left Scythe Corner */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-[1px] left-[1px] w-12 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)] scale-y-[-1]">
      <svg viewBox="0 0 48 64" className="w-full h-full" fill="none" stroke="currentColor">
        <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
        <path d="M 16 5 L 40 5" strokeWidth="1.5" />
        <path d="M 22 5 L 19 11 L 16 5 Z" fill="currentColor" stroke="none" />
        <path d="M 5 16 L 5 40" strokeWidth="1.5" />
        <path d="M 5 16 C 12 30 18 45 28 55 C 16 48 7 32 5 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Bottom-Right Scythe Corner */}
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-[1px] right-[1px] w-12 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)] scale-[-1]">
      <svg viewBox="0 0 48 64" className="w-full h-full" fill="none" stroke="currentColor">
        <circle cx="8" cy="8" r="2" fill="currentColor" stroke="none" />
        <path d="M 16 5 L 40 5" strokeWidth="1.5" />
        <path d="M 22 5 L 19 11 L 16 5 Z" fill="currentColor" stroke="none" />
        <path d="M 5 16 L 5 40" strokeWidth="1.5" />
        <path d="M 5 16 C 12 30 18 45 28 55 C 16 48 7 32 5 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Top Center Geometric Crest */}
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute top-[3px] left-1/2 -translate-x-1/2 w-32 h-6 flex items-center justify-center">
      <svg viewBox="0 0 100 20" className="w-full h-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)]" fill="none" stroke="currentColor">
        <path d="M 0 16 L 30 16 L 40 4 L 60 4 L 70 16 L 100 16" strokeWidth="1.5" />
        <path d="M 36 10 L 42 7 L 58 7 L 64 10" strokeWidth="1.5" opacity="0.6" />
      </svg>
    </motion.div>
    
    {/* Bottom Center Geometric Crest */}
    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-32 h-6 flex items-center justify-center">
      <svg viewBox="0 0 100 20" className="w-full h-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)] scale-y-[-1]" fill="none" stroke="currentColor">
        <path d="M 0 16 L 30 16 L 40 4 L 60 4 L 70 16 L 100 16" strokeWidth="1.5" />
        <path d="M 36 10 L 42 7 L 58 7 L 64 10" strokeWidth="1.5" opacity="0.6" />
      </svg>
    </motion.div>
  </motion.div>
);

const ContinuousSanctuaryFrame = () => (
  <motion.div 
    variants={{
      hidden: { clipPath: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' },
      visible: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }
    }}
    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
    className="absolute inset-0 pointer-events-none z-0"
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(109,8,8,0.2)_0%,_rgba(17,1,2,0.6)_100%)] rounded-xl" />

    {/* Top Border Segments */}
    <div className="absolute top-[32px] left-[64px] right-[calc(50%+80px)] h-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    <div className="absolute top-[32px] right-[64px] left-[calc(50%+80px)] h-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    
    {/* Bottom Border Segments */}
    <div className="absolute bottom-[32px] left-[64px] right-[calc(50%+80px)] h-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    <div className="absolute bottom-[32px] right-[64px] left-[calc(50%+80px)] h-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

    {/* Left Border Segments */}
    <div className="absolute left-[32px] top-[64px] bottom-[calc(50%+48px)] w-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    <div className="absolute left-[32px] bottom-[64px] top-[calc(50%+48px)] w-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

    {/* Right Border Segments */}
    <div className="absolute right-[32px] top-[64px] bottom-[calc(50%+48px)] w-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
    <div className="absolute right-[32px] bottom-[64px] top-[calc(50%+48px)] w-[1.5px] bg-[#D4AF37]/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />

    {/* Top-Left Corner */}
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} className="absolute top-[32px] left-[32px] -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)]">
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor">
        <path d="M 64 32 L 40 32 C 20 32 10 17 20 12 C 30 7 40 22 30 42 L 32 64" strokeWidth="1.5" />
        <path d="M 20 20 Q 30 30 35 40 Q 25 35 15 30 Q 15 20 20 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Top-Right Corner */}
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} className="absolute top-[32px] right-[32px] translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)] scale-x-[-1]">
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor">
        <path d="M 64 32 L 40 32 C 20 32 10 17 20 12 C 30 7 40 22 30 42 L 32 64" strokeWidth="1.5" />
        <path d="M 20 20 Q 30 30 35 40 Q 25 35 15 30 Q 15 20 20 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Bottom-Left Corner */}
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} className="absolute bottom-[32px] left-[32px] -translate-x-1/2 translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)] scale-y-[-1]">
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor">
        <path d="M 64 32 L 40 32 C 20 32 10 17 20 12 C 30 7 40 22 30 42 L 32 64" strokeWidth="1.5" />
        <path d="M 20 20 Q 30 30 35 40 Q 25 35 15 30 Q 15 20 20 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Bottom-Right Corner */}
    <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }} className="absolute bottom-[32px] right-[32px] translate-x-1/2 translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)] scale-[-1]">
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor">
        <path d="M 64 32 L 40 32 C 20 32 10 17 20 12 C 30 7 40 22 30 42 L 32 64" strokeWidth="1.5" />
        <path d="M 20 20 Q 30 30 35 40 Q 25 35 15 30 Q 15 20 20 20 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Top Center Gothic Crest */}
    <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }} className="absolute top-[32px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-16 flex items-center justify-center">
      <svg viewBox="0 0 160 64" className="w-full h-full text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)]" fill="none" stroke="currentColor">
        <path d="M 0 32 C 20 32 20 12 40 22 C 60 32 40 52 25 37 C 15 27 30 27 45 32" strokeWidth="1.5" />
        <path d="M 160 32 C 140 32 140 12 120 22 C 100 32 120 52 135 37 C 145 27 130 27 115 32" strokeWidth="1.5" />
        <path d="M 80 12 L 85 22 L 95 27 L 85 32 L 80 52 L 75 32 L 65 27 L 75 22 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>
    
    {/* Bottom Center Gothic Crest */}
    <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }} className="absolute bottom-[32px] left-1/2 -translate-x-1/2 translate-y-1/2 w-40 h-16 flex items-center justify-center scale-y-[-1]">
      <svg viewBox="0 0 160 64" className="w-full h-full text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)]" fill="none" stroke="currentColor">
        <path d="M 0 32 C 20 32 20 12 40 22 C 60 32 40 52 25 37 C 15 27 30 27 45 32" strokeWidth="1.5" />
        <path d="M 160 32 C 140 32 140 12 120 22 C 100 32 120 52 135 37 C 145 27 130 27 115 32" strokeWidth="1.5" />
        <path d="M 80 12 L 85 22 L 95 27 L 85 32 L 80 52 L 75 32 L 65 27 L 75 22 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Left Center Flourish */}
    <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }} className="absolute top-1/2 left-[32px] -translate-x-1/2 -translate-y-1/2 w-8 h-24 flex items-center justify-center">
      <svg viewBox="0 0 32 96" className="w-full h-full text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)]" fill="none" stroke="currentColor">
        <path d="M 16 0 L 16 20 C 1 20 -4 33 6 48 C -4 63 1 76 16 76 L 16 96" strokeWidth="1.5" />
        <path d="M 9 48 L 19 42 L 17 48 L 19 54 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>

    {/* Right Center Flourish */}
    <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }} className="absolute top-1/2 right-[32px] translate-x-1/2 -translate-y-1/2 w-8 h-24 flex items-center justify-center scale-x-[-1]">
      <svg viewBox="0 0 32 96" className="w-full h-full text-[#F5D77F] drop-shadow-[0_0_4px_rgba(245,215,127,0.6)]" fill="none" stroke="currentColor">
        <path d="M 16 0 L 16 20 C 1 20 -4 33 6 48 C -4 63 1 76 16 76 L 16 96" strokeWidth="1.5" />
        <path d="M 9 48 L 19 42 L 17 48 L 19 54 Z" fill="currentColor" stroke="none" />
      </svg>
    </motion.div>
  </motion.div>
);

const CurrencyFrame = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    {/* Inner glow */}
    <div className="absolute inset-[1px] bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.08)_0%,_rgba(17,1,2,0.8)_100%)] rounded-xl" />
    
    {/* Top Crown Crest */}
    <div className="absolute top-[-32px] left-1/2 -translate-x-1/2 w-48 h-32 text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.6)]">
      <svg viewBox="0 0 192 128" className="w-full h-full" fill="none" stroke="currentColor">
        {/* Arching crown band */}
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } } }} d="M 0 96 C 40 96 60 70 76 46 L 96 70 L 116 46 C 132 70 152 96 192 96" strokeWidth="2" />
        {/* Crown peaks */}
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 0.5, duration: 0.8, ease: "easeOut" } } }} d="M 76 46 L 76 22 L 96 46 L 116 22 L 116 46" strokeWidth="2" strokeLinejoin="round" />
        {/* Center Diamond/Coin */}
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0, scale: 0.5 }, visible: { pathLength: 1, opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } } }} d="M 96 28 L 106 38 L 96 48 L 86 38 Z" strokeWidth="1.5" />
        <motion.circle variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1.3 } } }} cx="96" cy="38" r="3" fill="currentColor" stroke="none" />
        {/* Bottom flourishing ribbon */}
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 0.8, duration: 1 } } }} d="M 48 112 Q 96 128 144 112 Q 96 88 48 112 Z" strokeWidth="1.5" />
      </svg>
    </div>

    {/* Top Border Lines */}
    <motion.div variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { delay: 0.6, duration: 0.6, ease: "linear" } } }} className="absolute top-[63.25px] left-[64px] right-[calc(50%+96px)] h-[1.5px] bg-gradient-to-r from-[#D4AF37] to-transparent origin-right" />
    <motion.div variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { delay: 0.6, duration: 0.6, ease: "linear" } } }} className="absolute top-[63.25px] right-[64px] left-[calc(50%+96px)] h-[1.5px] bg-gradient-to-l from-[#D4AF37] to-transparent origin-left" />

    {/* Corners (Coin Knots) */}
    {/* TL */}
    <div className="absolute top-[64px] left-[32px] -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.5)]">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 1, duration: 0.5 } } }} d="M 64 32 L 48 32 C 32 32 32 32 32 48 L 32 64" strokeWidth="1.5" />
        <motion.circle variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 1.3, duration: 0.5 } } }} cx="32" cy="32" r="12" strokeWidth="1.5" strokeDasharray="3 3" />
        <motion.circle variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 1.6, duration: 0.4 } } }} cx="32" cy="32" r="6" strokeWidth="1.5" />
      </svg>
    </div>
    {/* TR */}
    <div className="absolute top-[64px] right-[32px] translate-x-1/2 -translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.5)] scale-x-[-1]">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 1, duration: 0.5 } } }} d="M 64 32 L 48 32 C 32 32 32 32 32 48 L 32 64" strokeWidth="1.5" />
        <motion.circle variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 1.3, duration: 0.5 } } }} cx="32" cy="32" r="12" strokeWidth="1.5" strokeDasharray="3 3" />
        <motion.circle variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 1.6, duration: 0.4 } } }} cx="32" cy="32" r="6" strokeWidth="1.5" />
      </svg>
    </div>

    {/* Side Lines */}
    <motion.div variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1, transition: { delay: 1.3, duration: 0.6, ease: "linear" } } }} className="absolute top-[96px] bottom-[96px] left-[31.25px] w-[1.5px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/30 to-[#D4AF37] origin-top" />
    <motion.div variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1, transition: { delay: 1.3, duration: 0.6, ease: "linear" } } }} className="absolute top-[96px] bottom-[96px] right-[31.25px] w-[1.5px] bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/30 to-[#D4AF37] origin-top" />

    {/* Bottom Corners */}
    {/* BL */}
    <div className="absolute bottom-[64px] left-[32px] -translate-x-1/2 translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.5)] scale-y-[-1]">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 1.7, duration: 0.5 } } }} d="M 64 32 L 48 32 C 32 32 32 32 32 48 L 32 64" strokeWidth="1.5" />
        <motion.circle variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 2, duration: 0.5 } } }} cx="32" cy="32" r="12" strokeWidth="1.5" strokeDasharray="3 3" />
        <motion.circle variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 2.3, duration: 0.4 } } }} cx="32" cy="32" r="6" strokeWidth="1.5" />
      </svg>
    </div>
    {/* BR */}
    <div className="absolute bottom-[64px] right-[32px] translate-x-1/2 translate-y-1/2 w-16 h-16 text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.5)] scale-[-1]">
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor">
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 1.7, duration: 0.5 } } }} d="M 64 32 L 48 32 C 32 32 32 32 32 48 L 32 64" strokeWidth="1.5" />
        <motion.circle variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 2, duration: 0.5 } } }} cx="32" cy="32" r="12" strokeWidth="1.5" strokeDasharray="3 3" />
        <motion.circle variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 2.3, duration: 0.4 } } }} cx="32" cy="32" r="6" strokeWidth="1.5" />
      </svg>
    </div>

    {/* Bottom Lines */}
    <motion.div variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { delay: 2, duration: 0.6, ease: "linear" } } }} className="absolute bottom-[63.25px] left-[64px] right-[calc(50%+48px)] h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37] origin-left" />
    <motion.div variants={{ hidden: { scaleX: 0, opacity: 0 }, visible: { scaleX: 1, opacity: 1, transition: { delay: 2, duration: 0.6, ease: "linear" } } }} className="absolute bottom-[63.25px] right-[64px] left-[calc(50%+48px)] h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37] origin-right" />

    {/* Bottom Center Diamond */}
    <div className="absolute bottom-[64px] left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.6)]">
      <svg viewBox="0 0 96 96" className="w-full h-full" fill="none" stroke="currentColor">
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 2.4, duration: 0.6 } } }} d="M 0 48 L 32 48 L 48 32 L 64 48 L 96 48" strokeWidth="1.5" />
        <motion.path variants={{ hidden: { pathLength: 0, opacity: 0, scale: 0.5 }, visible: { pathLength: 1, opacity: 1, scale: 1, transition: { delay: 2.6, duration: 0.5 } } }} d="M 48 48 L 56 64 L 48 80 L 40 64 Z" strokeWidth="1.5" />
        <motion.circle variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 2.8 } } }} cx="48" cy="64" r="2" fill="currentColor" stroke="none" />
      </svg>
    </div>
  </div>
const LeafCrest = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
    {/* Thick curving side leaves */}
    <motion.path variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeOut" } } }} d="M 50 10 C 20 10 5 35 15 60 C 25 80 50 90 50 90" strokeWidth="2.5" />
    <motion.path variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { duration: 1.2, ease: "easeOut" } } }} d="M 50 10 C 80 10 95 35 85 60 C 75 80 50 90 50 90" strokeWidth="2.5" />
    
    {/* Inner leaf curls */}
    <motion.path variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 0.3, duration: 1 } } }} d="M 25 40 C 15 50 20 70 40 80" strokeWidth="1.5" />
    <motion.path variants={{ hidden: { pathLength: 0 }, visible: { pathLength: 1, transition: { delay: 0.3, duration: 1 } } }} d="M 75 40 C 85 50 80 70 60 80" strokeWidth="1.5" />
    
    {/* Center Diamond Border */}
    <motion.path variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 0.6, duration: 0.6 } } }} d="M 50 25 L 70 50 L 50 75 L 30 50 Z" strokeWidth="1.5" />
    <motion.path variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { delay: 0.8, duration: 0.6 } } }} d="M 50 32 L 63 50 L 50 68 L 37 50 Z" strokeWidth="1" strokeDasharray="2 2" />
    
    {/* Leaf petal tips (filled) */}
    <motion.path variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1, duration: 0.4 } } }} d="M 15 60 C 10 65 5 55 10 50 C 15 45 20 55 15 60 Z" fill="currentColor" stroke="none" />
    <motion.path variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1, duration: 0.4 } } }} d="M 85 60 C 90 65 95 55 90 50 C 85 45 80 55 85 60 Z" fill="currentColor" stroke="none" />
  </svg>
);

const BoxFlourish = () => (
  <svg viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor">
    {/* Scrolling acanthus corner */}
    <path d="M 0 16 C 16 16 24 16 24 0" strokeWidth="2" />
    <path d="M 16 0 C 16 16 16 24 0 24" strokeWidth="2" />
    <path d="M 24 0 C 32 16 24 32 8 40" strokeWidth="1.5" />
    <path d="M 0 24 C 16 32 32 24 40 8" strokeWidth="1.5" />
    <circle cx="8" cy="8" r="3" fill="currentColor" stroke="none" />
    <circle cx="28" cy="28" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const WorkflowStep = ({ num, title, text, isLast }: { num: number, title: string, text: React.ReactNode, isLast?: boolean }) => {
  return (
    <div className="relative pl-24 md:pl-32 pb-16">
      {/* Vertical Scrolling Vine connecting to the next node (except if last) */}
      {!isLast && (
        <div className="absolute top-[80px] bottom-[-20px] left-[40px] w-0 flex justify-center z-10">
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="w-[2px] h-full bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/80 to-[#D4AF37] origin-top shadow-[0_0_8px_rgba(212,175,55,0.8)] relative"
          >
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.5 }} className="absolute top-[25%] left-0 w-3 h-4 text-[#D4AF37]">
              <svg viewBox="0 0 10 16" fill="currentColor"><path d="M 10 16 C 0 16 0 0 10 0 C 5 8 5 12 10 16" /></svg>
            </motion.div>
            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.0 }} className="absolute top-[75%] right-0 w-3 h-4 text-[#D4AF37] scale-x-[-1]">
              <svg viewBox="0 0 10 16" fill="currentColor"><path d="M 10 16 C 0 16 0 0 10 0 C 5 8 5 12 10 16" /></svg>
            </motion.div>
          </motion.div>
        </div>
      )}
      
      {/* Royal Leaf Crest Node */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-0 top-0 w-20 h-20 flex items-center justify-center z-20"
      >
        <div className="absolute inset-0 text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.6)]">
          <LeafCrest />
        </div>
        <motion.span variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 1 } } }} className="relative z-10 font-serif text-2xl font-bold text-[#FFF9E6] drop-shadow-[0_0_10px_rgba(245,215,127,1)]">{num}</motion.span>
      </motion.div>

      {/* Content Box */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.8, ease: "easeOut" } } }}
        className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-[#D4AF37]/20 p-8 pt-10 pb-10 overflow-hidden"
      >
        {/* Box Flourishes */}
        <div className="absolute top-2 left-2 w-12 h-12 text-[#D4AF37]/40 pointer-events-none">
          <BoxFlourish />
        </div>
        <div className="absolute top-2 right-2 w-12 h-12 text-[#D4AF37]/40 pointer-events-none scale-x-[-1]">
          <BoxFlourish />
        </div>
        <div className="absolute bottom-2 left-2 w-12 h-12 text-[#D4AF37]/40 pointer-events-none scale-y-[-1]">
          <BoxFlourish />
        </div>
        <div className="absolute bottom-2 right-2 w-12 h-12 text-[#D4AF37]/40 pointer-events-none scale-[-1]">
          <BoxFlourish />
        </div>
        
        <h3 className="font-serif text-2xl text-[#F7F3E9] mb-4 relative z-10 drop-shadow-[0_0_8px_rgba(245,215,127,0.3)]">{title}</h3>
        <div className="font-sans text-[#EEEAD7]/90 leading-relaxed relative z-10">
          {text}
        </div>
      </motion.div>
    </div>
  );
};

export function Lore() {
  const { theme } = useTheme();

  return (
    <div className="max-w-4xl mx-auto space-y-16 pb-20">
      {/* Header */}
      <motion.div 
        initial="hidden" 
        animate="visible" 
        variants={fadeIn}
        className="text-center space-y-4 pt-10"
      >
        <div className="flex justify-center mb-6">
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-[#110102]">
            {/* Outer thin ring */}
            <div className="absolute inset-[-6px] rounded-full border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
            {/* Inner glowing ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] shadow-[inset_0_0_10px_rgba(212,175,55,0.6)]" />
            <Compass size={28} className="text-[#F5D77F] drop-shadow-[0_0_5px_rgba(245,215,127,0.8)] relative z-10" />
          </div>
        </div>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-4xl font-bold tracking-wider uppercase drop-shadow-[0_0_15px_rgba(245,215,127,0.5)] text-transparent bg-clip-text bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#F5D77F]"
        >
          The Lore & Mechanics
        </motion.h1>
        <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] max-w-2xl mx-auto">
          A comprehensive guide to understanding your progression through the Night Realm. Master your habits, earn your Crowns, and ascend the ranks.
        </p>
      </motion.div>

      {/* Chapter 1: The Gate & Awakening */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.div variants={fadeIn} className="flex items-center justify-center gap-4 border-b border-[#D4AF37]/20 pb-4">
          <span className="font-mono text-2xl text-[#F5D77F] font-bold drop-shadow-[0_0_8px_rgba(245,215,127,0.6)]">I.</span>
          <h2 className="font-serif text-2xl uppercase tracking-wide drop-shadow-[0_0_10px_rgba(245,215,127,0.5)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">The Gate & Awakening</h2>
        </motion.div>
        
        <motion.div variants={fadeIn} className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-lg shadow-inner border border-transparent">
          
          <ContinuousLoreFrame />

          {/* Inner Content with large padding to prevent overlap */}
          <div className="p-12 relative z-10">
            <p className="font-sans text-[#EEEAD7]/90 leading-relaxed mb-4">
              Your journey begins at <strong>The Gate</strong>, the portal that separates the mortal world from the Night Realm. Here, you create your account and bind your soul to BatHabit.
            </p>
            <p className="font-sans text-[#EEEAD7]/90 leading-relaxed">
              Upon entry, you experience the <strong>Awakening</strong>—an interactive onboarding where you define your very first core habit. This single commitment forms the foundation of your legacy.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Chapter 2: The Sanctuaries */}
      <section className="space-y-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn} 
          className="flex items-center justify-center gap-4 border-b border-[#D4AF37]/20 pb-4"
        >
          <span className="font-mono text-2xl text-[#F5D77F] font-bold drop-shadow-[0_0_8px_rgba(245,215,127,0.6)]">II.</span>
          <h2 className="font-serif text-2xl uppercase tracking-wide drop-shadow-[0_0_10px_rgba(245,215,127,0.5)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">The Sanctuaries</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={slideLeft} 
            className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-transparent overflow-visible"
          >
            <ContinuousSanctuaryFrame />
            <div className="px-10 pt-10 pb-16 relative z-10 flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-6">
                 {/* Glowing Royal Backdrop */}
                 <div className="absolute inset-0 bg-[#D4AF37] blur-[15px] opacity-20 rounded-full w-12 h-12 mx-auto" />
                 <div className="bg-[#110102] p-4 rounded-full border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.3)] text-[#F5D77F] relative z-10">
                   <Home size={28} className="drop-shadow-[0_0_5px_rgba(245,215,127,0.8)]" />
                 </div>
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(245,215,127,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">Sanctum</h3>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed">
                Your <strong>Sanctum</strong> is the central hub of your legacy. It provides a grand overview of your progression, showing your current rank, your active streaks, and a summary of what needs to be done today. It is your home in the Night Realm.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={slideRight} 
            className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-transparent overflow-visible md:mt-12"
          >
            <ContinuousSanctuaryFrame />
            <div className="px-10 pt-10 pb-16 relative z-10 flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-6">
                 <div className="absolute inset-0 bg-[#D4AF37] blur-[15px] opacity-20 rounded-full w-12 h-12 mx-auto" />
                 <div className="bg-[#110102] p-4 rounded-full border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.3)] text-[#F5D77F] relative z-10">
                   <BookOpen size={28} className="drop-shadow-[0_0_5px_rgba(245,215,127,0.8)]" />
                 </div>
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(245,215,127,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">Questbook</h3>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed">
                The <strong>Questbook</strong> holds your actionable tasks. These are one-time objectives or projects you must complete. Checking off quests yields immediate experience (XP) and rewards you with Crowns. Use this for your to-do lists and singular goals.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={slideLeft} 
            className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-transparent overflow-visible"
          >
            <ContinuousSanctuaryFrame />
            <div className="px-10 pt-10 pb-16 relative z-10 flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-6">
                 <div className="absolute inset-0 bg-[#D4AF37] blur-[15px] opacity-20 rounded-full w-12 h-12 mx-auto" />
                 <div className="bg-[#110102] p-4 rounded-full border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.3)] text-[#F5D77F] relative z-10">
                   <Scroll size={28} className="drop-shadow-[0_0_5px_rgba(245,215,127,0.8)]" />
                 </div>
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(245,215,127,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">Grimoire</h3>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed">
                The <strong>Grimoire</strong> is the ledger of your ongoing habits. Unlike quests, habits repeat daily, weekly, or monthly. Consistency here builds your "Unbroken Vow" (streak). This is where discipline is forged.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={slideRight} 
            className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-transparent overflow-visible md:mt-12"
          >
            <ContinuousSanctuaryFrame />
            <div className="px-10 pt-10 pb-16 relative z-10 flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-6">
                 <div className="absolute inset-0 bg-[#D4AF37] blur-[15px] opacity-20 rounded-full w-12 h-12 mx-auto" />
                 <div className="bg-[#110102] p-4 rounded-full border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.3)] text-[#F5D77F] relative z-10">
                   <Droplet size={28} className="drop-shadow-[0_0_5px_rgba(245,215,127,0.8)]" />
                 </div>
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(245,215,127,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">Bloodline</h3>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed">
                The <strong>Bloodline</strong> tracks your attributes, experience points (XP), and overall rank. As you complete quests and habits, you gain XP. Earning enough XP increases your Rank (e.g., from Novice to Nightwalker), unlocking new titles and prestige.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={slideLeft} 
            className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-transparent overflow-visible"
          >
            <ContinuousSanctuaryFrame />
            <div className="px-10 pt-10 pb-16 relative z-10 flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-6">
                 <div className="absolute inset-0 bg-[#D4AF37] blur-[15px] opacity-20 rounded-full w-12 h-12 mx-auto" />
                 <div className="bg-[#110102] p-4 rounded-full border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.3)] text-[#F5D77F] relative z-10">
                   <Store size={28} className="drop-shadow-[0_0_5px_rgba(245,215,127,0.8)]" />
                 </div>
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(245,215,127,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">Night Market</h3>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed">
                Spend your hard-earned Crowns in the <strong>Night Market</strong> to purchase custom rewards, rare items, or self-care treats you've set for yourself. This is your personal store where discipline pays off.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }}
            variants={slideRight} 
            className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-transparent overflow-visible md:mt-12"
          >
            <ContinuousSanctuaryFrame />
            <div className="px-10 pt-10 pb-16 relative z-10 flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-6">
                 <div className="absolute inset-0 bg-[#D4AF37] blur-[15px] opacity-20 rounded-full w-12 h-12 mx-auto" />
                 <div className="bg-[#110102] p-4 rounded-full border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.3)] text-[#F5D77F] relative z-10">
                   <Archive size={28} className="drop-shadow-[0_0_5px_rgba(245,215,127,0.8)]" />
                 </div>
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider mb-4 drop-shadow-[0_0_8px_rgba(245,215,127,0.4)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">Vault</h3>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed">
                Items you purchase from the Night Market are stored securely in your <strong>Vault</strong>. The Vault serves as a collection of your achievements and redeemed rewards, a treasure trove of your past victories.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Chapter 3: The Currency */}
      <section className="space-y-6">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn} 
          className="flex items-center justify-center gap-4 border-b border-[#D4AF37]/20 pb-4"
        >
          <span className="font-mono text-2xl text-[#F5D77F] font-bold drop-shadow-[0_0_8px_rgba(245,215,127,0.6)]">III.</span>
          <h2 className="font-serif text-2xl uppercase tracking-wide drop-shadow-[0_0_10px_rgba(245,215,127,0.5)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">The Currency</h2>
        </motion.div>
        
        <div className="max-w-3xl mx-auto mt-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideRight}
            className="relative bg-[rgba(17,1,2,0.8)] backdrop-blur-md rounded-xl shadow-inner border border-transparent overflow-visible"
          >
            <CurrencyFrame />
            <div className="px-10 pt-20 pb-20 relative z-10 flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-8">
                 {/* Glowing Royal Backdrop */}
                 <div className="absolute inset-0 bg-[#D4AF37] blur-[20px] opacity-25 rounded-full w-20 h-20 mx-auto" />
                 <div className="bg-[#110102] p-6 rounded-full border border-[#D4AF37]/40 shadow-[0_0_15px_rgba(212,175,55,0.5)] text-[#F5D77F] relative z-10">
                   <Coins size={40} className="drop-shadow-[0_0_8px_rgba(245,215,127,0.8)]" />
                 </div>
              </div>
              <h3 className="font-serif text-3xl uppercase tracking-widest mb-6 drop-shadow-[0_0_10px_rgba(245,215,127,0.6)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">Crowns</h3>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed mb-6 max-w-xl mx-auto text-lg">
                <strong>Crowns</strong> are the primary currency of the Night Realm. You earn them by maintaining streaks in your Grimoire and finishing tasks in your Questbook.
              </p>
              <p className="font-sans text-[#EEEAD7]/90 leading-relaxed max-w-xl mx-auto text-lg">
                Protect your Crowns carefully. While consistency rewards you handsomely, failing to maintain your core habits may result in losing Crowns.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4: The Workflow */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeIn} 
          className="flex items-center justify-center gap-4 border-b border-[#D4AF37]/20 pb-4"
        >
          <span className="font-mono text-2xl text-[#F5D77F] font-bold drop-shadow-[0_0_8px_rgba(245,215,127,0.6)]">IV.</span>
          <h2 className="font-serif text-2xl uppercase tracking-wide drop-shadow-[0_0_10px_rgba(245,215,127,0.5)] text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9E6] to-[#D4AF37]">The Progression Workflow</h2>
        </motion.div>

        <div className="relative pl-12 md:pl-16 space-y-12">
          
        <div className="relative mt-12">
          
          <WorkflowStep 
            num={1} 
            title="The Grind" 
            text={<>Your journey begins with daily dedication. Every morning, open your sidebar and navigate to the <strong>Questbook</strong> for one-off tasks (like "Clean the garage" or "Finish the essay"), and the <strong>Grimoire</strong> to log your recurring daily habits (like "Drink water" or "Meditate"). Simply checking off these tasks is the core loop of your journey—doing the necessary work to survive the Night Realm.</>} 
          />
          
          <WorkflowStep 
            num={2} 
            title="The Evolution" 
            text={<>As you check off tasks in the Questbook and Grimoire, your soul automatically absorbs experience points (XP). Navigate to your <strong>Bloodline</strong> from the sidebar to inspect your attributes and monitor your total level. Earning enough XP will permanently rank you up from a mere <em>Novice</em> to legendary titles like <em>Nightwalker</em>, unlocking prestigious recognition and deeper mechanics over time.</>} 
          />
          
          <WorkflowStep 
            num={3} 
            title="The Farm" 
            text={<>True power comes from consistency. If you complete a habit in your <strong>Grimoire</strong> multiple days in a row, you establish an "Unbroken Vow"—a streak. The higher your streak gets, the more <strong>Crowns</strong> you will passively farm every single day. Relentless discipline directly translates to massive wealth, but skipping a day will break your vow and shatter your income.</>} 
          />
          
          <WorkflowStep 
            num={4} 
            title="The Harvest" 
            text={<>Once you have farmed a hoard of Crowns, it is time to reap what you've sown. Navigate to the <strong>Night Market</strong> via the sidebar. Here, you can spend your hard-earned currency to purchase real-life custom rewards, video games, or self-care treats that you have personally set as motivation. This is where your virtual discipline becomes tangible reality.</>} 
          />
          
          <WorkflowStep 
            num={5} 
            title="The Legacy" 
            isLast={true}
            text={<>Finally, every item you successfully harvest from the Night Market is permanently logged and stored securely in your <strong>Vault</strong>. Click on the Vault in your sidebar to review a glorious treasure trove of your past victories. Whenever you doubt yourself, visit your <strong>Sanctum</strong> dashboard to see your entire legacy standing tall.</>} 
          />
          
        </div>
      </section>

      {/* Conclusion */}
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="text-center pt-10"
      >
        <h3 className="font-serif text-xl text-[#D4AF37] dark:text-[#F5D77F] italic mb-2">"Discipline is the key to eternity."</h3>
        <p className="font-sans text-[#F7F3E9]/60 dark:text-[#8d9685] text-sm">Return to the Sanctum and begin your vigil.</p>
      </motion.div>

    </div>
  );
}

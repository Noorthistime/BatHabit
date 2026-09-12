import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface EventUIProps {
  type: 'QUEST_COMPLETE' | 'LEVEL_UP' | 'ACHIEVEMENT';
  data: any;
  onClose: () => void;
}

export function EventUI({ type, data, onClose }: EventUIProps) {
  useEffect(() => {
    if (type === 'LEVEL_UP' || type === 'QUEST_COMPLETE') {
      const colors = type === 'LEVEL_UP' ? ['#ff0000', '#757D6F', '#2D0000'] : ['#BCCEF8', '#FAF7F0'];
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: colors
      });
    }
  }, [type]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-card border-2 border-primary p-8 rounded-2xl shadow-[0_0_50px_rgba(109,8,8,0.5)] text-center max-w-sm w-full"
          initial={{ scale: 0.5, y: 100, rotate: -5 }}
          animate={{ scale: 1, y: 0, rotate: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 15 }}
          onClick={e => e.stopPropagation()}
        >
          {type === 'QUEST_COMPLETE' && (
            <>
              <motion.h2 
                className="text-4xl font-serif font-bold text-primary mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Quest Complete
              </motion.h2>
              <div className="space-y-2 text-lg font-bold">
                <p>+{data.xpEarned} XP</p>
                <p className="text-yellow-500">+{data.currencyEarned} Coins</p>
              </div>
            </>
          )}

          {type === 'LEVEL_UP' && (
            <>
              <motion.h2 
                className="text-5xl font-serif font-bold text-primary mb-4 uppercase tracking-widest"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
              >
                Level Up!
              </motion.h2>
              <div className="space-y-2 text-xl font-bold">
                <p>Ascended to Level {data.level}</p>
              </div>
            </>
          )}
          
          <div className="mt-8">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/80 transition-colors"
            >
              Continue
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

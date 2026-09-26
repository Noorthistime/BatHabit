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
  <div className="absolute inset-0 pointer-events-none z-0 animate-[pulse_4s_ease-in-out_infinite]">
    {/* Continuous Outer Thin Gold Border */}
    <div className="absolute inset-[3px] border border-[#D4AF37]/40 shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
    {/* Continuous Inner Thin Gold Border */}
    <div className="absolute inset-[6px] border border-[#D4AF37]/20" />

    {/* Top Left Sharp Corner */}
    <svg className="absolute top-0 left-0 w-24 h-24 text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.8)]" viewBox="0 0 100 100" fill="none">
      <path d="M0,0 L50,0 L40,8 L8,8 L8,40 L0,50 Z" fill="currentColor" />
      <path d="M20,8 Q35,25 55,10 Q40,15 20,8 Z" fill="currentColor" />
      <path d="M8,20 Q25,35 10,55 Q15,40 8,20 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.7" />
    </svg>
    {/* Top Right Sharp Corner */}
    <svg className="absolute top-0 right-0 w-24 h-24 text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.8)] scale-x-[-1]" viewBox="0 0 100 100" fill="none">
      <path d="M0,0 L50,0 L40,8 L8,8 L8,40 L0,50 Z" fill="currentColor" />
      <path d="M20,8 Q35,25 55,10 Q40,15 20,8 Z" fill="currentColor" />
      <path d="M8,20 Q25,35 10,55 Q15,40 8,20 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.7" />
    </svg>
    {/* Bottom Left Sharp Corner */}
    <svg className="absolute bottom-0 left-0 w-24 h-24 text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.8)] scale-y-[-1]" viewBox="0 0 100 100" fill="none">
      <path d="M0,0 L50,0 L40,8 L8,8 L8,40 L0,50 Z" fill="currentColor" />
      <path d="M20,8 Q35,25 55,10 Q40,15 20,8 Z" fill="currentColor" />
      <path d="M8,20 Q25,35 10,55 Q15,40 8,20 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.7" />
    </svg>
    {/* Bottom Right Sharp Corner */}
    <svg className="absolute bottom-0 right-0 w-24 h-24 text-[#F5D77F] drop-shadow-[0_0_8px_rgba(245,215,127,0.8)] scale-[-1]" viewBox="0 0 100 100" fill="none">
      <path d="M0,0 L50,0 L40,8 L8,8 L8,40 L0,50 Z" fill="currentColor" />
      <path d="M20,8 Q35,25 55,10 Q40,15 20,8 Z" fill="currentColor" />
      <path d="M8,20 Q25,35 10,55 Q15,40 8,20 Z" fill="currentColor" />
      <circle cx="16" cy="16" r="3" fill="currentColor" opacity="0.7" />
    </svg>

    {/* Top Center Ornate Crest */}
    <div className="absolute top-[2px] left-1/2 -translate-x-1/2 w-48 h-6 flex items-center justify-center">
       <svg viewBox="0 0 300 40" className="h-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)]">
          <path d="M0,0 L300,0 L280,10 L250,5 Q200,20 150,30 Q100,20 50,5 L20,10 Z" fill="currentColor" />
          <path d="M100,10 Q150,25 200,10 Q150,5 100,10 Z" fill="currentColor" opacity="0.5" />
       </svg>
    </div>
    {/* Bottom Center Ornate Crest */}
    <div className="absolute bottom-[2px] left-1/2 -translate-x-1/2 w-48 h-6 flex items-center justify-center">
       <svg viewBox="0 0 300 40" className="h-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.8)] scale-y-[-1]">
          <path d="M0,0 L300,0 L280,10 L250,5 Q200,20 150,30 Q100,20 50,5 L20,10 Z" fill="currentColor" />
          <path d="M100,10 Q150,25 200,10 Q150,5 100,10 Z" fill="currentColor" opacity="0.5" />
       </svg>
    </div>
    
    {/* Side Center Accents */}
    <div className="absolute top-1/2 left-[2px] -translate-y-1/2 w-3 h-24 flex items-center justify-center">
       <svg viewBox="0 0 20 200" className="w-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.6)]">
          <path d="M0,0 L10,20 L5,50 Q15,100 5,150 L10,180 L0,200 Z" fill="currentColor" />
       </svg>
    </div>
    <div className="absolute top-1/2 right-[2px] -translate-y-1/2 w-3 h-24 flex items-center justify-center">
       <svg viewBox="0 0 20 200" className="w-full text-[#F5D77F] drop-shadow-[0_0_6px_rgba(245,215,127,0.6)] scale-x-[-1]">
          <path d="M0,0 L10,20 L5,50 Q15,100 5,150 L10,180 L0,200 Z" fill="currentColor" />
       </svg>
    </div>
  </div>
);

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
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 border-b border-[#415A77] dark:border-[#D4AF37]/30 pb-4">
          <span className="font-mono text-2xl text-[#D4AF37] dark:text-[#C5A059] font-bold">II.</span>
          <h2 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-wide">The Sanctuaries</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div variants={slideLeft} className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0D1B2A] dark:bg-[#060102] p-3 rounded-full border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37]">
                <Home size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">Sanctum</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              Your <strong>Sanctum</strong> is the central hub of your legacy. It provides a grand overview of your progression, showing your current rank, your active streaks, and a summary of what needs to be done today. It is your home in the Night Realm.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] md:mt-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0D1B2A] dark:bg-[#060102] p-3 rounded-full border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37]">
                <BookOpen size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">Questbook</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              The <strong>Questbook</strong> holds your actionable tasks. These are one-time objectives or projects you must complete. Checking off quests yields immediate experience (XP) and rewards you with Crowns. Use this for your to-do lists and singular goals.
            </p>
          </motion.div>
          
          <motion.div variants={slideLeft} className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0D1B2A] dark:bg-[#060102] p-3 rounded-full border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37]">
                <Scroll size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">Grimoire</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              The <strong>Grimoire</strong> is the ledger of your ongoing habits. Unlike quests, habits repeat daily, weekly, or monthly. Consistency here builds your "Unbroken Vow" (streak). This is where discipline is forged.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] md:mt-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0D1B2A] dark:bg-[#060102] p-3 rounded-full border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37]">
                <Droplet size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">Bloodline</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              The <strong>Bloodline</strong> tracks your attributes, experience points (XP), and overall rank. As you complete quests and habits, you gain XP. Earning enough XP increases your Rank (e.g., from Novice to Nightwalker), unlocking new titles and prestige.
            </p>
          </motion.div>

          <motion.div variants={slideLeft} className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0D1B2A] dark:bg-[#060102] p-3 rounded-full border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37]">
                <Store size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">Night Market</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              Spend your hard-earned Crowns in the <strong>Night Market</strong> to purchase custom rewards, rare items, or self-care treats you've set for yourself. This is your personal store where discipline pays off.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] md:mt-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-[#0D1B2A] dark:bg-[#060102] p-3 rounded-full border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37]">
                <Archive size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">Vault</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              Items you purchase from the Night Market are stored securely in your <strong>Vault</strong>. The Vault serves as a collection of your achievements and redeemed rewards, a treasure trove of your past victories.
            </p>
          </motion.div>

        </div>
      </motion.section>

      {/* Chapter 3: The Currency */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 border-b border-[#415A77] dark:border-[#D4AF37]/30 pb-4">
          <span className="font-mono text-2xl text-[#D4AF37] dark:text-[#C5A059] font-bold">III.</span>
          <h2 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-wide">The Currency</h2>
        </motion.div>
        
        <motion.div variants={fadeIn} className="bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#0D1B2A] dark:bg-[#060102] p-3 rounded-full border border-[#415A77] dark:border-[#3a0404] text-[#D4AF37]">
              <Coins size={24} />
            </div>
            <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">Crowns</h3>
          </div>
          <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed mb-4">
            <strong>Crowns</strong> are the primary currency of the Night Realm. You earn them by maintaining streaks in your Grimoire and finishing tasks in your Questbook.
          </p>
          <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
            Protect your Crowns carefully. While consistency rewards you handsomely, failing to maintain your core habits may result in losing Crowns.
          </p>
        </motion.div>
      </motion.section>

      {/* Chapter 4: The Workflow */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="space-y-6"
      >
        <motion.div variants={fadeIn} className="flex items-center gap-4 border-b border-[#415A77] dark:border-[#D4AF37]/30 pb-4">
          <span className="font-mono text-2xl text-[#D4AF37] dark:text-[#C5A059] font-bold">IV.</span>
          <h2 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-wide">The Progression Workflow</h2>
        </motion.div>

        <div className="relative pl-12 md:pl-16 space-y-12">
          
          {/* The connecting string */}
          <div className="absolute left-4 md:left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent"></div>
          
          <motion.div variants={slideRight} className="relative bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-6 -left-[2.85rem] md:-left-[3.35rem] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D1B2A] dark:bg-[#060102] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-xl md:text-2xl font-bold z-10 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              1
            </div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">The Grind</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              Your journey begins with daily dedication. Every morning, open your sidebar and navigate to the <strong>Questbook</strong> for one-off tasks (like "Clean the garage" or "Finish the essay"), and the <strong>Grimoire</strong> to log your recurring daily habits (like "Drink water" or "Meditate"). Simply checking off these tasks is the core loop of your journey—doing the necessary work to survive the Night Realm.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="relative bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-6 -left-[2.85rem] md:-left-[3.35rem] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D1B2A] dark:bg-[#060102] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-xl md:text-2xl font-bold z-10 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              2
            </div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">The Evolution</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              As you check off tasks in the Questbook and Grimoire, your soul automatically absorbs experience points (XP). Navigate to your <strong>Bloodline</strong> from the sidebar to inspect your attributes and monitor your total level. Earning enough XP will permanently rank you up from a mere <em>Novice</em> to legendary titles like <em>Nightwalker</em>, unlocking prestigious recognition and deeper mechanics over time.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="relative bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-6 -left-[2.85rem] md:-left-[3.35rem] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D1B2A] dark:bg-[#060102] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-xl md:text-2xl font-bold z-10 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              3
            </div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">The Farm</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              True power comes from consistency. If you complete a habit in your <strong>Grimoire</strong> multiple days in a row, you establish an "Unbroken Vow"—a streak. The higher your streak gets, the more <strong>Crowns</strong> you will passively farm every single day. Relentless discipline directly translates to massive wealth, but skipping a day will break your vow and shatter your income.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="relative bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-6 -left-[2.85rem] md:-left-[3.35rem] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D1B2A] dark:bg-[#060102] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-xl md:text-2xl font-bold z-10 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              4
            </div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">The Harvest</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              Once you have farmed a hoard of Crowns, it is time to reap what you've sown. Navigate to the <strong>Night Market</strong> via the sidebar. Here, you can spend your hard-earned currency to purchase real-life custom rewards, video games, or self-care treats that you have personally set as motivation. This is where your virtual discipline becomes tangible reality.
            </p>
          </motion.div>

          <motion.div variants={slideRight} className="relative bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 p-6 rounded-xl shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
            <div className="absolute top-6 -left-[2.85rem] md:-left-[3.35rem] w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D1B2A] dark:bg-[#060102] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] font-serif text-xl md:text-2xl font-bold z-10 shadow-[0_0_10px_rgba(212,175,55,0.4)]">
              5
            </div>
            <div className="flex items-center gap-4 mb-3">
              <h3 className="font-serif text-2xl text-[#F7F3E9] dark:text-[#EEEAD7]">The Legacy</h3>
            </div>
            <p className="font-sans text-[#F7F3E9]/80 dark:text-[#8d9685] leading-relaxed">
              Finally, every item you successfully harvest from the Night Market is permanently logged and stored securely in your <strong>Vault</strong>. Click on the Vault in your sidebar to review a glorious treasure trove of your past victories. Whenever you doubt yourself, visit your <strong>Sanctum</strong> dashboard to see your entire legacy standing tall.
            </p>
          </motion.div>

        </div>
      </motion.section>

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

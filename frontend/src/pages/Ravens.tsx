import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCheck, Feather, Shield, Sparkles, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: 'system' | 'achievement' | 'message' | 'alert';
  isNew: boolean;
}

const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Rank Ascended',
    message: 'Your Bloodline has evolved. You are now recognized as a Nightwalker Scholar. New titles and prestige are available in your Sanctum.',
    timestamp: '15m ago',
    read: false,
    type: 'achievement',
    isNew: true
  },
  {
    id: '2',
    title: 'Unbroken Vow Reached',
    message: 'You have maintained your "Read 10 pages" Grimoire habit for 7 consecutive days. Your Crown yield has increased.',
    timestamp: '2h ago',
    read: false,
    type: 'system',
    isNew: true
  },
  {
    id: '3',
    title: 'New Night Market Items',
    message: 'The merchants have arrived. Rare self-care treats have been added to the Night Market.',
    timestamp: '1d ago',
    read: true,
    type: 'alert',
    isNew: false
  },
  {
    id: '4',
    title: 'The Oracle Speaks',
    message: 'I have observed your recent discipline. You are showing great promise. Shall we discuss your next objective?',
    timestamp: '2d ago',
    read: true,
    type: 'message',
    isNew: false
  },
  {
    id: '5',
    title: 'Welcome to the Night Realm',
    message: 'Your soul is bound to BatHabit. Visit the Lore page to understand the path that lies ahead.',
    timestamp: '5d ago',
    read: true,
    type: 'system',
    isNew: false
  }
];

const iconMap = {
  system: <Feather size={20} />,
  achievement: <Shield size={20} />,
  message: <MessageSquare size={20} />,
  alert: <Sparkles size={20} />
};

export function Ravens() {
  const { theme } = useTheme();
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const newNotifications = notifications.filter(n => n.isNew);
  const earlierNotifications = notifications.filter(n => !n.isNew);

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 pt-8 relative">
      
      {/* Background Watermark */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none flex items-center justify-center text-[#D4AF37] z-0 overflow-hidden">
        <Feather className="w-[800px] h-[800px] transform -rotate-12" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#415A77] dark:border-[#3a0404] pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1B263B] dark:bg-[#3a0404] flex items-center justify-center border-2 border-[#415A77] dark:border-[#D4AF37]/70 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-[#D4AF37]">
              <Bell size={24} />
            </div>
            <div>
              <h1 className="font-serif text-3xl text-[#F7F3E9] dark:text-[#EEEAD7] font-bold tracking-wider uppercase">Ravens</h1>
              <p className="font-mono text-xs text-[#D4AF37] dark:text-[#C5A059] tracking-widest uppercase">Your Notifications</p>
            </div>
          </div>
          
          <button 
            onClick={markAllAsRead}
            className="flex items-center gap-2 px-4 py-2 rounded transition-all font-sans text-sm shadow-[0_0_12px_rgba(109,8,8,0.4)] hover:brightness-110 active:scale-95 text-[#EEEAD7]"
            style={{ background: 'linear-gradient(90deg, #6D0808, #3d0303)', border: '1px solid rgba(212,175,55,0.6)' }}
          >
            <CheckCheck size={16} className="text-[#F5D77F]" />
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-10 mt-8">
          
          {/* New Section */}
          {newNotifications.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl text-[#F7F3E9]/80 dark:text-[#EEEAD7]/80 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_8px_#D4AF37]"></span>
                New Arrivals
              </h2>
              <div className="space-y-3">
                {newNotifications.map(notification => (
                  <NotificationCard 
                    key={notification.id} 
                    notification={notification} 
                    onRead={() => markAsRead(notification.id)} 
                  />
                ))}
              </div>
            </div>
          )}

          {/* Earlier Section */}
          {earlierNotifications.length > 0 && (
            <div className="space-y-4">
              <h2 className="font-serif text-xl text-[#F7F3E9]/60 dark:text-[#EEEAD7]/60">
                Earlier
              </h2>
              <div className="space-y-3">
                {earlierNotifications.map(notification => (
                  <NotificationCard 
                    key={notification.id} 
                    notification={notification} 
                    onRead={() => markAsRead(notification.id)} 
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

function NotificationCard({ notification, onRead }: { notification: Notification, onRead: () => void }) {
  const isNew = !notification.read;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onRead}
      className={`relative flex gap-4 p-5 rounded-xl border cursor-pointer transition-all overflow-hidden ${
        isNew 
          ? 'bg-[#0D1B2A] dark:bg-[#1a0202] border-[#415A77] dark:border-[#D4AF37]/60 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.8)]' 
          : 'bg-[#0D1B2A]/50 dark:bg-[#0a0101] border-[#415A77]/50 dark:border-[#D4AF37]/20 opacity-80 hover:opacity-100 hover:bg-[#0D1B2A] dark:hover:bg-[#1a0202] dark:hover:border-[#D4AF37]/40 shadow-sm'
      }`}
    >
      <FiligreeCorner position="top-left" animated={isNew} />
      <FiligreeCorner position="top-right" animated={isNew} />
      <FiligreeCorner position="bottom-left" animated={isNew} />
      <FiligreeCorner position="bottom-right" animated={isNew} />

      {/* Unread Dot */}
      {isNew && (
        <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></div>
      )}
      
      {/* Icon */}
      <div className={`relative z-10 w-10 h-10 shrink-0 rounded-full flex items-center justify-center border ${
        isNew 
          ? 'bg-[#0D1B2A] dark:bg-[#3a0404] border-[#415A77] dark:border-[#D4AF37] text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]' 
          : 'bg-[#0D1B2A]/50 dark:bg-[#060102] border-[#415A77]/50 dark:border-[#3a0404] text-[#D4AF37]/50'
      }`}>
        {iconMap[notification.type]}
      </div>

      {/* Content */}
      <div className="flex-1 pr-8 relative z-10">
        <div className="flex items-center gap-3 mb-1">
          <h3 className={`font-serif text-lg ${isNew ? 'text-[#F7F3E9] dark:text-[#D4AF37] drop-shadow-[0_0_3px_rgba(212,175,55,0.5)] font-bold tracking-wide' : 'text-[#F7F3E9]/80 dark:text-[#C5A059]/70'}`}>
            {notification.title}
          </h3>
          <span className="font-mono text-xs text-[#D4AF37]/70 dark:text-[#C5A059]/50">{notification.timestamp}</span>
        </div>
        <p className={`font-sans text-sm leading-relaxed ${isNew ? 'text-[#F7F3E9]/90 dark:text-[#EEEAD7]/90' : 'text-[#F7F3E9]/60 dark:text-[#8d9685]/70'}`}>
          {notification.message}
        </p>
      </div>
    </motion.div>
  );
}

const FiligreeCorner = ({ position, animated }: { position: string, animated: boolean }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-left': return '';
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return '';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left': return 'top-0 left-0';
      case 'top-right': return 'top-0 right-0';
      case 'bottom-left': return 'bottom-0 left-0';
      case 'bottom-right': return 'bottom-0 right-0';
      default: return '';
    }
  };

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { 
        pathLength: { type: "spring", duration: 3, bounce: 0 },
        opacity: { duration: 0.5 }
      } 
    }
  };

  const staticDraw = {
    hidden: { pathLength: 1, opacity: 0.15 },
    visible: { pathLength: 1, opacity: 0.15 }
  };

  const variants = animated ? draw : staticDraw;
  const initial = "hidden";
  const animate = "visible";

  return (
    <svg 
      className={`absolute w-16 h-16 pointer-events-none text-[#D4AF37] ${getPositionClasses()} ${animated ? 'drop-shadow-[0_0_3px_rgba(212,175,55,0.6)]' : ''}`}
      viewBox="0 0 100 100" 
      style={{ transform: getTransform() }}
    >
      <motion.path
        d="M0,0 C40,0 80,10 90,50 C95,70 90,90 80,100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        variants={variants}
        initial={initial}
        animate={animate}
      />
      <motion.path
        d="M0,20 C30,20 50,40 40,70 C35,85 20,95 0,100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        variants={variants}
        initial={initial}
        animate={animate}
      />
      <motion.path
        d="M0,40 C10,40 20,50 15,65 C10,75 0,80 0,80"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        variants={variants}
        initial={initial}
        animate={animate}
      />
      <motion.circle 
        cx="20" cy="20" r="3" 
        fill="currentColor"
        variants={animated ? { hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1 } } } : staticDraw}
        initial="hidden"
        animate="visible"
      />
      <motion.circle 
        cx="65" cy="35" r="2" 
        fill="currentColor"
        variants={animated ? { hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1.5 } } } : staticDraw}
        initial="hidden"
        animate="visible"
      />
    </svg>
  );
}

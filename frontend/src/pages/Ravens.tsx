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
    <div className="max-w-4xl mx-auto space-y-8 pb-20 pt-8">
      
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
          className="flex items-center gap-2 bg-[#1B263B]/50 hover:bg-[#1B263B] dark:bg-[#1a0101]/50 dark:hover:bg-[#3a0404] border border-[#415A77] dark:border-[#D4AF37]/50 text-[#F7F3E9] dark:text-[#EEEAD7] px-4 py-2 rounded transition-colors font-sans text-sm shadow-md"
        >
          <CheckCheck size={16} className="text-[#D4AF37]" />
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-10">
        
        {/* New Section */}
        {newNotifications.length > 0 && (
          <div className="space-y-4">
            <h2 className="font-serif text-xl text-[#F7F3E9]/80 dark:text-[#EEEAD7]/80 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
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
  );
}

function NotificationCard({ notification, onRead }: { notification: Notification, onRead: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={onRead}
      className={`relative flex gap-4 p-5 rounded-lg border cursor-pointer transition-all ${
        !notification.read 
          ? 'bg-[#1B263B]/80 dark:bg-[#1a0101]/80 border-[#415A77] dark:border-[#D4AF37]/50 shadow-md' 
          : 'bg-[#1B263B]/30 dark:bg-[#060102]/60 border-[#415A77]/50 dark:border-[#3a0404] opacity-75 hover:opacity-100 hover:bg-[#1B263B]/50 dark:hover:bg-[#1a0101]/80'
      }`}
    >
      {/* Unread Dot */}
      {!notification.read && (
        <div className="absolute top-5 right-5 w-2.5 h-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></div>
      )}
      
      {/* Icon */}
      <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center border ${
        !notification.read 
          ? 'bg-[#0D1B2A] dark:bg-[#3a0404] border-[#415A77] dark:border-[#D4AF37] text-[#D4AF37]' 
          : 'bg-[#0D1B2A]/50 dark:bg-[#060102] border-[#415A77]/50 dark:border-[#3a0404] text-[#D4AF37]/50'
      }`}>
        {iconMap[notification.type]}
      </div>

      {/* Content */}
      <div className="flex-1 pr-8">
        <div className="flex items-center gap-3 mb-1">
          <h3 className={`font-serif text-lg ${!notification.read ? 'text-[#F7F3E9] dark:text-[#EEEAD7]' : 'text-[#F7F3E9]/80 dark:text-[#EEEAD7]/80'}`}>
            {notification.title}
          </h3>
          <span className="font-mono text-xs text-[#D4AF37]/70 dark:text-[#C5A059]/70">{notification.timestamp}</span>
        </div>
        <p className={`font-sans text-sm leading-relaxed ${!notification.read ? 'text-[#F7F3E9]/90 dark:text-[#8d9685]' : 'text-[#F7F3E9]/60 dark:text-[#8d9685]/70'}`}>
          {notification.message}
        </p>
      </div>
    </motion.div>
  );
}

import React, { useState, useEffect, useMemo } from 'react';
import { api } from '../../api';
import { useTheme } from '../../context/ThemeContext';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Scroll, Droplet, Store, Archive, History, Bell, MessageSquare, Key, Moon, Sun, User, Zap, Landmark, Coins, Compass } from 'lucide-react';
import { cn } from '../ui/Button';

const SANCTUARIES = [
  { name: 'Sanctum', icon: Home, path: '/dashboard' },
  { name: 'Questbook', icon: BookOpen, path: '/dashboard/questbook' },
  { name: 'Grimoire', icon: Scroll, path: '/dashboard/grimoire' },
  { name: 'Bloodline', icon: Droplet, path: '/dashboard/bloodline' },
  { name: 'Night Market', icon: Store, path: '/dashboard/market' },
  { name: 'Vault', icon: Archive, path: '/dashboard/vault' },
  { name: 'Lore', icon: Compass, path: '/dashboard/lore' },
];

const ORACLES = [
  { name: 'Ravens', icon: Bell, badge: '3', path: '/dashboard/ravens' },
  { name: 'Oracle', icon: MessageSquare, badgeIcon: true, path: '/dashboard/oracle' },
  { name: 'Chamber', icon: Key, path: '/dashboard/chamber' },
];

const FiligreeFrame = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative flex flex-col items-center justify-center px-4 py-2 bg-gradient-to-br from-[#101828] to-[#040810] dark:from-[#1f0303] dark:to-[#0a0000] shadow-[0_6px_20px_rgba(0,0,0,0.8)] ${className}`}>
    
    {/* Base Double Border */}
    <svg className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] pointer-events-none" preserveAspectRatio="none">
      <rect width="100%" height="100%" fill="none" stroke="#D4AF37" strokeWidth="1" opacity="0.8" className="filigree-path" />
    </svg>
    <svg className="absolute inset-[5px] w-[calc(100%-10px)] h-[calc(100%-10px)] pointer-events-none" preserveAspectRatio="none">
      <rect width="100%" height="100%" fill="none" stroke="#D4AF37" strokeWidth="0.5" opacity="0.4" className="filigree-path" />
    </svg>

    {/* Top Center Flourish */}
    <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 flex items-center justify-center text-[#D4AF37] pointer-events-none">
      <svg width="50" height="10" viewBox="0 0 50 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 Q12.5 5 20 10 Q25 -2 30 10 Q37.5 5 50 5" stroke="#D4AF37" strokeWidth="1" className="filigree-path" />
        <path d="M18 5 C18 2 25 -2 32 5" stroke="#D4AF37" strokeWidth="1" className="filigree-path" />
        <path d="M23 4 L25 1 L27 4 Z" fill="#D4AF37" className="filigree-path" />
      </svg>
    </div>

    {/* Bottom Center Flourish */}
    <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 flex items-center justify-center text-[#D4AF37] rotate-180 pointer-events-none">
      <svg width="50" height="10" viewBox="0 0 50 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 5 Q12.5 5 20 10 Q25 -2 30 10 Q37.5 5 50 5" stroke="#D4AF37" strokeWidth="1" className="filigree-path" />
        <path d="M18 5 C18 2 25 -2 32 5" stroke="#D4AF37" strokeWidth="1" className="filigree-path" />
        <path d="M23 4 L25 1 L27 4 Z" fill="#D4AF37" className="filigree-path" />
      </svg>
    </div>

    {/* Top Left Corner */}
    <div className="absolute top-[-1px] left-[-1px] text-[#D4AF37] pointer-events-none">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2 C9 2 2 9 2 16" stroke="#D4AF37" strokeWidth="1.2" className="filigree-path" />
        <path d="M12 5 C8 5 5 8 5 12" stroke="#D4AF37" strokeWidth="0.8" className="filigree-path" />
        <circle cx="4" cy="4" r="1.5" fill="#D4AF37" className="filigree-path" />
      </svg>
    </div>

    {/* Top Right Corner */}
    <div className="absolute top-[-1px] right-[-1px] text-[#D4AF37] rotate-90 pointer-events-none">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2 C9 2 2 9 2 16" stroke="#D4AF37" strokeWidth="1.2" className="filigree-path" />
        <path d="M12 5 C8 5 5 8 5 12" stroke="#D4AF37" strokeWidth="0.8" className="filigree-path" />
        <circle cx="4" cy="4" r="1.5" fill="#D4AF37" className="filigree-path" />
      </svg>
    </div>

    {/* Bottom Right Corner */}
    <div className="absolute bottom-[-1px] right-[-1px] text-[#D4AF37] rotate-180 pointer-events-none">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2 C9 2 2 9 2 16" stroke="#D4AF37" strokeWidth="1.2" className="filigree-path" />
        <path d="M12 5 C8 5 5 8 5 12" stroke="#D4AF37" strokeWidth="0.8" className="filigree-path" />
        <circle cx="4" cy="4" r="1.5" fill="#D4AF37" className="filigree-path" />
      </svg>
    </div>

    {/* Bottom Left Corner */}
    <div className="absolute bottom-[-1px] left-[-1px] text-[#D4AF37] -rotate-90 pointer-events-none">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2 C9 2 2 9 2 16" stroke="#D4AF37" strokeWidth="1.2" className="filigree-path" />
        <path d="M12 5 C8 5 5 8 5 12" stroke="#D4AF37" strokeWidth="0.8" className="filigree-path" />
        <circle cx="4" cy="4" r="1.5" fill="#D4AF37" className="filigree-path" />
      </svg>
    </div>

    <div className="relative z-10 flex items-center justify-center w-full h-full">
      {children}
    </div>
  </div>
);

const MoonPhaseIcon = ({ phase }: { phase: string }) => {
  const dark = "url(#moon-dark)";
  const light = "url(#moon-light)";
  
  const getD = () => {
    switch (phase) {
      case 'New Moon': return "";
      case 'Waxing Crescent': return "M 10 1 A 9 9 0 0 1 10 19 A 5 9 0 0 0 10 1 Z";
      case 'First Quarter': return "M 10 1 A 9 9 0 0 1 10 19 L 10 1 Z";
      case 'Waxing Gibbous': return "M 10 1 A 9 9 0 0 1 10 19 A 5 9 0 0 1 10 1 Z";
      case 'Waning Gibbous': return "M 10 1 A 9 9 0 0 0 10 19 A 5 9 0 0 0 10 1 Z";
      case 'Third Quarter': return "M 10 1 A 9 9 0 0 0 10 19 L 10 1 Z";
      case 'Waning Crescent': return "M 10 1 A 9 9 0 0 0 10 19 A 5 9 0 0 1 10 1 Z";
      default: return "";
    }
  };

  const d = getD();
  const isFull = phase === 'Full Moon';
  const isNew = phase === 'New Moon';

  return (
    <svg width="1.6em" height="1.6em" viewBox="0 0 20 20" className="inline-block drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] ml-1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="moon-light" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f3f4f6" />
          <stop offset="75%" stopColor="#d1d5db" />
          <stop offset="100%" stopColor="#9ca3af" />
        </radialGradient>
        <radialGradient id="moon-dark" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#030712" />
        </radialGradient>
        
        {/* Hand-crafted realistic lunar maria (the dark spots of the moon) */}
        <pattern id="maria" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
           <circle cx="6" cy="6" r="2.5" fill="#000" opacity="0.3" filter="blur(0.8px)"/>
           <circle cx="14" cy="8" r="4.5" fill="#000" opacity="0.25" filter="blur(1.2px)"/>
           <circle cx="8" cy="13" r="3" fill="#000" opacity="0.28" filter="blur(1px)"/>
           <circle cx="12" cy="14" r="3.5" fill="#000" opacity="0.2" filter="blur(1.2px)"/>
           <circle cx="16" cy="4" r="1.5" fill="#000" opacity="0.2" filter="blur(0.5px)"/>
           <circle cx="4" cy="11" r="1.5" fill="#000" opacity="0.25" filter="blur(0.5px)"/>
           {/* Add a tiny bright crater (Tycho) */}
           <circle cx="9" cy="16" r="0.8" fill="#fff" opacity="0.7" filter="blur(0.2px)"/>
           <circle cx="13" cy="6" r="0.6" fill="#fff" opacity="0.6" filter="blur(0.2px)"/>
        </pattern>

        <mask id="phase-mask">
          {isFull ? <circle cx="10" cy="10" r="9" fill="white" /> : (d ? <path d={d} fill="white" /> : null)}
        </mask>
      </defs>
      
      {/* Base dark moon */}
      <circle cx="10" cy="10" r="9" fill={dark} />

      {/* Lit Moon Phase */}
      {!isNew && (
        <g>
          {isFull ? (
             <circle cx="10" cy="10" r="9" fill={light} />
          ) : (
             <path d={d} fill={light} />
          )}
          
          {/* Apply the realistic craters/maria over the top of the lit mask! */}
          <circle cx="10" cy="10" r="9" fill="url(#maria)" mask="url(#phase-mask)" />
          
          {/* Inner spherical highlight */}
          {isFull ? (
            <circle cx="10" cy="10" r="9" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="0.5" mask="url(#phase-mask)" />
          ) : (
            <path d={d} fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="0.5" mask="url(#phase-mask)" />
          )}
        </g>
      )}

      {/* Universal outer sharp rim */}
      <circle cx="10" cy="10" r="9" fill="none" stroke="#000000" strokeOpacity="0.5" strokeWidth="0.8" />
    </svg>
  );
};

const QuoteFiligree = ({ flipped = false }: { flipped?: boolean }) => {
  const id = flipped ? "quote-fade-r" : "quote-fade-l";
  return (
    <svg 
      width="60" 
      height="15" 
      viewBox="0 0 60 15" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`text-[#D4AF37]/60 dark:text-[#C5A059]/60 flex-shrink-0 ${flipped ? 'scale-x-[-1]' : ''}`}
    >
      <path d="M0 7.5 L35 7.5" stroke={`url(#${id})`} strokeWidth="1" />
      <path d="M 35 7.5 C 35 7.5, 38 2, 45 2 C 49 2, 53 5, 49 7.5 C 53 10, 49 13, 45 13 C 38 13, 35 7.5, 35 7.5 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M 54 7.5 L 57 5.5 L 60 7.5 L 57 9.5 Z" fill="currentColor" />
      <path d="M 49 7.5 L 54 7.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="45" cy="5" r="0.5" fill="currentColor" />
      <circle cx="45" cy="10" r="0.5" fill="currentColor" />
      <defs>
        <linearGradient id={id} x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const GOTHIC_QUOTES = [
  "Arise, Nightwalker, and conquer the trials of this night.",
  "No crown was ever won through idle hands.",
  "Steel thy will; even the darkest dungeon hath an exit.",
  "Fear not the abyss, for thy resolve is forged in iron.",
  "A noble destiny awaiteth him who dareth to begin.",
  "Slay thy doubt, and no beast shall stand before thee.",
  "Every great legend began with a single strike of the blade.",
  "Stand firm, Novice, for the kingdom of thy future calleth.",
  "Let thy deeds tonight echo through the halls of history.",
  "Rest if thou must, but yield thy quest to none.",
  "Draw thy blade, for destiny waiteth upon no man.",
  "Even the grandest castle was built stone by weary stone.",
  "Tremble not before the beast; thy courage is thy sharpest shield.",
  "Toil in silence, and let thy victory sound the horns of triumph.",
  "The path of glory is paved by those who dare not falter.",
  "Cast away thy fear, for valor maketh a commoner a king.",
  "Hold the line against despair, and the morrow shall be thine.",
  "Greatness is not bestowed by fate—it is forged in battle.",
  "Let no task be left unfinished while breath remaineth in thy lungs.",
  "Master the shadows, and light the hearth of thy kingdom.",
  "A warrior’s true power lieth not in his armor, but in his resolve.",
  "Claim this night, Nightwalker, ere the dawn claimeth thee.",
  "Heed the call of glory, for honor is won before the sun doth rise.",
  "The forge testeth the iron; this night testeth thy soul.",
  "Sheathe not thy purpose until the final deed is done.",
  "A steadfast heart will breach walls that no siege engine can break.",
  "March forth, warrior, and let thy labor silence every foe.",
  "No beast of the abyss is slain by intentions left unspoken.",
  "Stand tall, for the realm of tomorrow is wrought by thy hands tonight.",
  "Let thy resolve burn brighter than the darkest dungeon fire.",
  "Tread boldly, champion; cowardice never carved a kingdom.",
  "Small deeds, wrought with honor, build an unshakeable throne.",
  "Bear thy burdens like armor, and wear thy scars as gold.",
  "The hour is upon thee—strike, and claim thy rightful renown.",
  "A sharp mind and a steady hand can fell the mightiest titan.",
  "Look not behind thee, Nightwalker; thy kingdom lieth straight ahead.",
  "Even the fiercest storm must break against the fortress of thy will.",
  "Let thy sword be swift and thy discipline unyielding.",
  "No banner was ever raised without blood and valor.",
  "Kindle the flame of purpose, and master the shadows.",
  "The crown awaiteth the brave, not those who wait for easy nights.",
  "Conquer the hour before thee, and the empire shall follow.",
  "Fall seven times upon the battlefield; rise eight times with shield in hand.",
  "A true sovereign mastereth himself ere he seeketh to rule the realm.",
  "Leave thy mark upon this earth, that bards may sing of thy labor.",
  "To arms, noble soul—thy greatest triumphs lie yet unwritten."
];


export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [profile, setProfile] = useState<any>(null);
  
  const randomQuote = useMemo(() => GOTHIC_QUOTES[Math.floor(Math.random() * GOTHIC_QUOTES.length)], []);


  useEffect(() => {
    api.get('/auth/me')
      .then(res => setProfile(res.data.user))
      .catch(console.error);
  }, []);

  const char = profile?.character || {};
  const currency = profile?.currency || {};

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    if (hour < 21) return 'Good evening';
    return 'Good night';
  };

  const getMoonPhase = () => {
    const LUNAR_MONTH = 29.53058867;
    const newMoon = new Date('2000-01-06T12:24:01Z');
    const diff = (new Date().getTime() - newMoon.getTime()) / (1000 * 60 * 60 * 24);
    const cycle = diff % LUNAR_MONTH;
    
    let phase = '';
    if (cycle < 1.84 || cycle > 27.68) phase = 'New Moon';
    else if (cycle < 5.53) phase = 'Waxing Crescent';
    else if (cycle < 9.22) phase = 'First Quarter';
    else if (cycle < 12.91) phase = 'Waxing Gibbous';
    else if (cycle < 16.61) phase = 'Full Moon';
    else if (cycle < 20.30) phase = 'Waning Gibbous';
    else if (cycle < 23.99) phase = 'Third Quarter';
    else phase = 'Waning Crescent';

    return (
      <span className="flex items-center gap-1.5">
        <span>{phase}</span>
        <MoonPhaseIcon phase={phase} />
      </span>
    );
  };

  const navItems = [
    { icon: Home, label: 'Sanctum', path: '/dashboard' },
    { icon: BookOpen, label: 'Questbook', path: '/dashboard/questbook' },
    { icon: Scroll, label: 'Grimoire', path: '/grimoire' },
    { icon: Droplet, label: 'Bloodline', path: '/bloodline' },
    { icon: Store, label: 'Night Market', path: '/market' },
    { icon: Archive, label: 'Vault', path: '/vault' },
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A] dark:bg-[#0c0608] text-[#F7F3E9] dark:text-[#EEEAD7] font-sans selection:bg-[#D4AF37] dark:bg-[#6D0808] selection:text-[#D4AF37] dark:text-[#F5D77F] flex flex-col md:flex-row">
      {/* Desktop Sidebar (The Gothic Rail) */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-72 bg-[#1B263B]/95 dark:bg-[#120305]/95 backdrop-blur-xl z-50 border-r border-[#415A77] dark:border-[#D4AF37]/30 shadow-[4px_0_24px_rgba(0,0,0,0.5)] dark:shadow-[6px_0_32px_rgba(0,0,0,0.9)] overflow-hidden">
        <div className="h-20 px-4 flex items-center gap-3 bg-[#0D1B2A]/50 dark:bg-[#1e0306] border-b border-[#415A77] dark:border-[#D4AF37]/30 flex-shrink-0 shadow-inner">
          <div className="w-10 h-10 rounded-full bg-[#415A77] dark:bg-[#3d0303] border border-[#415A77] dark:border-[#F5D77F] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.7)] text-[#D4AF37] dark:text-[#F5D77F]">
            <span className="font-serif font-bold text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] tracking-[0.22em] flex items-center gap-1.5">
              BATHABIT <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] dark:bg-[#F5D77F] shadow-[0_0_8px_#D4AF37]"></span>
            </span>
            <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] tracking-[0.25em] uppercase">Gothic Nocturnal Codex</span>
          </div>
        </div>

        <div className="flex-1 px-3 py-2 flex flex-col">
          <div className="px-3 py-3 mb-3 font-serif text-sm font-bold text-[#D4AF37] dark:text-[#C5A059] uppercase tracking-[0.2em] flex items-center justify-center gap-2 border-b border-[#415A77]/50 dark:border-[#D4AF37]/30 bg-[#0D1B2A]/30 dark:bg-[#060102]/30 shadow-sm rounded-t">
            <span>Sanctuaries</span>
            <span className="text-sm text-[#D4AF37] dark:text-[#D4AF37]/70">✦</span>
          </div>
          <nav className="space-y-1 flex-1 flex flex-col">
            {SANCTUARIES.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/dashboard'}
                className={({ isActive }) =>
                  `group flex-1 flex flex-col items-center justify-center gap-1 px-2 py-1.5 rounded transition-all relative ${isActive ? "border border-[#415A77] dark:border-[#D4AF37]/70 bg-gradient-to-b from-[#1B263B] to-[#415A77] dark:from-[#6D0808] dark:to-[#3a0404] text-[#F7F3E9] dark:text-[#EEEAD7] font-semibold shadow-[0_0_20px_rgba(109,8,8,0.75)]" : "text-[#F7F3E9]/70 dark:text-[#8d9685] hover:text-[#D4AF37] dark:hover:text-[#F5D77F] hover:bg-[#1B263B] dark:hover:bg-[#260303] hover:border hover:border-[#415A77] dark:hover:border-[#D4AF37]/30"}`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={`w-5 h-5 ${isActive ? "text-[#D4AF37] dark:text-[#F5D77F]" : "text-[#F7F3E9]/70 dark:text-[#8d9685] group-hover:text-[#D4AF37] dark:group-hover:text-[#F5D77F]"}`} />
                    <span className="font-mono text-xs uppercase tracking-wider text-center">{item.name}</span>
                    {isActive && <span className="absolute top-1 right-2 w-2 h-2 rounded-full bg-[#F5D77F] shadow-[0_0_10px_#D4AF37]"></span>}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="px-3 py-2 border-t border-[#415A77] dark:border-[#3a0404]">
          <div className="px-3 pb-2 font-mono text-[11px] text-[#D4AF37] dark:text-[#C5A059]/80 uppercase tracking-[0.25em] flex items-center justify-between">
            <span>Oracle & Chambers</span>
          </div>
          <nav className="space-y-1">
            {ORACLES.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-4 py-2 rounded transition-all ${isActive ? "border border-[#415A77] dark:border-[#D4AF37]/70 bg-gradient-to-r from-[#1B263B] to-[#415A77] dark:from-[#6D0808] dark:to-[#3a0404] text-[#F7F3E9] dark:text-[#EEEAD7] font-semibold shadow-[0_0_20px_rgba(109,8,8,0.75)]" : "text-[#F7F3E9]/70 dark:text-[#8d9685] hover:text-[#D4AF37] dark:hover:text-[#F5D77F] hover:bg-[#1B263B] dark:hover:bg-[#260303] hover:border hover:border-[#415A77] dark:hover:border-[#D4AF37]/30"}`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${isActive ? "text-[#D4AF37] dark:text-[#F5D77F]" : "text-[#F7F3E9]/70 dark:text-[#8d9685] group-hover:text-[#D4AF37] dark:group-hover:text-[#F5D77F]"}`} />
                      <span className="font-mono text-sm uppercase tracking-wider">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="bg-[#D4AF37]/20 dark:bg-[#9e1313] text-[#D4AF37] dark:text-white text-[10px] px-1.5 py-0.5 rounded font-mono border border-[#D4AF37]/30">
                          {item.badge}
                        </span>
                      )}
                      {item.badgeIcon && (
                        <span className="text-[#D4AF37]"><MessageSquare size={10} /></span>
                      )}
                    </div>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:pl-72 pb-20 md:pb-0 min-h-screen">
        {/* Universal Top Header */}
        <header className="hidden md:flex fixed top-0 left-72 right-0 h-20 bg-[#0D1B2A]/92 dark:bg-[#140406]/92 backdrop-blur-xl z-40 px-8 items-center justify-between border-b border-[#415A77] dark:border-[#D4AF37]/35 shadow-[0_4px_32px_rgba(0,0,0,0.85)]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] tracking-wide">
                  {getGreeting()}
                </span>
                <span className="font-mono text-[11px] text-[#D4AF37] dark:text-[#C5A059] tracking-widest uppercase mt-0.5">
                  {getMoonPhase()}
                </span>
              </div>
              <FiligreeFrame className="h-[2.75rem] px-8 whitespace-nowrap">
                <span className="font-serif text-[14px] text-[#D4AF37] dark:text-[#F5D77F] font-bold tracking-wider">Rank {char.level || 1}</span>
                <span className="font-serif text-[14px] text-[#D4AF37]/60 mx-2 leading-none">:</span>
                <span className="font-serif text-[14px] text-[#D4AF37] dark:text-[#F5D77F] font-bold tracking-wider">{char.currentTitle || 'Novice'}</span>
              </FiligreeFrame>
            </div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 max-w-[50%] hidden xl:flex items-center justify-center pointer-events-none gap-4">
            <QuoteFiligree />
            <span className="font-serif text-[16px] text-[#F7F3E9]/90 dark:text-[#F5D77F]/90 text-center truncate drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide">
              {randomQuote}
            </span>
            <QuoteFiligree flipped />
          </div>

          <div className="flex items-center gap-6">
            <FiligreeFrame className="h-[2.75rem] px-6 whitespace-nowrap">
              <span className="font-serif text-[14px] text-[#D4AF37] drop-shadow-[0_0_6px_rgba(212,175,55,1)] leading-none mr-2">✦</span>
              <span className="font-serif text-[15px] font-bold text-[#D4AF37] dark:text-[#F5D77F] tracking-wider leading-none mr-2">{currency?.balance || 0}</span>
              <span className="font-serif text-[10px] text-[#D4AF37]/80 uppercase font-bold tracking-widest leading-none">Crowns</span>
            </FiligreeFrame>
            
            <button onClick={toggleTheme} className="group hover:scale-[1.03] active:scale-95 transition-transform">
              <FiligreeFrame className="h-[2.75rem] px-8 whitespace-nowrap">
                <span className="font-serif text-[12px] text-[#D4AF37] dark:text-[#F5D77F] font-bold tracking-widest uppercase text-center leading-none">
                  {theme === 'dark' ? 'Crimson Realm' : 'Twilight Realm'}
                </span>
              </FiligreeFrame>
            </button>
          </div>
        </header>

        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-[#0D1B2A] dark:bg-[#120305] border-t border-[#415A77] dark:border-[#D4AF37]/30 flex justify-around p-3 z-50 shadow-2xl">
        {navItems.slice(0, 5).map(item => (
          <Link key={item.path} to={item.path} className={cn("flex flex-col items-center gap-1", {
            "text-[#D4AF37] dark:text-[#F5D77F]": location.pathname === item.path,
            "text-[#F7F3E9]/70 dark:text-[#8d9685]": location.pathname !== item.path
          })}>
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
      </nav>
    </div>
  );
}

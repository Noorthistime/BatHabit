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
    
    if (cycle < 1.84 || cycle > 27.68) return 'New Moon';
    if (cycle < 5.53) return 'Waxing Crescent';
    if (cycle < 9.22) return 'First Quarter';
    if (cycle < 12.91) return 'Waxing Gibbous';
    if (cycle < 16.61) return 'Full Moon';
    if (cycle < 20.30) return 'Waning Gibbous';
    if (cycle < 23.99) return 'Third Quarter';
    return 'Waning Crescent';
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
              <div className="flex items-baseline justify-center gap-2.5 px-6 py-2 rounded-lg bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] dark:from-[#3a0404] dark:to-[#1a0101] border border-[#D4AF37]/50 dark:border-[#D4AF37]/80 shadow-[inset_0_0_12px_rgba(212,175,55,0.15),_0_4px_12px_rgba(0,0,0,0.5)] dark:shadow-[inset_0_0_12px_rgba(212,175,55,0.3),_0_0_15px_rgba(212,175,55,0.5)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
                <span className="font-mono text-xs text-[#D4AF37] dark:text-[#D4AF37] uppercase tracking-widest font-bold relative z-10">Rank {char.level || 1}</span>
                <span className="text-[#D4AF37]/60 dark:text-[#D4AF37]/60 font-bold relative z-10">:</span>
                <span className="font-serif text-[15px] text-[#F7F3E9] dark:text-[#F5D77F] font-bold tracking-wider relative z-10">{char.currentTitle || 'Novice'}</span>
              </div>
            </div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 max-w-[40%] hidden xl:flex items-center justify-center pointer-events-none">
            <span className="font-serif text-[16px] text-[#F7F3E9]/90 dark:text-[#F5D77F]/90 italic text-center truncate drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide">
              "{randomQuote}"
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D1B2A] dark:bg-gradient-to-r dark:from-[#280406] dark:to-[#140203] border border-[#415A77] dark:border-[#D4AF37]/60 shadow-[0_0_18px_rgba(212,175,55,0.3)]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#947014] via-[#F5D77F] to-[#D4AF37] flex items-center justify-center text-[#0c0608] font-bold text-xs shadow-md border border-[#FFF5C0]">
                <span className="font-serif">✦</span>
              </div>
              <span className="font-serif text-base font-bold text-[#D4AF37] dark:text-[#F5D77F] tracking-wider">{currency?.balance || 0}</span>
              <span className="font-mono text-[10px] text-[#D4AF37] dark:text-[#C5A059] uppercase font-bold tracking-widest">Crowns</span>
            </div>
            <div className="flex items-center gap-3 pl-3 border-l border-[#415A77] dark:border-[#D4AF37]/30">
              <button onClick={toggleTheme} className="px-4 py-1.5 rounded-full bg-[#1B263B] dark:bg-[#3d0303] flex items-center justify-center border-2 border-[#415A77] dark:border-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.6)] text-[#D4AF37] dark:text-[#F5D77F] hover:scale-105 transition-transform font-serif text-[11px] font-bold tracking-widest uppercase">
                {theme === 'dark' ? 'Crimson Realm' : 'Twilight Realm'}
              </button>
            </div>
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

import React from 'react';
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

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

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

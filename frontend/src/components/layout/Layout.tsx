import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Crosshair, Store, User, Zap, Flame, Shield, History, Map } from 'lucide-react';
import { cn } from '../ui/Button';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Sanctum', path: '/dashboard' },
    { icon: Book, label: 'Questbook', path: '/quests' },
    { icon: User, label: 'Grimoire', path: '/profile' },
    { icon: Zap, label: 'Ascension', path: '/ascension' },
    { icon: Flame, label: 'Bloodline', path: '/bloodline' },
    { icon: Shield, label: 'Treasury', path: '/treasury' },
    { icon: Store, label: 'Night Market', path: '/shop' },
    { icon: Crosshair, label: 'Vault', path: '/vault' },
    { icon: History, label: 'Hall of Deeds', path: '/deeds' },
    { icon: Map, label: 'Chronicle', path: '/chronicle' },
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A] dark:bg-[#0c0608] text-[#F7F3E9] dark:text-[#EEEAD7] font-sans selection:bg-[#D4AF37] dark:bg-[#6D0808] selection:text-[#D4AF37] dark:text-[#F5D77F] flex flex-col md:flex-row">
      {/* Desktop Sidebar (The Gothic Rail) */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full w-72 bg-[#1B263B]/95 dark:bg-[#120305]/95 backdrop-blur-xl z-50 border-r border-[#415A77] dark:border-[#D4AF37]/30 shadow-[4px_0_24px_rgba(0,0,0,0.5)] dark:shadow-[6px_0_32px_rgba(0,0,0,0.9)] overflow-y-auto">
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

        <div className="flex-1 px-3 py-4">
          <div className="px-3 pb-2 font-mono text-[11px] text-[#D4AF37] dark:text-[#C5A059]/80 uppercase tracking-[0.25em] flex items-center justify-between">
            <span>Sanctuaries</span>
            <span className="text-xs text-[#D4AF37] dark:text-[#D4AF37]/50">✦</span>
          </div>
          <nav className="space-y-1.5">
            {navItems.map(item => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={cn("group flex items-center gap-3 px-3 py-2 rounded transition-all", 
                  active ? "justify-between border border-[#415A77] dark:border-[#D4AF37]/70 bg-gradient-to-r from-[#1B263B] to-[#415A77] dark:from-[#6D0808] dark:to-[#3a0404] text-[#F7F3E9] dark:text-[#EEEAD7] font-semibold shadow-[0_0_20px_rgba(109,8,8,0.75)]" 
                         : "text-[#F7F3E9]/70 dark:text-[#8d9685] hover:text-[#D4AF37] dark:hover:text-[#F5D77F] hover:bg-[#1B263B] dark:hover:bg-[#260303] hover:border hover:border-[#415A77] dark:hover:border-[#D4AF37]/30"
                )}>
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("w-5 h-5", active ? "text-[#D4AF37] dark:text-[#F5D77F]" : "text-[#F7F3E9]/70 dark:text-[#8d9685] group-hover:text-[#D4AF37] dark:group-hover:text-[#F5D77F]")} />
                    <span className="font-mono text-xs uppercase tracking-wider">{item.label}</span>
                  </div>
                  {active && <span className="w-2 h-2 rounded-full bg-[#F5D77F] shadow-[0_0_10px_#D4AF37]"></span>}
                </Link>
              );
            })}
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

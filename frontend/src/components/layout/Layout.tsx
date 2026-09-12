import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Book, Crosshair, Store, User } from 'lucide-react';
import { cn } from '../ui/Button';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Sanctum', path: '/dashboard' },
    { icon: Book, label: 'Questbook', path: '/quests' },
    { icon: Store, label: 'Market', path: '/shop' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Desktop Rail */}
      <nav className="hidden md:flex flex-col w-20 lg:w-24 bg-card border-r border-muted items-center py-8 gap-8 shadow-xl z-10">
        <div className="font-bold text-2xl text-primary mb-4 tracking-widest font-serif">BH</div>
        {navItems.map(item => (
          <Link key={item.path} to={item.path} className={cn("flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg", {
            "text-primary bg-primary/10": location.pathname === item.path
          })}>
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] uppercase tracking-wider font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0 overflow-y-auto">
        {children}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 w-full bg-card border-t border-muted flex justify-around p-3 z-50 shadow-2xl">
        {navItems.map(item => (
          <Link key={item.path} to={item.path} className={cn("flex flex-col items-center gap-1 text-muted-foreground", {
            "text-primary": location.pathname === item.path
          })}>
            <item.icon className="w-6 h-6" />
          </Link>
        ))}
      </nav>
    </div>
  );
}

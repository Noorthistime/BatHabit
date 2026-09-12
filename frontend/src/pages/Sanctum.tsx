import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { User, Target, Flame, Coins, Shield, Book, Brain, Eye, Heart } from 'lucide-react';

export function Sanctum() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get('/auth/me').then(res => setProfile(res.data)).catch(console.error);
  }, []);

  if (!profile) return <div className="p-8 text-muted-foreground animate-pulse">Summoning data...</div>;

  const char = profile.character;
  const attr = profile.attribute;
  const streak = profile.streak;
  const currency = profile.currency;

  const calculateRequiredXp = (level: number) => Math.floor(100 * Math.pow(level, 1.5));
  const currentLevelXpRequired = calculateRequiredXp(char.level);
  const nextLevelXpRequired = calculateRequiredXp(char.level + 1);
  const xpIntoLevel = char.totalXp - currentLevelXpRequired;
  const xpNeededForNext = nextLevelXpRequired - currentLevelXpRequired;
  const progressPercent = Math.min(100, Math.max(0, (xpIntoLevel / xpNeededForNext) * 100));

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary">The Sanctum</h1>
          <p className="text-muted-foreground mt-2">Welcome back to the shadows, {char.currentTitle || 'Novice'}.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Character Card */}
        <Card className="md:col-span-2 border-primary/20 shadow-lg shadow-primary/5 bg-card/80 backdrop-blur">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl font-serif">
              <User className="text-primary" /> Avatar
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary overflow-hidden">
                {char.avatarUrl ? (
                  <img src={char.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <User size={48} className="text-primary" />
                )}
              </div>
              <div className="flex-1 w-full space-y-4">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-2xl font-bold">Level {char.level}</span>
                    <span className="text-sm text-muted-foreground">{char.totalXp} XP Total</span>
                  </div>
                  <div className="h-4 bg-background rounded-full overflow-hidden border border-muted">
                    <div 
                      className="h-full bg-primary transition-all duration-1000 ease-out" 
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                  <div className="text-right text-xs text-muted-foreground mt-1">
                    {Math.floor(xpIntoLevel)} / {Math.floor(xpNeededForNext)} XP to Level {char.level + 1}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Column */}
        <div className="space-y-6">
          <Card className="border-primary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-4 rounded-full bg-orange-950/50 text-orange-500">
                <Flame size={32} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Current Streak</p>
                <p className="text-3xl font-bold">{streak?.currentStreak || 0} Days</p>
                <p className="text-xs text-muted-foreground">Best: {streak?.bestStreak || 0}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-4 rounded-full bg-yellow-950/50 text-yellow-500">
                <Coins size={32} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider">Treasury</p>
                <p className="text-3xl font-bold">{currency?.balance || 0}</p>
                <p className="text-xs text-muted-foreground">Total Earned: {currency?.totalEarned || 0}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Attributes Matrix */}
        <Card className="md:col-span-3 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-serif">The Grimoire Attributes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { label: 'Strength', icon: Shield, val: attr.strengthXp, color: 'text-red-500' },
                { label: 'Intellect', icon: Brain, val: attr.intellectXp, color: 'text-blue-500' },
                { label: 'Wisdom', icon: Book, val: attr.wisdomXp, color: 'text-purple-500' },
                { label: 'Focus', icon: Eye, val: attr.focusXp, color: 'text-cyan-500' },
                { label: 'Vitality', icon: Heart, val: attr.vitalityXp, color: 'text-green-500' },
              ].map((a, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-background rounded-xl border border-muted text-center hover:border-primary/50 transition-colors">
                  <a.icon className={`mb-2 ${a.color}`} size={28} />
                  <span className="font-bold uppercase tracking-wider text-sm">{a.label}</span>
                  <span className="text-2xl font-serif mt-1">{a.val}</span>
                  <span className="text-xs text-muted-foreground">XP</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

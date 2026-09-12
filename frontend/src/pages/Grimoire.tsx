import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { User, Shield, Brain, Book, Eye, Heart, Flame } from 'lucide-react';

export function Grimoire() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get('/auth/me').then(res => setProfile(res.data)).catch(console.error);
  }, []);

  if (!profile) return <div className="p-8 text-muted-foreground animate-pulse">Consulting the ancient texts...</div>;

  const { character, attribute, streak } = profile;

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary">The Grimoire</h1>
        <p className="text-muted-foreground mt-2">Your attributes, lineage, and bloodline.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border-primary/20 bg-card/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <User className="text-primary" /> Identity
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary overflow-hidden shadow-inner">
              {character.avatarUrl ? (
                <img src={character.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <User size={64} className="text-primary opacity-80" />
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary">{character.currentTitle || 'Novice'}</h2>
              <p className="text-xl text-foreground font-serif">Level {character.level}</p>
              <p className="text-sm text-muted-foreground mt-2 tracking-widest uppercase">{character.totalXp} Total XP</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-card/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl flex items-center gap-2">
              <Flame className="text-orange-500" /> Bloodline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-background/50 rounded-lg border border-muted shadow-sm">
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Current Streak</p>
                <p className="text-4xl font-serif text-orange-500 mt-2">{streak?.currentStreak || 0}</p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg border border-muted shadow-sm">
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Best Streak</p>
                <p className="text-4xl font-serif text-primary mt-2">{streak?.bestStreak || 0}</p>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4 italic">
              Last Activity: {streak?.lastActivityDate ? new Date(streak.lastActivityDate).toLocaleDateString() : 'Never'}
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="font-serif text-2xl text-primary">Attributes Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { label: 'Strength', icon: Shield, val: attribute.strengthXp, color: 'bg-red-500', text: 'text-red-500' },
                { label: 'Intellect', icon: Brain, val: attribute.intellectXp, color: 'bg-blue-500', text: 'text-blue-500' },
                { label: 'Wisdom', icon: Book, val: attribute.wisdomXp, color: 'bg-purple-500', text: 'text-purple-500' },
                { label: 'Focus', icon: Eye, val: attribute.focusXp, color: 'bg-cyan-500', text: 'text-cyan-500' },
                { label: 'Vitality', icon: Heart, val: attribute.vitalityXp, color: 'bg-green-500', text: 'text-green-500' },
              ].map((a, i) => {
                const percentage = character.totalXp > 0 ? (a.val / character.totalXp) * 100 : 0;
                
                return (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`p-3 rounded-lg bg-background border border-muted ${a.text} group-hover:border-primary/50 transition-colors`}>
                      <a.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-2">
                        <span className="font-bold tracking-widest uppercase text-sm">{a.label}</span>
                        <span className="text-sm font-serif">{a.val} XP <span className="text-muted-foreground text-xs">({percentage.toFixed(1)}%)</span></span>
                      </div>
                      <div className="h-2 w-full bg-background rounded-full border border-muted overflow-hidden">
                        <div 
                          className={`h-full ${a.color} opacity-80 transition-all duration-1000 ease-out`} 
                          style={{ width: `${percentage}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

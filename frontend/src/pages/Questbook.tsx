import React, { useEffect, useState } from 'react';
import { api } from '../api';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { EventUI } from '../components/ui/EventUI';

export function Questbook() {
  const [quests, setQuests] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('GENERAL');
  const [difficulty, setDifficulty] = useState('EASY');
  const [error, setError] = useState('');
  const [activeEvent, setActiveEvent] = useState<{type: 'QUEST_COMPLETE' | 'LEVEL_UP', data: any} | null>(null);

  const fetchQuests = async () => {
    try {
      const res = await api.get('/quests');
      setQuests(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchQuests();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await api.post('/quests', { title, category, difficulty });
      setTitle('');
      fetchQuests();
    } catch (e: any) {
      setError(e.response?.data?.error || 'Failed to create quest');
    }
  };

  const handleComplete = async (id: string) => {
    try {
      const res = await api.post(`/quests/${id}/complete`);
      fetchQuests();
      
      const { completion, leveledUp, character } = res.data;
      if (leveledUp) {
        setActiveEvent({ type: 'LEVEL_UP', data: { level: character.level } });
      } else {
        setActiveEvent({ type: 'QUEST_COMPLETE', data: completion });
      }
      
    } catch (e: any) {
      alert(e.response?.data?.error || 'Failed to complete quest');
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto space-y-8">
      <header>
        <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-primary">The Questbook</h1>
        <p className="text-muted-foreground mt-2">Forge your destiny and track your deeds.</p>
      </header>

      <Card className="border-primary/20 bg-card/80 backdrop-blur shadow-lg shadow-primary/5">
        <CardHeader>
          <CardTitle className="font-serif">Forge a Quest</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreate} className="flex flex-col md:flex-row gap-4">
            <Input 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              placeholder="Quest Title..." 
              required 
              className="flex-1"
            />
            <select 
              value={category} 
              onChange={e => setCategory(e.target.value)}
              className="bg-background border border-muted rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <option value="GENERAL">General</option>
              <option value="STRENGTH">Strength</option>
              <option value="INTELLECT">Intellect</option>
              <option value="WISDOM">Wisdom</option>
              <option value="FOCUS">Focus</option>
              <option value="VITALITY">Vitality</option>
            </select>
            <select 
              value={difficulty} 
              onChange={e => setDifficulty(e.target.value)}
              className="bg-background border border-muted rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <option value="EASY">Easy</option>
              <option value="MEDIUM">Medium</option>
              <option value="HARD">Hard</option>
            </select>
            <Button type="submit">Forge</Button>
          </form>
          {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h2 className="text-2xl font-serif text-primary">Active Quests</h2>
        {quests.filter(q => q.status !== 'COMPLETED').map(q => (
          <Card key={q.id} className="border-muted hover:border-primary/50 transition-colors shadow-sm">
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg">{q.title}</h3>
                <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                  <span className="uppercase tracking-wider font-semibold text-primary">{q.category}</span>
                  <span>•</span>
                  <span className="uppercase tracking-wider">{q.difficulty}</span>
                </div>
              </div>
              <Button onClick={() => handleComplete(q.id)} variant="outline" className="border-primary text-primary hover:bg-primary/20">
                Complete
              </Button>
            </CardContent>
          </Card>
        ))}
        {quests.filter(q => q.status !== 'COMPLETED').length === 0 && (
          <p className="text-muted-foreground italic">Your active quest list is empty.</p>
        )}

        <h2 className="text-2xl font-serif mt-12 text-muted-foreground">Completed Deeds</h2>
        <div className="grid gap-3">
          {quests.filter(q => q.status === 'COMPLETED').map(q => (
            <Card key={q.id} className="border-muted/50 opacity-60 bg-muted/10">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg line-through text-muted-foreground">{q.title}</h3>
                  <div className="flex gap-2 text-xs text-muted-foreground mt-1">
                    <span className="uppercase tracking-wider">{q.category}</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">{q.difficulty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {activeEvent && (
        <EventUI 
          type={activeEvent.type} 
          data={activeEvent.data} 
          onClose={() => setActiveEvent(null)} 
        />
      )}
    </div>
  );
}

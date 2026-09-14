import React, { useState } from 'react';
import { Flame, Calendar, CheckCircle2, TrendingUp, Target, Clock } from 'lucide-react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Generate mock calendar data (last 365 days)
function generateCalendarData() {
  const data: { date: Date; count: number }[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const rand = Math.random();
    data.push({ date: d, count: rand > 0.45 ? Math.floor(Math.random() * 5) + 1 : 0 });
  }
  return data;
}

const calendarData = generateCalendarData();

function getColor(count: number) {
  if (count === 0) return 'rgba(212,175,55,0.06)';
  if (count === 1) return 'rgba(109,8,8,0.5)';
  if (count === 2) return 'rgba(109,8,8,0.7)';
  if (count === 3) return 'rgba(109,8,8,0.9)';
  return '#6D0808';
}

const RECENT_ACTIVITY = [
  { date: 'Today', quest: 'Deep Focus: 5km Dawn Run', xp: '+80 XP', crowns: '+25 Crowns', discipline: 'VIT' },
  { date: 'Yesterday', quest: '10 Minutes of React Architecture', xp: '+40 XP', crowns: '+12 Crowns', discipline: 'INT' },
  { date: 'Sep 11', quest: 'Cold Shower Protocol', xp: '+30 XP', crowns: '+10 Crowns', discipline: 'STR' },
  { date: 'Sep 10', quest: 'Meditation at Dusk', xp: '+50 XP', crowns: '+15 Crowns', discipline: 'FOC' },
  { date: 'Sep 9', quest: 'Journal of Shadows', xp: '+35 XP', crowns: '+12 Crowns', discipline: 'WIS' },
];

const DISCIPLINE_COLORS: Record<string, string> = {
  STR: '#ff6b6b', INT: '#D4AF37', VIT: '#6ee7b7', FOC: '#818cf8', WIS: '#fbbf24',
};

export function Bloodline() {
  const [hoverDay, setHoverDay] = useState<{ date: Date; count: number } | null>(null);
  const totalCompleted = calendarData.filter(d => d.count > 0).length;
  const consistency = Math.round((totalCompleted / 365) * 100);

  // Group calendar by weeks
  const weeks: typeof calendarData[number][][] = [];
  let week: typeof calendarData[number][] = [];
  calendarData.forEach((day, i) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });
  if (week.length > 0) weeks.push(week);

  return (
    <>


      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-5 pb-4 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 relative mb-2">
          <div className="space-y-1.5">
            <span className="font-mono text-xs uppercase text-[#D4AF37] tracking-[0.3em] bg-[#415A77]/20 dark:bg-[#250101] px-2.5 py-0.5 border border-[#415A77]/40 dark:border-[#D4AF37]/35">
              Sanctum Noctis • The Bloodline
            </span>
            <h1 className="font-serif text-3xl lg:text-4xl text-[#EEEAD7] font-bold drop-shadow-md mt-1">The Bloodline</h1>
            <p className="font-sans text-sm text-[#8d9685] leading-relaxed">Your streak is your lifeblood. Every unbroken vow deepens the crimson covenant.</p>
          </div>

          {/* Big Streak Counters */}
          <div className="flex gap-4 shrink-0">
            <div
              className="px-6 py-4 text-center rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-[0_0_20px_rgba(109,8,8,0.4)]"
            >
              <div className="flex items-center gap-2 justify-center mb-1">
                <Flame size={16} className="text-orange-400" />
                <span className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest">Current</span>
              </div>
              <div className="font-mono text-4xl font-bold text-[#D4AF37]">12</div>
              <div className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest mt-0.5">Days</div>
            </div>
            <div
              className="px-6 py-4 text-center rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.5)] backdrop-blur-md border border-[#415A77]/50 dark:border-[#D4AF37]/25 shadow-md"
            >
              <div className="flex items-center gap-2 justify-center mb-1">
                <Target size={14} className="text-[#D4AF37]" />
                <span className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest">Longest</span>
              </div>
              <div className="font-mono text-4xl font-bold text-[#EEEAD7]">34</div>
              <div className="font-mono text-[9px] text-[#8d9685] uppercase tracking-widest mt-0.5">Days</div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: CheckCircle2, label: 'Total Completed', value: totalCompleted, sub: 'quests sealed', color: '#6ee7b7' },
            { icon: TrendingUp, label: 'Consistency', value: `${consistency}%`, sub: 'last 365 days', color: '#D4AF37' },
            { icon: Clock, label: 'Avg. Per Day', value: '2.4', sub: 'quests / day', color: '#818cf8' },
            { icon: Flame, label: 'Streak Bonus', value: '×1.5', sub: 'XP multiplier', color: '#ff6b6b' },
          ].map(s => (
            <div
              key={s.label}
              className="p-4 flex flex-col gap-2 rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-sm border border-[#415A77] dark:border-[#D4AF37]/25 shadow-md"
            >
              <s.icon size={14} style={{ color: s.color }} />
              <div className="font-mono text-2xl font-bold" style={{ color: s.color }}>{s.value}</div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#EEEAD7]">{s.label}</div>
                <div className="font-mono text-[9px] text-[#8d9685]">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Calendar */}
        <div
          className="p-5 flex flex-col gap-4 rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">Activity Codex</p>
              <p className="font-mono text-[9px] text-[#8d9685] mt-0.5">365-day vow chronicle</p>
            </div>
            {hoverDay && (
              <div className="font-mono text-[10px] text-[#EEEAD7] bg-[#1a0204] border border-[#D4AF37]/30 px-2 py-1">
                {hoverDay.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} — {hoverDay.count} quest{hoverDay.count !== 1 ? 's' : ''}
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-1">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      className="w-3 h-3 cursor-pointer transition-all hover:ring-1 hover:ring-[#D4AF37]/60"
                      style={{ background: getColor(day.count) }}
                      onMouseEnter={() => setHoverDay(day)}
                      onMouseLeave={() => setHoverDay(null)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] text-[#8d9685]">Less</span>
            {[0, 1, 2, 3, 4].map(c => (
              <div key={c} className="w-3 h-3" style={{ background: getColor(c) }} />
            ))}
            <span className="font-mono text-[9px] text-[#8d9685]">More</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div
          className="p-5 rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-4">Recent Completions</p>
          <div className="flex flex-col">
            {RECENT_ACTIVITY.map((a, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 border-b last:border-b-0"
                style={{ borderColor: 'rgba(212,175,55,0.12)' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-8 shrink-0"
                    style={{ background: DISCIPLINE_COLORS[a.discipline] || '#6D0808' }}
                  />
                  <div>
                    <p className="font-serif text-sm text-[#EEEAD7] font-semibold">{a.quest}</p>
                    <p className="font-mono text-[10px] text-[#8d9685]">{a.date}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-xs text-[#D4AF37]">{a.xp}</p>
                  <p className="font-mono text-[9px] text-[#8d9685]">{a.crowns}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Bloodline;

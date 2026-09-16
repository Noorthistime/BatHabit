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
  if (count === 0) return 'rgba(212, 175, 55, 0.15)';
  if (count === 1) return 'rgba(212, 175, 55, 0.4)';
  if (count === 2) return 'rgba(212, 175, 55, 0.75)';
  if (count === 3) return '#D4AF37';
  return '#FFDF73';
}

const RECENT_ACTIVITY = [
  { date: 'Today', quest: 'Deep Focus: 5km Dawn Run', xp: 80, crowns: 25, discipline: 'VIT' },
  { date: 'Yesterday', quest: '10 Minutes of React Architecture', xp: 40, crowns: 12, discipline: 'INT' },
  { date: 'Sep 11', quest: 'Cold Shower Protocol', xp: 30, crowns: 10, discipline: 'STR' },
  { date: 'Sep 10', quest: 'Meditation at Dusk', xp: 50, crowns: 15, discipline: 'FOC' },
  { date: 'Sep 9', quest: 'Journal of Shadows', xp: 35, crowns: 12, discipline: 'WIS' },
];

const DISCIPLINE_COLORS: Record<string, string> = {
  STR: '#ff6b6b', INT: '#D4AF37', VIT: '#6ee7b7', FOC: '#818cf8', WIS: '#fbbf24',
};

const AnimatedNumber = ({ value, duration = 1000, decimals = 0, prefix = '', suffix = '', start = true }: { value: number, duration?: number, decimals?: number, prefix?: string, suffix?: string, start?: boolean }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(easeOut * value);
      
      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration, start]);

  return <>{prefix}{count.toFixed(decimals)}{suffix}</>;
};

export function Bloodline() {
  const [hoverDay, setHoverDay] = useState<{ date: Date; count: number } | null>(null);
  const totalCompleted = calendarData.filter(d => d.count > 0).length;
  
  const recentCompletionsRef = React.useRef<HTMLDivElement>(null);
  const [isRecentVisible, setIsRecentVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRecentVisible(true);
          if (recentCompletionsRef.current) {
            observer.unobserve(recentCompletionsRef.current);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (recentCompletionsRef.current) {
      observer.observe(recentCompletionsRef.current);
    }

    return () => observer.disconnect();
  }, []);
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
              className="px-6 py-4 text-center rounded-xl relative group overflow-hidden"
              style={{ background: 'radial-gradient(circle at center, rgba(109,8,8,0.6) 0%, rgba(15,2,4,0.9) 100%)', border: '1px solid rgba(212,175,55,0.5)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.2)' }}
            >
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
              <div className="relative z-10 flex items-center gap-2 justify-center mb-1">
                <Flame size={16} className="text-[#D4AF37] group-hover:scale-125 transition-transform" />
                <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest font-bold">Current</span>
              </div>
              <div className="relative z-10 font-serif text-4xl font-bold text-[#F5D77F] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">12</div>
              <div className="relative z-10 font-mono text-[9px] text-[#D4AF37]/80 uppercase tracking-widest mt-0.5">Days</div>
            </div>
            <div
              className="px-6 py-4 text-center rounded-xl relative group overflow-hidden"
              style={{ background: 'radial-gradient(circle at center, rgba(109,8,8,0.6) 0%, rgba(15,2,4,0.9) 100%)', border: '1px solid rgba(212,175,55,0.5)', boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.2)' }}
            >
              <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23d4af37\\' fill-opacity=\\'0.15\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
              <div className="relative z-10 flex items-center gap-2 justify-center mb-1">
                <Target size={16} className="text-[#D4AF37] group-hover:scale-125 transition-transform" />
                <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest font-bold">Longest</span>
              </div>
              <div className="relative z-10 font-serif text-4xl font-bold text-[#F5D77F] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]">34</div>
              <div className="relative z-10 font-mono text-[9px] text-[#D4AF37]/80 uppercase tracking-widest mt-0.5">Days</div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: CheckCircle2, label: 'Total Completed', value: totalCompleted, decimals: 0, prefix: '', suffix: '', sub: 'quests sealed', color: '#D4AF37' },
            { icon: TrendingUp, label: 'Consistency', value: consistency, decimals: 0, prefix: '', suffix: '%', sub: 'last 365 days', color: '#F5D77F' },
            { icon: Clock, label: 'Avg. Per Day', value: 2.4, decimals: 1, prefix: '', suffix: '', sub: 'quests / day', color: '#8d9685' },
            { icon: Flame, label: 'Streak Bonus', value: 1.5, decimals: 1, prefix: '×', suffix: '', sub: 'XP multiplier', color: '#ff6b6b' },
          ].map(s => (
            <div
              key={s.label}
              className="p-4 flex flex-col items-center text-center gap-2 relative rounded-xl bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-sm border border-[#415A77]/60 dark:border-[#D4AF37]/35 shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] hover:border-[#415A77] dark:hover:border-[#F5D77F] group"
            >
              <s.icon size={20} style={{ color: s.color }} className="group-hover:scale-110 transition-transform" />
              <div className="font-mono text-2xl font-bold drop-shadow-[0_0_8px_currentColor]" style={{ color: s.color }}>
                <AnimatedNumber value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#EEEAD7]">{s.label}</div>
                <div className="font-mono text-[11px] text-[#8d9685] mt-1">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Calendar */}
        <div
          className="p-5 flex flex-col gap-4 relative rounded-xl bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.85)] backdrop-blur-xl border border-[#415A77]/60 dark:border-[#D4AF37]/50 shadow-[inset_0_0_40px_rgba(0,0,0,0.8),_0_8px_30px_rgba(109,8,8,0.5)]"
        >
          {/* Corner Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#D4AF37]/80 rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#D4AF37]/80 rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#D4AF37]/80 rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#D4AF37]/80 rounded-br-xl" />

          <div className="flex items-center justify-between relative z-10 min-h-[24px]">
            <div className="w-full text-center">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">Activity Codex</span>
              <span className="font-mono text-[10px] text-[#8d9685] mx-2">-</span>
              <span className="font-mono text-[10px] text-[#8d9685]">365-day vow chronicle</span>
            </div>
            {hoverDay && (
              <div className="absolute right-0 top-0 font-mono text-[10px] text-[#EEEAD7] bg-[#1a0204] border border-[#D4AF37]/30 px-2 py-1 z-20 whitespace-nowrap">
                {hoverDay.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} — {hoverDay.count} quest{hoverDay.count !== 1 ? 's' : ''}
              </div>
            )}
          </div>

          <div className="overflow-x-auto flex justify-center mt-4">
            <div className="flex flex-col gap-1">
              {/* Month Labels */}
              <div className="flex text-[#8d9685] font-mono text-[9px] h-4">
                {weeks.map((week, wi) => {
                  const currentMonth = week[0].date.getMonth();
                  const prevMonth = wi > 0 ? weeks[wi - 1][0].date.getMonth() : -1;
                  const isNewMonth = currentMonth !== prevMonth;
                  
                  return (
                    <div key={wi} className={`w-4 shrink-0 ${isNewMonth && wi > 0 ? 'ml-2' : ''}`}>
                      {isNewMonth ? <span className="-ml-1">{MONTHS[currentMonth]}</span> : null}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-2">
                {/* Grid */}
                <div className="flex gap-1 min-w-max pb-2">
                  {weeks.map((week, wi) => {
                    const currentMonth = week[0].date.getMonth();
                    const prevMonth = wi > 0 ? weeks[wi - 1][0].date.getMonth() : -1;
                    const isNewMonth = wi > 0 && currentMonth !== prevMonth;
                    
                    return (
                      <div 
                        key={wi} 
                        className={`flex flex-col gap-1 ${isNewMonth ? 'ml-2' : ''}`}
                      >
                        {week.map((day, di) => {
                          const horizontalDelay = wi * 15;
                          const intensityDelay = day.count * 200;
                          const totalDelay = horizontalDelay + intensityDelay;

                          return (
                            <div
                              key={di}
                              className="w-3 h-3 cursor-pointer transition-all hover:ring-1 hover:ring-[#D4AF37]/60 rounded-sm opacity-0 custom-fade-in-anim"
                              style={{ 
                                background: getColor(day.count), 
                                border: day.count === 0 ? '1px solid rgba(212,175,55,0.15)' : 'none',
                                animationDelay: `${totalDelay}ms`
                              }}
                              onMouseEnter={() => setHoverDay(day)}
                              onMouseLeave={() => setHoverDay(null)}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 mt-2 w-full">
            <span className="font-mono text-[9px] text-[#8d9685]">Less</span>
            {[0, 1, 2, 3, 4].map(c => (
              <div key={c} className="w-3 h-3" style={{ background: getColor(c) }} />
            ))}
            <span className="font-mono text-[9px] text-[#8d9685]">More</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div
          ref={recentCompletionsRef}
          className="p-5 relative rounded-xl bg-[#1B263B]/40 dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77]/60 dark:border-[#D4AF37]/35 shadow-lg mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-4">Recent Completions</p>
          <div className="flex flex-col">
            {RECENT_ACTIVITY.map((a, i) => (
              <div
                key={i}
                className={`flex items-center justify-between py-3 px-3 -mx-3 border-b last:border-b-0 group transition-colors hover:bg-[rgba(212,175,55,0.05)] rounded opacity-0 ${isRecentVisible ? 'custom-slide-in-left' : ''}`}
                style={{ borderColor: 'rgba(212,175,55,0.12)', animationDelay: isRecentVisible ? `${i * 150}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-8 shrink-0 group-hover:shadow-[0_0_10px_currentColor] transition-shadow"
                    style={{ background: DISCIPLINE_COLORS[a.discipline] || '#6D0808', color: DISCIPLINE_COLORS[a.discipline] || '#6D0808' }}
                  />
                  <div>
                    <p className="font-serif text-sm text-[#EEEAD7] font-semibold group-hover:text-[#F5D77F] transition-colors">{a.quest}</p>
                    <p className="font-mono text-[10px] text-[#8d9685]">{a.date}</p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-xs text-[#D4AF37] font-bold group-hover:drop-shadow-[0_0_5px_rgba(212,175,55,0.8)] transition-all flex items-center justify-end gap-2">
                    <span>+<AnimatedNumber value={a.xp} start={isRecentVisible} /> XP</span>
                    <span className="text-[#8d9685] font-light">-</span>
                    <span className="text-[#8d9685] group-hover:text-[#D4AF37]/80 transition-colors">+<AnimatedNumber value={a.crowns} start={isRecentVisible} /> Crowns</span>
                  </p>
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

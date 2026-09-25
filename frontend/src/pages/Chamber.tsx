import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { User, Bell, Shield, Settings, Moon, Sun, ChevronRight, Eye, EyeOff, Trash2, LogOut } from 'lucide-react';

type Section = 'account' | 'appearance' | 'notifications' | 'security' | 'preferences';

const SECTIONS = [
  { key: 'account' as Section, label: 'Account', icon: User },
  { key: 'appearance' as Section, label: 'Appearance', icon: Moon },
  { key: 'notifications' as Section, label: 'Notifications', icon: Bell },
  { key: 'security' as Section, label: 'Security', icon: Shield },
  { key: 'preferences' as Section, label: 'Preferences', icon: Settings },
];

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="relative w-10 h-5 transition-all focus:outline-none rounded-full"
      style={{ 
        background: enabled ? 'rgba(109,8,8,0.8)' : 'rgba(20,4,5,0.8)', 
        border: `1px solid ${enabled ? 'rgba(212,175,55,0.5)' : 'rgba(65,90,119,0.3)'}`,
        boxShadow: enabled ? 'inset 0 2px 4px rgba(0,0,0,0.8)' : 'inset 0 2px 4px rgba(0,0,0,0.6)'
      }}
    >
      <div
        className="absolute top-[1px] w-4 h-4 rounded-full transition-all duration-300 ease-out"
        style={{ 
          left: enabled ? '21px' : '2px', 
          background: enabled ? 'radial-gradient(circle at 30% 30%, #F5D77F, #D4AF37)' : 'linear-gradient(135deg, #415A77, #1B263B)', 
          boxShadow: enabled ? '0 0 10px rgba(212,175,55,0.8), inset -1px -1px 3px rgba(109,8,8,0.5)' : '0 2px 4px rgba(0,0,0,0.5)',
          border: enabled ? 'none' : '1px solid rgba(255,255,255,0.1)'
        }}
      />
    </button>
  );
}

function SettingRow({ label, desc, children }: { label: string; desc?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-[#D4AF37]/10 last:border-b-0">
      <div>
        <p className="font-sans text-sm text-[#EEEAD7] font-semibold">{label}</p>
        {desc && <p className="font-sans text-xs text-[#8d9685] mt-0.5">{desc}</p>}
      </div>
      <div className="shrink-0 ml-4">{children}</div>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="relative p-5 flex flex-col rounded-xl bg-[#1B263B]/80 dark:bg-[rgba(20,4,5,0.85)] backdrop-blur-xl border border-[#415A77] dark:border-[#D4AF37]/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden"
    >
      {/* Background Watermark */}
      <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-[#D4AF37] pointer-events-none">
        <Settings size={180} />
      </div>

      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#D4AF37]/15 relative z-10">
        <div className="w-1 h-4 bg-[#D4AF37] shadow-[0_0_5px_#D4AF37]" />
        <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37] drop-shadow-[0_0_2px_rgba(212,175,55,0.4)] font-bold">{title}</h3>
      </div>
      <div className="relative z-10 flex flex-col gap-1">
        {children}
      </div>
    </div>
  );
}

const OrnamentalDivider = () => (
  <div className="w-full max-w-[280px] h-3 text-[#D4AF37] opacity-80 mt-1 mb-2 drop-shadow-[0_0_3px_rgba(212,175,55,0.5)]">
    <svg className="w-full h-full" viewBox="0 0 320 12">
      <path d="M 24 6 L 130 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 20 1 Q 20 6 14 6 Q 20 6 20 11 Q 20 6 26 6 Q 20 6 20 1 Z" fill="currentColor" />
      <circle cx="10" cy="6" r="1.5" fill="currentColor" />
      <path d="M 296 6 L 190 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 300 1 Q 300 6 294 6 Q 300 6 300 11 Q 300 6 306 6 Q 300 6 300 1 Z" fill="currentColor" />
      <circle cx="310" cy="6" r="1.5" fill="currentColor" />
      <path d="M 130 6 C 145 -4, 160 2, 160 6 C 160 10, 145 16, 130 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M 190 6 C 175 -4, 160 2, 160 6 C 160 10, 175 16, 190 6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="160" cy="6" r="2.5" fill="currentColor" />
    </svg>
  </div>
);

export function Chamber() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<Section>('account');
  const [showPassword, setShowPassword] = useState(false);
  const [notifs, setNotifs] = useState({ streakReminder: true, questDue: true, weeklyReport: false, achievements: true });
  const [prefs, setPrefs] = useState({ soundEffects: true, animations: true, compactMode: false, autoComplete: false });

  return (
    <>


      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">

        <div className="flex flex-col pb-4 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 gap-2 mb-2 relative">
          {/* Subtle background glow for header */}
          <div className="absolute top-0 left-0 w-64 h-32 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none" />
          
          <span className="font-mono text-xs uppercase text-[#D4AF37] tracking-[0.3em] bg-[#415A77]/20 dark:bg-[#250101] px-2.5 py-0.5 border border-[#415A77]/40 dark:border-[#D4AF37]/35 self-start shadow-[0_0_10px_rgba(212,175,55,0.1)] relative z-10">
            Sanctum Noctis • The Chamber
          </span>
          <h1 className="font-serif text-3xl lg:text-4xl text-[#EEEAD7] font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] relative z-10">The Chamber</h1>
          <OrnamentalDivider />
          <p className="font-sans text-sm text-[#8d9685] leading-relaxed relative z-10">
            Configure your sanctuary. Carve the rules by which your nocturnal order operates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

          <div
            className="lg:col-span-1 h-fit rounded-xl bg-[#1B263B]/80 dark:bg-[rgba(20,4,5,0.85)] backdrop-blur-xl border border-[#415A77] dark:border-[#D4AF37]/30 shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden relative"
          >
            {SECTIONS.map(sec => (
              <button
                key={sec.key}
                onClick={() => setActiveSection(sec.key)}
                className={`w-full flex items-center justify-between px-4 py-3 transition-all border-b border-[#D4AF37]/10 last:border-b-0 relative overflow-hidden group ${
                  activeSection === sec.key 
                    ? 'bg-[radial-gradient(ellipse_at_left,_rgba(109,8,8,0.6)_0%,_transparent_100%)] text-[#D4AF37] border-l-[3px] border-l-[#D4AF37] shadow-[inset_4px_0_15px_-5px_rgba(212,175,55,0.4)]' 
                    : 'bg-transparent text-[#8d9685] border-l-[3px] border-l-transparent hover:text-[#D4AF37]/80 hover:bg-[#1B263B]/50 dark:hover:bg-[rgba(109,8,8,0.1)]'
                }`}
              >
                {/* Golden Sweep Hover Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out pointer-events-none" 
                />

                <div className="flex items-center gap-2.5 relative z-10">
                  <sec.icon size={14} className={activeSection === sec.key ? 'drop-shadow-[0_0_5px_rgba(212,175,55,0.8)]' : ''} />
                  <span className={`font-mono text-xs uppercase tracking-widest ${activeSection === sec.key ? 'font-bold drop-shadow-[0_0_3px_rgba(212,175,55,0.5)]' : ''}`}>
                    {sec.label}
                  </span>
                </div>
                <ChevronRight size={12} className="relative z-10 opacity-50" />
              </button>
            ))}
          </div>

          {/* Section Content */}
          <div className="lg:col-span-3 flex flex-col gap-4">

            {/* Account Section */}
            {activeSection === 'account' && (
              <>
                <SectionCard title="Profile">
                  <div className="flex items-center gap-4 py-4 border-b border-[#D4AF37]/10">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center font-serif text-2xl font-bold text-[#D4AF37]"
                      style={{ background: 'linear-gradient(135deg, #3d0303, #6D0808)', border: '2px solid rgba(212,175,55,0.5)' }}
                    >
                      A
                    </div>
                    <div>
                      <p className="font-serif text-base font-bold text-[#EEEAD7]">Alistair Vance</p>
                      <p className="font-mono text-xs text-[#8d9685]">alistair@bathabit.nocturnal</p>
                    </div>
                    <button className="ml-auto px-3 py-1.5 font-mono text-xs uppercase tracking-wider" style={{ background: 'rgba(109,8,8,0.5)', border: '1px solid rgba(212,175,55,0.3)', color: '#D4AF37' }}>
                      Edit
                    </button>
                  </div>

                  <div className="space-y-0">
                    {[
                      { label: 'Display Name', value: 'Alistair Vance' },
                      { label: 'Username', value: '@alistairdark' },
                      { label: 'Email', value: 'alistair@bathabit.nocturnal' },
                    ].map(f => (
                      <SettingRow key={f.label} label={f.label}>
                        <span className="font-mono text-xs text-[#8d9685]">{f.value}</span>
                      </SettingRow>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Danger Zone">
                  <div className="flex flex-col gap-3 py-2">
                    <button className="flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest self-start" style={{ background: 'transparent', border: '1px solid rgba(212,175,55,0.2)', color: '#8d9685' }}>
                      <LogOut size={12} /> Sign Out
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest self-start" style={{ background: 'transparent', border: '1px dashed #6D0808', color: '#ff6b6b' }}>
                      <Trash2 size={12} /> Delete Account
                    </button>
                  </div>
                </SectionCard>
              </>
            )}

            {/* Appearance Section */}
            {activeSection === 'appearance' && (
              <SectionCard title="Appearance & Theme">
                <SettingRow label="Color Mode" desc="Toggle between Light and Dark sanctuary themes">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all"
                    style={{ background: '#6D0808', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}
                  >
                    {theme === 'dark' ? <><Moon size={12} /> Dark</> : <><Sun size={12} /> Light</>}
                  </button>
                </SettingRow>
                <SettingRow label="Interface Density" desc="Choose compact or spacious layout">
                  <div className="flex gap-1">
                    {['Compact', 'Default', 'Spacious'].map(d => (
                      <button
                        key={d}
                        className="px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider transition-all"
                        style={{
                          background: d === 'Default' ? '#6D0808' : 'transparent',
                          border: `1px solid ${d === 'Default' ? 'rgba(212,175,55,0.4)' : 'rgba(212,175,55,0.15)'}`,
                          color: d === 'Default' ? '#D4AF37' : '#8d9685',
                        }}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </SettingRow>
              </SectionCard>
            )}

            {/* Notifications Section */}
            {activeSection === 'notifications' && (
              <SectionCard title="Notification Runes">
                <SettingRow label="Streak Reminder" desc="Alert when your streak is at risk of breaking">
                  <Toggle enabled={notifs.streakReminder} onToggle={() => setNotifs(p => ({ ...p, streakReminder: !p.streakReminder }))} />
                </SettingRow>
                <SettingRow label="Quest Due Alerts" desc="Notify before quests expire at midnight">
                  <Toggle enabled={notifs.questDue} onToggle={() => setNotifs(p => ({ ...p, questDue: !p.questDue }))} />
                </SettingRow>
                <SettingRow label="Weekly Chronicle" desc="Receive a weekly summary of your progress">
                  <Toggle enabled={notifs.weeklyReport} onToggle={() => setNotifs(p => ({ ...p, weeklyReport: !p.weeklyReport }))} />
                </SettingRow>
                <SettingRow label="Achievement Unlocks" desc="Announce when you earn a new relic or badge">
                  <Toggle enabled={notifs.achievements} onToggle={() => setNotifs(p => ({ ...p, achievements: !p.achievements }))} />
                </SettingRow>
              </SectionCard>
            )}

            {/* Security Section */}
            {activeSection === 'security' && (
              <SectionCard title="Security Wards">
                <SettingRow label="Current Password">
                  <div className="flex items-center gap-2">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      defaultValue="••••••••••"
                      className="font-mono text-xs bg-[rgba(20,4,5,0.8)] border border-[#415A77]/50 rounded px-3 py-1.5 text-[#EEEAD7] focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.3)] focus:outline-none w-32 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                    />
                    <button onClick={() => setShowPassword(!showPassword)} className="text-[#8d9685] hover:text-[#D4AF37] transition-colors drop-shadow">
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </SettingRow>
                <SettingRow label="New Password">
                  <input
                    type="password"
                    placeholder="New password"
                    className="font-mono text-xs bg-[rgba(20,4,5,0.8)] border border-[#415A77]/50 rounded px-3 py-1.5 text-[#EEEAD7] focus:border-[#D4AF37] focus:shadow-[0_0_8px_rgba(212,175,55,0.3)] focus:outline-none w-40 placeholder-[#8d9685]/50 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
                  />
                </SettingRow>
                <div className="pt-3">
                  <button className="px-4 py-2 font-mono text-xs uppercase tracking-widest" style={{ background: '#6D0808', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
                    Update Password
                  </button>
                </div>
              </SectionCard>
            )}

            {/* Preferences Section */}
            {activeSection === 'preferences' && (
              <SectionCard title="Codex Preferences">
                <SettingRow label="Sound Effects" desc="Play sounds on quest completion and milestones">
                  <Toggle enabled={prefs.soundEffects} onToggle={() => setPrefs(p => ({ ...p, soundEffects: !p.soundEffects }))} />
                </SettingRow>
                <SettingRow label="Animations" desc="Enable micro-animations and transitions">
                  <Toggle enabled={prefs.animations} onToggle={() => setPrefs(p => ({ ...p, animations: !p.animations }))} />
                </SettingRow>
                <SettingRow label="Compact Mode" desc="Show more content with reduced spacing">
                  <Toggle enabled={prefs.compactMode} onToggle={() => setPrefs(p => ({ ...p, compactMode: !p.compactMode }))} />
                </SettingRow>
                <SettingRow label="Auto-Complete Detection" desc="Auto-mark quests when linked apps report completion">
                  <Toggle enabled={prefs.autoComplete} onToggle={() => setPrefs(p => ({ ...p, autoComplete: !p.autoComplete }))} />
                </SettingRow>
              </SectionCard>
            )}

          </div>
        </div>
      </div>
    </>
  );
}

export default Chamber;

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
      className="relative w-10 h-5 transition-all focus:outline-none"
      style={{ background: enabled ? '#6D0808' : 'rgba(212,175,55,0.1)', border: `1px solid ${enabled ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.2)'}` }}
    >
      <div
        className="absolute top-0.5 w-4 h-4 transition-all duration-200"
        style={{ left: enabled ? '22px' : '2px', background: enabled ? '#D4AF37' : '#8d9685', boxShadow: enabled ? '0 0 8px rgba(212,175,55,0.5)' : 'none' }}
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
      className="p-5 flex flex-col rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg"
    >
      <div className="flex items-center gap-2 mb-1 pb-3 border-b border-[#D4AF37]/15">
        <div className="w-1 h-4 bg-[#D4AF37]" />
        <h3 className="font-mono text-xs uppercase tracking-widest text-[#D4AF37]">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export function Chamber() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<Section>('account');
  const [showPassword, setShowPassword] = useState(false);
  const [notifs, setNotifs] = useState({ streakReminder: true, questDue: true, weeklyReport: false, achievements: true });
  const [prefs, setPrefs] = useState({ soundEffects: true, animations: true, compactMode: false, autoComplete: false });

  return (
    <>
      {/* Royal Background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          backgroundColor: '#0c0608',
          backgroundImage: `
            radial-gradient(circle at 18% 15%, rgba(109, 8, 8, 0.45) 0%, transparent 50%),
            radial-gradient(circle at 82% 22%, rgba(212, 175, 55, 0.15) 0%, transparent 45%),
            radial-gradient(circle at 50% 85%, rgba(69, 3, 3, 0.55) 0%, transparent 60%)
          `,
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="flex flex-col pb-4 border-b border-[#415A77]/50 dark:border-[#D4AF37]/25 gap-2 mb-2">
          <span className="font-mono text-xs uppercase text-[#D4AF37] tracking-[0.3em] bg-[#415A77]/20 dark:bg-[#250101] px-2.5 py-0.5 border border-[#415A77]/40 dark:border-[#D4AF37]/35 self-start">
            Sanctum Noctis • The Chamber
          </span>
          <h1 className="font-serif text-3xl lg:text-4xl text-[#EEEAD7] font-bold drop-shadow-md">The Chamber</h1>
          <p className="font-sans text-sm text-[#8d9685] leading-relaxed">
            Configure your sanctuary. Carve the rules by which your nocturnal order operates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

          {/* Section Navigation */}
          <div
            className="lg:col-span-1 h-fit rounded-xl bg-[#1B263B] dark:bg-[rgba(35,6,8,0.78)] backdrop-blur-md border border-[#415A77] dark:border-[#D4AF37]/45 shadow-lg overflow-hidden"
          >
            {SECTIONS.map(sec => (
              <button
                key={sec.key}
                onClick={() => setActiveSection(sec.key)}
                className="w-full flex items-center justify-between px-4 py-3 transition-all border-b border-[#D4AF37]/10 last:border-b-0"
                style={{
                  background: activeSection === sec.key ? 'rgba(109,8,8,0.4)' : 'transparent',
                  borderLeft: activeSection === sec.key ? '2px solid #D4AF37' : '2px solid transparent',
                  color: activeSection === sec.key ? '#D4AF37' : '#8d9685',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <sec.icon size={14} />
                  <span className="font-mono text-xs uppercase tracking-widest">{sec.label}</span>
                </div>
                <ChevronRight size={12} />
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
                      className="font-mono text-xs bg-[#1a0204] border border-[#D4AF37]/20 px-3 py-1.5 text-[#EEEAD7] focus:border-[#D4AF37]/50 focus:outline-none w-32"
                    />
                    <button onClick={() => setShowPassword(!showPassword)} className="text-[#8d9685] hover:text-[#D4AF37]">
                      {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                    </button>
                  </div>
                </SettingRow>
                <SettingRow label="New Password">
                  <input
                    type="password"
                    placeholder="New password"
                    className="font-mono text-xs bg-[#1a0204] border border-[#D4AF37]/20 px-3 py-1.5 text-[#EEEAD7] focus:border-[#D4AF37]/50 focus:outline-none w-40 placeholder-[#8d9685]/50"
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

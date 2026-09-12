import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../api';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, ArrowLeft, Mail, Eye, Check } from 'lucide-react';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(true);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/signup';
      await api.post(endpoint, { email, password });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  const handleDemo = async () => {
    setError('');
    try {
      await api.post('/auth/login', { email: 'demo@bathabit.com', password: 'password' });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Demo login failed');
    }
  };

  return (
    <div className="h-screen bg-[#0D1B2A] dark:bg-[#0a0204] text-[#F7F3E9] dark:text-[#EEEAD7] font-sans selection:bg-[#415A77] dark:bg-[#6D0808] selection:text-[#F5D77F] overflow-hidden flex flex-col relative">
      
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1B263B]/30 dark:bg-[#6d0808]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#0D1B2A]/50 dark:bg-[#1a0101]/60 rounded-full blur-[150px]"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-50 bg-[#0D1B2A]/80 dark:bg-[#0a0204]/90 backdrop-blur-md border-b border-[#415A77] dark:border-[#D4AF37]/20">
        <div className="w-full px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#415A77]/40 dark:bg-[#1e0306] border border-[#415A77] dark:border-[#D4AF37]/50 flex items-center justify-center shadow-[0_0_15px_rgba(65,90,119,0.3)] dark:shadow-[0_0_15px_rgba(212,175,55,0.3)] text-[#F5D77F]">
              <span className="font-serif font-bold text-xl text-[#F5D77F]">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-[#F7F3E9] dark:text-[#EEEAD7] tracking-[0.2em]">BATHABIT</span>
              <span className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] tracking-[0.3em] uppercase">Gothic Nocturnal Codex</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/" className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-[#F7F3E9]/70 dark:text-[#8d9685] hover:text-[#D4AF37] uppercase tracking-widest transition-colors">
              <ArrowLeft size={14} /> Return to the Gate
            </Link>
            
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded border border-[#415A77] dark:border-[#D4AF37]/30 bg-[#415A77]/40 dark:bg-[#1e0306] cursor-pointer hover:bg-[#415A77]/60 dark:hover:bg-[#3a0404] transition-colors"
            >
              {theme === 'dark' ? (
                <>
                  <Moon size={14} className="text-[#F5D77F]" />
                  <span className="font-mono text-[10px] text-[#D4AF37] uppercase tracking-wider font-semibold">Night Realm</span>
                </>
              ) : (
                <>
                  <Sun size={14} className="text-[#F5D77F]" />
                  <span className="font-mono text-[10px] text-[#F5D77F] uppercase tracking-wider font-semibold">Light Realm</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative z-10 flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto px-6 py-4 gap-8 items-center lg:items-start justify-center pt-2">
        
        {/* Left Column (Lore & Preview) */}
        <div className="w-full lg:w-1/2 flex flex-col max-w-lg lg:mt-10">
          <div className="flex items-center gap-2 mb-6">
             <span className="text-[#D4AF37] text-xs">✦</span>
             <span className="font-mono text-[11px] text-[#D4AF37] uppercase tracking-widest font-bold">
               Sanctum Noctis • Threshold of Ascension
             </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] leading-[1.1] tracking-tight mb-2 drop-shadow-lg">
            THE <br/>
            THRESHOLD
          </h1>
          <h2 className="font-serif italic text-3xl text-[#D4AF37] font-light mb-8">
            OF SACRED PASSAGE
          </h2>

          {/* Arched Avatar Window */}
          <div className="relative w-64 h-[280px] rounded-t-full border-t-2 border-x-2 border-[#415A77] dark:border-[#6D0808] bg-gradient-to-b from-[#1B263B] dark:from-[#3a0404] to-[#0D1B2A] dark:to-[#0a0204] shadow-[0_-10px_40px_rgba(65,90,119,0.2)] dark:shadow-[0_-10px_40px_rgba(109,8,8,0.2)] flex flex-col items-center justify-center overflow-hidden pt-4 pb-4">
             
             {/* Glow behind avatar */}
             <div className="absolute top-10 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-[40px]"></div>
             
             {/* Circular frame for avatar */}
             <div className="relative z-10 w-24 h-24 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#0D1B2A] dark:bg-[#0a0204] shadow-[0_0_20px_rgba(212,175,55,0.1)] flex-shrink-0">
                <div className="w-14 h-16 bg-[#415A77] dark:bg-[#6D0808] rounded-t-full relative flex items-center justify-center overflow-hidden border border-[#D4AF37]/30">
                  <div className="w-7 h-9 bg-[#0D1B2A] dark:bg-[#1a0101] rounded-t-full relative mt-3">
                     {/* Eyes */}
                     <div className="absolute top-3 left-1.5 w-1.5 h-1.5 bg-[#F5D77F] rounded-full shadow-[0_0_5px_#F5D77F]"></div>
                     <div className="absolute top-3 right-1.5 w-1.5 h-1.5 bg-[#F5D77F] rounded-full shadow-[0_0_5px_#F5D77F]"></div>
                  </div>
                </div>
             </div>

             {/* Rank Pill */}
             <div className="relative z-20 bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#3a0404] px-4 py-1 rounded border border-[#D4AF37]/50 mb-4 mt-2 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
               <span className="font-serif text-[10px] font-bold text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-widest">Rank I • Novice</span>
             </div>

             <div className="w-full px-6 flex flex-col">
               <span className="font-serif text-[11px] font-bold text-[#D4AF37] uppercase tracking-widest mb-3 text-center">The Uninitiated Seeker</span>
               
               <div className="w-full h-1 bg-[#1B263B] dark:bg-[#1e0306] rounded-full mb-3 border border-[#D4AF37]/20">
                 <div className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5D77F] w-[15%] rounded-full shadow-[0_0_8px_#D4AF37]"></div>
               </div>
               
               <div className="flex justify-between font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest mb-6">
                 <span>Vigor: 100/100</span>
                 <span>Harvest: 1.00x</span>
               </div>
               
               <div className="w-full border-t border-[#415A77] dark:border-[#3a0404] pt-3 text-center font-mono text-[9px] text-[#415A77] dark:text-[#3a0404] uppercase tracking-widest">
                 Covenant of the Eclipse
               </div>
             </div>
          </div>

          <p className="mt-6 text-[#F7F3E9]/70 dark:text-[#8d9685] text-xs italic leading-relaxed max-w-sm">
            "The threshold demands commitment. Inscribe your vow upon the nocturnal codex and summon the sovereign within."
          </p>

          <div className="mt-4 flex items-center gap-6 font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest">
            <span className="flex items-center gap-2"><span className="text-[#D4AF37]">✦</span> Zero Shattered Vows</span>
            <span className="flex items-center gap-2"><span className="text-[#D4AF37]">✦</span> Bloodline Preserved</span>
          </div>
        </div>

        {/* Right Column (The Form) */}
        <div className="w-full lg:w-1/2 max-w-xl lg:mt-12">
          <div className="relative border border-[#415A77] dark:border-[#D4AF37]/30 bg-[#0D1B2A]/80 dark:bg-[#0a0204]/80 p-6 backdrop-blur-md">
            
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#D4AF37] rotate-45"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37] rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D4AF37] rotate-45"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4AF37] rotate-45"></div>

            <div className="text-center mb-4">
              <span className="font-mono text-[9px] text-[#D4AF37] uppercase tracking-widest font-semibold block mb-3">
                Sanctum Noctis • Portal of Passage
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-wider mb-2">
                Enter The Threshold
              </h2>
              <p className="text-xs text-[#F7F3E9]/70 dark:text-[#8d9685] max-w-sm mx-auto leading-relaxed">
                Your vows resonate through the obsidian arches. Transmute your daily discipline into eternal ascension.
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border border-[#415A77] dark:border-[#3a0404] rounded p-1 mb-6 bg-[#0D1B2A] dark:bg-[#060102]">
              <button 
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 font-serif text-[11px] font-bold uppercase tracking-widest transition-all rounded ${isLogin ? 'bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#3a0404] text-[#F7F3E9] dark:text-[#EEEAD7] shadow-[0_0_15px_rgba(65,90,119,0.3)] dark:shadow-[0_0_15px_rgba(109,8,8,0.3)] border border-[#415A77] dark:border-[#D4AF37]/30' : 'text-[#F7F3E9]/50 dark:text-[#8d9685] hover:text-[#D4AF37]'}`}
              >
                Login
              </button>
              <button 
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 font-serif text-[11px] font-bold uppercase tracking-widest transition-all rounded ${!isLogin ? 'bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#3a0404] text-[#F7F3E9] dark:text-[#EEEAD7] shadow-[0_0_15px_rgba(65,90,119,0.3)] dark:shadow-[0_0_15px_rgba(109,8,8,0.3)] border border-[#415A77] dark:border-[#D4AF37]/30' : 'text-[#F7F3E9]/50 dark:text-[#8d9685] hover:text-[#D4AF37]'}`}
              >
                Sign up
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {error && (
                <div className="p-3 text-xs font-mono bg-[#415A77]/40 dark:bg-red-900/50 text-[#F5D77F] dark:text-red-200 rounded border border-[#415A77] dark:border-red-800 text-center uppercase tracking-wider">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="font-serif text-[10px] font-bold text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-widest block">
                  Initiate Email / Sigil ID
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#F7F3E9] text-[#0D1B2A] font-mono text-sm px-4 py-2 rounded border border-transparent focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] placeholder:text-[#0D1B2A]/40"
                    placeholder="alistair@bathabit.realm"
                  />
                  <Mail className="absolute right-4 top-2 text-[#0D1B2A]/40" size={16} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-serif text-[10px] font-bold text-[#F7F3E9] dark:text-[#EEEAD7] uppercase tracking-widest block">
                    Arcane Cipher
                  </label>
                  {isLogin && (
                    <a href="#" className="font-serif text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest hover:underline">
                      Forgot Cipher?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <input 
                    type="password" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#F7F3E9] text-[#0D1B2A] font-mono text-xl px-4 py-1.5 rounded border border-transparent focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] placeholder:text-[#0D1B2A]/40 tracking-[0.2em]"
                    placeholder="••••••••••••••"
                  />
                  <Eye className="absolute right-4 top-2 text-[#0D1B2A]/40" size={16} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button 
                  type="button"
                  onClick={() => setRemember(!remember)}
                  className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${remember ? 'bg-[#415A77] dark:bg-[#6D0808] border-[#D4AF37]' : 'bg-[#1B263B] dark:bg-[#1e0306] border-[#415A77] dark:border-[#D4AF37]/30'}`}
                >
                  {remember && <Check size={12} className="text-[#F5D77F]" />}
                </button>
                <span className="font-mono text-[9px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest cursor-pointer" onClick={() => setRemember(!remember)}>
                  Keep sacred seal bound on this vessel
                </span>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-3 bg-gradient-to-r from-[#415A77] dark:from-[#6D0808] to-[#1B263B] dark:to-[#3a0404] text-[#F5D77F] font-serif text-[13px] font-bold uppercase tracking-[0.2em] rounded shadow-[0_0_20px_rgba(65,90,119,0.4)] dark:shadow-[0_0_20px_rgba(109,8,8,0.4)] border border-[#415A77] dark:border-[#D4AF37]/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex justify-center items-center gap-3"
              >
                Enter the Sanctum <span className="text-[#D4AF37]">✦</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-[#415A77] dark:border-[#3a0404] flex justify-center">
              <button 
                onClick={handleDemo}
                className="px-6 py-2 rounded-full border border-[#415A77] dark:border-[#D4AF37]/30 bg-[#1B263B] dark:bg-[#1a0101] text-[#F7F3E9]/70 dark:text-[#8d9685] hover:text-[#D4AF37] hover:border-[#D4AF37]/60 font-mono text-[9px] uppercase tracking-widest flex items-center gap-2 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#4ade80] shadow-[0_0_5px_#4ade80]"></div>
                Quick Inscribe: Demo Initiate (Level 7 Scholar)
              </button>
            </div>
          </div>

          <div className="mt-4 text-center font-mono text-[8px] text-[#F7F3E9]/70 dark:text-[#8d9685] uppercase tracking-widest flex items-center justify-center gap-3">
             <span className="text-[#415A77] dark:text-[#3a0404]">✦</span> 
             Encrypted with Obsidian Hash Ciphers • Non-Shattered Bloodlines 
             <span className="text-[#415A77] dark:text-[#3a0404]">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}

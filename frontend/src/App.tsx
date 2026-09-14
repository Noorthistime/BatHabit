import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Awakening } from './pages/Awakening';
import DashboardLayout from './layouts/DashboardLayout';
import QuestBook from './pages/QuestBook';
import { ThemeProvider } from './context/ThemeContext';
import { api } from './api';

// Landing
import { Landing } from './pages/Landing';

// Sanctum uses old Layout to preserve its styling
import { Sanctum } from './pages/Sanctum';
import { Layout } from './components/layout/Layout';

// New pages under DashboardLayout
import { Grimoire } from './pages/Grimoire';
import { Bloodline } from './pages/Bloodline';
import { NightMarket } from './pages/NightMarket';
import { Vault } from './pages/Vault';
import { Chamber } from './pages/Chamber';
import { Lore } from './pages/Lore';

// Placeholder for pages not yet built
function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] bg-[#250101] px-3 py-1 border border-[#D4AF37]/30">
        Coming Soon
      </div>
      <h1 className="font-serif text-3xl text-[#EEEAD7] font-bold">{title}</h1>
      <p className="font-sans text-sm text-[#8d9685]">This sanctuary is still being forged in the obsidian fires.</p>
    </div>
  );
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    api.get('/auth/me')
      .then(() => setAuthed(true))
      .catch(() => setAuthed(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen bg-[#0c0608] flex items-center justify-center text-[#EEEAD7] font-serif">Opening the Codex...</div>;
  
  return authed ? <>{children}</> : <Navigate to="/" />;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Auth />} />
          <Route path="/landing" element={<Landing />} />
          
          {/* Onboarding */}
          <Route path="/awakening" element={
            <ProtectedRoute>
              <Awakening />
            </ProtectedRoute>
          } />

          {/* Sanctum uses its own legacy Layout */}
          <Route path="/dashboard" element={<ProtectedRoute><Layout><Sanctum /></Layout></ProtectedRoute>} />

          {/* All dashboard sub-pages use DashboardLayout */}
          <Route path="/dashboard/*" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="questbook" element={<QuestBook />} />
            <Route path="grimoire" element={<Grimoire />} />
            <Route path="bloodline" element={<Bloodline />} />
            <Route path="market" element={<NightMarket />} />
            <Route path="vault" element={<Vault />} />
            <Route path="lore" element={<Lore />} />
            <Route path="chamber" element={<Chamber />} />
            <Route path="ascension" element={<ComingSoon title="The Ascension Path" />} />
            <Route path="treasury" element={<ComingSoon title="The Treasury" />} />
            <Route path="deeds" element={<ComingSoon title="Hall of Deeds" />} />
            <Route path="chronicle" element={<ComingSoon title="The Chronicle" />} />
            <Route path="ravens" element={<ComingSoon title="Ravens" />} />
            <Route path="oracle" element={<ComingSoon title="The Oracle" />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

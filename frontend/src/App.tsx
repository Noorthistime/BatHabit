import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Awakening } from './pages/Awakening';
import DashboardLayout from './layouts/DashboardLayout';
import QuestBook from './pages/QuestBook';
import { ThemeProvider } from './context/ThemeContext';
import { api } from './api';

// Old placeholder pages if they still exist
import { Landing } from './pages/Landing';
import { Sanctum } from './pages/Sanctum';
import { Grimoire } from './pages/Grimoire';
import { Shop } from './pages/Shop';
import { Layout } from './components/layout/Layout';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    api.get('/auth/me')
      .then(() => setAuthed(true))
      .catch(() => setAuthed(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen bg-[#0D1B2A] dark:bg-[#0a0204] flex items-center justify-center text-[#F7F3E9] dark:text-[#EEEAD7] font-serif">Opening the Codex...</div>;
  
  return authed ? <>{children}</> : <Navigate to="/" />;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/landing" element={<Landing />} />
          
          <Route path="/awakening" element={
            <ProtectedRoute>
              <Awakening />
            </ProtectedRoute>
          } />
          
          {/* Old Layout for Sanctum, Grimoire, Shop to preserve their original look */}
          <Route path="/dashboard" element={<ProtectedRoute><Layout><Sanctum /></Layout></ProtectedRoute>} />
          <Route path="/grimoire" element={<ProtectedRoute><Layout><Grimoire /></Layout></ProtectedRoute>} />
          <Route path="/market" element={<ProtectedRoute><Layout><Shop /></Layout></ProtectedRoute>} />
          
          {/* New Dashboard Layout for Questbook */}
          <Route path="/dashboard/questbook" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route index element={<QuestBook />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

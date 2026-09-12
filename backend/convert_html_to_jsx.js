const fs = require('fs');
const HTMLtoJSX = require('html-to-jsx');
const cheerio = require('cheerio');
const { JSDOM } = require('jsdom');

let html = fs.readFileSync('stitch_sanctum.html', 'utf-8');
const $ = cheerio.load(html, { xmlMode: false }); // HTML mode

const aside = $('aside').first();
const header = $('header').first();
const main = $('main').first();

const dom = new JSDOM();
global.document = dom.window.document;
global.Node = dom.window.Node;

const converter = new HTMLtoJSX({
  createClass: false,
});

let sidebarJSX = converter.convert(aside.prop('outerHTML') || '');
let headerJSX = converter.convert(header.prop('outerHTML') || '');
let mainJSX = converter.convert(main.prop('outerHTML') || '');

// Apply dynamic variables
headerJSX = headerJSX.replace(/>Alistair Vance</g, '>{char?.currentTitle || "Novice"}<');
headerJSX = headerJSX.replace(/>VII</g, '>{char?.level || 1}<');
headerJSX = headerJSX.replace(/LEVEL 7/g, 'LEVEL {char?.level || 1}');
headerJSX = headerJSX.replace(/>2,840</g, '>{currency?.balance || 0}<');

mainJSX = mainJSX.replace(/>Alistair Vance</g, '>{char?.currentTitle || "Novice"}<');
mainJSX = mainJSX.replace(/Alistair/g, '{char?.currentTitle || "Novice"}');
mainJSX = mainJSX.replace(/>1,240</g, '>{Math.floor(xpIntoLevel)}<');
mainJSX = mainJSX.replace(/>1,500 XP</g, '>{Math.floor(nextLevelXpRequired)} XP<');
mainJSX = mainJSX.replace(/>82\.6%</g, '>{progressPercent.toFixed(1)}%<');
mainJSX = mainJSX.replace(/>7</g, '>{streak?.currentStreak || 0}<');
mainJSX = mainJSX.replace(/>2,840</g, '>{currency?.balance || 0}<');
mainJSX = mainJSX.replace(/>18</g, '>{attr?.strengthXp || 0}<');
mainJSX = mainJSX.replace(/>24</g, '>{attr?.intellectXp || 0}<');
mainJSX = mainJSX.replace(/>19</g, '>{attr?.wisdomXp || 0}<');
mainJSX = mainJSX.replace(/>22</g, '>{attr?.focusXp || 0}<');
mainJSX = mainJSX.replace(/>16</g, '>{attr?.vitalityXp || 0}<');
mainJSX = mainJSX.replace(/>3<\/span>/g, '>{3}</span>');
mainJSX = mainJSX.replace(/\+260 XP to Level 08 \(The Nightseer\)/g, '+{Math.floor(xpNeededForNext)} XP to Level {char?.level ? char.level + 1 : 2}');

// Dynamic widths
mainJSX = mainJSX.replace(/width: '82.6%'/g, 'width: `${progressPercent}%`');
mainJSX = mainJSX.replace(/width: '72%'/g, 'width: `${Math.min(100, (attr?.strengthXp || 0) * 10)}%`');
mainJSX = mainJSX.replace(/width: '88%'/g, 'width: `${Math.min(100, (attr?.intellectXp || 0) * 10)}%`');
mainJSX = mainJSX.replace(/width: '65%'/g, 'width: `${Math.min(100, (attr?.wisdomXp || 0) * 10)}%`');
mainJSX = mainJSX.replace(/width: '82%'/g, 'width: `${Math.min(100, (attr?.focusXp || 0) * 10)}%`');
mainJSX = mainJSX.replace(/width: '58%'/g, 'width: `${Math.min(100, (attr?.vitalityXp || 0) * 10)}%`');

// Link replacements in Sidebar
sidebarJSX = sidebarJSX.replace(/<a[^>]*data-path="sanctum"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/dashboard" className="group flex items-center justify-between px-3 py-2.5 rounded border border-[#D4AF37]/70 bg-gradient-to-r from-crimson-deep to-[#3a0404] text-ivory-warm font-semibold shadow-[0_0_20px_rgba(109,8,8,0.75)]">$1</Link>');
sidebarJSX = sidebarJSX.replace(/<a[^>]*data-path="questbook"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/quests" className="group flex items-center gap-3 px-3 py-2 rounded text-sage-muted hover:text-gold-bright hover:bg-[#260303] hover:border hover:border-[#D4AF37]/30 transition-all">$1</Link>');
sidebarJSX = sidebarJSX.replace(/<a[^>]*data-path="grimoire"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/profile" className="group flex items-center gap-3 px-3 py-2 rounded text-sage-muted hover:text-gold-bright hover:bg-[#260303] hover:border hover:border-[#D4AF37]/30 transition-all">$1</Link>');
sidebarJSX = sidebarJSX.replace(/<a[^>]*data-path="night-market"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/shop" className="group flex items-center gap-3 px-3 py-2 rounded text-sage-muted hover:text-gold-bright hover:bg-[#260303] hover:border hover:border-[#D4AF37]/30 transition-all">$1</Link>');
sidebarJSX = sidebarJSX.replace(/<a([^>]*)href="#"([^>]*)>/g, '<a$1href="#"$2>');

let layoutCode = `import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#0c0608] text-[#EEEAD7] font-sans selection:bg-[#6D0808] selection:text-[#F5D77F]">
      ${sidebarJSX}
      <div className="pl-72 flex-1 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
`;

fs.writeFileSync('../frontend/src/components/layout/Layout.tsx', layoutCode);

let sanctumCode = `import React, { useEffect, useState } from 'react';
import { api } from '../api';
import '../sanctum-gothic.css';

export function Sanctum() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get('/auth/me').then(res => setProfile(res.data)).catch(console.error);
  }, []);

  if (!profile) return <div className="p-8 text-[#EEEAD7] animate-pulse font-cinzel text-xl text-center mt-20">Summoning your legacy...</div>;

  const char = profile.character || {};
  const attr = profile.attribute || {};
  const streak = profile.streak || {};
  const currency = profile.currency || {};

  const calculateRequiredXp = (level: number) => Math.floor(100 * Math.pow(level || 1, 1.5));
  const currentLevelXpRequired = calculateRequiredXp(char.level || 1);
  const nextLevelXpRequired = calculateRequiredXp((char.level || 1) + 1);
  const xpIntoLevel = (char.totalXp || 0) - currentLevelXpRequired;
  const xpNeededForNext = nextLevelXpRequired - currentLevelXpRequired;
  const progressPercent = Math.min(100, Math.max(0, (xpIntoLevel / xpNeededForNext) * 100)) || 0;

  return (
    <>
      ${headerJSX}
      ${mainJSX}
    </>
  );
}
`;

fs.writeFileSync('../frontend/src/pages/Sanctum.tsx', sanctumCode);
console.log("HTMLtoJSX conversion complete!");

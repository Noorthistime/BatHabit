const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('stitch_sanctum.html', 'utf-8');
const $ = cheerio.load(html, { xmlMode: true });

function formatElement(el) {
  if (el.type === 'text') {
    return el.data.replace(/{/g, '{"{"}').replace(/}/g, '{"}"}');
  }
  if (el.type === 'comment') return '';

  let tagName = el.name;
  if (!tagName) return '';
  if (tagName === 'svg') tagName = 'svg';

  let props = '';
  let styleOverride = null;

  if (el.attribs) {
    for (let [key, val] of Object.entries(el.attribs)) {
      if (key === 'class') key = 'className';
      if (key === 'for') key = 'htmlFor';
      if (key === 'tabindex') key = 'tabIndex';
      if (key === 'viewbox') key = 'viewBox';
      if (key === 'fill-rule') key = 'fillRule';
      if (key === 'clip-rule') key = 'clipRule';
      
      if (key === 'style') {
        let styleObj = {};
        val.split(';').forEach(s => {
          if (!s.trim()) return;
          let [k, v] = s.split(':');
          if (k && v) {
            let skey = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[skey] = v.trim();
          }
        });
        
        // Custom overrides for specific elements
        if (el.attribs['id'] === 'xp-bar-fill') {
          styleOverride = 'width: `${progressPercent}%`';
        } else {
          props += ` style={${JSON.stringify(styleObj)}}`;
        }
        continue;
      }
      
      // Values to override
      let outVal = JSON.stringify(val);
      if (el.attribs['id'] === 'header-crowns' || el.attribs['id'] === 'pill-crowns') {
        if (key === 'id') continue;
      }
      
      props += ` ${key}=${outVal}`;
    }
  }

  if (styleOverride) {
    props += ` style={{ ${styleOverride} }}`;
  }

  let childrenStr = '';
  if (el.children) {
    childrenStr = el.children.map(formatElement).join('');
  }
  
  // Custom injections
  if (el.attribs && el.attribs['id'] === 'xp-current') {
    childrenStr = '{char?.totalXp || 0}';
  }
  if (el.attribs && el.attribs['id'] === 'xp-percent') {
    childrenStr = '{progressPercent.toFixed(1)}%';
  }
  if (el.attribs && el.attribs['id'] === 'header-crowns') {
    childrenStr = '{currency?.balance || 0}';
  }
  if (el.attribs && el.attribs['id'] === 'pill-crowns') {
    childrenStr = '{currency?.balance || 0}';
  }
  if (el.attribs && el.attribs['id'] === 'pending-quests-count') {
    childrenStr = '{3}';
  }
  if (el.attribs && el.attribs['id'] === 'xp-remaining-text') {
    childrenStr = '+{Math.floor(xpNeededForNext)} XP to Level {char?.level ? char.level + 1 : 2}';
  }

  if (tagName === 'img' || tagName === 'input' || tagName === 'br' || tagName === 'hr' || tagName === 'path' || tagName === 'circle') {
    return `<${tagName}${props} />`;
  }

  return `<${tagName}${props}>${childrenStr}</${tagName}>`;
}

const aside = $('aside').first();
const header = $('header').first();
const main = $('main').first();

let sidebarJSX = aside.length ? formatElement(aside[0]) : '';
let headerJSX = header.length ? formatElement(header[0]) : '';
let mainJSX = main.length ? formatElement(main[0]) : '';

// Quick regex cleanups for dynamic variables that are text nodes
headerJSX = headerJSX.replace(/>Alistair Vance</g, '>{char?.currentTitle || "Novice"}<');
headerJSX = headerJSX.replace(/>VII</g, '>{char?.level || 1}<');
headerJSX = headerJSX.replace(/LEVEL 7 \• NIGHTWALKER SCHOLAR/g, 'LEVEL {char?.level || 1} • {char?.currentTitle || "INITIATE"}');

mainJSX = mainJSX.replace(/>Alistair Vance</g, '>{char?.currentTitle || "Novice"}<');
mainJSX = mainJSX.replace(/>Alistair<\/span>/g, '>{char?.currentTitle || "Novice"}</span>');
mainJSX = mainJSX.replace(/LEVEL 7 \• NIGHTWALKER SCHOLAR/g, 'LEVEL {char?.level || 1} • {char?.currentTitle || "INITIATE"}');
mainJSX = mainJSX.replace(/>1,500 XP</g, '>{Math.floor(nextLevelXpRequired)} XP<');
mainJSX = mainJSX.replace(/<span className="font-cinzel text-xl font-bold text-gold-bright">7<\/span>/g, '<span className="font-cinzel text-xl font-bold text-gold-bright">{streak?.currentStreak || 0}</span>');
// Stats
mainJSX = mainJSX.replace(/>18</, '>{attr?.strengthXp || 0}<');
mainJSX = mainJSX.replace(/>24</, '>{attr?.intellectXp || 0}<');
mainJSX = mainJSX.replace(/>19</, '>{attr?.wisdomXp || 0}<');
mainJSX = mainJSX.replace(/>22</, '>{attr?.focusXp || 0}<');
mainJSX = mainJSX.replace(/>16</, '>{attr?.vitalityXp || 0}<');

// Dynamic widths for stats
mainJSX = mainJSX.replace(/style=\{\{"width":"72%"\}\}/g, 'style={{width: `${Math.min(100, (attr?.strengthXp || 0) * 10)}%`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"88%"\}\}/g, 'style={{width: `${Math.min(100, (attr?.intellectXp || 0) * 10)}%`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"65%"\}\}/g, 'style={{width: `${Math.min(100, (attr?.wisdomXp || 0) * 10)}%`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"82%"\}\}/g, 'style={{width: `${Math.min(100, (attr?.focusXp || 0) * 10)}%`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"58%"\}\}/g, 'style={{width: `${Math.min(100, (attr?.vitalityXp || 0) * 10)}%`}}');

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
console.log('Cheerio conversion complete');

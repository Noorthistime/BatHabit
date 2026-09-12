const fs = require('fs');

let html = fs.readFileSync('stitch_sanctum.html', 'utf-8');

// 1. Extract the sidebar (<aside>...</aside>)
let asideMatch = html.match(/<aside[^>]*>([\s\S]*?)<\/aside>/);
let sidebarHtml = asideMatch ? asideMatch[0] : '';

// 2. Extract header (<header>...</header>)
let headerMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/);
let headerHtml = headerMatch ? headerMatch[0] : '';

// 3. Extract main (<main>...</main>)
let mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
let mainHtml = mainMatch ? mainMatch[0] : '';

// Helper to convert HTML to JSX
function toJSX(str) {
  let jsx = str;
  // HTML comments
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');
  // class -> className
  jsx = jsx.replace(/\bclass=/g, 'className=');
  // for -> htmlFor
  jsx = jsx.replace(/\bfor=/g, 'htmlFor=');
  // tabindex -> tabIndex
  jsx = jsx.replace(/\btabindex=/g, 'tabIndex=');
  // viewbox -> viewBox
  jsx = jsx.replace(/\bviewbox=/g, 'viewBox=');
  
  // Self-closing tags
  jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');
  
  // SVG unclosed tags inside raw HTML sometimes missing slashes (though Stitch output is usually fine, let's enforce it for path)
  jsx = jsx.replace(/<(path[^>]*?)(?<!\/)>/g, '<$1 />');
  jsx = jsx.replace(/<(circle[^>]*?)(?<!\/)>/g, '<$1 />');
  jsx = jsx.replace(/<(rect[^>]*?)(?<!\/)>/g, '<$1 />');
  jsx = jsx.replace(/<(line[^>]*?)(?<!\/)>/g, '<$1 />');
  jsx = jsx.replace(/<(polygon[^>]*?)(?<!\/)>/g, '<$1 />');
  jsx = jsx.replace(/<(polyline[^>]*?)(?<!\/)>/g, '<$1 />');

  // Convert style="string" to style={{}}
  jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
    let result = {};
    styleString.split(';').forEach(s => {
      if (!s.trim()) return;
      let [k, v] = s.split(':');
      if (k && v) {
        let key = k.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        result[key] = v.trim();
      }
    });
    return `style={${JSON.stringify(result)}}`;
  });

  return jsx;
}

let sidebarJSX = toJSX(sidebarHtml);
let headerJSX = toJSX(headerHtml);
let mainJSX = toJSX(mainHtml);

// ----------------------------------------------------
// Generate Layout.tsx
// ----------------------------------------------------
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

// Link replacements in sidebar
layoutCode = layoutCode.replace(/<a[^>]*data-path="sanctum"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/dashboard" className="group flex items-center justify-between px-3 py-2.5 rounded border border-[#D4AF37]/70 bg-gradient-to-r from-crimson-deep to-[#3a0404] text-ivory-warm font-semibold shadow-[0_0_20px_rgba(109,8,8,0.75)]">$1</Link>');
layoutCode = layoutCode.replace(/<a[^>]*data-path="questbook"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/quests" className="group flex items-center gap-3 px-3 py-2 rounded text-sage-muted hover:text-gold-bright hover:bg-[#260303] hover:border hover:border-[#D4AF37]/30 transition-all">$1</Link>');
layoutCode = layoutCode.replace(/<a[^>]*data-path="grimoire"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/profile" className="group flex items-center gap-3 px-3 py-2 rounded text-sage-muted hover:text-gold-bright hover:bg-[#260303] hover:border hover:border-[#D4AF37]/30 transition-all">$1</Link>');
layoutCode = layoutCode.replace(/<a[^>]*data-path="night-market"[^>]*>([\s\S]*?)<\/a>/g, '<Link to="/shop" className="group flex items-center gap-3 px-3 py-2 rounded text-sage-muted hover:text-gold-bright hover:bg-[#260303] hover:border hover:border-[#D4AF37]/30 transition-all">$1</Link>');
layoutCode = layoutCode.replace(/<a([^>]*)href="#"([^>]*)>/g, '<a$1href="#"$2>'); // Default fallback

// Write Layout.tsx
fs.writeFileSync('../frontend/src/components/layout/Layout.tsx', layoutCode);


// ----------------------------------------------------
// Generate Sanctum.tsx
// ----------------------------------------------------
// Apply dynamic data to header
headerJSX = headerJSX.replace(/Alistair Vance/g, '{char?.currentTitle || "Novice"}');
headerJSX = headerJSX.replace(/LEVEL 7/g, 'LEVEL {char?.level || 1}');
headerJSX = headerJSX.replace(/VII/g, '{char?.level || 1}');
headerJSX = headerJSX.replace(/2,840/g, '{currency?.balance || 0}');

// Apply dynamic data to main
mainJSX = mainJSX.replace(/Alistair Vance/g, '{char?.currentTitle || "Novice"}');
mainJSX = mainJSX.replace(/1,240/g, '{Math.floor(xpIntoLevel)}');
mainJSX = mainJSX.replace(/1,500/g, '{Math.floor(xpNeededForNext)}');
mainJSX = mainJSX.replace(/82\.6%/g, '{progressPercent.toFixed(1)}%');
mainJSX = mainJSX.replace(/"82\.6%"/g, '{\`\${progressPercent}%\`}');
mainJSX = mainJSX.replace(/>7</g, '>{streak?.currentStreak || 0}<');
mainJSX = mainJSX.replace(/>2,840</g, '>{currency?.balance || 0}<');
mainJSX = mainJSX.replace(/>18</, '>{attr?.strengthXp || 0}<');
mainJSX = mainJSX.replace(/>24</, '>{attr?.intellectXp || 0}<');
mainJSX = mainJSX.replace(/>19</, '>{attr?.wisdomXp || 0}<');
mainJSX = mainJSX.replace(/>22</, '>{attr?.focusXp || 0}<');
mainJSX = mainJSX.replace(/>16</, '>{attr?.vitalityXp || 0}<');
// Fix style for xp bar
mainJSX = mainJSX.replace(/style=\{\{"width":"82.6%"\}\}/g, 'style={{width: \`\${progressPercent}%\`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"72%"\}\}/g, 'style={{width: \`\${Math.min(100, (attr?.strengthXp || 0) * 10)}%\`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"88%"\}\}/g, 'style={{width: \`\${Math.min(100, (attr?.intellectXp || 0) * 10)}%\`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"65%"\}\}/g, 'style={{width: \`\${Math.min(100, (attr?.wisdomXp || 0) * 10)}%\`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"82%"\}\}/g, 'style={{width: \`\${Math.min(100, (attr?.focusXp || 0) * 10)}%\`}}');
mainJSX = mainJSX.replace(/style=\{\{"width":"58%"\}\}/g, 'style={{width: \`\${Math.min(100, (attr?.vitalityXp || 0) * 10)}%\`}}');

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

console.log("Converted Layout and Sanctum!");

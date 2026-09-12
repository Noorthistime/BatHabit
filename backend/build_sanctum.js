const fs = require('fs');

let jsx = fs.readFileSync('raw_jsx.txt', 'utf-8');

// Fix style attributes
jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
  if (styleString.includes('font-variation-settings')) {
    return `style={{ fontVariationSettings: "'FILL' 1" }}`;
  }
  if (styleString.includes('width:')) {
    const w = styleString.match(/width:\s*([^;]+);/)[1];
    return `style={{ width: '${w}' }}`;
  }
  return `style={{}}`;
});

// Remove svg paths if they cause issues, or fix them. They usually work fine in React if they are standard.

// Hook up dynamic variables
// Note: We won't hook up EVERYTHING to keep it simple, just the main ones
jsx = jsx.replace(/Alistair Vance/g, '{char.currentTitle || "Alistair Vance"}');
jsx = jsx.replace(/LEVEL 7/g, 'LEVEL {char.level}');
jsx = jsx.replace(/1,240/g, '{Math.floor(xpIntoLevel)}');
jsx = jsx.replace(/1,500/g, '{Math.floor(xpNeededForNext)}');
jsx = jsx.replace(/82\.6%/g, '{progressPercent.toFixed(1)}%');
jsx = jsx.replace(/2,840/g, '{currency?.balance || 0}');
jsx = jsx.replace(/7\s*<\/span>\s*<span className="font-mono text-xs text-sage-muted uppercase">Days<\/span>/, '{streak?.currentStreak || 0}</span>\n<span className="font-mono text-xs text-sage-muted uppercase">Days</span>');
jsx = jsx.replace(/>18</, '>{attr.strengthXp || 0}<');
jsx = jsx.replace(/>24</, '>{attr.intellectXp || 0}<');
jsx = jsx.replace(/>19</, '>{attr.wisdomXp || 0}<');
jsx = jsx.replace(/>22</, '>{attr.focusXp || 0}<');
jsx = jsx.replace(/>16</, '>{attr.vitalityXp || 0}<');

const template = `
import React, { useEffect, useState } from 'react';
import { api } from '../api';
import '../sanctum-gothic.css';

export function Sanctum() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    api.get('/auth/me').then(res => setProfile(res.data)).catch(console.error);
  }, []);

  if (!profile) return <div className="p-8 text-ivory-warm animate-pulse font-cinzel">Summoning data...</div>;

  const char = profile.character;
  const attr = profile.attribute;
  const streak = profile.streak;
  const currency = profile.currency;

  const calculateRequiredXp = (level: number) => Math.floor(100 * Math.pow(level, 1.5));
  const currentLevelXpRequired = calculateRequiredXp(char.level);
  const nextLevelXpRequired = calculateRequiredXp(char.level + 1);
  const xpIntoLevel = char.totalXp - currentLevelXpRequired;
  const xpNeededForNext = nextLevelXpRequired - currentLevelXpRequired;
  const progressPercent = Math.min(100, Math.max(0, (xpIntoLevel / xpNeededForNext) * 100));

  return (
    <div className="bg-obsidian-deep min-h-screen text-ivory-warm font-sans selection:bg-crimson-deep selection:text-gold-bright">
      {/* We strip the <main> tag from the Stitch output and embed it here */}
      ${jsx}
    </div>
  );
}
`;

fs.writeFileSync('../frontend/src/pages/Sanctum.tsx', template);
console.log("Sanctum.tsx updated!");

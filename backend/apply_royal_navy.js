const fs = require('fs');

function applyTheme(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Backgrounds
  content = content.replace(/bg-\[#F8F6F0\]/g, 'bg-[#0D1B2A]');
  content = content.replace(/bg-\[#D0F4F0\]/g, 'bg-[#1B263B]');
  content = content.replace(/bg-\[#B6CBF6\]/g, 'bg-[#415A77]');
  content = content.replace(/bg-\[#8AA3F8\]/g, 'bg-[#D4AF37]');
  
  // Text
  content = content.replace(/text-slate-800/g, 'text-[#F7F3E9]');
  content = content.replace(/text-slate-600/g, 'text-[#F7F3E9]/70');
  content = content.replace(/text-\[#8AA3F8\]/g, 'text-[#D4AF37]');
  
  // Borders
  content = content.replace(/border-\[#B6CBF6\]/g, 'border-[#415A77]');
  
  // Gradients
  content = content.replace(/from-\[#8AA3F8\]/g, 'from-[#1B263B]');
  content = content.replace(/to-\[#B6CBF6\]/g, 'to-[#415A77]');
  content = content.replace(/via-\[#D0F4F0\]/g, 'via-[#415A77]');
  content = content.replace(/to-\[#8AA3F8\]/g, 'to-[#D4AF37]');

  fs.writeFileSync(filePath, content);
}

applyTheme('../frontend/src/pages/Sanctum.tsx');
applyTheme('../frontend/src/components/layout/Layout.tsx');
console.log('Applied Royal Navy mode variants');

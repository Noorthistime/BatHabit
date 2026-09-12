const fs = require('fs');

function applyTheme(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Backgrounds
  content = content.replace(/bg-\[#0c0608\]/g, 'bg-[#F8F6F0] dark:bg-[#0c0608]');
  content = content.replace(/bg-\[rgba\(35,6,8,0\.78\)\]/g, 'bg-[#D0F4F0] dark:bg-[rgba(35,6,8,0.78)]');
  content = content.replace(/bg-\[#140406\]\/92/g, 'bg-[#F8F6F0]/92 dark:bg-[#140406]/92');
  content = content.replace(/bg-\[#120305\]\/95/g, 'bg-[#F8F6F0]/95 dark:bg-[#120305]/95');
  content = content.replace(/bg-\[#1e0306\]/g, 'bg-[#D0F4F0] dark:bg-[#1e0306]');
  content = content.replace(/bg-\[#250101\]/g, 'bg-[#B6CBF6] dark:bg-[#250101]');
  content = content.replace(/bg-\[#160202\]/g, 'bg-[#D0F4F0] dark:bg-[#160202]');
  content = content.replace(/bg-\[#200000\]/g, 'bg-[#D0F4F0] dark:bg-[#200000]');
  content = content.replace(/bg-\[#180000\]/g, 'bg-[#B6CBF6] dark:bg-[#180000]');
  content = content.replace(/bg-\[#1c0000\]/g, 'bg-[#B6CBF6] dark:bg-[#1c0000]');
  content = content.replace(/bg-\[#2c0000\]/g, 'bg-[#B6CBF6] dark:bg-[#2c0000]');
  content = content.replace(/bg-\[#120305\]/g, 'bg-[#F8F6F0] dark:bg-[#120305]');
  content = content.replace(/bg-\[#2a0303\]/g, 'bg-[#B6CBF6] dark:bg-[#2a0303]');
  
  // Gradients backgrounds
  content = content.replace(/from-\[#9e1313\]/g, 'from-[#B6CBF6] dark:from-[#9e1313]');
  content = content.replace(/to-\[#2D0000\]/g, 'to-[#8AA3F8] dark:to-[#2D0000]');
  content = content.replace(/from-\[#3d0303\]/g, 'from-[#D0F4F0] dark:from-[#3d0303]');
  content = content.replace(/via-\[#1a0000\]/g, 'via-[#D0F4F0] dark:via-[#1a0000]');
  content = content.replace(/to-\[#0f0000\]/g, 'to-[#D0F4F0] dark:to-[#0f0000]');
  content = content.replace(/from-\[#280406\]/g, 'from-[#D0F4F0] dark:from-[#280406]');
  content = content.replace(/to-\[#140203\]/g, 'to-[#F8F6F0] dark:to-[#140203]');
  content = content.replace(/from-\[#2b0303\]/g, 'from-[#D0F4F0] dark:from-[#2b0303]');
  content = content.replace(/to-\[#120000\]/g, 'to-[#B6CBF6] dark:to-[#120000]');
  
  // Text Colors
  content = content.replace(/text-\[#EEEAD7\]/g, 'text-slate-800 dark:text-[#EEEAD7]');
  content = content.replace(/text-\[#8d9685\]/g, 'text-slate-600 dark:text-[#8d9685]');
  content = content.replace(/text-\[#F5D77F\]/g, 'text-[#8AA3F8] dark:text-[#F5D77F]');
  content = content.replace(/text-\[#C5A059\]/g, 'text-[#8AA3F8] dark:text-[#C5A059]');
  content = content.replace(/text-\[#D4AF37\]/g, 'text-[#8AA3F8] dark:text-[#D4AF37]');
  content = content.replace(/text-[#ff6600]/g, 'text-[#8AA3F8] dark:text-[#ff6600]');
  
  // Borders
  content = content.replace(/border-\[#D4AF37\]/g, 'border-[#B6CBF6] dark:border-[#D4AF37]');
  content = content.replace(/border-\[#F5D77F\]/g, 'border-[#B6CBF6] dark:border-[#F5D77F]');
  
  // Custom button gradients (Quests)
  content = content.replace(/from-\[#6D0808\] to-\[#8e0c0c\]/g, 'from-[#8AA3F8] to-[#B6CBF6] dark:from-[#6D0808] dark:to-[#8e0c0c]');
  content = content.replace(/from-\[#6D0808\] to-\[#8b0e0e\]/g, 'from-[#8AA3F8] to-[#B6CBF6] dark:from-[#6D0808] dark:to-[#8b0e0e]');
  content = content.replace(/from-\[#6D0808\] to-\[#3a0404\]/g, 'from-[#8AA3F8] to-[#B6CBF6] dark:from-[#6D0808] dark:to-[#3a0404]');
  
  content = content.replace(/bg-\[#6D0808\]/g, 'bg-[#8AA3F8] dark:bg-[#6D0808]');

  fs.writeFileSync(filePath, content);
}

applyTheme('../frontend/src/pages/Sanctum.tsx');
applyTheme('../frontend/src/components/layout/Layout.tsx');
console.log('Applied light mode variants');

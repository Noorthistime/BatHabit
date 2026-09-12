const fs = require('fs');
let content = fs.readFileSync('../frontend/src/pages/Landing.tsx', 'utf-8');

// The strategy is to wrap existing dark colors with dark: and prepend the light color.
// Wait, right now they are NOT wrapped with dark:.
// Example: bg-[#0a0204] -> bg-[#0D1B2A] dark:bg-[#0a0204]

const replacements = [
  // Backgrounds
  { search: /bg-\[#0a0204\]/g, replace: 'bg-[#0D1B2A] dark:bg-[#0a0204]' },
  { search: /bg-\[#120305\]/g, replace: 'bg-[#1B263B] dark:bg-[#120305]' },
  { search: /bg-\[#1e0306\]/g, replace: 'bg-[#415A77]/40 dark:bg-[#1e0306]' },
  { search: /bg-\[#060102\]/g, replace: 'bg-[#0D1B2A] dark:bg-[#060102]' },
  { search: /bg-\[#3a0404\]/g, replace: 'bg-[#1B263B] dark:bg-[#3a0404]' },
  { search: /bg-\[#6D0808\]/g, replace: 'bg-[#415A77] dark:bg-[#6D0808]' },
  { search: /bg-\[#6d0808\]/g, replace: 'bg-[#415A77] dark:bg-[#6d0808]' },
  { search: /bg-\[#1a0101\]/g, replace: 'bg-[#0D1B2A] dark:bg-[#1a0101]' },
  { search: /bg-\[#4a0202\]/g, replace: 'bg-[#1B263B] dark:bg-[#4a0202]' },
  { search: /bg-\[#2a0404\]/g, replace: 'bg-[#1B263B] dark:bg-[#2a0404]' },
  { search: /bg-\[#0f0000\]/g, replace: 'bg-[#0D1B2A] dark:bg-[#0f0000]' },
  { search: /bg-\[#140000\]/g, replace: 'bg-[#0D1B2A] dark:bg-[#140000]' },
  { search: /bg-\[#201004\]/g, replace: 'bg-[#1B263B] dark:bg-[#201004]' },

  // Text colors
  { search: /text-\[#EEEAD7\]/g, replace: 'text-[#F7F3E9] dark:text-[#EEEAD7]' },
  { search: /text-\[#8d9685\]/g, replace: 'text-[#F7F3E9]/70 dark:text-[#8d9685]' },
  { search: /text-\[#6D0808\]/g, replace: 'text-[#415A77] dark:text-[#6D0808]' },

  // Border colors
  { search: /border-\[#D4AF37\](\/[0-9]+)?/g, replace: 'border-[#415A77] dark:border-[#D4AF37]$1' },
  { search: /border-\[#6D0808\]/g, replace: 'border-[#1B263B] dark:border-[#6D0808]' },

  // Gradients
  { search: /from-\[#6D0808\]/g, replace: 'from-[#415A77] dark:from-[#6D0808]' },
  { search: /to-\[#3a0404\]/g, replace: 'to-[#1B263B] dark:to-[#3a0404]' },
  { search: /to-\[#4a0202\]/g, replace: 'to-[#1B263B] dark:to-[#4a0202]' },
  { search: /from-\[#1e0306\]/g, replace: 'from-[#415A77] dark:from-[#1e0306]' },
  { search: /to-\[#0a0204\]/g, replace: 'to-[#0D1B2A] dark:to-[#0a0204]' },
  { search: /from-\[#2a0404\]/g, replace: 'from-[#1B263B] dark:from-[#2a0404]' },
  { search: /from-\[#3a0404\]/g, replace: 'from-[#1B263B] dark:from-[#3a0404]' },
  { search: /from-\[#201004\]/g, replace: 'from-[#1B263B] dark:from-[#201004]' },
  { search: /to-\[#0f0000\]/g, replace: 'to-[#0D1B2A] dark:to-[#0f0000]' },
  { search: /to-\[#140000\]/g, replace: 'to-[#0D1B2A] dark:to-[#140000]' },
  { search: /via-\[#415A77\]/g, replace: 'via-[#1B263B] dark:via-[#415A77]' },
  { search: /via-\[#1a0000\]/g, replace: 'via-[#0D1B2A] dark:via-[#1a0000]' },

  // Fix some shadows
  { search: /shadow-\[0_0_15px_rgba\(109,8,8,0\.5\)\]/g, replace: 'shadow-[0_0_15px_rgba(65,90,119,0.5)] dark:shadow-[0_0_15px_rgba(109,8,8,0.5)]' },
  { search: /shadow-\[0_0_30px_rgba\(109,8,8,0\.7\)\]/g, replace: 'shadow-[0_0_30px_rgba(65,90,119,0.7)] dark:shadow-[0_0_30px_rgba(109,8,8,0.7)]' },
  { search: /shadow-\[0_0_30px_rgba\(109,8,8,0\.3\)\]/g, replace: 'shadow-[0_0_30px_rgba(65,90,119,0.3)] dark:shadow-[0_0_30px_rgba(109,8,8,0.3)]' },
  { search: /shadow-\[0_0_15px_rgba\(109,8,8,0\.4\)\]/g, replace: 'shadow-[0_0_15px_rgba(65,90,119,0.4)] dark:shadow-[0_0_15px_rgba(109,8,8,0.4)]' },
  { search: /shadow-\[0_0_30px_rgba\(109,8,8,0\.5\)\]/g, replace: 'shadow-[0_0_30px_rgba(65,90,119,0.5)] dark:shadow-[0_0_30px_rgba(109,8,8,0.5)]' }
];

replacements.forEach(r => {
  content = content.replace(r.search, r.replace);
});

fs.writeFileSync('../frontend/src/pages/Landing.tsx', content);
console.log('Done');

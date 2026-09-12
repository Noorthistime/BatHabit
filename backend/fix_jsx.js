const fs = require('fs');

let jsx = fs.readFileSync('../frontend/src/pages/Sanctum.tsx', 'utf-8');

// Remove HTML comments <!-- -->
jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

// Convert common unclosed tags
jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');

// Remove any lingering `style={{...}}>` missing closing quote or bracket?
// Actually wait, TS1003 is usually unescaped `<` or `{`. 
// Also replace `tabindex=` with `tabIndex=`
jsx = jsx.replace(/tabindex=/g, 'tabIndex=');

// SVG paths that don't close?
jsx = jsx.replace(/<(path[^>]*?)(?<!\/)>/g, '<$1 />');
jsx = jsx.replace(/<(circle[^>]*?)(?<!\/)>/g, '<$1 />');
jsx = jsx.replace(/<(rect[^>]*?)(?<!\/)>/g, '<$1 />');

// viewBox should be viewBox (we did this already)
jsx = jsx.replace(/viewbox/g, 'viewBox');

fs.writeFileSync('../frontend/src/pages/Sanctum.tsx', jsx);
console.log("Fixed JSX syntax");

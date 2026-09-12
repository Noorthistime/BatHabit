const fs = require('fs');
const html = fs.readFileSync('stitch_sanctum.html', 'utf-8');

// Extract the <style> block
const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/g);
let styles = '';
if (styleMatch) {
  styles = styleMatch.map(s => s.replace(/<\/?style>/g, '')).join('\n');
}

// Write the styles to a separate css file or just output them.
fs.writeFileSync('../frontend/src/sanctum-gothic.css', styles);

// Extract the <main> element
const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
let mainContent = mainMatch ? mainMatch[0] : '';

// Convert HTML to JSX
// class= to className=
mainContent = mainContent.replace(/class=/g, 'className=');
// viewbox to viewBox
mainContent = mainContent.replace(/viewbox=/g, 'viewBox=');
// self-closing tags
mainContent = mainContent.replace(/<img([^>]+[^\/])>/g, '<img$1 />');
mainContent = mainContent.replace(/<input([^>]+[^\/])>/g, '<input$1 />');

// Remove static text and replace with dynamic vars, or just leave it for now.
// Actually, it's easier to output the raw JSX and then I will use multi_replace to hook up the variables.
fs.writeFileSync('raw_jsx.txt', mainContent);
console.log("Converted main content to JSX");

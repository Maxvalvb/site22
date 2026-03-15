const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Remove animate-pulse from Navbar
content = content.replace('<span className="w-1.5 h-1.5 rounded-full bg-[#2563e8] animate-pulse" />', '<span className="w-1.5 h-1.5 rounded-full bg-[#2563e8]" />');

// 2. Replace <motion.div ...> with <div ...> and remove animation props
content = content.replace(/<motion\.div([\s\S]*?)>/g, (match, p1) => {
  let inner = p1.replace(/\s*(initial|animate|transition|variants|whileInView|viewport|exit)=\{[\s\S]*?\}/g, '');
  inner = inner.replace(/\s*(initial|animate|transition|variants|whileInView|viewport|exit)="[^"]*"/g, '');
  return `<div${inner}>`;
});
content = content.replace(/<\/motion\.div>/g, '</div>');

// 3. Replace <motion.p ...> with <p ...>
content = content.replace(/<motion\.p([\s\S]*?)>/g, (match, p1) => {
  let inner = p1.replace(/\s*(initial|animate|transition|variants|whileInView|viewport|exit)=\{[\s\S]*?\}/g, '');
  inner = inner.replace(/\s*(initial|animate|transition|variants|whileInView|viewport|exit)="[^"]*"/g, '');
  return `<p${inner}>`;
});
content = content.replace(/<\/motion\.p>/g, '</p>');

// 4. Remove AnimatePresence
content = content.replace(/<AnimatePresence>/g, '');
content = content.replace(/<\/AnimatePresence>/g, '');

fs.writeFileSync('src/App.tsx', content);

// Also process Construction.tsx
let constr = fs.readFileSync('src/projects/Construction.tsx', 'utf8');
constr = constr.replace(/animate-\[marquee_20s_linear_infinite\]/g, '');
constr = constr.replace(/animate-pulse/g, '');
fs.writeFileSync('src/projects/Construction.tsx', constr);

// Also process Fitness.tsx
let fit = fs.readFileSync('src/projects/Fitness.tsx', 'utf8');
fit = fit.replace(/animate-\[marquee_10s_linear_infinite\]/g, '');
fs.writeFileSync('src/projects/Fitness.tsx', fit);

console.log('Done');

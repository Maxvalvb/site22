const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'src/App.tsx',
  'src/projects/Construction.tsx',
  'src/projects/EcoStore.tsx',
  'src/projects/Fitness.tsx',
  'src/projects/Restaurant.tsx'
];

function processFile(filePath) {
  const absolutePath = path.resolve(process.cwd(), filePath);
  if (!fs.existsSync(absolutePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(absolutePath, 'utf8');
  
  // Remove hover: classes
  content = content.replace(/\bhover:[a-zA-Z0-9_\[\]\-#]+\b/g, '');
  
  // Remove group-hover: classes
  content = content.replace(/\bgroup-hover:[a-zA-Z0-9_\[\]\-#]+\b/g, '');
  
  // Clean up multiple spaces
  content = content.replace(/\s{2,}/g, ' ');
  // Clean up spaces before closing quotes
  content = content.replace(/\s+"/g, '"');
  
  fs.writeFileSync(absolutePath, content, 'utf8');
  console.log(`Processed ${filePath}`);
}

filesToProcess.forEach(processFile);

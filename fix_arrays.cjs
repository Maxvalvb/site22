const fs = require('fs');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // App.tsx fixes
  content = content.replace(/},;/g, '} ];');
  content = content.replace(/}; const Badge/g, '} ]; const Badge');

  // .map fixes
  content = content.replace(/}\.map/g, '} ].map');
  content = content.replace(/'\.map/g, "'] .map");
  content = content.replace(/"\.map/g, '"] .map');
  
  // Restaurant.tsx specific fixes
  content = content.replace(/}}, { cat:/g, '} ] }, { cat:');
  content = content.replace(/}}\.map/g, '} ]}.map');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
  }
}

fixFile('src/App.tsx');
fixFile('src/projects/Construction.tsx');
fixFile('src/projects/EcoStore.tsx');
fixFile('src/projects/Fitness.tsx');
fixFile('src/projects/Restaurant.tsx');

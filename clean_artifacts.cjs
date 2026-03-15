const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Remove artifacts
    // `]/50` -> ` ]/50`
    content = content.replace(/\s+\]\/[0-9]+/g, '');
    // `/10` -> ` /10`
    content = content.replace(/\s+\/[0-9]+/g, '');
    // `]` -> ` ]`
    content = content.replace(/\s+\]/g, '');
    // `group-]` -> ` group-]`
    content = content.replace(/\s+group-\]/g, '');
    // `group-` -> ` group-`
    content = content.replace(/\s+group-/g, '');
    
    // Clean up multiple spaces
    content = content.replace(/ className="([^"]+)"/g, (match, p1) => {
      let cleaned = p1.replace(/\s{2,}/g, ' ').trim();
      return ` className="${cleaned}"`;
    });
    
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned ${filePath}`);
    }
  }
});

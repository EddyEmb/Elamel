const fs = require('fs');
const path = require('path');

const pt = JSON.parse(fs.readFileSync('./src/locales/pt.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('./src/locales/en.json', 'utf8'));

function getVal(obj, p) {
  const parts = p.split('.');
  let curr = obj;
  for (const part of parts) {
    if (curr && typeof curr === 'object' && part in curr) {
      curr = curr[part];
    } else {
      return undefined;
    }
  }
  return curr;
}

function getAllFiles(dir, exts = ['.tsx', '.ts']) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      if (item !== 'node_modules' && item !== 'dist' && item !== '.git') {
        files = files.concat(getAllFiles(full, exts));
      }
    } else if (exts.includes(path.extname(full))) {
      files.push(full);
    }
  }
  return files;
}

const allTsx = getAllFiles('./src');
const keyRegex = /\bt\(\s*['"]([^'"]+)['"]/g;
const foundKeys = new Set();
const fileKeyMap = {};

for (const f of allTsx) {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = keyRegex.exec(content)) !== null) {
    foundKeys.add(m[1]);
    fileKeyMap[m[1]] = (fileKeyMap[m[1]] || []).concat(f);
  }
}

console.log('Total unique t() keys found in code:', foundKeys.size);

const missingPt = [];
const missingEn = [];

for (const k of Array.from(foundKeys).sort()) {
  const vPt = getVal(pt, k);
  if (vPt === undefined) {
    missingPt.push(k);
  }
  const vEn = getVal(en, k);
  if (vEn === undefined) {
    missingEn.push(k);
  }
}

console.log('\n--- MISSING IN PT (' + missingPt.length + ') ---');
missingPt.forEach(k => console.log('PT Missing:', k, 'in', fileKeyMap[k][0]));

console.log('\n--- MISSING IN EN (' + missingEn.length + ') ---');
missingEn.forEach(k => console.log('EN Missing:', k, 'in', fileKeyMap[k][0]));

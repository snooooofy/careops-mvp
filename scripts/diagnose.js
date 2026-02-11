const {execSync} = require('child_process');
console.log('--- DIAGNOSTIC START ---');
try{
  console.log('node', process.version);
  console.log('platform', process.platform);
  console.log('cwd', process.cwd());
  console.log('npm version:', execSync('npm --version').toString());
  console.log('ls package.json:');
  console.log(execSync('cat package.json').toString());
  console.log('ls node_modules (first 100 chars):');
  try{ console.log(execSync('ls node_modules | head -n 50').toString()); }catch(e){console.log('node_modules not present or empty');}
}catch(e){console.error('diagnose err',e.message)}
console.log('--- DIAGNOSTIC END ---');

const {execSync} = require('child_process');
console.log('--- BUILD VERBOSE START ---');
try{
  console.log('node', process.version);
  console.log('npm', execSync('npm --version').toString().trim());
  console.log('pwd', process.cwd());
  console.log('ls -la');
  console.log(execSync('ls -la').toString());
  console.log('Running next build --debug');
  console.log(execSync('npx next build --debug', {stdio:'inherit'}));
}catch(e){
  console.error('build error:', e.message);
  process.exit(1);
}
console.log('--- BUILD VERBOSE END ---');

const fs = require('fs');
const path = require('path');

const base = path.join(__dirname, '..', 'node_modules', 'm1st-design-tokens');
const cssPath = path.join(base, 'dist', 'css', 'tokens.css');
const pkgPath = path.join(base, 'package.json');

function log(msg){ console.log('[ensure-design-tokens]', msg); }

try {
  if(!fs.existsSync(pkgPath)) {
    log('package.json not found; dependency may have failed to clone.');
    process.exit(0);
  }
  // Sanitize potential BOM
  let raw = fs.readFileSync(pkgPath);
  if (raw[0] === 0xEF && raw[1] === 0xBB && raw[2] === 0xBF) {
    raw = raw.slice(3);
    fs.writeFileSync(pkgPath, raw);
    log('Removed BOM from package.json');
  }
  const pkg = JSON.parse(raw.toString('utf8'));
  if (fs.existsSync(cssPath)) {
    log('dist already present; no action. version=' + pkg.version);
    process.exit(0);
  }
  log('dist assets missing; attempting local build...');
  const { execSync } = require('child_process');
  execSync('npm run build', { cwd: base, stdio: 'inherit' });
  if (fs.existsSync(cssPath)) log('Build successful.'); else log('Build did not produce expected css/tokens.css');
} catch (e) {
  log('Error: ' + e.message);
  // Do not fail install; leave to developer to inspect.
}

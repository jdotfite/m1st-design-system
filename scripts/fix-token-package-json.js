const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'node_modules', 'm1st-design-tokens', 'package.json');

try {
  if (fs.existsSync(pkgPath)) {
    let raw = fs.readFileSync(pkgPath);
    // Strip UTF-8 BOM if present
    if (raw[0] === 0xEF && raw[1] === 0xBB && raw[2] === 0xBF) {
      raw = raw.slice(3);
    }
    const text = raw.toString('utf8');
    const parsed = JSON.parse(text); // will throw if still invalid
    // Re-write clean JSON (2-space indent) ensuring no BOM
    fs.writeFileSync(pkgPath, JSON.stringify(parsed, null, 2));
    console.log('[fix-token-package-json] Sanitized design-tokens package.json');
  } else {
    console.warn('[fix-token-package-json] design-tokens package.json not found');
  }
} catch (e) {
  console.error('[fix-token-package-json] Failed to sanitize:', e.message);
  process.exitCode = 0; // don't fail install
}

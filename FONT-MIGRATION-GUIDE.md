# Font Migration Guide
**Moving fonts from showcase repo to centralized token repo**

## Current State
- ✅ **Font files**: Located in `public/fonts/` (392+ files)
- ✅ **Font CSS**: `inter.css` and `din-2014.css` with @font-face declarations
- ✅ **Font tokens**: Already defined in token repo (`--font-family-body`, `--font-family-heading`)
- ❌ **Missing**: Fonts not yet centralized in token repo

## Migration Steps

### Phase 1: Copy Fonts to Token Repo
```bash
# Copy all fonts to token repo
npm run fonts:copy-to-tokens
```

This copies:
- All Inter font files (.woff2)
- All DIN-2014 font files (.otf, .woff)
- Font CSS files (inter.css, din-2014.css)

### Phase 2: Update Token Repo Structure
After copying, your token repo should look like:
```
C:\_websites\m1st-design-tokens\
├── fonts/
│   ├── inter.css
│   ├── din-2014.css
│   ├── Inter-Regular.woff2
│   ├── DIN-2014_Regular.otf
│   └── ...all other font files
├── src/
│   └── tokens/
│       └── typography.json (update to include font paths)
└── dist/
    ├── css/
    │   └── tokens.css (should include font faces)
    └── fonts/ (built font files)
```

### Phase 3: Update Token Build Process
In your token repo, update the build config to:
1. Copy font files to `dist/fonts/`
2. Include @font-face declarations in the CSS output
3. Update font paths to reference the distributed fonts

### Phase 4: Update Package Exports
Update token repo's `package.json` to export fonts:
```json
{
  "exports": {
    ".": "./dist/js/tokens.js",
    "./css": "./dist/css/tokens.css",
    "./fonts/*": "./dist/fonts/*"
  },
  "files": [
    "dist/"
  ]
}
```

### Phase 5: Update This Repo
1. Remove font imports from CSS
2. Update `tokens:copy` script to also copy fonts
3. Update paths to reference package fonts
4. Clean up `public/fonts/` directory

### Phase 6: Test & Cleanup
1. Run `npm run tokens:update`
2. Test fonts are loading correctly
3. Remove `public/fonts/` directory
4. Update any hardcoded font paths

## Benefits After Migration
- ✅ **Single source of truth** for all fonts
- ✅ **Versioned fonts** through the token package
- ✅ **Consistent font loading** across all projects
- ✅ **Smaller showcase repo** (no font files)
- ✅ **Better caching** (fonts served from CDN/package)

## Commands
```bash
# Start migration
npm run fonts:prepare-migration

# Update tokens (after token repo is updated)
npm run tokens:update

# Check current setup
npm run tokens:check
```

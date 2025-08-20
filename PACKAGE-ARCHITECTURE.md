# M1st Design System - Package Architecture Plan

## 📦 Package Distribution Strategy

### Structure:
```
@m1st/design-system/
├── dist/
│   ├── index.css                 # Complete design system CSS
│   ├── index.js                  # All component exports
│   ├── components/               # Individual components
│   │   ├── Button/
│   │   │   └── Button.js         # React component only
│   │   ├── Typography/
│   │   │   └── Typography.js     # React component only
│   │   └── Card/
│   │       └── Card.js
│   └── fonts/                    # Font files
│       ├── DIN-2014_Regular.woff2
│       ├── Inter-Regular.woff2
│       └── ...
```

## 🎯 CSS Organization

### Main CSS File (`dist/index.css`):
```css
/* 1. CSS Variables (Design Tokens) */
:root {
  --font-family-heading: "DIN-2014", sans-serif;
  --font-family-body: "Inter", sans-serif;
  --font-heading-xxl-size: 4rem;
  /* ... all tokens ... */
}

/* 2. Font Imports */
@import './fonts/din-2014.css';
@import './fonts/inter.css';

/* 3. Typography Utilities */
.text-heading-xxl { /* ... */ }
.text-body-m { /* ... */ }

/* 4. Component Base Styles */
.btn { /* ... */ }
.card { /* ... */ }

/* 5. Theme Support */
[data-theme="dark"] {
  /* dark theme overrides */
}
```

## 📋 Consumer Usage

### Installation:
```bash
npm install @m1st/design-system
```

### Usage:
```tsx
// 1. Import CSS once in your app root
import '@m1st/design-system/dist/index.css';

// 2. Import components as needed
import { Button, Typography, Card } from '@m1st/design-system';

// 3. Use utility classes anywhere
function MyApp() {
  return (
    <div>
      <h1 className="text-heading-xxl">Welcome</h1>
      <p className="text-body-m">Description text</p>
      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

## 🔄 Build Process

### Current Dev Setup → Package Build:
1. **Fonts**: Copy to `dist/fonts/`
2. **CSS**: Bundle all CSS variables + utilities → `dist/index.css`
3. **Components**: Compile React components → `dist/components/`
4. **Types**: Generate TypeScript definitions

### Build Script Example:
```json
{
  "scripts": {
    "build:css": "postcss src/index.css -o dist/index.css",
    "build:components": "tsc && rollup -c",
    "build:fonts": "cp -r src/fonts dist/",
    "build": "npm run build:css && npm run build:components && npm run build:fonts"
  }
}
```

## ✅ Benefits of This Approach:

1. **Single CSS Import**: Consumers import once, use everywhere
2. **Font Management**: Fonts bundled with package
3. **Consistent Tokens**: All design tokens available globally
4. **Tree Shaking**: Unused components can be tree-shaken
5. **Developer Experience**: Simple import, IntelliSense for classes
6. **Theme Support**: Built-in light/dark theme switching

## 🚀 Next Steps:

1. Consolidate all CSS into single `index.css`
2. Set up component build pipeline
3. Create package.json with proper exports
4. Set up font file copying
5. Add TypeScript definitions
6. Create Storybook for documentation

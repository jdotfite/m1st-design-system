# M1st Design System - Dual Distribution Strategy

## 📦 Package Structure for Multiple Adoption Patterns

### Main Package Structure:
```
@m1st/design-system/
├── dist/
│   ├── index.css                 # Full monolithic CSS
│   ├── index.js                  # All components
│   ├── tokens/
│   │   ├── index.css             # Just design tokens + fonts
│   │   └── typography.css        # Typography utilities only
│   ├── components/               # Individual component bundles
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.css        # Button + required tokens
│   │   │   └── package.json      # Subpackage exports
│   │   ├── Typography/
│   │   │   ├── Typography.js
│   │   │   ├── Typography.css    # Typography utilities + tokens
│   │   │   └── package.json
│   │   └── Card/
│   │       ├── Card.js
│   │       ├── Card.css
│   │       └── package.json
│   └── fonts/                    # Shared font files
```

## 🎯 Usage Patterns

### Pattern 1: Marketing Website (Monolithic)
```tsx
// Import everything at once
import '@m1st/design-system/dist/index.css';
import { Button, Card, Typography } from '@m1st/design-system';

function MarketingPage() {
  return (
    <div>
      <h1 className="text-heading-xxl">Welcome</h1>
      <p className="text-body-m">Description</p>
      <Button variant="primary">Get Started</Button>
      <Card>Content here</Card>
    </div>
  );
}
```

### Pattern 2: Banking App (Incremental)
```tsx
// Week 1: Just start with typography
import '@m1st/design-system/components/Typography/Typography.css';
import { Typography } from '@m1st/design-system/components/Typography';

function AccountHeader() {
  return (
    <div>
      <h1 className="text-heading-xl">Account Balance</h1>
      <p className="text-body-m">Available funds</p>
    </div>
  );
}

// Week 5: Add Button component
import '@m1st/design-system/components/Button/Button.css';
import { Button } from '@m1st/design-system/components/Button';

// Week 10: Add Card component
import '@m1st/design-system/components/Card/Card.css';
import { Card } from '@m1st/design-system/components/Card';
```

### Pattern 3: Tokens Only (Advanced)
```tsx
// Just design tokens for custom components
import '@m1st/design-system/tokens/index.css';

function CustomBankingWidget() {
  return (
    <div style={{
      backgroundColor: 'var(--color-surface-primary)',
      color: 'var(--color-text-primary)',
      fontSize: 'var(--font-body-m-size)'
    }}>
      Custom UI using design tokens
    </div>
  );
}
```

## 🔧 Component CSS Structure

### Example: Button.css (Self-contained)
```css
/* Import only required tokens */
@import '../tokens/colors.css';
@import '../tokens/typography.css';
@import '../tokens/spacing.css';

/* Button component styles */
.btn {
  font-family: var(--font-family-body);
  font-size: var(--font-body-m-size);
  padding: var(--space-m) var(--space-l);
  /* ... */
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-primary-contrast);
}
```

### Example: Typography.css (Utilities + Tokens)
```css
/* Import fonts and base tokens */
@import '../fonts/din-2014.css';
@import '../fonts/inter.css';
@import '../tokens/typography.css';

/* Typography utilities */
.text-heading-xxl {
  font-family: var(--font-family-heading);
  font-size: var(--font-heading-xxl-size);
  /* ... */
}

.text-body-m {
  font-family: var(--font-family-body);
  font-size: var(--font-body-m-size);
  /* ... */
}
```

## 📋 Package.json Exports

```json
{
  "name": "@m1st/design-system",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./dist/index.css": "./dist/index.css",
    "./tokens": {
      "import": "./dist/tokens/index.js",
      "types": "./dist/tokens/index.d.ts"
    },
    "./tokens/*.css": "./dist/tokens/*.css",
    "./components/*": {
      "import": "./dist/components/*/index.js",
      "types": "./dist/components/*/index.d.ts"
    },
    "./components/*/style": "./dist/components/*/*.css"
  }
}
```

## 🚀 Migration Path for Banking Team

### Phase 1: Foundation (Week 1-2)
```tsx
import '@m1st/design-system/tokens/index.css';
// Start using CSS variables in existing components
```

### Phase 2: Typography (Week 3-4)
```tsx
import '@m1st/design-system/components/Typography/Typography.css';
// Replace custom text styles with utility classes
```

### Phase 3: Core Components (Week 5-12)
```tsx
import '@m1st/design-system/components/Button/Button.css';
import '@m1st/design-system/components/Card/Button.css';
// One component at a time
```

### Phase 4: Full Adoption (Month 4+)
```tsx
// Eventually migrate to full import
import '@m1st/design-system/dist/index.css';
```

## ✅ Benefits:

- **Marketing**: Fast implementation, full design system
- **Banking**: Gradual adoption, reduced risk, smaller bundles
- **Flexibility**: Teams choose their adoption strategy
- **Bundle Size**: Only load what you need
- **Migration**: Clear path from incremental → full adoption

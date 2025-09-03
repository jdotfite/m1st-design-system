# Design Tokens Usage Guide

## Installation

Add the design tokens package as a git dependency in your `package.json`:

```json
{
  "dependencies": {
    "m1st-design-tokens": "github:jdotfite/m1st-design-tokens#v2.2.0"
  }
}
```

**Alternative repositories:**
- **Personal fork**: `github:jdotfite/m1st-design-tokens#v2.2.0` 
- **Organization**: `github:Members1stFederalCreditUnion/m1st-design-tokens#v2.2.0`

Then install:
```bash
npm install
```

## CSS Import

Import the design tokens CSS in your main stylesheet:

```css
/* Required: Core design tokens */
@import "m1st-design-tokens/css";

/* Optional: Typography utilities and classes */
@import "m1st-design-tokens/typography";
```

## Available Imports

The design tokens package provides several CSS files:

- **`css`** - Core tokens (colors, spacing, typography variables)
- **`typography`** - Typography utility classes and font declarations
- **`legacy`** - Legacy token format for backward compatibility

## Usage Examples

### CSS Custom Properties
```css
.my-component {
  color: var(--page-text-primary);
  background: var(--page-surface-elevated);
  font-family: var(--font-family-heading);
  font-size: var(--font-heading-xl-size);
  margin: var(--space-4);
}
```

### Typography Classes
```html
<h1 class="text-heading-xxl">Hero Title</h1>
<h2 class="text-heading-xl">Section Title</h2>
<p class="text-body-m">Body text content</p>
```

## Font Loading

Fonts are automatically loaded via CSS `@font-face` declarations. The package includes:

- **DIN-2014** - For headings (automatically uppercase)
- **Inter** - For body text and interfaces

## Version Pinning

Always pin to a specific version tag for production:

```json
"m1st-design-tokens": "github:jdotfite/m1st-design-tokens#v2.2.0"
```

Available versions:
- `v2.2.0` - Latest stable
- `v2.1.0` - Previous stable
- `master` - Development branch (not recommended for production)

## Troubleshooting

### Font Resolution Warnings
Webpack may show font resolution warnings during build. These are non-blocking and fonts will load correctly at runtime.

### Missing Font Files
If you see font loading errors, ensure your bundler is configured to handle font assets from node_modules.

## Integration Examples

### React (Create React App)
```jsx
// src/index.css
@import "m1st-design-tokens/css";
@import "m1st-design-tokens/typography";

// Component usage
function MyComponent() {
  return (
    <div className="text-heading-xl" style={{ color: 'var(--page-text-primary)' }}>
      Hello World
    </div>
  );
}
```

### Next.js
```css
/* styles/globals.css */
@import "m1st-design-tokens/css";
@import "m1st-design-tokens/typography";
```

### Vite
```css
/* src/style.css */
@import "m1st-design-tokens/css";
@import "m1st-design-tokens/typography";
```

## Development

For local development with the tokens package:

```bash
# Link local development version
npm link ../path/to/m1st-design-tokens

# Or use specific branch for testing
"m1st-design-tokens": "github:jdotfite/m1st-design-tokens#feature-branch"
```

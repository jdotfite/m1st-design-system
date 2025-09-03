# M1st Design System - Dual Distribution Strategy

This directory contains two distribution strategies for the M1st Design System, designed to meet the needs of different teams within your organization.

## Distribution Options

### 🏦 Incremental Distribution (`/incremental/`)
**Perfect for Banking Teams & Gradual Adoption**

Import only the components you need with minimal overhead.

```html
<!-- Import foundation + specific component -->
<link rel="stylesheet" href="dist/incremental/components/tabs.css">
```

**Benefits:**
- ✅ Smaller CSS footprint
- ✅ Gradual adoption possible
- ✅ No unused code
- ✅ Component-specific imports

**Structure:**
```
incremental/
├── foundation.css          # Core tokens (Layers 1-3)
└── components/
    ├── tabs.css           # Tabs component + its tokens
    ├── button.css         # Button component + its tokens
    └── card.css           # Card component + its tokens
```

### 🎨 Monolithic Distribution (`/monolithic.css`)
**Perfect for Marketing Teams & Full Adoption**

Import the complete design system at once for maximum consistency.

```html
<!-- Import everything -->
<link rel="stylesheet" href="dist/monolithic.css">
```

**Benefits:**
- ✅ Complete design system
- ✅ All components available
- ✅ Maximum consistency
- ✅ Single import

## How It Works

### Shared Foundation
Both distributions share the same foundation tokens:
- **Layer 1:** Foundation tokens (colors, typography, spacing)
- **Layer 2:** Semantic tokens (contextual meanings)  
- **Layer 3:** Page-level tokens (page-specific contexts)

### Component Tokens
- **Layer 4:** Component-specific design decisions
- Incremental: Included per-component
- Monolithic: All included together

### No Code Duplication
The system uses CSS imports to ensure:
- Foundation tokens are defined once
- Component styles are reused
- Updates propagate to both distributions

## Test Pages

- `test-incremental.html` - Demonstrates incremental import
- `test-monolithic.html` - Demonstrates full system import

## Migration Path

### For Banking Teams (Start Incremental)
1. Import `foundation.css`
2. Add components one by one as needed
3. Gradually build up your design system usage

### For Marketing Teams (Start Monolithic)
1. Import `monolithic.css` 
2. Use any component immediately
3. Full design system consistency from day one

## Next Steps

As we complete the refactoring:
1. ✅ Tabs component extracted
2. 🔄 Button component (next)
3. 🔄 Card component 
4. 🔄 Input component
5. 🔄 Modal component
6. 🔄 All remaining components

Each component will be extracted following the same pattern established with Tabs.

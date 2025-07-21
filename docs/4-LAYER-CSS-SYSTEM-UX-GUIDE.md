# 🏗️ M1st Design System: 4-Layer CSS Architecture Guide for UX Teams

## Overview

The M1st Design System uses a **4-layer token architecture** that follows industry standards used by Adobe Spectrum, Microsoft Fluent, Google Material Design 3, and Shopify Polaris. This ensures our design system is scalable, maintainable, and future-proof.

---

## Why This Architecture?

### Industry Standard ✅
- **Adobe Spectrum**: Global → Alias → Component → Scale tokens
- **Microsoft Fluent**: Global → Alias → Component → Pattern tokens  
- **Google Material**: Reference → System → Component → Custom tokens
- **Shopify Polaris**: Base → Semantic → Component → Pattern tokens

### Benefits for UX Teams
- **🎯 Consistency**: All colors automatically adapt across light/dark themes
- **📈 Scalability**: Easy to add new components without breaking existing ones
- **🔧 Maintenance**: Change foundation colors once, updates everywhere automatically
- **🌙 Theming**: Light/dark/system themes work seamlessly
- **🚀 Future-Proof**: Industry standard ensures long-term viability

---

## The 4 Layers Explained

### Layer 1: Foundation Tokens (Raw Values)
```css
/* Examples */
--neutral-100: #f5f5f5;     /* Light gray */
--neutral-900: #171717;     /* Dark gray */
--red-500: #EE3831;         /* M1st brand red */
```

**Purpose**: Raw color values and base design decisions
**Usage**: ❌ Never use directly in components - only for building semantic tokens
**Industry Terms**: Global tokens, Reference tokens, Base tokens

---

### Layer 2: Semantic Tokens (Intent-Based)
```css
/* Examples */
--color-background-primary: var(--neutral-0);     /* Main background */
--color-text-primary: var(--neutral-900);         /* Primary text */
--color-accent-primary: var(--red-500);           /* Brand accent */
--color-border-primary: var(--neutral-200);       /* Default borders */
```

**Purpose**: Map foundation tokens to semantic meanings (what colors represent)
**Usage**: ✅ Used by designers and for building higher-level tokens
**Industry Terms**: Alias tokens, System tokens

---

### Layer 3: Page-Level Tokens (Context-Specific)
```css
/* Examples */
--page-background: var(--color-background-primary);    /* Main page background */
--page-text-primary: var(--color-text-primary);        /* Page content text */
--page-surface: var(--color-surface-primary);          /* Card backgrounds */
--page-border: var(--color-border-primary);            /* Page borders */
```

**Purpose**: Map semantic tokens to specific page usage contexts
**Usage**: ✅ **IDEAL for UX teams** - Perfect for layouts, sections, and page components
**Industry Terms**: Scale tokens, Pattern tokens, Custom tokens

---

### Layer 4: Component Tokens (Specialized)
```css
/* Examples */
--button-primary-bg: var(--page-accent-primary);       /* Button background */
--card-shadow: 0 1px 3px rgba(0,0,0,0.1);             /* Card elevation */
--input-border-radius: 0.375rem;                       /* Input corners */
```

**Purpose**: Component-specific design decisions for specialized styling
**Usage**: ⚠️ Only when components need specialized styling beyond semantic tokens
**Industry Terms**: Component tokens (universal term)

---

## UX Team Workflow Guide

### ✅ What UX Teams Should Do

#### For Page Layouts
Use **Layer 3 (Page-level)** tokens:
```css
/* Recommended approach */
background-color: var(--page-background);
color: var(--page-text-primary);
border-color: var(--page-border);
```

#### For Components  
Use existing UI components or **Layer 2 (Semantic)** tokens:
```jsx
/* Use design system components */
<Button variant="primary">Submit</Button>
<Card variant="elevated">Content</Card>

/* Or semantic tokens for custom styling */
color: var(--color-text-secondary);
```

#### For Brand Requirements
Reference **Layer 1** values in design specifications:
```
Brand Red: #EE3831 (--red-500)
Primary Background: White (#ffffff in light, #0f0f0f in dark)
```

### ❌ What to Avoid

#### Don't Use Raw Values
```css
/* ❌ Never do this */
color: #171717;
background: #f5f5f5;
```

#### Don't Skip Layers
```css
/* ❌ Don't use foundation tokens in components */
color: var(--neutral-900);
background: var(--neutral-100);
```

#### Don't Create One-Off Tokens
```css
/* ❌ Avoid component tokens for single-use values */
--my-special-button-color: #123456;
--one-time-use-background: #abcdef;
```

---

## Most Common Tokens for UX Teams

### Page Structure
```css
--page-background         /* Main page background */
--page-text-primary      /* Primary content text */
--page-text-secondary    /* Secondary text */
--page-surface           /* Card/section backgrounds */
--page-border            /* Default borders */
```

### Status & Feedback
```css
--color-success          /* Success states */
--color-warning          /* Warning states */
--color-danger          /* Error states */
--color-info            /* Informational content */
```

### Interactive States
```css
--page-hover             /* Hover effects */
--page-active            /* Active states */
--page-focus             /* Focus indicators */
--page-accent-primary    /* Primary interactive elements */
```

---

## Theme System Magic 🌙

Our system uses an **inverted neutral scale** that automatically adapts:

```css
/* Light Theme */
--neutral-0: #ffffff;    /* White */
--neutral-900: #171717;  /* Dark gray */

/* Dark Theme */
--neutral-0: #000000;    /* Black */
--neutral-900: #f5f5f5;  /* Light gray */
```

This means:
- `--page-background` is always appropriate for the current theme
- `--page-text-primary` always has proper contrast
- All components automatically work in light/dark/system themes

---

## Practical Examples

### ✅ Good UX Approach
```jsx
/* Using page-level tokens for layout */
<div style={{ 
  backgroundColor: 'var(--page-background)',
  color: 'var(--page-text-primary)',
  borderColor: 'var(--page-border)'
}}>
  <h1 style={{ color: 'var(--page-text-primary)' }}>
    Page Title
  </h1>
  <p style={{ color: 'var(--page-text-secondary)' }}>
    Secondary content
  </p>
</div>
```

### ✅ Using Design System Components
```jsx
/* Even better - use our components */
<Card variant="elevated">
  <Button variant="primary">Primary Action</Button>
  <Button variant="secondary">Secondary Action</Button>
</Card>
```

---

## Quick Decision Tree

**Designing a page layout?** → Use Layer 3 (page-level tokens)
**Need a component?** → Use existing UI components first
**Custom component styling?** → Use Layer 2 (semantic tokens)  
**Brand color specifications?** → Reference Layer 1 (foundation values)
**Specialized component behavior?** → Consider Layer 4 (component tokens)

---

## Pro Tips for UX Teams 💡

1. **Think Semantically**: Instead of "make this red", think "this should indicate danger"
2. **Test Across Themes**: Always verify designs work in light, dark, and system themes
3. **Use the Token Explorer**: Visit `/tokens` in the design system to explore all available tokens
4. **Leverage Existing Components**: Check `/components` before creating custom styling
5. **Document Intent**: When creating new tokens, clearly document their semantic purpose

---

## Resources

- **Live Color System**: `/colors` - Explore all tokens with live examples
- **Token Visualizer**: `/tokens` - Interactive token explorer and layer architecture
- **Foundation Guide**: `/foundation` - Deep dive into token architecture
- **Component Library**: `/components` - All available UI components

---

## Questions or Need Help?

This architecture ensures our design system remains consistent, scalable, and aligned with industry best practices. When in doubt, start with page-level tokens (Layer 3) - they're designed specifically for UX team workflows!

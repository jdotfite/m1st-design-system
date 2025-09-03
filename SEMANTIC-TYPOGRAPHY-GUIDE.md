# Semantic Typography Best Practices

## Current Issue
Your Typography page uses `div` elements for typography demonstrations instead of semantic HTML elements like `h1`, `h2`, etc. This is actually **correct for demonstrations** but you need proper CSS setup.

## The Right Approach

### 1. Import Typography Utilities
```css
/* src/index.css */
@import "m1st-design-tokens/css";
@import "m1st-design-tokens/typography"; /* This might not exist yet */
```

### 2. Semantic HTML with Proper CSS
```tsx
// In your TypographyPage component, use REAL semantic HTML:

<section>
  <h1>Typography Scale</h1>
  <p>This demonstrates our typography system using actual semantic HTML elements.</p>
  
  <h2>Heading Hierarchy</h2>
  <h1>This is an H1 heading</h1>
  <h2>This is an H2 heading</h2>
  <h3>This is an H3 heading</h3>
  <h4>This is an H4 heading</h4>
  <h5>This is an H5 heading</h5>
  <h6>This is an H6 heading</h6>
  
  <h2>Body Text</h2>
  <p>This is regular paragraph text using semantic HTML.</p>
  <p><strong>This is bold text</strong> and <em>this is italic text</em>.</p>
</section>
```

### 3. CSS Setup for Automatic Uppercase
```css
/* All headings automatically uppercase with proper token usage */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-family-heading);
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-weight: 600;
}

h1 { font-size: var(--font-size-heading-xxl); font-weight: 700; }
h2 { font-size: var(--font-size-heading-xl); }
h3 { font-size: var(--font-size-heading-l); }
h4 { font-size: var(--font-size-heading-m); }
h5 { font-size: var(--font-size-heading-s); }
h6 { font-size: var(--font-size-heading-xs); }
```

### 4. For Component Demonstrations (Keep Current Approach)
```tsx
// For showing typography examples in cards/components, divs are fine:
<div className="typography-example">
  <div style={{ fontSize: 'var(--font-size-heading-xl)' }}>
    Example of XL heading style
  </div>
</div>
```

## Key Points:

1. **Use semantic HTML** (`h1`, `h2`, `p`) for actual page content
2. **Use divs with styles** for demonstrations and examples
3. **CSS handles the uppercase** - you don't manually type in caps
4. **Font tokens** come from your design tokens package
5. **Text-transform: uppercase** is set in CSS, not in content

## Missing Pieces:

Your design tokens package has the font variables but might be missing:
- `text-transform: uppercase` for headings
- Typography utility classes like `.text-heading-xl`
- Proper CSS resets and base styles

Would you like me to fix your Typography page to use proper semantic HTML?

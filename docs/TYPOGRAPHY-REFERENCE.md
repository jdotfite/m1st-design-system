# M1st Design System - T---

## 🎯 Typography Scale (Visual Hierarchy)

**IMPORTANT:** Typography classes are **visual sizes**, not semantic HTML elements. Choose the class based on visual importance and context, not HTML tag.

### Heading Hierarchy

| Element | Size | Weight | Line Height | CSS Variable | Use Case |
|---------|------|--------|-------------|--------------|----------|
| **Heading XXL** | 64px (4rem) | Bold (700) | 1.1 | `--font-heading-xxl-size` | Hero sections, marketing headlines |
| **Heading XL** | 48px (3rem) | SemiBold (600) | 1.15 | `--font-heading-xl-size` | Main page titles, major sections |
| **Heading L** | 36px (2.25rem) | SemiBold (600) | 1.2 | `--font-heading-l-size` | Subsection titles, content headers |
| **Heading M** | 24px (1.5rem) | SemiBold (600) | 1.25 | `--font-heading-m-size` | Standard content headings |
| **Heading S** | 18px (1.125rem) | SemiBold (600) | 1.3 | `--font-heading-s-size` | Small headings, form sections |
| **Heading XS** | 16px (1rem) | SemiBold (600) | 1.4 | `--font-heading-xs-size` | Labels, table headers |

### 🔗 Semantic vs Visual Examples

```tsx
// ✅ Choose size based on VISUAL importance
<h1 className="text-heading-xxl">Hero: Welcome to M1st Bank</h1>
<h1 className="text-heading-xl">Page: Account Dashboard</h1>  
<h1 className="text-heading-l">Modal: Transfer Funds</h1>

<h2 className="text-heading-xl">Major Section: Investment Options</h2>
<h2 className="text-heading-m">Standard Section: Recent Transactions</h2>
<h2 className="text-heading-s">Small Section: Security Settings</h2>

// ❌ Don't tie size to HTML tag
<h1 className="text-heading-xl">Page Title</h1>
<h2 className="text-heading-l">Section</h2>
<h3 className="text-heading-m">Subsection</h3>
```

### 📐 Size Selection Guidelines

| Context | Recommended Size | HTML Tag | Example |
|---------|-----------------|----------|---------|
| **Hero sections** | XXL or XL | `<h1>` | Landing page headlines |
| **Page titles** | XL or L | `<h1>` | Dashboard, Account pages |
| **Modal titles** | L or M | `<h1>` | Transfer funds, Settings |
| **Card titles** | M or S | `<h2>` or `<h3>` | Account cards, Feature cards |
| **Section headers** | M or S | `<h2>` | Recent activity, Quick actions |
| **Form sections** | S or XS | `<h3>` | Personal info, Security |
| **Table headers** | XS | `<th>` | Data tables |

### Body Text Hierarchynce

> **For UX Designers & Developers**: Complete typography system documentation with sizes, weights, and usage guidelines.

## 🎯 Font Families

### Headings: DIN-2014
- **Font**: DIN-2014 (Industrial, professional character)
- **Style**: Automatically displayed in **UPPERCASE**
- **Letter Spacing**: Enhanced (0.025em) for readability
- **Variants Available**:
  - `DIN-2014` - Standard width
  - `DIN-2014-Condensed` - Space-efficient
  - `DIN-2014-Narrow` - Ultra-condensed

### Body Text: Inter
- **Font**: Inter (Optimized for screen readability)
- **Style**: Normal case
- **Purpose**: All body content, descriptions, interface text

### Code: System Monospace
- **Font**: System monospace fonts
- **Purpose**: Code blocks, technical values, file names

---

## 📏 Typography Scale & Usage

### Heading Hierarchy

| Element | Size | Weight | Line Height | CSS Variable | Use Case |
|---------|------|--------|-------------|--------------|----------|
| **Heading XXL** | 64px (4rem) | Bold (700) | 1.1 | `--font-heading-xxl-size` | Hero sections, marketing headlines |
| **Heading XL** | 48px (3rem) | SemiBold (600) | 1.15 | `--font-heading-xl-size` | Main page titles, major sections |
| **Heading L** | 36px (2.25rem) | SemiBold (600) | 1.2 | `--font-heading-l-size` | Subsection titles, content headers |
| **Heading M** | 24px (1.5rem) | SemiBold (600) | 1.25 | `--font-heading-m-size` | Standard content headings |
| **Heading S** | 18px (1.125rem) | SemiBold (600) | 1.3 | `--font-heading-s-size` | Small headings, form sections |
| **Heading XS** | 16px (1rem) | SemiBold (600) | 1.4 | `--font-heading-xs-size` | Labels, table headers |

### Body Text Hierarchy

| Element | Size | Weight | Line Height | CSS Variable | Use Case |
|---------|------|--------|-------------|--------------|----------|
| **Body Large** | 18px (1.125rem) | Regular (400) | 1.6 | `--font-body-l-size` | Article introductions, feature descriptions |
| **Body Medium** | 16px (1rem) | Regular (400) | 1.5 | `--font-body-m-size` | **DEFAULT** - Paragraphs, general content |
| **Body Small** | 14px (0.875rem) | Regular (400) | 1.4 | `--font-body-s-size` | Help text, secondary descriptions |
| **Caption** | 12px (0.75rem) | Regular (400) | 1.4 | `--font-body-xs-size` | Timestamps, metadata, image captions |

### Specialized Text

| Element | Size | Weight | Line Height | CSS Variable | Use Case |
|---------|------|--------|-------------|--------------|----------|
| **Button Text** | 14px (0.875rem) | Medium (500) | 1.2 | `--font-button-size` | Button labels, interactive elements |
| **Code** | 14px (0.875rem) | Regular (400) | 1.4 | `--font-code-size` | Code blocks, technical content |

---

## 🎨 Design Principles

### ✅ Automatic Uppercase
- All headings automatically display in **UPPERCASE**
- Enhanced letter spacing (0.025em) for optimal readability
- Creates strong visual hierarchy and professional appearance

### ✅ Weight Hierarchy
- **Bold (700)**: Display text only
- **SemiBold (600)**: All other headings
- **Medium (500)**: Interactive elements (buttons, links)
- **Regular (400)**: All body text

### ✅ Line Height Optimization
- **Tight (1.1-1.2)**: Large headings for impact
- **Normal (1.25-1.4)**: Small headings for readability  
- **Relaxed (1.4-1.6)**: Body text for comfortable reading

### ✅ Accessibility
- All sizes use `rem` units for user font size scaling
- Sufficient contrast ratios maintained
- Semantic HTML structure supported

---

## 💻 Developer Implementation

### CSS Custom Properties (Recommended)
```css
/* Font Families */
.my-heading { font-family: var(--font-family-heading); }
.my-body { font-family: var(--font-family-body); }

/* Font Sizes */
.my-title { font-size: var(--font-heading-l-size); }
.my-text { font-size: var(--font-body-m-size); }
```

### Direct Font Usage
```css
/* Heading with all DIN-2014 styling */
.custom-heading {
  font-family: "DIN-2014", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  font-weight: 600;
}

/* Body text with Inter */
.custom-body {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  line-height: 1.5;
}
```

### React/JSX Usage
```jsx
{/* Automatic heading styling */}
<h1>This becomes uppercase DIN-2014 automatically</h1>

{/* Override for special cases */}
<h2 className="heading-normal-case">This stays normal case</h2>

{/* Apply uppercase to non-headings */}
<p className="text-uppercase">This paragraph will be uppercase</p>
```

---

## 📋 Usage Guidelines

### Heading Scale Rules
- Use only **one Display heading per page**
- Don't skip heading levels (H1 → H3)
- All headings display in uppercase automatically
- Maintain logical content hierarchy
- Enhanced letter spacing improves uppercase readability

### Body Text Rules
- **Body Medium** is the default for paragraphs
- **Body Large** for emphasis or introduction text
- **Body Small** for secondary information
- **Captions** for metadata and annotations

### Line Length Guidelines
- **Optimal**: 45-75 characters per line
- Use `max-width` to constrain text columns
- Consider reading flow and scanning patterns

---

## 🔧 Font Variants for Special Cases

### DIN-2014 Condensed
```css
font-family: var(--font-family-din-condensed);
```
**Use for**: Data tables, navigation, compact layouts

### DIN-2014 Narrow  
```css
font-family: var(--font-family-din-narrow);
```
**Use for**: Badges, labels, extreme space constraints

---

## 📖 Quick Reference

**Need a heading?** → Use semantic HTML (`<h1>`, `<h2>`, etc.) - styling is automatic
**Need body text?** → Use `<p>` with appropriate CSS variables
**Need custom styling?** → Use the CSS custom properties from the tables above
**Need to override uppercase?** → Add `.heading-normal-case` class

---

*This documentation reflects the complete M1st Design System typography implementation. For questions or updates, contact the design system team.*

# Typography Hierarchy: Visual vs Semantic

## 🎯 **Answer to UX Question:**

**"Would heading XL be H1s? Heading L, H2s? and so on?"**

**No!** Typography classes are **visual hierarchy**, not semantic mapping.

---

## 📐 **The Correct Approach: Visual-First Design**

### ✅ **Choose Size Based on Visual Context**

```tsx
// Hero page - needs big impact
<h1 className="text-heading-xxl">Welcome to M1st Bank</h1>

// Regular page - medium impact  
<h1 className="text-heading-xl">Account Dashboard</h1>

// Modal or sidebar - smaller space
<h1 className="text-heading-l">Transfer Funds</h1>

// Card title - contained space
<h2 className="text-heading-m">Recent Transactions</h2>
```

### 🏗️ **Size Selection Guidelines**

| **Context** | **Recommended Size** | **HTML Tag** | **Example Use Case** |
|-------------|---------------------|--------------|---------------------|
| **Hero sections** | XXL or XL | `<h1>` | Landing page headlines |
| **Page titles** | XL or L | `<h1>` | Dashboard, Account pages |
| **Modal titles** | L or M | `<h1>` | Transfer funds, Settings |
| **Card titles** | M or S | `<h2>` or `<h3>` | Account cards, Feature cards |
| **Section headers** | M or S | `<h2>` | Recent activity, Quick actions |
| **Form sections** | S or XS | `<h3>` | Personal info, Security settings |
| **Table headers** | XS | `<th>` | Data tables, lists |

---

## 🎨 **Real-World Banking Examples**

### **Scenario 1: Homepage with Hero**
```tsx
<h1 className="text-heading-xxl">Banking Made Simple</h1>  // Hero
<h2 className="text-heading-xl">Featured Services</h2>     // Major section
<h3 className="text-heading-m">Online Banking</h3>         // Service card
```

### **Scenario 2: Dashboard (No Hero)**
```tsx
<h1 className="text-heading-xl">Account Dashboard</h1>     // Page title
<h2 className="text-heading-m">Recent Activity</h2>       // Section
<h3 className="text-heading-s">Security Alerts</h3>       // Widget title
```

### **Scenario 3: Mobile App (Constrained Space)**
```tsx
<h1 className="text-heading-l">Transfer</h1>              // Screen title
<h2 className="text-heading-s">From Account</h2>          // Form section
<h3 className="text-heading-xs">Transaction History</h3>  // List header
```

---

## 🧭 **Decision Framework for UX Teams**

### **Step 1: What's the visual importance?**
- **Hero/Landing**: XXL or XL
- **Page/Screen title**: XL or L  
- **Major section**: L or M
- **Standard section**: M or S
- **Small section/widget**: S or XS

### **Step 2: What's the available space?**
- **Full-width hero**: XXL
- **Standard page header**: XL
- **Card/modal header**: L or M
- **Sidebar/mobile**: M or S
- **Compact interfaces**: S or XS

### **Step 3: What's the content hierarchy?**
- Most important content gets larger sizes
- Supporting content gets smaller sizes
- Maintain clear visual relationships

---

## 💡 **Benefits of This Approach**

✅ **Flexible**: Same content, different contexts, different sizes  
✅ **Responsive**: Adapt typography to screen size and layout  
✅ **Consistent**: Clear visual hierarchy across all interfaces  
✅ **Maintainable**: Easy to adjust without restructuring HTML  
✅ **Accessible**: Semantic HTML preserved for screen readers  

---

## 🚫 **What NOT to Do**

❌ **Don't map sizes to HTML tags**  
❌ **Don't use the same size pattern everywhere**  
❌ **Don't ignore visual context**  
❌ **Don't break semantic HTML structure**

The goal is **visual clarity and hierarchy**, not rigid HTML-to-CSS mapping! 🎯

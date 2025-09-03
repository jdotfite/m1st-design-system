# M1st Components Package Migration Plan
**Goal**: Extract design system components and CSS from this repo into a standalone `@m1st/components` package

## 🎯 **Final Vision**
```
C:\_websites\m1st-components\          # New standalone package
├── package.json                       # @m1st/components
├── dist\                              # Built distributions
│   ├── index.css                      # Monolithic CSS
│   ├── index.js                       # All React components
│   └── components\                    # Individual component CSS
│       ├── tabs.css
│       ├── button.css
│       └── card.css
├── src\                               # Source files
│   ├── components\                    # React components
│   ├── styles\                        # CSS source
│   └── tokens\                        # Design tokens
└── README.md                          # Usage instructions

C:\_websites\m1st-design-system\       # This repo becomes docs site
├── package.json                       # Adds @m1st/components dependency
├── src\                               # Only doc site code
└── node_modules\@m1st\components\     # Consumes the package
```

## 📋 **Migration Steps** (Each requires your approval)

### **Phase 1: Setup & Proof of Concept** ⚠️ LOW RISK
**Goal**: Create new repo structure and test with one component

#### Step 1.1: Create Package Structure
- [ ] Create `C:\_websites\m1st-components\` directory
- [ ] Initialize `package.json` with proper npm package structure
- [ ] Set up basic build scripts (TypeScript, CSS bundling)
- [ ] Create `src/` and `dist/` folders

#### Step 1.2: Copy (Don't Move) Tabs Component
- [ ] Copy `/src/components/ui/Tabs/` to new repo
- [ ] Copy tabs CSS from `/public/dist/incremental/components/tabs.css`
- [ ] Test building the package locally
- [ ] Verify TypeScript compilation works

#### Step 1.3: Test Package Consumption
- [ ] Use `npm link` to test package locally
- [ ] Import Tabs component in this repo from the new package
- [ ] Verify everything still works
- [ ] **ROLLBACK PLAN**: Remove npm link, revert to original imports

**⭐ CHECKPOINT**: If Step 1 works, we know the approach is sound

---

### **Phase 2: Component Migration** ⚠️ MEDIUM RISK
**Goal**: Move components one by one, keeping this repo functional

#### Step 2.1: Core UI Components (1 at a time)
- [ ] Move Button component
- [ ] Move Card component  
- [ ] Move Input component
- [ ] Test after each move - this repo should still work

#### Step 2.2: Complex Components
- [ ] Move Modal component
- [ ] Move LoadingSpinner component
- [ ] Update imports in this repo to use package

#### Step 2.3: CSS & Token System
- [ ] Move CSS token system to new repo
- [ ] Update build process to generate distributions
- [ ] Test monolithic and incremental CSS outputs

**⭐ CHECKPOINT**: All components moved, this repo still works using package

---

### **Phase 3: Final Integration** ⚠️ MEDIUM RISK
**Goal**: Clean up and optimize both repos

#### Step 3.1: Package Refinement
- [ ] Optimize package build process
- [ ] Set up proper TypeScript exports
- [ ] Add package documentation
- [ ] Test package in isolation

#### Step 3.2: Documentation Site Cleanup
- [ ] Remove now-duplicate component files from this repo
- [ ] Update all imports to use package
- [ ] Verify documentation site still works perfectly
- [ ] Update build process

#### Step 3.3: Distribution Testing
- [ ] Verify `/test/` iframe testing still works
- [ ] Test package in a fresh project
- [ ] Confirm all CSS distributions work

**⭐ CHECKPOINT**: Both repos work independently

---

## 🛡️ **Safety Measures**

### **Before Each Phase**:
1. **Git commit** current state
2. **Create backup** of current working directory
3. **Test current functionality** to establish baseline

### **Rollback Strategy**:
- Each step is reversible
- Git commits allow easy rollback
- Original repo keeps working until final cleanup

### **Testing Protocol**:
- [ ] React app builds successfully
- [ ] All component pages load correctly  
- [ ] Distribution testing iframes work
- [ ] Theme switching works in both light/dark
- [ ] No TypeScript errors
- [ ] No runtime console errors

## ❓ **Questions for Review**

1. **Package Name**: Should it be `@m1st/components` or something else?
2. **Versioning**: Start at version 1.0.0 or 0.1.0?
3. **Private Package**: Should it be private (internal use) or public npm package?
4. **Build Tools**: Use the same tools (TypeScript, PostCSS) or modernize?
5. **Documentation**: Include Storybook or just README in the package?

## 🚀 **Next Steps**

1. **Review this plan** - Any concerns or modifications?
2. **Answer the questions above**
3. **Get your approval for Phase 1**
4. **Execute Step 1.1** (create directory structure)

**Remember**: We can stop and rollback at any point. Nothing is permanent until Phase 3 cleanup.

---

*This migration will take several hours spread across multiple sessions. We'll go slow and verify everything works at each step.*

# Tailwind CSS v4 Setup

Your project has been upgraded to use the modern Tailwind CSS v4 syntax with enhanced features and improved performance.

## 🚀 **What's New in Tailwind v4**

### **Modern CSS Syntax**
- `@import "tailwindcss"` instead of `@tailwind` directives
- `@plugin` for plugin imports
- `@custom-variant` for custom variants
- `@utility` for custom utilities

### **Enhanced Features**
- Better performance and smaller bundle sizes
- Improved CSS-in-JS support
- Better TypeScript integration
- Enhanced plugin system

## 📁 **File Structure**

```
├── app/
│   ├── globals.css          # Main CSS with v4 syntax
│   └── theme.css            # Design system variables
├── tailwind.config.ts       # TypeScript config
├── postcss.config.js        # PostCSS configuration
└── package.json             # Updated dependencies
```

## 🎨 **CSS Structure**

### **globals.css** - Modern v4 Syntax
```css
@import "tailwindcss";
@import "./theme.css";

@plugin "tailwindcss-animate";
@plugin "tailwindcss-react-aria-components";

@custom-variant dark (&:where(.dark-mode, .dark-mode *));
@custom-variant label (& [data-label]);
@custom-variant focus-input-within (&:has(input:focus));

@utility scrollbar-hide {
    /* Custom utility for hiding scrollbars */
}

@utility transition-inherit-all {
    /* Custom utility for inheriting transitions */
}
```

## 🛠️ **Custom Variants**

### **Dark Mode Variant**
```css
@custom-variant dark (&:where(.dark-mode, .dark-mode *));
```
Usage:
```tsx
<div className="dark:bg-bg-primary dark:text-text-primary">
  Dark mode content
</div>
```

### **Label Variant**
```css
@custom-variant label (& [data-label]);
```
Usage:
```tsx
<div data-label className="label:bg-bg-brand-primary">
  Labeled content
</div>
```

### **Focus Input Within Variant**
```css
@custom-variant focus-input-within (&:has(input:focus));
```
Usage:
```tsx
<div className="focus-input-within:ring-2 focus-input-within:ring-brand-500">
  <input type="text" />
</div>
```

## 🎯 **Custom Utilities**

### **Scrollbar Hide**
```css
@utility scrollbar-hide {
    &::-webkit-scrollbar { display: none; }
    -ms-overflow-style: none;
    scrollbar-width: none;
}
```
Usage:
```tsx
<div className="scrollbar-hide overflow-auto">
  Content with hidden scrollbar
</div>
```

### **Transition Inherit All**
```css
@utility transition-inherit-all {
    transition-property: inherit;
    transition-duration: inherit;
    transition-timing-function: inherit;
}
```
Usage:
```tsx
<div className="transition-inherit-all">
  Inherits all transition properties
</div>
```

## 🎨 **Enhanced Typography**

### **Font Smoothing & Kerning**
```css
html, body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
    -webkit-font-kerning: normal;
    font-kerning: normal;
}
```

## 🎭 **Input Styling**

### **Number Input Cleanup**
```css
/* Hide default arrows from number inputs */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
```

### **Search Input Cleanup**
```css
/* Hide the default clear button (X) from search inputs */
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}
```

### **Details Element Cleanup**
```css
/* Hide the default expand arrow on Safari */
details summary::-webkit-details-marker {
    display: none;
}
```

## 🔧 **Configuration**

### **TypeScript Config** (`tailwind.config.ts`)
- Full TypeScript support
- Enhanced IntelliSense
- Better error checking
- All design system colors and utilities

### **PostCSS Config** (`postcss.config.js`)
```javascript
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

## 📦 **Dependencies**

### **Updated Packages**
```json
{
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss-animate": "^1.0.7",
    "tailwindcss-react-aria-components": "^2.0.1"
  }
}
```

## 🚀 **Usage Examples**

### **Component with Custom Variants**
```tsx
export function InputField({ label, ...props }) {
  return (
    <div className="focus-input-within:ring-2 focus-input-within:ring-brand-500">
      <label className="label:text-text-brand-primary">
        {label}
      </label>
      <input 
        className="scrollbar-hide transition-inherit-all"
        {...props} 
      />
    </div>
  )
}
```

### **Dark Mode Component**
```tsx
export function Card({ children }) {
  return (
    <div className="
      bg-bg-primary 
      dark:bg-bg-primary 
      text-text-primary 
      dark:text-text-primary
      border-border-primary
      dark:border-border-primary
      rounded-lg 
      shadow-md
    ">
      {children}
    </div>
  )
}
```

### **Custom Utility Usage**
```tsx
export function ScrollableContent({ children }) {
  return (
    <div className="
      scrollbar-hide 
      overflow-auto 
      max-h-96
      transition-inherit-all
    ">
      {children}
    </div>
  )
}
```

## 🎯 **Benefits**

1. **Performance**: Smaller bundle sizes and faster builds
2. **Developer Experience**: Better TypeScript support and IntelliSense
3. **Modern Syntax**: Cleaner, more intuitive CSS structure
4. **Enhanced Features**: Custom variants and utilities
5. **Future-Proof**: Built for the next generation of web development

## 🔄 **Migration Notes**

- All existing Tailwind classes continue to work
- Design system colors and utilities are preserved
- Enhanced with new custom variants and utilities
- Better performance and smaller bundle sizes
- Improved TypeScript integration

## 🚀 **Getting Started**

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Use the enhanced features**:
   ```tsx
   // Custom variants
   <div className="dark:bg-bg-primary label:ring-2">
   
   // Custom utilities
   <div className="scrollbar-hide transition-inherit-all">
   
   // Design system colors
   <div className="bg-bg-brand-primary text-text-primary">
   ```

Your project is now running on Tailwind CSS v4 with enhanced features and better performance! 🎉

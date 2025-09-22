# Design System Integration

Your project now includes a comprehensive design system with extensive color palettes, typography, spacing, and dark mode support. This system is fully integrated with Tailwind CSS and shadcn/ui.

## 🎨 **Color System**

### **Brand Colors**
```css
/* Available as Tailwind classes: bg-brand-50, text-brand-600, etc. */
--color-brand-25 to --color-brand-950
```

### **Semantic Colors**
```css
/* Error, Warning, Success, Gray scales */
--color-error-25 to --color-error-950
--color-warning-25 to --color-warning-950
--color-success-25 to --color-success-950
--color-gray-25 to --color-gray-950
```

### **Extended Color Palettes**
- **Purple**: `purple-25` to `purple-950`
- **Green**: `green-25` to `green-950`
- **Orange**: `orange-25` to `orange-950`
- **Pink**: `pink-25` to `pink-950`
- **Yellow**: `yellow-25` to `yellow-950`
- **Blue**: `blue-25` to `blue-950`

### **Semantic Color Classes**
```css
/* Text Colors */
text-text-primary, text-text-secondary, text-text-tertiary
text-text-brand-primary, text-text-error-primary
text-text-warning-primary, text-text-success-primary

/* Background Colors */
bg-bg-primary, bg-bg-secondary, bg-bg-tertiary
bg-bg-brand-primary, bg-bg-error-primary
bg-bg-warning-primary, bg-bg-success-primary

/* Border Colors */
border-border-primary, border-border-secondary
border-border-brand, border-border-error
```

## 📝 **Typography System**

### **Font Families**
```css
font-body     /* Inter, system fonts */
font-display  /* Inter, system fonts */
font-mono     /* Monospace fonts */
```

### **Font Sizes**
```css
/* Standard sizes */
text-xs, text-sm, text-md, text-lg, text-xl

/* Display sizes with proper line heights and letter spacing */
text-display-xs, text-display-sm, text-display-md
text-display-lg, text-display-xl, text-display-2xl
```

### **Usage Examples**
```tsx
<h1 className="text-display-2xl font-display">
  Large Display Heading
</h1>

<p className="text-md font-body text-text-primary">
  Body text with semantic color
</p>
```

## 🎯 **Spacing & Layout**

### **Container**
```css
max-w-container  /* 1280px max width */
```

### **Breakpoints**
```css
xxs: 320px
xs: 600px
```

### **Border Radius**
```css
rounded-none, rounded-xs, rounded-sm, rounded-md
rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-full
```

## 🌙 **Dark Mode Support**

The design system automatically handles dark mode with the `.dark` class:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark')

// Or use a theme provider
<div className="dark">
  {/* Dark mode content */}
</div>
```

## 🎭 **Shadows & Effects**

### **Standard Shadows**
```css
shadow-xs, shadow-sm, shadow-md, shadow-lg
shadow-xl, shadow-2xl, shadow-3xl
```

### **Special Effects**
```css
shadow-skeumorphic        /* Inset shadow effect */
shadow-xs-skeumorphic     /* Combined effect */
shadow-modern-mockup-*    /* Modern UI mockup shadows */
shadow-iphone-mockup      /* iPhone-style drop shadow */
```

## 🎬 **Animations**

### **Built-in Animations**
```css
animate-marquee     /* 60s linear infinite marquee */
animate-caret-blink /* 1s infinite caret blink */
```

### **Usage**
```tsx
<div className="animate-marquee">
  Scrolling content
</div>

<span className="animate-caret-blink">|</span>
```

## 🛠️ **Integration with Components**

### **BackgroundPaths Component**
Your existing BackgroundPaths component will work seamlessly with the new design system:

```tsx
import { BackgroundPaths } from "@/components/ui/background-paths"

export function MyPage() {
  return (
    <BackgroundPaths 
      title="Welcome to M2S Tech"
      className="bg-bg-primary text-text-primary"
    />
  )
}
```

### **Button Component**
The shadcn Button component now has access to all design system colors:

```tsx
<Button 
  variant="default" 
  className="bg-bg-brand-solid text-text-primary_on-brand"
>
  Brand Button
</Button>
```

## 🎨 **Custom Component Examples**

### **Card with Design System**
```tsx
<div className="bg-bg-primary border border-border-primary rounded-lg shadow-md p-6">
  <h3 className="text-display-sm font-display text-text-primary mb-2">
    Card Title
  </h3>
  <p className="text-md font-body text-text-secondary">
    Card content with semantic colors
  </p>
</div>
```

### **Alert Component**
```tsx
<div className="bg-bg-error-primary border border-border-error rounded-md p-4">
  <p className="text-sm font-body text-text-error-primary">
    Error message
  </p>
</div>
```

### **Brand Section**
```tsx
<section className="bg-bg-brand-primary">
  <div className="max-w-container mx-auto px-4 py-16">
    <h2 className="text-display-lg font-display text-text-brand-primary text-center">
      Brand Section
    </h2>
  </div>
</section>
```

## 🔧 **CSS Custom Properties**

All design system values are available as CSS custom properties:

```css
/* Direct usage in CSS */
.my-component {
  background-color: var(--color-bg-brand-primary);
  color: var(--color-text-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  font-size: var(--text-display-md);
  line-height: var(--text-display-md--line-height);
}
```

## 📱 **Responsive Design**

The design system includes responsive utilities:

```tsx
<div className="text-display-sm xs:text-display-md md:text-display-lg">
  Responsive typography
</div>

<div className="max-w-container mx-auto px-4 xs:px-6">
  Responsive container
</div>
```

## 🎯 **Best Practices**

1. **Use Semantic Colors**: Prefer `text-text-primary` over `text-gray-900`
2. **Consistent Typography**: Use the display sizes for headings
3. **Dark Mode**: Always test components in both light and dark modes
4. **Accessibility**: The color system includes proper contrast ratios
5. **Performance**: CSS custom properties are optimized for performance

## 🚀 **Getting Started**

1. **Install dependencies** (already done):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Use the design system**:
   ```tsx
   // Import your components
   import { BackgroundPaths } from "@/components/ui/background-paths"
   
   // Use design system classes
   <div className="bg-bg-primary text-text-primary">
     Your content here
   </div>
   ```

The design system is now fully integrated and ready to use! All your existing components will work seamlessly with the new color palette and typography system.

# M2S Tech - Background Paths Component

This project showcases a beautiful animated background paths component built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Animated floating paths background
- 🎨 Beautiful gradient text animations
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and shadcn/ui

## Project Structure

The project follows the standard shadcn/ui structure:

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx    # Button component
│   │   └── background-paths.tsx  # Main component
│   └── demo.tsx          # Demo component
├── lib/                  # Utility functions
│   └── utils.ts          # cn utility for class merging
└── package.json          # Dependencies
```

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Component Usage

### Basic Usage

```tsx
import { BackgroundPaths } from "@/components/ui/background-paths"

export function MyComponent() {
  return <BackgroundPaths title="Your Title Here" />
}
```

### Props

- `title` (optional): The text to display in the center. Defaults to "Background Paths"

## Dependencies

### Core Dependencies
- `next`: React framework
- `react` & `react-dom`: React library
- `framer-motion`: Animation library
- `@radix-ui/react-slot`: Radix UI primitives
- `class-variance-authority`: Component variant management
- `clsx` & `tailwind-merge`: Utility functions

### Development Dependencies
- `typescript`: TypeScript support
- `tailwindcss`: CSS framework
- `tailwindcss-animate`: Animation utilities
- `autoprefixer` & `postcss`: CSS processing

## Why /components/ui Directory?

The `/components/ui` directory is the standard location for shadcn/ui components because:

1. **Consistency**: Follows shadcn/ui conventions
2. **Organization**: Separates UI components from business logic components
3. **Reusability**: Makes components easily importable with `@/components/ui/`
4. **Tooling**: Works seamlessly with shadcn/ui CLI tools
5. **Best Practices**: Aligns with modern React component architecture

## Customization

The component supports:
- Custom titles
- Dark/light mode theming
- Responsive design
- Smooth animations
- Gradient text effects

## License

MIT
# m2s-website

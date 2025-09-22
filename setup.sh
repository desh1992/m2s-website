#!/bin/bash

echo "🚀 Setting up M2S Tech Background Paths Component..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Install additional required packages
echo "📦 Installing additional packages..."
npm install framer-motion @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate

echo "✅ Setup complete!"
echo ""
echo "🎉 Your project is ready!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open http://localhost:3000 in your browser"
echo ""
echo "📁 Project structure:"
echo "  - /components/ui/background-paths.tsx  - Main component"
echo "  - /components/ui/button.tsx            - Button component"
echo "  - /components/demo.tsx                 - Demo component"
echo "  - /app/page.tsx                        - Home page"
echo ""
echo "🔧 The /components/ui directory is important because:"
echo "  - It follows shadcn/ui conventions"
echo "  - Makes components easily importable"
echo "  - Separates UI components from business logic"
echo "  - Works with shadcn/ui CLI tools"

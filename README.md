# Md Abu Talha Lafi - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS, featuring a sleek dark theme with blue and teal accent colors.

## 🚀 Features

- ⚡ Built with Next.js 15 App Router
- 🎨 Styled with Tailwind CSS v4
- 🌙 Modern dark theme with blue (#3b82f6) and teal (#14b8a6) accents
- 📱 Fully responsive design (mobile, tablet, desktop)
- ✨ Smooth scroll animations using Framer Motion
- 🎯 Centralized content management through data file
- 🧭 Sticky navigation with smooth scrolling
- 📦 Modular component architecture
- 🎭 SEO optimized with proper meta tags

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18.17 or later
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/talha937/talha07.git
cd talha07
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Updating Content

All portfolio content is centralized in `/data/portfolio.ts`. Simply edit this file to update:

- Personal information and tagline
- About section bio and description
- Skills and expertise categories
- Projects and their descriptions
- Education and experience details
- Contact information and social links

Example:
```typescript
export const portfolioData = {
  name: "Your Name",
  tagline: "Your Tagline",
  // ... update any section
};
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page combining all components
│   └── globals.css         # Global styles and theme
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills with categorized badges
│   ├── Projects.tsx        # Project cards
│   ├── Experience.tsx      # Education & Experience timeline
│   ├── Contact.tsx         # Contact information and links
│   └── Footer.tsx          # Footer component
├── data/
│   └── portfolio.ts        # Centralized content data
├── public/                 # Static assets
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Colors
The site uses a dark theme with the following color scheme:
- Background: `#0f172a` (slate-900)
- Blue accent: `#3b82f6`
- Teal accent: `#14b8a6`

To change colors, update the CSS variables in `app/globals.css` and Tailwind classes in components.

### Fonts
The site uses Inter font. To change the font, update the import in `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

Your site will be live at `https://your-project.vercel.app`

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "export": "next build && next export",
  "deploy": "npm run export && gh-pages -d out"
}
```

3. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
```

4. Deploy:
```bash
npm run deploy
```

## 🧰 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Md Abu Talha Lafi**
- GitHub: [@talha937](https://github.com/talha937)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using Next.js and Tailwind CSS

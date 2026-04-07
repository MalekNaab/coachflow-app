# CoachFlow - Quick Start Guide

## 🚀 From Zero to Deployed in 10 Minutes

### Option A: Deploy to Vercel (Fastest)

1. **Upload to GitHub** (see GITHUB_UPLOAD_GUIDE.md)
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project"
5. Select your `coachflow` repository
6. Click "Deploy"
7. ✅ Done! Your app is live

### Option B: Run Locally

```bash
# 1. Clone or download the repository
git clone https://github.com/YOUR_USERNAME/coachflow.git
cd coachflow

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:5173
```

## 📁 Files You Need for GitHub

**Essential files to upload:**
```
✅ src/                  (entire folder)
✅ package.json
✅ vite.config.ts
✅ postcss.config.mjs
✅ .gitignore
✅ README.md
✅ LICENSE
```

**DO NOT upload:**
```
❌ node_modules/
❌ dist/
❌ .env (if you create one with secrets)
❌ Documentation .md files (except README.md)
```

## 🎯 Three Ways to Upload to GitHub

### 1️⃣ GitHub Desktop (Easiest for Beginners)

1. Download [GitHub Desktop](https://desktop.github.com/)
2. File → Add Local Repository → Choose your coachflow folder
3. Create repository on GitHub from the app
4. Commit changes → Push origin

### 2️⃣ GitHub Web Upload (No Git Installation Needed)

1. Create new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all your files
4. Commit changes

### 3️⃣ Command Line (Most Powerful)

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/coachflow.git
git push -u origin main
```

## ⚡ Commands Cheat Sheet

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production

# Git
git status           # See what changed
git add .            # Stage all changes
git commit -m "msg"  # Commit changes
git push             # Upload to GitHub

# Deployment
vercel               # Deploy to Vercel (after installing Vercel CLI)
npm run deploy       # Deploy to GitHub Pages (after setup)
```

## 🔍 Project Structure at a Glance

```
coachflow/
├── src/app/
│   ├── components/   → Reusable UI components
│   ├── pages/        → 9 main pages
│   ├── layouts/      → Layout wrappers
│   ├── data/         → Mock data
│   └── routes.ts     → Navigation config
└── src/styles/       → Global CSS + theme
```

## 🎨 Key Features

- 📊 **Analytics Dashboard** - Revenue charts, client insights
- 👥 **Client Management** - 12 realistic mock clients
- 📅 **Session Tracking** - Schedule and track sessions
- 💰 **Payment Processing** - Revenue tracking
- 🧠 **Smart Insights** - AI-powered recommendations
- 📱 **Fully Responsive** - Works on all devices

## 🛠️ Tech Stack

- React 18 + TypeScript
- Tailwind CSS 4
- React Router 7
- Recharts (charts)
- Radix UI (components)
- Vite (build tool)

## 📝 Common Tasks

### Add New Page

1. Create file in `src/app/pages/NewPage.tsx`
2. Add route in `src/app/routes.ts`
3. Add navigation in `src/app/components/Sidebar.tsx`

### Modify Styles

- Global theme: `src/styles/theme.css`
- Tailwind utilities: `src/styles/tailwind.css`
- Use Tailwind classes in components

### Update Mock Data

- Edit `src/app/data/mockData.ts`
- Types are defined at the top of the file

## 🆘 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

**Dependencies issues:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**Build errors:**
```bash
# Clear cache
rm -rf dist .vite
npm run build
```

## 🌟 Next Steps

1. ✅ Upload to GitHub
2. ✅ Deploy to Vercel/Netlify
3. 🔄 Customize branding/colors
4. 🔌 Add real backend (Supabase, Firebase)
5. 🔐 Add authentication
6. 📊 Connect to real analytics
7. 💳 Integrate payment processing

## 📚 Learn More

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)

---

**Ready to get started? Follow GITHUB_UPLOAD_GUIDE.md for detailed instructions!**

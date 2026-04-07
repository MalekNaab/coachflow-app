# Deployment Guide

This guide will help you deploy CoachFlow to various platforms.

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel provides the easiest deployment for React + Vite applications.

#### Steps:

1. Push your code to GitHub (see instructions below)
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Environment Variables** (if needed):
- Add any API keys or secrets in Vercel's dashboard under Settings > Environment Variables

### 2. Netlify

#### Steps:

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "Add new site" > "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### 3. GitHub Pages

#### Steps:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/coachflow"
}
```

3. Update `vite.config.ts`:
```typescript
export default {
  base: '/coachflow/',
  // ... rest of config
}
```

4. Deploy:
```bash
npm run deploy
```

### 4. Docker

#### Dockerfile:

```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Commands:

```bash
docker build -t coachflow .
docker run -p 8080:80 coachflow
```

## 📋 Pre-Deployment Checklist

- [ ] Remove all console.logs
- [ ] Test on multiple browsers
- [ ] Test responsive design on mobile
- [ ] Optimize images
- [ ] Check all links work
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Add error tracking (Sentry, LogRocket, etc.)
- [ ] Set up proper environment variables
- [ ] Add meta tags for SEO
- [ ] Test production build locally

## 🔧 Build Optimization

### Analyzing Bundle Size

```bash
npm install --save-dev rollup-plugin-visualizer
```

Add to `vite.config.ts`:
```typescript
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  plugins: [
    // ... other plugins
    visualizer()
  ]
}
```

### Environment Variables

Create `.env.production`:
```
VITE_API_URL=https://api.yourbackend.com
VITE_ANALYTICS_ID=your-analytics-id
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🌐 Custom Domain

### Vercel:
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Update DNS records

## 📊 Post-Deployment

- Set up monitoring and alerts
- Configure CDN for better performance
- Enable HTTPS (automatic on Vercel/Netlify)
- Set up continuous deployment from main branch
- Monitor performance with Lighthouse

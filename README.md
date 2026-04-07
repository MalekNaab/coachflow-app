# CoachFlow

A modern SaaS platform for personal trainers to manage clients, sessions, revenue, and analytics.

## 🎯 Features

- **Client Management** - Track client profiles, goals, progress, and measurements
- **Session Scheduling** - Manage training sessions with detailed notes and status tracking
- **Payment Processing** - Monitor revenue, track payments, and view financial analytics
- **Analytics Dashboard** - Visualize business metrics with interactive charts
- **Smart Insights** - AI-powered business intelligence and recommendations
- **Professional Design** - Clean SaaS aesthetic with emerald green accents and responsive layout

## 🛠️ Tech Stack

- **React 18.3.1** - UI library
- **TypeScript** - Type safety
- **React Router 7** - Routing and navigation
- **Tailwind CSS 4** - Styling
- **Recharts** - Data visualization
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon system
- **Motion** - Animations
- **Vite** - Build tool

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/coachflow.git
cd coachflow
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Build for production:
```bash
npm run build
# or
pnpm build
# or
yarn build
```

## 📁 Project Structure

```
coachflow/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable UI components
│   │   ├── data/            # Mock data and types
│   │   ├── layouts/         # Page layouts
│   │   ├── pages/           # Application pages
│   │   ├── utils/           # Utility functions
│   │   ├── App.tsx          # Main app component
│   │   └── routes.ts        # Route configuration
│   └── styles/              # Global styles and theme
├── package.json
└── vite.config.ts
```

## 🎨 Design System

CoachFlow uses a professional SaaS design system featuring:

- **Color Palette**: Emerald green accents (#10b981) on a light theme
- **Typography**: Clean, professional fonts with proper hierarchy
- **Components**: Rounded cards, soft shadows, consistent spacing
- **Responsive**: Mobile-first design that works on all devices

## 📄 Pages

1. **Landing Page** (/) - Marketing site with features, pricing, and CTAs
2. **Login** (/login) - Authentication page
3. **Dashboard** (/app) - Overview with KPIs and quick stats
4. **Clients** (/app/clients) - Client list and management
5. **Client Profile** (/app/clients/:id) - Individual client details
6. **Sessions** (/app/sessions) - Session scheduling and tracking
7. **Payments** (/app/payments) - Revenue and payment management
8. **Analytics** (/app/analytics) - Business analytics and insights
9. **Settings** (/app/settings) - Application settings

## 🚀 Features in Detail

### Client Management
- Track client goals (Fat Loss, Strength, Rehab, General Fitness)
- Monitor client status (Active, At Risk, Inactive)
- Record measurements and progress over time
- Detailed session and payment history

### Smart Insights
- AI-powered business recommendations
- Client retention analysis
- Revenue optimization suggestions
- Session scheduling insights

### Analytics
- Revenue trends with interactive charts
- Client distribution by goals
- Session completion rates
- Payment status tracking

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

Built with ❤️ for personal trainers worldwide.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Unsplash](https://unsplash.com) - Stock photos
- [Lucide](https://lucide.dev/) - Icon system

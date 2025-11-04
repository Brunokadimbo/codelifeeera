# CodeLifeEra v0.1 - The Brain of the Future

A futuristic neon-themed MVP dashboard showcasing advanced system monitoring, active engines tracking, and AI-powered brain activity visualization.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git (optional)

### Installation

```bash
# Navigate to the project directory
cd codelifeeera

# Install dependencies
npm install
# or
pnpm install

# Start the development server
npm run dev
# or
pnpm dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 📁 Project Structure

```
codelifeeera/
├── client/
│   ├── public/
│   │   └── assets/
│   │       ├── logo.jpg          # CodeLifeEra logo
│   │       └── blueprint.jpg     # System blueprint image
│   ├── src/
│   │   ├── components/
│   │   │   ├── TopNavbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── WelcomeCard.tsx
│   │   │   ├── OverviewCards.tsx
│   │   │   ├── BrainActivityChart.tsx
│   │   │   ├── EngineSlots.tsx
│   │   │   ├── ProfileDropdown.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   └── *.module.css       # Component-specific styles
│   │   ├── styles/
│   │   │   └── theme.css         # Global theme and CSS variables
│   │   ├── data/
│   │   │   └── mock.ts           # Mock data for dashboard
│   │   ├── pages/
│   │   │   └── Home.tsx          # Main dashboard page
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── README.md                      # This file
└── todo.md                        # Project feature tracking
```

## 🎨 Design & Theme

The dashboard features a **neon dark theme** with the following color palette:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Neon Purple | `#C800FF` | Primary accent, glows, borders |
| Electric Pink | `#FF007F` | Secondary accent, hover states |
| Deep Space Blue | `#0B0B2E` | Background |
| Soft White | `#FFFFFF` | Primary text |
| Accent Orange | `#FF9500` | Tertiary accent |

All colors are defined as CSS variables in `client/src/styles/theme.css` for easy customization.

## 📦 Components Overview

### TopNavbar
- Logo with brand name and version
- Search input (UI-only, non-functional)
- "Switch to ZionEraX" button with gradient glow
- Notifications icon
- Profile dropdown menu

### Sidebar
- Expandable/collapsible navigation menu
- Menu items: Home, Dashboard, Settings, Help Center
- Logout button with pink neon styling
- Collapses to hamburger menu on mobile
- Smooth transitions and hover effects

### WelcomeCard
- Large greeting message: "Welcome to the Brain of the Future"
- Subtitle with system description
- Glass-effect card with neon border

### OverviewCards
- 4 responsive cards in a grid layout
- **Active Engines**: Shows count of active engines (5)
- **System Health**: Displays system status (Good)
- **Developer Log**: CTA button to view log entries
- **AI Assistant**: Placeholder for future feature
- Each card has unique color variant (purple, pink, orange)

### BrainActivityChart
- SVG line chart with 20 data points
- Gradient stroke (purple to pink)
- Animated line draw on mount
- Interactive data points with glow effects
- Legend showing activity levels
- Fully responsive

### EngineSlots
- "Coming soon" placeholder section
- Animated loading dots
- Glass-effect card styling

### Footer
- Left: "CodeLifeEra Machine v0.1 – The Brain of the Future" text
- Right: Real-time date and time (updates every second)
- Sticky positioning

## 🔄 Mock Data

The dashboard uses mock data from `client/src/data/mock.ts`:

```typescript
export const activeEngines = 5;
export const systemHealth = 'Good';
export const brainActivity = [45, 52, 48, 61, ...]; // 20 data points
export const developerLog = [...]; // Sample log entries
export const engines = [...]; // Engine configuration
```

### Integrating Real API Data

To replace mock data with real API endpoints:

1. **Update components** to use `useEffect` hooks for data fetching:
   ```typescript
   useEffect(() => {
     fetch('/api/system-health')
       .then(res => res.json())
       .then(data => setSystemHealth(data.status));
   }, []);
   ```

2. **Replace imports** in components:
   ```typescript
   // Before
   import { activeEngines } from '../data/mock';
   
   // After
   const [activeEngines, setActiveEngines] = useState(0);
   ```

3. **Update BrainActivityChart** to accept dynamic data:
   ```typescript
   <BrainActivityChart data={brainActivityData} />
   ```

## 🎯 Features Implemented

- ✅ Component-based React architecture with TypeScript
- ✅ Neon dark theme with CSS variables
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Accessible HTML with ARIA attributes
- ✅ Keyboard navigation support
- ✅ Smooth animations and transitions
- ✅ SVG chart with draw animation
- ✅ Real-time date/time display
- ✅ Expandable/collapsible sidebar
- ✅ Profile dropdown menu
- ✅ Glass-effect cards with glow effects
- ✅ Loading animation component

## 📱 Responsive Breakpoints

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Desktop | > 1024px | Full sidebar, 4-column card grid |
| Tablet | 768px - 1024px | Collapsed sidebar, 2-column grid |
| Mobile | < 768px | Hamburger menu, 1-column layout |

## ⌨️ Keyboard Navigation

- **Tab**: Navigate through interactive elements
- **Escape**: Close dropdowns and mobile menu
- **Enter**: Activate buttons and links
- **Arrow Keys**: Navigate menu items (when focused)

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint

# Format code
npm run format
```

### Customization

#### Change Colors
Edit CSS variables in `client/src/styles/theme.css`:
```css
:root {
  --color-neon-purple: #C800FF;
  --color-electric-pink: #FF007F;
  /* ... more variables ... */
}
```

#### Modify Layout
Update `client/src/components/DashboardLayout.tsx` to reorder or add sections.

#### Add New Components
1. Create component file: `client/src/components/MyComponent.tsx`
2. Create styles: `client/src/components/MyComponent.module.css`
3. Import and use in `DashboardLayout.tsx`

## 📸 Asset Placement

Place your images in `client/public/assets/`:
- `logo.jpg` - Brand logo (currently 40x40px in navbar)
- `blueprint.jpg` - System blueprint (available for future use)

Reference images in components:
```typescript
<img src="/assets/logo.jpg" alt="CodeLifeEra Logo" />
```

## 🔐 Accessibility Features

- Semantic HTML (`<nav>`, `<main>`, `<footer>`)
- ARIA labels and roles for interactive elements
- Focus visible states on all buttons
- Alt text for all images
- Color contrast ratios meet WCAG AA standards
- Keyboard-navigable interface

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Environment Variables
Create a `.env` file for environment-specific configuration:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=CodeLifeEra
```

## 📝 Code Comments

Each component includes JSDoc comments explaining:
- Component purpose
- Props interface
- Key functionality

Example:
```typescript
/**
 * TopNavbar Component
 * Main navigation bar with logo, search input, system switcher button, 
 * notifications icon, and profile dropdown.
 * Props: None
 */
```

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [SVG Animation](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📄 License

This project is provided as-is for development and evaluation purposes.

## 🤝 Support

For issues or questions:
1. Check the component documentation in code comments
2. Review the mock data structure in `client/src/data/mock.ts`
3. Inspect CSS variables in `client/src/styles/theme.css`
4. Test responsive design using browser DevTools

## 🎯 Next Steps

1. **Replace mock data** with real API endpoints
2. **Add authentication** for user login
3. **Implement real-time updates** using WebSockets
4. **Add more dashboard sections** as needed
5. **Deploy** to production environment

---

**CodeLifeEra Machine v0.1 – The Brain of the Future**

Built with React, TypeScript, Vite, and CSS Modules for a modern, responsive, and accessible dashboard experience.

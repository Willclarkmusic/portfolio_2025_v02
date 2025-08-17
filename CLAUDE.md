# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Package Management
- Uses npm (package-lock.json present)
- Also has yarn.lock - either package manager can be used

## Architecture Overview

### Tech Stack
- **Framework**: React 18 with Vite build tool
- **Styling**: Tailwind CSS with custom configurations
- **3D Graphics**: React Three Fiber (@react-three/fiber) with Three.js
- **Physics**: React Three Rapier for 3D physics simulation
- **Animation**: Framer Motion for smooth animations
- **Forms**: Formspree for contact form handling
- **Icons**: React Icons library

### Project Structure
```
src/
├── App.jsx                 - Main app component with particle system integration
├── main.jsx               - React app entry point
├── pages/
│   └── HomePage.jsx       - Main portfolio page with all sections
├── components/
│   ├── ParticlesScene.jsx - 3D particle system using Three.js/Rapier
│   ├── Content.jsx        - Static data arrays for projects, skills, experiences
│   ├── ElementTemps.jsx   - Reusable UI components (buttons, modals, etc.)
│   ├── Menu.jsx           - Navigation menu
│   ├── UniversalModal.jsx - Modal system for project details
│   ├── RenderManager.jsx  - 3D rendering utilities and effects
│   └── ScrollManager.jsx  - Mobile detection and scroll utilities
```

### Key Architecture Patterns

#### 3D Particle Background System
- Uses React Three Fiber with physics-enabled particles
- Lazy loaded via `useInView` for performance
- Mobile-responsive camera positioning and reduced particle count
- Physics simulation with @react-three/rapier for realistic particle movement

#### Portfolio Sections Architecture
- Single-page application with scroll-snap sections
- Uses `useRef` for section navigation and smooth scrolling
- Modal system for detailed project views
- Responsive design with mobile-first approach

#### Data Management
- Static content stored in `Content.jsx` with exported arrays
- Project data includes images, descriptions, tech stacks, and links
- Skills organized by categories (Frontend, Backend, Other Tech)
- Experience data with accordion-style display

#### Performance Optimizations
- Conditional rendering of 3D scene based on viewport intersection
- Mobile detection for adjusted 3D camera settings and reduced effects
- Lazy loading of modal content
- Optimized image loading from public/images directory

### Component Patterns
- Heavy use of Framer Motion for entrance animations
- Draggable elements in hero section
- Accordion components for collapsible content sections
- Icon boxes with hover effects for skill display
- Reusable Section wrapper component with consistent styling

### Styling Approach
- Tailwind CSS utility classes throughout
- Custom backdrop-blur effects for glassmorphism design
- Responsive grid layouts (lg:grid lg:grid-cols-2)
- Dark theme with zinc-800 background and transparency layers
- Custom aspect ratio plugin for image containers

### Build Configuration
- Vite with React plugin for fast development
- ESLint with React-specific rules and hooks validation
- Standard Tailwind configuration with aspect-ratio plugin
- No TypeScript - uses plain JavaScript with JSX
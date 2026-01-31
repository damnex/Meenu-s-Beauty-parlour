# Meenu's Beauty Parlour Website

## Overview

A professional one-page website for Meenu's Beauty Parlour, a beauty business with 8+ years of experience. The site showcases beauty services including bridal makeup, hairstyling, facials, and mehandi art. The primary booking flow uses WhatsApp integration for customer inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for lightweight client-side routing (single-page app with hash navigation)
- **Styling**: Tailwind CSS with custom feminine color palette (pink, gold, cream tones)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for scroll reveals and page animations
- **Smooth Scrolling**: react-scroll for single-page navigation
- **State Management**: TanStack React Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Structure**: RESTful endpoints defined in `shared/routes.ts`
- **Validation**: Zod schemas for request/response validation
- **Build Tool**: Vite for frontend, esbuild for server bundling

### Data Storage
- **Current**: In-memory storage (`MemoryStorage` class in `server/storage.ts`)
- **Schema**: Drizzle ORM schemas ready for database migration
- **Note**: Database can be added later; current storage is placeholder for logging inquiries

### Key Design Decisions

**WhatsApp-First Booking Flow**
- Primary customer interaction via WhatsApp (`window.open` to WhatsApp API)
- Backend inquiry endpoint exists for optional logging but WhatsApp handles actual booking
- No authentication required for customers

**Shared Type Definitions**
- `shared/schema.ts`: Data models and Zod validation schemas
- `shared/routes.ts`: API route definitions with input/output types
- Ensures type safety between frontend and backend

**Single-Page Structure**
- All content on one scrollable page with section-based navigation
- Sections: Hero, About, Services, Gallery, Offers, Contact
- Sticky navigation with smooth scroll to sections

### Project Structure
```
client/           # React frontend
├── src/
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components (Home, 404)
│   ├── hooks/        # Custom React hooks
│   └── lib/          # Utilities and query client
server/           # Express backend
├── routes.ts     # API route handlers
├── storage.ts    # Data storage layer
└── static.ts     # Static file serving
shared/           # Shared types and schemas
├── schema.ts     # Data models
└── routes.ts     # API definitions
```

## External Dependencies

### Third-Party Services
- **WhatsApp Business API**: Customer booking via `wa.me` links (phone: +91 95143 31529)
- **Google Maps**: Embedded location map
- **Instagram**: Social media link integration
- **Google Fonts**: Cormorant Garamond, Montserrat, Great Vibes

### Key npm Packages
- `@tanstack/react-query`: Server state management
- `framer-motion`: Animation library
- `react-scroll`: Smooth scrolling navigation
- `wouter`: Lightweight routing
- `zod`: Schema validation
- `drizzle-orm`: Database ORM (ready for future database)
- Full shadcn/ui component set via Radix UI primitives

### Deployment
- Configured for Vercel deployment (`vercel.json`)
- API routes rewrites to `/api/*`
- Static assets served from `dist/public`
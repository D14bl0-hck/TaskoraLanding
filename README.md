# Taskora - AI Workflow Marketplace

A high-converting, futuristic landing page for Taskora, the marketplace for AI workflows.

## Features

- **Cinematic Hero Section** - Bold gradient animations and glowing effects
- **Problem-Solution Cards** - Three compelling value propositions
- **How It Works** - Clear 3-step process visualization
- **Workflow Showcase** - Beautiful grid of mock workflow cards
- **Creator Benefits** - Split layout highlighting platform advantages
- **Waitlist Integration** - Functional email collection with Supabase backend
- **Fully Responsive** - Mobile-first design with smooth animations
- **Database Ready** - Supabase integration for waitlist management

## Design System

- **Background**: #0A0A0A (Deep black)
- **Accent**: #6C47FF (Vibrant purple)
- **Text**: #C8C8C8 (Soft gray)
- **Typography**: Inter font family
- **Style**: Minimal, futuristic, glass morphism effects

## Tech Stack

- Next.js 13+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Supabase (Database & Auth)
- Lucide React (Icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Supabase credentials to `.env.local`.

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
app/
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout with Navbar & Footer
├── globals.css           # Global styles & animations
└── api/
    └── waitlist/
        └── route.ts      # Waitlist API endpoint

components/
├── layout/
│   ├── Navbar.tsx        # Navigation bar
│   └── Footer.tsx        # Footer with links
└── sections/
    ├── Hero.tsx          # Hero section with CTA
    ├── ProblemSolution.tsx
    ├── HowItWorks.tsx
    ├── Showcase.tsx
    ├── CreatorBenefits.tsx
    └── WaitlistCTA.tsx   # Email collection form
```

## Database

The waitlist table is automatically created with the following schema:

- `id` (uuid) - Primary key
- `email` (text) - Unique email address
- `created_at` (timestamp) - Signup timestamp

RLS policies ensure secure data access.

## Features

### Animations
- Fade-in on scroll
- Floating 3D elements
- Smooth hover transitions
- Pulsing gradient backgrounds

### Interactive Elements
- Mobile-responsive navigation
- Form validation
- Loading states
- Success/error messaging

## License

MIT

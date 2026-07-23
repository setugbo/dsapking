# Marvinho Limited - Corporate Digital Platform

Enterprise-grade corporate website for Marvinho Limited, Nigeria's premier multi-service corporation.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** Custom design system + Shadcn patterns
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Package Manager:** npm workspaces
- **Monorepo:** Turborepo
- **Deployment:** Vercel

## Architecture

```
marvinho/
├── apps/
│   ├── website/          # Main corporate website
│   ├── studio/           # Future: Marvinho Studio app
│   ├── agency/           # Future: Marvinho Agency app
│   ├── nani/             # Future: Nani's Services app
│   ├── tiling/           # Future: Marvinho Tiling app
│   ├── merchandise/      # Future: General Merchandise app
│   └── admin/            # Future: Admin dashboard
├── packages/
│   ├── ui/               # Shared UI components & design system
│   ├── branding/         # Brand assets & identity
│   ├── hooks/            # Custom React hooks
│   ├── config/           # Site configuration & content
│   ├── shared/           # Shared utilities & constants
│   ├── forms/            # Form schemas & validation
│   ├── icons/            # Icon exports
│   ├── theme/            # Theme configuration
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── turbo.json
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/marvinho.git
cd marvinho

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Business Units

1. **Marvinho Studio** - Photography, videography, and media production
2. **Marvinho Agency** - Cleaning, facility management, and staffing
3. **Nani's Services** - Nanny recruitment and childcare
4. **Marvinho Tiling** - Tile and marble installation
5. **Frame Enlargement** - Canvas printing and framing
6. **General Merchandise** - Procurement and trading

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://marvinho.com
NEXT_PUBLIC_SITE_NAME=Marvinho Limited
NEXT_PUBLIC_WHATSAPP_NUMBER=+234XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key
NEXT_PUBLIC_GA_ID=your_ga_id
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repository in Vercel
3. Configure root directory: `apps/website`
4. Set build command: `cd ../.. && npm install && cd apps/website && npm run build`
5. Add environment variables
6. Deploy

## Design System

The design system is located in `packages/ui/` and includes:

- **Buttons:** primary, secondary, gold, white, ghost, link
- **Cards:** premium cards with hover effects
- **Forms:** Input, Textarea, Select with validation
- **Layout:** Container, Section, PageHeader
- **Feedback:** Badge, FAQ Accordion, Loading states
- **Navigation:** Navbar, Footer, Breadcrumbs
- **Animations:** Scroll reveal, counters, hover effects

## Future Roadmap

- [ ] Sanity CMS integration for content management
- [ ] Customer portal with authentication
- [ ] Online booking system
- [ ] Online payment integration (Paystack/Flutterwave)
- [ ] Employee portal
- [ ] Vendor portal
- [ ] AI chat assistant
- [ ] Mobile app (React Native)
- [ ] Analytics dashboard
- [ ] CRM integration
- [ ] ERP integration
- [ ] Multi-language support

## License

Private - Marvinho Limited. All rights reserved.

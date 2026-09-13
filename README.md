# D KING SAP ACADEMY LTD — Corporate Digital Platform

Enterprise-grade corporate website for D KING SAP ACADEMY LTD — an SAP training and consulting organization.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** Custom design system (Classic SAP blue theme)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **Contact API:** Nodemailer (server-side submission)
- **Package Manager:** npm workspaces
- **Monorepo:** Turborepo

## Architecture

```
dsapking/
├── apps/
│   └── website/          # Corporate website
├── packages/
│   ├── ui/               # Shared UI components & design system
│   ├── branding/         # Brand assets & identity
│   ├── hooks/            # Custom React hooks
│   ├── config/           # Site configuration & content
│   ├── shared/           # Shared utilities & constants
│   ├── forms/            # Form schemas & validation
│   ├── icons/            # Icon exports
│   ├── theme/            # Theme configuration (SAP palette)
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
git clone <repository-url>
cd dsapking

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

## Site Content

All site content lives in `packages/config/src/index.ts`:

- `trainingProgrammes` — 8 SAP training modules (FICO, MM, SD, PP, PM, HCM, BW, Basis)
- `consultingServices` — 10 SAP consulting services
- `careerServices`, `corporateTraining*`, `coreValues`, `whyChooseUs`, `resources`, `faqs`, `enquiryTypes`
- `siteConfig` — company details, contact, socials, business hours (placeholder values where unconfirmed)

Update content there and every page, card and dropdown built from the data updates automatically.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Public
NEXT_PUBLIC_SITE_URL=https://dkingacademy.com
NEXT_PUBLIC_SITE_NAME=D KING SAP ACADEMY LTD
NEXT_PUBLIC_WHATSAPP_NUMBER=+[WHATSAPP NUMBER]
NEXT_PUBLIC_STUDENT_PORTAL_URL=
NEXT_PUBLIC_GA_ID=

# Contact form email (Nodemailer)
MAIL_HOST=
MAIL_PORT=465
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS=
CONTACT_RECIPIENT=
```

The contact form submits to `/api/contact` via server-side Zod validation, a hidden honeypot
field and per-IP rate limiting. When `MAIL_HOST`/`MAIL_PORT` are set, submissions are delivered
by email; otherwise the API logs a warning and returns success so local development is not blocked.

## Design System

The design system lives in `packages/ui/` and is themed through CSS variables in `:root`
(`apps/website/src/app/globals.css` and `packages/ui/src/globals.css`) using the **Classic SAP blue**
palette — primary `#006BB8`, navy `#011449`, gold `#F0AB00`, surface `#F5F6F7`, muted `#5B738B`.

Rebranding to another SAP color set is a one-file change: update the `:root` variables.

## Pages

- `/` — homepage (§54 section sequence)
- `/training` + `/training/[slug]` — module overview + detail
- `/consulting` + `/consulting/[slug]` — services overview + detail
- `/practical-experience`, `/career-development`, `/corporate-training`
- `/assessment-certification`, `/resources`, `/student-portal` (coming soon), `/faqs`
- `/about`, `/contact`, `/privacy`, `/terms`

## Deployment (Vercel)

1. Push to GitHub
2. Import repository in Vercel
3. Configure root directory: `apps/website`
4. Set build command: `cd ../.. && npm install && cd apps/website && npm run build`
5. Add environment variables
6. Deploy

## License

Private — D KING SAP ACADEMY LTD. All rights reserved.
# Beyond Reality — Company Website

## Quick Start

```bash
# Install Node.js (if not installed)
# Recommended: use nvm
nvm install 22
nvm use 22

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Hosting:** Vercel (recommended)

## Project Structure

```
src/
├── app/                    # Pages (file-based routing)
│   ├── page.tsx           # Homepage
│   ├── services/          # Service pages
│   ├── about/             # About page
│   ├── case-studies/      # Case studies
│   ├── blog/              # Blog listing
│   ├── contact/           # Contact form
│   └── careers/           # Careers page
├── components/
│   ├── layout/            # Header, Footer
│   └── sections/          # Reusable page sections
└── public/                # Static assets
```

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel
npx vercel
```

## Next Steps

- [ ] Add real team photos and names
- [ ] Connect contact form to Formspree/Resend
- [ ] Add Calendly embed
- [ ] Set up Google Analytics
- [ ] Write blog post content (full articles)
- [ ] Add real case study data
- [ ] Set up Open Graph images for social sharing
- [ ] Add sitemap.xml and robots.txt for SEO

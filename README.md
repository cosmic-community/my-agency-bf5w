# My Agency
![App Preview](https://imgix.cosmicjs.com/72cf9820-3915-11f1-9de9-cf93940ce5ff-autopilot-photo-1500648767791-00dcc994a43e-1776289970764.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern creative agency website built with Next.js 16 and Cosmic CMS. Showcases portfolio work, services, team members, and client testimonials with a beautiful, responsive design.

## Features

- 🏠 **Dynamic Homepage** — Hero, services overview, portfolio highlights, team preview, and testimonials
- ⚙️ **Services Page** — Detailed service listings with icons and featured images
- 🎨 **Portfolio Gallery** — Filterable project showcase with individual project detail pages
- 👥 **Team Directory** — Team member profiles with photos, bios, and LinkedIn links
- 💬 **Testimonials Page** — Client testimonials with company attribution
- 📱 **Fully Responsive** — Mobile-first design that looks great on all devices
- ⚡ **Server-Side Rendering** — Fast loading with Next.js 16 App Router
- 🔍 **SEO Optimized** — Proper metadata and semantic HTML throughout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69e008520c0b68a62049a212&clone_repository=69e009930c0b68a62049a27e)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a creative agency website with portfolio work, services, team members, and client testimonials."

### Code Generation Prompt

> "Build a Next.js application for a company website called 'My Agency'. The content is managed in Cosmic CMS with the following object types: services, team-members, portfolio-work, testimonials. Create a beautiful, modern, responsive design with a homepage and pages for each content type."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic CMS](https://www.cosmicjs.com/docs) — Headless content management
- [imgix](https://imgix.com/) — Image optimization and delivery

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with your bucket configured

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```
4. Run the development server:
   ```bash
   bun dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Objects
```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single portfolio work by slug
const { object: project } = await cosmic.objects
  .findOne({ type: 'portfolio-work', slug: 'my-project' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with the following Cosmic object types:

| Object Type | Slug | Description |
|---|---|---|
| Services | `services` | Agency service offerings |
| Team Members | `team-members` | Team member profiles |
| Portfolio Work | `portfolio-work` | Project portfolio showcase |
| Testimonials | `testimonials` | Client testimonials |

## Deployment Options

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Import the project to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy

### Netlify
1. Push your code to a GitHub repository
2. Import the project to [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Set the publish directory to `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->
# Good Bad Wired

Newton Intelligence's reporting station for all things AI, automation, and digital intelligence.

## About

This is where I (Newton) document our journey building real projects with AI and automation. It's the unfiltered view - the good, the bad, and the wired.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Markdown** for content management
- **Vercel** for deployment (coming soon)

## Content Structure

- `/content/posts/` - Blog posts in Markdown format
- `/src/app/blog/` - Blog pages and routing
- `/src/lib/posts.ts` - Post management utilities

## Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
```

## Writing Posts

Create new posts in `/content/posts/` using this frontmatter:

```markdown
---
title: "Post Title"
date: "YYYY-MM-DD"
category: "good" | "bad" | "wired"
excerpt: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

## Deployment

This site is designed for automatic deployment to Vercel with each git push.

---

Built by Newton Intelligence • Follow our journey at [goodbadwired.com](https://goodbadwired.com)
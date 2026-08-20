# Ata Berk Öztürk — Portfolio

A production-ready personal portfolio for Physics Engineering, computational materials science, Density Functional Theory, scientific computing and HPC work. Built with Next.js, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Production verification

```bash
npm run lint
npm run build
```

## Personalisation

Update all personal and project links in one place:

```text
data/portfolio.ts
```

Replace the placeholder values for:

- Email
- GitHub
- LinkedIn
- Project repository and case study links

Place the CV PDF at:

```text
public/cv.pdf
```

The existing Download CV actions already point to `/cv.pdf`.

## Deployment

The project is designed for a GitHub → Vercel deployment flow. Connect the repository to Vercel, keep the default Next.js build settings, and attach `ataberkozturk.com` after the first successful deployment.

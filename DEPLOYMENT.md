# Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or use the Vercel dashboard:
1. Import your Git repository
2. Framework preset: Vite
3. Deploy

### 2. Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to Netlify dashboard.

### 3. GitHub Pages
1. Update `vite.config.ts` with base path:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```
2. Build: `npm run build`
3. Deploy the `dist` folder to `gh-pages` branch

### 4. Custom Server
1. Build: `npm run build`
2. Upload `dist/index.html` to your server
3. Configure server to serve the file

## Environment Variables

If you add any API keys or environment variables:

1. Create `.env` file:
```
VITE_API_KEY=your_key_here
```

2. Access in code:
```ts
const apiKey = import.meta.env.VITE_API_KEY;
```

3. Add `.env` to `.gitignore`

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify all animations work
- [ ] Check mobile responsiveness
- [ ] Test contact form (if implemented)
- [ ] Replace placeholder resume with actual PDF
- [ ] Update GitHub/LinkedIn links with real URLs
- [ ] Test all external links
- [ ] Check performance with Lighthouse
- [ ] Verify SEO meta tags

## Performance Tips

1. **Image Optimization**: If you add images, use WebP format
2. **Lazy Loading**: Large components can be lazy loaded
3. **Code Splitting**: Already handled by Vite
4. **CDN**: Use Vercel/Netlify CDN for faster loading

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as shown

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS

## Analytics (Optional)

Add Google Analytics or Plausible:

```tsx
// Add to index.html <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Monitoring

Consider adding:
- Sentry for error tracking
- Vercel Analytics
- Google Search Console

---

**Happy Deploying! 🚀**

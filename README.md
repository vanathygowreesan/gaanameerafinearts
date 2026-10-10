# Gaana Meera School of Fine Arts – Next.js site

Next.js 15 (App Router) + TypeScript. Plain CSS (`app/globals.css`), no UI library, no Tailwind.

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```
Requires Node 18.18 or newer. Fonts (Spectral, Figtree) are fetched from Google Fonts at build time, so the first build needs internet access.

## Where to edit
| What | File |
| --- | --- |
| Page text (hero, About the Guru, Programs, FAQ, Contact) | `app/page.tsx` |
| Gallery photos, years and event names | `components/gallery-data.ts` |
| Gallery photo files | `public/images/gallery/` |
| Menu links | `components/SiteHeader.tsx` |
| Colors, fonts, spacing, animations | `app/globals.css` (colors are in `:root` near the top) |
| Hero photo, logo, guru portrait | `public/images/hero.jpg`, `logo.png`, `guru.jpg` |
| Page title and description | `app/layout.tsx` |

## Adding gallery photos
1. Copy the image into `public/images/gallery/`.
2. Add an entry to the right year in `components/gallery-data.ts`:
   `{ src: '/images/gallery/my-photo.jpg', caption: 'Description, 2025', event: 'Event name' }`
   Photos with the same `event` are grouped under one heading.
3. For a new year, add a new key under `years`.

Photos without `src` show a placeholder tile (the 2025 award ceremonies are placeholders for now).

## Notes
- The member portal login is shown as "Coming soon" (no backend).
- Photos are served as separate files, so they can be compressed or resized without touching the code.

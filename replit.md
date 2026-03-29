# Campus Recovery Center

A static HTML/CSS website for Campus Recovery Center, a Joint Commission accredited addiction and mental health treatment facility in Lake Worth Beach, Florida.

## Design System

- **Primary Color**: `#E8833A` (warm orange)
- **Accent Color**: `#1A3A4A` (dark navy)
- **Background**: `#FFFAF5` (cream), `#ffffff` (white)
- **Fonts**: Poppins (headings/UI) + Roboto (body) via Google Fonts
- Homepage uses `css/home.css` (redesigned), inner pages use `css/style.css`

## Project Structure

- `index.html` — Homepage (redesigned with conversion-focused layout)
- `css/home.css` — Homepage design system (orange/cream branding)
- `css/style.css` — Inner page global stylesheet (orange/navy branding + dropdown nav + crosslink styles)
- `treatment/` — 11 condition-specific pages (alcohol, opioid, cocaine, benzo, Rx drugs, depression, anxiety, PTSD, bipolar, dual diagnosis, schizophrenia)
- `locations/` — 5 local SEO pages (Lake Worth Beach, Boynton Beach, Delray Beach, West Palm Beach, Palm Beach County)
- `insurance/` — 10 individual provider pages + overview
- `admissions/`, `careers/`, `clinical-programs/`, `contact/`, `services/` — Core section pages
- `faq/`, `signs-of-addiction/`, `family-resources/`, `aftercare-planning/`, `what-is-mat/`, `php-vs-iop/`, `outpatient-vs-inpatient/` — Educational/resource pages
- `single-post/` — Blog/news articles
- `our-team/`, `jcaho/`, `news-updates/`, `copy-of-hippa/` — Additional pages
- `404.html` — Custom 404 page
- `sitemap.xml` — Full sitemap with all ~50 pages
- `robots.txt` — Search engine directives
- `schema-builder/` — Separate schema builder app

## Navigation

All 51 pages share a mega-nav header with 5 dropdown menus:
- **Treatment** (mega dropdown: Substance Use + Mental Health columns)
- **Programs** (dropdown: Clinical Programs, Services, SUD, Mental Health, PHP vs IOP, etc.)
- **Locations** (dropdown: 5 South Florida cities)
- **Insurance** (dropdown: 10 providers + Verify Insurance)
- **Resources** (dropdown: FAQ, Signs of Addiction, Family Resources, Aftercare, News)
- Plus direct links: Home, Admissions, Contact

## Internal Linking

- Treatment pages cross-link to all other treatment pages + all locations
- Location pages cross-link to all treatment pages + other locations
- Uses pill-style `.crosslink-card` components in a `.crosslinks` section

## Running the App

The app is served as a static site using the `serve` npm package:

```
npx serve -s . -l 5000
```

## Stack

- Pure HTML/CSS static website
- No build step required
- Served via `serve` on port 5000
- Node.js 20 runtime

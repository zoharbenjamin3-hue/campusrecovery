# Campus Recovery Center

A static HTML/CSS website for Campus Recovery Center, a Joint Commission accredited addiction and mental health treatment facility in Lake Worth Beach, Florida.

## Project Structure

- `index.html` - Homepage
- `css/style.css` - Global stylesheet
- `admissions/`, `careers/`, `clinical-programs/`, `contact/`, etc. - Section pages
- `insurance/` - Individual insurance provider pages (Aetna, Ambetter, BCBS, Cigna, Humana, Medicaid, Medicare, Molina, Tricare, United Healthcare)
- `services/`, `mental-health-treatment-services/`, `substance-use-disorder-treatment-services/` - Treatment pages
- `single-post/` - Blog/news articles
- `our-team/`, `jcaho/`, `news-updates/` - Additional pages
- `sitemap.xml`, `robots.txt` - SEO files

## Running the App

The app is served as a static site using the `serve` npm package:

```
npx serve -s . -l 5000
```

## Stack

- Pure HTML/CSS static website
- No build step required
- Served via `serve` on port 5000

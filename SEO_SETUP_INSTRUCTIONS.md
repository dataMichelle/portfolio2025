# SEO Setup Instructions

## Google Analytics 4 Setup

### Step 1: Create Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Create an account name (e.g., "Michelle Salazar Portfolio")
5. Choose data sharing settings
6. Create a property name (e.g., "Portfolio Website")
7. Select your country and currency
8. Choose "Web" as your platform
9. Enter your website URL: `https://portfolio2025.netlify.app`
10. Create the stream

### Step 2: Get Your Measurement ID
1. After creating the stream, you'll see a "Measurement ID" (format: G-XXXXXXXXXX)
2. Copy this ID

### Step 3: Update Your Website
1. Open `index.html` in your project
2. Find the line with `GA_MEASUREMENT_ID` (appears twice)
3. Replace both instances of `GA_MEASUREMENT_ID` with your actual measurement ID

Example:
```html
<!-- Before -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
gtag('config', 'GA_MEASUREMENT_ID', {

<!-- After -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1234567890"></script>
gtag('config', 'G-1234567890', {
```

## Google Search Console Setup

### Step 1: Verify Your Site
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Click "Add Property"
3. Choose "URL prefix" and enter: `https://portfolio2025.netlify.app`
4. Use the "HTML tag" verification method
5. Copy the meta tag they provide
6. Add it to your `index.html` in the `<head>` section
7. Deploy your changes to Netlify
8. Click "Verify" in Search Console

### Step 2: Submit Your Sitemap
1. Once verified, go to "Sitemaps" in the left sidebar
2. Add your sitemap URL: `https://portfolio2025.netlify.app/sitemap.xml`
3. Click "Submit"

## Performance Monitoring

### Core Web Vitals
- Monitor your site's performance in Google Search Console
- Check "Core Web Vitals" report for loading, interactivity, and visual stability

### Additional Tools
- Use [PageSpeed Insights](https://pagespeed.web.dev/) to test your site
- Monitor [GTmetrix](https://gtmetrix.com/) for performance scores
- Check [Lighthouse](https://developers.google.com/web/tools/lighthouse) scores in Chrome DevTools

## SEO Checklist ✅

### Completed:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ robots.txt file
- ✅ sitemap.xml file
- ✅ Dynamic page titles with SEO component
- ✅ Improved alt text for images
- ✅ Lazy loading for images
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Google Analytics 4 setup (needs your ID)

### Next Steps:
- [ ] Set up Google Analytics with your measurement ID
- [ ] Verify site in Google Search Console
- [ ] Submit sitemap to Search Console
- [ ] Monitor performance and rankings
- [ ] Consider adding more internal links between pages
- [ ] Optimize images further (WebP format)
- [ ] Add FAQ schema markup if applicable

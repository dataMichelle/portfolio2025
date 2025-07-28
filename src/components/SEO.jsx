import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Michelle Salazar - Full-Stack Developer",
  description = "Full-stack developer specializing in high-performance, accessible websites. Expert in React, Next.js, and modern web development with focus on speed, SEO, and user experience.",
  keywords = "full-stack developer, web developer, React, Next.js, JavaScript, accessible websites, SEO optimization, portfolio, Michelle Salazar",
  image = "https://portfolio2025.netlify.app/logo.svg",
  url = "https://portfolio2025.netlify.app",
  type = "website",
  twitterHandle = "@yourhandle", // Update this with your actual Twitter handle
  children,
}) => {
  const siteTitle = "Michelle Salazar Portfolio";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Accessibility and Language */}
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="color-scheme" content="light dark" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={`${title} - Preview image`} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={`${title} - Preview image`} />
      {twitterHandle && <meta property="twitter:creator" content={twitterHandle} />}

      {/* Additional meta tags can be passed as children */}
      {children}
    </Helmet>
  );
};

export default SEO;

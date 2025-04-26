import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  canonicalUrl?: string;
  twitterHandle?: string;
}

const defaultTitle = 'Eloise Emery | Portfolio';
const defaultDescription = 'Portfolio showcasing web development projects and skills';
const defaultImage = '/og-image.png';
const defaultDomain = 'https://www.eloemery.com';
const defaultTwitterHandle = '@eloiseemery';

const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = ['web development', 'portfolio', 'react', 'typescript'],
  image = defaultImage,
  url = defaultDomain,
  type = 'website',
  canonicalUrl = url,
  twitterHandle = defaultTwitterHandle
}) => {
  return (
    <Helmet 
      defaultTitle={defaultTitle}
      titleTemplate={`%s | Eloise Emery`}
    >
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;

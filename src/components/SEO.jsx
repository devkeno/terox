import Head from "next/head";
import PropTypes from "prop-types";

const SITE = {
  name: "Terox Solutions",
  titleSuffix: "Terox Solutions | Digital Agency",
  description:
    "Terox Solutions — digital agency specialized in web development, SEO, AI automation and growth marketing. We build performant, scalable websites and digital products.",
  url: "https://terox-solutions.com", // change to your real site URL
  logo: "https://terox-solutions.com/_assets/terox-logo.png", // change to your real logo
  defaultImage:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80", // fallback OG image
  twitterHandle: "@teroxagency",
  locale: "en_US",
};

export default function SeoHead({
  title,
  description,
  url,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  canonical,
  noindex = false,
}) {
  const fullTitle = title ? `${title} — ${SITE.titleSuffix}` : `${SITE.name} — ${SITE.titleSuffix}`;
  const metaDescription = description || SITE.description;
  const metaUrl = url || SITE.url;
  const metaImage = image || SITE.defaultImage;
  const metaCanonical = canonical || metaUrl;
  const robots = noindex ? "noindex, nofollow" : "index, follow";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE.name,
    "url": SITE.url,
    "logo": SITE.logo,
    "sameAs": [
      /* add social profiles here, e.g., Facebook, LinkedIn, Twitter URLs */
    ],
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": metaUrl,
    },
    "headline": title || SITE.name,
    "image": [metaImage],
    "datePublished": publishedTime || undefined,
    "dateModified": modifiedTime || undefined,
    "author": author ? { "@type": "Person", "name": author } : undefined,
    "publisher": {
      "@type": "Organization",
      "name": SITE.name,
      "logo": { "@type": "ImageObject", "url": SITE.logo },
    },
    "description": metaDescription,
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={author || SITE.name} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={metaCanonical} />

      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Open Graph */}
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:alt" content={metaDescription} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {SITE.twitterHandle && <meta name="twitter:site" content={SITE.twitterHandle} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Theme color */}
      <meta name="theme-color" content="#047857" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
    </Head>
  );
}

SeoHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(["website", "article", "profile"]),
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  author: PropTypes.string,
  canonical: PropTypes.string,
  noindex: PropTypes.bool,
};

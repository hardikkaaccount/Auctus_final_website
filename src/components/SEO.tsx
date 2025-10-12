import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: any;
}

const SEO = ({
  title = "IEEE PESCE Student Branch | Technical Excellence & Innovation",
  description = "Official website of IEEE PESCE Student Branch. Join us for technical events, workshops, and innovation challenges in Mandya, Karnataka.",
  keywords = "IEEE, PESCE, Student Branch, Technical Events, Workshops, Engineering, Technology, Innovation, Mandya, Karnataka",
  image = "/src/assets/ieee-logo.png",
  url = "https://ieee.pesce.ac.in/",
  type = "website",
  structuredData,
}: SEOProps) => {
  const fullTitle = title === "IEEE PESCE Student Branch | Technical Excellence & Innovation" 
    ? title 
    : `${title} | IEEE PESCE Student Branch`;

  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "IEEE PESCE Student Branch",
    "url": "https://ieee.pesce.ac.in/",
    "logo": "https://ieee.pesce.ac.in/src/assets/ieee-logo.png",
    "sameAs": [
      "https://www.instagram.com/ieee_pesce_mandya",
      // Add other social media links as needed
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="IEEE PESCE Student Branch" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="IEEE PESCE Student Branch" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
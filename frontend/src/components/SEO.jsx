import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage, path = '' }) => {
  const siteUrl = 'https://www.bravia.ind.br';
  const defaultTitle = 'Bravia Engenharia | Soluções em Petróleo e Gás';
  const defaultDescription = 'Empresa 100% brasileira especializada em engenharia para petróleo e gás. +20 anos de experiência, certificação ISO 9001:2015, serviços offshore e onshore.';
  const defaultKeywords = 'bravia engenharia, petróleo e gás, offshore, subsea, fabricação estruturas metálicas, usinagem industrial, soldagem, caldeiraria, ISO 9001, Macaé';
  const defaultOgImage = `${siteUrl}/og-image.jpg`;

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoOgImage = ogImage || defaultOgImage;
  const canonicalUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Bravia Engenharia" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoOgImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="Bravia Engenharia" />
      <meta name="geo.region" content="BR-RJ" />
      <meta name="geo.placename" content="Macaé" />
      <meta name="geo.position" content="-22.3767;-41.7858" />
      <meta name="ICBM" content="-22.3767, -41.7858" />
      
      {/* Business Schema */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Bravia Engenharia",
            "description": "${seoDescription}",
            "url": "${siteUrl}",
            "logo": "${siteUrl}/logo.png",
            "image": "${seoOgImage}",
            "telephone": "+55-22-99826-2171",
            "email": "comercial@bravia.ind.br",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Realengo, N.48, Cabiúnas, Galpão",
              "addressLocality": "Macaé",
              "addressRegion": "RJ",
              "postalCode": "27.977-320",
              "addressCountry": "BR"
            },
            "foundingDate": "2021",
            "sameAs": [
              "https://www.linkedin.com/company/bravia-engenharia",
              "https://www.instagram.com/braviaengenharia"
            ],
            "areaServed": "BR",
            "serviceType": ["Engenharia Industrial", "Petróleo e Gás", "Offshore", "Subsea"],
            "certifications": ["ISO 9001:2015"]
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;

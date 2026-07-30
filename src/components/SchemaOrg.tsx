export function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sistemasintegrados.online/#organization",
        "name": "Sintegra",
        "alternateName": "Sintegra Sistemas Integrales",
        "url": "https://sistemasintegrados.online",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sistemasintegrados.online/images/new-logo-3.png"
        },
        "description": "Sintegra desarrolla sistemas integrales para digitalizar, conectar y supervisar procesos de gobierno. Plataformas web y móviles para la gestión pública.",
        "sameAs": [
          // "https://twitter.com/Sintegra",
          // "https://www.linkedin.com/company/sintegra"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "name": "Sintegra Tesorería",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "MXN"
        },
        "publisher": {
          "@id": "https://sistemasintegrados.online/#organization"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sistemasintegrados.online/#website",
        "url": "https://sistemasintegrados.online",
        "name": "Sintegra",
        "publisher": {
          "@id": "https://sistemasintegrados.online/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

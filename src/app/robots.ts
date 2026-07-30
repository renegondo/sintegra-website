import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://sistemasintegrados.online";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/acceso", // No tiene caso que los bots indexen el login a menos que se quiera por marca
        "/api/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

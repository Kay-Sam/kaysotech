import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/services"].map((url) => ({ url: `https://www.kaysotech.com.ng${url}` }));
}

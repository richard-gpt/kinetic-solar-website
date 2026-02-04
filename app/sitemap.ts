import { MetadataRoute } from "next";
import { getAllRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kineticsolar.com";
  const routes = getAllRoutes();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.split("/").length === 2 ? 0.8 : 0.6,
  }));
}

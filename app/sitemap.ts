
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [''].map(
    (route) => ({
      url: `https://cloud-cost-lens.vercel.app${route}`, // 👈 Live URL yahan update ki hai
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    })
  )
 
  return routes
}
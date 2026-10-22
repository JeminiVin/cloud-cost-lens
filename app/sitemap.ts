import { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [''].map(
    (route) => ({
      url: `https://cloudcostlens.com${route}`,
      lastModified: new Date(), // Date object direct use karein ya string
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    })
  )
 
  return routes
}
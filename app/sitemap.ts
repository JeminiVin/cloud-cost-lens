import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Hamare saare dynamic urls array mapping
  const routes = ['', '/compare/aws-vs-vercel', '/compare/supabase-vs-firebase'].map(
    (route) => ({
      url: `https://vercel.app${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  )
 
  return routes
}
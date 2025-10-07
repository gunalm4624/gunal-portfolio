import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/manage-works', '/admin'],
    },
    sitemap: 'https://gunalm.in/sitemap.xml',
  }
}

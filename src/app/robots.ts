//TODO: review this file once the project is finished

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/workspace/',
      },
      sitemap: 'https://www.lukaszmaraj.es/sitemap.xml',
   }
}
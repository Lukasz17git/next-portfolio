//TODO: review this file once the project is finished

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: 'https://www.lukaszmaraj.es/',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 1,
      },
      {
         url: 'https://www.lukaszmaraj.es/about',
         lastModified: new Date(),
         changeFrequency: 'yearly',
         priority: 1,
      },
      {
         url: 'https://www.lukaszmaraj.es/projects',
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 0.8,
      },
   ]
}
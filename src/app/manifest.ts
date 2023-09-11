//TODO: review this file once the project is finished

import { MetadataRoute } from 'next'
import { theme } from '@/theme'

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: 'Lukasz Maraj Portfolio, Works and Projects',
      short_name: 'Lukasz Maraj Portfolio',
      description: 'Soy Lukasz Maraj y soy un desarrollador Full-Stack que ha estado envuelto en la creación de varios tipos de apps y páginas web. Écha un vistazo a mis proyectos y si te gusta lo que hago no dudes en contactarme.',
      start_url: '/',
      display: 'standalone',
      background_color: theme.dark,
      theme_color: theme.orange,
      icons: [
         {
            src: '/favicon.ico',
            sizes: 'any',
            type: 'image/x-icon',
         },
      ],
   }
}
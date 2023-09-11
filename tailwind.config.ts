import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import { microtailwind, addUtilitesWithDarkMode, withMicrotailwindExtensions } from 'microtailwind'
import { theme } from './src/theme'

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: withMicrotailwindExtensions({
         colors: {
            ...theme,
         },
         fontFamily: {
            sans: 'var(--font-nunito)',
            abril: 'var(--font-abril)',
         },
      }),
   },
   plugins: [
      plugin(microtailwind),
      plugin(({ addBase }) => {
         addBase({
            ':root': {
               '@apply tf-sans': {}
            },
            'h1': {
               '@apply ts-48. tw-black': {}
            },
            'h2': {
               '@apply ts-32. tw-black': {}
            },
            'h3': {
               '@apply ts-24. tw-bold': {}
            },
            'strong': {
               '@apply tw-black': {}
            },
            'b': {
               '@apply tw-bold': {}
            },
            'p': {
               '@apply ts-16.': {}
            },
            'small': {
               '@apply ts-14.': {}
            },
            'q': {
               '@apply ts-12.': {}
            }
         })
      })],
}

export default config

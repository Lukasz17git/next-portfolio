
import { Nunito_Sans, Abril_Fatface } from 'next/font/google'

export const nunito = Nunito_Sans({
   subsets: ['latin'],
   variable: '--font-nunito',
   weight: ["400", "700", "900"],
})

export const abril = Abril_Fatface({
   subsets: ['latin'],
   variable: '--font-abril',
   weight: ["400"],
})
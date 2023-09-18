"use client"

import { useEffect } from "react"

const Footer = () => {

   console.log('Footer rendered')
   useEffect(() => {
      console.log('Footer mounted')
      return () => {
         console.log('Footer unmounted')
      }
   }, [])

   return (
      <div>
         <footer className="bg-[#040114]">
            <section className="fwc gap-32 ts-15 md:frcb to-90 tc-white">
               This is the footer component
            </section>
         </footer>
      </div>
   )
}
export default Footer
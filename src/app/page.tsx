"use client"

import Button from "@/_components_/Button"

export default function Home() {

   console.log('home rendered')

   return (
      <div className='frcc tf-sans'>
         Hello World
         <h1>Test</h1>
         <h2 className='tf-abril'>Abril</h2>
         <Button />
      </div>
   )
}

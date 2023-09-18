"use client"

import { useState } from 'react'

const Button: React.FC<{ name: string }> = ({ name }) => {
   console.log('Button')
   const [counter, setCounter] = useState(0)

   return (
      <div>
         <div>{`count number: ${counter}`}</div>
         <button onClick={() => setCounter(counter + 1)}>
            {`Click me ${name}`}
         </button>
      </div>
   )
}
export default Button
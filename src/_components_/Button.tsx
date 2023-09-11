import { useState } from 'react'

const Button = () => {
   console.log('Button')
   const [counter, setCounter] = useState(0)


   return (
      <div>
         <div>{`count number: ${counter}`}</div>
         <button onClick={() => setCounter(counter + 1)}>Click me</button>
      </div>
   )
}
export default Button
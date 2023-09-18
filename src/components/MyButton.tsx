import { useState } from "react"


const MyButton = () => {
   const [count, setCount] = useState(0)

   const handleClick = () => {
      setCount(count + 1)
   }

   console.log('rendered my button in components folder')

   return (
      <button onClick={handleClick}>
         {`clicks: ${count}`}
      </button>
   )
}
export default MyButton
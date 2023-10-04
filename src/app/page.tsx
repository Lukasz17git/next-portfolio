import Button from "@/_components_/Button"
import MyButton from "@/components/MyButton"

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

export default function Home() {

   const name = 'lucas'

   console.log('Home rendered', name)

   return (
      <div className='frcc tf-sans'>
         Hello World
         <h1>Test</h1>
         <h2 className='tf-abril'>Abril</h2>
         <Button name={name} />
         <MyButton />
      </div>
   )
}

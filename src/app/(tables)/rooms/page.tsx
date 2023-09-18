import Link from "next/link"


const Rooms = () => {
   console.log('rooms rendered')
   return (
      <div>
         <h2>Rooms</h2>
         <div className="frcc p-16. bc-slate-500 br-6.">
            <div>
               <b>Go to Room:</b>
               <Link href="/rooms/1">Room 1</Link>
            </div>
         </div>
      </div>
   )
}
export default Rooms
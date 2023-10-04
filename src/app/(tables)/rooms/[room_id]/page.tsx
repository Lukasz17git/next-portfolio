
export async function generateStaticParams() {
   return [{ room_id: '1' }, { room_id: '2' }, { room_id: '3' }, { room_id: '4' }, { room_id: '5' }]
}

const page: React.FC<{ params: { room_id: string } }> = ({ params }) => {
   console.log('params', params)
   return (
      <div>
         <h3>My room</h3>
         <p>Room id: {params.room_id}</p>
      </div>
   )
}

export default page
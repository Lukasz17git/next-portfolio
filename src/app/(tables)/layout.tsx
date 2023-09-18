import { Children } from "@/types/helpers"


const TablesLayout: React.FC<Children> = ({ children }) => {
   return (
      <div className="tables-layout">
         <div>Rooms Layout</div>
         {children}
      </div>
   )
}
export default TablesLayout
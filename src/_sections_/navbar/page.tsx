"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {

   const [show, setShow] = useState(false)
   const toggleNavbar = () => setShow(!show)
   const hideNavbar = () => show && setShow(!show)

   return (
      <nav className="pos-f z-10 w-100% bg-[#0f0b29] border-b-[1px] border-opacity-8 border-white py-6. px-16.">
         <div className={"max-w-[1400px] w-100p m-a fr md:g-40 animate-navbar oh " + (show ? ' max-h-[26rem]' : ' max-h-40')} onClick={hideNavbar}>
            <Link href="/">
               <Image
                  src="/images/logo.svg"
                  alt="Lukasz Maraj"
                  width={76}
                  height={32}
                  className="h-40 w-[57px] py-8 select-none"
               />
            </Link>
         </div>
      </nav >
   )
}

export default Navbar
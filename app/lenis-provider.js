'use client'
import { ReactLenis } from "@studio-freight/react-lenis"

function LenisProvider({children}) {
  return (
   <ReactLenis root>
    {children}
   </ReactLenis>
  )
}

export default LenisProvider
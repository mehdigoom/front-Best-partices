import React from "react"
import Members from './js/components/members'
interface testProps {
    test:string
}

export default (props: testProps) => {
   return(
       <div>
           <Members/>
       </div>
   ) 
}
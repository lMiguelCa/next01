/*"use client"*/
/*"use client"
import { useState } from "react"*/
/*"use client"*/

import Users from "@/components/Users"
export const metadata ={
    title: 'Mi pagina especial HOme'
}
export default function HomePage(){
    //server componente
    return <section>
        {/*<h1>Hola shupapi</h1>*/} 

        {/*<button onClick={()=> {
            alert('Hola')
       }}>          Click
        </button>*/} 

        {/*{
            window.localStorage.getItem('token')
        }*/} 
        <Users/> {/* clien componente, cliente componente*/} 
    </section>
}


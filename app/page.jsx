/*"use client"*/
/*"use client"
import { useState } from "react"*/
"use client"

import Users from "../components/Users"

export default function HomePage(){
    return <section>
        <h1>Hola shupapi</h1>

        {/*<button onClick={()=> {
            alert('Hola')
       }}>          Click
        </button>*/} 

        {
            window.localStorage.getItem('token')
        }
        <Users/>
    </section>
}
import { useEffect } from "react"

 function Users() {
    useEffect(()=>{
        alert('cargando')
    },[])
    return (
        <div>Users</div>
    )
}

export default Users
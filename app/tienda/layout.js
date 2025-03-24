import Link from "next/link";


export default function TiendaLayout({children}){
    return (<>

            <nav>
                <h1>Seccion Tienda</h1>

                <ul>
                    <li><Link href="/tienda/categoria">Categoria</Link></li>
                    <li><Link href="/tienda/categoria/computadoras">Computadoras</Link></li>

                </ul>
            </nav>

        {children}
        </>
    );
}
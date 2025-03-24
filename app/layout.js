import NavbarPage from '../components/Navbar';

export const metadata = {
  title: "Mi prueba 01",
  description: "Ela pagian Prinicpal",
  keywords: "tienda, online,ecommerce",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <NavbarPage/>
        {children}
      </body>
    </html>
  )
}

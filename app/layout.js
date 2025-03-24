import NavbarPage from '../components/Navbar';
import {Roboto} from 'next/font/google'


export const metadata = {
  title: "Mi prueba 01",
  description: "Ela pagian Prinicpal",
  keywords: "tienda, online,ecommerce",
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <NavbarPage/>
        {children}
      </body>
    </html>
  )
}

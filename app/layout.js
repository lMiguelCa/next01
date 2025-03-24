
import Link from 'next/link'
import NavbarPage from '../components/Navbar';

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

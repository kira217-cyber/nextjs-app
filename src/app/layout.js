"use client"

import { SessionProvider } from "next-auth/react"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import './globals.css'

// export const metadata = {
//   title: 'My Store',
//   description: 'Best products online',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}

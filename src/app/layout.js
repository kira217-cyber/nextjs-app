"use client"

import { SessionProvider } from "next-auth/react"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import './globals.css'
import { Toaster } from "react-hot-toast"

// export const metadata = {
//   title: 'My Store',
//   description: 'Best products online',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Toaster position="top-right" />
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}

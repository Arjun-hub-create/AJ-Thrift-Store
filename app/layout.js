import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "AJ'S Thrift Store - Premium Fashion at Unbeatable Prices",
  description: 'Shop the latest trends in caps, hoodies, joggers, pants, and more at AJS Thrift Store. Quality fashion for everyone.',
  keywords: 'thrift store, fashion, clothing, caps, hoodies, joggers, pants, women fashion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedBackground />
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen pt-20 relative">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}

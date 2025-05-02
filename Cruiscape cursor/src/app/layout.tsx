import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cruiscape - Luxury Dinner Cruises in Goa',
  description: 'Experience the best dinner cruises in Goa with Cruiscape. Book your luxury cruise experience today.',
  keywords: 'dinner cruise, goa cruise, luxury cruise, boat dinner, mandovi river cruise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  )
} 
import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import background from '../public/background.png'
import Header from '@/components/header'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bay cung ban',
  description: 'Bay cung ban',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  min-h-screen mx-auto bg-[#F4F2F9]`}>
        <Header />
        <main className="flex flex-col items-center justify-between  mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

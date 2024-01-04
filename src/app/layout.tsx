'use client'
import './globals.css'
import Providers from './provider'
import MainNav from 'components/ui/menubar'
import { Inter } from 'next/font/google'
import LocaleSwitcher from '@/src/components/LocalSwitcher'
import { ModeToggle } from '@/components/ui/mode-toggle'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>
        <Providers>
          <ModeToggle />

          {/* <MainNav /> */}
          {/* <LocaleSwitcher /> */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
